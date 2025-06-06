import { useContext, useState ,useEffect} from 'react';
import { LikedContext } from '../context/LikedContext';

export function Heart({id,title,artist,song}) {
  const [isliked, setliked] = useState(false);
  const {likedsongs, setlikedsong}=useContext(LikedContext);
 

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 550 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={isliked ? 'red' : 'white'}
      stroke="black"
      strokeWidth="20"

      style={{
        cursor: 'pointer',
      }}

          onClick={() => {
      const newLikedStatus = !isliked;
      setliked(newLikedStatus);

      if (newLikedStatus) {
        setlikedsong([
          ...likedsongs,
          {
            title: title,
            artist: artist,
            id: id,
            preview: song,
            likestatus: newLikedStatus,
          },
        ]);
      } else {
        setlikedsong(likedsongs.filter((s) => s.songid !== id));
      }

      
    }}


  
    >
      <path
        d="M471.701,73.497c-54.321-46.505-136.007-38.854-186.153,13.566l-19.548,20.009l-19.548-20.009
        c-50.146-52.419-131.832-60.071-186.153-13.566c-62.994,53.953-66.005,149.716-9.709,207.799l193.503,198.67
        c6.28,6.449,16.524,6.449,22.804,0l193.503-198.67C537.706,223.213,534.695,127.45,471.701,73.497z"
      />
    </svg>
  );
}
