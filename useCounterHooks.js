import { useState } from "react"

export const useCounterHooks = (valorInicial) => {

const [valor, setValor] = useState(valorInicial,);
 const increment = ( )=>{
     setValor(valor +1 )
 }
 const decrement = ()=>{
    setValor(valor - 1)
}
const reset = ()=>{
    setValor(valorInicial)
}

return{
    valor,
    increment,
    decrement,
    reset
};

}
