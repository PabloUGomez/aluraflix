import * as React from 'react';
import "./NuevaCategoria.css"
import {Input,Box,Textarea,Button,FormControl,FormLabel,Table} from '@mui/joy/';


const NuevaCategoria = () => {
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

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
        <h1 className='titulo'>Nueva categoría</h1>
        <Input 
        placeholder="Nombre" 
        variant="outlined"
        sx={{
          "--Input-radius": "4px",
          backgroundColor: "#53585D",
          border: "none",
          color: "#E5E5E5",
          height: "3.2vw",
        }}
        />
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
        <FormControl>
        <FormLabel
        sx={{
            color: "#e5e5e5"
        }}
        >
          Color
        </FormLabel>
      <Input 
        variant="outlined"
        type='color'
        sx={{
          "--Input-radius": "4px",
          backgroundColor: "#53585D",
          border: "none",
          color: "#E5E5E5",
          height: "3.2vw",
        }}
      />
      </FormControl>
      <Input 
        placeholder="Código de seguridad" 
        variant="solid"
        sx={{
          "--Input-radius": "4px",
          height: "3.2vw",
        }}
        /> 
        <span>
          <Button
              color="primary"
              onClick={function(){}}
              variant="solid"
              sx={{
                width: "9vw",
                "--Button-radius": "4px",
                fontSize: "1.3vw",
                mr: "4vw",
                fontWeight: "400",
              }}
          >Guardar</Button>
          <Button
            color="neutral"
            onClick={function(){}}
            variant="solid"
            sx={{
              width: "9vw",
              "--Button-radius": "4px",
              fontSize: "1.3vw",
              fontWeight: "400",
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
            }}
        >
        <thead>
            <tr>
            <th >Column width (40%)</th>
            <th style={{ width: '30%' }}>Descripcion</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
            <th>Editar</th>
            <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            {rows.map((row) => (
            <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.protein}</td>
                <td>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button size="sm" variant="soft" color="neutral">
                        Editar
                        </Button>
                    </Box>
                </td>
                <td>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button size="sm" variant="soft" color="danger">
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