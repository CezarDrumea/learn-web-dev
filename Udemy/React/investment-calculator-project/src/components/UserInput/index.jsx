import { useState } from 'react';
import * as S from './styled';

const emptyInput = {
  currentSavings: '',
  yearlySavings: '',
  expectedInterest: '',
  duration: '',
};

const UserInput = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(emptyInput);

  const handleUserInput = (field) => (e) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    onCalculate(userInput);
    e.preventDefault();
  };

  const handleReset = () => {
    setUserInput(emptyInput);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputGroup>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={handleUserInput('currentSavings')}
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor='yearly-savings'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-savings'
            onChange={handleUserInput('yearlySavings')}
            value={userInput.yearlySavings}
          />
        </p>
      </S.InputGroup>
      <S.InputGroup>
        <p>
          <label htmlFor='expected-interest'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-interest'
            onChange={handleUserInput('expectedInterest')}
            value={userInput.expectedInterest}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            onChange={handleUserInput('duration')}
            value={userInput.duration}
          />
        </p>
      </S.InputGroup>
      <S.Actions>
        <S.ResetBtn type='reset' onClick={handleReset}>
          Reset
        </S.ResetBtn>
        <S.SubmitBtn type='submit'>Calculate</S.SubmitBtn>
      </S.Actions>
    </S.Form>
  );
};
export default UserInput;
