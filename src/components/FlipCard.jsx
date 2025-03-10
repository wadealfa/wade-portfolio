import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FlipCard({isFlipped, setIsFlipped}) {
  const frontContent = "Hi, I'm Wanjohi Gakuya";
  const frontSubtitle = "Frontend Engineer";
  const backContent = "I'm a Frontend Engineer specializing in creating responsive and user-friendly web applications. With a year of professional experience, I focus on building clean, efficient, and maintainable code using modern web technologies.";

  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    setIsContentVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  };

  return (
    <div className="w-full h-96 cursor-pointer perspective-1000">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full h-full transform-style-3d transition-transform duration-700"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <AnimatePresence mode="wait">
          {!isFlipped && (
            <motion.div
              className="absolute w-full h-full backface-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div 
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('/image7.png')`,
                }}
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl flex flex-col justify-center items-center p-8 text-white text-center border border-gray-700 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <motion.div className="space-y-6">
                  <motion.h1 
                    variants={textVariants}
                    custom={0}
                    className="text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient"
                  >
                    {frontContent}
                  </motion.h1>
                  <motion.p 
                    variants={textVariants}
                    custom={1}
                    className="text-2xl text-gray-200 font-light"
                  >
                    {frontSubtitle}
                  </motion.p>
                  <motion.div
                    variants={textVariants}
                    custom={2}
                  >
                    <span className="px-4 py-2 rounded-full border border-gray-500 text-sm hover:bg-white/10 transition-colors hover:border-blue-400">
                      Click to learn more →
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {isFlipped && (
            <motion.div
              className="absolute w-full h-full backface-hidden"
              style={{ transform: 'rotateY(180deg)' }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl p-12 text-white flex flex-col justify-center items-center relative overflow-hidden border border-gray-700"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url('/image5.png')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 backdrop-blur-sm"></div>
                <motion.div 
                  className="relative z-10 space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.p 
                    className="text-xl leading-relaxed font-light"
                    variants={textVariants}
                    custom={0}
                  >
                    {backContent}
                  </motion.p>
                  <motion.span 
                    variants={textVariants}
                    custom={1}
                    className="inline-block px-4 py-2 rounded-full border border-gray-500 text-sm hover:bg-white/10 transition-colors hover:border-blue-400"
                  >
                    ← Back to intro
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FlipCard;