interface Productos {
  id: number;
  nombre: string;
  descripcion:string
  precio: number;
  talla:[string,string,string,string,string];
  colores:[string,string,string]
  categoria: string;
  imagen: string 
}
interface Categoria{
  id:number;
  nombre: string;
}
interface Usuario_Pedidos_Productos{
  id_producto:number;
  cantidad:number
}
interface Usuario_Pedidos{
  id_pedido:number;
  productos:Usuario_Pedidos_Productos[]
  total:number;
  estado:string
}
interface Usuario {
  id:number;
  nombre:string;
  email:string;
  direccion:string;
  pedidos:Usuario_Pedidos[]
}
interface DataRopa {
  productos: Productos[]
  categorias: Categoria[]
  usuarios: Usuario[]
}

const data:DataRopa = {
  productos: [
    {
      id: 1,
      nombre: "Camisa",
      descripcion: "Camisa de algodón de manga larga",
      precio: 30.0,
      talla: ["S", "M", "L", "XL","XXL"],
      colores: ["Blanco", "Azul", "Negro"],
      categoria: "Ropa",
      imagen: "ruta/imagen_camisa.jpg",
    },
    {
      id: 2,
      nombre: "Pantalón",
      descripcion: "Pantalón vaquero de corte recto",
      precio: 40.0,
      talla: ["S", "M", "L", "XL","XXL"],
      colores: ["Azul", "Negro", "Gris"],
      categoria: "Ropa",
      imagen: "ruta/imagen_pantalon.jpg",
    },
    {
      id: 3,
      nombre: "Camisa",
      descripcion: "Camisa de algodón de manga larga",
      precio: 30.0,
      talla: ["S", "M", "L", "XL","XXL"],
      colores: ["Blanco", "Azul", "Negro"],
      categoria: "Ropa",
      imagen: "ruta/imagen_camisa.jpg",
    },
  ],
  categorias: [
    {
      id: 1,
      nombre: "Ropa",
    },
    {
      id: 2,
      nombre: "Calzado",
    },
    {
      id: 3,
      nombre: "Accesorios",
    },
  ],
  usuarios: [
    {
      id: 1,
      nombre: "Usuario 1",
      email: "usuario1@example.com",
      direccion: "123 Calle Principal, Ciudad",
      pedidos: [
        {
          id_pedido: 101,
          productos: [
            {
              id_producto: 1,
              cantidad: 2,
            },
            {
              id_producto: 2,
              cantidad: 1,
            },
          ],
          total: 100.0,
          estado: "En proceso",
        },
      ],
    },
    {
      id: 2,
      nombre: "Usuario 2",
      email: "usuario2@example.com",
      direccion: "456 Calle Secundaria, Ciudad",
      pedidos: [],
    },
  ],
};
