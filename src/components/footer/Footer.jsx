import Logo from '../../img/Logo.png';
import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 ">
        <div className="container">
          <div className="row">
            <div className="col-12 align-self-center text-center mt-4">
              <img
                src={Logo}
                className="logofooter d-inline-block align-top rounded"
                alt=""
              />
              <h4 className="text-white">MUSIC SALAS </h4>
              <p className="text-white font-monospace ">
                Creado por{' '}
                <a href="https://github.com/NICKmdrummer">NICKmdrummer</a>
              </p>
            </div>
            <div className="col-12 compartir align-self-center text-center">
              <h4 className="text-white">Compartir</h4>
              <div className="">
                <a
                  className="iconos"
                  href="whatsapp://send?text=https://music-salas.netlify.app/"
                  data-action="share/whatsapp/share"
                >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>
              <div className="p-lg-3 p-3 rounded-4 text-white">
                <div className="row justify-content-evenly m-auto">
                  <div className="col-lg-5 col-md-5  border  rounded-4 py-3 avatar-container">
                    <h4 className="titleFooter mb-sm-3">
                      Imágenes 1:1 utilizadas
                    </h4>

                    <div className="textoCreditos">
                      Imagen de{' '}
                      <a href="https://www.freepik.es/vector-gratis/logo-moderno-musica_2327919.htm#query=music%20logotipo&position=1&from_view=search&track=ais&uuid=9418b91f-f846-4dee-a24e-08d3d32d9166">
                        Freepik
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.freepik.es/vector-gratis/logotipo-nota-musical-semicorchea-plano-texto-editable-blanco-negro_16310498.htm#query=music%20logotipo&position=28&from_view=search&track=ais&uuid=9418b91f-f846-4dee-a24e-08d3d32d9166">
                        Imagen de rawpixel.com
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.freepik.es/vector-gratis/plantilla-logotipo-escuela-musica-vector-diseno-marca-negocios-entretenimiento_20170153.htm#query=music%20logotipo&position=33&from_view=search&track=ais&uuid=08472d09-5e31-459c-8f03-9e69442724a5">
                        Imagen de rawpixel.com
                      </a>
                    </div>
                    <div className="textoCreditos">
                      Imagen de{' '}
                      <a href="https://www.freepik.es/vector-gratis/logo-musica-estilo-degradado_2365582.htm#query=music%20logotipo&position=45&from_view=search&track=ais&uuid=7947d5db-ff99-402c-bc11-baea6b72e739">
                        Freepik
                      </a>
                    </div>
                    <div className="textoCreditos">
                      Imagen de{' '}
                      <a href="https://www.freepik.es/vector-gratis/logo-moderno-musica_2327918.htm#page=2&query=music%20logotipo&position=21&from_view=search&track=ais&uuid=7947d5db-ff99-402c-bc11-baea6b72e739">
                        Freepik
                      </a>
                    </div>
                    <div className="textoCreditos">
                      Imagen de{' '}
                      <a href="https://www.freepik.es/vector-gratis/logotipo-microfono-abierto-diseno-plano_28628959.htm#page=3&query=music%20logotipo&position=26&from_view=search&track=ais&uuid=7947d5db-ff99-402c-bc11-baea6b72e739">
                        Freepik
                      </a>
                    </div>
                    <div className="textoCreditos">
                      Imagen de{' '}
                      <a href="https://www.freepik.es/vector-gratis/logo-musica-estilo-degradado_2365577.htm#query=logo%20musica&position=43&from_view=search&track=ais&uuid=e8298d3a-cb6a-48b6-aaa2-39eda8185ab9">
                        Freepik
                      </a>
                    </div>
                    <div className="textoCreditos mb-lg-3 ">
                      <a href="https://www.freepik.es/vector-gratis/plantilla-logotipo-escuela-musica-vector-diseno-marca-negocios-entretenimiento_18234089.htm#page=2&query=logo%20musica&position=1&from_view=search&track=ais&uuid=314e7878-cfaa-48f3-b76f-5be2c1155496">
                        Imagen de rawpixel.com
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 border  rounded-4 py-3">
                    <h4 className="titleFooter mb-sm-3">
                      Imágenes landscape utilizadas
                    </h4>

                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/photo/a-band-having-a-rehearsal-5648438/">
                        Foto de Cottonbro Studio
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/photo/analog-audio-mixer-3672355/">
                        Foto de Carlos Santos
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/photo/a-drum-set-inside-the-music-studio-6796798/">
                        Foto de Eduardo Torre
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/photo/musicians-performing-together-8512604/">
                        Foto de Big Bag Films
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/photo/a-band-performing-on-the-stage-8512201/">
                        Foto de Big Bag Films
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/photo/man-playing-drums-inside-the-sound-studio-5650958/">
                        Foto de Cottonbro Studio
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/es-es/foto/tecnologia-musica-dentro-mesa-de-mezclas-4988128/">
                        Foto de Tima Miroshnichenko
                      </a>
                    </div>
                    <div className="textoCreditos">
                      <a href="https://www.pexels.com/es-es/foto/mujer-nina-piano-estudiante-7521315/">
                        Foto de Danilyuk Pavel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
