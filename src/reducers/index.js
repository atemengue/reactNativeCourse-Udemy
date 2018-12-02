import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    { title: ' No Scrubs' , duration: '4:05' },
    { title: ' Boss Hard' , duration: '1:55' },
    { title: ' I want to love' , duration: '3:52' },
    { title: ' Open Up' , duration: '2:35' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})