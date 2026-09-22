gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power4.out"
    }
});

heroTimeline
    .from(".hero-panel", {
        opacity: 0,
        y: 32,
        duration: 0.9
    })
    .from(".hero-logo", {
        opacity: 0,
        y: -40,
        duration: 1
    }, "-=0.4")
    .from(".hero-flow", {
        y: "100%",
        duration: 1.2
    }, "-=0.5")
    .from(".hero-content > *", {
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.55
    }, "-=0.6");