import {AppBar,useMediaQuery} from '@mui/material';
import {useState} from 'react';
import CategoryTabs from './CategoryTabs';
import {KeyboardArrowDown, KeyboardArrowUp, Menu} from  '@mui/icons-material';
import NewsTabs from './NewsTabs';
import MagazineTabs from './MagazineTabs';
import InitialTabs from './InitialTabs';

const Header = () => {

  const desktop = useMediaQuery('(min-width:600px)');
  const [nav,setNav]=useState(false);
  const [openedTab,setOpenedTab]=useState('');
  const [value,setValue]= useState(0);  
  const openTab = (tabname)=>{
    switch(tabname){
      case 'Magazine':{
        setOpenedTab(tabname)
        break;
      }
      case 'News':{
        setOpenedTab(tabname);
        break;
      }
      case 'Category':{
        setOpenedTab(tabname);
        break;
      }
      default:{
      setOpenedTab(tabname);
        break;
      }
    }
  }
  const setNavigationDesktop= (navigation)=>{
    if(window && window.innerWidth>600){
      setNav(navigation)
    }
 

  }
  return (
    
    <AppBar position="absolute" sx={{backgroundColor:'white'}} 
      onMouseEnter={()=>setNavigationDesktop(true)} 
      onMouseLeave={()=>setNavigationDesktop(false)}>
      
      <div className="toolbar" >
        <button className='menu-button' onClick={()=>setNav(!nav)}> 
          <Menu htmlColor='black' fontSize='medium' /> 
        </button>
        { desktop&&
          (!nav? <KeyboardArrowDown htmlColor='grey'/>:<KeyboardArrowUp htmlColor="grey"/>)
        } 
        <div className='logo-wrapper'>
          <img src="/logo.png" alt="logo"   width={170}  />
        </div>
      </div>  
      <div className='initial-tabs-wrapper'>
        {nav? <InitialTabs value={value} setValue={setValue} openTab={openTab}/>:<></>}
      </div>
      {nav&&openedTab==='Category' ? <CategoryTabs   />:<></> }
      {nav&&openedTab==='News' ? <NewsTabs />:<></>}
      {nav&&openedTab==='Magazine'? <MagazineTabs />:<></>}
    </AppBar>    
    

);
}

export default Header;
