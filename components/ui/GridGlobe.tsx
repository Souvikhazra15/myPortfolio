"use client";

/**
 * GlobeDemo - Placeholder for 3D Globe visualization
 * TODO: Add Three.js globe when three-globe compatibility is fixed
 */
export const GlobeDemo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-full h-full flex items-center justify-center opacity-50">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default GlobeDemo;
