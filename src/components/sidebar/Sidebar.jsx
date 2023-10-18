import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PollIcon from '@mui/icons-material/Poll';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';
import "./sidebar.scss";
import { useContext } from 'react';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Logo</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <StoreIcon className='icon'/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <InventoryOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <PollIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICES</p>
                <li>
                    <MedicalInformationIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className='colorOption' onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className='colorOption' onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>)
}

export default Sidebar;