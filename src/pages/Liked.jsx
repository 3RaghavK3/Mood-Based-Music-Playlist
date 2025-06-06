import { MainLayout } from '../layout/Mainlayout';
import { SongCards } from '../components/SongsPage/songCards';
import { LikedContext } from '../context/LikedContext';
import { useContext } from 'react';
export function Liked() { 

  const {likedsongs, setlikedsong}=useContext(LikedContext);
  

  return (
    <>
      <MainLayout>
          
                <div
            className="wrapper-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '75px',
              width: '85%',
              margin: `0 auto`,
              marginBottom: '10px',
              flex:"1"
            }}
          >
                 <span style={{
                width: '100%',
                fontFamily: 'Advent Pro',
                fontSize: '2rem',
           }}>Liked Songs</span>

                {likedsongs.length==0
                    ?<div style={{
                        fontFamily: `'Baloo Thambi 2', system-ui`,
                        fontSize: '5rem',
                        fontWeight: 1000,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                         }}
                >No Songs in Library</div>
                    :likedsongs.map((song)=>
                <SongCards
                 key={song.id}
                  id={song.id}
                  title={song.title}
                  artist={song.artist}
                  preview={song.preview}
                  />)
        }

          </div>
      </MainLayout>
    </>
  );
}
