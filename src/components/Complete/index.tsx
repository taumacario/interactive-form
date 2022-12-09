import * as S from './styles'
import CompleteImg from '../../images/icon-complete.svg'
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

export function Complete() {
  const {refresh} = useContext(FormContext)
  return (
    <S.ContainerComplete>
      <S.Image>
        <img src={CompleteImg} alt="" />
      </S.Image>
      <S.Title>Thank you!</S.Title>
      <S.Msg>We've added your card details</S.Msg>
      <S.Button onClick={refresh}>Continue</S.Button>
    </S.ContainerComplete>
  );
}