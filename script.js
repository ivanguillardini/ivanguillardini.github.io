const preguntas = [
  // ===== AMBITO DOMÉSTICO =====
  {
    categoria: "Ámbito Doméstico",
    pregunta: "¿Qué tipo de bombillas utilizas en casa?",
    opciones: [
      { texto: "Incandescentes tradicionales", correcta: false },
      { texto: "Halógenas", correcta: false },
      { texto: "LED", correcta: true },
      { texto: "No estoy seguro/a", correcta: false }
    ],
    explicacion: "Las bombillas LED consumen hasta un 85% menos energía que las incandescentes."
  },
  {
    categoria: "Ámbito Doméstico",
    pregunta: "¿Cuánto tiempo tardas en ducharte?",
    opciones: [
      { texto: "Menos de 5 minutos", correcta: true },
      { texto: "5-10 minutos", correcta: false },
      { texto: "10-15 minutos", correcta: false },
      { texto: "Más de 15 minutos", correcta: false }
    ],
    explicacion: "Una ducha de 5 minutos consume ≈75 litros de agua vs. 150+ litros en 15 minutos."
  },
  {
    categoria: "Ámbito Doméstico",
    pregunta: "¿Cierras el grifo cuando te lavas los dientes?",
    opciones: [
      { texto: "Siempre", correcta: true },
      { texto: "A veces", correcta: false },
      { texto: "Raramente", correcta: false },
      { texto: "Nunca", correcta: false }
    ],
    explicacion: "Dejar el grifo abierto desperdicia ≈12 litros de agua por minuto."
  },
  {
    categoria: "Ámbito Doméstico",
    pregunta: "¿Eres propenso a dejarte luces encendidas?",
    opciones: [
      { texto: "Nunca (siempre las apago)", correcta: true },
      { texto: "Solo en algunas habitaciones", correcta: false },
      { texto: "Con frecuencia", correcta: false },
      { texto: "Sí, casi siempre", correcta: false }
    ],
    explicacion: "Apagar luces innecesarias puede reducir tu consumo eléctrico hasta un 25%."
  },
  {
    categoria: "Ámbito Doméstico",
    pregunta: "¿Utilizas luz natural cuando es posible?",
    opciones: [
      { texto: "Siempre que puedo", correcta: true },
      { texto: "A medias (a veces artificial de día)", correcta: false },
      { texto: "Prefiero la luz artificial", correcta: false },
      { texto: "No me lo había planteado", correcta: false }
    ],
    explicacion: "Aprovechar la luz solar reduce el consumo y mejora tu ritmo circadiano."
  },
  {
    categoria: "Ámbito Doméstico",
    pregunta: "¿Has considerado fuentes renovables para tu hogar?",
    opciones: [
      { texto: "Ya uso paneles solares/aerotermia", correcta: true },
      { texto: "Estoy en proceso de instalación", correcta: true },
      { texto: "Lo he pensado pero no actuado", correcta: false },
      { texto: "No me lo planteo", correcta: false }
    ],
    explicacion: "Las energías renovables reducen emisiones y dependencia de la red eléctrica."
  },
  {
    categoria: "Ámbito Doméstico",
    pregunta: "¿Usas calefacción cuando realmente no es necesario?",
    opciones: [
      { texto: "Nunca (solo cuando hace frío real)", correcta: true },
      { texto: "A veces por comodidad", correcta: false },
      { texto: "Sí, me cuesta regularlo", correcta: false },
      { texto: "Siempre a la misma temperatura", correcta: false }
    ],
    explicacion: "Reducir 1°C la calefacción ahorra un 7% de energía anual."
  },

  // ===== RECICLAJE =====
  {
    categoria: "Reciclaje",
    pregunta: "¿Separas correctamente los residuos en tu hogar?",
    opciones: [
      { texto: "Sí, siempre en los contenedores adecuados", correcta: true },
      { texto: "Solo lo básico (plástico, vidrio, papel)", correcta: false },
      { texto: "Lo intento pero con dudas", correcta: false },
      { texto: "No separo residuos", correcta: false }
    ],
    explicacion: "El reciclaje correcto evita que los materiales útiles acaben en vertederos."
  },
  {
    categoria: "Reciclaje",
    pregunta: "¿Qué haces con el aceite usado de cocina?",
    opciones: [
      { texto: "Lo llevo a un punto limpio", correcta: true },
      { texto: "Lo guardo en botellas y lo tiro a la basura", correcta: false },
      { texto: "Lo echo por el fregadero", correcta: false },
      { texto: "No uso aceite para cocinar", correcta: false }
    ],
    explicacion: "1 litro de aceite contamina 1,000 litros de agua. ¡Nunca por el desagüe!"
  },
  {
    categoria: "Reciclaje",
    pregunta: "¿Reutilizas envases antes de reciclarlos?",
    opciones: [
      { texto: "Sí, siempre busco darles un segundo uso", correcta: true },
      { texto: "Algunas veces", correcta: false },
      { texto: "No, los reciclo directamente", correcta: false },
      { texto: "No reciclo", correcta: false }
    ],
    explicacion: "Reutilizar reduce más la huella ecológica que solo reciclar."
  },
  {
    categoria: "Reciclaje",
    pregunta: "¿Dónde tiras las pilas usadas?",
    opciones: [
      { texto: "Punto limpio o contenedor específico", correcta: true },
      { texto: "Basura normal", correcta: false },
      { texto: "Contenedor de orgánico", correcta: false },
      { texto: "No sé dónde van", correcta: false }
    ],
    explicacion: "Una pila alcalina puede contaminar 167,000 litros de agua."
  },
{
  categoria: "Reciclaje",
  pregunta: "¿Compras o usas materiales 100% reutilizables (como botellas de acero, bolsas de tela)?",
  opciones: [
    { 
      texto: "Sí, siempre elijo opciones reutilizables", 
      correcta: true
    },
    { 
      texto: "A veces, cuando me acuerdo", 
      correcta: false
    },
    { 
      texto: "No, pero sé que debería", 
      correcta: false
    },
    { 
      texto: "No sabía que existían alternativas", 
      correcta: false
    }
  ],
  explicacion: "Cada producto reutilizable evita cientos de desechos. Ej: 1 bolsa de tela sustituye 600 de plástico en su vida útil."
},
{
  categoria: "Reciclaje",
  pregunta: "¿Sabes el daño que causa 1 persona que NO recicla durante 1 año?",
  opciones: [
    { 
      texto: "Genera ≈15kg de residuos no tratados", 
      correcta: false
    },
    { 
      texto: "Contamina ≈4,000 litros de agua", 
      correcta: false
    },
    { 
      texto: "Emite ≈180kg de CO2 equivalente", 
      correcta: true
    },
    { 
      texto: "Destruye 2m² de hábitat natural", 
      correcta: false
    }
  ],
  explicacion: "No reciclar 1 año equivale a las emisiones de conducir 1,000km (fuente: MIT). Reciclar ahorra energía: 20 latas recicladas = misma energía que 1 bombilla encendida 24h."
},
  {
    categoria: "Reciclaje",
    pregunta: "¿Qué haces con los medicamentos caducados?",
    opciones: [
      { texto: "Los llevo a la farmacia (punto SIGRE)", correcta: true },
      { texto: "Los tiro a la basura normal", correcta: false },
      { texto: "Los guardo por si acaso", correcta: false },
      { texto: "Los echo por el inodoro", correcta: false }
    ],
    explicacion: "Los medicamentos contaminan el agua si no se tratan adecuadamente."
  },
  
  
  {
categoria: "Consumismo textil",
pregunta: "¿Qué es el consumismo en la moda y cómo afecta nuestros hábitos de compra?",
opciones: [
{ texto: "Comprar solo lo necesario", correcta: false },
{ texto: "Adquisición compulsiva impulsada por tendencias efímeras", correcta: true },
{ texto: "Inversión en prendas de calidad", correcta: false },
{ texto: "Intercambio de ropa entre amigos", correcta: false }
],
explicacion: "El consumismo textil nos lleva a comprar 400% más ropa que hace 20 años, con un 60% de uso reducido por prenda (Greenpeace)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Qué papel juega la publicidad en fomentar el consumo excesivo de ropa?",
opciones: [
{ texto: "Ninguno, solo informa", correcta: false },
{ texto: "Crea falsas necesidades cada 2 semanas", correcta: true },
{ texto: "Promueve el uso consciente", correcta: false },
{ texto: "Solo afecta a adolescentes", correcta: false }
],
explicacion: "La publicidad nos expone a 5,000 mensajes diarios que asocian felicidad con compras (Journal of Consumer Psychology)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Cuál es la diferencia entre necesidad y deseo cuando compramos ropa?",
opciones: [
{ texto: "Necesidad: reemplazar algo roto | Deseo: seguir tendencias", correcta: true },
{ texto: "No hay diferencia", correcta: false },
{ texto: "Necesidad: tener 50 camisetas | Deseo: tener 100", correcta: false },
{ texto: "Depende del presupuesto", correcta: false }
],
explicacion: "El 88% de compras de moda son por deseos sociales (Journal of Marketing Research), no por necesidades reales."
},

{
categoria: "Consumismo textil",
pregunta: "¿Cómo influye la presión social en nuestras decisiones de compra de moda?",
opciones: [
{ texto: "Nos hace comprar para pertenecer a grupos", correcta: true },
{ texto: "No influye en absoluto", correcta: false },
{ texto: "Solo afecta a celebridades", correcta: false },
{ texto: "Reduce nuestro consumo", correcta: false }
],
explicacion: "El 62% de millennials compra ropa para fotos en redes (Forbes), mostrando el 'efecto Instagram'."
},

{
categoria: "Consumismo textil",
pregunta: "¿Qué alternativas existen a la moda rápida que sean sostenibles y éticas?",
opciones: [
{ texto: "Comprar en tiendas de segunda mano", correcta: false },
{ texto: "Alquilar ropa para ocasiones especiales", correcta: false },
{ texto: "Intercambios entre amigos", correcta: false },
{ texto: "Todas las anteriores", correcta: true }
],
explicacion: "El mercado de segunda mano crece 24 veces más rápido que el retail tradicional (ThredUp 2023)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Compramos ropa porque la necesitamos o porque queremos seguir una tendencia?",
opciones: [
{ texto: "80% por necesidad, 20% por tendencia", correcta: false },
{ texto: "50% necesidad, 50% tendencia", correcta: false },
{ texto: "30% necesidad, 70% tendencia", correcta: true },
{ texto: "10% necesidad, 90% tendencia", correcta: false }
],
explicacion: "El 73% de los consumidores admite comprar ropa que nunca usa (Journal of Consumer Behaviour)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Cuántas prendas de nuestro armario usamos realmente?",
opciones: [
{ texto: "100%", correcta: false },
{ texto: "80%", correcta: false },
{ texto: "50%", correcta: false },
{ texto: "20-30%", correcta: true }
],
explicacion: "Estudios muestran que usamos solo el 20-30% de nuestra ropa regularmente (Closet Audit Studies)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Cuál ha sido tu compra de ropa más impulsiva? ¿Valió la pena?",
opciones: [
{ texto: "Prenda de tendencia usada 1-2 veces", correcta: true },
{ texto: "Zapatos incómodos pero bonitos", correcta: false },
{ texto: "Outfit completo para una foto", correcta: false },
{ texto: "Todas son comunes", correcta: false }
],
explicacion: "El 40% de compras impulsivas de moda generan arrepentimiento (Nielsen Consumer Report)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Te has sentido presionado/a por las redes sociales para vestir de cierta forma?",
opciones: [
{ texto: "Sí, frecuentemente", correcta: false },
{ texto: "A veces, en ocasiones especiales", correcta: false },
{ texto: "No lo había pensado pero probablemente", correcta: false },
{ texto: "Todas son respuestas válidas", correcta: true }
],
explicacion: "El 54% de jóvenes sienten presión por mostrar diversidad de outfits en redes (Deloitte Gen Z Survey)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Qué criterios deberíamos considerar al comprar ropa de forma consciente?",
opciones: [
{ texto: "Calidad y durabilidad", correcta: false },
{ texto: "Materiales sostenibles", correcta: false },
{ texto: "Condiciones laborales justas", correcta: false },
{ texto: "Todas las anteriores", correcta: true }
],
explicacion: "La regla 30-30: ¿Lo usaré 30+ veces? ¿Pasó 30 días desde que lo vi? (Movimiento Slow Fashion)."
},

{
categoria: "Consumismo textil",
pregunta: "¿Cómo reducir nuestro consumo de ropa sin sacrificar estilo?",
opciones: [
{ texto: "Cápsulas de vestuario con prendas versátiles", correcta: true },
{ texto: "Comprar todas las tendencias", correcta: false },
{ texto: "Tirar ropa vieja cada temporada", correcta: false },
{ texto: "Ignorar la calidad", correcta: false }
],
explicacion: "Un armario cápsula de 37 prendas puede crear 10,000 combinaciones (Project 333)."
}
];

// Variables globales
let preguntaActual = 0;
let puntuacionTotal = 0;
let puntuacionPorCategoria = {};
const totalPreguntas = preguntas.length;

// Elementos del DOM
const preguntaElement = document.getElementById('texto-pregunta');
const opcionesContainer = document.getElementById('opciones-container');
const comprobarBtn = document.getElementById('comprobar-btn');
const feedbackElement = document.getElementById('feedback');
const categoriaElement = document.getElementById('categoria-actual');
const contadorElement = document.getElementById('contador-preguntas');
const barraProgreso = document.getElementById('barra-progreso');
const resultadosFinales = document.getElementById('resultados-finales');

// Inicializar categorías
function inicializarCategorias() {
  const categoriasUnicas = [...new Set(preguntas.map(p => p.categoria))];
  categoriasUnicas.forEach(categoria => {
    puntuacionPorCategoria[categoria] = {
      correctas: 0,
      total: preguntas.filter(p => p.categoria === categoria).length
    };
  });
}

// Cargar pregunta actual
function cargarPregunta() {
  const pregunta = preguntas[preguntaActual];
  categoriaElement.textContent = pregunta.categoria;
  preguntaElement.textContent = pregunta.pregunta;
  opcionesContainer.innerHTML = '';

  pregunta.opciones.forEach((opcion, index) => {
    const botonOpcion = document.createElement('div');
    botonOpcion.classList.add('opcion');
    botonOpcion.innerHTML = opcion.texto + (opcion.dato ? `<br><small>${opcion.dato}</small>` : '');
    botonOpcion.addEventListener('click', () => seleccionarOpcion(index));
    opcionesContainer.appendChild(botonOpcion);
  });

  comprobarBtn.disabled = true;
  feedbackElement.classList.add('hidden');
  actualizarProgreso();
}

// Seleccionar opción
function seleccionarOpcion(index) {
  const opciones = document.querySelectorAll('.opcion');
  opciones.forEach(opcion => opcion.classList.remove('seleccionada'));
  opciones[index].classList.add('seleccionada');
  comprobarBtn.disabled = false;
}

// Comprobar respuesta
comprobarBtn.addEventListener('click', () => {
  const opcionSeleccionada = document.querySelector('.opcion.seleccionada');
  if (!opcionSeleccionada) return;

  const opcionIndex = [...document.querySelectorAll('.opcion')].indexOf(opcionSeleccionada);
  const pregunta = preguntas[preguntaActual];
  const opcionCorrecta = pregunta.opciones[opcionIndex].correcta;

  if (opcionCorrecta) {
    puntuacionTotal++;
    puntuacionPorCategoria[pregunta.categoria].correctas++;
    mostrarFeedback(true, pregunta.explicacion);
  } else {
    mostrarFeedback(false, pregunta.explicacion);
  }

  comprobarBtn.disabled = true;
});

// Mostrar feedback
function mostrarFeedback(esCorrecta, explicacion) {
  feedbackElement.innerHTML = `
    <div class="feedback-${esCorrecta ? 'correcto' : 'incorrecto'}">
      <strong>${esCorrecta ? '✅ Correcto!' : '❌ Incorrecto'}</strong>
      <p>${explicacion}</p>
      <button id="siguiente-btn">Continuar</button>
    </div>
  `;
  
  feedbackElement.classList.remove('hidden');
  document.getElementById('siguiente-btn').addEventListener('click', siguientePregunta);
}

// Siguiente pregunta
function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual < totalPreguntas) {
    cargarPregunta();
  } else {
    mostrarResultados();
  }
}

// Mostrar resultados finales
function mostrarResultados() {
  document.getElementById('quiz-container').classList.add('hidden');
  resultadosFinales.classList.remove('hidden');

  const porcentajeGlobal = Math.round((puntuacionTotal / totalPreguntas) * 100);
  const nivel = calcularNivel(porcentajeGlobal);

  // Generar HTML de resultados
  let html = `
    <h2>🏆 Resultados Finales</h2>
    <div class="resultado-global">
      <p>Has acertado <strong>${puntuacionTotal} de ${totalPreguntas}</strong> preguntas</p>
      <div class="puntuacion-total">${porcentajeGlobal}%</div>
      <div class="nivel">Nivel: ${nivel}</div>
      <p class="feedback-global">${generarFeedbackGlobal(porcentajeGlobal)}</p>
    </div>

    <h3>📊 Desglose por Categorías</h3>
    <div class="categorias-resultados">
  `;

  // Añadir resultados por categoría
  for (const [categoria, datos] of Object.entries(puntuacionPorCategoria)) {
    const porcentaje = Math.round((datos.correctas / datos.total) * 100);
    html += `
      <div class="categoria">
        <div class="categoria-header">
          <h4>${categoria}</h4>
          <span>${datos.correctas}/${datos.total}</span>
        </div>
        <div class="barra-progreso">
          <div class="progreso" style="width: ${porcentaje}%"></div>
          <span class="porcentaje">${porcentaje}%</span>
        </div>
        <p class="feedback-categoria">${generarFeedbackCategoria(porcentaje)}</p>
      </div>
    `;
  }

  html += `</div>`;
  resultadosFinales.innerHTML = html;
}

// Funciones auxiliares
function actualizarProgreso() {
  const progreso = ((preguntaActual + 1) / totalPreguntas) * 100;
  barraProgreso.value = progreso;
  contadorElement.textContent = `${preguntaActual + 1}/${totalPreguntas}`;
}

function calcularNivel(porcentaje) {
  if (porcentaje >= 90) return "Experto Ambiental 🌿";
  if (porcentaje >= 75) return "Avanzado 🌱";
  if (porcentaje >= 60) return "Intermedio 🍃";
  if (porcentaje >= 45) return "Principiante 🌵";
  return "Novato 🍂";
}

function generarFeedbackGlobal(porcentaje) {
  if (porcentaje >= 90) return "¡Excelente! Eres un modelo de conciencia ambiental.";
  if (porcentaje >= 75) return "Buen trabajo, demuestras un gran conocimiento ecológico.";
  if (porcentaje >= 60) return "Vas por buen camino, pero aún puedes mejorar.";
  if (porcentaje >= 45) return "Tienes nociones básicas, sigue aprendiendo.";
  return "Considera informarte más sobre sostenibilidad.";
}

function generarFeedbackCategoria(porcentaje) {
  if (porcentaje >= 80) return "¡Dominas este tema!";
  if (porcentaje >= 60) return "Buen conocimiento, pero hay margen de mejora.";
  if (porcentaje >= 40) return "Conocimiento básico, revisa los errores.";
  return "Necesitas reforzar esta área.";
}

// Inicializar quiz
inicializarCategorias();
cargarPregunta();
