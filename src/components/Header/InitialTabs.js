import {  Archive, Article, Feed, 
    Home, ImportContacts, Info, 
     OndemandVideo,
  }  from '@mui/icons-material';
import {Tabs} from '@mui/material';
import LinkTab from './LinkTab';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { HeaderContext } from 'Context/HeaderContext';


const InitialTabs = () => {
 
 const {navigationValues,handleChange,openTab} = useContext(HeaderContext);
  const {value}= navigationValues



    return (
  
        <Tabs value={value} 
          onChange={handleChange} 
          indicatorColor="primary" 
          variant="scrollable"
        >
    
        <LinkTab label="الرئيسية" to="/" icon={<Home/>}   />
    
        <LinkTab label="ابواب المجلة" to="/intro"  icon={<ImportContacts/>}  onClick={()=>openTab('Magazine')}/>
    
        <LinkTab  label='المقالات' icon={<Article/>} to="/Articles/All" onClick={()=>openTab('Category')}/>
    
        <LinkTab  component={Link} label='Cerebro' to="/cerebro"  icon={<OndemandVideo/>}  sx={{fontSize:13}}/>
    
    
        <LinkTab label="أخبار" to="/News" icon={<Feed/>}  onClick={()=>openTab('News')}/>
    
    
        <LinkTab label="أرشيف" to="/Archive"  icon={<Archive/>}   />
    
    
        <LinkTab label="عن المجلة" to="/About"  icon={<Info/>}  />
    
    
    
      </Tabs>
  )
}

export default InitialTabs
