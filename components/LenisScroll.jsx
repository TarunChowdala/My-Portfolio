"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
            anchors: {
                offset: -80,
            },
        });

        // Make lenis available globally for Navbar
        window.lenis = lenis;

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            if (window.lenis) {
                window.lenis.destroy();
                window.lenis = null;
            }
        };
    }, []);

    return null;
}