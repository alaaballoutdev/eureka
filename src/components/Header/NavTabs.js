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

//nav tabs
const NavTabs = () => {
  const CustomTab = withStyles({
    root: {
      textTransform: "none",

          },

        })(Tab);
//toggle category
      const [cat,setCat]=React.useState(0);

      const [value, setValue] = React.useState(1);
      const handleChange = (event, newValue)=>{
          setValue(newValue);}

      const [valueC, setValueC] = React.useState(1);
      const handleChangeC = (event, newValue)=>{
        setValueC(newValue);}

      const [valueN, setValueN] = React.useState(1);
      const handleChangeN = (event, newValue)=>{
          setValueN(newValue);}
//toggleNews
      const [news,setNews]=React.useState(0);

      const [maga,setMaga]=React.useState(0);

      const [valueM, setValueM] = React.useState(0);
      const handleChangeM = (event, newValue)=>{
          setValueM(newValue);}


//build link Tabs
function LinkTab(props) {

  return (
    <Tab
      component={Link}
      sx={{fontSize:17}}
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
    <>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="scrollable auto tabs example"
        variant="scrollable"
        scrollButtons='auto'
        allowScrollButtonsMobile
        >
        <LinkTab label="الرئيسية" to="/" value={1} icon={<HomeIcon/>} iconPosition='top' />

        <LinkTab label="ابواب المجلة" to="/intro" value={2} icon={<ImportContactsIcon/>} iconPosition='top'

        onClick={()=>{setMaga(!maga);
                      setNews(0);
                      setCat(0);
                      setValueM(1)}}  />

        <Tab  component={Link} label='المقالات' icon={<ArticleIcon/>} iconPosition='top' to="/Articles" value={3} sx={{fontSize:20}}
        onClick={()=>{setNews(0);
                      setCat(!cat);
                      setValueC(0);
                      setValueN(1);
                      setMaga(0);
                      setValueM(0)}} />

        <CustomTab component={Link} label='Cerebro' to="/cerebro" icon={<OndemandVideoIcon/>} iconPosition='top' value={4} sx={{fontSize:15}}
        onClick={()=>{setCat(0);
                      setValueC(0);
                      setValueN(0);
                      setMaga(0);
                      setNews(0);
                      setValueM(0)}}   />


        <LinkTab label="أخبار" to="/News" icon={<FeedIcon/>} iconPosition='top' value={5}
        onClick={()=>{setNews(!news);
                      setCat(0);
                      setValueC(0);
                      setValueN(1);
                      setMaga(0);
                      setValueM(0)}}  />


        <LinkTab label="أرشيف" to="/archive" value={6} icon={<ArchiveIcon/>} iconPosition='top' />


        <LinkTab label="عن المجلة" to="/About" value={7} icon={<InfoIcon/>} iconPosition='top'/>



</Tabs>



{ cat? <Tabs
      value={valueC}
      onChange={handleChangeC}
      indicatorColor="primary"

      variant='scrollable'
      aria-label="scrollable auto tabs example"

      >

      <Tab component={Link} label='مدني' to="/Articles/Civil" value={1} sx={{fontSize:20}}/>
      <Tab label="ميكانيك"  component={Link} to="/Articles/Mechanical" value={2} sx={{fontSize:20}} />
      <Tab label="بتروكيمياء" component={Link} to="/Articles/Petro" value={3} sx={{fontSize:20}} />
      <Tab label="كهرباء" component={Link} to="/Articles/Electrecitiy" value={4} sx={{fontSize:20}} />
      <Tab label="اتصالات" component={Link} to="/Articles/Telecom" value={5} sx={{fontSize:20}} />
      <Tab label="مواضيع عامة" component={Link} to="/Articles/General" value={6} sx={{fontSize:20}} />
</Tabs>:null}


{ news ? <Tabs
      value={valueN}
      onChange={handleChangeN}
      indicatorColor="primary"

      variant='scrollable'
      aria-label="scrollable auto tabs example"

      >

      <Tab component={Link} label='أخبار الكلية' to="/News" value={1} sx={{fontSize:20}}/>
      <Tab label="نشاطات الكلية"  component={Link} to="/Events" value={2} sx={{fontSize:20}} />

</Tabs>:null}
{ maga ? <Tabs
      value={valueM}
      onChange={handleChangeM}
      indicatorColor="primary"

      variant='scrollable'
      aria-label="scrollable auto tabs example"

      >

      <Tab component={Link} label='افتتاحية العدد' to="/intro" value={1} sx={{fontSize:20}}/>
      <Tab label="ملف العدد"  component={Link} to="/magazine-f" value={2} sx={{fontSize:20}} />
      <Tab label="مقابلة العدد"  component={Link} to="/interview" value={3} sx={{fontSize:20}} />

</Tabs>:null}




</>
  )
}

export default NavTabs;
