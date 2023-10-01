import logo from '../../assets/investment-calculator-logo.png';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <img src={logo} alt='logo' />
      <h1>Investment Calculator</h1>
    </S.Header>
  );
};
export default Header;
