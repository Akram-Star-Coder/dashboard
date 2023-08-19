import React from 'react'
import './Navbar.css';
import {
  LightModeOutlined, 
  DarkModeOutlined, 
  Menu as MenuIcon, 
  Search, 
  SettingsOutlined, 
  ArrowDropDownOutlined, 
  Home
} from '@mui/icons-material';
import {useDispatch } from 'react-redux';
import {setmode } from '../state/index';
import { AppBar, Toolbar, useTheme } from '@mui/material';


const Navbar = () => {

  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <>
    <div className="Navbar">
      <div className="leftSideNav">
        <input spellCheck={false} type="text"  placeholder='Search...'/>
        <button>
          <Search className='SearchMUI'/>
        </button>
      </div>
      <div className="rightSideNav">
        <button>
          <DarkModeOutlined className='MUI' />
        </button>
        <button>
          <SettingsOutlined className='MUI' />
        </button>
        <button className='BigBtnContainer'>
          <img src="https://media.licdn.com/dms/image/D5603AQFIiXtiGobjCw/profile-displayphoto-shrink_400_400/0/1692109535815?e=1697673600&v=beta&t=1ik0HYGJsPCi5ivRdpaecOzNKN-WGZu6OrDms6Lo9fA" alt="" />
          <span>Mr.Akram</span>
          <ArrowDropDownOutlined className='MUI' />
        </button>
      </div>
    </div>
    </>
  )
}

export default Navbar