import React, { useMemo } from 'react'
import './App.css';
import { ThemeProvider } from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {themeSettings} from './theme';
import {useSelector} from 'react-redux';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import DashBoard from './Scenes/DashBoard';


const App = () => {

  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])


  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={ <Navigate to='/dashboard' replace />  }  />
            <Route path='*' element={ <Navigate to='/dashboard' replace  /> }  />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
