import { Link } from "react-router-dom"
import { Tab,Tabs } from "@mui/material"
import { useState } from "react";
const CategoryTabs = () => {
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
              aria-label="scrollable auto tabs example"
              >
                <Tab component={Link} label='كل الفئات' to="/Articles" value={1} sx={{fontSize:16}}/>
                <Tab component={Link} label='مدني' to="/Articles/Civil" value={2} sx={{fontSize:16}}/>
                <Tab label="ميكانيك"  component={Link} to="/Articles/Mechanical" value={3} sx={{fontSize:16}} />
                <Tab label="بتروكيمياء" component={Link} to="/Articles/Petro" value={4} sx={{fontSize:16}} />
                <Tab label="كهرباء" component={Link} to="/Articles/Electrecitiy" value={5} sx={{fontSize:16}} />
                <Tab label="اتصالات" component={Link} to="/Articles/Telecom" value={6} sx={{fontSize:16}} />
                <Tab label="مواضيع عامة" component={Link} to="/Articles/General" value={7} sx={{fontSize:16}} />
        </Tabs>
    
  )
}

export default CategoryTabs
