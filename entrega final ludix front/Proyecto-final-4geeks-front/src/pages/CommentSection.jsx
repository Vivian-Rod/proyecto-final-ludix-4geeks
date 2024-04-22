import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";




export const CommentSection = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [userid, setUserId] = useState(localStorage.getItem('userId'));
  const params = useParams();
  const [getcomment, setGetComment] = useState([]);
  const [deletecomment, setDeleteComment] = useState([]);

  const commentget = ()=>{
  fetch(`https://web-production-e5c47.up.railway.app/comments/${params.gameId}`)
  .then((response) => response.json())
  .then((data) => setGetComment(data));
  }
  
  const deleteComment = (commentId) => {
    fetch(`https://web-production-e5c47.up.railway.app/comments/${commentId}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {setDeleteComment(data)
      setGetComment(getcomment.filter(comment => comment.id !== commentId));
    })
        .catch((error) => {
      console.error('Error:', error);
    });
  };
  
  useEffect(() => {
    commentget();
  }, []);
  

  const handleSubmit = (event) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

  let user;
try {
  user = jwtDecode(token);
} catch (e) {
  console.error(e);
}

    
    event.preventDefault();

  const fechaActual = new Date();
    let ano = String(fechaActual.getFullYear());
    let mes = String(fechaActual.getMonth() + 1);
    let dia = String(fechaActual.getDate());
    mes = mes < 10 ? `0${mes}` : mes;
    dia = dia < 10 ? `0${dia}` : dia;
const fechaFormateada = ano + "-" + mes + "-" + dia;

    const commentMenssage = {
      comments:comment,
      comment_date:fechaFormateada,
      boardgame_id:params.gameId,
      user_id:userid

    };

  

      fetch("https://web-production-e5c47.up.railway.app/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentMenssage),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          
          commentget()
        } else {
          alert("ocurrio un problema");
          console.error("Error:", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <h4>Sección de Comentarios</h4>

          {/* Formulario para agregar comentario */}
          <form>
            <div className="form-group">
              <label htmlFor="username">Nombre de Usuario:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Ingrese su nombre"
                value={username}
                disabled
                />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comentario:</label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                placeholder="Escribe tu comentario aquí"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <br />
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Guardar
              </button>
            </div>
          </form>

          <hr />


          {getcomment.map((comment) => {
  // Convertir la cadena de fecha a un objeto Date
  const fecha = new Date(comment.comment_date);
  // Formatear la fecha en el formato "Sun, 07 Apr 2024"
  const formattedDate = fecha.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="media d-flex gap-3" key={comment.ID}>
      <img
        className="mr-3"
        src="https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"
        width={50}
        height={50}
        alt="Generic placeholder image"
      />
      <div className="media-body">
        <h5 className="mt-0">{comment.username}</h5>
        <p>{comment.comment}</p>
        {/* Mostrar la fecha formateada */}
        <p className="d-flex justify-content-start">
          {formattedDate}
        </p>
        <hr />
      </div>
    </div> 
  );
})}

          
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
