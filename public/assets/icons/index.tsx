import withIconStyles from "./wrapper";
import Facebook from './facebook.svg?svgr';
import Instagram from './instagram.svg?svgr';
import Linkedin from './linkedin.svg?svgr';
import LogoGrande from './logoGrande.svg?svgr';
import WhiteChevronUp from './whiteChevronUp.svg?svgr';
import MobileFacebook from './mobileFacebook.svg?svgr';
import MobileInstagram from './mobileInstagram.svg?svgr';
import MobileLinkedin from './mobileLinkedin.svg?svgr';
import EmailButton from './emailButton.svg?svgr';
import PaymentMethods from './paymentMethods.svg?svgr';


const rawIcons = {
  PaymentMethods,
  EmailButton,
  MobileFacebook,
  MobileInstagram,
  MobileLinkedin,
  WhiteChevronUp,
  LogoGrande,
  Facebook,
  Instagram,
  Linkedin,
};

const Icons = Object.fromEntries(
  Object.entries(rawIcons).map(([key, IconComponent]) => {
    return [key, withIconStyles(IconComponent)];
  })
);

export default Icons;
