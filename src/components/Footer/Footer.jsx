import { FooterBack, LinkNetworks, List, Text } from './Footer.styled';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <FooterBack>
      <List>
        <Text>contacts ~</Text>
        <LinkNetworks target="_blank" to="https://t.me/glorry_miss">
          <FaTelegramPlane />
        </LinkNetworks>
        <LinkNetworks
          target="_blank"
          to="https://www.linkedin.com/in/yuliia-zherebetska/"
        >
          <RiLinkedinFill />
        </LinkNetworks>
      </List>
    </FooterBack>
  );
};
export default Footer;
