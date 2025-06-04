gsap.registerPlugin(ScrollTrigger)

window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                and: "+=150%",
                pin: true,
                scrub: true,
                
            }
        })
        .to("img", {
            scale: 2,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut"
        })
        .to(".section.space-01", {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut"
        }, "<")
})