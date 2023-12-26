import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { useSalaStore } from '../../components/salaStore';

import InputFechaCopy from '../inputFechaCopy/InputFechaCopy';
import './bodyVerSala.css';

function BodyVerSala() {
  const toastMensaje = useRef(null);

  const showError = () => {
    toastMensaje.current.show({
      severity: 'error',
      summary: 'Error',
      detail: 'Complete el campo de texto',
      life: 3000,
    });
  };

  const showSuccess = () => {
    toastMensaje.current.show({
      severity: 'success',

      detail: 'Mensaje enviado correctamente',
      life: 3000,
    });
  };

  const handleMessage = e => {
    const messageText = document.querySelector('#message-text');
    const formMensaje = document.querySelector('#form-mensaje');
    e.preventDefault();
    if (messageText.value === '') {
      showError();
      return;
    }

    showSuccess();
    formMensaje.reset();
  };

  const salaEnviada = useSalaStore(state => state.sala);
  const {
    precioHora,
    precioHoraEstudio,
    alquilerInstrumentos,
    direccion,
    telefono,
    horario,
  } = salaEnviada;

  const DollarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-currency-dollar iconosdatos"
      viewBox="0 0 16 16"
    >
      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
    </svg>
  );

  const MicroIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-mic-fill iconosdatos"
      viewBox="0 0 16 16"
    >
      <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
    </svg>
  );

  const MusicIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-music-note-list iconosdatos"
      viewBox="0 0 16 16"
    >
      <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
      <path fillRule="evenodd" d="M12 3v10h-1V3z" />
      <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
      <path
        fillRule="evenodd"
        d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
  const LocationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-geo-alt-fill iconosdatos"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  );
  const PhoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-telephone-fill iconosdatos"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
  );

  const ClockIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-clock-fill iconosdatos"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
    </svg>
  );
  return (
    <div className="container">
      <Toast ref={toastMensaje} position="top-center" />
      <div className="row bodyVersala">
        <div className="descripcionSala text-white rounded-4  dark-aqua col-md-8 col-lg-8 p-4 p-lg-5 mb-sm-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 ">
              <h6 className="titles mb-lg-5 mb-4">SERVICIOS</h6>

              <div className="d-flex m">
                {DollarIcon}
                <p className="descripcionTexto">Hora: $ {precioHora}</p>
              </div>

              <div className="d-flex">
                {MicroIcon}
                <p className="descripcionTexto">
                  Hora de Estudio: $ {precioHoraEstudio}
                </p>
              </div>

              <div className="d-flex">
                {MusicIcon}
                <p className="descripcionTexto">
                  Alquiler de Inst: $ {alquilerInstrumentos}
                </p>
              </div>
              <hr className="lineaDivServ" />
            </div>
            <div className="col-lg-6 col-md-6">
              <h6 className="titles mb-lg-5 mb-4">DATOS</h6>
              <div className="d-flex">
                {LocationIcon}
                <p className="descripcionTexto">{direccion} </p>
              </div>

              <div className="d-flex">
                {PhoneIcon}
                <p className="descripcionTexto">{telefono}</p>
              </div>

              <div className="d-flex">
                {ClockIcon}
                <p className="descripcionTexto">{horario}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 text-center ">
          <h6 className="titles">PEDIR RESERVA</h6>

          <div className="grid gap-0">
            <div className="g-col-6">
              <InputFechaCopy />
            </div>

            <button
              type="button"
              className="btn border-info btn-md dark-aqua btn-body-sala text-white"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enviar Mensaje
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content bg-modal">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-white"
                      id="exampleModalLabel"
                    >
                      Nuevo Mensaje
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  {/* modal */}
                  <form id="form-mensaje">
                    <div className="modal-body">
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label text-white"
                        >
                          Mensaje:
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={handleMessage}
                      >
                        Enviar Mensaje
                      </button>
                    </div>
                  </form>
                  {/* modal */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyVerSala;
