import { Box, ButtonGroup, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import style from './formcreatelocation.module.css'

export const FormCreateLocation = props => {
   const {register, handleSubmit, formState: {errors,}} = useForm()
   const onsubmit = data => console.log(data)

   return (
    
      <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onsubmit)}>
         <h1>Crie um Local</h1>
         <label>Nome</label>
         <input type="text" {...register("name", {required: "Insira o nome do local"})}/>
         <label>Endereço</label>
         <input type="text" {...register("address", {required: "Insira o endereço do local"})}/>
         <ButtonGroup 
         gap={4} 
         flexDirection={"row"} 
         justifyContent={"center"}
         marginTop={"15px"}
         >
         <button className={style.button} style={{border: "2px solid red", color: "red"}}>Cancelar</button>
         <button className={style.button} type="submit">Confirmar</button>
         </ButtonGroup>
      </form>
      </div>
   )
}