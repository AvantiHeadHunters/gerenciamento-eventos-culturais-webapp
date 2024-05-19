import { Box, ButtonGroup, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import style from './formcreateevent.module.css'

export const FormCreateEvent = props => {
   const {register, handleSubmit, formState: {errors,}} = useForm()
   const onsubmit = data => console.log(data)

   return (
    
      <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onsubmit)}>
         <h1>Crie um Evento</h1>
         <label>Nome</label>
         <input type="text" {...register("name", {required: "Insira o nome do evento"})}/>
         <label>Descrição</label>
         <textarea  {...register("description", {required: "Insira o nome do evento"})}/>
         <label>Data</label>
         <input type="date" {...register("date", {required: "Insira o nome do evento"})}/>
         <label>Local</label>
         <input type="text" {...register("location", {required: "Insira o local"})} />

         <ButtonGroup 
         gap={4} 
         flexDirection={"row"} 
         justifyContent={"center"}
         marginTop={"10px"}
         >
         <button className={style.button} style={{border: "2px solid red", color: "red"}}>Cancelar</button>
         <button className={style.button} type="submit">Confirmar</button>
         </ButtonGroup>
      </form>
      </div>
   )
}