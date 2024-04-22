import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  

const handleSubmit = async (event) => {
event.preventDefault();
const email = event.target.email.value;
const password = event.target.password.value;
console.log('User:', email);
console.log('Password:', password);

const response = await fetch('https://web-production-e5c47.up.railway.app/login',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
});

const data = await response.json();
console.log(data);
if (response.status === 200) {
  localStorage.setItem('authToken', data.token);
  localStorage.setItem('username', data.name);
  localStorage.setItem('userId',data.id);
  
  console.log(localStorage.getItem('username'));
  setIsOpen(false);
    console.log(isOpen)
    let backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.parentNode.removeChild(backdrop);
    }
  navigate('/home')
} else {
  alert(data.message);
}
    // Here you can perform some action, like sending the data to the backend for authentication
};

  return (
    <div>
      {isOpen && (
        <div className="modal-dialog" style={{ maxWidth: '70%', maxHeight: '50%' }}>
    
      <div className="modal-content" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
        {/* MODAL HEADER*/}
        <div className="modal-header" style={{ background: 'linear-gradient(to right, #9370DB, #104E8B)' }}>
          <p className="modal-title fs-5" id="exampleModalLabel">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></p>
        </div>

        {/* MODAL CENTER*/}
        <section className="vh-50" style={{ backgroundColor: '#eef3f4', color:'black' }}>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              {/* MODAL LEFT*/}
              <div className="col-md-9 col-lg-6 col-xl-5 login-text p-3">
                <img src="https://img.freepik.com/fotos-premium/varios-juegos-mesa-tablero-ajedrez-jugando-cartas-domino-sobre-fondo-claro-espacio-texto_287732-404.jpg?w=740" 
                  className="img-fluid login-text" 
                  alt="Game" />
                  <p className="font-weight-bold fw-light fs-5"style={{ textAlign: 'justify' }}><strong>¡Bienvenido de vuelta! Por favor, inicia sesión para acceder a tu cuenta y sumergirte en el emocionante mundo de LUDIX. Tu próxima aventura te espera aquí.</strong></p>

              </div>
              {/* MODAL RIGHT*/}
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">  
                <form onSubmit={handleSubmit}>
                  <h1 className='text-center'>Ingreso</h1>
                  <div className="form-outline mb-2">
                    <input type="email" id="email" className="form-control form-control-lg" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    
                  </div>
                  <div className="form-outline mb-2 ">
                    <input type="password" id="password" className="form-control form-control-lg" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    
                  </div>
                  


                  {/* HERE GOES THE BACKEND LOGIN */}
                  <div className="text-center text-lg-center mt-4 pt-0">
                    <button type="submit" className="btn btn-secondary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Ingresar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* MODAL FOOTER*/}
        <div className="modal-footer" style={{backgroundColor: 'black', color: 'white'}}>
          <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
    )}
    </div>
  );
};

