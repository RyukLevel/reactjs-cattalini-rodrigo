import { ImGit } from "react-icons/im"
import ps5_std from '../assets/imagenes/PS5_std.png'
import xbox_x from '../assets/imagenes/Xbox_serie_x.png'
import switch_nin from '../assets/imagenes/Nintendo_switch.png'
import ps4_pro from '../assets/imagenes/PS4_pro.png'
import xbox_one_x from '../assets/imagenes/xbox_one_x.png'
import switch_lite from '../assets/imagenes/switch_lite.png'
import ps5 from '../assets/imagenes/PS5.png'
import xbox_serie_s from '../assets/imagenes/Xbox_serie_s.png'
import atari from '../assets/imagenes/atari_vcs.png'
import sega from '../assets/imagenes/genesis_mini.png'
import snes from '../assets/imagenes/snes.png'
import ps1 from '../assets/imagenes/PS1.png'

export const productos = [
    {
        id: 1,
        nombre: "PlayStation 5",
        descripcion: "La consola de última generación de Sony con gráficos y rendimiento excepcionales.",
        precio: 599,
        stock: 10,
        imagen: ps5_std,
        categoria: "sony"
      },
      {
        id: 2,
        nombre: "Xbox Series X",
        descripcion: "La consola de última generación de Microsoft con un potente procesador y una unidad SSD rápida.",
        precio: 499,
        stock: 10,
        imagen: xbox_x,
        categoria: "microsoft"
      },
      {
        id: 3,
        nombre: "Nintendo Switch",
        descripcion: "Una consola híbrida que se puede jugar en casa o en movimiento.",
        precio: 329,
        stock: 10,
        imagen: switch_nin,
        categoria: "nintendo"
      },
      {
        id: 4,
        nombre: "PlayStation 4 Pro",
        descripcion: "Una consola potente que ofrece una experiencia de juego 4K.",
        precio: 399,
        stock: 10,
        imagen: ps4_pro,
        categoria: "sony"
      },
      {
        id: 5,
        nombre: "Xbox One X",
        descripcion: "Una consola potente que ofrece una experiencia de juego 4K.",
        precio: 299,
        stock: 10,
        imagen: xbox_one_x,
        categoria: "microsoft"
      },
      {
        id: 6,
        nombre: "Nintendo Switch Lite",
        descripcion: "Una versión portátil de la consola Nintendo Switch.",
        precio: 199,
        stock: 10,
        imagen: switch_lite,
        categoria: "nintendo"
      },
      {
        id: 7,
        nombre: "PlayStation 5 Digital Edition",
        descripcion: "Una versión de PlayStation 5 sin unidad de disco.",
        precio: 499,
        stock: 10,
        imagen: ps5,
        categoria: "sony"
      },
      {
        id: 8,
        nombre: "Xbox Series S",
        descripcion: "Una consola compacta y económica de última generación.",
        precio: 299,
        stock: 10,
        imagen: xbox_serie_s,
        categoria: "microsoft"
      },
      {
        id: 9,
        nombre: "Atari VCS",
        descripcion: "Una consola retro clásica que ha sido reintroducida con nuevos juegos.",
        precio: 199,
        stock: 10,
        imagen: atari,
        categoria: "atari"
      },
      {
        id: 10,
        nombre: "Sega Genesis Mini",
        descripcion: "Una consola retro clásica que ha sido reintroducida con juegos clásicos.",
        precio: 79,
        stock: 10,
        imagen: sega,
        categoria: "sega",
      },
      {
        id: 11,
        nombre: "Nintendo Classic Mini: SNES",
        descripcion: "Una consola retro clásica que ha sido reintroducida con juegos clásicos.",
        precio: 79,
        stock: 10,
        imagen: snes,
        categoria: "nintendo"
      },
      {
        id: 12,
        nombre: "PlayStation Classic",
        descripcion: "Una consola retro clásica que ha sido reintroducida con juegos clásicos.",
        precio: 59,
        stock: 10,
        imagen: ps1,
        categoria: "sony"
      }
]

export const getProductos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(productos)
        },1000)
    })
}

export const getProductosByCategoria = (categoriaId) => {
  return new Promise((resolve,reject) => {
      setTimeout(() => {
          resolve(productos.filter((elemento) => elemento.categoria === categoriaId))
      },1000)
  })
}

export const getProductosById = (productoId) => {    
  return new Promise((resolve,reject) => {    
      setTimeout(() => {
        console.log (productoId)
        const prod = productos.find((elemento) => elemento.id === parseInt (productoId));        
          resolve(prod)
      },1000)
  })
}
