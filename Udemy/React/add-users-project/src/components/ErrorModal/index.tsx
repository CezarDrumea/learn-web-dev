import { createPortal } from 'react-dom';
import * as S from './styled';
import { Button } from '../../common/styled';

const ErrorModal = ({
  onCloseModal,
  children,
}: {
  onCloseModal: () => void;
  children: string;
}): React.JSX.Element => {
  return createPortal(
    <>
      <S.Backdrop onClick={onCloseModal}></S.Backdrop>
      <S.Modal>
        <S.Header>
          <h2>Invalid Input</h2>
        </S.Header>
        <S.Content>Please enter a valid name and age ({children})</S.Content>
        <S.Actions>
          <Button onClick={onCloseModal}>Okay</Button>
        </S.Actions>
      </S.Modal>
    </>,
    document.getElementById('modal')!
  );
};
export default ErrorModal;
