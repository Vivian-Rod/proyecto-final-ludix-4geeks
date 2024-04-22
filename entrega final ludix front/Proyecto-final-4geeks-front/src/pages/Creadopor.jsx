import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import background from '../assets/fondo5.png';

export const Creadopor = () => {
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
        }} >
            {/* NAVBAR */}
            <nav className="navbar bg-dark border-body" data-bs-theme="dark" style={{ background: 'linear-gradient(to right, #9370DB, #104E8B)' }}>
                <div className="container-fluid"> 
                {/* TITLE */}
                <Link to="/" className="navbar-brand" >
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
};
