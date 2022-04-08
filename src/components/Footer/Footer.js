
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {Link} from 'react-router-dom';

export default function Footer() {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <>
  
     
    <BottomNavigation value={value} onChange={handleChange} className='footer'>

     <Link to='/'>
      <BottomNavigationAction
        icon={<HomeOutlinedIcon />}
        className='icon'
      />
      </Link>
      <Link to='/addUser'>
      <BottomNavigationAction
        icon={<AddOutlinedIcon  style={{fontSize:'35px',
        backgroundColor:'yellow',borderRadius:'50%',color:'black',
        }}/>}
        className='icon'
      />
      </Link>
      <Link to=''>
      <BottomNavigationAction
        icon={<SettingsOutlinedIcon />}
        className='icon'
      />
      </Link>
    </BottomNavigation>
    
    </>
  );
}
