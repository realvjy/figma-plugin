import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0: // Top
      return { x: offset, y: 0, angle: 45 };
    case 1: // Right
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2: // Bottom
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3: // Left
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

const ShootingStars: React.FC = () => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * 20 + 10, // Increased speed range
        distance: 0,
      };
      setStar(newStar);

      // Set a random delay (between 0.5 and 4 seconds) for creating the next star
      const randomDelay = Math.random() * 4500 + 4200;
      setTimeout(createStar, randomDelay);
    };

    createStar(); // Initial star creation

    return () => {}; // No cleanup needed for timeout
  }, []);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100; // Adjust scale based on distance traveled
          // Check if the star is out of bounds considering the star size
          if (
            newX < -20 ||
            newX > window.innerWidth + 20 ||
            newY < -20 ||
            newY > window.innerHeight + 20
          ) {
            return null; // Star moves out of bounds, remove it
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={10 * star.scale}
          height="2"
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (10 * star.scale) / 2
          }, ${star.y + 1})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#b4f2ff", stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#48dcf9", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ShootingStars;
