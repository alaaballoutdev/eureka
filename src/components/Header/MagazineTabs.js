import {Tabs} from '@mui/material';
import { Link } from 'react-router-dom';
import LinkTab from './LinkTab';
import { useContext } from 'react';
import { HeaderContext } from 'Context/HeaderContext';

const MagazineTabs = () => {
  const {navigationValues}= useContext(HeaderContext);
  const {valueMagazine} = navigationValues;



  return (
     <Tabs
        value={valueMagazine}
      
        indicatorColor="primary"
        variant='scrollable'
      >
  
          <LinkTab component={Link} label='افتتاحية العدد' to="/intro" value={1}  />
          <LinkTab label="ملف العدد"  component={Link} to="/magazine-f" value={2}  />
          <LinkTab label="مقابلة العدد"  component={Link} to="/interview" value={3}   />
  
        </Tabs>
  )
}

export default MagazineTabs
