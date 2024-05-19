import { Box, ButtonGroup, Flex, IconButton, Image } from "@chakra-ui/react"
import style from './EventBox.module.css'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"

export const EventBox = ({event}) => {

   return (
      <Box className={style.Box}>
         <Image src={event.image} 
         height={"60%"}
         width={"100%"}
         borderRadius={"14px"} />

         <Flex 
            flexDirection={"row"}
            justifyContent={"space-between"} 
            padding={"10px"} >

            <Flex flexDirection={"column"} gap={["1"," 4"]} >
               <h2 style={{fontWeight: "bold"}}>{event.name}</h2>
               <p>{event.description}</p>
               <h2>{event.date}</h2>
            </Flex>
            <ButtonGroup 
               className={style.ButtonGroup} 
               flexDirection={"column"} 
               gap={[2,4]} 
               size={["xs", "sm", "md"]}>

                  <IconButton 
                     icon={<EditIcon />} 
                     size={["xs", "sm", "md"]}/>

                  <IconButton 
                     icon={<DeleteIcon />} 
                     size={["xs", "sm", "md"]} />

            </ButtonGroup>

         </Flex>
      </Box>
   )
}