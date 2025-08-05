import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import "./styles/Statistic.css";

const Statistic = ({ label, end }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 3000;
    const steps = duration / 50;
    const increment = (end - current) / steps;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setCount(current);
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, end]);

  return (
    <div className="statistic" ref={ref}>
      <h2 className="statistic-count">
        {end % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
        <span className="plus-sign">+</span>
      </h2>
      <p className="statistic-label">{label}</p>
    </div>
  );
};

export default Statistic;
