import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import style from './cadastro.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Cadastro = props => {
      const navigate = useNavigate();
      const {register, handleSubmit, formState: {errors,}} = 
      useForm({defaultValues: {email: '', password: '', name: ''}})
      const onsubmit = data => console.log(data)
   
      return (
         <Flex className={style.Container} flexDirection={"row"}>
            <div className={style.logoContainer}>
            <h1 className={style.title}>EVENT <span style={{color: "yellow"}}>&#10040;</span><br/> HUNTERS</h1> 
            </div>
         <div className={style.formContainer}>
         <form onSubmit={handleSubmit(onsubmit)}>
            <h1>Cadastro</h1>
            <label>Nome</label>
            <input type="text" {...register("name", {required: "Insira o nome"})}/>
            <label>Email</label>
            <input type="text" {...register("email", {required: "Insira o email"})}/>
            <label>Senha</label>
            <input type={"text"} {...register("password", {required: "Insira a senha"})}/>

            {(errors.name || errors.email ) 
            && <span style={{color: "red", fontWeight: "bold", fontSize: 15}}>Email ou senha Incorretos</span>}

            <ButtonGroup 
            gap={4} 
            flexDirection={"row"} 
            justifyContent={"center"}
            marginTop={"15px"}
            >
            <button className={style.button} type="submit">Cadastrar</button>
            </ButtonGroup>

            <ButtonGroup flexDirection={"column"} alignItems={"center"}>
               <p style={{textAlign: "center", margin: "10px 0"}}>Já tem conta?</p>
               <Button 
               variant={"ghost"} 
               colorScheme="gray" 
               width={"max-content"}
               margin={"5px 0px"}
               onClick={() => {navigate("/login")}}
               >Entre</Button>

               <Button 
               variant={"ghost"}
               colorScheme='gray'
               width={"max-content"}
               onClick={() => {navigate("/home")}}>Voltar para a Tela Inicial</Button>
               </ButtonGroup>
         </form>
         </div>
          </Flex>
      )
   
}