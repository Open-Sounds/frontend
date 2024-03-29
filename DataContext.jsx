import * as React from 'react'
import axios from 'axios';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [dataFiltered, setDataFiltered] = React.useState(null);
    const [playlist, setPlaylist] = React.useState([]);
    const apiKey = import.meta.env.VITE_RAPID_API_KEY;

    React.useEffect(() => {
        const fetchData = async () => {
          
          const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
            params: {
              id: '37i9dQZEVXbMDoHDwVN2tF',
              offset: '0'
            },
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options); 
    
            setData(response.data.items);
            setDataFiltered(response.data.items);
            console.log('TEST AXIOS request: ', response.data.items);;
          }
          catch ( error ){
            console.error('Error fetching data: ', error.message);
          }
        }
    
        // call the fetchData function
        fetchData();
      }, []);

    function addPlaylist(song) {
      setPlaylist([...playlist, song])
    }

    function removePlaylist(name){
      setPlaylist(playlist.filter((favorite) => name !== favorite));
    }

    return (
        <DataContext.Provider value={{ data, setData, dataFiltered, setDataFiltered, playlist, addPlaylist, removePlaylist }}>
            {children}
        </DataContext.Provider>
    )
}