import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [memberSince, setMemberSince] = useState(new Date());
  const [Location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  //se inicia la conexion con el back
  const handleSubmit = (event) => {
    event.preventDefault();

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

    const transformedMemberSince = memberSince
      ? memberSince.toISOString().split("T")[0]
      : null;

    const user = {
      name: firstName + " " + lastName,
      email: email,
      password: password,
      age: calculateAge(birthday),
      gender: selectedGender,
      member_since: transformedMemberSince,
      location: Location,
    };

    fetch("https://web-production-e5c47.up.railway.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setIsOpen(false);
          console.log(isOpen)
          let backdrop = document.querySelector('.modal-backdrop');
          if (backdrop) {
            backdrop.parentNode.removeChild(backdrop);
          }
          alert("El registro fue exitoso");
        } else {
          alert("El registro no fue exitoso");
          console.error("Error:", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function calculateAge(birthday) {
    var birthDate = new Date(birthday);
    var differenceInMS = Date.now() - birthDate.getTime();
    var age_dt = new Date(differenceInMS);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return (
    <div>
      {isOpen && (
        <div
          className="modal-dialog"
          style={{ maxWidth: "70%", maxHeight: "50%" }} >
          <div
            className="modal-content"
            style={{
              border: "1px solid white",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* MODAL HEADER*/}
            <div className="modal-header" style={{ background: 'linear-gradient(to right, #9370DB, #104E8B)' }}>
              <p className="modal-title fs-5" id="exampleModalLabel">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></p>
            </div>

            {/* MODAL CENTER*/}
            <section className="vh-50" style={{ backgroundColor: '#eef3f4', color:'black' }}>
              <div className="container-fluid h-custom" style={{ color: 'black'}}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                  {/* MODAL RIGHT*/}
                  <div className="col-md-9 col-lg-6 col-xl-5 p-3">
                    <img
                      src="https://img.freepik.com/fotos-premium/varios-juegos-mesa-tablero-ajedrez-jugando-cartas-domino-sobre-fondo-claro-espacio-texto_287732-404.jpg?w=740"
                      className="img-fluid"
                      alt="Game"
                    />
                  <p className="font-weight-bold fw-light fs-5" style={{ textAlign: 'justify' }}><strong>¡Únete a la comunidad de LUDIX! Regístrate ahora para disfrutar de todas las características exclusivas y sumergirte en el emocionante mundo de los juegos de mesa. ¡Es rápido, fácil y gratuito!</strong></p>
              
                  </div>

                  {/* MODAL LEFT*/}
                  <div className="col-md-12 col-lg-6 col-xl-7">
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-center"> Crear cuenta</h3>
                      <div
                        className="form-outline mb-2"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ marginRight: "1rem", flex: 1 }}>
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder="Ingresa tu nombre"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div style={{ marginLeft: "1rem", flex: 1 }}>
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                            placeholder="Ingresa tu apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Ingresa tu correo electrónico"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Ingresa tu contraseña"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="text"
                          id="Location"
                          className="form-control form-control-lg"
                          placeholder="Ingresa tu ubicación"
                          value={Location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                        />
                      </div>
                      <div
                        className="form-outline mb-2"
                        style={{ display: "flex" }}
                      >
                        <div style={{ marginRight: "2rem" }}>
                          <p
                            id="Birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                          >
                            Fecha de Nacimiento:
                          </p>
                          <DatePicker
                            selected={birthday}
                            onChange={(date) => setBirthday(date)}
                            className="date-picker"
                            placeholderText="Seleccionar fecha"
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableYearDropdown
                          />
                        </div>
                        <div style={{ marginLeft: "2rem" }}>
                          <p>Género:</p>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <label style={{ marginRight: "1rem" }}>
                              <input
                                type="radio"
                                value="Man"
                                checked={gender === "Man"}
                                onChange={() => setGender("Man")}
                              />
                              Hombre
                            </label>
                            <label style={{ marginRight: "1rem" }}>
                              <input
                                type="radio"
                                value="Woman"
                                checked={gender === "Woman"}
                                onChange={() => setGender("Woman")}
                              />
                              Mujer
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="Other"
                                checked={gender === "Other"}
                                onChange={() => setGender("Other")}
                              />
                              Otros
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-lg-center mt-4 pt-0">
                        <button
                          type="submit"
                          className="btn btn-secondary btn-lg"
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                        >
                          Registrarse
                        </button>
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
