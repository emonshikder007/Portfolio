import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useSmoothScroll = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    let isScrolling = false;
    let scrollTarget = window.scrollY;

    const handleWheel = (e) => {
      e.preventDefault();
      scrollTarget += e.deltaY * 0.7;
      scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));

      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    const smoothScroll = () => {
      const currentScroll = window.scrollY;
      const distance = scrollTarget - currentScroll;

      if (Math.abs(distance) < 1) {
        isScrolling = false;
        return;
      }

      window.scrollTo(0, currentScroll + distance * 0.15);
      requestAnimationFrame(smoothScroll);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
};

export default useSmoothScroll;