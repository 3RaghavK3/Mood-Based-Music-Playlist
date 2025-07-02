import { MainLayout } from '../layout/MainLayout';
import { HomeContent } from '../components/HomePage/HomeContent';
// @ts-ignore
import { useState } from 'react';
// @ts-ignore
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import bg1 from '../assets/happy-bg.png';
// @ts-ignore
import bg2 from '../assets/energetic-bg.jpg';
// @ts-ignore
import bg3 from '../assets/chill-bg.jpg';
// @ts-ignore
import bg4 from '../assets/focus-bg.jpg';
// @ts-ignore
import bg5 from '../assets/sad-bg.jpg';
import './Home.css';

export function Home() {
  const moods = ['Happy', 'Energetic', 'Chill', 'Focus', 'Sad'];

  const images = {
    Happy: bg1,
    Energetic: bg2,
    Chill: bg3,
    Focus: bg4,
    Sad: bg5,
  };

  const [mood, setMood] = useState('Happy');
  const [newImage, setnewImage] = useState(bg1);
  const [direction, setDirection] = useState(null);
  const [oldImage, setoldImage] = useState(null);

  return (
    <MainLayout>
      <div className="bg-wrapper">
        <motion.div
          key={newImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="newbg-container"
          style={{
            backgroundImage: `url(${newImage})`,
          }}
        ></motion.div>

        <motion.div
          className="oldbg-container"
          key={oldImage}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${oldImage})`,
          }}
        ></motion.div>

        <HomeContent
          mood={mood}
          setMood={setMood}
          setnewImage={setnewImage}
          moods={moods}
          images={images}
          direction={direction}
          setDirection={setDirection}
          setoldImage={setoldImage}
        />
      </div>
    </MainLayout>
  );
}
