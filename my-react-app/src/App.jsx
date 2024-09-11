import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const CelebrationComponent = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  // Optionally stop confetti after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default CelebrationComponent;
