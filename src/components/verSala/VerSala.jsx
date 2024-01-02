import useTop from '../../useTop';
import BodyVerSala from '../bodyVerSala/BodyVerSala';
import HeaderIrSala from '../headerIrSala/HeaderIrSala';

function VerSala() {
  useTop();
  return (
    <>
      <HeaderIrSala />
      <BodyVerSala />
    </>
  );
}

export default VerSala;
