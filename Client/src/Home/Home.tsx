const data = {
  productos: [
    {
      id: 1,
      nombre: "Camisa",
      descripcion: "Camisa de algodón de manga larga",
      precio: 30.0,
      talla: ["S", "M", "L", "XL"],
      colores: ["Blanco", "Azul", "Negro"],
      categoria: "Ropa",
      imagen: "ruta/imagen_camisa.jpg",
    },
    {
      id: 2,
      nombre: "Pantalón",
      descripcion: "Pantalón vaquero de corte recto",
      precio: 40.0,
      talla: ["S", "M", "L", "XL"],
      colores: ["Azul", "Negro", "Gris"],
      categoria: "Ropa",
      imagen: "ruta/imagen_pantalon.jpg",
    },
    {
      id: 3,
      nombre: "Camisa",
      descripcion: "Camisa de algodón de manga larga",
      precio: 30.0,
      talla: ["S", "M", "L", "XL"],
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
