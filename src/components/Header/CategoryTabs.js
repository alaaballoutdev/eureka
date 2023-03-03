import { Link } from "react-router-dom"
import {Tabs } from "@mui/material";
import LinkTab from './LinkTab'
const CategoryTabs = ({value,setValue}) => {
  
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
                <LinkTab component={Link} label='كل الفئات' to="/Articles" value={1} />
                <LinkTab component={Link} label='مدني' to="/Articles/Civil" value={2} />
                <LinkTab label="ميكانيك"  component={Link} to="/Articles/Mechanical" value={3}  />
                <LinkTab label="بتروكيمياء" component={Link} to="/Articles/Petro" value={4}  />
                <LinkTab label="كهرباء" component={Link} to="/Articles/Electrecity" value={5} />
                <LinkTab label="اتصالات" component={Link} to="/Articles/Telecom" value={6}  />
                <LinkTab label="مواضيع عامة" component={Link} to="/Articles/General" value={7} />
        </Tabs>
    
  )
}

export default CategoryTabs
