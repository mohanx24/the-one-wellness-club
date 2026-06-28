import React, { useState } from 'react';
import { handleImageError } from '../lib/utils';

interface TransformationData {
  name: string;
  beforeWeight: string;
  afterWeight: string;
  beforeFat: string;
  afterFat: string;
  timeframe: string;
  beforeImage: string;
  afterImage: string;
}

const transformations: TransformationData[] = [
  {
    name: 'Siddharth R.',
    beforeWeight: '92 kg',
    afterWeight: '78 kg',
    beforeFat: '26%',
    afterFat: '12%',
    timeframe: '16 Weeks',
    beforeImage: '/images/pt-session.jpg', // Using high quality gym images
    afterImage: '/images/hero-athlete.jpg',
  },
];

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const data = transformations[0]; // Display the primary transformation

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="w-full bg-[#111111] border border-[#222222] rounded-2xl p-6 lg:p-8">
      <div className="grid lg:grid-cols-5 gap-8 items-center">
        {/* Left Stats Section */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">
              Transformation Spotlight
            </span>
            <h3 className="font-heading text-4xl font-bold uppercase text-white mt-2">
              REAL RESULTS.
            </h3>
            <p className="font-body text-[#B0B0B0] mt-3">
              See how {data.name} achieved his dream physique in just {data.timeframe} of dedicated training at THE ONE.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Weight Card */}
            <div className="bg-[#1A1A1A] border border-[#222222] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#666666] uppercase tracking-wider">Weight Change</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-lg text-white/50 line-through">{data.beforeWeight}</span>
                <span className="text-2xl font-bold text-[#E53935]">{data.afterWeight}</span>
              </div>
            </div>

            {/* Body Fat Card */}
            <div className="bg-[#1A1A1A] border border-[#222222] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#666666] uppercase tracking-wider">Body Fat %</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-lg text-white/50 line-through">{data.beforeFat}</span>
                <span className="text-2xl font-bold text-[#E53935]">{data.afterFat}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#B0B0B0]">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse"></span>
              Program: Personal Training & Nutrition Guide
            </div>
          </div>
        </div>

        {/* Right Slider Section */}
        <div className="lg:col-span-3">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#222222] select-none">
            {/* After Image (Background) */}
            <img
              src={data.afterImage}
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
              onError={handleImageError}
            />
            <div className="absolute right-4 bottom-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-xs font-bold uppercase tracking-widest text-[#E53935]">
              AFTER
            </div>

            {/* Before Image (Foreground overlay) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src={data.beforeImage}
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                style={{ width: '100%', height: '100%' }}
                draggable="false"
                onError={handleImageError}
              />
              <div className="absolute left-4 bottom-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-xs font-bold uppercase tracking-widest text-white">
                BEFORE
              </div>
            </div>

            {/* Custom Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#E53935] z-20 cursor-ew-resize pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Custom Handle Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#E53935] border-2 border-white flex items-center justify-center shadow-lg shadow-black/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" className="rotate-90 origin-center" />
                </svg>
              </div>
            </div>

            {/* Invisible Range Input for dragging interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              style={{ margin: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
