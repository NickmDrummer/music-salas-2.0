import { useLocation } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import VerSala from '../components/verSala/VerSala';

function SecVerSala() {
  let { state } = useLocation();

  return (
    <>
      <Navbar />
      <VerSala state={state} />
      <Footer />
    </>
  );
}

export default SecVerSala;
