"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { animateBorders } from "@/components/animations/borderAnimation";
import { useGlobalClickListener, useObserveImages } from "@/components/animations/elementObserver";
import ViewportBorders from "@/components/ui/ViewportBorders";
import ScrollTrigger from "gsap/ScrollTrigger";
import SummarySection from '@/components/sections/SummarySection';
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [showSignature, setShowSignature] = useState(false);

  useObserveImages();
  useGlobalClickListener();

  useEffect(() => {

    if (typeof setShowSignature === "function") {
      animateBorders(() => {
        setShowSignature(true);
      });
    } else {
      console.error("setShowSignature is not a function or not provided");
    }
  }, [setShowSignature]);


  return (
    <>
      <ViewportBorders />
      <SummarySection showSignature={showSignature} />
      <CaseStudiesSection />
    </>
  );
}