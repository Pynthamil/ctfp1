"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CodedexPage() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Initial reveal animation
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
    )
    .fromTo(
      imageRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );

    // Continuous floating animation for the main image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Animate floating decorative elements
    floatingElementsRef.current.forEach((el, index) => {
      gsap.to(el, {
        y: index % 2 === 0 ? -30 : 30,
        x: index % 3 === 0 ? 20 : -20,
        rotation: index % 2 === 0 ? 15 : -15,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    return () => {
      gsap.killTweensOf(imageRef.current);
      gsap.killTweensOf(titleRef.current);
      floatingElementsRef.current.forEach(el => gsap.killTweensOf(el));
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#c85a5a] via-[#e28766] to-[#d87c95] flex flex-col items-center justify-center p-8 overflow-hidden relative"
    >
      {/* Decorative floating blobs */}
      <div 
        ref={el => floatingElementsRef.current[0] = el}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-400/40 rounded-full blur-2xl"
      />
      <div 
        ref={el => floatingElementsRef.current[1] = el}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/40 rounded-full blur-2xl"
      />
      <div 
        ref={el => floatingElementsRef.current[2] = el}
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-yellow-300/40 rounded-full blur-2xl"
      />
      
      <div className="z-10 flex flex-col items-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold text-white mb-12 drop-shadow-lg tracking-wider text-center"
        >
          Codedex Companion
        </h1>
        
        <div 
          ref={imageRef}
          className="relative w-80 h-80 md:w-96 md:h-96"
        >
          {/* We use a div with drop shadow for the image container to make it pop */}
          <div className="absolute inset-0 bg-white/10 rounded-[3rem] backdrop-blur-sm -rotate-6 scale-105 shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-110"></div>
          <Image
            src="/codedex-assets/codedex3.png"
            alt="Codedex Character"
            fill
            className="object-contain drop-shadow-2xl z-10 p-4 transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        <div className="mt-16 text-white text-center max-w-lg bg-black/20 p-6 rounded-2xl backdrop-blur-md shadow-xl border border-white/10">
          <p className="text-xl font-medium leading-relaxed">
            Welcome to the new interactive Codedex webpage! Let this friendly mascot guide you through your coding journey.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-[#c85a5a] font-bold rounded-full hover:bg-yellow-300 hover:text-black transition-colors duration-300 shadow-lg hover:shadow-yellow-300/50 transform hover:-translate-y-1">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}
