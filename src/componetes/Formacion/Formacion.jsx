import React from 'react';
import "./Formacion.css"
import Box from '@mui/joy/Box';
import Video from '../Video/Video';

const Formacion = (props) => {

    const {titulo,subTitulo,color,codigo} = props.datos
    const {videos,eliminarVideo} = props
    const fondo = {
        backgroundColor: color
    }
    return (
        <>
        {videos.length > 0 &&
            <section>
                <span className='formacion'>
                <h3 style={fondo}>{titulo}</h3>
                <h4>{subTitulo}</h4>
                </span>
                <div className='lista-videos'>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent:'left',
                        gap: "1vw",
                        py: "1vw",
                        pl: "2vw",
                        pr: "2vw",
                        width: "100%",
                        overflow: "auto",
                        maxHeight: "22vw",
                        scrollSnapType: 'x manda    tory',
                        '& > *': {
                        scrollSnapAlign: 'center',
                        },
                        '::-webkit-scrollbar': { display: 'auto' },
                    }}
                    >{
                    videos.map( (video) => <Video 
                        datos={video} 
                        key={video.id}
                        eliminarVideo={eliminarVideo} 
                    />)
                    }
                </Box>
                </div>
            </section>
        }
        </>
    )
}

export default Formacion;