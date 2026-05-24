/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export default function App() {
  function crossTilt(dir: string) {
    const c = document.querySelector('.dpad-cross');
    if (c) c.className = 'dpad-cross absolute inset-0 tilt-' + dir;
  }
  function crossReset() {
    const c = document.querySelector('.dpad-cross');
    if (c) c.className = 'dpad-cross absolute inset-0';
  }

  return (
    <div className="min-h-screen bg-[#800000] flex items-center justify-center p-4 lg:p-8 overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-50" style={{ backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)' }} />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#400000 20%, transparent 20%)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }} />

      {/* Main GBA Chassis */}
      <div className="@container relative w-full max-w-[1000px] aspect-[1.75/1] drop-shadow-[0_40px_50px_rgba(0,0,0,0.8)] z-10">
        
        {/* --- L / R Bumper Triggers --- */}
        <button className="l-bumper absolute top-[-5%] left-[5%] w-[20%] h-[8%] bg-gradient-to-b from-[#e1e3e8] to-[#9298a5] rounded-[30%_15%_8%_8%/50%_40%_50%_50%] shadow-[inset_0_0.1cqi_0.3cqi_white,0_-0.1cqi_0.3cqi_rgba(0,0,0,0.5)] border-[0.08cqi] border-white/40 z-5 cursor-pointer origin-top-right transition-transform duration-150 hover:brightness-105 flex items-center justify-start" style={{ transform: 'rotate(-10deg)', willChange: 'transform' }}>
          <span className="text-gray-600/60 text-[1.2cqi] font-black italic tracking-widest drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] ml-[10%]">L</span>
        </button>
        <button className="r-bumper absolute top-[-5%] right-[5%] w-[20%] h-[8%] bg-gradient-to-b from-[#e1e3e8] to-[#9298a5] rounded-[15%_30%_8%_8%/40%_50%_50%_50%] shadow-[inset_0_0.1cqi_0.3cqi_white,0_-0.1cqi_0.3cqi_rgba(0,0,0,0.5)] border-[0.08cqi] border-white/40 z-5 cursor-pointer origin-top-left transition-transform duration-150 hover:brightness-105 flex items-center justify-end" style={{ transform: 'rotate(10deg)', willChange: 'transform' }}>
          <span className="text-gray-600/60 text-[1.2cqi] font-black italic tracking-widest drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] mr-[10%]">R</span>
        </button>

        {/* Shell SVG 鈥?stable layer, no flicker */}
        <div className="absolute left-0 right-0 top-[-6%] bottom-0 z-10 pointer-events-none overflow-visible" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
          <svg viewBox="0 0 24414.64 14376.13" preserveAspectRatio="none" className="w-full h-full">
            <path d="M6608.21 10.6c-712.81,0 -1563.61,789.1 -2837.53,1119.06l-2584.23 669.36c-569.55,147.52 -1673.87,7779.27 -923.46,9459.4 337.51,755.69 1231.86,904.05 3010.7,1343.73 1336.14,330.26 2268.62,1763.37 8933.64,1763.37 6665.02,0 7597.5,-1433.11 8933.64,-1763.37 1778.84,-439.68 2673.19,-588.04 3010.7,-1343.73 750.41,-1680.13 -353.91,-9311.87 -923.46,-9459.4l-2584.23 -669.36c-1273.92,-329.97 -2124.71,-1119.06 -2837.53,-1119.06l-11198.23 0z" fill="#8994af" fillOpacity="0.7" stroke="none"/>
          </svg>
        </div>

        {/* Shell Content */}
        <div className="absolute inset-0 z-11 pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
          {/* Internal shadows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-[5%] top-[10%] w-[20%] h-[30%] bg-black/15 rounded-full" style={{ filter: 'blur(15px)' }}></div>
            <div className="absolute right-[5%] top-[10%] w-[20%] h-[30%] bg-black/15 rounded-full" style={{ filter: 'blur(15px)' }}></div>
            <div className="absolute bottom-[20%] left-[30%] w-[40%] h-[20%] bg-white/15 rounded-full" style={{ filter: 'blur(20px)' }}></div>
          </div>

          {/* Nintendo logo */}
          <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[12cqi] h-[3cqi] border-[0.2cqi] border-white/20 rounded-full flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.2)]">
            <span className="text-white/20 font-bold italic tracking-wider text-[1.4cqi]">Nintendo</span>
          </div>

          {/* === Screen Bezel === */}
          <div className="absolute left-[24%] top-[12%] w-[52%] h-[78%] rounded-[10%_10%_30%_30%/5%_5%_20%_20%] shadow-[inset_0_0_15px_rgba(0,0,0,1),0_5px_15px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.5)] overflow-hidden pointer-events-auto" style={{ background: '#0a0a0c', border: '0.3cqi solid transparent', backgroundClip: 'padding-box' }}>
            {/* Gradient border (snake style) */}
            <div className="absolute inset-[-0.3cqi] rounded-[inherit] -z-[1]" style={{ background: 'linear-gradient(180deg, rgba(60,60,70,0.9), rgba(30,30,40,0.9), rgba(50,50,60,0.9))' }} />
            
            {/* Screen glare (clip-path polygon) */}
            <div className="absolute top-0 right-0 w-[60%] h-[70%] z-5 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04), transparent)', clipPath: 'polygon(100% 0, 100% 100%, 0 0)', borderRight: '0.1cqi solid rgba(255,255,255,0.06)', borderTop: '0.1cqi solid rgba(255,255,255,0.06)' }} />

            {/* LCD Screen */}
            <div className="absolute left-[8%] right-[8%] top-[6%] aspect-[3/2] bg-[#111] overflow-hidden rounded-[0.4cqi] shadow-[inset_0_0_20px_rgba(0,0,0,1)] z-1">
              {/* Game placeholder */}
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4bc2e8] to-[#99dff5] flex flex-col justify-end">
                  <div className="absolute top-[20%] left-[10%] w-[15cqi] h-[4cqi] bg-white/80 rounded-full" style={{ filter: 'blur(2px)' }}></div>
                  <div className="absolute top-[30%] right-[20%] w-[10cqi] h-[3cqi] bg-white/80 rounded-full" style={{ filter: 'blur(2px)' }}></div>
                  <div className="h-[30%] w-full bg-[repeating-linear-gradient(45deg,#2cac3a,#2cac3a_1cqi,#218b2b_1cqi,#218b2b_2cqi)] border-t-[0.5cqi] border-black"></div>
                  <div className="absolute bottom-[30%] left-[25%] w-[3cqi] h-[4cqi]" style={{ boxShadow: '2cqi_-3cqi_0_#d32f2f, 2cqi_-4cqi_0_#d32f2f' }}></div>
                  <div className="absolute top-[5%] left-[5%] text-white font-mono font-bold text-[1.5cqi]" style={{ textShadow: '0 0.2cqi 0 #000' }}>WORLD 1-1</div>
                  <div className="absolute top-[5%] right-[5%] text-white font-mono font-bold text-[1.5cqi]" style={{ textShadow: '0 0.2cqi 0 #000' }}>SCORE: 004200</div>
                </div>
              </div>
              {/* CRT scanlines */}
              <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-25 z-20" style={{ background: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.2) 50%), linear-gradient(90deg, rgba(255,0,0,0.04), rgba(0,255,0,0.015), rgba(0,0,255,0.04))', backgroundSize: '100% 0.8cqi, 0.6cqi 100%' }} />
            </div>

            {/* Bezel logo */}
            <div className="absolute bottom-[8%] w-full flex justify-center items-center gap-[1cqi] z-1">
              <span className="text-white/80 font-bold italic text-[2.5cqi]" style={{ letterSpacing: '0.3cqi', textShadow: '0 1px 1px rgba(0,0,0,1)', textTransform: 'uppercase' }}>
                Game Boy{' '}
                <span style={{ letterSpacing: '0.1cqi', marginLeft: '0.5cqi', color: 'rgba(255,255,255,0.9)' }}>Advance</span>
              </span>
            </div>
          </div>

          {/* === D-PAD === */}
          <div className="absolute left-[6%] top-[28%] w-[14cqi] aspect-square pointer-events-auto">
            <div className="absolute inset-[-5%] rounded-full bg-black/15 shadow-[inset_0_0_6px_rgba(0,0,0,0.6),0_1px_2px_rgba(255,255,255,0.3)] border-[0.05cqi] border-black/10"></div>
            <div className="dpad-cross absolute inset-0">
              {/* Horizontal arm */}
              <div className="absolute top-[34%] left-[10%] w-[80%] h-[32%] bg-[#cfcfd3] rounded-[0.2cqi]" style={{ boxShadow: 'inset -0.2cqi -0.2cqi 0.4cqi rgba(0,0,0,0.3), inset 0.2cqi 0.2cqi 0.4cqi rgba(255,255,255,0.8)' }}></div>
              {/* Vertical arm */}
              <div className="absolute left-[34%] top-[10%] w-[32%] h-[80%] bg-[#cfcfd3] rounded-[0.2cqi]" style={{ boxShadow: 'inset -0.2cqi -0.2cqi 0.4cqi rgba(0,0,0,0.3), inset 0.2cqi 0.2cqi 0.4cqi rgba(255,255,255,0.8)' }}></div>
              {/* Center */}
              <div className="absolute left-[30%] top-[30%] w-[40%] h-[40%] bg-[#cfcfd3] rounded-[0.3cqi] z-10 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] aspect-square rounded-full bg-[#bababb]" style={{ boxShadow: 'inset 0 0 2px rgba(0,0,0,0.3)' }}></div>
              </div>
              {/* Arrows on the arms (not in center) */}
              <span className="absolute top-[12%] left-1/2 -translate-x-1/2 text-black/30 text-[1cqi] pointer-events-none">鈻?/span>
              <span className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-black/30 text-[1cqi] rotate-180 pointer-events-none">鈻?/span>
              <span className="absolute left-[12%] top-1/2 -translate-y-1/2 text-black/30 text-[1cqi] -rotate-90 pointer-events-none">鈻?/span>
              <span className="absolute right-[12%] top-1/2 -translate-y-1/2 text-black/30 text-[1cqi] rotate-90 pointer-events-none">鈻?/span>
            </div>
            {/* D-Pad buttons (snake-style pointer events) */}
            <button className="absolute left-[34%] top-[10%] w-[32%] h-[32%] z-20 cursor-pointer rounded-t-[0.2cqi]" style={{ touchAction: 'manipulation' }} onPointerDown={(e) => { e.preventDefault(); crossTilt('u'); }} onPointerUp={crossReset} onPointerLeave={crossReset} aria-label="Up"></button>
            <button className="absolute left-[34%] bottom-[10%] w-[32%] h-[32%] z-20 cursor-pointer rounded-b-[0.2cqi]" style={{ touchAction: 'manipulation' }} onPointerDown={(e) => { e.preventDefault(); crossTilt('d'); }} onPointerUp={crossReset} onPointerLeave={crossReset} aria-label="Down"></button>
            <button className="absolute top-[34%] left-[10%] w-[32%] h-[32%] z-20 cursor-pointer rounded-l-[0.2cqi]" style={{ touchAction: 'manipulation' }} onPointerDown={(e) => { e.preventDefault(); crossTilt('l'); }} onPointerUp={crossReset} onPointerLeave={crossReset} aria-label="Left"></button>
            <button className="absolute top-[34%] right-[10%] w-[32%] h-[32%] z-20 cursor-pointer rounded-r-[0.2cqi]" style={{ touchAction: 'manipulation' }} onPointerDown={(e) => { e.preventDefault(); crossTilt('r'); }} onPointerUp={crossReset} onPointerLeave={crossReset} aria-label="Right"></button>
          </div>

          {/* === START / SELECT === */}
          <div className="absolute left-[8%] bottom-[20%] flex gap-[2cqi] w-[14cqi] pointer-events-auto">
            <div className="flex-1 flex flex-col items-center gap-[0.5cqi]">
              <div className="w-full aspect-[2.5/1] bg-black/15 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.3)] flex justify-center items-center -rotate-12">
                <button className="w-[85%] h-[70%] bg-gradient-to-b from-[#c0c3ca] to-[#a0a3aa] rounded-full cursor-pointer active:scale-95 transition-all block" style={{ boxShadow: 'inset 0 -0.1cqi 0.2cqi rgba(0,0,0,0.4), inset 0 0.1cqi 0.2cqi white, 0 0.2cqi 0.4cqi rgba(0,0,0,0.5)' }}></button>
              </div>
              <span className="text-[1.2cqi] font-bold tracking-wider text-black/50 -mt-[0.2cqi]">START</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-[0.5cqi]">
              <div className="w-full aspect-[2.5/1] bg-black/15 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.3)] flex justify-center items-center -rotate-12">
                <button className="w-[85%] h-[70%] bg-gradient-to-b from-[#c0c3ca] to-[#a0a3aa] rounded-full cursor-pointer active:scale-95 transition-all block" style={{ boxShadow: 'inset 0 -0.1cqi 0.2cqi rgba(0,0,0,0.4), inset 0 0.1cqi 0.2cqi white, 0 0.2cqi 0.4cqi rgba(0,0,0,0.5)' }}></button>
              </div>
              <span className="text-[1.2cqi] font-bold tracking-wider text-black/50 -mt-[0.2cqi]">SELECT</span>
            </div>
          </div>

          {/* === POWER LED === */}
          <div className="absolute right-[12%] top-[16%] flex items-center gap-[0.8cqi]">
            <div className="w-[1cqi] h-[1cqi] bg-[#00cc00] rounded-full border-[0.1cqi] border-green-900/50" style={{ boxShadow: '0 0 0.5cqi #00cc00, inset 0 0.2cqi 0.2cqi rgba(255,255,255,0.8)', opacity: 0.9 }}></div>
            <span className="text-white/40 font-bold text-[1.1cqi] tracking-[0.1cqi] select-none">POWER</span>
          </div>

          {/* === A / B BUTTONS === */}
          <div className="absolute right-[6%] top-[28%] w-[16cqi] aspect-square rounded-full border-[0.1cqi] border-white/5 bg-white/5 pointer-events-auto" style={{ boxShadow: 'inset 0 0 1cqi rgba(0,0,0,0.1)' }}>
            {/* B Button */}
            <div className="absolute left-[2%] bottom-[12%] w-[5.5cqi] aspect-square z-10">
              <div className="absolute inset-[-15%] rounded-full bg-black/15 border-[0.05cqi] border-black/20" style={{ boxShadow: 'inset 0 0 0.5cqi rgba(0,0,0,0.6), 0 1px 2px rgba(255,255,255,0.3)' }}></div>
              <button className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-[#cfcfd3] to-[#a0a2a8] cursor-pointer transition-all active:translate-y-[0.2cqi] flex items-center justify-center" style={{ boxShadow: 'inset -0.2cqi -0.2cqi 0.4cqi rgba(0,0,0,0.3), inset 0.1cqi 0.2cqi 0.4cqi rgba(255,255,255,0.9), 0 0.4cqi 0.6cqi rgba(0,0,0,0.7)' }}>
                <span className="text-[2.2cqi] font-black text-gray-700/80 italic pr-[0.1cqi] pb-[0.2cqi]" style={{ textShadow: '0 1px 1px rgba(255,255,255,0.6)' }}>B</span>
              </button>
            </div>
            {/* A Button */}
            <div className="absolute right-[2%] top-[12%] w-[5.5cqi] aspect-square z-10">
              <div className="absolute inset-[-15%] rounded-full bg-black/15 border-[0.05cqi] border-black/20" style={{ boxShadow: 'inset 0 0 0.5cqi rgba(0,0,0,0.6), 0 1px 2px rgba(255,255,255,0.3)' }}></div>
              <button className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-[#cfcfd3] to-[#a0a2a8] cursor-pointer transition-all active:translate-y-[0.2cqi] flex items-center justify-center" style={{ boxShadow: 'inset -0.2cqi -0.2cqi 0.4cqi rgba(0,0,0,0.3), inset 0.1cqi 0.2cqi 0.4cqi rgba(255,255,255,0.9), 0 0.4cqi 0.6cqi rgba(0,0,0,0.7)' }}>
                <span className="text-[2.2cqi] font-black text-gray-700/80 italic pl-[0.1cqi] pb-[0.2cqi]" style={{ textShadow: '0 1px 1px rgba(255,255,255,0.6)' }}>A</span>
              </button>
            </div>
          </div>

          {/* === SPEAKER GRILL === */}
          <div className="absolute right-[10%] bottom-[22%] w-[8cqi] flex justify-between -rotate-15">
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className="w-[0.8cqi] h-[6cqi] bg-black/20 rounded-full overflow-hidden" style={{ boxShadow: 'inset 0 0 0.3cqi rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.4)' }}>
                <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8), rgba(0,0,0,0.3))' }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-2 left-0 w-full text-center text-[10px] text-white/35 z-20">
        鈫戔啌鈫愨啋 / WASD | 绌烘牸/L/A 鏆傚仠 | R/B 閲嶅惎 | Tab AI
      </div>
    </div>
  );
}
