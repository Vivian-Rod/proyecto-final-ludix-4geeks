import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard,faSearch } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import background from '../assets/fondo5.png';

export const Games = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [images, setImages] = useState([]);
  const [username, setUsername] = useState();

  useEffect(() => {
    fetch("https://web-production-e5c47.up.railway.app/boardgames")
      .then((response) => response.json())
      .then((data) => setGames(data));

    fetch("https://web-production-e5c47.up.railway.app/images")
      .then((response) => response.json())
      .then((data) => setImages(data));

    let storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate("/");
  };
  
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
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


      <div className="container mt-2">
        <div className="row mt-2">
          {games.slice(0, games.length - 2).map((game, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <br />
                <div className="card">
                  {images[index] && images[index].image_link && (
                    <img
                      src={images[index].image_link}
                      className="card-img-top"
                      alt={`Imagen ${index}`}
                      width={200}
                      height={300}
                    />
                  )}
                  <div className="card-body text-center">
                  <h5 className="card-title m-0" style={{ fontFamily: 'Dosis', fontSize: '27px' }}>{game.name}</h5>
                    <p className="card-text">
                      {game.description.substring(0, 80) + "..."}
                    </p>
                    <p style={{ fontFamily: 'Dosis', fontSize: '20px' }}>Edad {game.age}</p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => navigate(`/reviews/${game.id}`)}
                      >
                      Ver reseña
                    </a>
                  </div>
                </div>
              </div>
              
            );
            })}
            
         
      </div>


     
    </div>
    <footer className="bg-dark py-4 text-white mt-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></Link>
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
};


/*
 {games.length >= 2 && (
            <div className="col-sm-6 col-md-4 col-lg-3 offset-lg-3">
              <br />
              <div className="card">
                {images[games.length - 2] &&
                  images[games.length - 2].image_link && (
                    <img
                      src={images[games.length - 2].image_link}
                      className="card-img-top"
                      alt={`Imagen ${games.length - 2}`}
                      width={200}
                      height={300}
                    />
                  )}
                <div className="card-body text-center">
                  <h5 className="card-title m-0">
                    {games[games.length - 2].name}
                  </h5>
                  <p className="card-text">
                    {games[games.length - 2].description.substring(0, 80) +
                      "..."}
                  </p>
                  <p>Edad {games[games.length - 2].age}</p>
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => navigate(`/reviews/${game.id}`)}
                  >
                    Ver reseña  
                  </a>
                </div>
              </div>
            </div>
          )}
          {games.length >= 1 && (
            <div className="col-sm-6 col-md-4 col-lg-3">
              <br />
              <div className="card">
                {images[games.length - 1] &&
                  images[games.length - 1].image_link && (
                    <img
                      src={images[games.length - 1].image_link}
                      className="card-img-top"
                      alt={`Imagen ${games.length - 1}`}
                      width={200}
                      height={300}
                    />
                  )}
                <div className="card-body text-center">
                  <h5 className="card-title m-0">
                    {games[games.length - 1].name}
                  </h5>
                  <p className="card-text">
                    {games[games.length - 1].description.substring(0, 80) +
                      "..."}
                  </p>
                  <p>Edad {games[games.length - 1].age}</p>
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => navigate(`/reviews/${games.id}`)}
                  >
                    Ver reseña
                  </a>
                </div>
              </div>
            </div>
          )}
          */