import { createContext,useReducer } from "react";
import HeaderReducer from './HeaderReducer.js'

const initialState ={
    nav:false,
    openedTab:'',
    value:0,  
    valueMagazine:1,
    valueNews:1,
    valueCategory:1
}

export const HeaderContext = createContext(initialState);
export const HeaderProvider = ({children})=>{
    const [state,dispatch] = useReducer(HeaderReducer,initialState);

    function handlePathname (pathname){
        dispatch(
            { 
                type:'HANDLE_PATHNAME',
                payload:pathname

            }
        );
    }

    function onChoose (){
        dispatch(
            { 
                type:'ON_CHOOSE',
            }
        );
    }

    function handleChange(value,newValue){
        dispatch({
            type:'HANDLE_CHANGE',
            payload:{value,newValue}
        });
    }
    function setNavigationDesktop(navigation,desktop){
        dispatch({
            type:'SET_NAV_DESKTOP',
            payload:{navigation,desktop}
        });
    }
    function setNavigationMobile(navigation){
        dispatch({
            type:'SET_NAV_MOBILE',
        });
    }
    function openTab(tabname){
        dispatch({
            type:'OPEN_TAB',
            payload:tabname
        });

    }

    return(
        <HeaderContext.Provider value={
            {
                navigationValues:state,
                openTab,
                setNavigationDesktop,
                onChoose,
                handlePathname,
                setNavigationMobile,
                handleChange
            }} >

            {children}
        </HeaderContext.Provider>


    )






}
