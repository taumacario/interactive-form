import { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import * as S from './styles'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import InputMask from "react-input-mask";

interface Input {
  name: string
  cardNumber: number
  month: number
  year: number
  cvc: number
}

const schema = yup.object({
  name: yup.string().required("Can't be blank").min(10, 'Invalid name'),
  //cardNumber: yup.string().required().matches( /^[\d]+$/ , 'Wrong format, numbers only'),
  cardNumber: yup.number().positive().integer().typeError("Can't be blank").required(), 
  month: yup.number().positive().typeError("Can't be blank").integer()
    .lessThan(13, 'Invalid month').required(),
  year: yup.number().positive().typeError("Can't be blank").integer()
    .moreThan(21, 'Invalid year').required(),
  cvc: yup.number().positive().typeError("Can't be blank").integer()
    .min(100, 'Invalid cvc').max(999, 'Invalid cvc').required(),

}).required();

export function Form() {
  const {
    name, updateName, month, updateMonth, year, updateYear, cvc, 
    updateCvc, updateComplete, cardNumber, updateCardNumber
  } = useContext(FormContext)

  const { register, formState: { errors }, handleSubmit } = useForm<Input>({
    resolver: yupResolver(schema)
  });

  
  return (
    <S.Form onSubmit={handleSubmit(updateComplete)}>

      <S.Field>
        <S.Label htmlFor="name">Cardholder Name</S.Label>
        <S.Input 
          type="text" 
          id="name" 
          placeholder="e.g. Jane Appleseed" 
          onInput={updateName} 
          value={name}
          className={errors.name && 'error'}
          {...register("name", { required: true })}
        />
        {<span>{errors.name?.message}</span>}
      </S.Field>

      {/* <S.Field>
        <S.Label htmlFor="cardNumber"> Card Number</S.Label>
        <S.Input 
          type="text" 
          placeholder="e.g. 1234 5678 9123 0000" 
          id="cardNumber" 
          onInput={updateCardNumber} 
          value={cardNumber}
          className={errors.cardNumber && 'error'}
          {...register("cardNumber", { required: true })}
        />
        {<span>{errors.cardNumber?.message}</span>}
      </S.Field> */}

      <S.Field>
        <S.Label htmlFor="cardNumber">Card Number</S.Label>
        <InputMask
          // mask options
          mask={'9999 9999 9999 9999'}
          maskPlaceholder="-"
          // input options
          type={'text'}
          placeholder="e.g. 1234 5678 9123 0000" 
          id="cardNumber" 
          value={cardNumber}
          className={errors.cardNumber ? ' input error' : 'input'}
          {...register("cardNumber", { required: true , onChange: (e) => {updateCardNumber(e)}})}
        />
        {<span>{errors.cardNumber?.message}</span>}
      </S.Field>

      <S.CardDetails>

        <S.Field className='date'>
          <S.Label htmlFor="date">Exp. Date (MM/YY)</S.Label>
            <div className='input-date'>
              <S.Input 
                type="number" 
                placeholder="MM" 
                id="date" 
                onInput={updateMonth} 
                value={month}
                className={errors.month && 'error'}
                {...register("month", { required: true })}
              />
              <S.Input 
              type="number" 
              placeholder="YY" 
              id="date" 
              onInput={updateYear} 
              value={year}
              className={errors.year && 'error'}
              {...register("year", { required: true })}
              />
            </div>
            <S.ErrorMsg>
              
              {<span>{errors.month?.message}</span>}
              {<span>{errors.year?.message}</span>}
            </S.ErrorMsg>
        </S.Field>

        <S.Field className='cvc'>
          <S.Label htmlFor="cvc">CVC</S.Label>
          <S.Input 
          type="number" 
          placeholder="e.g. 123" 
          id="cvc"
          onInput={updateCvc} 
          value={cvc}
          className={errors.cvc && 'error'}
          {...register("cvc", { required: true })}
        />
        {<span>{errors.cvc?.message}</span>}
        </S.Field>

      </S.CardDetails>

      <S.Button type='submit'>Confirm</S.Button>
    </S.Form>
  );
}