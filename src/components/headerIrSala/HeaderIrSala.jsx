import data from './../../db.json';
import './headerIrSala.css';

function HeaderIrSala({ state }) {
  const salaId = state;
  const salaRecibida = data[salaId];
  const { nombre, portadaSrc, avatarSrc, alt, descripcionCard } = salaRecibida;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card dark-aqua mb-3 marginTop4 p-0">
            <img
              src={portadaSrc}
              className="card-img-top cardportada"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title mb-4 ">
                <img
                  src={avatarSrc}
                  className="rounded-circle img-thumbnail perfilphoto img-fluid"
                  alt={alt}
                ></img>
                {nombre}
              </h5>
              <p className="card-text descripcionHeader  p-3">
                {descripcionCard}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderIrSala;
