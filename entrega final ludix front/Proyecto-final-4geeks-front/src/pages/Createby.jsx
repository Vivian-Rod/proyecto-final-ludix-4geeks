import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard,faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import background from '../assets/fondo5.png';

export const Createby = () => {
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
            
            {/* Aquí va el centro de la página */}
            <div className="container mt-2">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="item-content">
                            <img src="https://i.pinimg.com/originals/67/22/8c/67228caae9fc2f4d8711b6463c58e164.jpg" 
                                alt="Imagen 1" 
                                className="item-image" />
                            <div className="text">
                                <h5>Nombre: Alfonso "El Jefe"</h5>
                                <h5>Rol: Desarrollador</h5>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="item-content">
                            <img src="https://i.pinimg.com/originals/67/96/0c/67960c079dd76484b816c714a30b7d7f.jpg"
                                alt="Imagen 2" 
                                className="item-image" />
                            <div className="text">
                                <h5>Nombre: Jorge</h5>
                                <h5>Rol: Desarrollador</h5>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="item-content">
                            <img src="https://i.ytimg.com/vi/utEORcimmJU/maxresdefault.jpg" 
                                alt="Imagen 3" 
                                className="item-image" />
                            <div className="text">
                                <h5>Nombre: Viviana</h5>
                                <h5>Rol: Desarrolladora</h5>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="item-content">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkje4VifPMKhVaZ3eBYZ30tr10vfkcYPbgw&usqp=CAU"
                                alt="Imagen 4" 
                                className="item-image" />
                            <div className="text">
                                <h5>Nombre: Pedro</h5>
                                <h5>Rol: Desarrollador</h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
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
};
