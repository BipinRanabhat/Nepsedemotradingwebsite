"use client";
import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let cx = -1000, cy = -1000;
    let ax = -1000, ay = -1000;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
    };

    const loop = () => {
      ax += (cx - ax) * 0.07;
      ay += (cy - ay) * 0.07;
      if (ref.current) {
        ref.current.style.transform = `translate(${ax - 300}px, ${ay - 300}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full hidden md:block"
      style={{
        zIndex: 0,
        background: "radial-gradient(circle, rgba(240,185,11,0.048) 0%, transparent 65%)",
        willChange: "transform",
      }}
      aria-hidden
    />
  );
}
