const noticias = require("../database/database");
let id_prox = 31;
const incrementarId = () => {
  id_prox++;
};
/* Nota de Lara para proximo milestone: mejorar o cambiar la validación de datos... esta bastante choto jajaja, y creo que yo lo habia hecho xd*/
const tiposEsperados = (entrada) => {
  let retorno;
  switch (entrada) {
    case "id":
      retorno = "number";
      break;
    case "fuente":
      retorno = "string";
      break;
    case "titulo":
      retorno = "string";
      break;
    case "vinculo":
      retorno = "string";
      break;
    case "contenido":
      retorno = "string";
      break;
    case "imagen":
      retorno = "string";
      break;
    case "dia":
      retorno = "number";
      break;
    case "cantidad":
      retorno = "number";
      break;
    case "desde":
      retorno = "number";
      break;
    case "fecha":
      retorno = "string";
      break;
    default: 
      retorno = "";
      break;
  }
  return retorno;
};

const validarTipo = (entrada, tipoEsperado) => {
  return typeof entrada == tipoEsperado;
};

const validadorDeEntrada = (datos) => {
  let entradaMala = [];
  let i = 0;
  for (let key in datos) {
    if (!validarTipo(datos[key], tiposEsperados(key))) {
      entradaMala[i] = key;
      i++;
    }
  }
  return entradaMala;
}

const filtrarNoticias = ({ cantidad, desde, fecha }) => {
  let resultado = noticias;
  if (fecha) {
    resultado = noticias.filter(noticia => noticia.fecha == fecha)
  }
  if (cantidad && desde && resultado.length > 0) {
    cantidad = parseInt(cantidad);
    desde = parseInt(desde);
    if(desde >= resultado.length){
      desde = desde % resultado.length
    }
    noticiasExtendidas = resultado.slice(desde, desde+cantidad);
    while(cantidad > noticiasExtendidas.length){
      noticiasExtendidas = [...noticiasExtendidas, ...resultado]
    }
    resultado = noticiasExtendidas.slice(0, cantidad);
  }
  return resultado;
}
/* Métodos GET */

function getNoticia(req, res) {
  if (req.params.id) {
    const noticia = noticias.find((noticia) => noticia.id == req.params.id);
    return noticia
      ? res.status(200).json({
          message: "success",
          noticia: noticia,
        })
      : res.status(404).json({
          message: "not found",
        });
  } else {
    return res.status(400).json({
      message: "bad request",
    });
  }
}

function getNoticias(req, res) {
  let entradaMala = validadorDeEntrada(req.body);
  let tiposOk = entradaMala.length == 0;
  if(tiposOk){
    const noticiasFiltradas = filtrarNoticias(req.query)
    res.status(200).json({
      message: "success",
      noticias: noticiasFiltradas,
    });
  }else{
    let tiposErroneos = "";
    entradaMala.forEach(entrada => {
        tiposErroneos+=entrada+", ";
    });
    res.status(400).json({
      message: "error, valores incorrectos para: " + tiposErroneos,
    });
  }
}

function getNoticiasDelDia(req, res) {
  const noticiasResult = noticias.filter((elem) => elem.dia == req.params.dia);
  res.status(200).json({
    message: "success",
    resultado: noticiasResult,
  });
}

function getCantidadNoticias(req, res){
  const noticiasFiltradas = filtrarNoticias(req.query)
  res.status(200).json({
    message: "success",
    cantidad: noticiasFiltradas.length
  })
}

/* Métodos POST */

function addNoticia(req, res) {
  const { sourceName: fuente, title: titulo, sourceUrl: vinculo, content: contenido, imageUrl: imagen, dia, date: fecha } = req.body;
  const noticiaNueva = {
    id: id_prox,
    fuente,
    titulo,
    vinculo,
    contenido,
    imagen,
    dia: 0,
    fecha, 
  };
  let entradaMala = validadorDeEntrada(noticiaNueva);
  let tiposOk = entradaMala.length == 0;
  if (tiposOk) {
    incrementarId();
    noticias.push(noticiaNueva);
    res.status(200).json({
      message: "success",
      noticiaNueva,
    });
  } else {
    let tiposErroneos = "";
    entradaMala.forEach(entrada => {
        tiposErroneos+=entrada+", ";
    });
    res.status(400).json({
      message: "error, valores incorrectos para: " + tiposErroneos,
    });
  }
}

/* Métodos DELETE */

function deleteNoticia(req, res) {
  if (req.params.id) {
    const noticia = noticias.find((noticia) => noticia.id == req.params.id);
    if (noticia) {
      const indiceAEliminar = noticias.indexOf(noticia);
      noticias.splice(indiceAEliminar, 1);
      res.status(200).json({
        message: "success",
        eliminado: noticia,
      });
    } else {
      res.status(404).json({
        message: "not found",
      });
    }
  } else {
    return res.status(400).json({
      message: "bad request",
    });
  }
}

/* Métodos PUT */


function updateNoticia(req, res) {
  let entradaMala = validadorDeEntrada(req.body);
  let tiposOk = entradaMala.length == 0;
    if (tiposOk) {
      const noticia = noticias.find((noticia) => noticia.id == req.params.id);
      if (noticia) {
        const { fuente, titulo, vinculo, contenido, imagen, dia } = req.body;
        noticia.fuente = fuente;
        noticia.titulo = titulo;
        noticia.vinculo = vinculo;
        noticia.contenido = contenido;
        noticia.imagen = imagen;
        noticia.dia = dia;
        res.status(200).json({
          message: "success",
          noticia: noticia,
        });
      } else {
        res.status(404).json({
          message: "not found",
        });
      }
    } else {
      let tiposErroneos = "";
    entradaMala.forEach(entrada => {
        tiposErroneos+=entrada+", ";
      });
      res.status(400).json({
        message: "error, valores incorrectos para: " + tiposErroneos,
      });
    }
}

module.exports = {
  addNoticia,
  getNoticia,
  getNoticias,
  updateNoticia,
  deleteNoticia,
  getNoticiasDelDia,
  getCantidadNoticias
};
