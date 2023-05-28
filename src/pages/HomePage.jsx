import { Title, WrapHome } from './Detals.styled';
import ImgContacts from '../../src/images/contact-us.webp';
const HomePage = () => {
  return (
    <WrapHome>
      <Title>Welcome! Nice to meet you!</Title>
      <img src={ImgContacts} alt="Contacts" />
    </WrapHome>
  );
};

export default HomePage;
