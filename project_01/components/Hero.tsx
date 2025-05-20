"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Hero() {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from([".text-1", ".text-2"], {
        x: (i) => (i % 2 === 0 ? 300 : -300), // alternate directions
        opacity: 0,
        duration: 2.5,
        ease: "bounce.out",
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col pt-36 items-center" ref={app}>
      <h1 className="text-1 text-[11rem] font-medium uppercase tracking-tight">
        Creative <span className="text-purple-600">Minds</span>
      </h1>
      <h1 className="text-2 text-[11rem] font-medium uppercase tracking-tight leading-10">
        <span className="text-purple-600">Inovative</span> Ideas
      </h1>
    </div>
  );
}

export default Hero;
