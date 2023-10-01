import { Card } from '../../common/styled';
import * as S from './styled';

const UsersList = ({
  users,
}: {
  users: UserInputInterface[];
}): React.JSX.Element => {
  return (
    <Card>
      <S.Users>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{`${user.username} (${user.age} years old)`}</li>
          ))}
        </ul>
      </S.Users>
    </Card>
  );
};
export default UsersList;
