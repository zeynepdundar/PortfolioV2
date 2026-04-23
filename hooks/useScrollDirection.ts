"use client";
import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [show, setShow] = useState(false); // ⛔ default false

  useEffect(() => {
    let lastY = window.scrollY;

    // ilk mount'ta doğru değeri set et
    setShow(window.scrollY < 50);

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show;
}