import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center">
      {/* 艺术字体名字动画 */}
      <div className="flex items-center gap-4 mb-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: [-50, 0, 0, 50],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl font-bold text-white font-serif"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'Playfair Display, serif'
          }}
        >
          Tingni
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [50, 0, 0, -50],
            rotateX: [90, 0, 0, -90]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="text-6xl font-bold text-white"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'Cinzel, serif'
          }}
        >
          LI
        </motion.h1>
      </div>

      {/* 加载点动画 */}
      <div className="flex gap-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: [-10, 0, -10] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="w-4 h-4 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading; 