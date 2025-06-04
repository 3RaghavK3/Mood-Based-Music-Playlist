import './HomeContent.css';
import React, { useState } from 'react';

export function HomeContent({mood,setMood,setBgImage,moods,images}) {

  const textColor = (index) => {
    const root = document.documentElement;
    if (moods[index] === 'Sad') {
      root.style.setProperty('--text-color', 'white');
    } else {
      root.style.setProperty('--text-color', 'black');
    }
  };

  const goPrevious = () => {
    let index = moods.indexOf(mood);
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = moods.length - 1;
    }
    setMood(moods[newIndex]);
    textColor(newIndex);
    setBgImage(images[moods[newIndex]]);
  };

  const goNext = () => {
    let index = moods.indexOf(mood);
    let newIndex = index + 1;
    if (newIndex >= moods.length) {
      newIndex = 0;
    }
    setMood(moods[newIndex]);
    textColor(newIndex);
    setBgImage(images[moods[newIndex]]);
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">CHOOSE YOUR MOOD</div>
        <div className="title-tagline">
          Select your current mood and we’ll curate a playlist just for you
        </div>
        <div className="carousel">
          <span className="button" onClick={goPrevious}>
            {'\u2190'}
          </span>
          <span className="mood">{mood}</span>
          <span className="button" onClick={goNext}>
            {'\u2192'}
          </span>
        </div>
        <div className="submit-btn">Go</div>
      </div>
    </>
  );
}
