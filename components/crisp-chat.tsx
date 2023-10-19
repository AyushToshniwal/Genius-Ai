"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b6b83640-ea9e-4eae-86ca-2e9b0d7be35f");
  }, []);

  return null;
};
