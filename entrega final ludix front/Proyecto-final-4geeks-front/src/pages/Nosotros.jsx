import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import background from '../assets/fondo5.png';

export const Nosotros = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();

    useEffect(() => {
        let storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername); 
        }
    }, []);

    const handleLogout = () => {
        // Limpiar los datos de autenticación almacenados
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        // Redirigir al usuario a la página de inicio
        navigate("/");
    };

    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            {/* NAVBAR */}
            <nav className="navbar bg-dark border-body" data-bs-theme="dark" style={{ background: 'linear-gradient(to right, #9370DB, #104E8B)' }}>
                <div className="container-fluid"> 
                {/* TITLE */}
                <Link to="/" className="navbar-brand">
                        L U D I X _ <FontAwesomeIcon icon={faChessBoard} />
                    </Link>
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

            {/* Jumbotron */}    
            
            <div className="container">
                <div className="col-md-12 col-lg-6 col-xl-7 mx-auto text-right" style={{ maxWidth: '600px', position: 'relative', zIndex: '1', justifyContent:'center', marginTop:'10px', textAlign: 'justify'}}>
                    <h3 className="text-center m-0" style={{ color: 'white' }}>Sobre LUDIX</h3>                                                
                        <p>Bienvenido a Ludix, tu destino principal para juegos de mesa y cartas! Derivado del término latino "ludus", que significa "juego", Ludix está impulsado por una pasión por ofrecer la mejor experiencia de juego, enriquecida continuamente por nuestra vibrante comunidad de usuarios. Como el centro de referencia para todo lo relacionado con los juegos de mesa y cartas, nos enorgullece ofrecer una amplia selección de juegos y una gran cantidad de recursos valiosos.</p>
                        <p>Explora nuestra extensa colección, que abarca desde clásicos atemporales hasta emocionantes lanzamientos nuevos. Con reseñas completas, calificaciones confiables y varios recursos útiles, Ludix te proporciona todo lo que necesitas para descubrir y disfrutar nuevas experiencias de juego. ¡Prepárate para sumergirte en un mundo de diversión y estrategia con Ludix!</p>
                        <p>Creemos firmemente que los juegos de mesa ofrecen una plataforma excepcional para conectarse con amigos, familiares y entusiastas. Es por eso que Ludix facilita encontrar compañeros de juego sin esfuerzo, ya sea que estés organizando una acogedora noche de juegos en casa o buscando eventos locales, a través de nuestros foros y reseñas. ¡Encuentra tu próximo emocionante partido en Ludix!</p>
                        <p>Regístrate en Ludix hoy para desbloquear funciones exclusivas, como contribuir a nuestra base de datos de juegos, participar en discusiones animadas y conectarte con jugadores afines. Tu privacidad es de suma importancia para nosotros, asegurando que puedas disfrutar de Ludix con total tranquilidad. Únete a la comunidad de Ludix ahora y emprende un emocionante viaje a través del mundo de los juegos de mesa y cartas.</p>
                </div>
            </div>
            
            
            {/* FOOTER */}
            <footer className="bg-dark py-4 text-white mt-4">
                <div className="container">
                    <h5><a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a></h5> 
                    <Link to="/nosotros" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Nosotros</Link>
                    <Link to="/creadopor" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Creado por</Link>
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
    );
}
