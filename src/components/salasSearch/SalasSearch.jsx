import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSalaStore } from '../salaStore';

import data from '../../db.json';

import './salasSearch.css';

function SalasSearch() {
  scroll.scrollToTop();

  const enviarId = useSalaStore(state => state.enviarId);

  const onClickUp = () => {
    scroll.scrollToTop();
  };
  const UpIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-arrow-up-circle-fill botonup"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
    </svg>
  );

  return (
    <div className="contenedorSalas">
      <div className="text-center ">
        <h5 className="titulo">SALAS</h5>
      </div>

      <div className="container-fluid">
        <div className="row">
          {data.map(sala => (
            <div
              key={sala.key}
              className="col-lg-6 col-md-6 col-xl-3  mb-sm-4 mb-3"
            >
              <div id={sala.key} className="card dark-aqua cardHover ">
                <img
                  src={sala.portadaSrc}
                  className="card-img-top cardImg"
                  alt="portada"
                />
                <div className="card-body text-center align-items-end d-grid">
                  <div className="align-self-start  ">
                    <h5 className="card-title h5clase">{sala.nombre}</h5>
                    <p className="card-text parrafo text-start">
                      {sala.descripcionCard}
                    </p>
                  </div>

                  <div className="">
                    <Link
                      to="/versala"
                      onClick={enviarId}
                      className="btn-morado dark-aqua btn mt-sm-2 mt-lg-auto text-white"
                      role="button"
                    >
                      Ver Sala
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a
        id="myBtn"
        className="rounded-circle simplescrollup__button simplescrollup__button--show simplescrollup__button--hide"
        onClick={onClickUp}
      >
        {UpIcon}
      </a>
    </div>
  );
}

export default SalasSearch;
