const obtenerNoticiasDelDia = async (elem, dia) => {
  let noticiasObtenidas = await fetch(
    "http://localhost:5000/api/noticias/dia/" + dia
  );
  let resultados = await noticiasObtenidas.json();
  resultados = await resultados.resultado;

  eliminarHijosDe(document.getElementById("main-noticias-container"));

  resultados.forEach((noticia) => {
    crearNoticia(noticia);
  });
  toggleSeleccionado(elem);
};

const eliminarHijosDe = (nodo) => {
  //Elimina los nodos hijo de un nodo determinado.
  const parent = nodo;
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
};

const toggleSeleccionado = (elem) => {
  //Toggle de la clase 'seleccionado' sobre una lista de items de clase 'menu-items', solo queda con clase 'seleccionado' el
  //elemento pasado por parametro
  const menuItems = document.getElementsByClassName("menu-item");
  for (menu of menuItems) {
    //console.log(menu.classList);
    menu.classList.remove("seleccionado");
  }
  elem.closest(".menu-item").classList.add("seleccionado");
};

const crearNoticia = ({ fuente, titulo, vinculo, contenido, imagen }) => {
  //Crea los elementos del DOM necesarios para mostrar una noticia completa, recibe por parametro un objeto "tipo noticia"
  const newNoticia = document.createElement("div");
  newNoticia.className = "noticia";
  const noticiaHead = document.createElement("div");
  noticiaHead.className = "noticia-head";
  const noticiaHeadCategoria = document.createElement("p");
  noticiaHeadCategoria.className = "noticia-categoria";
  noticiaHeadCategoria.appendChild(document.createTextNode(fuente));
  const noticiaHeadH1 = document.createElement("h1");
  noticiaHeadH1.appendChild(document.createTextNode(titulo));
  /*const noticiaHeadH2 = document.createElement("h2");
        noticiaHeadH2.appendChild(document.createTextNode(subtitulo));*/
  noticiaHead.appendChild(noticiaHeadCategoria);
  noticiaHead.appendChild(noticiaHeadH1);
  //noticiaHead.appendChild(noticiaHeadH2);
  newNoticia.appendChild(noticiaHead);

  const noticiaContent = document.createElement("div");
  noticiaContent.className = "noticia-content";
  const noticiaContentImg = document.createElement("img");
  noticiaContentImg.setAttribute("src", imagen);
  const noticiaContentP = document.createElement("p");
  noticiaContentP.appendChild(document.createTextNode(contenido));
  const noticiaContentVinculo = document.createElement("a");
  noticiaContentVinculo.setAttribute("href", vinculo);
  noticiaContentVinculo.setAttribute("target", "_blank");
  noticiaContentVinculo.appendChild(
    document.createTextNode("Click para ver noticia completa")
  );
  noticiaContent.appendChild(noticiaContentImg);
  noticiaContent.appendChild(noticiaContentP);
  noticiaContent.appendChild(noticiaContentVinculo);
  newNoticia.appendChild(noticiaContent);

  document.getElementById("main-noticias-container").appendChild(newNoticia);
};

const crearHome = (elem) => {
  eliminarHijosDe(document.getElementById("main-noticias-container"));
  toggleSeleccionado(elem);
  const HOME_IMG = "http://localhost:5000/images/home/guy-laptop.png";
  //Crea los elementos del DOM necesarios para mostrar una noticia completa, recibe por parametro un objeto "tipo noticia"
  const newNoticia = document.createElement("div");
  newNoticia.className = "noticia";
  const noticiaHead = document.createElement("div");
  noticiaHead.className = "noticia-head";
  const noticiaHeadH1 = document.createElement("h1");
  noticiaHeadH1.appendChild(document.createTextNode("Inicio"));
  noticiaHead.appendChild(noticiaHeadH1);
  newNoticia.appendChild(noticiaHead);

  const noticiaContent = document.createElement("div");
  noticiaContent.className = "noticia-content";
  const noticiaContentH2 = document.createElement("h2");
  noticiaContentH2.appendChild(
    document.createTextNode("¡Bienvenido a Kiosco A-Diario!")
  );
  const noticiaContentImg = document.createElement("img");
  noticiaContentImg.setAttribute("src", HOME_IMG);
  noticiaContentImg.style.width = "150px";
  const noticiaContentP = document.createElement("p");
  noticiaContentP.appendChild(
    document.createTextNode(
      "En este sitio podra leer las noticias mas recientes de distintas fuentes. Asi mismo podra ver un top de los articulos mas leidos."
    )
  );
  noticiaContent.appendChild(noticiaContentH2);
  noticiaContent.appendChild(noticiaContentP);
  noticiaContent.appendChild(noticiaContentImg);

  newNoticia.appendChild(noticiaContent);

  document.getElementById("main-noticias-container").appendChild(newNoticia);
};
