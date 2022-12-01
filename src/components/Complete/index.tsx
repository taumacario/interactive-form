import * as S from './styles'
import CompleteImg from '../../images/icon-complete.svg'

export function Complete() {
  return (
    <S.ContainerComplete>
      <S.Image>
        <img src={CompleteImg} alt="" />
      </S.Image>
      <S.Title>Thank you!</S.Title>
      <S.Msg>We've added your card details</S.Msg>
      <S.Button>Continue</S.Button>
    </S.ContainerComplete>
  );
}