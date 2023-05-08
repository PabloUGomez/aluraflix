import React from 'react';
import { useState } from 'react';
import "./NuevoVideo.css"
import {Input,Box,Select,Option,Textarea,Button,FormHelperText,FormControl} from '@mui/joy/';
import { Link } from 'react-router-dom';
import { validarTitulo,validarVacio,validarDescripcion,validarCodigo } from '../../validaciones';

const NuevoVideo = (props) => {

  const {formaciones,crearVideo} = props

  const [titulo,setTitulo] = useState({
    value: "",
    valid: true
  });
  const [urlVideo,setUrlVideo] = useState({
    value: "",
    valid: true
  });
  const [urlImagen,setUrlImagen] = useState({
    value: "",
    valid: true
  });
  const [categoria,setCategoria] = useState({
    value: "",
    valid: true
  });
  const [descripcion,setDescripcion] = useState({
    value: "",
    valid: true
  });
  const [codigo,setCodigo] = useState({
    value: "",
    valid: true
  });

  const manejarNuevoVideo = (e) => {
    e.preventDefault();
    if (titulo.valid === true &&
      urlVideo.valid === true &&
      urlImagen.valid === true &&
      categoria.valid === true &&
      descripcion.valid === true &&
      codigo.valid === true) {
      console.log(titulo);
      console.log(urlVideo);
      console.log(urlImagen);
      console.log(categoria);
      console.log(descripcion);
      console.log(codigo);
      crearVideo({
          titulo: titulo.value,
          urlVideo: urlVideo.value,
          urlImagen: urlImagen.value,
          categoria: categoria.value,
          descripcion: descripcion.value,
          codigo: codigo.value
          })
    }}
  const vaciarCampos = () => {
    setTitulo({value: "", valid: true})
    setUrlVideo({value: "", valid: true})
    setUrlImagen({value: "", valid: true})
    setCategoria({value: "", valid: true})
    setDescripcion({value: "", valid: true})
    setCodigo({value: "", valid: true})
  }

  return (
    <>
    <Box
      component="form"
      sx={{
        py: 3,
        display: 'grid',
        gap: "3.5vw",
        alignItems: 'center',
        flexWrap: 'wrap',
        pl: "5vw",
        pr: "5vw",
        pb: "2vw"
      }}
      onSubmit={(e)=>{
        e.preventDefault();
      }
      }
    >
      <h1 className='titulo'>Nuevo video</h1>
      <FormControl>
        <Input 
          placeholder="Titulo" 
          variant="outlined"
          required
          sx={{
            "--Input-radius": "4px",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            height: "3.2vw",
          }}
          error={titulo.valid === false}
          onBlur={(input) =>{setTitulo({ value: input.target.value,valid: validarTitulo(input.target.value)})}}
          value={titulo.value}
          onChange={(input) => {
            setTitulo ({value : input.target.value, valid: ""})}
          }
        />
        <FormHelperText 
          sx={{
            color:"red",
            fontWeight: "100",
            fontSize: "1vw",
          }}
        >{titulo.valid === false && "Este campo es obligatorio, debe tener minimo 8 caracteres y maximo 25"}</FormHelperText>
      </FormControl>
      <FormControl>
        <Input 
          placeholder="Link del video" 
          variant="outlined"
          required
          sx={{
            "--Input-radius": "4px",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            height: "3.2vw",
          }}
          error={urlVideo.valid === false}
          onBlur={(input) =>{setUrlVideo({value: input.target.value,valid: validarVacio(input.target.value)})}}
          value={urlVideo.value}
          onChange={(input) => setUrlVideo ({value : input.target.value})
          }
        />
        <FormHelperText 
          sx={{
            color:"red",
            fontWeight: "100",
            fontSize: "1vw",
          }}
        >{urlVideo.valid === false && "Este campo es obligatorio"}</FormHelperText>
      </FormControl>
      <FormControl>
        <Input 
          placeholder="Link imagen del video" 
          variant="outlined"
          required
          sx={{
            "--Input-radius": "4px",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            height: "3.2vw",

          }} 
          error={urlImagen.valid === false}
          onBlur={(input) =>{setUrlImagen({value: input.target.value,valid: validarVacio(input.target.value)})}}
          value={urlImagen.value}
          onChange={(input) => {
            setUrlImagen ({value : input.target.value})
          }
          }
        />
        <FormHelperText 
          sx={{
            color:"red",
            fontWeight: "100",
            fontSize: "1vw",
          }}
        >{urlImagen.valid === false && "Este campo es obligatorio"}</FormHelperText>
      </FormControl>
      <FormControl>
        <Select
          disabled={false}
          placeholder="Escoja una categoría"
          variant="outlined"
          sx={{
            "--Select-radius": "4px",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            height: "3.2vw",
          }}
          value={categoria.value}
          onChange={(e, newValue) => setCategoria ({value : newValue, valid: validarVacio(newValue)})}
          error={categoria.valid === false}
        >
          {formaciones.map((formacion) => <Option
            value={formacion.titulo} 
            key={formacion.titulo} >
            {formacion.titulo}
          </Option> ) }  
        </Select>
      <FormHelperText 
          sx={{
            color:"red",
            fontWeight: "100",
            fontSize: "1vw",
          }}
        >{categoria.valid === false && "Este campo es obligatorio"}</FormHelperText>
      </FormControl>
      <FormControl>
        <Textarea
          minRows={4}
          placeholder="Descripción"
          variant='outline'
          required
          sx={{
            "--Textarea-radius": "4px",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            height: "10vw",
          }} 
          error={descripcion.valid === false}
          onBlur={(input) =>{setDescripcion({value: input.target.value,valid: validarDescripcion(input.target.value)})}}
          value={descripcion.value}
          onChange={(input) => {
            setDescripcion ({value : input.target.value})
          }}
        />
        <FormHelperText 
          sx={{
            color:"red",
            fontWeight: "100",
            fontSize: "1vw",
          }}
        >{descripcion.valid === false && "Este campo es obligatorio, debe tener minimo 20 caracteres y maximo 100"}</FormHelperText>
      </FormControl>
      <FormControl>
        <Input 
          placeholder="Código de seguridad" 
          variant="outline"
          sx={{
            "--Input-radius": "4px",
            height: "3.2vw",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
          }}
          error={codigo.valid === false}
          onBlur={(input) =>{setCodigo({value: input.target.value,valid: validarCodigo(input.target.value)})}}
          value={codigo.value}
          onChange={(input) => {
            setCodigo ({value : input.target.value})
          }}
          /> 
        <FormHelperText 
          sx={{
            color:"red",
            fontWeight: "100",
            fontSize: "1vw",
          }}
        >{codigo.valid === false && "Este campo es obligatorio, debe tener minimo 8 caracteres, maximo 20, incluir una mayuscula una miniscula y un numero."}</FormHelperText>
      </FormControl>
      <div className='botones'>
        <span>
          <Button
              color="primary"
              onClick={(e) => manejarNuevoVideo(e)}
              variant="solid"
              type='submit'
              sx={{
                width: "9vw",
                fontSize: "1.3vw",
                fontWeight: "400",
                "--Button-radius": "4px",
              }}
          >Guardar</Button>
          <Button
            color="neutral"
            onClick={()=>vaciarCampos()}
            variant="solid"
            sx={{
              width: "9vw",
              fontSize: "1.3vw",
              fontWeight: "400",
              "--Button-radius": "4px",
            }}
          >Limpiar</Button>
        </span>
        <Link to="/NuevaCategoria">
          <Button
            color="primary"
            onClick={function(){}}
            variant="solid"
            sx={{
              width: "15vw",
              fontSize: "1.3vw",
              fontWeight: "400",
              "--Button-radius": "4px",
            }}
            >Nueva Categoría</Button>
        </Link>
      </div>
    </Box>
    </>
  );
}

export default NuevoVideo;