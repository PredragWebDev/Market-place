import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import QuizIcon from '@mui/icons-material/Quiz';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import useAuth from '../../../Hook/UseAuth';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function Dashboardtwo(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin , logOut } = useAuth()
  // console.log(admin)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ background:'#040437' , overflow:'hidden' , paddingBottom:'350px'}}>
      <Toolbar    />
      <Divider />
        <Link className='dashboard-home'  to="/home"> <HomeIcon></HomeIcon> HOME</Link>
     
        { admin && <Box>
        <p className="title">Admin Useful</p>
        <Link className='link-style-das' to={`/dashboard2/addproduct`}>
                   <li className='dashboard-li'>
                        <Inventory2RoundedIcon className='icon'/>
                        <span>Add-Products</span>
                        </li></Link>
        </Box>}
                       
                   
                   { admin && <Link className='link-style-das' to={`/dashboard2/addadmin`}>
                   <li className='dashboard-li'>
                        <AssessmentIcon className='icon'/>
                        <span> Make An Admin</span>
                        </li></Link>}
                        <p className="title">Services</p>
                   { admin && <Link className='link-style-das' to={`/dashboard2/addticketbooking`}>
                    <li className='dashboard-li'>
                        <SettingsSystemDaydreamIcon className='icon'/>
                        <span>Ticket-Booking</span>
                    </li>
                    </Link>}
                  { admin &&  <Link className='link-style-das' to={`/dashboard2/addEventRegister`}>
                    <li className='dashboard-li'>
                        <AppRegistrationIcon className='icon'/>
                        <span>Event-Register</span>
                    </li>
                    </Link>}

                    <Link className='link-style-das' to={`/dashboard2/addreview`}>
                    <li className='dashboard-li'>
                        <ReviewsIcon className='icon'/>
                        <span>Add-Review</span>
                        </li>
                    </Link>
                    <Link className='link-style-das' to={`/dashboard2/yourShop`}>
                    <li className='dashboard-li'>
                        <ShoppingBagIcon className='icon'/>
                        <span>Your Shop</span>
                    </li>
                    </Link>
                    <p className="title">User</p>
                   
                    <Link className='link-style-das' to={`/dashboard2/contest/start`}>
                    <li className='dashboard-li'>
                        <QuizIcon className='icon'/>
                        <span>Contest</span>
                    </li>
                    </Link>
                 {/* <Link to={`/dashboard2/profile`}>   <li  className='dashboard-li'>
                        <LogoutIcon className='icon' />
                        <span>Profile</span>
                        </li></Link> */}
                    <li onClick={logOut} className='dashboard-li'>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                        </li>
          
      
      <Divider />
   
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{background:'#8d92a3'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{color:'#355f2f', fontSize:'50px',fontWeight:'700' }} variant="h6" noWrap component="div">
            Sports Club
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
           
          }}
          

        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboardtwo.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboardtwo;
