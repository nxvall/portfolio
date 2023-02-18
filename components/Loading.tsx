import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { svgAnimation } from '@/data/animations';

export default function Loading() {
  const [show, setShow] = useState(true);
  setTimeout(() => setShow(false), 300);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {/* if you want to create svg https://danmarshall.github.io/google-font-to-svg-path/ */}
      <svg
        width="165.4"
        height="70"
        viewBox="0 0 165.4 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <AnimatePresence>
          {show && (
            <motion.path
              {...svgAnimation}
              d="M 9 70 L 0 70 L 0 0 L 12.6 0 L 43.5 58.2 L 43.5 0 L 52.5 0 L 52.5 70 L 40.1 70 L 9 12.2 L 9 70 Z M 92.8 70 L 83.4 70 L 62.5 20.4 L 70.7 17 L 88.4 59.8 L 106.1 17 L 113.8 20.4 L 92.8 70 Z M 165.4 70 L 123.8 70 L 123.8 0 L 133.3 0 L 133.3 61.5 L 165.4 61.5 L 165.4 70 Z"
              strokeWidth="4"
              className="stroke-primary-light"
            />
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}
