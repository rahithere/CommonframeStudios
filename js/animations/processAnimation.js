gsap.registerPlugin(ScrollTrigger);

const processSection = document.querySelector("#process");
const processLine = document.querySelector(".process-line");
const processCards = document.querySelectorAll(".process-step");

if (processSection && processLine) {

    const length = processLine.getTotalLength();

    gsap.set(processLine, {
        strokeDasharray: length,
        strokeDashoffset: length
    });

    gsap.to(processLine, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: processSection,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1
        }
    });

    processCards.forEach((card, index) => {

        const direction = index % 2 === 0 ? 1 : -1;

        gsap.to(card, {
            y: direction * -35,
            rotateY: direction * 2,
            rotateX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

    });
}