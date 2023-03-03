import { Tab } from "@mui/material";
import {Link} from 'react-router-dom';

function LinkTab(props) {

    return (
      <Tab component={Link} sx={{fontSize:14,float:"right",m:0,fontFamily:"'Tajawal',sans-serif",fontWeight:500}} {...props} />
      );
          }
export default LinkTab;
