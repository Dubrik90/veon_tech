import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        // плавный скролл
        document.body.scrollTo(0, 0);
        document.body.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
        // быстрый скролл
        // window.scrollTo(0, 0)

    }, [pathname]);

    return null;
}