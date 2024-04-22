import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard} from '@fortawesome/free-solid-svg-icons'; 
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { Aboutus } from "./Aboutus";
import { Createby } from "./Createby";
//import { Contact } from "./Contact";
import { Link, useNavigate } from "react-router-dom";
import LudixImg from '../assets/ludix_.png';
import imglandingcenter from '../assets/8.png'
import imglandingfooter from '../assets/11.png'
import imglandingfooter2 from '../assets/foto purple.png'
import background from '../assets/fondo5.png';





export const Landing = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("https://web-production-e5c47.up.railway.app/images")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const handlePrev = () => {
    const newIndex = (activeIndex === 0) ? (images.length - 1) : (activeIndex - 1);
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex === images.length - 1) ? 0 : (activeIndex + 1);
    setActiveIndex(newIndex);
  };

  return  (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      {/* NAVBAR */}
      <nav className="navbar bg-dark border-body" data-bs-theme="dark" style={{ background: 'linear-gradient(to right, #9370DB, #104E8B)' }}>
        <div className="container-fluid"> 
          {/* TITLE */}
          <a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a> 
          <ul className="nav">
            {/* button Login */}      
            <li className="nav-item">
              <button type="button" 
                className="btn btn-dark" 
                style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} 
                data-bs-toggle="modal" 
                data-bs-target="#LoginModal">
                Ingresar
              </button>
            </li>

            <div style={{ width: '5px' }}></div>

            {/* button SignIn */}
            <li className="nav-item">
              <button type="button" 
                className="btn btn-dark" 
                style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} 
                data-bs-toggle="modal" 
                data-bs-target="#SignInModal">
                Suscribirse
              </button>
            </li>
          </ul>
        </div>
      </nav>
      
        
      {/* Secciones con imagen de fondo */}
      <div className="container-fluid p-0">
        {/* Secciones */}
        <div>
          <section id="section1" style={{ clear: 'both', marginBottom: '20px', marginLeft: '80px', marginTop: '100px', height: '500px', position: 'relative' }}>
            
              <img src={LudixImg} alt="Imagen Sección 1" style={{ width: '300px', height: '300px', float: 'left', marginRight: '20px', borderRadius: '10%'}} />
              <div style={{ paddingLeft: '350px' }}>

                  <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '20px', left: '26%', transform: 'translateX(-50%)', zIndex: '1', width: '100%' }}>
                    <h1 className="text-light fw-bold fs-1 dosis-uniquifier" >¿Qué es Ludix?</h1>
                  </div>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', marginRight: '30px', padding: '100px 0', width: '65%', textAlign: 'justify' }}>
                    <p className="text-light fw-light fs-4" style={{ textJustify: 'inter-word' }}><strong>LUDIX</strong> es el destino para los aficionados a juegos de mesa. Es un espacio vibrante donde pueden sumergirse en reseñas, tendencias y debates sobre sus juegos favoritos. Desde clásicos queridos hasta últimas novedades, Ludix ofrece plataforma interactiva para explorar, comentar y compartir experiencias con comunidad apasionada. Únete y descubre diversión estratégica en el emocionante mundo de juegos de mesa.</p>
                  </div>
                        
              </div>   
          </section>
          <section id="section2"  style={{ clear: 'both', marginBottom: '20px', textAlign: 'center', marginRight: '100px', marginTop: '80px', height: '500px', position: 'relative' }}>
            <img src={imglandingcenter} alt="Imagen Sección 2" style={{ width: '300px', height: '300px', float: 'right', marginLeft: '20px', borderRadius: '10%' }} />
            <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '20px', left: '70%', transform: 'translateX(-50%)', zIndex: '1', width: '100%' }}>
              <h2 className="text-light fw-bold fs-1 dosis-uniquifier">Comunidad y Eventos</h2>
            </div>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', marginLeft: '530px', padding: '0px 0 100px', width: '50%', textAlign: 'justify' }}>
              <p className="text-light fw-light fs-4" style={{ textJustify: 'inter-word' }}>Descubre eventos locales, conecta con jugadores cercanos, únete a nuestra comunidad y a nuestros canales de Discord y Whatsapp. Sumérgete en un vibrante mundo de diversión estratégica y camaradería. Explora torneos emocionantes, organiza partidas con amigos y comparte tus experiencias. <strong>¡Únete ahora y sé parte de la emoción en LUDIX!</strong></p>
            </div>
          </section>
          <section id="section3"  style={{ clear: 'both', marginBottom: '20px', textAlign: 'center', marginLeft: '80px', marginTop: '100px', alignContent: 'center', height: '500px', position: 'relative' }}>
            <img src={imglandingfooter} alt="Imagen Sección 3" style={{ width: '300px', height: '300px', float: 'left', marginRight: '20px', borderRadius: '10%' }} />
            <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '20px', left: '26%', transform: 'translateX(-50%)', zIndex: '1', width: '100%' }}>
              <h2 className="text-light fw-bold fs-1 dosis-uniquifier">¿Quiénes Somos?</h2>
            </div>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', marginRight: '30px', padding: '0px 0 100px', width: '52%', textAlign: 'justify' }}>
              <p className="text-light fw-light fs-4">Bienvenido a <strong>LUDIX</strong>, tu destino principal para juegos de mesa y cartas! Derivado del término latino <strong>"ludus"</strong>, que significa <strong>"juego"</strong>, <strong>LUDIX</strong> está impulsado por una pasión por ofrecer la mejor experiencia de juego, enriquecida continuamente por nuestra vibrante comunidad de usuarios. Como el centro de referencia para todo lo relacionado con los juegos de mesa y cartas, nos enorgullece ofrecer una amplia selección de juegos y una gran cantidad de recursos valiosos.</p>
            </div>
          </section>
        </div>
      </div>

          {/*FOTO ESTATICA*/}
                <div className="container-fluid p-0">
        <img src={imglandingfooter2} alt="" className="img-fluid" style={{ width: '100%', height: '80vh', objectFit: 'cover', objectPosition: 'bottom' }} />
      </div>

      {/* FOOTER */}
      <footer className="bg-dark py-4 text-white mt-2">
        <div className="container" style={{marginLeft: '105px'}}>
          <h5><a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a></h5> 
          <Link to="/nosotros" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Nosotros</Link>
          <Link to="/creadopor" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Creador por</Link>
          <p  style={{textDecoration: 'none', color: 'white'}}>Contactanos por:
          <Link to="https://discord.gg/Kgua7H3w" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Discord <FontAwesomeIcon icon={faDiscord} /></Link>
          <Link to="https://chat.whatsapp.com/Hxmx7MwVwAxFW3rNFdHtnE" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Whatsapp <i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
          </p>
        </div>
      </footer>

      {/* MODALES */}
      <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="exampleLoginModal" aria-hidden="true">
        <Login />
      </div>
      <div className="modal fade" id="SignInModal" tabIndex="-1" aria-labelledby="exampleSignInModal" aria-hidden="true">
        <SignIn />
      </div>     
    </div>
  )
}
