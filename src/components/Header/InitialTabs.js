import {  Archive, Article, Feed, 
    Home, ImportContacts, Info, 
     OndemandVideo,
  }  from '@mui/icons-material';
import {Tabs} from '@mui/material';
import LinkTab from './LinkTab';
import { Link } from 'react-router-dom';

const InitialTabs = ({openTab,value,setValue}) => {
 
  const handleChange = (event, newValue)=>{
    setValue(newValue);
  }
  

    return (
  
        <Tabs value={value} 
        
        onChange={handleChange} indicatorColor="primary" variant="scrollable">
    
        <LinkTab label="الرئيسية" to="/" icon={<Home/>} iconPosition='top' onClick={()=>openTab('')} />
    
        <LinkTab label="ابواب المجلة" to="/intro"  icon={<ImportContacts/>} iconPosition='top' onClick={()=>openTab('Magazine')}/>
    
        <LinkTab  label='المقالات' icon={<Article/>} to="/Articles" onClick={()=>openTab('Category')}/>
    
        <LinkTab  component={Link} label='Cerebro' to="/cerebro" onClick={()=>openTab('')} icon={<OndemandVideo/>} iconPosition='top' sx={{fontSize:13}}/>
    
    
        <LinkTab label="أخبار" to="/News" icon={<Feed/>} iconPosition='top' onClick={()=>openTab('News')}/>
    
    
        <LinkTab label="أرشيف" to="/Archive"  icon={<Archive/>} iconPosition='top' onClick={()=>openTab('')} />
    
    
        <LinkTab label="عن المجلة" to="/About"  icon={<Info/>} iconPosition='top' onClick={()=>openTab('')} />
    
    
    
      </Tabs>
  )
}

export default InitialTabs
