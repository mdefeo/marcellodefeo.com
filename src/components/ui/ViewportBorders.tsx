"use client";

import React, { useEffect, useRef } from "react";
import { animateBorders } from "@/components/animations/borderAnimation";

const ViewportBorders: React.FC = () => {

  useEffect(() => {
    animateBorders(() => {});
  }, []);

  return (
    <>
      <div className="border-top h-border"></div>
      <div className="border-right v-border"></div>
      <div className="border-bottom h-border"></div>
      <div className="border-left v-border"></div>
    </>
  );
};

export default ViewportBorders;