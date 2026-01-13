import React from 'react';

// --- 1. ASSETS & TEXTURES ---

// Premium Grain Texture
const GrainOverlay = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-[5] mix-blend-multiply">
    <svg className='w-full h-full'>
      <filter id='noiseFilter'>
        <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  </div>
);

// --- 2. CUSTOM SVG COMPONENTS (Reused) ---

const WatercolorFlower = ({ size = 60, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g opacity="0.9">
      <path d="M48.9917 13.0005C53.3484 11.2663 63.0509 15.5615 66.1687 18.6323C71.6643 24.0454 76.9052 29.558 81.3783 35.6995C83.8511 39.0943 90.9806 45.5207 89.0956 51.1348C87.7267 55.2118 81.6216 58.0216 77.1573 59.8966C70.7684 62.5801 65.0526 67.4995 57.8331 69.8126C51.4434 71.8598 43.9079 70.0986 37.5102 67.8527C28.1284 64.5588 17.6638 61.0754 13.802 50.9573C11.2304 44.219 15.9669 36.2012 20.9287 30.8156C25.4686 25.8878 31.0607 21.6806 37.4754 17.9437C39.8488 16.561 43.4422 15.2089 48.9917 13.0005Z" fill="#E88D46" fillOpacity="0.3"/>
      <path d="M57.3052 27.657C61.1345 26.6369 67.4721 29.2255 70.1675 31.1365C75.2146 35.0684 79.8426 39.4264 83.3226 44.6453C84.6916 48.6381 81.4458 51.2176 78.7189 52.9447C73.8758 56.0113 69.8731 60.6846 63.851 62.3231C58.8157 63.6929 51.4567 63.1686 46.7893 60.5091C39.8361 56.5477 33.6275 51.6311 30.2634 42.2621C28.9649 38.6454 31.5672 34.5594 34.866 31.2256C38.1227 27.9336 41.7769 24.6924 46.5152 22.3702C49.3114 21.0001 53.2053 28.7497 57.3052 27.657Z" fill="#E88D46" fillOpacity="0.5"/>
      <path d="M63.7293 41.8118C66.8153 42.4276 68.4235 47.1567 68.3106 50.4988C68.1016 56.6864 66.0603 62.8378 61.4277 67.1532C57.5199 70.7938 50.9575 71.3491 46.1014 68.9076C41.5581 66.6241 37.8638 62.9967 34.6401 58.3236C31.2383 53.393 31.6509 45.8234 34.9957 40.9629C38.5356 35.8199 43.9494 31.7259 49.4221 29.3028C51.3103 28.4669 54.0824 26.1412 57.0204 25.1936C60.4128 24.0992 59.9665 41.0608 63.7293 41.8118Z" fill="#E88D46" fillOpacity="0.7"/>
      <path d="M50.6405 48.9717C52.4852 49.8447 53.0248 53.0875 52.5804 55.1939C51.4015 60.7804 48.3755 66.1884 44.1068 69.7562C41.5757 71.8724 36.3525 71.726 34.0968 68.4618C32.6162 66.3189 32.0625 63.1832 32.123 60.5405C32.2381 55.5133 34.2238 50.1633 38.4904 46.877C42.0443 44.1403 45.9399 40.5314 50.2302 39.2873C53.2807 38.4029 56.8584 37.2995 59.2113 38.6274C63.3729 40.9759 56.4325 42.9508 57.4869 45.8697C58.4388 48.5049 57.5292 50.1295 54.9476 50.502C53.3021 50.7393 51.6979 50.3733 50.0831 50.7071C48.7487 50.9829 48.6113 48.0117 50.6405 48.9717Z" fill="#E88D46"/>
    </g>
  </svg>
);

const WatercolorLeafBranch = ({ size = 60, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g opacity="0.8">
    <path d="M45.2236 84.5136C47.0147 79.7165 48.3454 74.6292 49.7052 69.5112C51.9788 60.9542 53.6457 52.2145 55.4686 43.5137C57.7054 32.8389 59.918 22.1596 63.0468 11.7623C63.6356 9.80562 65.0415 6.64057 63.706 4.98169C62.4334 3.40087 59.3889 5.24339 57.9421 6.56823C51.7973 12.1956 47.0739 19.4304 43.3076 26.9583C39.1378 35.2935 35.171 44.2163 33.5564 53.5095C32.4762 59.7276 32.0251 66.5944 34.6966 72.2191C36.6612 76.3546 39.438 80.5343 43.4118 82.9275C44.1497 83.372 44.5861 86.2212 45.2236 84.5136Z" fill="#4A6741" fillOpacity="0.4"/>
    <path d="M53.8522 47.558C57.2987 45.8701 61.3833 45.4565 64.9625 44.2602C72.8863 41.6113 81.3847 38.002 88.2434 33.0606C89.713 32.0015 92.5444 30.122 91.3901 28.5178C90.2296 26.9046 86.6053 28.3979 84.7427 29.0912C76.588 32.1265 67.1954 34.3262 59.3148 37.7588C51.7935 41.035 45.1174 45.5513 39.7066 51.2111C38.342 52.6384 36.9983 54.9288 38.3244 56.6946C40.2402 59.2461 45.541 54.2258 47.8538 52.326C50.0472 50.5238 51.7395 48.5929 53.8522 47.558Z" fill="#4A6741" fillOpacity="0.6"/>
    <path d="M46.4751 28.6152C42.7125 29.4532 38.6979 30.339 35.0581 31.7365C27.0002 34.8308 18.4367 38.4793 11.7175 44.0728C10.2776 45.2713 7.52082 47.3929 8.87973 48.8277C10.2455 50.2695 13.8303 48.4765 15.6556 47.6377C23.6457 43.9661 32.9189 40.9877 40.5342 36.869C47.8013 32.9388 53.9948 27.8378 58.9737 21.7794C60.2294 20.2515 61.4042 17.8292 59.9122 16.1977C57.7566 13.8411 53.1715 19.6273 51.076 21.826C49.0889 23.9108 48.1229 28.2482 46.4751 28.6152Z" fill="#4A6741" fillOpacity="0.6"/>
    </g>
    </svg>
);

// --- 3. ANIMATION & CONFIGURATION ---

// More organic, multi-directional drift animations
const driftAnimations = `
  @keyframes driftSlow {
    0% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(30px, -20px) rotate(5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
  @keyframes driftMedium {
    0% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-20px, -40px) rotate(-5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
    @keyframes driftFast {
    0% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(10px, 30px) rotate(3deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
`;

const backgroundLayers = [
  // === LAYER 1: DEEP BACKGROUND (Blurred, small, slow) ===
  { Component: WatercolorFlower, size: 80, style: { top: '15%', left: '20%' }, animation: 'driftSlow 25s ease-in-out infinite', className: "opacity-[0.15] blur-[3px]" },
  { Component: WatercolorLeafBranch, size: 100, style: { top: '30%', right: '25%' }, animation: 'driftSlow 28s ease-in-out infinite reverse', className: "rotate-90 opacity-[0.1] blur-[4px]" },
  { Component: WatercolorFlower, size: 60, style: { bottom: '20%', left: '30%' }, animation: 'driftSlow 30s ease-in-out infinite', className: "opacity-[0.1] blur-[3px]" },

  // === LAYER 2: MID-GROUND CLUSTERS (The main composition) ===
  // Top Right Cluster
  { Component: WatercolorFlower, size: 200, style: { top: '-10%', right: '-5%' }, animation: 'driftMedium 20s ease-in-out infinite', className: "rotate-12 opacity-[0.3]" },
  { Component: WatercolorLeafBranch, size: 180, style: { top: '5%', right: '5%' }, animation: 'driftMedium 22s ease-in-out infinite reverse', className: "-rotate-45 opacity-[0.25]" },
  
  // Bottom Left Cluster
  { Component: WatercolorLeafBranch, size: 220, style: { bottom: '-8%', left: '-6%' }, animation: 'driftMedium 24s ease-in-out infinite', className: "rotate-45 opacity-[0.3]" },
  { Component: WatercolorFlower, size: 150, style: { bottom: '8%', left: '2%' }, animation: 'driftMedium 19s ease-in-out infinite reverse', className: "-rotate-12 opacity-[0.25]" },

  // Side Accents
  { Component: WatercolorLeafBranch, size: 120, style: { top: '40%', left: '-5%' }, animation: 'driftMedium 26s ease-in-out infinite', className: "-rotate-90 opacity-[0.2] blur-[1px]" },
  { Component: WatercolorFlower, size: 100, style: { bottom: '35%', right: '-2%' }, animation: 'driftMedium 23s ease-in-out infinite reverse', className: "rotate-45 opacity-[0.2] blur-[1px]" },


  // === LAYER 3: FOREGROUND (Larger, faster, subtle) ===
  { Component: WatercolorLeafBranch, size: 250, style: { top: '60%', right: '15%' }, animation: 'driftFast 18s ease-in-out infinite', className: "rotate-180 opacity-[0.1]" },
  { Component: WatercolorFlower, size: 180, style: { top: '20%', left: '10%' }, animation: 'driftFast 16s ease-in-out infinite reverse', className: "-rotate-12 opacity-[0.1]" },
];


// --- 4. THE BACKGROUND COMPONENT ---
const FloralBackground = () => {
  return (
    <>
      <style>{driftAnimations}</style>
      <GrainOverlay />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundLayers.map((item, index) => (
          <div
            key={index}
            className="absolute will-change-transform" // Optimize for animations
            style={{
              ...item.style,
              animation: item.animation,
              zIndex: index < 3 ? 0 : index < 8 ? 1 : 2, // Simple z-layering based on array order
            }}
          >
            <item.Component size={item.size} className={item.className} />
          </div>
        ))}
         {/* Subtle gradient vignette to focus center */}
         <div className="absolute inset-0 bg-radial-gradient-to-tr from-transparent via-[#fffaf5]/20 to-[#fffaf5]/80 z-[3]"></div>
      </div>
    </>
  );
};

export default FloralBackground;