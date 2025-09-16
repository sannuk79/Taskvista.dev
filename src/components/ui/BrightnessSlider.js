// BrightnessSlider.js
import React, { useState, useRef, useEffect } from "react";


export default function BrightnessSlider() {
  const [opacity, setOpacity] = useState(0);
  const [open, setOpen] = useState(false);
  const sliderRef = useRef(null);

  // Emoji logic
  let emoji = "💡";
  if (opacity >= 0.7) emoji = "🕶️";
  else if (opacity >= 0.3) emoji = "🌓";

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (
        sliderRef.current &&
        !sliderRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <>
      <div style={styles.overlay(opacity)}></div>
      {/* Toggle Tab */}
      <div
        style={{
          ...styles.tab,
          right: open ? 125 : 0, // tab moves with panel
          transform: open ? "translateX(0)" : "translateX(0)",
        }}
        onClick={() => setOpen((o) => !o)}
        title="Eye Comfort"
      >
        <span style={{ fontSize: 22 }}>{emoji}</span>
      </div>
      {/* Slider Sidebar */}
      <div
        ref={sliderRef}
        style={{
          ...styles.sliderBox,
          transform: open ? "translateX(0)" : "translateX(130px)",
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={e => e.stopPropagation()} // Prevent propagation inside box
      >
        <div style={{ fontSize: 12, color: "#333", marginBottom: 2, fontWeight: 600, textAlign: "center" }}>
          {/* <img src={logo} alt="logo" style={{ width: 20, height: 20, marginBottom: 2 }} /> */}
          Eye Comfort
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontSize: 22, marginBottom: 6 }}>{emoji}</span>
          <input
            type="range"
            min="0"
            max="0.8"
            step="0.05"
            value={opacity}
            onChange={e => setOpacity(parseFloat(e.target.value))}
            style={styles.verticalSlider}
            orient="vertical"
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  overlay: (opacity) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    pointerEvents: "none",
    zIndex: 9996,
    transition: "background-color 0.3s ease",
  }),
  tab: {
    position: "fixed",
    bottom: 30,
    right: 0,
    width: 45,
    height: 55,
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(15px)",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10001,
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  sliderBox: {
    position: "fixed",
    bottom: 30,
    right: 30,
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(15px)",
    padding: "15px 12px 12px 12px",
    borderRadius: "15px",
    zIndex: 10000,
    width: 100,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  verticalSlider: {
    writingMode: "vertical-lr",
    direction: "rtl",
    width: 24,
    height: 90,
    margin: 0,
    accentColor: "#2563eb",
    cursor: "pointer",
  },
};