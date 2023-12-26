import { animateScroll as scroll } from 'react-scroll';
import BodyVerSala from '../bodyVerSala/BodyVerSala';
import HeaderIrSala from '../headerIrSala/HeaderIrSala';

function VerSala() {
  scroll.scrollToTop();
  return (
    <>
      <HeaderIrSala />
      <BodyVerSala />
    </>
  );
}

export default VerSala;
