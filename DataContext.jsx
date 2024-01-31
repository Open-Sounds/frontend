import * as React from 'react'
import axios from 'axios';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = React.useState(null);
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
    
            setData(response.data);
            console.log('TEST AXIOS request: ', response.data);;
          }
          catch ( error ){
            console.error('Error fetching data: ', error.message);
          }
        }
    
        // call the fetchData function
        fetchData();
      }, []);


    const updateData = newData => {
        setData(newData);
    };

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    )
}