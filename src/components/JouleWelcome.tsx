import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function JouleWelcome() {
  const helpTexts = [
    'help',
    'assist',
    'guide',
    'support',
    'serve'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % helpTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-[50.63%] content-stretch flex gap-[10px] items-center justify-center left-[-0.13px] top-[11.39%]">
      <div className="flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-nowrap text-white tracking-[-1px]">
        <p className="leading-[60px] whitespace-pre">How can I</p>
      </div>
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic absolute text-[42px] text-nowrap text-white tracking-[-1px]"
          >
            <p className="leading-[60px] whitespace-pre">{helpTexts[currentIndex]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-nowrap text-white tracking-[-1px]">
        <p className="leading-[60px] whitespace-pre">you?</p>
      </div>
    </div>
  );
}

function AnimatePresence({ children, mode }: { children: React.ReactNode, mode?: string }) {
  return <>{children}</>;
}

export function JouleDiamond() {
  return (
    <div className="ml-[148px] mt-[54px] overflow-clip relative size-[120px]">
      {/* Diamond with shine animation */}
      <motion.div 
        className="absolute inset-[30.83%_11.67%_1.67%_20%]"
        animate={{
          filter: [
            'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))',
            'drop-shadow(0 0 0px rgba(255, 255, 255, 0))'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 81">
          <path 
            clipRule="evenodd" 
            d="M22.6026 0C21.3357 0 20.1364 0.571474 19.3379 1.5556L0.940493 24.23C-0.267554 25.7189 -0.316635 27.8368 0.821143 29.3802L37.616 79.2901C38.4087 80.3654 39.6647 81 41 81C42.3353 81 43.5913 80.3654 44.384 79.2901L81.1789 29.3802C82.3166 27.8368 82.2676 25.7189 81.0595 24.23L62.6621 1.5556C61.8636 0.571474 60.6643 0 59.3974 0H22.6026ZM64.3249 26.5392C55.643 25.0748 52.8647 18.2489 51.9469 13.9797C51.8477 13.5577 51.302 13.5825 51.2276 14.0045C49.764 22.6919 42.9425 25.4719 38.6759 26.3903C38.2543 26.4896 38.2791 27.0357 38.7008 27.1101C47.3827 28.5746 50.1609 35.4004 51.0787 39.6697C51.178 40.0917 51.7237 40.0668 51.7981 39.6449C53.2616 30.9574 60.0832 28.1774 64.3497 27.259C64.7714 27.1598 64.7466 26.6137 64.3249 26.5392Z" 
            fill="white" 
            fillRule="evenodd"
          />
        </svg>
      </motion.div>
      
      {/* Stars with rotation */}
      <motion.div 
        className="absolute inset-[16.75%_8.25%_68.75%_77%]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path 
            d="M9.14235 0.201357C9.76046 3.02603 11.6315 7.54221 17.4785 8.51114C17.7625 8.56041 17.7792 8.9217 17.4952 8.98739C14.6218 9.59503 10.0277 11.4343 9.04211 17.1822C8.99199 17.4614 8.62447 17.4778 8.55765 17.1986C7.93954 14.374 6.06851 9.85779 0.221534 8.88886C-0.0624618 8.83959 -0.0791678 8.4783 0.204828 8.41261C3.0782 7.80497 7.67225 5.96565 8.65788 0.217779C8.708 -0.061404 9.07553 -0.0778253 9.14235 0.201357Z" 
            fill="white"
          />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[78.25%] left-[24%] right-[54.25%] top-0"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path 
            d="M13.4811 0.302036C14.3925 4.53904 17.1515 11.3133 25.7733 12.7667C26.1921 12.8406 26.2167 13.3826 25.798 13.4811C21.561 14.3925 14.7867 17.1515 13.3333 25.7733C13.2594 26.1921 12.7174 26.2167 12.6189 25.798C11.7075 21.561 8.94848 14.7867 0.326669 13.3333C-0.0921047 13.2594 -0.116739 12.7174 0.302035 12.6189C4.53904 11.7075 11.3133 8.94848 12.7667 0.326668C12.8406 -0.0921059 13.3826 -0.116738 13.4811 0.302036Z" 
            fill="white"
          />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute inset-[21.75%_79%_63.5%_6.5%]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path 
            d="M8.98739 0.204829C9.59503 3.0782 11.4343 7.67225 17.1822 8.65788C17.4614 8.708 17.4778 9.07552 17.1986 9.14235C14.374 9.76046 9.85779 11.6315 8.88886 17.4785C8.83959 17.7625 8.4783 17.7792 8.41261 17.4952C7.80497 14.6218 5.96565 10.0277 0.217779 9.04211C-0.0614032 8.992 -0.077826 8.62447 0.201356 8.55765C3.02603 7.93954 7.54221 6.06851 8.51114 0.221533C8.56041 -0.0624626 8.9217 -0.0791671 8.98739 0.204829Z" 
            fill="white"
          />
        </svg>
      </motion.div>
    </div>
  );
}
