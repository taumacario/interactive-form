import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { CardB } from '../CardB';
import { CardF } from '../CardF';
import { Complete } from '../Complete';
import { Form } from '../Form';
import * as S from './styles'


export function Cards() {
  const {complete} = useContext(FormContext)
  return (
    <S.Wrapper>
      <S.ContainerCard>
        <S.ContainerCardF>
          <CardF />
        </S.ContainerCardF>

        <S.ContainerCardB>
          <CardB />
        </S.ContainerCardB>
      </S.ContainerCard>

      <S.ContainerForm>
        {complete ?
          <Complete /> :
          <Form /> 
        }
      </S.ContainerForm>
    </S.Wrapper>
  );
}