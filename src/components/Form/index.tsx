import { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import * as S from './styles'

export function Form() {
  const {name, updateName, month, updateMonth, year, updateYear, cvc, updateCvc} = useContext(FormContext)
  
  return (
    <S.Form>

      <S.Field>
        <S.Label htmlFor="name">Cardholder Name</S.Label>
        <S.Input 
          type="text" 
          id="name" 
          placeholder="e.g. Jane Appleseed" 
          required
          onInput={updateName} 
          value={name}
        />
      </S.Field>

      <S.Field>
        <S.Label htmlFor="card-number"> Card Number</S.Label>
        <S.Input 
          type="number" 
          id="card-number" 
          placeholder="e.g. 1234 5678 9123 0000" 
          required 
          minLength={13} 
          maxLength={16} 
        />
      </S.Field>

      <S.CardDetails>

        <S.Field className='date'>
          <S.Label htmlFor="date">Exp. Date (MM/YY)</S.Label>
          <div className='input-date'>
            <S.Input 
              type="number" 
              id="date" 
              placeholder="MM" 
              required 
              maxLength={2} 
              onInput={updateMonth} 
              value={month}
            />
            <S.Input 
            type="number" 
            id="date" 
            placeholder="YY" 
            required 
            maxLength={2}
            onInput={updateYear} 
            value={year}
          />
          </div>
        </S.Field>

        <S.Field className='cvc'>
          <S.Label htmlFor="cvc">CVC</S.Label>
          <S.Input 
          type="number" 
          id="cvc" 
          placeholder="e.g. 123" 
          required 
          minLength={3} 
          maxLength={3}
          onInput={updateCvc} 
          value={cvc}
        />
        </S.Field>

      </S.CardDetails>

      <S.Button>Confirm</S.Button>
    </S.Form>
  );
}