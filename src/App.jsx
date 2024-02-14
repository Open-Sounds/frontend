import * as React from 'react';
import axios from 'axios';

import Home from './pages/home/home';
import Playlist from './pages/playlist/playlist';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import { DataProvider, DataContext } from '../DataContext';

import { BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom';

const App = () => {

  return (
    <DataProvider>
      <Router>
          <NavigationBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/playlist' element={<Playlist />}/>
          </Routes>
          <Footer />
      </Router>
    </DataProvider>
  )
}

export default App
