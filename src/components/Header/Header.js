import AppBar from '@mui/material/AppBar';
import NavTabs from './NavTabs';

import videoLogo  from './videologo.mp4';



const Header = () => {



  return (

<><AppBar  position="static"    sx={{backgroundColor:"white"}}>



        <center> <video src={videoLogo} autoPlay={true} muted width='230px' height='70px' id="logo"/></center>




<NavTabs   />

</AppBar>

</>
  );
}

export default Header;
