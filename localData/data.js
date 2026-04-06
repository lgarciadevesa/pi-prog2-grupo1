const localData = {
  usuario: {
    usuario: "usuario1",
    email: "usuario1@gmail.com",
    contrasena: "12345678",
    fotoPerfil: "profile-default.png",
  },
 
  products: [
    {
      id: 1,
      nombre: "Auriculares Bluetooth Sony WH-1000XM5",
      descripcion:
        "Auriculares inalámbricos premium con cancelación de ruido líder en la industria, hasta 30 horas de batería y conectividad multipunto.",
      imagen: "auriculares_sony.jpg",
      marca: "Sony",
      precio: 89999,
      comentarios: [
        {
          usuario: "maria_gamer",
          texto:
            "Increíbles, el sonido es espectacular y la cancelación de ruido es lo mejor que probé.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "pepe_tech",
          texto: "Muy cómodos para viajes largos. Los recomiendo 100%.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "luli.dev",
          texto: "La batería dura muchísimo, ideal para trabajar desde casa.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 2,
      nombre: "Smartphone Samsung Galaxy S24 Ultra",
      descripcion:
        "Smartphone flagship con pantalla Dynamic AMOLED 2X de 6.8\", cámara de 200MP, S Pen incluido y procesador Snapdragon 8 Gen 3.",
      imagen: "samsung_s24_ultra.jpg",
      marca: "Samsung",
      precio: 449999,
      comentarios: [
        {
          usuario: "rodrigo_foto",
          texto:
            "La cámara es una locura, las fotos nocturnas son increíbles.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "techuser42",
          texto: "El S Pen hace la diferencia para tomar notas rápidas.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 3,
      nombre: "Notebook Apple MacBook Air M3",
      descripcion:
        "Laptop ultradelgada con chip M3, pantalla Liquid Retina de 13.6\", 16GB de RAM y hasta 18 horas de autonomía.",
      imagen: "macbook_air_m3.jpg",
      marca: "Apple",
      precio: 699999,
      comentarios: [
        {
          usuario: "caro_diseño",
          texto:
            "Perfecta para diseño gráfico, vuela con Figma y Photoshop abiertos.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "luli.dev",
          texto: "La batería aguanta todo el día sin problema. Una joya.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "martin_codes",
          texto: "Excelente para desarrollo, el compilador es rapidísimo.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 4,
      nombre: "Smart TV LG OLED 55\" C3",
      descripcion:
        "Televisor OLED con resolución 4K, procesador α9 Gen6, Dolby Vision IQ, Dolby Atmos y sistema operativo webOS 23.",
      imagen: "lg_oled_55.jpg",
      marca: "LG",
      precio: 529999,
      comentarios: [
        {
          usuario: "fede_cine",
          texto:
            "Los negros son perfectos, nada que ver con un LED. Vale cada peso.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "rodrigo_foto",
          texto: "La imagen es impresionante para ver fotos y contenido HDR.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 5,
      nombre: "Tablet iPad Pro 11\" M4",
      descripcion:
        "Tablet profesional con chip M4, pantalla Ultra Retina XDR OLED, compatible con Apple Pencil Pro y Magic Keyboard.",
      imagen: "ipad_pro_m4.jpg",
      marca: "Apple",
      precio: 389999,
      comentarios: [
        {
          usuario: "caro_diseño",
          texto: "Con el Apple Pencil es como dibujar en papel, increíble.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "pepe_tech",
          texto: "Uso el teclado Magic y reemplaza completamente a una laptop.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 6,
      nombre: "Consola PlayStation 5 Slim",
      descripcion:
        "Consola de videojuegos de nueva generación con SSD ultrarrápido, soporte para 4K a 120fps, ray tracing y DualSense incluido.",
      imagen: "ps5_slim.jpg",
      marca: "Sony",
      precio: 299999,
      comentarios: [
        {
          usuario: "maria_gamer",
          texto: "Los tiempos de carga son prácticamente cero, es una maravilla.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "fede_cine",
          texto:
            "El DualSense con la vibración háptica cambia completamente la experiencia.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "techuser42",
          texto: "Spider-Man 2 se ve espectacular. Muy feliz con la compra.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 7,
      nombre: "Monitor Gamer ASUS ROG Swift 27\" 240Hz",
      descripcion:
        "Monitor gaming IPS QHD con tasa de refresco de 240Hz, tiempo de respuesta de 1ms, G-Sync Compatible y soporte HDR400.",
      imagen: "monitor_asus_rog.jpg",
      marca: "ASUS",
      precio: 219999,
      comentarios: [
        {
          usuario: "martin_codes",
          texto: "Perfecto para programar, tiene mucho espacio en pantalla.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "maria_gamer",
          texto: "A 240Hz los juegos competitivos se sienten muy fluidos.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 8,
      nombre: "Mouse Logitech MX Master 3S",
      descripcion:
        "Mouse inalámbrico premium con scroll MagSpeed electromagnético, sensor de 8000 DPI, botones silenciosos y hasta 70 días de batería.",
      imagen: "mouse_mx_master3s.jpg",
      marca: "Logitech",
      precio: 49999,
      comentarios: [
        {
          usuario: "luli.dev",
          texto: "El mejor mouse que tuve, el scroll electromagnético es adictivo.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "caro_diseño",
          texto: "Muy preciso para trabajos de diseño, la forma es muy ergonómica.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "martin_codes",
          texto: "Lo uso 8 horas por día y no cansa la muñeca para nada.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 9,
      nombre: "Cámara Mirrorless Sony Alpha ZV-E10 II",
      descripcion:
        "Cámara sin espejo APS-C ideal para creadores de contenido, con video 4K 60fps, autoenfoque por IA y pantalla abatible.",
      imagen: "camara_sony_zve10.jpg",
      marca: "Sony",
      precio: 179999,
      comentarios: [
        {
          usuario: "rodrigo_foto",
          texto:
            "El autoenfoque en video es impresionante, nunca pierde la cara.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "pepe_tech",
          texto: "Excelente para empezar en fotografía profesional.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
    {
      id: 10,
      nombre: "Teclado Mecánico Keychron K8 Pro",
      descripcion:
        "Teclado mecánico inalámbrico TKL con switches Gateron Pro, retroiluminación RGB, compatible con Mac y Windows.",
      imagen: "teclado_keychron_k8.jpg",
      marca: "Keychron",
      precio: 64999,
      comentarios: [
        {
          usuario: "martin_codes",
          texto: "Escribir en este teclado es un placer, los switches son suaves.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "luli.dev",
          texto: "La conexión bluetooth es estable y cambia entre dispositivos genial.",
          imagenPerfil: "profile-default.png",
        },
        {
          usuario: "techuser42",
          texto: "El RGB se ve muy bonito y la build quality es sólida.",
          imagenPerfil: "profile-default.png",
        },
      ],
    },
  ],
};

module.exports = localData;
