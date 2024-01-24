import withIconStyles from "./wrapper";
import Facebook from "./facebook.svg?svgr";
import Instagram from "./instagram.svg?svgr";
import Linkedin from "./linkedin.svg?svgr";
import LogoGrande from "./logoGrande.svg?svgr";
import WhiteChevronUp from "./whiteChevronUp.svg?svgr";
import MobileFacebook from "./mobileFacebook.svg?svgr";
import MobileInstagram from "./mobileInstagram.svg?svgr";
import MobileLinkedin from "./mobileLinkedin.svg?svgr";
import EmailButton from "./emailButton.svg?svgr";
import PaymentMethods from "./paymentMethods.svg?svgr";
import LogoBlack from "./logoBlack.svg?svgr";
import Burger from "./burger.svg?svgr";
import LetterBlack from "./letterBlack.svg?svgr";
import CarouselIcon from "./carouselIcon.svg?svgr";
import LetterLine from "./letterLine.svg?svgr";
import Sofiderm from "./sofiderm.svg?svgr";
import SofidermMobile from "./sofidermMobile.svg?svgr";
import ArrowRight from "./arrowRight.svg?svgr";
import Acido from "./acido.svg?svgr";
import Biocompativel from "./biocompativel.svg?svgr";
import Duracao from "./duracao.svg?svgr";
import Particulas from "./particulas.svg?svgr";
import Seguranca from "./seguranca.svg?svgr";
import Volume from "./volume.svg?svgr";
import AcidoMobile from "./acido.svg?svgr";
import BiocompativelMobile from "./biocompativelMobile.svg?svgr";
import DuracaoMobile from "./duracaoMobile.svg?svgr";
import ParticulasMobile from "./particulasMobile.svg?svgr";
import SegurancaMobile from "./segurancaMobile.svg?svgr";
import VolumeMobile from "./volumeMobile.svg?svgr";
import Line from "./line.svg?svgr";
import ChevronLeft from "./chevronLeft.svg?svgr";
import ChevronRight from "./chevronRight.svg?svgr";
import House from "./house.svg?svgr";
import Email from "./email.svg?svgr";
import Whatsapp from "./whatsapp.svg?svgr";
import WhiteArrowRight from "./whiteArrowRight.svg?svgr";
import Comprometimento from "./comprometimento.svg?svgr";
import Inovacao from "./inovacao.svg?svgr";
import Bemestar from "./bemestar.svg?svgr";
import ComprometimentoMobile from "./comprometimentoMobile.svg?svgr";
import InovacaoMobile from "./inovacaoMobile.svg?svgr";
import BemestarMobile from "./bemestarMobile.svg?svgr";
import Wave from "./wave.svg?svgr";
import Download from "./download.svg?svgr";
import BlackSearch from "./blackSearch.svg?svgr";
import TransparentSearch from "./transparentSearch.svg?svgr";
import TransparentSearchSmall from "./transparentSearchSmall.svg?svgr";
import Map from "./map.svg?svgr";
import MapPin from "./mapPin.svg?svgr";
import WhitePhone from "./whitePhone.svg?svgr";
import WhiteWhatsapp from "./whiteWhatsapp.svg?svgr";
import WhiteMail from "./whiteMail.svg?svgr";

const rawIcons = {
  TransparentSearchSmall,
  WhiteMail,
  WhiteWhatsapp,
  WhitePhone,
  MapPin,
  Map,
  TransparentSearch,
  BlackSearch,
  Download,
  Wave,
  BemestarMobile,
  InovacaoMobile,
  ComprometimentoMobile,
  Bemestar,
  Inovacao,
  Comprometimento,
  WhiteArrowRight,
  Whatsapp,
  Email,
  House,
  ChevronRight,
  ChevronLeft,
  Line,
  VolumeMobile,
  SegurancaMobile,
  ParticulasMobile,
  DuracaoMobile,
  BiocompativelMobile,
  AcidoMobile,
  Volume,
  Seguranca,
  Particulas,
  Duracao,
  Biocompativel,
  Acido,
  ArrowRight,
  SofidermMobile,
  Sofiderm,
  LetterLine,
  CarouselIcon,
  LetterBlack,
  Burger,
  LogoBlack,
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
