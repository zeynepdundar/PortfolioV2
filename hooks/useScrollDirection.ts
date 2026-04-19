"use client";
import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 50) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show;
}