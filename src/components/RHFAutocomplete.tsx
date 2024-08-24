import Autocomplete, { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "../types/option";
import { ReactNode } from "react";

type Props<T extends FieldValues>={
    name:Path<T>,
    options: Option[]

}

export function RHFAutocomplete<T extends FieldValues>({name,options}:Props<T>){

    const {control}=useFormContext()
 

    return (
        <Controller
            control={control}
            name={name}
            render={({field: {value,onChange,ref}})=>(
                <Autocomplete
                    options={options}
                    value={value.map((id:string)=>options.find(item=>item.id===id))}
                    getOptionLabel={(option)=>options.find(item=>item.id===option.id)?.label ?? ' '}
                    isOptionEqualToValue={(option,newValue)=>option.id===newValue.id}
                    onChange={(_,newValue)=>{
                        onChange(newValue.map(item=>item.id))
                    }}
                    multiple
                />
            
            )}
     
            />
    )
  
}