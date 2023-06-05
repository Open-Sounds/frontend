import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Search } from './components/Search'


function App() {
  const [artist, setArtist] = useState([])
  const [artistName, setArtistName] = useState('')
 
  const handleArtistName = (event) => {
    console.log("Artist name: ", event.target.value)
    setArtistName(event.target.value)
  }
                  

  const artistRequest = async (setArtistName) => {
    await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`, {
      headers: {
        'Authorization': 'Bearer BQC97g3hCNQwKjB3h2hVj7VOqJ8mj8LWD9jGgapKBFzQXUI7WoJN2nwlVGOwVC3lUejz9mdiM9fGeWbLKypcUNDnp3EJaGHdDlhATp79WvUArcZ58eE'
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
    <>
      <Navigation/> 
      <Search artistName={artistName} onChangeName={handleArtistName}/>
      <h1> Hello World</h1>
    </>
  )
}

export default App
