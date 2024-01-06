import useTop from '../../useTop';
import BodyVerSala from '../bodyVerSala/BodyVerSala';
import HeaderIrSala from '../headerIrSala/HeaderIrSala';

function VerSala({ state }) {
  useTop();

  return (
    <>
      <HeaderIrSala state={state} />
      <BodyVerSala state={state} />
    </>
  );
}

export default VerSala;
