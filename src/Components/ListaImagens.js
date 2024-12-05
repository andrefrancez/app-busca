import React from 'react'
import Imagem from './Imagem.js'

const ListaImagens = ({ pics }) => {
    return (
        pics.map((pic, key) =>
            <Imagem
                pic={pic.src.small}
                key={key}
            />
        )
    )
}

export default ListaImagens