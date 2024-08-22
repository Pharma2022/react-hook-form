import { Autocomplete, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { schema,Schema } from "../types/schema"
import {zodResolver} from '@hookform/resolvers/zod'
const Users = () => {
    const {register, formState:{errors}}=useForm<Schema>({mode:'all',resolver: zodResolver(schema
    )})

    return (<>
    
      <Stack sx={{gap:2}}>
        <TextField {...register('name')} label='Name' error={!!errors.name} helperText={errors.name?.message}/>
        <TextField {...register('email')} label='Email'error={!!errors.email} helperText={errors.email?.message}/>
      </Stack>
       
    
    </>)
}

export default Users