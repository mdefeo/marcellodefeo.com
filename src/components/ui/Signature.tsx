"use client";

import { useEffect, useState } from "react";
import { playSignatureAnimation } from "@/components/animations/signatureAnimation";
import { SignaturePath } from "./SignaturePath";

const Signature = ({ onComplete }: { onComplete?: () => void }) => {
  const [hasRun, setHasRun] = useState(false);


  useEffect(() => {
    if (!hasRun) {
      playSignatureAnimation(() => {
        setHasRun(true);
        if (onComplete) onComplete();
      });
    }
  }, [hasRun, onComplete]);

  return (
    <div className="signature-wrapper">
      <SignaturePath style={{ stroke: "#F8F1E5", fill: "#F8F1E5" }} className="signature-svg" />
    </div>
  );
};

export default Signature;