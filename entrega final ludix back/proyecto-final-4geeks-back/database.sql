CREATE TABLE categories (
	ID SERIAL PRIMARY KEY,
	CATEGORY_NAME VARCHAR (50)
);

INSERT INTO categories (CATEGORY_NAME) VALUES 
	('Abstract Strategy'),
	('Action / Dexterity'),
	('Adventure'),
	('Age of Reason'),
	('American Civil War'),
	('American Indian Wars'),
	('American Revolutionary War'),
	('American West'),
	('Ancient'),
	('Animals'),
	('Arabian'),
	('Aviation / Flight'),
	('Bluffing'),
	('Book'),
	('Card Game'),
	('Children Game'),
	('City Building'),
	('Civil War'),
	('Civilization'),
	('Collectible Components'),
	('Comic Book / Strip'),
	('Deduction'),
	('Dice'),
	('Economic'),
	('Educational'),
	('Electronic'),
	('Environmental'),
	('Expansion for Base-game'),
	('Exploration'),
	('Fan Expansion'),
	('Fantasy'),
	('Farming'),
	('Fighting'),
	('Game System'),
	('Horror'),
	('Humor'),
	('Industry / Manufacturing'),
	('Korean War'),
	('Mafia'),
	('Math'),
	('Mature / Adult'),
	('Maze'),
	('Medical'),
	('Medieval'),
	('Memory'),
	('Miniatures'),
	('Modern Warfare'),
	('Movies / TV / Radio theme'),
	('Murder/Mystery'),
	('Music'),
	('Mythology'),
	('Napoleonic'),
	('Nautical'),
	('Negotiation'),
	('Novel-based'),
	('Number'),
	('Party Game'),
	('Pike and Shot'),
	('Pirates'),
	('Political'),
	('Post-Napoleonic'),
	('Prehistoric'),
	('Print & Play'),
	('Puzzle'),
	('Racing'),
	('Real-time'),
	('Religious'),
	('Renaissance'),
	('Science Fiction'),
	('Space Exploration'),
	('Spies/Secret Agents'),
	('Sports'),
	('Territory Building'),
	('Trains'),
	('Transportation'),
	('Travel'),
	('Trivia'),
	('Video Game Theme'),
	('Vietnam War'),
	('Wargame'),
	('Word Game'),
	('World War I'),
	('World War II'),
	('Zombies');

CREATE TABLE boardgames (
	ID SERIAL PRIMARY KEY,
	NAME VARCHAR (50),
	YEAR_PUBLISHED INT NOT NULL,
	NUMBER_OF_PLAYERS VARCHAR(15) NOT NULL,
	AGE VARCHAR (5) NOT NULL,
	PLAYING_TIME VARCHAR (15) NOT NULL	,
	DESCRIPTION TEXT NOT NULL
  );

INSERT INTO boardgames (NAME, YEAR_PUBLISHED, NUMBER_OF_PLAYERS, AGE, PLAYING_TIME, DESCRIPTION) VALUES 
	('Cards against humanity', 2009, '4 - 30', '17+', '30 min', 'Cards Against Humanity es un juego de fiesta para gente horrible. En cada ronda, un jugador hace una pregunta de una tarjeta negra y todos los demás responden con su tarjeta blanca más divertida.'),
	('Catan', 1995, '3 - 4', '10+', '60 - 120 min', 'Catan es un juego competitivo de gestión de recursos y negociación económica. Los jugadores recogerán recursos de los diferentes hexágonos de terreno del tablero y luego usarán esos recursos para construir más estructuras y poder recoger aún más recursos.'),
	('Dixit', 2008, '3 - 8', '8+', '30 min', 'Dixit es un juego de mesa para toda la familia donde el jugador principal debe usar la imaginación para sugerir un tema, palabras, frases o historias sobre su carta y los demás jugadores deben intentar engañar a otros jugadores con sus propias cartas.'),
	('Dobble', 2009, '2 - 8', '7+', '15 min','Dobble es un increíble juego de mesa de rapidez mental y visual. El concepto es simple: cada una de las 55 cartas del mazo tiene ocho símbolos, y siempre hay exactamente un símbolo coincidente entre dos cartas cualquiera en el mazo. Tu objetivo es ser el más rápido en encontrar la coincidencia entre dos cartas.'),
	('Eldritch Horror', 2013, '1 - 8', '14+', '120 - 240 min', 'Eldritch Horror es un juego cooperativo para uno a ocho jugadores, basado en la ficción de HP Lovecraft e inspirado en el clásico juego de mesa Arkham Horror. En Eldritch Horror, los investigadores viajan por todo el mundo en una búsqueda urgente para salvar al mundo de un Anciano omnipotente y diabólico.'),
	('Exploding Kittens', 2015, '2 - 5', '7+', '15 min', 'Exploding Kittens es un juego rápido y divertido en el que tienes que asegurar tu supervivencia ante los temibles ¡gatos explosivos! Un juego de cartas en el que hasta cinco jugadores hacen todo lo posible por fastidiar a los rivales hasta conseguir que caigan eliminados, aguantando tanto tiempo como sea posible con la esperanza de que sean los rivales los que finalmente se encuentren con un gato explosivo.'),
	('Maracaibo', 2019, '1 - 4', '12+', '30 - 120 min', 'El Caribe, siglo XVII: varias naciones europeas luchan por mejorar su posición económica y política y obtener la supremacía de la región. Como todo buen marinero y aventurero, pasas tus días tratando de mejorar tu estatus con estas naciones y aumentar tus redes comerciales, con el objetivo último de obtener fama y fortuna. No es tarea sencilla, ya que la competición no se toma ni un día de descanso. Solamente llevando a cabo tus planes a la perfección serás capaz de alzarte con la victoria'),
	('Monopoly', 1935, '2 - 8', '8+', '60 - 180 min', 'Monopoly es un juego de compraventa de propiedades muy popular, en el que los jugadores compran, venden e intercambian parcelas para llevar a la quiebra a sus oponentes. Con pensamiento estratégico y una pizca de suerte, este juego proporcionará horas de entretenimiento a todo el mundo.'),
	('Pandemic', 2008, '2 - 4', '8+', '45 min', 'Pandemic se basa en la premisa de la existencia de cuatro enfermedades que se están expandiendo por el mundo, cada una de las cuales amenaza con acabar con una región. El juego funciona con una capacidad de 2 a 4 jugadores, jugando cada uno de ellos con uno de los cinco posibles roles de especialistas: coordinador de efectivos, médico, científico, investigador o experto en operaciones. El juego se basa, a diferencia de la mayoría de los juegos de mesa, en la cooperación más que en la competitividad. El objetivo es descubrir las curas de las cuatro enfermedades antes de que se desencadene alguna de las condiciones de derrota a través del esfuerzo combinado de todos los jugadores.'),
	('The Thing', 2010, '2 - 4', '18+', '45 min', 'The Thing  El Juego de Mesa, te sumerge en el epónimo filme de culto dirigido en 1982 por el legendario cineasta John Carpenter. El juego está enfocado en la capacidad de asimilación del Alienígena y su habilidad para esconder su identidad bajo un velo de falsa humanidad. El objetivo principal del Alienígena será escapar de la base y propagarse por el planeta, mientras que los humanos tratarán de pararle los pies a toda costa.');

CREATE TABLE boardgame_category (
	BOARDGAME_ID INT NOT NULL,
	CATEGORY_ID INT NOT NULL,
	CONSTRAINT FK_CATEGORY_ID FOREIGN KEY (CATEGORY_ID)
    REFERENCES categories(ID),
	CONSTRAINT FK_BOARDGAME_ID FOREIGN KEY (BOARDGAME_ID)
    REFERENCES boardgames(ID)
);	

INSERT INTO boardgame_category (BOARDGAME_ID, CATEGORY_ID) VALUES 
	(1,15),
	(1,36),
	(1,41),
	(1,57),
	(1,63),
	(2,24),
	(2,54),
	(3,15),
	(3,36),
	(3,57),
	(4,15),
	(4,16),
	(4,25),
	(4,57),
	(4,66),
	(4,75),
	(5,3),
	(5,33),
	(5,35),
	(5,55),
	(5,76),
	(6,10),
	(6,15),
	(6,21),
	(6,36),
	(7,24),
	(7,29),
	(7,53),
	(7,59),
	(8,24),
	(8,54),
	(9,43),
	(10,13),
	(10,15),
	(10,22),
	(10,33),	
	(10,35),
	(10,41),
	(10,48),
	(10,63),
	(10,69);
	
CREATE TABLE users (
	ID SERIAL PRIMARY KEY,
	NAME text NOT NULL,
	EMAIL VARCHAR (50) NOT NULL,
	PASSWORD VARCHAR (10) NOT NULL,
	AGE INT NOT NULL,
	GENDER INT NOT NULL,
	MEMBER_SINCE DATE NOT NULL,
	LOCATION VARCHAR (50)	
);

INSERT INTO users (NAME, EMAIL, PASSWORD, AGE, GENDER, MEMBER_SINCE, LOCATION) VALUES 
	('Alfonso', 'alfoval26@gmail.com', '123456789', 35, 1,'25-03-2024','Santiago'), 
	('Jorge', 'rotkobold@gmail.com', '123456789', 38, 1, '25-03-2024','Maipú'),
	('Pedro', 'paguirre2391@gmail.com', '123456789', 32, 1, '25-03-2024','La Ligua'),
	('Viviana', 'contacto.anaro@gmail.com', '123456789', 39, 2, '25-03-2024', 'Santiago');

CREATE TABLE games_of_interest (
	BOARDGAME_ID INT NOT NULL,
	USER_ID INT	NOT NULL,
	CONSTRAINT FK_BOARDGAME_ID FOREIGN KEY (BOARDGAME_ID)
    REFERENCES boardgames(ID),
	CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID)
    REFERENCES users(ID)
);

CREATE TABLE reviews (
	ID SERIAL PRIMARY KEY,
	USER_ID INT,
	BOARDGAME_ID INT,
	REVIEW TEXT,
	BOARDGAME_SCORE DECIMAL (2,1),
	CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID)
    REFERENCES users(ID),
	CONSTRAINT FK_BOARDGAME_ID FOREIGN KEY (BOARDGAME_ID)
    REFERENCES boardgames(ID)
);


INSERT INTO reviews (USER_ID, BOARDGAME_ID, REVIEW, BOARDGAME_SCORE) VALUES 
	(1, 1, 'Cards Against Humanity es un juego de fiesta que ha ganado popularidad por su humor negro y su capacidad para generar risas entre amigos. Con una mecánica sencilla, donde los jugadores completan frases con cartas que contienen respuestas inapropiadas, el juego se convierte en una competencia por quién puede crear las combinaciones más absurdas y políticamente incorrectas.

Lo bueno de Cards Against Humanity es su capacidad para desencadenar risas y momentos memorables. Las cartas están llenas de referencias pop, memes y chistes que pueden resultar hilarantes para aquellos con un sentido del humor irreverente. La simplicidad de las reglas hace que sea fácil de aprender y jugar, lo que lo convierte en una excelente opción para reuniones sociales y fiestas.

Sin embargo, el juego no está exento de críticas. Algunos pueden encontrar el humor de Cards Against Humanity ofensivo o incluso perturbador. Las cartas pueden abordar temas sensibles o tabú, lo que puede resultar incómodo para ciertos jugadores. Además, la repetición de las mismas cartas puede llevar a que las partidas se vuelvan predecibles o pierdan su frescura con el tiempo.

Mi experiencia jugando Cards Against Humanity ha sido mixta. Si bien he tenido momentos de diversión y risas contagiosas con amigos, también he presenciado situaciones donde el humor del juego ha sido ofensivo para algunas personas en el grupo. Personalmente, no recomendaría el juego para todos los públicos debido a su contenido provocativo y su potencial para causar incomodidad.

En una escala del 1 al 10, le daría a Cards Against Humanity un 7. Aunque es divertido en el entorno adecuado y puede generar risas, su contenido polémico y su falta de diversidad en las cartas pueden restarle puntos en términos de accesibilidad y disfrute para todos los jugadores.', 7.0), 
	(2, 2, 'Catan es un juego de mesa clásico que ha cautivado a jugadores de todas las edades con su mezcla única de estrategia, negociación y construcción. Ambientado en una isla deshabitada, los jugadores compiten por colonizar y desarrollar la tierra, estableciendo asentamientos, construyendo caminos y comerciando recursos.

Lo bueno de Catan es su profundidad estratégica y su capacidad para fomentar la interacción social entre los jugadores. La mecánica de negociación agrega un elemento táctico emocionante, donde la habilidad para hacer trueques puede ser la clave para el éxito. Además, la variabilidad del tablero y la distribución aleatoria de los recursos aseguran que cada partida sea única y ofrezca oportunidades para diferentes enfoques y estrategias.

Sin embargo, algunos jugadores pueden encontrar que la suerte juega un papel demasiado grande en el resultado del juego, especialmente en las primeras etapas cuando los recursos son escasos. Además, las partidas pueden prolongarse, especialmente con jugadores que son indecisos o que tardan en tomar decisiones estratégicas, lo que puede resultar en momentos de aburrimiento o frustración.

Mi experiencia jugando Catan ha sido mayormente positiva. Me encanta la emoción de construir y expandir mi imperio mientras navego por las negociaciones y los intercambios con mis oponentes. Sin embargo, reconozco que las partidas pueden volverse largas y que la suerte puede influir en el resultado final. Aun así, recomendaría Catan a cualquier persona que disfrute de juegos de mesa con elementos de estrategia y negociación.

En una escala del 1 al 10, le daría a Catan un sólido 8. Su mezcla de estrategia, interacción social y emoción lo convierte en un juego clásico que sigue siendo disfrutado por jugadores de todas las edades.
', 8.0),
	(3, 3, 'Dixit es un juego de mesa encantador que destaca por su belleza artística y su capacidad para inspirar la creatividad y la imaginación. En este juego, los jugadores usan cartas con ilustraciones abstractas para contar historias y dar pistas, mientras los demás intentan adivinar cuál es la carta del narrador.

Lo bueno de Dixit es su enfoque único y refrescante en la narración y la interpretación. Las ilustraciones son hermosas y evocadoras, lo que permite a los jugadores crear narrativas únicas y personales en cada partida. La simplicidad de las reglas hace que sea accesible para jugadores de todas las edades y niveles de experiencia, lo que lo convierte en una excelente opción para familias y grupos diversos.

Sin embargo, algunos jugadores pueden encontrar que la falta de estructura o competencia directa puede hacer que el juego se sienta un poco pasivo o carezca de emoción. Además, la interpretación subjetiva de las pistas puede llevar a malentendidos o confusiones, especialmente entre jugadores con diferentes estilos de pensamiento o culturas.

Mi experiencia jugando Dixit ha sido profundamente gratificante. Me encanta la libertad creativa que ofrece el juego y cómo cada partida se convierte en una experiencia única y personal. Aunque reconozco que puede no ser adecuado para todos los gustos, recomendaría Dixit a cualquier persona que busque un juego de mesa que fomente la imaginación y la narración de historias.

En una escala del 1 al 10, le daría a Dixit un sólido 9. Su belleza artística, su simplicidad y su capacidad para inspirar la creatividad lo convierten en un juego excepcional que merece un lugar en la colección de cualquier aficionado a los juegos de mesa.
', 9.0), 
	(4, 4, 'Dobble es un juego de cartas que ofrece una experiencia frenética y divertida para jugadores de todas las edades. Con su mecánica simple pero adictiva, desafía a los participantes a encontrar los símbolos coincidentes entre las cartas lo más rápido posible.

Lo bueno de Dobble es su accesibilidad y su capacidad para mantener a todos los jugadores involucrados y emocionados. Las reglas son fáciles de entender, lo que lo convierte en una excelente opción para jugadores nuevos o casuales. Además, su portabilidad lo hace ideal para llevarlo a cualquier lugar, desde fiestas hasta viajes.

Sin embargo, la simplicidad del juego puede llevar a que las partidas se sientan repetitivas después de varias rondas. Algunos jugadores pueden encontrar que la falta de profundidad estratégica limita su longevidad y emoción en comparación con otros juegos más complejos.

Mi experiencia jugando Dobble ha sido extremadamente positiva. Siempre disfruto de la emoción de competir por encontrar los símbolos coincidentes lo más rápido posible, y la rapidez del juego lo hace perfecto para partidas rápidas entre otras actividades. Recomiendo Dobble a cualquier persona que busque un juego divertido y accesible para disfrutar con amigos y familiares.

En una escala del 1 al 10, le daría a Dobble un sólido 8. Su simplicidad y su capacidad para ofrecer diversión instantánea lo convierten en un juego imprescindible para cualquier colección de juegos de mesa, aunque su longevidad puede verse afectada por su naturaleza repetitiva.
', 9.8),
	(1, 5, 'Eldritch Horror es un juego de mesa que sumerge a los jugadores en un mundo de horror cósmico y misterio. En este juego cooperativo, los participantes asumen el papel de investigadores que se enfrentan a terribles monstruos y a la inminente llegada de antiguas entidades cósmicas.

Lo bueno de Eldritch Horror es su capacidad para crear una atmósfera inmersiva y tensa. La narrativa envolvente y las mecánicas desafiantes mantienen a los jugadores al borde de sus asientos en cada momento. La cooperación entre los participantes es fundamental para lograr el éxito, lo que fomenta la comunicación y el trabajo en equipo.

Sin embargo, la complejidad del juego puede resultar abrumadora para jugadores nuevos o casuales. Las reglas detalladas y la cantidad de componentes pueden llevar tiempo para dominar, lo que puede dificultar la entrada al juego para algunos. Además, las partidas pueden ser largas y difíciles de completar, lo que puede ser desalentador para aquellos con menos tiempo disponible.

Mi experiencia jugando Eldritch Horror ha sido emocionante y desafiante. Siempre disfruto de la tensión y la intriga que genera el enfrentarse a monstruos impensables y a la lucha contra la locura que acecha en cada esquina. Aunque reconozco que puede no ser adecuado para todos los públicos debido a su complejidad y duración, recomendaría Eldritch Horror a cualquier persona que busque una experiencia de juego inmersiva y llena de suspense.

En una escala del 1 al 10, le daría a Eldritch Horror un sólido 9. Su narrativa envolvente, mecánicas desafiantes y atmósfera tensa lo convierten en un juego imprescindible para los amantes del género de horror y la narrativa. Sin embargo, su complejidad puede ser un obstáculo para algunos jugadores, lo que le impide alcanzar una puntuación perfecta.

', 9.0), 
	(2, 6, 'Exploding Kittens es un juego de cartas lleno de humor absurdo y emocionante competencia. Con una mecánica simple pero adictiva, desafía a los jugadores a evitar ser explotados por los gatos explosivos mientras intentan hacer que sus oponentes sean víctimas de las cartas sabotaje.

Lo bueno de Exploding Kittens es su capacidad para ofrecer diversión instantánea y emocionante para jugadores de todas las edades. Las reglas son fáciles de entender, lo que lo hace perfecto para reuniones sociales y para jugar con amigos y familiares. Además, su humor absurdo y sus ilustraciones encantadoras lo convierten en un juego que siempre genera risas y buenos momentos.

Sin embargo, la aleatoriedad de las cartas puede hacer que las partidas se sientan un poco carentes de control estratégico. Algunos jugadores pueden encontrar que la suerte juega un papel demasiado grande en el resultado del juego, lo que puede ser frustrante para aquellos que prefieren juegos más estratégicos y controlables.

Mi experiencia jugando Exploding Kittens ha sido muy positiva. Siempre disfruto de la emoción de intentar evitar las explosiones mientras planeo mis movimientos para sabotear a mis oponentes. Es un juego que siempre garantiza risas y diversión, y que es perfecto para llevar a cualquier reunión o evento social.

En una escala del 1 al 10, le daría a Exploding Kittens un sólido 8. Su simplicidad y su capacidad para generar diversión instantánea lo convierten en un juego imprescindible para cualquier colección de juegos de mesa, aunque su falta de profundidad estratégica puede ser un inconveniente para algunos jugadores más exigentes.
', 8.0),
	(3, 7, 'Maracaibo es un juego de mesa que ofrece una experiencia estratégica y envolvente ambientada en el Caribe del siglo XVII. Con su mezcla magistral de mecánicas de construcción de mazos, navegación y desarrollo de rutas comerciales, te sumerge en una emocionante aventura de exploración y conquista.

Lo bueno de Maracaibo es su profundidad estratégica y su atención meticulosa al detalle histórico. Desde el momento en que zarpar por las aguas del Mar Caribe hasta que comercias con las potencias coloniales, cada decisión que tomas tiene un impacto significativo en el curso del juego. La variabilidad del tablero y las múltiples estrategias posibles aseguran una gran rejugabilidad y emoción en cada partida.

Sin embargo, la curva de aprendizaje de Maracaibo puede ser empinada para jugadores nuevos o casuales. Las reglas detalladas y la cantidad de opciones disponibles pueden resultar abrumadoras al principio, lo que puede dificultar la entrada al juego para algunos. Además, las partidas pueden ser largas y complejas, lo que puede ser desafiante para aquellos con menos tiempo disponible o paciencia.

Mi experiencia jugando Maracaibo ha sido profundamente satisfactoria. Siempre disfruto de la emoción de explorar nuevas rutas comerciales, enfrentarme a desafíos inesperados y construir mi imperio en el Caribe del siglo XVII. Aunque reconozco que puede no ser adecuado para todos los públicos debido a su complejidad y duración, recomendaría Maracaibo a cualquier persona que busque una experiencia de juego profunda y estratégica.

En una escala del 1 al 10, le daría a Maracaibo un sólido 9. Su profundidad estratégica, atención al detalle histórico y emoción asegurada lo convierten en un juego imprescindible para los amantes de la estrategia y la historia. Sin embargo, su curva de aprendizaje empinada y su duración pueden ser obstáculos para algunos jugadores.
', 9.0), 
	(4, 8, 'Monopoly es un clásico juego de mesa que ha sido un pilar en las noches de juegos familiares durante generaciones. Con su combinación de negociación, estrategia y suerte, te sumerge en el emocionante mundo de bienes raíces y finanzas.

Lo bueno de Monopoly es su capacidad para fomentar la interacción social y la competencia amistosa entre los jugadores. La mecánica de negociación y la compra de propiedades ofrecen oportunidades para la estrategia y la toma de decisiones, mientras que el factor de suerte en el lanzamiento de dados añade emoción e imprevisibilidad a cada partida.

Sin embargo, el juego no está exento de críticas. Algunos jugadores pueden encontrar que las partidas se vuelven largas y tediosas, especialmente en las etapas finales cuando la victoria parece inevitable para un jugador dominante. Además, la naturaleza competitiva del juego puede llevar a tensiones entre los jugadores, especialmente cuando las negociaciones se vuelven intensas o cuando se producen bancarrotas.

Mi experiencia jugando Monopoly ha sido variada. Siempre disfruto de la emoción de construir mi imperio inmobiliario y de competir por la dominación económica, pero también reconozco que las partidas pueden volverse largas y competitivas, especialmente cuando juego con amigos y familiares. A pesar de sus defectos, recomendaría Monopoly a cualquier persona que busque un juego clásico de mesa que ofrezca diversión y emoción para toda la familia.

En una escala del 1 al 10, le daría a Monopoly un 7. Aunque es un juego clásico que ofrece diversión y emoción, sus partidas largas y competitivas, así como su potencial para generar tensiones entre los jugadores, pueden restarle puntos en términos de disfrute para todos los participantes.
', 9.8),
	(1, 9, 'Pandemic es un juego de mesa cooperativo que te coloca en el papel de médicos y especialistas intentando salvar al mundo de una epidemia global. Con su mecánica innovadora y su tema relevante, ofrece una experiencia de juego emocionante y desafiante.

Lo bueno de Pandemic es su enfoque en la cooperación y el trabajo en equipo. Los jugadores deben unir sus habilidades y recursos para luchar contra las enfermedades y prevenir la propagación de epidemias mortales en todo el mundo. La mecánica del juego, que implica viajar por el mundo para tratar brotes y encontrar curas, ofrece una experiencia inmersiva y educativa sobre la gestión de crisis sanitarias.

Sin embargo, el juego puede resultar desafiante y frustrante para algunos jugadores, especialmente cuando las epidemias se descontrolan y la situación parece desesperada. Además, la aleatoriedad de la distribución de las cartas de epidemia puede llevar a situaciones difíciles de manejar, lo que puede generar tensiones entre los jugadores.

Mi experiencia jugando Pandemic ha sido muy positiva. Siempre disfruto de la emoción de trabajar en equipo para salvar al mundo de la devastación y de enfrentarme a los desafíos que se presentan en el camino. Aunque reconozco que puede no ser adecuado para todos los gustos debido a su nivel de dificultad y su tema sensible, recomendaría Pandemic a cualquier persona que busque una experiencia de juego cooperativo emocionante y desafiante.

En una escala del 1 al 10, le daría a Pandemic un sólido 9. Su enfoque en la cooperación y el trabajo en equipo, junto con su tema relevante y su mecánica innovadora, lo convierten en un juego imprescindible para cualquier colección de juegos de mesa. Sin embargo, su nivel de dificultad puede ser un obstáculo para algunos jugadores, lo que le impide alcanzar una puntuación perfecta.

', 9.0),
	(2, 10, 'The Thing es un juego de mesa basado en la película de culto "The Thing", donde los jugadores asumen los roles de miembros de un equipo en una estación de investigación en la Antártida, tratando de identificar y eliminar a los infiltrados entre ellos antes de que se apoderen de la base.

Lo bueno de The Thing es su capacidad para capturar la atmósfera tensa y paranoica de la película. La mecánica de juego, que involucra la negociación, la cooperación y la sospecha entre los jugadores, crea una experiencia inmersiva y emocionante que mantiene a todos en vilo hasta el final. Los momentos de revelación y traición añaden giros sorprendentes y hacen que cada partida sea única y emocionante.

Sin embargo, el juego puede resultar complejo y abrumador para jugadores nuevos o casuales, especialmente aquellos que no están familiarizados con la película en la que está basado. Las reglas detalladas y la necesidad de estar atento a las pistas sutiles pueden dificultar la participación plena de todos los jugadores, lo que puede afectar la experiencia general del juego.

Mi experiencia jugando The Thing ha sido emocionante y llena de suspense. Siempre disfruto de la emoción de descubrir quién es realmente humano y quién es una réplica alienígena, así como de las estrategias y las intrigas que se desarrollan durante el juego. Aunque reconozco que puede no ser adecuado para todos los públicos debido a su complejidad y tema oscuro, recomendaría The Thing a cualquier persona que busque una experiencia de juego intensa y llena de suspense.

En una escala del 1 al 10, le daría a The Thing un sólido 8. Su capacidad para capturar la atmósfera tensa y paranoica de la película, junto con sus giros sorprendentes y su mecánica emocionante, lo convierten en un juego imprescindible para los fanáticos del thriller y la intriga. Sin embargo, su complejidad puede ser un obstáculo para algunos jugadores, lo que le impide alcanzar una puntuación más alta.
', 8.0);

CREATE TABLE images (
	ID SERIAL PRIMARY KEY,
	IMAGE_LINK VARCHAR (128)
);

INSERT INTO images (IMAGE_LINK) VALUES
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Cards_against_humanity_fppmmv.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Catan_gu5q0e.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Dixit_llehrw.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Dobble_f2lcts.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Eldritch_Horror_zryp93.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Exploding_Kittens_ufnplw.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Maracaibo_w5dnh6.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/Monopoly_ihym96.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924620/Pandemic_wencn4.jpg'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1711924619/The_Thing_dsl2fz.jpg');

CREATE TABLE boardgame_image (
	BOARDGAME_ID INT NOT NULL,	
	IMAGE_ID INT NOT NULL,
	CONSTRAINT FK_BOARDGAME_ID FOREIGN KEY (BOARDGAME_ID)
    REFERENCES boardgames(ID),
	CONSTRAINT FK_IMAGE_ID FOREIGN KEY (IMAGE_ID)
    REFERENCES images(ID)
);	

INSERT INTO boardgame_image (BOARDGAME_ID, IMAGE_ID) VALUES 
	(1,1),
	(2,2),
	(3,3),
	(4,4),
	(5,5),
	(6,6),
	(7,7),
	(8,8),
	(9,9),
	(10,10);

	CREATE TABLE media (
	ID SERIAL PRIMARY KEY,
	IMAGE_LINK text
);
	
INSERT INTO media (IMAGE_LINK) VALUES
	('https://res.cloudinary.com/ddtneryai/video/upload/v1712182719/White_and_Purple_Professional_Technology_Startup_Business_Company_Presentation_1_lmwgs9.mp4'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182707/3_1_cfaizk.png'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182706/5_2_pt7hcz.png'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182706/4_1_zd73c3.png'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182706/6_2_qaecso.png'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182706/2_1_odvlwa.png'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182706/White_and_Purple_Professional_Technology_Startup_Business_Company_Presentation_jbd5ao.png'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182706/5_1_aut7la.png'),
	('https://res.cloudinary.com/ddtneryai/image/upload/v1712182705/ludix__mry1os.png');

CREATE TABLE comments (
	ID SERIAL PRIMARY KEY,
	COMMENT text,
	COMMENT_DATE date,
	USER_ID INT, 
	CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID)
    REFERENCES users(ID)
);

ALTER TABLE comments ADD COLUMN boardgame_id INT;
ALTER TABLE comments ADD CONSTRAINT FK_BOARDGAME_ID FOREIGN KEY (BOARDGAME_ID) REFERENCES boardgames(ID)

ALTER TABLE comments DROP CONSTRAINT FK_USER_ID;
ALTER TABLE comments ADD CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID) REFERENCES users(ID);

CREATE TABLE review_comments (
	ID SERIAL PRIMARY KEY,
	IMAGE_LINK text,
	CONSTRAINT FK_REVIEWS_ID FOREIGN KEY (ID)
    REFERENCES reviews(ID),
	CONSTRAINT FK_COMMENTS_ID FOREIGN KEY (ID)
    REFERENCES comments(ID)
);