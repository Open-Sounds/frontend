import React from 'react'
import { useState, useEffect } from 'react'
import { Layout } from './Layout'

const Home = () => {
    const [artist, setArtist] = useState([])
    const [artistName, setArtistName] = useState('')
   
    const handleArtistName = (event) => {
      console.log("Artist name: ", event.target.value)
      setArtistName(event.target.value)
    }
                    
  
    const artistRequest = async () => {
      await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist%2Ctrack&limit=5`, {
        headers: {
          'Authorization': 'Bearer BQCN8gLHiwwV1wfDKuyOq9U35x378O1ajuy1HKKWCvi4A7zh8hJyDZ1w-YFXAPLfwzzMOAFfgukQHoj7bgkqQ4RZgRPVe0zCyH58Ah-8z3lG7wnPdeU'
        }
      })
        .then(response => response.json())
        .then(data => {
          // Process the response data
          setArtist(data)
          console.log('Results: ', data);
        })
    }
  
      useEffect(() => {
        artistRequest()
      }, [artistName])

      return (
        <Layout artistName={artistName} onChangeName={handleArtistName} artist={artist}/>
      )
}

export { Home }