import React, {createContext, ReactNode, useState} from 'react'

interface FormContextData {
  name: string
  updateName: (e:React.ChangeEvent<HTMLInputElement>) => void
  month: string
  updateMonth: (e:React.ChangeEvent<HTMLInputElement>) => void
  year: string
  updateYear: (e:React.ChangeEvent<HTMLInputElement>) => void
  cvc: string
  updateCvc: (e:React.ChangeEvent<HTMLInputElement>) => void
  cardNumber: string
  updateCardNumber: (e:React.ChangeEvent<HTMLInputElement>) => void
  complete: boolean
  updateComplete: () => void
  refresh: () => void
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
  const [cardNumber, setCardNumber] = useState('');
  const [complete, setComplete] = useState(false)
  
  function updateName(e:React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function updateMonth(e:React.ChangeEvent<HTMLInputElement>) {
    setMonth(e.target.value)
  }

  function updateYear(e:React.ChangeEvent<HTMLInputElement>) {
    setYear(e.target.value)
  }

  function updateCvc(e: React.ChangeEvent<HTMLInputElement>) {
    setCvc(e.target.value)
  }

  function updateCardNumber(e:React.ChangeEvent<HTMLInputElement>) {
    setCardNumber(e.target.value)
  }

  function updateComplete() {
    setComplete(!complete)
  }

  function refresh() {
    setComplete(!complete)
    setName('')
    setCardNumber('')
    setCvc('')
    setMonth('')
    setYear('')
  }

  return(
    <FormContext.Provider 
      value={{
        name, updateName, month, updateMonth, year, updateYear, cvc, 
        updateCvc, cardNumber, updateCardNumber, complete, updateComplete, refresh
      }}>
      {children}
    </FormContext.Provider>
  );
}
