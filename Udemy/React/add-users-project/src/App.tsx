import { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ErrorModal from './components/ErrorModal';
import './App.css';

function App() {
  const [users, setUsers] = useState([] as UserInputInterface[]);
  const [error, setError] = useState('');

  const handleAddUser = (newUser: UserInputInterface): void => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleShowModal = (error: string) => {
    setError(error);
  };

  const handleCloseModal = (): void => {
    setError('');
  };

  return (
    <>
      <AddUser onAddUser={handleAddUser} onShowModal={handleShowModal} />
      {users.length > 0 && <UsersList users={users} />}
      {error && (
        <ErrorModal onCloseModal={handleCloseModal}>{error}</ErrorModal>
      )}
    </>
  );
}

export default App;
