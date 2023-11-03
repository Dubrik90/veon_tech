import React, { useRef, useEffect } from 'react';
import { TimelineLite } from 'gsap';

export const TypingAnimation: React.FC = () => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const text = textRef.current;
        if (text) {
            const textContent = text.textContent || '';
            const chars = textContent.split('');
            const tl = new TimelineLite();

            tl.staggerFrom(chars, 0.1, { opacity: 0, ease: 'none' }, 0.1);

           // return () => tl.kill();
        }
    }, []);

    return <h1 ref={textRef}>Бонусы и скидки на разработку. Программа лояльности для клиентов компании RIZOFT</h1>;
};
