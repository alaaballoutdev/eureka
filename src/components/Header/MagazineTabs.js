import {Tabs,Tab} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MagazineTabs = () => {
  const [value,setValue] =useState(1);
  const handleChange = (event,newValue)=>{
    setValue(newValue);
  }


  return (
     <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant='scrollable'
      
        >
  
          <Tab component={Link} label='افتتاحية العدد' to="/intro" value={1} sx={{fontSize:16}}/>
          <Tab label="ملف العدد"  component={Link} to="/magazine-f" value={2} sx={{fontSize:16}} />
          <Tab label="مقابلة العدد"  component={Link} to="/interview" value={3} sx={{fontSize:16}} />
  
        </Tabs>
  )
}

export default MagazineTabs
