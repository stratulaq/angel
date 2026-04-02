'use client';

import { useEffect, useRef } from 'react';

export default function TractionChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const render = () => {
      const ctx = c.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = c.getBoundingClientRect();
      const W = rect.width;
      const H = 110;

      // Ensure canvas respects DPR for sharp rendering
      c.width = W * dpr;
      c.height = H * dpr;
      c.style.width = W + 'px';
      c.style.height = H + 'px';

      ctx.resetTransform(); // Reset any previous scale
      ctx.scale(dpr, dpr);

      // Data (includes previous growth adjustments)
      const hist = [3, 5, 8, 12, 17, 22, 9, 11, 14, 17, 21, 26];
      const aprCurrent = 32;
      const aprPipeline = 52;

      const total = hist.length + 2;
      const max = 62;
      const pad = { l: 2, r: 2, t: 18, b: 2 };
      const bw = (W - pad.l - pad.r) / total;
      const aprilBw = bw * 0.48;

      // Clear
      ctx.clearRect(0, 0, W, H);

      // Trend line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      hist.forEach((v, i) => {
        const x = pad.l + (i + 0.5) * bw;
        const y = H - pad.b - (v / max) * (H - pad.t - pad.b);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      // Hist bars
      hist.forEach((v, i) => {
        const x = pad.l + i * bw;
        const bh = (v / max) * (H - pad.t - pad.b);
        const y = H - pad.b - bh;
        if (i === 6) {
          ctx.fillStyle = '#FF6B3550';
        } else {
          const bright = 0.12 + (i / hist.length) * 0.18;
          ctx.fillStyle = `rgba(52, 211, 153, ${bright})`;
        }
        ctx.fillRect(x + 1.5, y, bw - 3, bh);
      });

      // April current
      const ax = pad.l + hist.length * bw;
      const abh = (aprCurrent / max) * (H - pad.t - pad.b);
      const ay = H - pad.b - abh;
      ctx.fillStyle = 'rgba(52, 211, 153, 0.75)';
      ctx.fillRect(ax + 1, ay, aprilBw - 1, abh);
      ctx.fillStyle = '#34D399';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('$32K', ax + aprilBw / 2, ay - 4);

      // April pipeline
      const px = ax + aprilBw + 1;
      const pbh = (aprPipeline / max) * (H - pad.t - pad.b);
      const py = H - pad.b - pbh;
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = 'rgba(224, 122, 0, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(px, py, aprilBw - 1, pbh);
      ctx.fillStyle = 'rgba(224, 122, 0, 0.12)';
      ctx.fillRect(px, py, aprilBw - 1, pbh);
      ctx.setLineDash([]);
      ctx.fillStyle = '#E07A00';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('$52K+', px + aprilBw / 2, py - 4);
    };

    // Initial render
    render();

    // Resize handling
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(render);
    });

    observer.observe(c);

    return () => observer.disconnect();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[110px] block" />;
}
