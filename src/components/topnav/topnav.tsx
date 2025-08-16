import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import exampleImage from '../../assets/logo/HP_logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import './topnav.scss';
import { Button } from '@mui/material';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(getTabIndex(location.pathname));

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        console.log('newValue', newValue)
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/dashboard');
                break;
            case 1:
                navigate('/sales');
                break;
            case 2:
                navigate('/customer');
                break;
            case 3:
                navigate('/purchase');
                break;
            case 4:
                navigate('/contact-us');
                break;
            default:
                break;
        }
    };

    React.useEffect(() => {
        setValue(getTabIndex(location.pathname));
    }, [location.pathname]);

    function getTabIndex(pathname: string) {
        switch (pathname) {
            case '/sales':
                return 1;
            case '/customer':
                return 2;
            case '/purchase':
                return 3;
            case '/contact-us':
                return 4;
            case '/dashboard':
            default:
                return 0;
        }
    }

    return (
        <div className='navigation'>
            <Box className="top_nav" sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <div>
                <img className='image_logo' src={exampleImage} alt='Logo' />
            </div>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Home" value={0} {...a11yProps(0)} />
                <Tab label="Sales" value={1} {...a11yProps(1)} />
                <Tab label="Customer" value={2} {...a11yProps(2)} />
                <Tab label="Purchase" value={3} {...a11yProps(3)} />
                    <Tab label="Contact Us" value={4} {...a11yProps(4)} />
            </Tabs>
                <Button variant="text" onClick={logOut}>Log out</Button>
        </Box>  
        </div>
   
      
    );
}
