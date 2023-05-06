import {useState} from 'react';
import "./App.css"
import Header from './componetes/Header/Header.jsx';
import Home from './pages/Home/Home';
import Footer from './componetes/Footer/Footer';
import NuevoVideo from './pages/NuevoVideo/NuevoVideo';

function App() {

  const [formaciones,actualizarFormaciones] = useState([{
    titulo: "Front end",
    subTitulo: "Formación Front End de Alura Latam",
    color: "#6BD1FF",
    codigo: "1"
  },
  {
    titulo: "Back end",
    subTitulo: "Formación Back End de Alura Latam",
    color: "#00C86F",
    codigo: "2"
  },
  {
    titulo: "Innovación y Gestión",
    subTitulo: "Formación Innovación y Gestión de Alura Latam",
    color: "#FE8C2A",
    codigo: "3" 
  }
  ]);

  const [videos,actualizarVideos] = useState([{
    titulo: "Cuando usar let, var y const",
    urlVideo: "https://www.youtube.com/watch?v=PztCEdIJITY&ab_channel=AluraLatam",
    urlImagen: "img/video1.png",
    categoria: "Front end",
    descripcion: "Descripcion video 1",
    codigo: "1"
  },
  {
    titulo: "¿Que es javascript?",
    urlVideo: "https://www.youtube.com/watch?v=GJfOSoaXk4s&ab_channel=AluraLatam",
    urlImagen: "img/video2.png",
    categoria: "Front end",
    descripcion: "Descripcion video 2",
    codigo: "2"
  },
  {
    titulo: "Equipo front end",
    urlVideo: "https://www.youtube.com/watch?v=rpvrLaBQwgg&ab_channel=AluraLatam",
    urlImagen: "img/video3.png",
      categoria: "Front end",
    descripcion: "Descripcion video 3",
    codigo: "3"
  },
  {
    titulo: "Cuando usar let, var y const",
    urlVideo: "https://www.youtube.com/watch?v=PztCEdIJITY&ab_channel=AluraLatam",
    urlImagen: "img/video1.png",
    categoria: "Front end",
    descripcion: "Descripcion video 1",
    codigo: "1"
  },
  {
    titulo: "Spring framework ¿Que es?",
    urlVideo: "https://www.youtube.com/watch?v=t-iqt1b2qqk&ab_channel=AluraLatam",
    urlImagen: "img/video4.png",
    categoria: "Back end",
    descripcion: "Descripcion video 4",
    codigo: "4"
  },
  {
    titulo: "¿Qué es SQL y NoSQL?",
    urlVideo: "https://www.youtube.com/watch?v=cLLKVd5CNLc&ab_channel=AluraLatam",
    urlImagen: "img/video5.png",
    categoria: "Back end",
    descripcion: "Descripcion video 5",
    codigo: "5"
  },
  {
    titulo: "Simplificando tu código en Java: Conoce los enum #AluraMás",
    urlVideo: "https://www.youtube.com/watch?v=EoPvlE85XAQ&ab_channel=AluraLatam",
    urlImagen: "img/video6.png",
    categoria: "Back end",
    descripcion: "Descripcion video 6",
    codigo: "6"
  },
  {
    titulo: "Spring framework ¿Que es?",
    urlVideo: "https://www.youtube.com/watch?v=t-iqt1b2qqk&ab_channel=AluraLatam",
    urlImagen: "img/video4.png",
    categoria: "Back end",
    descripcion: "Descripcion video 4",
    codigo: "4"
  },
  {
    titulo: "¿Qué son las Soft Skills?",
    urlVideo: "https://www.youtube.com/watch?v=vhwspfvI52k&ab_channel=AluraLatam",
    urlImagen: "img/video7.png",
    categoria: "Innovación y Gestión",
    descripcion: "Descripcion video 7",
    codigo: "7"
  },
  {
    titulo: "7 Soft Skills más deseadas por las empresas #AluraMás",
    urlVideo: "https://www.youtube.com/watch?v=YhR7Zp8NUzE&t=1s&ab_channel=AluraLatam",
    urlImagen: "img/video8.png",
    categoria: "Innovación y Gestión",
    descripcion: "Descripcion video 8",
    codigo: "8"
  },
  {
    titulo: "¿Qué son las metodologias ágiles?",
    urlVideo: "https://www.youtube.com/watch?v=6N3OkLCfK-0&ab_channel=AluraLatam",
    urlImagen: "img/video9.png",
    categoria: "Innovación y Gestión",
    descripcion: "Descripcion video 8",
    codigo: "9"
  },
  {
    titulo: "¿Qué son las Soft Skills?",
    urlVideo: "https://www.youtube.com/watch?v=vhwspfvI52k&ab_channel=AluraLatam",
    urlImagen: "img/video7.png",
    categoria: "Innovación y Gestión",
    descripcion: "Descripcion video 7",
    codigo: "7"
  }
  ]);


  return (
    <>
       <Header></Header>  
       {/*<Home
          videos={videos}
          formaciones={formaciones}
       />*/}
       <NuevoVideo></NuevoVideo>
       <Footer></Footer>
    </>
  )
}

export default App;
