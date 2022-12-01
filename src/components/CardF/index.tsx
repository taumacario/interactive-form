import { useContext } from 'react'
import { FormContext } from '../../context/FormContext'

import * as S from './styles'
import LogoCardImg from '../../images/card-logo.svg'

export function CardF() {
  const {name, month, year } = useContext(FormContext);

  return (
    <S.Card>
    <S.Logo>
      <img src={LogoCardImg} alt="card logo" />
    </S.Logo>
    <S.CardNumber>
      0000 0000 0000 0000
    </S.CardNumber>
    <S.CardDetails>
      <S.CardName>
        {name ? name : 'Jane Appleseed'}
      </S.CardName>
      <S.CardDate>
        <span>{month ? month : '00'}</span>
        <span>/</span>
        <span>{year ? year : '00'}</span>
      </S.CardDate>
    </S.CardDetails>
    </S.Card>
  );
}