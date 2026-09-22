const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.2
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add(time => {
    lenis.raf(time * 1000);
});
