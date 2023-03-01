import { Tab } from "@mui/material";
import {Link} from 'react-router-dom';

function LinkTab(props) {

    return (
      <Tab component={Link} sx={{fontSize:16,float:"right",m:0}} {...props} />
      );
          }
export default LinkTab;
