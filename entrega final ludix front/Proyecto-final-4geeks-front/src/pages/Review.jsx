import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faUser, faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, useParams } from "react-router-dom";
import './styles.css';
import CommentSection from './CommentSection'; 
import background from '../assets/fondo5.png';

export const Reviews = () => {
  const params = useParams();
  
  //  console.log(params.gameId); // ID del juego. me sirve para obtener la información

  const [boardgame, setBoardGame] = useState({}); // Estado para almacenar los datos del juego
  const [username, setUsername] = useState();// Estado para almacenar el nombre de usuario
  const [images, setImages] = useState([]);


  
  useEffect(() => {
    // Obtener el nombre de usuario del almacenamiento local al cargar la página
    let storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    fetch(`https://web-production-e5c47.up.railway.app/boardgames/${params.gameId}`)
        .then((response) => response.json())
        .then((data) => setBoardGame(data));

    fetch(`https://web-production-e5c47.up.railway.app/boardgames/${params.gameId}/images`)
        .then((response) => response.json())
        .then((data) => setImages(data));
  }, []);

  const handleLogout = () => {
    // Limpiar los datos de autenticación almacenados
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    // Redirigir al usuario a la página de inicio
    window.location.href = "/"; // Redirecciona a la página de inicio
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
                    <Link to="/home" className="navbar-brand">
                        L U D I X _ <FontAwesomeIcon icon={faChessBoard} />
                    </Link>
                    <div className="d-flex" role="search">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active text-light" aria-current="page" style={{textDecoration: 'none'}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/games" className="nav-link text-light" style={{textDecoration: 'none'}}>Juegos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {username}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end text-left"> 
                                    <li><Link to="/EditUsers" className="dropdown-item">Editar usuario</Link></li>
                                    <li role="separator" className="dropdown-divider"></li>
                                    <li><button className="dropdown-item" onClick={handleLogout}>Cerrar sesión</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      <h2 className="text-center p-3">{boardgame.name}</h2>
      <div className="text-center">
      <img src={(images.length > 0 ) ? images[0].image_link: ''} className="img-fluid mx-auto" alt="foto juego" />
      </div >  
      <br />
      <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-6">
            <h4>Descripción: </h4>
            <p className="text-justify">{boardgame.description}</p>
            </div>
        </div>
      
      </div>

      {/* Sección de comentarios */}
      <CommentSection />

    
      {/* FOOTER */}
      <footer className="bg-dark py-4 text-white mt-2">
        <div className="container">
          <h5><a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a></h5> 
          <Link to="/aboutus" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Nosotros</Link>
          <Link to="/createby" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Creado por</Link>
          <p  style={{textDecoration: 'none', color: 'white'}}>Contactanos por:
          <Link to="https://discord.gg/Kgua7H3w" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Discord <FontAwesomeIcon icon={faDiscord} /></Link>
          <Link to="https://chat.whatsapp.com/Hxmx7MwVwAxFW3rNFdHtnE" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Whatsapp <i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
