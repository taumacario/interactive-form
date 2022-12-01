import {createContext, ReactNode, useState} from 'react'

interface FormContextData {
  name: string
  updateName: (e:any) => void
  month: string
  updateMonth: (e:any) => void
  year: string
  updateYear: (e:any) => void
  cvc: string
  updateCvc: (e:any) => void
}

interface FormContextProviderProps {
  children: ReactNode
}

export const FormContext = createContext({} as FormContextData)

export function FormContextProvider({ children } : FormContextProviderProps) { 
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  
  function updateName(e:any) {
    setName(e.target.value)
  }

  function updateMonth(e:any) {
    setMonth(e.target.value)
  }

  function updateYear(e:any) {
    setYear(e.target.value)
  }

  function updateCvc(e:any) {
    setCvc(e.target.value)
  }

  return(
    <FormContext.Provider value={{name, updateName, month, updateMonth, year, updateYear, cvc, updateCvc}}>
      {children}
    </FormContext.Provider>
  );
}
