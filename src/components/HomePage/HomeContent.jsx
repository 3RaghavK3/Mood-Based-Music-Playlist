import { motion, AnimatePresence } from 'framer-motion';
import './HomeContent.css';
import React, { useState } from 'react';

export function HomeContent({
  mood,
  setMood,
  setnewImage,
  moods,
  images,
  direction,
  setDirection,
  setoldImage,
}) {
  const textColor = (index) => {
    const root = document.documentElement;
    if (moods[index] === 'Sad') {
      root.style.setProperty('--text-color', 'white');
      
    } else {
      root.style.setProperty('--text-color', 'black');
    }
  };

  const goPrevious = () => {
    setDirection('prev');

    let index = moods.indexOf(mood);
    setoldImage(images[moods[index]]);

    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = moods.length - 1;
    }

    setMood(moods[newIndex]);
    textColor(newIndex);
    setnewImage(images[moods[newIndex]]);
  };

  const goNext = () => {
    setDirection('next');

    let index = moods.indexOf(mood);
    setoldImage(images[moods[index]]);

    let newIndex = index + 1;
    if (newIndex >= moods.length) {
      newIndex = 0;
    }

    setMood(moods[newIndex]);
    textColor(newIndex);
    setnewImage(images[moods[newIndex]]);
  };

  const animation = () => {
    if (direction === 'prev') {
      return {
        initial: { x: -20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 20, opacity: 0 },
      };
    } else if (direction === 'next') {
      return {
        initial: { x: 20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -20, opacity: 0 },
      };
    } else {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
  };

  const variants = animation();

  return (
    <div className="wrapper">
      <div className="title">CHOOSE YOUR MOOD</div>
      <div className="title-tagline">
        Select your current mood and we’ll curate a playlist just for you
      </div>
      <div className="carousel">
        <span className="button" onClick={goPrevious}>
          {'\u2190'}
        </span>

        <motion.span
          key={mood}
          className="mood"
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{ duration: 0.5 }}
        >
          {mood}
        </motion.span>

        <span className="button" onClick={goNext}>
          {'\u2192'}
        </span>
      </div>
      <div className="submit-btn">Go</div>
    </div>
  );
}
