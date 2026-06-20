import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const ClaudeMascot = ({ isProcessing, size = 80 }) => {
  const groupRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!groupRef.current) return;

    const containerWidth = containerRef.current?.parentElement?.offsetWidth || 600;
    const walkDist = containerWidth - size;
    const walkDuration = walkDist / 80; // 80px per second

    const walkTl = gsap.timeline({ repeat: -1 });
    walkTl
      // Walk right
      .to(groupRef.current, {
        x: walkDist,
        duration: walkDuration,
        ease: "none"
      })
      // Pause
      .to({}, { duration: 0.4 })
      // Flip to face left
      .set(groupRef.current, { scaleX: -1, transformOrigin: `${size / 2}px ${size / 2}px` })
      // Walk left
      .to(groupRef.current, {
        x: 0,
        duration: walkDuration,
        ease: "none"
      })
      // Pause
      .to({}, { duration: 0.4 })
      // Flip back to face right
      .set(groupRef.current, { scaleX: 1, transformOrigin: `${size / 2}px ${size / 2}px` });

    return () => walkTl.kill();
  }, [size]);

  return (
    <div ref={containerRef} style={{ width: `${size}px`, flexShrink: 0, display: 'block' }}>
      <div ref={groupRef} style={{ width: `${size}px`, height: `${size}px` }}>
        <video
          ref={videoRef}
          src="/claude-assets/claude-walk.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};
