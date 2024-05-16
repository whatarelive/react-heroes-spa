import { useState } from "react"
import { FormValue } from "../../heroes/types/Types";



export const useForm = ( initialValue: FormValue ) => {

    const [ formState, setFormState ] = useState( initialValue );

    const onInputChange = ( { target }: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialValue );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}