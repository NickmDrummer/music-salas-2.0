import { useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import VerSala from '../components/verSala/VerSala';

function SecVerSala() {
  let { salaId } = useParams();

  return (
    <>
      <Navbar />
      <VerSala state={salaId} />
      <Footer />
    </>
  );
}

export default SecVerSala;
