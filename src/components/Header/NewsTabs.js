import {Tabs} from '@mui/material';
import { Link } from 'react-router-dom';
import LinkTab from './LinkTab';
import { useContext } from 'react';
import { HeaderContext } from 'Context/HeaderContext';

const NewsTabs = () => {

const {navigationValues}= useContext(HeaderContext);
const {valueNews} = navigationValues
  
  return (
     <Tabs
        value={valueNews}
        indicatorColor="primary"
        variant='scrollable'
      >

          <LinkTab component={Link} label='أخبار الكلية' to="/News" value={1} />
          <LinkTab label="نشاطات الكلية"  component={Link} to="/Events" value={2}/>
      </Tabs>
  )
}

export default NewsTabs
