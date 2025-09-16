import React from 'react';
import { motion } from 'framer-motion';

export default function TechMarquee() {
  

  const techItems = [
    { name: 'VS Code', category: 'Editor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Atom', category: 'Editor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg' },
    { name: 'IntelliJ IDEA', category: 'IDE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { name: 'WebStorm', category: 'IDE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg' },
    { name: 'Sublime Text', category: 'Editor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sublimetext/sublimetext-original.svg' },
    { name: 'Python', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', category: 'Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', category: 'Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', category: 'Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', category: 'Platform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  return (
    <div className=" xl:mx-16 relative  w-[140vh] max-w-6xl flex-col items-center  overflow-hidden py-8">
      <h2 className=" text-3xl font-bold text-center mb-6 text-transparent text-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Compatible with TaskVista</h2>

      {/* First row - moving left */}
      <div className="flex w-full overflow-hidden" style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}>
        <motion.div
          className="flex py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            }
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ willChange: 'transform' }}
        >
          {[...techItems, ...techItems].map((item, index) => (
            <motion.div
              key={index}
              className="flex shrink-0 px-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.div
                className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 sm:px-6 py-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer min-w-0"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  WebkitBoxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  minWidth: '200px'
                }}
              >
                <motion.img
                  className="h-8 w-8 rounded-full hover:animate-spin"
                  src={item.icon}
                  alt={`${item.name} logo`}
                  whileHover={{
                    scale: 1.2,
                    filter: 'brightness(1.3) saturate(1.5) drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{item.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.category}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second row - moving right */}
      <div className="flex w-full overflow-hidden mt-6" style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}>
        <motion.div
          className="flex py-2"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 38,
              ease: "linear",
            }
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ willChange: 'transform' }}
        >
          {[...techItems, ...techItems].map((item, index) => (
            <motion.div
              key={index}
              className="flex shrink-0 px-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <motion.div
                className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 sm:px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer min-w-0"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  WebkitBoxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                }}
              >
                <motion.img
                  className="h-8 w-8 rounded-full hover:animate-spin"
                  src={item.icon}
                  alt={`${item.name} logo`}
                  whileHover={{
                    scale: 1.2,
                    filter: 'brightness(1.3) saturate(1.5) drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{item.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.category}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}