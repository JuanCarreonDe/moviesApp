import { useRef, useState, useEffect } from "react";


export const useSearch = () => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    const updateQuery = (newQuery) =>{
      setQuery(newQuery)
    }
  
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = query === ''
        return
      }
      if (query === '') {
        setError('Ingrese una pelicula para buscar')
        return
      }
      if(query?.length < 3){
        setError('La busqueda debe tener al menos 3 caracteres')
        return
      }
      setError(null)
    }, [query]);
    return {query, error, updateQuery}
  }