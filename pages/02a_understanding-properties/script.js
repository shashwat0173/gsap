import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  backgroundColor: "#ff6f61",
  scale: 1.25,
  duration: 2,
  ease: "bounce",
  // repeat: -1,
  // yoyo: true,
  // repeatDelay: 2,
  paused: false,
  stagger: 1,
  onComplete: () => {
    console.log("Animation complete!");
  },
});
