import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import style from './login.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Login = props => {
      const navigate = useNavigate();
      const {register, handleSubmit, formState: {errors,}} = useForm({defaultValues: {email: '', password: ''}})
      const onsubmit = data => console.log(data)
   
      return (
         <Flex className={style.Container} flexDirection={"row"}>
            <div className={style.logoContainer}>
            <h1 className={style.title}>EVENT <span style={{color: "yellow"}}>&#10040;</span><br/> HUNTERS</h1> 
            </div>
         <div className={style.formContainer}>
         <form onSubmit={handleSubmit(onsubmit)}>
            <h1>Login</h1>
            <label>Email</label>
            <input style={{border: "red" && (errors.email || errors.pasword)}} type="text" {...register("email", {required: "Insira o nome do evento"})}/>
            <label>Senha</label>
            <input type={"text"} {...register("password", {required: "Insira o email", pattern: /\S+@\S+\.\S+/})}/>
            {(errors.name || errors.email ) && <span style={{color: "red", fontWeight: "bold", fontSize: 15}}>Email ou senha Incorretos</span>}
            <ButtonGroup 
            gap={4} 
            flexDirection={"row"} 
            justifyContent={"center"}
            marginTop={"35px"}
            >
            <button className={style.button} type="submit">Entrar</button>
            </ButtonGroup>

            <ButtonGroup flexDirection={"column"} alignItems={"center"}>
               <p style={{textAlign: "center", margin: "10px 0 0 5px"}}>Ainda não tem conta?</p>
               <Button 
               variant={"ghost"} 
               colorScheme="gray" 
               width={"max-content"}
               onClick={() => { navigate("/cadastro")}}
               >Cadastre-se</Button>

               <Button 
               variant={"ghost"} 
               colorScheme="gray" 
               width={"max-content"}               
               onClick={() => { navigate("/home")}}
               >Voltar para a Tela Inicial</Button>
            </ButtonGroup>
         </form>
         </div>
          </Flex>
      )
   
}