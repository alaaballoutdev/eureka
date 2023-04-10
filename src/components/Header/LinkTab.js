import { Tab } from "@mui/material";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { HeaderContext } from "Context/HeaderContext";
function LinkTab(props) {
const {onChoose}=useContext(HeaderContext)
    const TabStyle={
      fontSize:14,
      fontFamily:"'Tajawal',sans-serif",
      fontWeight:500
    }

    return (
      <Tab component={Link} onClick={()=>onChoose()} iconPosition="top" sx={TabStyle} {...props} />
      );
          }
export default LinkTab;
