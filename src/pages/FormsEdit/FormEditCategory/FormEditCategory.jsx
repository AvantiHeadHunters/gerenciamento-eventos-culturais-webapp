import { Box, ButtonGroup, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import style from './FormCreateCategory.module.css'

export const FormCreateCategory = props => {
   const {id} = props; 
   // get category by id
   const category = {
      id: id,
      name: 'Teatro',
      description: 'Apresentações de Teatro',
      image: 'x',
   }
   const {register, handleSubmit, formState: {errors,}} = useForm({
      initialValues:{
         name: category.name,
         description: category.description,
         image: category.image,
      }
   })
   const onsubmit = data => console.log(data)

   return (
    
      <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onsubmit)}>
         <h1>Edite uma Categoria</h1>
         <label>Nome</label>
         <input type="text" {...register("name", {required: "Insira o nome da categoria"})}/>
         <label>Descrição</label>
         <textarea  {...register("description", {required: "Insira o nome da Categoria"})}/>
         <label>Imagem</label>
         <input type="text" {...register("image", {required: "Insira a Imagem da Categoria"})} />

         {errors.name && <h1>{errors.name.message}</h1>}
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