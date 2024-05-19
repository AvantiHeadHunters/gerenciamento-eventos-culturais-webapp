import style from './header.module.css'
import { NavBar } from './NavBar.jsx'

export const Header = props => {
   const {islogged} = props;
   return (
      <header className={style.Header} style={{backgroundColor: islogged && "black"}}>
         {islogged ? 
            <h1 style={{color: 'white'}}>EVENT <span className={style.span}>&#10040;</span><br/> HUNTERS</h1>
         :
         <>
         <h1>HEAD <span className={style.span}>&#10040;</span><br/> HUNTERS</h1> 
         <hr className={style.solid}/>
         </>
      }
         <NavBar {...props} /> 
      </header>
      

   )
}

