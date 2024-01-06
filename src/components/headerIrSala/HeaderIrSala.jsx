import './headerIrSala.css';

function HeaderIrSala({ state }) {
  const sala = state.sala;
  const { nombre, portadaSrc, avatarSrc, alt, descripcionCard } = sala;

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
