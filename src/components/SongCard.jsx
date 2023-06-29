import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import PlayPause  from './PlayPause'

const SongCard = ({ song, isPlaying, setActiveSong, i , data}) => {
    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick = () => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true))
    }

    return(
        <div>
            <PlayPause
                isPLaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick}
            />
            {/*
                add an img tag to showcase the song image 
            */}
        </div>
    )
}

export default SongCard; 

