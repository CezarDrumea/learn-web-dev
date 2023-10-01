import * as S from './styled';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultTable = ({ data }) => {
  return (
    <S.ResultTable>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dataPerYear) => (
          <tr key={dataPerYear.year}>
            <td>{dataPerYear.year}</td>
            <td>{formatter.format(dataPerYear.totalSavings)}</td>
            <td>{formatter.format(dataPerYear.yearlyInterest)}</td>
            <td>{formatter.format(dataPerYear.totalInterest)}</td>
            <td>{formatter.format(dataPerYear.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </S.ResultTable>
  );
};
export default ResultTable;
