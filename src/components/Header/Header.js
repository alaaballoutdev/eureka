import {AppBar,useMediaQuery} from '@mui/material';
import {useState,useEffect} from 'react';
import CategoryTabs from './CategoryTabs';
import { KeyboardArrowDown, KeyboardArrowUp, Menu} from  '@mui/icons-material';
import NewsTabs from './NewsTabs';
import MagazineTabs from './MagazineTabs';
import InitialTabs from './InitialTabs';
import { useLocation } from 'react-router-dom';
import { CategoryMap, InitialMap, MagazineMap, NewsMap } from './HeaderMaps';

const Header = () => {

  const desktop = useMediaQuery('(min-width:600px)');
  const [nav,setNav]=useState(false);
  const [openedTab,setOpenedTab]=useState('');
  const [value,setValue]= useState(0);  
  const [valueMagazine,setValueMagazine]=useState(1);
  const [valueNews,setValueNews]=useState(1);
  const [valueCategory,setValueCategory]= useState(1);
  const {pathname}= useLocation();
  

 
   useEffect(()=>{
    
    
    const handlePathname= ()=>{
        if(pathname.includes('/Articles')){
          setValue(2)
          openTab('Category')
          setValueCategory(CategoryMap.get(pathname))
          return ;
        }
        if(pathname==='/News' || pathname==='/Events'){
          setValue(4);
          openTab('News');
          setValueNews(NewsMap.get(pathname));
          return ;
        }
        if(pathname==='/intro'||pathname==='/magazine-f'||pathname==='/interview'){
          setValue(1);
          openTab('Magazine');
          setValueMagazine(MagazineMap.get(pathname))
          return;
        }
        setValue(InitialMap.get(pathname))


    }
  
    
    handlePathname();


  },[pathname]);


  
  const openTab = (tabname)=>{
    setOpenedTab(tabname);
    setValueMagazine(1);
    setValueNews(1);
    setValueCategory(1);
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
      {nav&&openedTab==='Category' ? <CategoryTabs value={valueCategory} setValue={setValueCategory}  />:<></> }
      {nav&&openedTab==='News' ? <NewsTabs value={valueNews} setValue={setValueNews} />:<></>}
      {nav&&openedTab==='Magazine'? <MagazineTabs value={valueMagazine} setValue={setValueMagazine} />:<></>}
    </AppBar>    
    

);
}

export default Header;
