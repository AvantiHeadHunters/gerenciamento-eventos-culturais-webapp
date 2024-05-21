import { Link } from 'react-router-dom';
import style from './header.module.css'
import { NavBar } from './NavBar.jsx'

export const Header = props => {
   const {islogged} = props;
   return (
      <header 
         className={style.Header} 
         style={{backgroundColor: islogged && "black"}}>

         {islogged ? 
             <Link to={"/"}>
                  <h1 style={{color: 'white'}}>
                     EVENT <span className={style.span}>&#10040;</span><br/> HUNTERS
                  </h1>
            </Link>
         :
         <Link to={"/"}>
            <h1>
               EVENT <span className={style.span}>&#10040;</span><br/> HUNTERS
            </h1> 
         </Link>
      }
         <NavBar {...props} /> 
      </header>
      

   )
}

