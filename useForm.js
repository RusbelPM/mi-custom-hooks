import { useState } from "react"

export const useForm = ( inicio ={}) => {

    const [value, setValue] = useState(inicio)
    
    const reset = ()=>{
        setValue(inicio);
    }


   
    const handleInputChange = ({target})=>{
        

        setValue({
            ...value,
            [target.name] : target.value
        })

    }

    return [ value, handleInputChange,reset];

}
