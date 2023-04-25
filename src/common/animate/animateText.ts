import {gsap} from "gsap";

export const animateText = () => {
    const animSolb = gsap.utils.toArray('.animate')

    animSolb.forEach((anim: any) => {

        gsap.fromTo(anim, {
            opacity: 0,
            transform: 'rotate(3deg) scaleY(.9) translateY(50px)',
        }, {
            opacity: 1,
            transform: 'rotate(0) scaleY(1) translateY(0)',
            duration: 1.5,
            transitionTimingFunction: 'cubic-bezier(.19,.91,.36,.99)',
            scrollTrigger: {
                trigger: anim,
                start: 'top 90%',
            }
        })
    })
}

