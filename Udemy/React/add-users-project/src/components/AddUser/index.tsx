import { MutableRefObject, useRef } from 'react';
import * as S from './styled';
import { Button, Card } from '../../common/styled';

const AddUser = ({
  onAddUser,
  onShowModal,
}: {
  onAddUser: (arg: UserInputInterface) => void;
  onShowModal: (arg: string) => void;
}): React.JSX.Element => {
  const usernameInputRef = useRef<HTMLInputElement>();
  const ageInputRef = useRef<HTMLInputElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const usernameInput = usernameInputRef.current?.value;
    const ageInput = ageInputRef.current?.value;
    if (!ageInput || !usernameInput?.trim()) {
      onShowModal('non-empty values');
    } else if (+ageInput < 1 || +ageInput > 150) {
      onShowModal('1 < age < 150');
    } else {
      onAddUser({
        username: usernameInput,
        age: ageInput,
        id: crypto.randomUUID(),
      });
      usernameInputRef.current!.value = '';
      ageInputRef.current!.value = '';
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <S.Input>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            ref={usernameInputRef as MutableRefObject<HTMLInputElement>}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            ref={ageInputRef as MutableRefObject<HTMLInputElement>}
          />
          <Button>Add User</Button>
        </S.Input>
      </form>
    </Card>
  );
};
export default AddUser;
