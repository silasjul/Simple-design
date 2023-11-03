tl = gsap.timeline();

tl.from(
  ".rect-grey",
  {
    y: 500,
    duration: 1,
    delay: 1,
    ease: "power3",
  },
  "0"
)
  .from(
    ".rect-lightgrey",
    {
      y: 1000,
      duration: 1.8,
      delay: 1,
      ease: "power3",
    },
    "0"
  )
  .from(
    ".text-container",
    {
      opacity: 0,
      delay: 1,
      duration: 2,
    },
    "0"
  );
