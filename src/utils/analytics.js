// utils/analytics.js - Analytics tracker for TaskVista
export class AnalyticsTracker {
  constructor(projectName = 'taskvista', apiUrl = 'http://localhost:8000') {
    this.projectName = projectName;
    this.apiUrl = apiUrl;
    this.sessionId = this.getOrCreateSessionId();
    this.startTime = Date.now();
  }

  getOrCreateSessionId() {
    if (typeof window === 'undefined') return null;

    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  async trackPageView(pageUrl = window.location.pathname) {
    if (typeof window === 'undefined') return;

    try {
      await fetch(`${this.apiUrl}/api/track/visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_name: this.projectName,
          ip_address: await this.getClientIP(),
          user_agent: navigator.userAgent,
          page_url: pageUrl,
          session_id: this.sessionId
        })
      });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  async trackError(error, context = {}) {
    if (typeof window === 'undefined') return;

    const severity = this.determineSeverity(error);

    try {
      await fetch(`${this.apiUrl}/api/track/error`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_name: this.projectName,
          error_type: error.name || 'Unknown Error',
          error_message: error.message || 'No message available',
          stack_trace: error.stack || '',
          severity: severity,
          timestamp: new Date().toISOString(),
          ...context
        })
      });
    } catch (trackingError) {
      console.error('Failed to track error:', trackingError);
    }
  }

  async trackReview(reviewerName, reviewText, rating = null) {
    if (typeof window === 'undefined') return;

    try {
      await fetch(`${this.apiUrl}/api/track/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_name: this.projectName,
          reviewer_name: reviewerName,
          review_text: reviewText,
          rating: rating,
          timestamp: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error('Failed to track review:', error);
    }
  }

  async trackLogin(username) {
    if (typeof window === 'undefined') return;

    try {
      await fetch(`${this.apiUrl}/api/track/visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_name: this.projectName,
          ip_address: await this.getClientIP(),
          user_agent: navigator.userAgent,
          page_url: '/login',
          session_id: this.sessionId,
          custom_event: 'login',
          username: username
        })
      });
    } catch (error) {
      console.error('Failed to track login:', error);
    }
  }

  determineSeverity(error) {
    const message = error.message?.toLowerCase() || '';

    if (message.includes('network') || message.includes('fetch')) {
      return 'medium';
    } else if (message.includes('syntax') || message.includes('reference')) {
      return 'high';
    } else {
      return 'low';
    }
  }

  async getClientIP() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return 'unknown';
    }
  }

  trackPerformance() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const loadTime = Date.now() - this.startTime;
        console.log(`Page load time: ${loadTime}ms`);
      }, 0);
    });
  }
}