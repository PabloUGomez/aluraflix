import * as React from 'react';
import { useState } from 'react';
import "./NuevaCategoria.css"
import {Input,Box,Textarea,Button,FormHelperText,FormControl,Table,FormLabel} from '@mui/joy/';
import { validarTitulo,validarDescripcion,validarCodigo } from '../../validaciones';

const NuevaCategoria = (props) => {

  const {formaciones,crearCategoria,eliminarCategoria} = props

  const [idAntiguo,setIdAntiguo] = useState()

  const [titulo,setTitulo] = useState({
  value: "",
  valid: true
  });
  const [descripcion,setDescripcion] = useState({
  value: "",
  valid: true
  });
  const [color,setColor] = useState({
  value: "#000000",
  valid: false
  });
  const [codigo,setCodigo] = useState({
  value: "",
  valid: true
  });
    const manejarNuevaCategoria = (e) => {
    e.preventDefault();
    if (titulo.valid === true &&
      descripcion.valid === true &&
      color.valid === true &&
      codigo.valid === true) {
      crearCategoria({
        titulo: titulo.value,
        descripcion: descripcion.value,
        color: color.value,
        codigo: codigo.value
      })
      eliminarCategoria(idAntiguo)
      vaciarCampos();
    }}

  const vaciarCampos = () => {
    setIdAntiguo(undefined)
    setTitulo({value: "", valid: true})
    setColor({value: "#000000", valid: true})
    setDescripcion({value: "", valid: true})
    setCodigo({value: "", valid: true})
  }

  const editarCategoria = (formacion) => {
    setIdAntiguo(formacion.id)
    setTitulo({value: formacion.titulo, valid: true})
    setColor({value: formacion.color, valid: true})
    setDescripcion({value: formacion.descripcion, valid: true})
    setCodigo({value: formacion.codigo, valid: true})
  }


  return (
    <>
    <Box
      component="form"
      className='box'
      sx={{
        py: 3,
        display: 'grid',
        gap: "4vw",
        alignItems: 'center',
        flexWrap: 'wrap',
        pl: "5vw",
        pr: "5vw",
        pb: "2vw"
      }}
      onSubmit={(e)=>{
        e.preventDefault();
      }}
    >
      <h1 className='titulo'>Nueva categoría</h1>
      <FormControl>
        <Input 
        placeholder="Nombre" 
        variant="outlined"
        sx={{
          "--Input-radius": "4px",
          "--Input-minHeight": "1.5rem",
          "--Input-paddingInline": "1vw",
          backgroundColor: "#53585D",
          border: "none",
          color: "#E5E5E5",
          fontSize: "90%",
          height:"3.2vw"
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
            fontSize: "90%",
          }}
        >{titulo.valid === false && "Este campo es obligatorio, debe tener minimo 8 caracteres y maximo 25"}</FormHelperText>
      </FormControl>
      <FormControl>
        <Textarea
          minRows={4}
          placeholder="Descripción"
          variant='outline'
          required
          sx={{
            "--Textarea-radius": "4px",
            "--Textarea-minHeight": "2vw",
            "--Textarea-paddingInline": "1vw",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            fontSize: "90%",
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
            fontSize: "90%",
          }}
        >{descripcion.valid === false && "Este campo es obligatorio, debe tener minimo 20 caracteres y maximo 100"}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel
        sx={{
            color: "#e5e5e5",
            fontWeight: "100",
            fontSize: "90%",
          }}
        >
          Color
        </FormLabel>
        <Input 
          variant="outlined"
          type='color'
          sx={{
            "--Input-radius": "4px",
            "--Input-minHeight": "1.5rem",
            "--Input-paddingInline": "1vw",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            fontSize: "90%",
            height:"3.2vw"
          }}
          value={color.value}
          onBlur={(input) => setColor({value : input.target.value,valid:true})}
          onChange={(input) => {
            setColor ({value : input.target.value, valid:true})
          }}
        />
      </FormControl>
      <FormControl>
        <Input 
          placeholder="Código de seguridad" 
          variant="outline"
          type='password'
          sx={{
            "--Input-radius": "4px",
            "--Input-minHeight": "1.5rem",
            "--Input-paddingInline": "1vw",
            backgroundColor: "#53585D",
            border: "none",
            color: "#E5E5E5",
            fontSize: "90%",
            height:"3.2vw"
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
            fontSize: "90%",
          }}
        >{codigo.valid === false && "Este campo es obligatorio, debe tener minimo 8 caracteres, maximo 20, incluir una mayuscula una miniscula y un numero."}</FormHelperText>
      </FormControl>
        <span>
          <Button
              color="primary"
              onClick={(e) => manejarNuevaCategoria(e)}
              variant="solid"
              sx={{
                width: "9vw",
                mr: "4vw",
                fontWeight: "400",
                fontSize: "1.3vw",
                "--Button-radius": "4px",
                "--Button-minHeight": "2vw",
                "--Button-paddingInline": "1vw",     
              }}
          >Guardar</Button>
          <Button
            color="neutral"
            onClick={(e) => vaciarCampos(e)}
            variant="solid"
            sx={{
              width: "9vw",
              fontSize: "1.3vw",
              fontWeight: "400",
              "--Button-radius": "4px",
              "--Button-minHeight": "2vw",
              "--Button-paddingInline": "1vw",  
            }}
          >Limpiar</Button>
        </span>
        <Table
        variant="outline"
        borderAxis='both'
        hoverRow
        stickyHeader
        sx={{
            background: '#ffff',
            fontSize: "1.4vw",
            "--TableCell-paddingX": "0.5vw",
            "--TableCell-paddingY": "0.3vw",
            "--TableCell-height": "1vw",
            }}
        >
        <thead>
            <tr>
            <th style={{ width: '20%' }}>Nombre</th>
            <th style={{ width: '60%' }}>Descripcion</th>
            <th>Editar</th>
            <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            {formaciones.map((formacion) => (
            <tr key={formacion.id}>
                <td>{formacion.titulo}</td>
                <td>{formacion.descripcion}</td>
                <td>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button size="sm" variant="soft" color="neutral" onClick={()=>editarCategoria(formacion)}
                        sx={{
                          width: "100%",
                          fontSize: "1.1vw",
                          fontWeight: "400",
                          "--Button-radius": "1px",
                          "--Button-minHeight": "2vw",
                          "--Button-paddingInline": "1vw",  
                        }}>
                        Editar
                        </Button>
                    </Box>
                </td>
                <td>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button size="sm" variant="soft" color="danger" onClick={()=>eliminarCategoria(formacion.id)}
                        sx={{
                          width: "100%",
                          fontSize: "1.1vw",
                          fontWeight: "400",
                          "--Button-radius": "1px",
                          "--Button-minHeight": "2vw",
                          "--Button-paddingInline": "1vw",  
                        }}>
                        Borrar
                        </Button>
                    </Box>
                </td>
            </tr>
            ))}
        </tbody>
    </Table>
    </Box>
    </>
  );
}

export default NuevaCategoria;