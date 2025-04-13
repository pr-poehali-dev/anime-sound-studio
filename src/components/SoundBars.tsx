import { useEffect, useState } from "react";

const SoundBars = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const barCount = 5;
  
  useEffect(() => {
    // Для имитации анимации звуковых волн
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-end h-8">
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className={`sound-bar ${isAnimating ? "animate-sound-wave" : ""}`}
          style={{
            height: `${Math.max(8, Math.random() * 24)}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SoundBars;