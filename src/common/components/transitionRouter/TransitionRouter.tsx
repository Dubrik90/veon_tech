import React, { useRef, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';

interface TransitionRouterProps {
    children: React.ReactNode;
    location: {
        key: string;
    };
}

export const TransitionRouter: React.FC<TransitionRouterProps> = ({ children, location }) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

        timeline
            .from(node, { opacity: 0, y: 20 })
            .to(node, { opacity: 1, y: 0 });
    }, [location]);

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <div ref={nodeRef} className={'wrap'}>
                    {children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};
