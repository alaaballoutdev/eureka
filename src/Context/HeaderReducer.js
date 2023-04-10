import { CategoryMap, InitialMap, MagazineMap } from "./HeaderMaps"

const HeaderReducer= (state,action) =>{
    const handlePathname= (pathname)=>{
        if(pathname.includes('/Articles')){
            let cvalue =(CategoryMap.get(pathname))
            return {...state,
                value:2,
                openedTab:'Category',
                valueMagazine:1,
                valueNews:1,
                valueCategory:cvalue!==undefined?cvalue:1,
            };
        }
        if(pathname.includes('/News') ){
          return {...state,
                value:4,
                openedTab:'News',
                valueMagazine:1,
                valueNews:1,
                valueCategory:1,
            };
          
        }
        if(pathname.includes('/Events') ){
            return {...state,
                value:4,
                openedTab:'News',
                valueMagazine:1,
                valueNews:2,
                valueCategory:1,
            };
        }
        if(pathname==='/intro'||pathname==='/magazine-f'||pathname==='/interview'){
            return {...state,
                value:1,
                openedTab:'Magazine',
                valueMagazine:MagazineMap.get(pathname),
                valueNews:1,
                valueCategory:1,
            };
        }
        
        return {...state,value:InitialMap.get(pathname)};
  
        
      }

      const openTab = (tabname)=>{
        return {...state,
            openedTab:tabname,
            valueMagazine:1,
            valueNews:1,
            valueCategory:1
        }
    }

    
    
    
    switch(action.type){
        case  'HANDLE_PATHNAME':
            return handlePathname(action.payload)
        case 'OPEN_TAB':
            return openTab(action.payload)
        case 'ON_CHOOSE':
            return {...state,
                nav:false,
                openedTab:'',
                valueCategory:1,
                valueMagazine:1,
                valueNews:1
            }
        case 'SET_NAV_DESKTOP':
            return {...state,
                nav:action.payload.desktop?action.payload.navigation:state.nav
            }
        case 'SET_NAV_MOBILE':
            return {
                ...state,
                nav: !state.nav
            }
        case 'HANDLE_CHANGE':
            return {...state,value:action.payload.newValue}        
        default:
            return state        

    }
}
export default HeaderReducer