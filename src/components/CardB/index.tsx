import { useContext } from 'react'
import { FormContext } from '../../context/FormContext'

import * as S from './styles'

export function CardB() {
  const {cvc } = useContext(FormContext);
  return (
    <S.Card>
      <S.CardCvc>{cvc ? cvc : '000'}</S.CardCvc>
    </S.Card>
  );
}