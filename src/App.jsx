import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home'
import { Playlist } from './routes/Playlist'

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/playlist", element: <Playlist/>}

  ])
  return (

    <>
      <RouterProvider router={router}/>
    </>
    /*
    <>
      <Navigation/> 
      <Search artistName={artistName} onChangeName={handleArtistName}/>
      <ArtistProfile artist={artist} />
      <Container> 
        <Row> 
          <Col>AI Covers Section</Col>
        </Row>
      </Container>
    </>
    */
  )
}

export default App
