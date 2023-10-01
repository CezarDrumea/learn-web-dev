import { useState } from 'react';
import Header from './components/Header';
import ResultTable from './components/ResultTable';
import UserInput from './components/UserInput';
import { Fallback } from './components/ResultTable/styled';

function App() {
  const [data, setData] = useState([]);

  const handleCalculate = (userInput) => {
    const yearlyData = [];

    const currentSavings = +userInput.currentSavings;
    const yearlySavings = +userInput.yearlySavings;
    const expectedInterest = +userInput.expectedInterest / 100;
    const duration = +userInput.duration;
    let totalSavings = currentSavings;
    let totalInterest = 0;
    let investedCapital = currentSavings;

    for (let year = 1; year <= duration; year++) {
      const yearlyInterest = totalSavings * expectedInterest;
      totalInterest += yearlyInterest;
      investedCapital += yearlySavings;
      totalSavings = investedCapital + totalInterest;
      yearlyData.push({
        year,
        totalSavings,
        yearlyInterest,
        totalInterest,
        investedCapital,
      });
    }

    setData(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={handleCalculate} />
      {data.length > 0 ? (
        <ResultTable data={data} />
      ) : (
        <Fallback>No investement calculated yet.</Fallback>
      )}
    </div>
  );
}

export default App;
