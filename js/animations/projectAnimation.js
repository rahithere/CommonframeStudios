gsap.registerPlugin(ScrollTrigger);

const heading = document.querySelector(".projects-heading");

if (heading) {
    const words = heading.textContent.trim().split(/\s+/);

    heading.innerHTML = words
        .map(word => `<span class="project-word">${word}</span>`)
        .join(" ");

    const wordElements = heading.querySelectorAll(".project-word");

    gsap.set(wordElements, {
        opacity: 0,
        y: 70,
        filter: "blur(18px)",
        display: "inline-block"
    });

    gsap.to(wordElements, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.07,
        ease: "power4.out",
        scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            once: true
        }
    });
}