import { MainLayout } from "../layout/Mainlayout";
import { HomeContent } from "../components/HomePage/HomeContent";
import { useState } from "react";


import bg1 from '../assets/happy-bg.png';
import bg2 from '../assets/energetic-bg.jpg';
import bg3 from '../assets/chill-bg.jpg';
import bg4 from '../assets/focus-bg.jpg';
import bg5 from '../assets/sad-bg.jpg';



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
    const [bgImage, setBgImage] = useState(bg1);
    
  return (
    <MainLayout>
        <div
  className="home-wrapper"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flex: 1,
  }}
>
            <HomeContent
          mood={mood}
          setMood={setMood}
          setBgImage={setBgImage}
          moods={moods}
          images={images}
        />
            
        </div>
        
      
      
    </MainLayout>
  );
}
