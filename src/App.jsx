import * as React from 'react';
import axios from 'axios';

import Home from './pages/home/home';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
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
          </Routes>
          <Footer />
      </Router>
    </DataProvider>
  )
}

export default App
