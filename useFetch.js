import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    const montado = useRef(true)

    const [estado, setEstado] = useState({data: null, loading: true , error: null})

        useEffect(() => {
        
        
          return () => {
            montado.current = false
          }
        }, [])
        
     
    
    useEffect(()=>{
        setEstado({data: null, loading: true , error: null})
        fetch(url).then(resp => resp.json())
        .then(data => {
            
                if (montado.current) {
                    setEstado({
                        loading:false,
                        error:null,
                        data
        
                    })
                } else {
                    console.log("nose llamo xd")
                }
               
            
        })
        

     },[url]);
     return estado;


  
}
