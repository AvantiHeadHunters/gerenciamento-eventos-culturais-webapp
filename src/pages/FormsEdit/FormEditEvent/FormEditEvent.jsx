import { Box, ButtonGroup, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import style from './FormEditEvent.module.css'

export const FormEditEvent = props => {
   const {register, handleSubmit, formState: {errors,}} = useForm({
      defaultValues: {
         name: '',
         description: '',
         category_id: '',
         date: '',
         location: '',
      }
   })
   const onsubmit = data => console.log(data)

   return (
    
      <div className={style.formContainer}>

      <form onSubmit={handleSubmit(onsubmit)}>

         <h1>Edite o Evento</h1>

         <label>Nome</label>
         <input type="text" {...register("name", {required: "Insira o nome do evento"})}/>
         <label>Descrição</label>
         <textarea  {...register("description", {required: "Insira a descrição do evento"})}/>
         <label>Categoria</label>
         <input type={"text"} {...register("category_id", {required: true})} />
         <label>Data</label>
         <input type="date" {...register("date", {required: "Insira a data do evento"})}/>
         <label>Local</label>
         <input type="text" {...register("location", {required: "Insira o local"})} />

         {(errors.name 
            || errors.description 
            || errors.category_id
            || errors.location 
            || errors.date) && 
            <span style={errorStyle}>
               Preencha todos os campos
            </span>}


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
const errorStyle = {
   
      margin: "10px 0", 
      color: "red", 
      fontWeight: "bold", 
      fontSize: 15, 
      textAlign: "center"
}