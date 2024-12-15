import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink
} from 'reactstrap';
import TablaPosiciones from './Tabla.jsx';
import rivalImage from './assets/rival.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from './Card';
import './Estilos.css'
import Carrusel from './Carrusel';
import Descripcion from './Descripcion.jsx';
import Calendario from './Calendario.jsx';
import TablaCalendario from "./TablaCalendario.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Uno(props) {
    const tablaPosiciones = [
        {
            posicion: 1,
            nombre: "Bolívar",
            puntos: 61,
            partidosJugados: 28,
            golesFavor: 69,
            golesContra: 22,
            diferenciaGoles: 47,
        },
        {
            posicion: 2,
            nombre: "The Strongest",
            puntos: 54,
            partidosJugados: 27,
            golesFavor: 47,
            golesContra: 28,
            diferenciaGoles: 19,
        },
        {
            posicion: 3,
            nombre: "GV San José",
            puntos: 45,
            partidosJugados: 28,
            golesFavor: 55,
            golesContra: 37,
            diferenciaGoles: 18,
        },
        {
            posicion: 4,
            nombre: "Nacional Potosí",
            puntos: 45,
            partidosJugados: 28,
            golesFavor: 50,
            golesContra: 44,
            diferenciaGoles: 6,
        },
        {
            posicion: 5,
            nombre: "Aurora",
            puntos: 44,
            partidosJugados: 28,
            golesFavor: 45,
            golesContra: 37,
            diferenciaGoles: 8,
        },
        {
            posicion: 6,
            nombre: "Always Ready",
            puntos: 43,
            partidosJugados: 28,
            golesFavor: 39,
            golesContra: 31,
            diferenciaGoles: 8,
        },
        {
            posicion: 7,
            nombre: "Blooming",
            puntos: 42,
            partidosJugados: 28,
            golesFavor: 32,
            golesContra: 36,
            diferenciaGoles: -4,
        },
        {
            posicion: 8,
            nombre: "Jorge Wilstermann",
            puntos: 40,
            partidosJugados: 28,
            golesFavor: 31,
            golesContra: 27,
            diferenciaGoles: 4,
        },
        {
            posicion: 9,
            nombre: "Real Tomayapo",
            puntos: 37,
            partidosJugados: 28,
            golesFavor: 32,
            golesContra: 37,
            diferenciaGoles: -5,
        },
        {
            posicion: 10,
            nombre: "Independiente Petrolero",
            puntos: 36,
            partidosJugados: 28,
            golesFavor: 43,
            golesContra: 48,
            diferenciaGoles: -5,
        },
        {
            posicion: 11,
            nombre: "Oriente Petrolero",
            puntos: 35,
            partidosJugados: 27,
            golesFavor: 38,
            golesContra: 44,
            diferenciaGoles: -6,
        },
        {
            posicion: 12,
            nombre: "San Antonio",
            puntos: 31,
            partidosJugados: 28,
            golesFavor: 38,
            golesContra: 47,
            diferenciaGoles: -9,
        },
        {
            posicion: 13,
            nombre: "Universitario de Vinto",
            puntos: 30,
            partidosJugados: 28,
            golesFavor: 33,
            golesContra: 45,
            diferenciaGoles: -12,
        },
        {
            posicion: 14,
            nombre: "Guabirá",
            puntos: 29,
            partidosJugados: 28,
            golesFavor: 34,
            golesContra: 50,
            diferenciaGoles: -16,
        },
        {
            posicion: 15,
            nombre: "Royal Pari",
            puntos: 25,
            partidosJugados: 28,
            golesFavor: 27,
            golesContra: 45,
            diferenciaGoles: -18,
        },
        {
            posicion: 16,
            nombre: "Real Santa Cruz",
            puntos: 19,
            partidosJugados: 28,
            golesFavor: 26,
            golesContra: 61,
            diferenciaGoles: -35,
        },
    ];

    const image3 = [
        {

            src: 'https://eldeber.com.bo/_next/image?url=https%3A%2F%2Fstatic.eldeber.com.bo%2FFiles%2FSizes%2F2024%2F12%2F14%2Fguerrero-le-dio-la-victoria-al-tigre.-foto-apg_1512067250_760x520.jpeg&w=1920&q=75',
            altText: '',
            caption: '',
        },
        {
            src: 'https://imgmedia.larepublica.pe/640x371/larepublica/original/2024/12/10/6758e8ac2c75b93226396954.webp',
            altText: '',
            caption: '',
        },
        {

            src: 'https://origin.cronosmedia.glr.pe/large/2024/12/10/lg_6758c60d3e2d180f666ba8ec.jpg',
            altText: '',
            caption: '',
        },
    ];
    return (
        <div className="hijo1">
            <div className="overlay">
                <h1>¡Vive la Pasión Aurinegra!</h1>
                <p>El Decano del Fútbol Boliviano</p>
                <button>Comprar Entradas</button>
                <button>Hazte Socio</button>
            </div>
            <section className="proximo-partido">
                <h2>Próximo Partido</h2>
                <div className="partido-detalle">
                    <img src="https://tmssl.akamaized.net//images/wappen/head/5570.png?lm=1422293371" alt="The Strongest" />
                    <span>VS</span>
                    <img src={rivalImage} alt="Rival" />
                    <p>📅 16 de diciembre | 🏟️ Hernando Siles</p>
                    <button>Comprar Entradas</button>
                </div>
            </section>

            <section className="noticias">
                <h2>Noticias Destacadas</h2>
                <div className="carrusel-noticias">
                    <Carrusel items={image3} autoPlay={true} />
                </div>
            </section>

            <section className="tabla-posiciones">
                <h2>Tabla de Posiciones</h2>
                {/* Tabla dinámica */}
                <TablaPosiciones datos={tablaPosiciones} />
            </section>
            {/*<h2>La Ch'ayñita inspiró los colores de The Strongest en 1908.</h2>
            <div className=''>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Atratamachodeperfil.jpg/220px-Atratamachodeperfil.jpg" alt="" />
                <h2>Bandera del Club The Strongest.</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Bandera_Tigre.png" alt="" />
                <h2>Estadio Rafael Mendoza Castellón</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Estadio_Rafael_Mendoza_Castellon_%28noche%29.jpg" alt="" />

            </div>
                */}
        </div>

    );

}

function Dos(props) {
    return (
        <div className="hijo2">
            <h2>Esto es la Historia del CLUB THE STRONGEST</h2>
            <Descripcion nom="" desc="El Club The Strongest es una institución deportiva con sede en la ciudad de La Paz, Bolivia, cuya actividad principal es el fútbol profesional. Fue fundado el 8 de abril de 1908 por doce jóvenes estudiantes, liderados por José Villamil. Actualmente participa en la Primera División de Bolivia."></Descripcion>
            <Descripcion nom="" desc="Su estadio es el Rafael Mendoza Castellón, con capacidad para 14 000 espectadores, pero el club disputa sus encuentros como local en el estadio Hernando Siles, que cuenta con un aforo para 41 143 espectadores.</p>
            <p>Fue uno de los fundadores de la Asociación de Fútbol de La Paz, el ente deportivo más antiguo de Bolivia, así como partícipe de la creación de la Federación Boliviana de Fútbol. Es, junto a Oriente Petrolero y Universitario de Vinto, uno de los tres equipos que nunca ha descendido de categoría, tanto en primera división, como en su asociación local."></Descripcion>
            <Descripcion nom="" desc="A nivel nacional es uno de los equipos más laureados del fútbol boliviano con 16 títulos de primera división y 18 subcampeonatos desde el inicio del profesionalismo en 1950, de los cuales tiene un tricampeonato y un bicampeonato. Ocupando de esta manera el 2.º. lugar en la tabla histórica del fútbol profesional boliviano.

                En la Copa Libertadores de América sus mejores actuaciones se dieron en las ediciones de 1990, 1994, 2014, 2017 y 2024 cuando alcanzó los octavos de final.

                A nivel internacional cuenta con 39 participaciones internacionales en torneos oficiales organizados por la Confederación Sudamericana de Fútbol. Y debutó en Copa Libertadores en 1965, desde entonces, ha participado del torneo en treinta ocasiones. Además, cuenta con cinco participaciones en Copa Sudamericana, dos en Copa Conmebol y dos en Copa Merconorte.

                Su clásico rival es el Bolívar, también de la ciudad de La Paz, con el cual protagoniza el clásico boliviano."></Descripcion>
            <Descripcion nom="FUNDACION" desc="El 8 de abril de 1908, un grupo de 12 jóvenes paceños fundó el Strong Foot Ball Club (Club de Fútbol Fuerte en castellano), que en la actualidad es el club más antiguo del departamento de La Paz y el único club de la actual Primera División de Bolivia que supera los 100 años de existencia.

             Los nombres de los fundadores fueron: José León López Villamil, el mayor de todos y primer presidente, Alberto Requena, Víctor Franco, Francisco Guachalla, Juan González, Alberto Tavel, Felipe González, Armando Elio, Luis Rivera, Isaac González, Luis Felipe Dick y Hugo Alipaz.
             
                El día de la fundación y firma del acta modificaron el nombre original añadiéndole el artículo inglés ´The´ y el sufijo superlativo ´est´ con lo que el nombre definitivo quedó como The Strongest Foot Ball Club que en castellano quiere decir El Más Fuerte.

                En poco tiempo, el nuevo club adquirió relevancia en la ciudad y, en pocos años, se convirtió en el club más popular de Bolivia, creando varias fraternidades con su nombre en las principales ciudades."></Descripcion>
            <Descripcion nom="Era amateur" desc="
                A lo largo de su historia, The Strongest ha participado en todas las competiciones que se han organizado tanto en La Paz como a nivel nacional, manteniéndose siempre en la primera categoría de todas ellas.

                En 1911 ganó el primer torneo de fútbol de la historia de Bolivia, la Copa Prefectural, y en 1914 fundó con otros clubes de La Paz la primera Asociación de fútbol de Bolivia llamada La Paz Football Association, de la cual fue su primer y máximo campeón, participando en sus torneos entre 1914 y 1976.

                A nivel nacional, The Strongest también fue pionero al participar primero en los Torneos Interdepartamentales frente a los clubes campeones de las ciudades más importantes de Bolivia. Su primer encuentro tuvo lugar en 1913.

                Para 1922, The Strongest ya había ampliado sus actividades a diversas ramas deportivas, por lo que la directiva decidió quitarle las siglas FBC (Foot Ball Club) y dejarlo simplemente como The Strongest, nombre que en 1931 se le volvió a añadir el denominativo de Club, con el que es se le conoce actualmente.

                Disputó su primer partido internacional contra la selección de Arequipa en esa localidad en diciembre de 1924, y obtuvo su primera victoria internacional al derrotar a Coquimbo Unido de Chile el 5 de junio de 1927. Posteriormente, en 1945, participó en el primer Torneo de Clubes Campeones de Bolivia donde se enfrentaron cinco clubes de cinco ciudades en Oruro. Igualmente, este grupo de clubes haría historia al jugar el primer Campeonato Nocturno de Bolivia, en la primera cancha iluminada del país, también en la ciudad de Oruro, en 1946.

                De 1911 a 1949, The Strongest se consagró tres veces campeón de la Copa, veinte veces campeón de la Liga de La Paz, y ganó al menos cuatro Torneos Interdepartamentales, siendo en este periodo el club más laureado del fútbol nacional."></Descripcion>
            <Descripcion nom="Era Profesional" desc="En 1950 encabeza junto con otros equipos de La Paz la profesionalización del fútbol boliviano cuando la La Paz Football Association organiza los primeros campeonatos de esta categoría y The Strongest su primer título profesional en 1952.12​ Al año siguiente, una terrible tragedia acabó con la vida de varios de sus integrantes en un accidente automovilístico en Cochabamba y el resto de la década tuvieron que dedicarse a reconstruir su primer equipo, sin dejar de protagonizar los torneos,[cita requerida] pues en 1954 fueron subcampeones de la LPFA12​. Además, en 1958 fue campeón de la Copa República, el primer Torneo de Clubes Campeones organizado por la Federación Boliviana de Fútbol.

                En 1964, la FBF por fin dio el paso de organizar un torneo regular con los campeones de cada departamento de Bolivia y organizó la Copa Simón Bolívar, cuyo primer campeón fue The Strongest, y también lo fue de forma invicta.

                Mientras tanto, a nivel local, se consagró bicampeón de La Paz en los torneos de 1963 y 1964, además de obtener también tres subcampeonatos, en 1961, 1962 y 1965."></Descripcion>
            <Descripcion nom="Tragedia aérea" desc="Artículo principal: Tragedia de Viloco
                Sin embargo, la tragedia volvería a cernirse sobre el club en 1969, cuando todo su primer equipo de fútbol perdió la vida en un accidente aéreo conocido como la Tragedia de Viloco14​ que lo llevó al borde la desaparición. El esfuerzo de personajes de la historia del club, entre los que estuvieron expresidentes, exjugadores y una gran cantidad de hinchas, ayudados por la solidaridad de clubes nacionales y extranjeros,[cita requerida] evitó que la institución desapareciera y logró volver a situarla en el primer plano del deporte nacional y sudamericano."></Descripcion>

            <Descripcion nom="Renacimiento" desc=""></Descripcion>
            <Descripcion nom="" desc="Así, en el periodo comprendido entre 1970 y 1976, obtuvo dos nuevos títulos de la Liga de La Paz (1970 y 1974), un campeonato nacional (1974) y un subcampeonato nacional (1970).

                A nivel internacional, The Strongest logró su primera participación en un torneo internacional oficial en 1965 donde también logró su primera victoria internacional oficial en su primer partido jugado en Quito, Ecuador. Desde entonces ha participado en 30 ediciones de la Copa Libertadores, protagonizando sus mejores actuaciones en 1990, 1994, 2014, 2017 y 2024 cuando intervino en los octavos de final.​En 1977, The Strongest y otros 15 clubes formaron la Liga del Fútbol Profesional Boliviano, que es en la actualidad el torneo de clubes más importante de Bolivia, dejando en segundo plano la Copa Simón Bolívar de la FBF. The Strongest fue el primer campeón de la Liga, consagrándose así en 1978 por el torneo correspondiente a 1977.​ A partir de entonces, obtuvo 12 títulos de Liga más, siendo el último en 2023. Participó, además, en este periodo en los extintos torneos internacionales denominados Copa Conmebol y Copa Merconorte, y en la actual Copa Sudamericana, siendo sus mejores participaciones en esta última en 2003 y 2005, cuando alcanzó la tercera fase en ambas, correspondiendo cuartos de final en la versión de 2003 y octavos de final en la de 2005."></Descripcion>
        </div>

    );
}
function Tres(props) {

    const imageItems = [
        {

            src: 'https://pbs.twimg.com/media/F60rMqKXgAAsuVq.jpg',
            altText: '',
            caption: '',
        },
        {
            src: 'https://pbs.twimg.com/media/F6QetTRXEAAWM7u?format=jpg&name=large',
            altText: '',
            caption: '',
        },
        {

            src: 'https://www.la-razon.com/wp-content/uploads/2024/07/25/17/fd58894d-b445-4756-bac3-0e40d4f09514.jpg',
            altText: '',
            caption: '',
        },
    ];
    const image = [
        {

            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nXddBpRQP8paGfn18jKOZS7DNnUCHjT4vg&s',
            altText: '',
            caption: '',
        },
        {

            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqZjdefg4VV80-WR1dltgF7GJFbKB1nQszQ&s',
            altText: '',
            caption: '',
        },
        {

            src: 'https://lavozdetarija.com/wp-content/uploads/2023/12/The-Strongest.jpg',
            altText: '',
            caption: '',
        },
        {

            src: 'https://www.elfutbolero.com.bo/image/elfutbolerocombo/el-aurinegro-ha-incorporado-11-jugadores-y-a-su-director-tecnico-para-afrontar-la-temporada-2024-1705090162-hq.webp',
            altText: '',
            caption: '',
        },
        {

            src: 'https://www.urgente.bo/sites/default/files/416130633_838477461621414_2123267489273620185_n.jpg',
            altText: '',
            caption: '',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3hYPJHBjuoubmPfl7PRPJkWk1q3RyUmUL3qc1wj5sDzTYL_R_fPehPI08IuGQ9c60LU&usqp=CAU',
            altText: '',
            caption: '',
        },
    ];
    const image1 = [
        {

            src: 'https://www.historia.com.bo/imagen/escala/2017/9/a1311/the-strongest-1923-mx.png',
            altText: 'Fundación del Club The Strongest',
            caption: '',
        },
        {
            src: 'https://historiadelfutbolboliviano.com/wp-content/uploads/2020/08/unnamedwww-1.jpg',
            altText: 'Estadio Rafael Mendoza Castellón',
            caption: '',
        },
        {

            src: 'https://historiadelfutbolboliviano.com/wp-content/uploads/2011/02/dep080408ag.jpg',
            altText: '',
            caption: '',
        },
        {

            src: 'https://historiadelfutbolboliviano.com/wp-content/uploads/2023/12/img_7118-1.jpg?w=1024',
            altText: '',
            caption: '',
        },

    ];
    const image2 = [
        {

            src: 'https://historiadelfutbolboliviano.com/wp-content/uploads/2011/02/tigre-campeon.jpg?w=584&h=327',
            altText: 'Campeonato 2011',
            caption: '',
        },
        {
            src: 'https://historiadelfutbolboliviano.com/wp-content/uploads/2011/02/the-strongest-2012-01.jpg',
            altText: 'Tricampeonato',
            caption: '',
        },
        {

            src: 'https://historiadelfutbolboliviano.com/wp-content/uploads/2011/02/eduarto-villegas-dt-the-strongest.jpg',
            altText: 'Campeon 2013',
            caption: '',
        },
        {

            src: 'https://historiadelfutbolboliviano.com/wp-content/uploads/2016/12/ganathe.jpg?w=674&h=449',
            altText: 'Camepon 2016',
            caption: '',
        },

    ];
    return (
        < div className="hijo3" >
            <div className="carrusel">
                <h2>Equipo Femenil</h2>
                <Carrusel items={imageItems} autoPlay={true} />
            </div>
            <div className="carrusel">
                <h2>Equipo Masculino</h2>
                <Carrusel items={image} autoPlay={true} />
            </div>
            <div className="carrusel">
                <h2>MOMENTOS HISTORICOS</h2>
                <Carrusel items={image1} autoPlay={true} />
            </div>
            <div className="carrusel">
                <h2>Campeones</h2>
                <Carrusel items={image2} autoPlay={true} />
            </div>


        </div>
    );

}
function Cuatro(props) {
    return (
        <div className="hijo4">
            <h2> PORTEROS </h2>
            <div className='portero'>
                <CustomCard
                    imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3NXE1HRjcnK7gOPx6AnrpK4hS0IseiJERJ6W2dcceNbbWl4qZceQ-SotNsHQGRkuu_4&usqp=CAU"
                    title="GUILLERMO VISCARRA"
                />

                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/588226-1681905704.JPG?lm=1"
                    title="Jhohan Gutiérrez"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1"
                    title="Jesús Careaga"
                />
            </div>
            <h2> DEFENSAS </h2>
            <div className='defensa'>


                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/563095-1687959421.JPG?lm=1"
                    title="Adrián Jusino"
                />

                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/big/745887-1712764651.JPG?lm=1"
                    title="Marc Enoumba"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/345793-1714661873.jpg?lm=1"
                    title="Darío Aimar"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/79974-1712764775.JPG?lm=1"
                    title="Maximiliano Caire"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/medium/661866-1712764845.JPG?lm=1"
                    title=" Daniel Lino"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/big/481203-1687959484.JPG?lm=1"
                    title="Carlos Roca"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1"
                    title="Ronald Bustos"
                />

            </div>
            <h2>CENTROCAMPISTAS</h2>
            <div className='centrocampistas'>

                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/224437-1641547268.jpg?lm=1"
                    title="Diego Wayar"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/653673-1683659107.png?lm=1"
                    title="Abdiel Ayarza"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/823862-1687959636.JPG?lm=1"
                    title=" Alvaro Quiroga"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/285326-1694569635.jpg?lm=1"
                    title="Jaime Arrascaita"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/119988-1687959822.JPG?lm=1"
                    title="Michael Ortega"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/267721-1714662418.jpg?lm=1"
                    title="Joel Amoroso"
                />
            </div>
            <h2>DELANTEROS</h2>
            <div className='delantera'>

                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/431065-1521049537.jpg?lm=1"
                    title="Bruno Miranda"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/857352-1721098120.jpg?lm=1"
                    title="Sebastián Guerrero"
                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/header/282265-1687959879.JPG?lm=1"
                    title=" Enrique Triverio"
                />
            </div>
            <h2>ENTRENADOR</h2>
            <div className='entrenador'>
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/medium/48610-1721349887.jpg?lm=1"
                    title=" Ismael Rescalvo "

                />
                <CustomCard
                    imageSrc="https://img.a.transfermarkt.technology/portrait/small/default.jpg?lm=1"
                    title="Juan Rescalvo "
                />
            </div>

        </div>
    );

}
function Cinco(props) {
    return (
        <div className="hijo5">
            <h2>Proximos Partidos</h2>
            <Calendario />
            <div className='calendario'>
            <div className="tabla-container">
                <h2>Calendario Completo</h2>
                <TablaCalendario />
            </div>
            </div>
        </div>
    );

}
function Seis(props) {
    return (
        <div className="hijo6">
            <section className="contacto">
                <div className="contacto-container">
                    <h2>¡Contáctanos!</h2>
                    <p>Estamos aquí para ayudarte. Si tienes alguna consulta o comentario, no dudes en ponerte en contacto con nosotros.</p>


                    <form className="contacto-form">
                        <div className="input-group">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
                        </div>

                        <div className="input-group">
                            <label for="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" required placeholder="Tu correo" />
                        </div>

                        <div className="input-group">
                            <label for="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" rows="4" required placeholder="Escribe tu mensaje"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Enviar</button>
                    </form>


                    <div className="contacto-info">
                        <h3>O también puedes contactarnos a través de:</h3>
                        <ul>
                            <li><i class="fas fa-phone-alt"></i> +591 123 456 789</li>
                            <li><i class="fas fa-envelope"></i> contacto@thestrongest.com.bo</li>
                            <li><i class="fas fa-map-marker-alt"></i> Calle 34 Achumani, La Paz, Bolivia</li>
                        </ul>


                        <div className="social-media">

                            <h3>Síguenos en redes sociales</h3>
                            <a href="https://www.facebook.com/thestrongest" target="_blank" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/thestrongest" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/thestrongest" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}
function principal(props) {
    return (
        <div className="padre">
            <div className='info'>
                <img src="https://tmssl.akamaized.net//images/wappen/head/5570.png?lm=1422293371" alt="" />
                <h1>THE STRONGEST</h1>
            </div>

            <nav >
                <ul className="menu">
                    <li><Link to="/"><i className="fas fa-home"></i> INICIO</Link></li>
                    <li><Link to="/dos"><i className="fas fa-history"></i> HISTORIA</Link></li>
                    <li><Link to="/tres"><i className="fas fa-video"></i> MULTIMEDIA</Link></li>
                    <li><Link to="/cuatro"><i className="fas fa-users"></i> EQUIPO</Link></li>
                    <li><Link to="/cinco"><i className="fas fa-calendar-alt"></i> CALENDARIO</Link></li>
                    <li><Link to="/seis"><i className="fas fa-phone-alt"></i> CONTACTO</Link></li>
                </ul>

            </nav>
            <Routes>
                <Route path="/" element={<Uno></Uno>}></Route>
                <Route path="/dos" element={<Dos></Dos>}></Route>
                <Route path="/tres" element={<Tres></Tres>}></Route>
                <Route path="/cuatro" element={<Cuatro></Cuatro>}></Route>
                <Route path="/cinco" element={<Cinco></Cinco>}></Route>
                <Route path="/seis" element={<Seis></Seis>}></Route>

            </Routes>
        </div>
    );
}
export default principal;