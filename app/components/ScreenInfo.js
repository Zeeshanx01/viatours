'use client';
import { useEffect, useState } from 'react';

const getActiveBreakpoints = (width) => {
  const min = [];
  const max = [];

  if (width >= 640) min.push('sm');
  if (width >= 768) min.push('md');
  if (width >= 1024) min.push('lg');
  if (width >= 1280) min.push('xl');
  if (width >= 1536) min.push('2xl');

  if (width < 1536) max.push('max-2xl');
  if (width < 1280) max.push('max-xl');
  if (width < 1024) max.push('max-lg');
  if (width < 768) max.push('max-md');
  if (width < 640) max.push('max-sm');

  return { min, max };
};

const getPrimaryBreakpoint = (width) => {
  if (width < 640) return 'base';
  if (width < 768) return 'sm';
  if (width < 1024) return 'md';
  if (width < 1280) return 'lg';
  if (width < 1536) return 'xl';
  return '2xl';
};

export default function ScreenInfo() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [breakpoints, setBreakpoints] = useState({ min: [], max: [] });
  const [primary, setPrimary] = useState('base');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setSize({ width: w, height: h });
      setBreakpoints(getActiveBreakpoints(w));
      setPrimary(getPrimaryBreakpoint(w));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!visible) {
    return (
      <button
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-black/70 text-white px-4 py-1 rounded-md text-xs opacity-80"
        onClick={() => setVisible(true)}
      >
        Show ScreenInfo
      </button>
    );
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-white/60 text-black backdrop-blur-xs px-4 py-3 rounded-xl shadow-2xl text-xs sm:text-sm font-mono space-y-1 w-fit max-w-[90vw]">
      <div className="flex justify-between items-center">
        <strong className="text-black/60 mr-4">Screen Info</strong>
        <button
          onClick={() => setVisible(false)}
          className="text-xs px-2 py-1 bg-black text-white rounded hover:bg-red-600"
        >
          Hide
        </button>
      </div>
      <div>
        <strong>Primary:</strong>{' '}
        <span className="text-indigo-700">{primary}</span>
      </div>
      <div>
        <strong>Min Breakpoints:</strong>{' '}
        <span className="text-green-700">{breakpoints.min.join(', ') || 'none'}</span>
      </div>
      <div>
        <strong>Max Breakpoints:</strong>{' '}
        <span className="text-red-700">{breakpoints.max.join(', ') || 'none'}</span>
      </div>
      <div>
        <strong>Size:</strong> {size.width}px × {size.height}px
      </div>
    </div>
  );
}
