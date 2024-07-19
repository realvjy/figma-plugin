import React, { useState, useEffect, useRef, RefObject } from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  initialOpacity: number;
  twinkleSpeed: number;
}

const Star: React.FC<StarProps> = ({
  x,
  y,
  radius,
  initialOpacity,
  twinkleSpeed,
}) => (
  <circle cx={x} cy={y} r={radius} fill="white">
    <animate
      attributeName="opacity"
      values={`${initialOpacity};${initialOpacity * 0.3};${initialOpacity}`}
      dur={`${twinkleSpeed}s`}
      repeatCount="indefinite"
    />
  </circle>
);

interface StarBackgroundProps {
  starDensity?: number;
  twinkleSpeed?: number;
}

const StarBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.0001,
  twinkleSpeed = 0.2,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const containerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const generateStars = (width: number, height: number): StarProps[] => {
    const area = width * height;
    const numStars = Math.floor(area * starDensity);
    return Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 0.2 + 0.5, // Random radius between 1 and 2
      initialOpacity: Math.random() * 0.0 + 1, // Random opacity between 0.5 and 1
      twinkleSpeed: 0.5 + Math.random() * 1.5, // Adjusted for faster twinkling (0.5 to 2 seconds)
    }));
  };

  useEffect(() => {
    const updateStars = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setStars(generateStars(width, height));
      }
    };

    updateStars(); // Initial generation

    const resizeObserver = new ResizeObserver(updateStars);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [starDensity]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <svg
        width="100%"
        height="100%"
        style={{ backgroundColor: "transparent" }}
        preserveAspectRatio="none"
      >
        <rect width="100%" height="100%" fill="none" />
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </svg>
    </div>
  );
};

export default StarBackground;
