import { FormProvider, useForm } from "react-hook-form";

import Users from "./Users";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema } from "zod";
import { schema } from "../types/schema";
export function UsersProvider(){
    const methods=useForm<Schema>({mode:'all',resolver: zodResolver(schema
    )})


    return (
        <FormProvider {...methods}>
            <Users/>
        </FormProvider>
    )
}