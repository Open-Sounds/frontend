import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Discover } from './pages/Discover'
import { Navigation } from './components/Navigation'

const App = () =>{
  

  return (

    <div>
      {/*Add navigation component */}
      <Navigation/> 

      <Routes>
        <Route path="/" element={<Discover/>}/>
      </Routes>
    </div>
  )
}

export default App
