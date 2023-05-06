import * as React from 'react';
import "./NuevoVideo.css"
import {Input,Box,Select,Option,Textarea,Button} from '@mui/joy/';

const NuevoVideo = () => {
  return (
    <>
    <Box
      component="form"
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
    >
      <h1 className='titulo'>Nuevo video</h1>
      <Input 
        placeholder="Titulo" 
        variant="outlined"
        sx={{
          "--Input-radius": "4px",
          backgroundColor: "#53585D",
          border: "none",
          color: "#E5E5E5",
          height: "3.2vw",
        }}
      />
      <Input 
        placeholder="Link del video" 
        variant="outlined"
        sx={{
          "--Input-radius": "4px",
          backgroundColor: "#53585D",
          border: "none",
          color: "#E5E5E5",
          height: "3.2vw",
        }}
      />
      <Input 
      placeholder="Link imagen del video" 
        variant="outlined"
        sx={{
          "--Input-radius": "4px",
          backgroundColor: "#53585D",
          border: "none",
          color: "#E5E5E5",
          height: "3.2vw",

        }} 
      />
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
      >
        <Option value="Front end">Front end</Option>
      </Select>
      <Textarea
        minRows={4}
        placeholder="Descripción"
        variant='outline'
        error 
        sx={{
          "--Textarea-radius": "4px",
          backgroundColor: "#53585D",
          border: "none",
          color: "#E5E5E5",
          height: "10vw",
        }} 
      />
      <Input 
        placeholder="Código de seguridad" 
        variant="solid"
        sx={{
          "--Input-radius": "4px",
          height: "3.2vw",
        }}
        /> 
      <div className='botones'>
        <span>
          <Button
              color="primary"
              onClick={function(){}}
              variant="solid"
              sx={{
                width: "9vw",
                fontSize: "1.3vw",
                fontWeight: "400",
              }}
          >Guardar</Button>
          <Button
            color="neutral"
            onClick={function(){}}
            variant="solid"
            sx={{
              width: "9vw",
              fontSize: "1.3vw",
              fontWeight: "400",
            }}
          >Limpiar</Button>
        </span>
        <Button
          color="primary"
          onClick={function(){}}
          variant="solid"
          sx={{
            width: "15vw",
            fontSize: "1.3vw",
            fontWeight: "400",
          }}
          >Nueva Categoría</Button>
      </div>
    </Box>
    </>
  );
}

export default NuevoVideo;