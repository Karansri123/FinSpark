"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const HeroSection = () => {
   const imageRef =  useRef()

   useEffect(()=>{
    const imageElement = imageRef.current;

    const handleScroll = ()=>{
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;

        if(scrollPosition > scrollThreshold){
            imageElement.classList.add("scrolled")
        }else{
            imageElement.classList.remove("scrolled")
        }
    }

    window.addEventListener('scroll',handleScroll)

    return ()=>window.removeEventListener('scroll',handleScroll)

   },[])

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title mb-8">
          Think Smart <br /> Manage Your Money Better
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Money Managed, Goals Achieved: Real-Time Financial Insights at Your
          Fingertips.
        </p>
        <div className="flex justify-center">
          <Link href={"/dashboard"}>
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
  <div ref={imageRef} className="hero-image">
    <Image
      src="/heroSectionBanner.webp"
      width={1280}
      height={720}
      alt="Dashboard Preview"
      className="rounded-lg shadow-2xl border mx-auto"
      priority
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default HeroSection;
