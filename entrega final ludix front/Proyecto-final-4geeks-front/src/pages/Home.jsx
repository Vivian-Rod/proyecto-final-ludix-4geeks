import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate, useParams } from "react-router-dom";
import background from '../assets/fondo5.png';

export const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [game, setGames] = useState([]);
  const [images, setImages] = useState([]);
  const [username, setUsername] = useState();
  const [media, setMedia] = useState("");
  
  useEffect(() => {
    fetch("https://web-production-e5c47.up.railway.app/boardgames")
      .then((response) => response.json())
      .then((data) => setGames(data));

    fetch("https://web-production-e5c47.up.railway.app/images")
      .then((response) => response.json())
      .then((data) => setImages(data));

      fetch("https://web-production-e5c47.up.railway.app/media")
      .then((response) => response.json())
      .then((data) => setMedia(data[0].image_link));
    

    let storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // Limpiar los datos de autenticación almacenados
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
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
                    <Link to="/home" className="navbar-brand" onClick={()=> navigate('/home')}>
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

      {/*Video*/}
      <div className="container mt-2">
  <video width="1300" height="600" loop autoPlay muted>
    {media && <source src={media} type="video/mp4" />}
    Tu navegador no soporta el elemento de video.
  </video>
</div>

      {/* Cards */}
      <div className="container mt-2">
        <div className="row mt-2">
          {images.length > 0 &&
            game.slice(0, 4).map((game, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                  <br></br>
                  <div className="card">
                    {images[index].image_link && (
                      <img
                        src={images[index].image_link}
                        className="card-img-top"
                        alt=" "
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

      {/* FOOTER */}
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
