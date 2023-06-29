import {useDispatch, useSelector} from 'react-redux'

//import Error from '../components/Error'
//import SongCard from '../components/SongCard'
//import { genres } from '../assets/constants'

import { useGetSongsByGenreQuery } from '../redux/services/spotifyCore'
//import { selectGenreListId } from "../redux/features/playerSlice";


const Discover = () => {

  //const dispatch = useDispatch();
  //const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const {data, isFetching, error} = useGetSongsByGenreQuery('POP')
    
  //if(isFetching) return <Loader title="Loading songs..." />

  //if(error) return <Error />

  //const genreTitle = genres.find(({value}) => value === genreListId)?.title

  return (
    <div>

      {console.log("TESTING: ", data)}
      {/*
        <div>
          <select
            onChange={(e) => {dispatch(selectGenreListId(e.target.value))}}
            value={genreListId || 'pop'}
          >
          {genres.map((genre) => (
            <option>
              {genre.title}
            </option>
          ))}
          </select>
        </div>

        {data for SongCard component } 
        <div>
          {data?.map((song, i) => (
            <SongCard 
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div>
        */}
    </div>
  );
};

export { Discover }