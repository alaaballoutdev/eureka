import AppBar from '@mui/material/AppBar';
import {useState} from 'react';
import IconButton  from '@mui/material/IconButton';
import MenuIcon  from '@mui/icons-material/Menu';
import videoLogo  from './videologo.mp4';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import FeedIcon from '@mui/icons-material/Feed';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ArchiveIcon from '@mui/icons-material/Archive';
import { withStyles } from '@mui/styles';
import InfoIcon from '@mui/icons-material/Info';




const Header = () => {
//toggles of bars
    const [nav,setNav]=useState(0);
    const [cat,setCat]=React.useState(0);
    const [news,setNews]=React.useState(0);
    const [maga,setMaga]=React.useState(0);

// values of bar to highlight active tabs
    const [value, setValue] = React.useState(-1);
    const [valueM, setValueM] = React.useState(0);
    const [valueC, setValueC] = React.useState(1);
    const [valueN, setValueN] = React.useState(1);

// handlers of tabs to change value
    const handleChange = (event, newValue)=>{
      setValue(newValue);}


    const handleChangeC = (event, newValue)=>{
    setValueC(newValue);}


   const handleChangeN = (event, newValue)=>{
     setValueN(newValue);}

    const handleChangeM = (event, newValue)=>{
      setValueM(newValue);}

//BUILD A CUSTOM TAB
        const CustomTab = withStyles({
            root: {
              textTransform: "none",},
              })(Tab);


//build link Tabs
    function LinkTab(props) {

      return (
        <Tab
        component={Link}
        sx={{fontSize:16,float:"right",m:0}}
        onClick={()=>{setNews(0);
              setCat(0);
              setValueC(0);
              setValueN(1);
              setMaga(0);
              setValueM(0)}}
              {...props}

              />
              );
            }

  return (


    <AppBar position="sticky" sx={{backgroundColor:'white'}}  >

      <div className="toolbar" >
        <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={()=>setNav(!nav)}>
              <MenuIcon />
        </IconButton>

        {/*LOGO !!*/}
        <video src={videoLogo} autoPlay={true} muted  width="230px"id="logo" className="lo" />
      </div>

{/*navbar*/}

    {nav?
        <>
{/*initial tabs*/}
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="scrollable auto tabs example"
        variant="scrollable"
        >

    <LinkTab label="الرئيسية" to="/"   icon={<HomeIcon/>} iconPosition='top' />

    <LinkTab label="ابواب المجلة" to="/intro"  icon={<ImportContactsIcon/>} iconPosition='top'

    onClick={()=>{setMaga(!maga);
                  setNews(0);
                  setCat(0);
                  setValueM(1)}}  />

    <Tab  component={Link} label='المقالات' icon={<ArticleIcon/>} iconPosition='top' to="/Articles"  sx={{fontSize:16}}
    onClick={()=>{setNews(0);
                  setCat(!cat);
                  setValueC(0);
                  setValueN(1);
                  setMaga(0);
                  setValueM(0)}} />

    <CustomTab component={Link} label='Cerebro' to="/cerebro" icon={<OndemandVideoIcon/>} iconPosition='top' sx={{fontSize:13}}
    onClick={()=>{setCat(0);
                  setValueC(0);
                  setValueN(0);
                  setMaga(0);
                  setNews(0);
                  setValueM(0)}}   />


    <LinkTab label="أخبار" to="/News" icon={<FeedIcon/>} iconPosition='top'
    onClick={()=>{setNews(!news);
                  setCat(0);
                  setValueC(0);
                  setValueN(1);
                  setMaga(0);
                  setValueM(0)}}  />


    <LinkTab label="أرشيف" to="/Archive"  icon={<ArchiveIcon/>} iconPosition='top' />


    <LinkTab label="عن المجلة" to="/About"  icon={<InfoIcon/>} iconPosition='top'/>



  </Tabs>


{/*category tabs*/}
        { cat? <Tabs
              value={valueC}
              onChange={handleChangeC}
              indicatorColor="primary"
              variant='scrollable'
              aria-label="scrollable auto tabs example"
              >

                <Tab component={Link} label='مدني' to="/Articles/Civil" value={1} sx={{fontSize:16}}/>
                <Tab label="ميكانيك"  component={Link} to="/Articles/Mechanical" value={2} sx={{fontSize:16}} />
                <Tab label="بتروكيمياء" component={Link} to="/Articles/Petro" value={3} sx={{fontSize:16}} />
                <Tab label="كهرباء" component={Link} to="/Articles/Electrecitiy" value={4} sx={{fontSize:16}} />
                <Tab label="اتصالات" component={Link} to="/Articles/Telecom" value={5} sx={{fontSize:16}} />
                <Tab label="مواضيع عامة" component={Link} to="/Articles/General" value={6} sx={{fontSize:16}} />
        </Tabs>:null}

{/*News tabs*/}
    { news ? <Tabs
          value={valueN}
          onChange={handleChangeN}
          indicatorColor="primary"
          variant='scrollable'
          aria-label="scrollable auto tabs example">

            <Tab component={Link} label='أخبار الكلية' to="/News" value={1} sx={{fontSize:16}}/>
            <Tab label="نشاطات الكلية"  component={Link} to="/Events" value={2} sx={{fontSize:16}} />
            </Tabs>:null}
{/*magazine tabs*/}
    { maga ? <Tabs
      value={valueM}
      onChange={handleChangeM}
      indicatorColor="primary"
      variant='scrollable'
      aria-label="scrollable auto tabs example"
      >

        <Tab component={Link} label='افتتاحية العدد' to="/intro" value={1} sx={{fontSize:16}}/>
        <Tab label="ملف العدد"  component={Link} to="/magazine-f" value={2} sx={{fontSize:16}} />
        <Tab label="مقابلة العدد"  component={Link} to="/interview" value={3} sx={{fontSize:16}} />

      </Tabs>:null}
    </>:null}

</AppBar>

  );
}

export default Header;
