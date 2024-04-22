import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard, faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import background from '../assets/fondo5.png';

export const Editusers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [location, setLocation] = useState('');
    const [username, setUsername] = useState('');
    const [memberSince, setMemberSince] = useState(new Date());
    const [birthday, setBirthday] = useState(new Date());
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername); 
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let selectedGender;

    if (gender === "Man") {
    selectedGender = 1;
    }

    if (gender === "Woman") {
    selectedGender = 2;
    }

    if (gender === "Other") {
    selectedGender = 3;
    }

        if (password !== repeatPassword) {
            console.error("Las contraseñas no coinciden");
            return;
        }
    const transformedMemberSince = memberSince
    ? memberSince.toISOString().split("T")[0]
    : null;

    const user = {
        name: name,
        email: email,
        password: password,
        age: calculateAge(birthday),
        gender: selectedGender,
        member_since: transformedMemberSince,
        location: location,
    };
        function calculateAge(birthday) {
            var birthDate = new Date(birthday);
            var differenceInMS = Date.now() - birthDate.getTime();
            var age_dt = new Date(differenceInMS);
        
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }


        const authToken = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');
        fetch(`https://web-production-e5c47.up.railway.app/users/${userId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            body: JSON.stringify(user),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then((data) => {
            if (data.message) {
                console.log(data.message);
                alert('Usuario modificado correctamente');
                navigate("/");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            // Aquí puedes mostrar un mensaje de error al usuario
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        
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
            
            
            <div style={{minHeight: '66vh'}}>
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-6 col-xl-7" style={{ margin: '20px' }}>
                        <div className="text-center mb-4">
                            <h3 style={{ color: 'white' }}>¡Editar usuario!</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row align-items-center">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row align-items-center">
                                <div className="col">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Correo electrónico"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ubicación"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Repetir contraseña"
                                        value={repeatPassword}
                                        onChange={(e) => setRepeatPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row align-items-center">
                                <div className="col">
                                    <label htmlFor="birthday" className="form-label" style={{ color: 'white' }}>Fecha de Nacimiento:</label>
                                    <DatePicker
                                        selected={birthday}
                                        onChange={(date) => setBirthday(date)}
                                        className="form-control"
                                        dateFormat="dd/MM/yyyy"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="gender" className="form-label" style={{ color: 'white' }}>Género:</label>
                                    <div style={{ color: 'white' }}>
                                        <label className="radio-inline" style={{ margin:'20px' }}>
                                            <input
                                                type="radio"
                                                value="Man"
                                                checked={gender === "Man"}
                                                onChange={() => setGender("Man")}
                                            />
                                            Masculino
                                        </label>
                                        <label className="radio-inline" style={{ margin:'20px' }}>
                                            <input
                                                type="radio"
                                                value="Woman"
                                                checked={gender === "Woman"}
                                                onChange={() => setGender("Woman")}
                                            />
                                            Femenino
                                        </label>
                                        <label className="radio-inline">
                                            <input
                                                type="radio"
                                                value="Other"
                                                checked={gender === "Other"}
                                                onChange={() => setGender("Other")}
                                            />
                                            Otro
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-secondary btn-lg">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="bg-dark py-4 text-white">
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
}
