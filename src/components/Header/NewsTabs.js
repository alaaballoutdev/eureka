import {Tabs} from '@mui/material';
import { Link } from 'react-router-dom';
import LinkTab from './LinkTab';



const NewsTabs = ({value,setValue}) => {

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

          <LinkTab component={Link} label='أخبار الكلية' to="/News" value={1} />
          <LinkTab label="نشاطات الكلية"  component={Link} to="/Events" value={2}  />
          </Tabs>
  )
}

export default NewsTabs
