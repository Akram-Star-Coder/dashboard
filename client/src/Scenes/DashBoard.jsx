import React, { useEffect, useState } from 'react'
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
  Person,
  ShoppingBasket,
  Savings,
  HomeRepairService
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';

const data = [
  { name: 'September', value: 4 },
  { name: 'October', value: 6 },
  { name: 'November', value: 5 },
  { name: 'December', value: 3 },
  { name: 'January', value:  7},
  { name: 'February', value: 8 },
  { name: 'March', value:  7},
  { name: 'April', value:  11},
  { name: 'May', value:  11},
  { name: 'June', value:  1},
  { name: 'July', value:  12},
  { name: 'August', value: 15.6 },
];





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
                  <Person className='IHK'/>
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
                <div className="yid">
                  <span>Daily Sales</span>
                  <ShoppingBasket className='IHK'/>
                </div>
                <div className="yyd">
                  8815
                </div>
                <div className="yyy">
                  <span><em>+37%</em></span>
                  <span>Since last day</span>
                </div>
              </div>


            </div>
            <div className="eod">
              
              
              <div className="kzqd">
                <div className="yid">
                  <span>Monthly Sales</span>
                  <Savings className='IHK'/>
                </div>
                <div className="yyd">
                  11502
                </div>
                <div className="yyy">
                  <span><em>+79%</em></span>
                  <span>Since last month</span>
                </div>
              </div>


              <div className="kzqd">
                <div className="yid">
                  <span>Yearly Sales</span>
                  <HomeRepairService className='IHK'/>
                </div>
                <div className="yyd">
                  71309
                </div>
                <div className="yyy">
                  <span><em>+9%</em></span>
                  <span>Since last year</span>
                </div>
              </div>



            </div>
          </div>
          <div className="iojlzfqd">

            <LineChart width={666} height={280} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" />
              <Tooltip />
              <Legend />
              <div className="chart-mask"></div>
              <Line strokeWidth={2.9} type="monotone" dataKey="value" stroke="#ffee00" />
            </LineChart>

          </div>
        </div>



        <div className="rowFInal">
          
          
          <div className="uhqdk">
            <div className="uuzfkd">
              User Name
            </div>
            <div className="uuzfkd">
              User Id
            </div>
            <div className="uuzfkd">
              Integration
            </div>
            <div className="uuzfkd noborderright">
              User Last Transaction
            </div>           
          </div>


          <div className="uhqdk">
            <div className="uuzfkd">
              Akram Elbasri
            </div>
            <div className="uuzfkd">
              Zack Jackson
            </div>
            <div className="uuzfkd">
              Ofa Jackeline
            </div>
            <div className="uuzfkd noborderright">
              Moro Cice
            </div>           
          </div>





          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>




          <div className="uhqdk">
            <div className="uuzfkd">
              iNTEGRATION 87364A
            </div>
            <div className="uuzfkd">
            iNTEGRATION 7823GUZ
            </div>
            <div className="uuzfkd">
            iNTEGRATION 7823DSQ87T
            </div>
            <div className="uuzfkd noborderright">
            iNTEGRATION 5DAS
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
              Akram Elbasri
            </div>
            <div className="uuzfkd">
              Zack Jackson
            </div>
            <div className="uuzfkd">
              Ofa Jackeline
            </div>
            <div className="uuzfkd noborderright">
              Moro Cice
            </div>           
          </div>





          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>




          <div className="uhqdk">
            <div className="uuzfkd">
              iNTEGRATION 87364A
            </div>
            <div className="uuzfkd">
            iNTEGRATION 7823GUZ
            </div>
            <div className="uuzfkd">
            iNTEGRATION 7823DSQ87T
            </div>
            <div className="uuzfkd noborderright">
            iNTEGRATION 5DAS
            </div>           
          </div>

          <div className="uhqdk">
            <div className="uuzfkd">
              Akram Elbasri
            </div>
            <div className="uuzfkd">
              Zack Jackson
            </div>
            <div className="uuzfkd">
              Ofa Jackeline
            </div>
            <div className="uuzfkd noborderright">
              Moro Cice
            </div>           
          </div>





          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>
          <div className="uhqdk">
            <div className="uuzfkd">
             832JHK782783562356
            </div>
            <div className="uuzfkd">
              87637R6ERA9ER
            </div>
            <div className="uuzfkd">
              9AE857689356239524389
            </div>
            <div className="uuzfkd noborderright">
               9276293R9639RE6A3
            </div>           
          </div>




          <div className="uhqdk">
            <div className="uuzfkd">
              iNTEGRATION 87364A
            </div>
            <div className="uuzfkd">
            iNTEGRATION 7823GUZ
            </div>
            <div className="uuzfkd">
            iNTEGRATION 7823DSQ87T
            </div>
            <div className="uuzfkd noborderright">
            iNTEGRATION 5DAS
            </div>           
          </div>


        </div>


      </div>
    </div>
  )
}

export default DashBoard