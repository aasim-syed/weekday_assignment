// InfiniteScroll.js
import React, { useEffect, useRef } from 'react';

const InfiniteScroll = ({ loadMore }) => {
  const observer = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    }, options);

    if (observer.current) {
      observer.current.observe(document.getElementById('bottom'));
    }

    return () => observer.current.disconnect();
  }, [loadMore]);

  return <div id="bottom" />;
}

export default InfiniteScroll;
