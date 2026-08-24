
import Activity from './Activity';
import './App.css';

import Nav from './Nav-sec/Nav';
import Searchbar from './Nav-sec/Searchbar';
import Avatar from './Nav-sec/Avatar';
import Tasks from './Task';
import Card from './Card';
import Navs from './Nav-sec/Navs';
import Dashboard from './Dashboard/Dashboard';
import Menu from './Menu';
import { useState } from "react";


function App() {
 const [showNav, setShowNav] = useState(false);
  return (




    <div className="container-fluid main-bg">

     

      {/* Top Navbar */}
    
<div className="row align-items-center border-bottom bg-wh topnav-fix">

  {/* Navs - only lg and above */}
  <div className="d-none d-lg-flex col-md-2 col-lg-2 border-end">
    <Navs />
  </div>

  {/* Searchbar */}
 <div className="col-6 col-md-2 d-block d-lg-none">

  <Menu onMenuClick={() => setShowNav(!showNav)} />

  {/* Overlay */}
  {showNav && (
    <div
      className="sidebar-overlay"
      onClick={() => setShowNav(false)}
    ></div>
  )}

  {/* Sidebar */}
  <div className={`sidebar ${showNav ? "show" : ""}`}>
    <Nav />
  </div>

</div>
  <div className=" d-none d-md-block col-md-6 col-lg-8 border-end mb-1">
    <Searchbar />
  </div>

  {/* Avatar */}
  <div className="col-6 col-md-4 col-lg-2 text-end">
    <Avatar />
  </div>

</div>


      {/* Sidebar + Content */}

      <div className="row mt-0">

        <div className="d-none d-sm-none d-md-none d-lg-flex col-lg-2 sidebar-fix  ">
          <Nav />
        </div>




        <div className="col-lg-10 content-fix">

          <div className='w-100'>
            <Dashboard />
          </div>

          {/* call the Cards */}



          <div className="row g-3 mt-2 ">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <Card icon={<i className="bi bi-people me-2"></i>} number="12.5%"
                icon1={<i class="bi bi-arrow-up-right"></i>} title="TOTAL USERS" value="14,285" />
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <Card icon={<i className="bi bi-suitcase-lg me-2"></i>} number="4.2%"
                icon1={<i class="bi bi-arrow-up-right"></i>}
                title="ACTIVE PROJECTS" value="64" />
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <Card icon={<i className="bi bi-check2-square me-2 style={{color:red}}"></i>} number="2.1%"
                icon1={<i class="bi bi-arrow-down-left"></i>}
                title="Open Tasks " value="182" />
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <Card icon={<i class="bi bi-currency-dollar"></i>} number="18.7%"
                icon1={<i class="bi bi-arrow-up-right"></i>}
                title="Revenue (MTD)" value="$42,850" />
            </div>
          </div>

          {/* White space madhye he 2 components */}
          <div className="row mt-4">
            <div className="col-lg-9 col-sm-12 col-md-12">
              <Activity />
            </div>

            <div className="col-lg-3 col-sm-12 col-md-12  mt-4 mt-lg-2">
              <Tasks />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}











export default App;
