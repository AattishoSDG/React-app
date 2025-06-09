// // useScrollDirection.js (Custom Hook)
import { useState, useEffect } from "react";

const useScrollDirection = (threshold = 100, isPaused = false) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isPaused) return;
      if (currentScrollY > threshold) {
        setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold, isPaused]);

  return scrollDirection;
};
export default useScrollDirection;
// import { useState, useEffect } from "react";

// const useScrollDirection = (threshold = 50, isPaused = false) => {
//   const [scrollDirection, setScrollDirection] = useState("up");
//   const [lastScrollY, setLastScrollY] = useState(window.scrollY);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (isPaused) return; // Prevent hiding if submenu is hovered

//       const currentScrollY = window.scrollY;

//       if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

//       if (currentScrollY > lastScrollY) {
//         setScrollDirection("down"); // Scrolling down
//       } else {
//         setScrollDirection("up"); // Scrolling up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, threshold, isPaused]);

//   return scrollDirection;
// };

// export default useScrollDirection;
