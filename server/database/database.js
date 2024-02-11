const BASE_URL = 'http://192.168.0.15:5000/images/'; /* Se cambio por una Ip estatica */
const database = [
    {
        id: 1,
        fuente: 'La Mañana Neuquén',
        titulo: 'Coronavirus: el lunes abrió con 275 nuevos casos y Neuquén superó los 19 mil contagios',
        contenido: 'El ministerio de Salud informó que 248 infectados en la capital provincial y 10 en Centenario. \n\nEste lunes, el director del Hospital Regional Castro Rendón, Adrián Lammel, informó que se están esperando los resultados de un paciente que ya tuvo que coronavirus y presentó síntomas nuevamente. \n\nEste sería el primera reinfectado de la provincia.',
        imagen: `${BASE_URL}19-10-2020/01.jpg`,
        vinculo: 'https://www.lmneuquen.com/coronavirus-el-lunes-abrio-275-nuevos-casos-y-neuquen-supero-los-19-mil-contagios-n740592',
        fecha: '25-12-2023'
    },
    {
        id: 2,
        fuente: 'Clarín',
        titulo: 'El Gobierno bonaerense no exigirá testeos de coronavirus para la temporada de verano: cuáles serán los requisitos',
        contenido: 'También anunció que la temporada se extenderá desde el 1 de diciembre al 4 de abril. No habrá actividades artísticas y culturales en espacios cerrados.\n\nEn este contexto de pandemia, los funcionarios establecieron que se habilitarán hoteles y gastronomía, aunque con limitaciones de ocupación y no tendrán actividades en espacios comunes. \n\nEn cambio, no se permitirá el alojamiento en campings. Tampoco serán habilitados los teatros y los boliches.',
        imagen: `${BASE_URL}19-10-2020/02.jpg`,
        vinculo: 'https://www.clarin.com/politica/gobierno-bonaerense-exigira-testeos-coronavirus-temporada-verano-requisitos_0_k2IMvq4HX.html',
        fecha: '25-12-2023'
    },
    {
        id: 3,
        fuente: 'La Nación',
        titulo: 'Detuvieron a cuatro mapuches por ocupar un campo y tener sitiada a una familia en Bariloche',
        contenido: 'La Justicia de Río Negro ordenó el desalojo, que comenzó el jueves pasado.\n\nEntre los cuatro detenidos está Rosa Blanca Gallardo, la líder del lof y sobre quien pesaba un pedido de captura, según fuentes policiales.\n\nSegún la resolución, el desalojo comenzó primero con un pedido a los usurpadores para que decidan retirarse de manera voluntaria, sin utilizar la fuerza. Pero la decisión de los usurpadores es resistir.',
        imagen: `${BASE_URL}19-10-2020/03.jpg`,
        vinculo: 'https://www.lanacion.com.ar/politica/buscan-desalojar-mapuches-tienen-cercada-familia-bariloche-nid2484096',
        fecha: '25-12-2023'
    },
    {
        id: 4,
        fuente: 'La Mañana Neuquén',
        titulo: 'La golpeó y la arrastró por el asfalto para robarle la bici en el centro',
        contenido: 'Sucedió en Área Centro Sur a plena luz del día. La víctima terminó con importantes golpes y raspones. Afortunadamente, la ayudaron los vecinos.\n\nLos robos de bicicletas están a la orden del día y la pandemia no ha hecho más que agudizar la problemática.\n\nFue asaltada en inmediaciones de Mitre y Tierra del Fuego.',
        imagen: `${BASE_URL}20-10-2020/01.jpg`,
        vinculo: 'https://www.lmneuquen.com/la-golpeo-y-la-arrastro-el-asfalto-robarle-la-bici-el-centro-n740847',
        fecha: '26-12-2023'
    },
    {
        id: 5,
        fuente: 'Clarín',
        titulo: 'Con demoras, el Gobierno lanza el plan para comprar motos en 48 cuotas fijas',
        contenido: 'El Nación financiará 34 modelos de hasta $200.000 a tasas subsidiadas. Guía de marcas, precios y cómo se solicita.\n\nEl programa de estímulo a las ventas de motos fue anunciado por el presidente, Alberto Fernández, el 8 de setiembre.\n\nLas ventas se canalizarán a través de concesionarios adheridos al programa. Hasta el momento ya se registraron 140, sobre un total de 1.200 puntos de venta.',
        imagen: `${BASE_URL}20-10-2020/02.jpg`,
        vinculo: 'https://www.clarin.com/economia/demoras-gobierno-lanza-plan-comprar-motos-48-cuotas-fijas_0_9vGzJpMa_.html',
        fecha: '26-12-2023'
    },
    {
        id: 6,
        fuente: 'La Nación',
        titulo: 'Alfonso Prat Gay: "Mientras no haya confianza, todas las medidas van a ser insuficientes"',
        contenido: 'Alfonso Prat Gay, expresidente del Banco Central, se refirió hoy a la situación económica del país y aseguró: "Mientras no haya confianza, todas las medidas van a ser insuficientes".\n\nEl ex funcionario aseguró que "el Gobierno está muy perdido y hay poca coordinación" y opinó que "en medio de una crisis de confianza hay que hacer medias más fuertes".\n\nEn cuanto a la gestión de la pandemia de Covid-19 dijo que "fue muy mala y fue el único campo donde el gobierno se enfocó".',
        imagen: `${BASE_URL}20-10-2020/03.jpg`,
        vinculo: 'https://www.lanacion.com.ar/politica/alfonso-prat-gay-mientras-no-haya-confianza-nid2484825',
        fecha: '26-12-2023'
    },
    {
        id: 7,
        fuente: 'La Mañana Neuquén',
        titulo: 'Comercios en Neuquén: qué pasará a partir del lunes',
        contenido: 'La idea es que los bares y restaurantes puedan funcionar hasta la medianoche. Se unificarán criterios, bajo un concepto de metrópoli, con Centenario, Plottier y la vecina Cipolletti.\n\nTambién se analizará la apertura de otras actividades como la de los gimnasios y natatorios.\n\nRespecto a la circulación, la secretaria de Capacitación y Empleo de la Municipalidad, María Pasqualini, dijo que eso lo debe determinar la provincia con la policía. “Pero ante la reapertura de bares y demás comercios es algo que seguramente se tendrá que redefinir”, apuntó.',
        imagen: `${BASE_URL}21-10-2020/01.jpg`,
        vinculo: 'https://www.lmneuquen.com/comercios-neuquen-que-pasara-partir-del-lunes-n741169',
        fecha: '27-12-2023'
    },
    {
        id: 8,
        fuente: 'Clarín',
        titulo: 'Coronavirus: tragamonedas y casinos están al final del plan de reaperturas y hay temor de los empleados',
        contenido: 'Entre el Hipódromo y el casino de Puerto Madero hay unos 5.000 empleos directos. Por ahora no hubo despidos, pero saben que serán unos de los últimos en retomar la actividad presencial.\n\nHay cinco provincias en donde se retomó la actividad en salas de juego: Misiones, San Juan, Tucumán, Chubut y Santa Cruz.\n\nDesde el Gobierno de la Ciudad explicaron que se está trabajando en un protocolo. Sin embargo, fueron muy taxativos con la información. "No existe una fecha de regreso a la actividad y no queremos generar falsas expectativas a las familias", dijeron.',
        imagen: `${BASE_URL}21-10-2020/02.jpg`,
        vinculo: 'https://www.clarin.com/ciudades/coronavirus-tragamonedas-casinos-final-plan-reaperturas-temor-empleados_0_1FhZf6_o2.html',
        fecha: '27-12-2023'
    },
    {
        id: 9,
        fuente: 'La Nación',
        titulo: 'Amazon: Jeff Bezos y las tres preguntas que se hace antes de contratar a nuevos empleados',
        contenido: 'Hay tres preguntas que son clave en un proceso de selección de acuerdo a Jeff Bezos, el fundador y director ejecutivo de Amazon, la persona más rica del mundo, según el ranking Real Time Billionaires de la revista Forbes. \n\n1- ¿Admirarás a esta persona?\n\n2- ¿Esta persona subirá el promedio de efectividad del grupo al cual se suma?',
        imagen: `${BASE_URL}21-10-2020/03.jpg`,
        vinculo: 'https://www.lanacion.com.ar/sociedad/jeff-bezos-tres-preguntas-se-formula-antes-nid2485458',
        fecha: '27-12-2023'
    },
    {
        id: 10,
        fuente: 'La Mañana Neuquén',
        titulo: 'La trágica historia familiar de la mujer que murió en la guardia del hospital',
        contenido: 'A fines de junio, uno de los hijos fue asesinado en el paraje Los Miches y, al poco tiempo, a ella le descubrieron cáncer. La mujer de 58 años murió el martes en el hospital.\n\nEl pasado 26 de junio, uno de los nueve hijos de Aluminé fue asesinado de una puñalada en el paraje Los Miches, ubicado a 82 kilómetros de Chos Malal.\n\nAluminé Enrique, mamá de Marcos, estuvo más de 12 horas en una camilla con mascarilla de oxígeno, a la espera de una cama que los médicos del hospital Castro Rendón pidieron y nunca llegó.',
        imagen: `${BASE_URL}22-10-2020/01.jpg`,
        vinculo: 'https://www.lmneuquen.com/la-tragica-historia-familiar-la-mujer-que-murio-la-guardia-del-hospital-n741448',
        fecha: '28-12-2023'
    },
    {
        id: 11,
        fuente: 'Clarín',
        titulo: 'Sebastián Estevanez: “Sentí una explosión y no podía apagar el fuego de mi cara”',
        contenido: 'A dos meses del accidente doméstico que casi lo mata, el actor cuenta por primera vez qué le pasó y cuánto lo afectó. “Quedé muy sensible”, confiesa.\n\nQuiso encender la chimenea utilizando un bidón con alcohol y provocó una llamarada de fuego que quemó su mano, su cuello y parte de su cara.\n\nAdemás, explica por qué decidió desestimar la sugerencia de sus médicos de internarse para curar su piel y cuánto lo impactó el episodio que se dio días atrás en un bar de San Miguel en el que murió una chica de 18 años y dejó varios heridos.',
        imagen: `${BASE_URL}22-10-2020/02.jpg`,
        vinculo: 'https://www.clarin.com/fama/sebastian-estevanez-senti-explosion-podia-apagar-fuego-cara-_0_SnxY-0lLM.html',
        fecha: '28-12-2023'
    },
    {
        id: 12,
        fuente: 'La Nación',
        titulo: 'MasterChef Celebrity: Sofía Pachano tuvo un accidente con el fuego y casi se quema la cara',
        contenido: 'Sofía Pachano: el apuro y un error de cálculo que podrían haber terminado mal.\n\nLa actriz calculó mal el manejo de una sartén, y una llamarada salió despedida hacia arriba, muy cerca de su cara.\n\nComo profesional que es Sofi siguió cocinando y en la entrevista posterior bromeó sobre el momento: "Dije: ¿Qué pasó? ¿Se incendia el estudio?".',
        imagen: `${BASE_URL}22-10-2020/03.jpg`,
        vinculo: 'https://www.lanacion.com.ar/espectaculos/television/masterchef-celebrity-sofia-pachano-tuvo-accidente-fuego-nid2485905',
        fecha: '28-12-2023'
    },
    {
        id: 13,
        fuente: 'La Mañana Neuquén',
        titulo: '¿Qué es Among Us y cómo se juega?',
        contenido: 'Te contamos todos los detalles del juego para celulares más famoso de esta cuarentena. También te enseñamos dónde descargarlo.\n\nLa app es un juego multijugador en línea con partidas armadas de 4 a 10 personas en simultáneo.\n\nLa descarga de la app Among Us es gratuita y está disponible para iPhone y Android.',
        imagen: `${BASE_URL}23-10-2020/01.jpg`,
        vinculo: 'https://www.lmneuquen.com/que-es-among-us-y-como-se-juega-n741843',
        fecha: '29-12-2023'
    },
    {
        id: 14,
        fuente: 'Clarín',
        titulo: 'La imagen de Alberto Fernández sigue en caída: cómo bajó en octubre, provincia por provincia',
        contenido: 'Son datos de una consultora que lo viene midiendo desde mayo en todo el país. Pese a la baja, continúa mejor que Macri y Cristina.\n\nUna de las tablas principales del trabajo hace eje en la figura de Fernández y su imagen positiva en cada distrito. Los ordena de mayor a menor y los compara con el mes anterior. \n\nSi mejoró, lo acompaña una flechita verde; si bajó, una roja. En octubre, hubo 17 rojas y sólo 7 verdes.',
        imagen: `${BASE_URL}23-10-2020/02.jpg`,
        vinculo: 'https://www.clarin.com/politica/imagen-alberto-fernandez-sigue-caida-octubre-provincia-provincia_0_KB5ps9b0t.html',
        fecha: '29-12-2023'
    },
    {
        id: 15,
        fuente: 'La Nación',
        titulo: 'Dólar turista hoy: a cuanto cotiza el viernes 23 de octubre',
        contenido: 'Hoy, 23 de octubre, el dólar turista cotiza en promedio a $109,00. Este valor surge de agregarle un 30% al precio de la moneda estadounidense que en el mercado oficial, que ronda los $83,85\n\nEl dólar turista es utilizado en las operaciones de compra de pasajes, productos y servicios en el exterior, siempre que se realicen en moneda extranjera (y el comprador no los abone con dólares atesorados previamente).',
        imagen: `${BASE_URL}23-10-2020/03.jpg`,
        vinculo: 'https://www.lanacion.com.ar/economia/dolar/dolar-turista-hoy-a-cuanto-cotiza-el-viernes-23-de-octubre-nid2486955',
        fecha: '29-12-2023'
    },
    {
        id: 16,
        fuente: 'La Mañana Neuquén',
        titulo: 'Matan a balazos a un adolescente en una juntada clandestina',
        contenido: 'El menor, de 15 años, fue asesinado de tres balazos por un grupo de jóvenes. Sus familiares quisieron cobrar venganza y fueron detenidos con un arma de fuego.\n\nTodo ocurrió cuando un grupo de jóvenes se encontraba en una reunión en la que se habría consumido una importante cantidad de alcohol, una actividad no permitida en el marco del aislamiento obligatorio por la pandemia del coronavirus dentro de la provincia de Mendoza.',
        imagen: `${BASE_URL}24-10-2020/01.jpg`,
        vinculo: 'https://www.lmneuquen.com/matan-balazos-un-adolescente-una-juntada-clandestina-n742012',
        fecha: '30-12-2023'
    },
    {
        id: 17,
        fuente: 'Clarín',
        titulo: 'Por la crisis y el Covid, el Gobierno analiza suspender las PASO del año próximo',
        contenido: 'La idea generará revuelo en la oposición. La Rosada argumenta que se ahorrarían recursos, aunque podría especular electoralmente.\n\nLas PASO podrían ser un gran ordenador para Juntos por el Cambio, donde suenan como posibles candidatos en la Ciudad Patricia Bullrich, así como el ministro Fernán Quirós.\n\nResta saber qué evaluación hará La Cámpora de esta iniciativa. Pues la agrupación de Máximo Kirchner aspira a disputar poder en varios distritos bonaerenses y las PASO serían en modo de concretarlo.',
        imagen: `${BASE_URL}24-10-2020/02.jpg`,
        vinculo: 'https://www.clarin.com/politica/crisis-covid--gobierno-analiza-suspender-paso-ano-proximo_0_qOsmPBR-1.html',
        fecha: '30-12-2023'
    },
    {
        id: 18,
        fuente: 'La Nación',
        titulo: 'Juan Grabois denunció "privación ilegítima de la libertad" en el campo de Luis Miguel Etchevehere',
        contenido: 'La foto que compartieron Proyecto Artigas y Juan Grabois para denunciar a Luis Miguel Etchevehere\n\nAyer, el juez subrogante de la ciudad de La Paz, Raúl Flores, afirmó que Dolores Etchevehere "probó en la audiencia que fue declarada también heredera" de los predios, remarcó que el ingreso al lugar fue "pacífico y sin violencia", y que la denuncia contraria no indicó ni probó "un hecho violento más que el número de personas" presentes.',
        imagen: `${BASE_URL}24-10-2020/03.jpg`,
        vinculo: 'https://www.lanacion.com.ar/politica/juan-grabois-denuncio-privacion-ilegitima-libertad-campo-nid2488562',
        fecha: '30-12-2023'
    },
    {
        id: 19,
        fuente: 'La Mañana Neuquén',
        titulo: 'La familia Etchevehere no se presentó a la audiencia conciliatoria',
        contenido: 'Mientras Luis Etchevehere recusó al juez Raúl Flores y la madre amenazó con entrar a la propiedad, la hermana denunció "patoterismo y apriete".\n\n "Se fueron 10 usurpadores que no regresan más. Vamos a estar en la puerta hasta que salga el ultimo. Hoy (por este domingo), no vamos a la audiencia porque recusamos al juez Flores, no puede intervenir hasta que no se resuelva el pedido", escribió Luis Etchevehere en su cuenta de Twitter.',
        imagen: `${BASE_URL}25-10-2020/01.jpg`,
        vinculo: 'https://www.lmneuquen.com/la-familia-etchevehere-no-se-presento-la-audiencia-conciliatoria-n742224',
        fecha: '31-12-2023'
    },
    {
        id: 20,
        fuente: 'Clarín',
        titulo: 'Guerra en el Cáucaso: Armenia y Azerbaiyán anunciaron un tercer “alto el fuego humanitario”',
        contenido: 'Comenzará a las 8 de la mañana local de este lunes. Ambos países dijeron que el próximo jueves continuarán en Ginebra sus negociaciones sobre la guerra. Ya hubo dos intentos, pero no fueron cumplidos.\n\n"Se salvarán vidas en ambas naciones" con este acuerdo, pronosticó O Brien en un tuit este domingo.\n\nDesde que volvió a estallar el conflicto el 27 de septiembre, han muerto al menos 37 civiles y 118 han resultado heridos, y casi mil soldados del Ejército local han muerto en combate.',
        imagen: `${BASE_URL}25-10-2020/02.jpg`,
        vinculo: 'https://www.clarin.com/mundo/guerra-caucaso-armenia-azerbaiyan-anunciaron-tercer-alto-fuego-humanitario-_0_rE09ZjI3i.html',
        fecha: '31-12-2023'
    },
    {
        id: 21,
        fuente: 'La Nación',
        titulo: 'Aníbal Fernández: "No me quieren en el Gobierno, alguien me baja el pulgar"',
        contenido: 'El exjefe de Gabinete se mostró enigmático y ofendido por el rechazo a su intención de "ayudar" al Presidente\n\nConsultado acerca de si la persona que le "baja el pulgar" es la vicepresidenta Cristina Kirchner, Fernández dijo: "No, Cristina no, Cristina nunca. Una dirigente de esa estatura te llama y te dice: "Te agradezco todo lo que hiciste, pero en este momento no corresponde, queremos hacer otra cosa", y listo".',
        imagen: `${BASE_URL}25-10-2020/03.jpg`,
        vinculo: 'https://www.lanacion.com.ar/politica/anibal-fernandez-nid2489442',
        fecha: '31-12-2023'
    }
]


/* let databaseConRepeticiones = [];


const rellenadoDatabase = () => {
 
    const cantRepeticiones = 20;
    for (let index = 0; index < cantRepeticiones; index++) {
        databaseConRepeticiones = databaseConRepeticiones.concat(JSON.parse(JSON.stringify(database)));
    }
    let generatedId = 0;
    databaseConRepeticiones.forEach(function (objeto) {
        objeto.id = generatedId;
        generatedId++;
    })

    database = databaseConRepeticiones;
}

rellenadoDatabase();
*/
module.exports = database;