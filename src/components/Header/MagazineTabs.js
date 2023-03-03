import {Tabs} from '@mui/material';

import { Link } from 'react-router-dom';
import LinkTab from './LinkTab';

const MagazineTabs = ({value,setValue}) => {
  
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
  
          <LinkTab component={Link} label='افتتاحية العدد' to="/intro" value={1} />
          <LinkTab label="ملف العدد"  component={Link} to="/magazine-f" value={2}  />
          <LinkTab label="مقابلة العدد"  component={Link} to="/interview" value={3}  />
  
        </Tabs>
  )
}

export default MagazineTabs
