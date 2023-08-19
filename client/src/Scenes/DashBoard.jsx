import React from 'react'
import './DashBoard.css';
import Navbar from '../Components/Navbar';
import {
  LightModeOutlined, 
  DarkModeOutlined, 
  Menu as MenuIcon, 
  Search, 
  SettingsOutlined, 
  ArrowDropDownOutlined, 
  Home, 
  ArrowForwardIos, 
  ShoppingCart, 
  Group, 
  ReceiptLong,
  Public,
  Folder,
  InsertInvitation,
  CalendarMonth,
  RemoveRedEye,
  PrivacyTip,
  FileDownload,
  Person
} from '@mui/icons-material';

const DashBoard = () => {
  return (
    <div className='DashBoard'>
      <div className="SideBar">
        <div className="row1SideBar">
          EShopVision
        </div>
        <div className="row2SideBar">
          <Home className='MuiIu' />
          <span>Dashboard</span>
          <ArrowForwardIos className='MuiIu2' />
        </div>
        <div className="row3SideBar">
          Client Facing
        </div>
        <div className="row4NormalJJ">
          <ShoppingCart  className='cdjn' />
          Products
        </div>
        <div className="row4NormalJJ">
          <Group  className='cdjn' />
          Customers
        </div>
        <div className="row4NormalJJ">
          <ReceiptLong  className='cdjn' />
          Transactions
        </div>
        <div className="row4NormalJJ">
          <Public  className='cdjn'/>
          Geography
        </div>
        <div className="row3SideBar">
          Sales
        </div>
        <div className="row4NormalJJ">
          <RemoveRedEye  className='cdjn'/>
          Overview
        </div>
        <div className="row4NormalJJ">
          <InsertInvitation  className='cdjn'/>
          Daily
        </div>
        <div className="row4NormalJJ">
          <CalendarMonth  className='cdjn'/>
          Monthly
        </div>
        <div className="row4NormalJJ">
          <Folder  className='cdjn'/>
          Breakdown
        </div>
        <div className="row3SideBar">
          Management
        </div>
        <div className="row4NormalJJ">
          <PrivacyTip  className='cdjn'/>
          Security
        </div>
      </div>
      <Navbar />
      <div className="DashboardCenter">
        <div className="row1dash">
          <div className="row1dash77">
            <div className="ziodq">
              DASHBOARD
            </div>
            <div className="zioeqdjs">
              Welcome to your dashboard!
            </div>
          </div>
          <div className="row1dash777">
            <button><FileDownload /> Download Reports</button>
          </div>
        </div>

        <div className="row2Dash76">
          <div className="rowGYUZ">
            <div className="eod">
              <div className="kzqd">
                <div className="yid">
                  <span>Total Customers</span>
                  <Person/>
                </div>
                <div className="yyd">
                  5269
                </div>
                <div className="yyy">
                  <span><em>+14%</em></span>
                  <span>Since last month</span>
                </div>
              </div>
              <div className="kzqd">
                
              </div>
            </div>
            <div className="eod">
              <div className="kzqd">

              </div>
              <div className="kzqd">
                
              </div>
            </div>
          </div>
          <div className="iojlzfqd">
            
          </div>
        </div>


      </div>
    </div>
  )
}

export default DashBoard