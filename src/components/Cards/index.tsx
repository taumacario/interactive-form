import { CardB } from '../CardB';
import { CardF } from '../CardF';
import { Complete } from '../Complete';
import { Form } from '../Form';
import * as S from './styles'


export function Cards() {
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
         {/* <Form />  */}
        <Complete /> 
      </S.ContainerForm>
    </S.Wrapper>
  );
}