import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'


function App() {
  const [artist, setArtist] = useState(0)

  const spotfiyAPI = 'https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb'

  fetch(spotfiyAPI, {
    headers: {
      'Authorizaton': 'Bearer BQDu4eFkGnrD2lNbN3xZFoskc4NZCfMXMgoTZUElevnHNj1Vh6cO49CD_sto8K7xLflfMrz12rTtFU54jntyRdw1iOgM-AcNlHi0jtmeKXK-Q1PN-AQ'
    }
  })
    .then(response => response.json())
    .then(data => {
      setArtist(data)
      console.log(data)
    })
    .catch( error => {
      console.error('Error: ', error)
    })


  return (
    <>
      <Navigation/> 
      <h1> Hello World</h1>
    </>
  )
}

export default App
