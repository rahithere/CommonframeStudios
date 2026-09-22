gsap.registerPlugin(ScrollTrigger);

const title = document.querySelector(".about-title");

if (title) {
    const words = title.textContent.trim().split(/\s+/);

    title.innerHTML = words
        .map(word => `<span class="about-word">${word}</span>`)
        .join(" ");

    const wordElements = title.querySelectorAll(".about-word");

    gsap.set(wordElements, {
        opacity: 0,
        y: 60,
        filter: "blur(20px)"
    });

    gsap.to(wordElements, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
}