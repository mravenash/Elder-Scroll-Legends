import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce'

const useInfiniteScroll = (fn) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", debounce(isScrolling, 500));
        return () => window.removeEventListener("scroll", isScrolling);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fn();
    }, [isFetching]);

    //Determining at what point we want to to infinite scrolling
    function isScrolling() {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setIsFetching(true);
        }
    }

    return [isFetching, setIsFetching];

}


export default useInfiniteScroll;