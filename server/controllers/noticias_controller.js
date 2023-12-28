const noticias = require("../database/database");
let id_prox = 31;
const incrementarId = () => {
  id_prox++;
};

const tiposEsperados = (entrada) => {
  let retorno;
  switch (entrada) {
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
  }
  return retorno;
};

const validarTipo = (entrada, tipoEsperado) => {
  return typeof entrada == tipoEsperado;
};

const validadorDeEntrada = (req) => {
  let entradaMala = [];
  let i = 0;
  for (let key in req.body) {
    if (!validarTipo(req.body[key], tiposEsperados(key))) {
      entradaMala[i] = key;
      i++;
    }
  }
  return entradaMala;
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
  let entradaMala = validadorDeEntrada(req);
  let tiposOk = entradaMala.length == 0;
  if(tiposOk){
    let resultado = noticias;
    let { cantidad, desde } = req.query;
    if (cantidad && desde) {
      cantidad = parseInt(cantidad);
      desde = parseInt(desde);
      resultado = noticias.slice(desde, desde + cantidad);
    }
    res.status(200).json({
      message: "success",
      noticias: resultado,
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
  console.log("entro")
  res.status(200).json({
    message: "success",
    cantidad: noticias.length
  })
}

/* Métodos POST */

function addNoticia(req, res) {
  let entradaMala = validadorDeEntrada(req);
  let tiposOk = entradaMala.length == 0;
  if (tiposOk) {
    const { fuente, titulo, vinculo, contenido, imagen, dia } = req.body;
    const noticiaNueva = {
      id: id_prox,
      fuente,
      titulo,
      vinculo,
      contenido,
      imagen,
      dia,
    };
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
  let entradaMala = validadorDeEntrada(req);
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
