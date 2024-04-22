import psycopg2
from flask import Flask, jsonify, request
app = Flask(__name__)
from psycopg2.extras import RealDictCursor
import jwt
from flask_cors import CORS
from flask import Flask, jsonify
CORS(app)

conn = None
try:
        # Parámetros de la base de datos
    host = "localhost"
    database = "basededatosact"
    user = "postgres"
    password = "Mari2606"

    
        # Crear conexión
    conn = psycopg2.connect(
    host="dpg-co2a6lgl6cac739j2pm0-a.oregon-postgres.render.com",
    database="basededatosact",
    user="basededatosact_user",
    password="Hykh33CvRLuTVtMqWzGz0I3WuLZgKuCL",
    cursor_factory=RealDictCursor
    )
    
    print("Conexión exitosa a PostgreSQL")
except (Exception, psycopg2.DatabaseError) as error:
    print(error)

@app.route('/images')
def get_images():
    with conn.cursor() as cursor:
        try:
            cursor.execute("SELECT ID, IMAGE_LINK FROM images")
            image_data = cursor.fetchall()
            return jsonify(image_data)
        except Exception as e:
            print(e)
            return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
        finally:
            cursor.close()

@app.route('/media')
def get_media():
    with conn.cursor() as cursor:
        try:
            cursor.execute("SELECT ID, IMAGE_LINK FROM media")
            media_data = cursor.fetchall()
            return jsonify(media_data)
        except Exception as e:
            print(e)
            return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
        finally:
            cursor.close()

@app.route('/comments/<int:boardgame_id>')
def get_comments(boardgame_id):
    with conn.cursor() as cursor:
        try:
            cursor.execute("SELECT comments.ID, comments.COMMENT, comments.COMMENT_DATE, users.NAME AS USERNAME FROM comments JOIN users ON comments.USER_ID = users.ID WHERE comments.boardgame_id = %s", [boardgame_id])
            media_data = cursor.fetchall()
            return jsonify(media_data)
        except Exception as e:
            print(e)
            return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
        finally:
            cursor.close()


@app.route ('/images/<int:images_id>')
def get_one_images(images_id):
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM images WHERE id = %s", [images_id])
        images = cursor.fetchone()
        print(images)
        return jsonify(images)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()
        
@app.route('/boardgames/<int:boardgame_id>/images')
def get_all_images_by_boardgame_id(boardgame_id):
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT images.IMAGE_LINK FROM images INNER JOIN boardgame_image ON images.ID = boardgame_image.IMAGE_ID WHERE boardgame_image.BOARDGAME_ID = %s", [boardgame_id])
        images = cursor.fetchall()
        print(images)
        return jsonify(images)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

    
@app.route('/login', methods=['POST'])
def login():
    body = request.json
    email = body.get('email')
    password = body.get('password')
    cursor = conn.cursor()
    try:
        cursor.execute("BEGIN")
        cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
        user = cursor.fetchone()
        if user:
            token = jwt.encode({
                "name": user['name'],
                "email": user['email'],
                "age": user['age'],
                "gender": user['gender'],
                "member_since": str(user['member_since']),
                "location": user['location']
                }, 'secret', algorithm='HS256')
            cursor.execute("COMMIT") 
            return jsonify({'token': token, 'name':user['name'],"age": user['age'], "id":user['id']})
        else:
            cursor.execute("ROLLBACK")
            return jsonify({'message': 'Credenciales invalidas'}), 401
    except Exception as e:
        print(e)
        cursor.execute("ROLLBACK")
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/users')
def get_all_users():
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
        print(users)
        return jsonify(users)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/boardgames')
def get_all_boardgames():
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM boardgames")
        boardgames = cursor.fetchall()
        print(boardgames)
        return jsonify(boardgames)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()
        
@app.route ('/boardgames/<int:boardgame_id>')
def get_one_game(boardgame_id):
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM boardgames WHERE id = %s", [boardgame_id])
        boardgames = cursor.fetchone()
        print(boardgames)
        return jsonify(boardgames)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/categories')
def get_all_categories():
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM categories")
        categories = cursor.fetchall()
        print(categories)
        return jsonify(categories)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/reviews')
def get_all_reviews():
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM reviews")
        reviews = cursor.fetchall()
        print(reviews)
        return jsonify(reviews)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/boardgame_category')
def get_all_boardgame_category():
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM boardgame_category")
        boardgame_category = cursor.fetchall()
        print(boardgame_category)
        return jsonify(boardgame_category)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/games_of_interest')
def get_all_games_of_interest():
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM games_of_interest")
        games_of_interest = cursor.fetchall()
        print(games_of_interest)
        return jsonify(games_of_interest)
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/users', methods=['POST'])
def create_users():
    body = request.json
    name = body.get('name')
    email = body.get('email')
    password = body.get('password')
    age = body.get('age')
    gender = body.get('gender')
    location = body.get('location')
    member_since = body.get('member_since')
    print(body)
    cursor = conn.cursor()
    try:  
        cursor.execute("INSERT INTO users (name, email, password, age, gender, location, member_since ) VALUES (%s, %s, %s, %s, %s, %s, %s)", (name, email, password, age, gender, location, member_since))
        conn.commit()
        return jsonify({'message': 'Usuario ingresado correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()
    
@app.route ('/games_of_interest', methods=['POST'])
def create_games_of_interest():
    body = request.json
    boardgame_id = body.get('boardgame_id')
    user_id = body.get('user_id')
    cursor = conn.cursor()
    try:  
        cursor.execute("INSERT INTO games_of_interest (boardgame_id, user_id) VALUES (%s, %s)", (boardgame_id, user_id))
        conn.commit()
        return jsonify({'message': 'Juego de interes ingresado correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()
    
@app.route ('/reviews', methods=['POST'])
def create_reviews():
    body = request.json
    user_id = body.get('user_id')
    boardgame_id = body.get('boardgame_id')
    review = body.get('review')
    boardgame_score = body.get('boardgame_score')
    cursor = conn.cursor()
    try:    
        cursor.execute("INSERT INTO reviews (user_id,boardgame_id, review, boardgame_score) VALUES (%s, %s, %s,%s)", (user_id,boardgame_id, review, boardgame_score))
        conn.commit()
        return jsonify({'message': 'Reviews ingresada correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/comments', methods=['POST'])
def create_comments():
    body = request.json
    comment = body.get('comments')
    comment_date = body.get('comment_date')
    user_id = body.get('user_id')
    boardgame_id = body.get('boardgame_id')
    cursor = conn.cursor()
    try:    
        cursor.execute("INSERT INTO comments (comment,comment_date,user_id,boardgame_id) VALUES (%s, %s, %s, %s)", (comment,comment_date,user_id,boardgame_id))
        conn.commit()
        return jsonify({'message': 'comentario agregado correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()
    
@app.route ('/users/<int:user_id>', methods=['PATCH'])
def modify_users(user_id):
    body = request.json
    name = body.get('name')
    email = body.get('email')
    password = body.get('password')
    age = body.get('age')
    gender = body.get('gender')
    location = body.get('location')
    member_since = body.get('member_since')
    cursor = conn.cursor()
    try:
        cursor.execute("UPDATE users SET name = %s, email=%s, password=%s, age=%s, gender=%s, location=%s, member_since=%s WHERE id = %s", (name, email, password, age, gender, location, member_since, user_id))
        conn.commit()
        return jsonify({'message': 'Usuario modificado correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()

@app.route ('/reviews/<int:review_id>', methods=['PATCH'])
def modify_reviews(review_id):
    body = request.json
    user_id = body.get('user_id')
    boardgame_id = body.get('boardgame_id')
    review = body.get('review')
    boardgame_score = body.get('boardgame_score')
    cursor = conn.cursor()
    try:  
        cursor.execute("UPDATE reviews SET user_id = %s, boardgame_id=%s, review=%s,boardgame_score =%s WHERE id = %s", (user_id,boardgame_id, review, boardgame_score, review_id))
        conn.commit()
        return jsonify({'message': 'Review modificada correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()
    
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    cursor = conn.cursor()
    try:  
        cursor.execute("DELETE FROM users WHERE id = %s",[user_id])
        conn.commit()
        return jsonify({'message': 'Usuario eliminado correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()
    
@app.route('/reviews/<int:reviews_id>', methods=['DELETE'])
def delete_reviews(reviews_id):
    cursor = conn.cursor()
    try:  
        cursor.execute("DELETE FROM reviews WHERE id = %s",[reviews_id])
        conn.commit()
        return jsonify({'message': 'review eliminada correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Ups algo salio mal intentelo más tarde'}), 500
    finally:
        cursor.close()



if __name__ == '__main__':
    app.run(debug=True)

