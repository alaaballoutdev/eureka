import {AppBar,useMediaQuery} from '@mui/material';
import CategoryTabs from './CategoryTabs';
import { Close, Menu} from  '@mui/icons-material';
import NewsTabs from './NewsTabs';
import MagazineTabs from './MagazineTabs';
import InitialTabs from './InitialTabs';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react';
import { HeaderContext } from 'Context/HeaderContext';


const Header = () => {
  const 
  {
    navigationValues,
    setNavigationDesktop,
    setNavigationMobile,
  } = useContext(HeaderContext);

  const contextRef = useRef(useContext(HeaderContext));
  
  const desktop = useMediaQuery('(min-width:600px)');
  const {pathname}= useLocation();
  const {nav,openedTab} =navigationValues;

  useEffect(()=>{
    contextRef.current.handlePathname(pathname);
  },[pathname, contextRef.current.handlePathname]);  
  
  
  return (
    <header>
    <AppBar position="absolute" sx={{backgroundColor:'white'}} 
      onMouseEnter={()=>setNavigationDesktop(true,desktop)} 
      onMouseLeave={()=>setNavigationDesktop(false,desktop)}>
      
      <div className="toolbar" >
        <button className='menu-button' onClick={()=>setNavigationMobile()}>
         { !nav?<Menu htmlColor='black' fontSize='medium' />:<Close htmlColor='black'/>} 
        </button>
       
        <div className='logo-wrapper'>
          <img src="/logo.png" alt="logo"   width={170}  />
        </div>
      </div>  
      <div className='initial-tabs-wrapper'>
        {nav? <InitialTabs/>:<></>}
      </div>
      {nav&&openedTab==='Category' ? <CategoryTabs/> : <></> }
      {nav&&openedTab==='News' ? <NewsTabs/> : <></>}
      {nav&&openedTab==='Magazine'? <MagazineTabs/> : <></>}
    </AppBar>    
    </header>

);
}
export default Header;