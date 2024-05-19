import { Box, Flex } from "@chakra-ui/react"
import style from './Footer.module.css'
import { Link } from "react-router-dom"
export const Footer = props => {
   return (
      <footer>
         <Flex
          textColor={"white"}
          className={style.Footer}
          flexDirection={"row"} 
          justifyContent={"space-around"}
          sx={{'@media (max-width: 520px)':
            {fontSize: "12" , 
               flexDirection: 'column-reverse', 
               alignItems: "center"}}}>

            <div>
               <div className={style.bold}>
               EVENT <span className={style.span}>&#10040;</span> HUNTERS <br/>
               </div>
                  Head Hunters &#169; Todos os direitos reservados
            </div>

         <Box 
            marginRight={"30%"} 
            sx={{"@media (max-width: 650px) " : {marginBottom: '10px'}}} >

             <h1 className={style.bold}>Links Úteis</h1>

            <ItemFooter to={"/sobrenos"} text={"Sobre Nós"}/>
            <ItemFooter to={"/pagamento"} text={"Pagamento"} />
            <ItemFooter to={"/contato"} text={"Entre em Contato"} />

         </Box>
         </Flex>
      </footer>
   )
}

export const ItemFooter = props => {
   const {to, text} = props;
   return (
      <Link to={to}>
         <h1>{text}</h1>
      </Link>      
   )


}