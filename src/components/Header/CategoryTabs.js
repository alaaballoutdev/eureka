import { Link } from "react-router-dom"
import {Tabs } from "@mui/material";
import LinkTab from './LinkTab'
import { useContext } from "react";
import { HeaderContext } from "Context/HeaderContext";
const CategoryTabs = () => {
  const {navigationValues}= useContext(HeaderContext);
  const {valueCategory} = navigationValues;
  return (
      <Tabs
            value={valueCategory}
            indicatorColor="primary"
            variant='scrollable'
      >
                <LinkTab component={Link} label='كل الفئات' to="/Articles/All" value={1}  />
                <LinkTab component={Link} label='مدني' to="/Articles/Civil" value={2}  />
                <LinkTab label="ميكانيك"  component={Link} to="/Articles/Mechanical" value={3}  />
                <LinkTab label="بتروكيمياء" component={Link} to="/Articles/Petrochemical" value={4}  />
                <LinkTab label="كهرباء" component={Link} to="/Articles/Electrecity" value={5}  />
                <LinkTab label="اتصالات" component={Link} to="/Articles/Telecomunication" value={6}  />
                <LinkTab label="مواضيع عامة" component={Link} to="/Articles/General" value={7}  />
        </Tabs>
    
  )
}

export default CategoryTabs
