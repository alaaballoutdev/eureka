import {Tab,Tabs} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const NewsTabs = () => {
  const [value,setValue] =useState(1);
  const handleChange = (event, newValue)=>{
      setValue(newValue);
  }
  return (
     <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant='scrollable'
        aria-label="scrollable auto tabs example">

          <Tab component={Link} label='أخبار الكلية' to="/News" value={1} sx={{fontSize:16}}/>
          <Tab label="نشاطات الكلية"  component={Link} to="/Events" value={2} sx={{fontSize:16}} />
          </Tabs>
  )
}

export default NewsTabs
