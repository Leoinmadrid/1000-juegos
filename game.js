const categories = [
	{ id: 'reflex', name: 'Reflejos', emoji: '⚡', color: '#f7d66e', accent: '#ef8b64' },
	{ id: 'puzzle', name: 'Puzles', emoji: '🧩', color: '#b6dd9b', accent: '#67ae86' },
	{ id: 'critters', name: 'Criaturitas', emoji: '🐸', color: '#b6dfd5', accent: '#76bca2' },
	{ id: 'cozy', name: 'Tranquilos', emoji: '🍵', color: '#f0cbb0', accent: '#de8e71' },
	{ id: 'space', name: 'Espacio', emoji: '🪐', color: '#c6c6e8', accent: '#8989c0' },
	{ id: 'food', name: 'Comida', emoji: '🍓', color: '#f0bbad', accent: '#e87c62' },
	{ id: 'sport', name: 'Deportes', emoji: '🏓', color: '#a9d5e4', accent: '#5ba4bd' },
	{ id: 'music', name: 'Ritmo', emoji: '🎵', color: '#e0bbe0', accent: '#bb76b8' },
	{ id: 'nature', name: 'Naturaleza', emoji: '🌼', color: '#d4e391', accent: '#91b657' },
	{ id: 'arcade', name: 'Arcade', emoji: '👾', color: '#f5c777', accent: '#e77a52' }
];

const titles = [
	'Chispa Fugaz','Giro de Cometa','Semáforo Loco','Dedos Ninja','Rayo de Miel','Pestañeo','Reacción Relámpago','Clic Cósmico','Campana Veloz','Salta la Chispa',
	'Jardín Desparejo','Gemas Saltarinas','Piezas de Menta','El Bloque Perdido','Tetris de Bolsillo','Rompecocos','Cuadros Traviesos','Puzle Melón','Laberinto Mini','Baldosas Bailonas',
	'Rana de Nube','Caracol Turbo','Zorro Dormilón','Pez Globo Club','Ovejitas en Fuga','Gato Cometa','Patito Detective','Erizo Rodante','Monstruo de Bolsillo','Salto de Sapo',
	'Tetera Zen','Lluvia de Pétalos','Nube de Algodón','Paseo de Domingo','Linterna y Luciérnagas','Huerto Pequeño','Un Té para Dos','Río Despacito','Siesta de Dragón','Jardín de Bolsillo',
	'Satélite Solitario','Asteroides de Azúcar','La Luna Salta','Órbita de Gominola','Cohete de Papel','Paseo Galáctico','Estrella Estrella','Planeta Rebotín','Meteoritos Felices','Cosmos Pequeñito',
	'Fresa Espacial','Tostada Voladora','Sopa de Estrellas','Club del Dumpling','Sandía Ninja','Panadería Lunar','Carrera de Cerezas','Tacos a la Fuga','Helado Saltarín','Galleta Dorada',
	'Ping Pong Panda','Pelota de Bolsillo','Bate y Rebote','Canasta Cometa','Tenis de Garaje','Gol de Calcetín','Patín Relámpago','Salto de Charco','Tiro de Canica','Mini Campeones',
	'Tambor de Lluvia','Ritmo de Rana','Baila la Gelatina','Campanas del Bosque','Piano de Bolsillo','La Banda del Gato','Beat de Burbuja','Maracas Cósmicas','Batería de Frutas','Ritmito Feliz',
	'Flores al Viento','Mariposa Mensajera','Abeja Apurada','Setas de Colores','Bosque Despierto','Pétalos al Vuelo','Semillas Viajeras','Colibrí Club','Caracoles y Sol','Prado Saltarín',
	'Pixel Fantasma','Láser de Garaje','Robot de Cartón','Burbujas Rebeldes','Caza Cuadraditos','Invasión de Patitos','Máquina de Chicles','Cubo Misterioso','Nave de Bolsillo','Último Botón'
];

const gameTypes = ['tap','reflex','memory','dodge','puzzle','typing','clicker','precision','quiz','rhythm'];
const recipeControls = [
	{ id: 'tap', name: 'TOCA', hint: 'toca el objetivo exacto' },
	{ id: 'drag', name: 'ARRASTRA', hint: 'arrastra el objeto a su destino' },
	{ id: 'sequence', name: 'SECUENCIA', hint: 'repite los símbolos en orden' },
	{ id: 'arrows', name: 'FLECHAS', hint: 'pulsa la dirección indicada' },
	{ id: 'hold', name: 'MANTÉN', hint: 'mantén pulsado el tiempo justo' },
	{ id: 'trace', name: 'TRAZA', hint: 'sigue el camino por sus nodos' },
	{ id: 'rotate', name: 'GIRA', hint: 'gira el dial hasta el número' },
	{ id: 'type', name: 'ESCRIBE', hint: 'escribe el código correcto' },
	{ id: 'aim', name: 'APUNTA', hint: 'mueve el cursor y apunta al blanco' },
	{ id: 'swipe', name: 'DESLIZA', hint: 'desliza en la dirección marcada' }
];
const recipeObjectives = [
	{ id: 'collect', name: 'RECOLECTA', verb: 'recolecta', nouns: ['estrellas','semillas','conchas','chispas'] },
	{ id: 'sort', name: 'CLASIFICA', verb: 'clasifica', nouns: ['las piezas','los colores','los paquetes','las criaturas'] },
	{ id: 'deliver', name: 'ENTREGA', verb: 'entrega', nouns: ['el paquete','la carta','la fruta','la herramienta'] },
	{ id: 'protect', name: 'PROTEGE', verb: 'protege', nouns: ['el jardín','la nave','el nido','el tesoro'] },
	{ id: 'pair', name: 'EMPAREJA', verb: 'empareja', nouns: ['las parejas','las huellas','los símbolos','los amigos'] },
	{ id: 'navigate', name: 'NAVEGA', verb: 'guía', nouns: ['el barco','la canica','la luciérnaga','el mensajero'] },
	{ id: 'repair', name: 'REPARA', verb: 'repara', nouns: ['el robot','el puente','la máquina','el instrumento'] },
	{ id: 'feed', name: 'ALIMENTA', verb: 'alimenta', nouns: ['al dragón','a la colonia','al jardín','a la tripulación'] },
	{ id: 'build', name: 'CONSTRUYE', verb: 'construye', nouns: ['la torre','el refugio','la melodía','el camino'] },
	{ id: 'rescue', name: 'RESCATA', verb: 'rescata', nouns: ['a los viajeros','a las abejas','al equipo','los recuerdos'] }
];
const recipeModifiers = [
	{ name: 'CALMA', rule: 'Sin reloj: juega a tu ritmo.' },
	{ name: 'CON RELOJ', rule: 'El reloj no se detiene.' },
	{ name: 'CON NIEBLA', rule: 'Mira bien: las señales se parecen.' },
	{ name: 'EN MOVIMIENTO', rule: 'Las opciones cambian de posición.' },
	{ name: 'CON TRAMPAS', rule: 'Hay opciones falsas entre las buenas.' },
	{ name: 'A OSCURAS', rule: 'Solo tienes un vistazo antes de actuar.' },
	{ name: 'DOBLE TAREA', rule: 'Cumple dos órdenes en cada ronda.' },
	{ name: 'AL REVÉS', rule: 'La pista está escrita al revés.' },
	{ name: 'A CONTRARRELOJ', rule: 'Tienes menos tiempo para la misión.' },
	{ name: 'SIN PIEDAD', rule: 'Un error termina la partida.' }
];

function recipeFor(game) {
	const modifier = game.id === 1 ? { name: '7 SEGUNDOS', rule: 'Completa cuatro órdenes antes de que acabe el reloj.' } : recipeModifiers[game.variant];
	return { control: recipeControls[game.baseIndex % 10], objective: recipeObjectives[Math.floor(game.baseIndex / 10)], modifier, index: game.baseIndex };
}

function recipeTutorial(game) {
	const recipe = recipeFor(game);
	return `${recipe.control.hint}; ${recipe.objective.verb} ${recipe.objective.nouns[game.baseIndex % 4]} (${recipeSteps(game)} pasos). ${recipe.modifier.name}.`;
}

function recipeSteps(game) {
	return [1,3,2,3,2,3,2,3,3,2][game.recipe.objective];
}
const animalGames = [
	{ name: 'Rana de Nube', creature: '🐸', action: 'feed' },
	{ name: 'Caracol Turbo', creature: '🐌', action: 'snail' },
	{ name: 'Zorro Dormilón', creature: '🦊', action: 'fox' },
	{ name: 'Pez Globo Club', creature: '🐡', action: 'fish' },
	{ name: 'Ovejitas en Fuga', creature: '🐑', action: 'sheep' },
	{ name: 'Gato Cometa', creature: '🐈', action: 'cat' },
	{ name: 'Patito Detective', creature: '🦆', action: 'ducks' },
	{ name: 'Erizo Rodante', creature: '🦔', action: 'hedgehog' },
	{ name: 'Monstruo de Bolsillo', creature: '👾', action: 'care' },
	{ name: 'Salto de Sapo', creature: '🐸', action: 'frog' }
];
const animalHints = [
	'Averigua qué alimento quiere la rana y dáselo.',
	'Guía al caracol por la ruta segura.',
	'Lee las señales del zorro antes de acercarte.',
	'Alimenta al pez globo sin darle de más.',
	'Reúne las ovejas que se han separado.',
	'Mueve la pluma para que el gato la persiga.',
	'Reúne cada patito con su familia.',
	'Guía al erizo hasta las manzanas.',
	'Cuida al monstruito según lo que necesita.',
	'Acompaña al sapo saltando de hoja en hoja.'
];

function animalInstructions(index, tier) {
	return `${animalHints[index]} Completa ${5 + tier * 2} encuentros.`;
}

function animalTutorial(index, tier) {
	return `${animalHints[index]} · ${5 + tier * 2} encuentros.`;
}
const editions = ['', 'Remix', 'Turbo', 'Nocturno', 'Modo Pro', 'Vórtice', 'Caos', 'Sin Piedad', 'Leyenda', 'Final Boss'];
const instructions = {
	tap: 'Atrapa 12 objetivos antes de que se acabe el tiempo.', reflex: 'Espera la señal verde y toca lo más rápido posible.',
	memory: 'Mira la secuencia y repítela en el mismo orden.', dodge: 'Muévete con ← → y esquiva todo lo que cae.',
	puzzle: 'Ordena las piezas del 1 al 8. Solo puedes mover junto al hueco.', typing: 'Escribe las palabras antes de que termine el reloj.',
	clicker: 'Pulsa el botón tantas veces como puedas en 15 segundos.', precision: 'Pulsa cuando el cursor esté dentro de la zona verde.',
	quiz: 'Resuelve diez cuentas lo más rápido que puedas.', rhythm: 'Pulsa ESPACIO siguiendo el pulso.'
};

function instructionsFor(game) {
	const tier = game.variant;
	switch (game.type) {
		case 'tap': return `Atrapa ${12 + tier * 2} objetivos en ${Math.max(5, 7 - Math.floor(tier / 3))} segundos.`;
		case 'reflex': return `Supera ${3 + tier * 2} rondas de reacción.`;
		case 'memory': return `Repite la secuencia hasta completar ${5 + tier} rondas.`;
		case 'dodge': return `Esquiva los bloques durante ${20 + tier * 3} segundos.`;
		case 'puzzle': return `Ordena el tablero ${tier < 5 ? '3×3' : '4×4'} deslizando las piezas.`;
		case 'typing': return `Escribe ${10 + tier * 3} palabras en ${Math.max(12, 30 - tier * 2)} segundos.`;
		case 'clicker': return `Alcanza ${25 + tier * 10} toques en ${Math.max(8, 15 - tier)} segundos.`;
		case 'precision': return `Acierta ${5 + tier} veces en una zona de ${Math.max(6, 16 - tier)}%.`;
		case 'quiz': return `Resuelve ${10 + tier * 2} cuentas, con operaciones cada vez más difíciles.`;
		case 'rhythm': return `Sigue ${100 + tier * 8} BPM durante ${Math.max(10, 20 - tier)} segundos.`;
		case 'animal': return animalInstructions(game.baseIndex - 20, tier);
		case 'recipe': { const recipe = recipeFor(game); return `${recipe.control.hint}; ${recipe.objective.verb} ${recipe.objective.nouns[game.baseIndex % 4]} en ${recipeSteps(game)} pasos. ${recipe.modifier.rule} Completa ${4 + tier * 2} rondas.`; }
		default: return instructions[game.type];
	}
}

function tutorialFor(game) {
	const tier = game.variant;
	switch (game.type) {
		case 'tap': return `Toca el objetivo: ${12 + tier * 2} aciertos en ${Math.max(5, 7 - Math.floor(tier / 3))} s.`;
		case 'reflex': return `Espera el verde y pulsa ${3 + tier * 2} veces.`;
		case 'memory': return `Memoriza las luces y repite el orden (${5 + tier} rondas).`;
		case 'dodge': return `Flechas ← →; esquiva durante ${20 + tier * 3} s.`;
		case 'puzzle': return `Desliza junto al hueco y ordena ${tier < 5 ? '3×3' : '4×4'}.`;
		case 'typing': return `Escribe la palabra y pulsa ENTER (${10 + tier * 3} palabras).`;
		case 'clicker': return `Pulsa rápido: ${25 + tier * 10} toques en ${Math.max(8, 15 - tier)} s.`;
		case 'precision': return `Detén el marcador en la zona (${5 + tier} rondas).`;
		case 'quiz': return `Responde ${10 + tier * 2} cuentas; los niveles altos mezclan operaciones.`;
		case 'rhythm': return `Pulsa ESPACIO al pulso: ${100 + tier * 8} BPM.`;
		case 'animal': return animalTutorial(game.baseIndex - 20, tier);
		case 'recipe': return recipeTutorial(game);
		default: return 'Abre el juego para ver cómo se juega.';
	}
}

const games = Array.from({ length: 1000 }, (_, index) => {
	const baseIndex = index % titles.length;
	const tier = Math.floor(index / titles.length);
	const edition = editions[tier];
	return {
	id: index + 1, title: edition ? `${titles[baseIndex]} · ${edition}` : titles[baseIndex],
	category: categories[Math.floor(baseIndex / 10)], type: baseIndex >= 20 && baseIndex < 30 ? 'animal' : 'recipe',
	recipe: { control: baseIndex % 10, objective: Math.floor(baseIndex / 10), modifier: tier },
	variant: tier, baseIndex, seed: index * 19 + 7,
	description: [
		'Un reto cortito para despejar la cabeza.', 'Parece fácil. A ver si tus dedos opinan igual.', 'Una partida rápida, otra más y ya.',
		'Pequeño, colorido y un pelín competitivo.', 'Ponte a prueba en menos de un minuto.'
	][baseIndex % 5]
	};
});

const catalog = document.querySelector('#catalog-screen');
const gameScreen = document.querySelector('#game-screen');
const grid = document.querySelector('#game-grid');
const stage = document.querySelector('#game-stage');
const search = document.querySelector('#search');
let selectedCategory = 'all';
let currentGame = null;
let session = null;
let sessionEpoch = 0;
let timerId = null;
let animationId = null;
let toastId = null;

function seeded(value) {
	const number = Math.sin(value * 127.1) * 43758.5453;
	return number - Math.floor(number);
}

const doodles = {
	reflex: ['⚡','🪄','🎯','🧨','💫','👀','🚦','🖱️','🔔','✨'],
	puzzle: ['🧩','💎','🟩','🧊','🔢','🧠','🟨','🍈','🌀','🎲'],
	critters: ['🐸','🐌','🦊','🐡','🐑','🐈','🦆','🦔','👾','🐸'],
	cozy: ['🍵','🌸','☁️','🚲','🏮','🌱','🍵','🌊','🐉','🪴'],
	space: ['🪐','☄️','🌙','🍬','🚀','🌌','⭐','🛰️','☄️','🌍'],
	food: ['🍓','🍞','🍜','🥟','🍉','🥐','🍒','🌮','🍦','🍪'],
	sport: ['🏓','🏐','🏏','🏀','🎾','⚽','🛼','🛹','🔵','🏆'],
	music: ['🥁','🐸','🪇','🔔','🎹','🐈','🫧','🎸','🍊','🎵'],
	nature: ['🌼','🦋','🐝','🍄','🌳','🌺','🌰','🐦','🐌','🌻'],
	arcade: ['👻','🔫','🤖','🫧','🟪','🦆','🍬','🧊','🚀','🔴']
};

function appIcon(game) {
	const { color, accent } = game.category;
	const emoji = doodles[game.category.id][(game.id - 1) % 10];
	const tilt = Math.round(seeded(game.seed) * 18 - 9);
	const dots = Array.from({ length: 4 }, (_, index) => {
		const x = 10 + Math.round(seeded(game.seed + index + 1) * 58);
		const y = 9 + Math.round(seeded(game.seed + index + 11) * 49);
		const size = 2 + Math.round(seeded(game.seed + index + 21) * 3);
		return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${index % 2 ? accent : '#fff6d8'}" opacity=".7"/>`;
	}).join('');
	return `<svg class="app-doodle" viewBox="0 0 80 72" aria-hidden="true"><rect width="80" height="72" fill="${color}"/>${dots}<path d="M0 56 Q19 46 35 57 T80 52V72H0Z" fill="${accent}" opacity=".8"/><circle cx="40" cy="37" r="23" fill="#fff7df" opacity=".48"/><text x="40" y="47" text-anchor="middle" font-size="31" transform="rotate(${tilt} 40 37)">${emoji}</text></svg>`;
}

function renderTabs() {
	const all = [{ id: 'all', name: 'Todo', emoji: '✳' }, ...categories];
	document.querySelector('#category-tabs').innerHTML = all.map((category) => `<button class="category-tab ${selectedCategory === category.id ? 'active' : ''}" data-category="${category.id}" type="button"><span>${category.emoji}</span>${category.name}</button>`).join('');
	document.querySelectorAll('.category-tab').forEach((button) => button.addEventListener('click', () => {
		selectedCategory = button.dataset.category;
		renderTabs();
		renderCatalog();
	}));
}

function renderCatalog() {
	const query = search.value.trim().toLocaleLowerCase('es');
	const visible = games.filter((game) => (selectedCategory === 'all' || game.category.id === selectedCategory) && `${game.title} ${game.category.name} ${tutorialFor(game)}`.toLocaleLowerCase('es').includes(query));
	document.querySelector('#visible-count').textContent = String(visible.length).padStart(2, '0');
	document.querySelector('#empty-state').classList.toggle('hidden', visible.length !== 0);
	grid.classList.toggle('hidden', visible.length === 0);
	grid.innerHTML = visible.map((game, index) => `<button class="game-card" data-game="${game.id}" type="button" style="--icon-bg:${game.category.color};--icon-accent:${game.category.accent};animation-delay:${Math.min(index % 32, 20) * 12}ms"><span class="app-icon">${appIcon(game)}</span><strong>${game.title}</strong><small class="card-tutorial">${tutorialFor(game)}</small><span class="card-meta"><small class="card-category">${game.category.name.toLocaleUpperCase('es')}</small><span class="card-play">↗</span></span></button>`).join('');
	grid.querySelectorAll('[data-game]').forEach((button) => button.addEventListener('click', () => openGame(Number(button.dataset.game))));
}

function bestKey(game) { return `jueguitos-best-${game.id}`; }
function bestScore(game) { return Number(localStorage.getItem(bestKey(game)) || 0); }
function saveScore(score) {
	const previous = bestScore(currentGame);
	if (score > previous) {
		localStorage.setItem(bestKey(currentGame), String(score));
		document.querySelector('#best-score').textContent = String(score);
		showToast('¡Nuevo récord!');
	}
}

function openGame(id) {
	currentGame = games.find((game) => game.id === id);
	stopSession();
	catalog.classList.add('hidden');
	gameScreen.classList.remove('hidden');
	document.querySelector('#game-title').textContent = currentGame.title;
	document.querySelector('#game-description').textContent = currentGame.description;
	document.querySelector('#game-category-label').textContent = `${currentGame.category.emoji} ${currentGame.category.name.toLocaleUpperCase('es')}`;
	document.querySelector('#game-eyebrow').textContent = `JUEGO ${String(id).padStart(4, '0')} · NIVEL ${currentGame.variant + 1}/10`;
	document.querySelector('#game-instructions').textContent = instructionsFor(currentGame);
	document.querySelector('#best-score').textContent = String(bestScore(currentGame));
	launchGame();
	history.pushState({ game: id }, '', `#juego-${id}`);
	window.scrollTo(0, 0);
}

function returnToCatalog(pushHistory = true) {
	stopSession();
	gameScreen.classList.add('hidden');
	catalog.classList.remove('hidden');
	currentGame = null;
	if (pushHistory && location.hash.startsWith('#juego-')) history.pushState({}, '', '#catalog');
	window.scrollTo(0, 0);
}

function stopSession() {
	sessionEpoch++;
	if (timerId) clearInterval(timerId);
	if (animationId) cancelAnimationFrame(animationId);
	if (session?.beatTimer) clearInterval(session.beatTimer);
	timerId = null; animationId = null; session = null;
	stage.replaceChildren();
}

function showToast(message) {
	const toast = document.querySelector('#toast');
	toast.textContent = message;
	toast.classList.remove('hidden');
	clearTimeout(toastId);
	toastId = setTimeout(() => toast.classList.add('hidden'), 1500);
}

function setStage(html) { stage.innerHTML = html; }
function scoreMarkup(score = 0, time = null) { return `<div class="score-display" id="score">${score}</div>${time === null ? '' : `<div class="timer-display" id="timer">${time}</div>`}`; }

function finishGame(message, score = session?.score || 0) {
	if (!session || session.finished) return;
	session.finished = true;
	if (timerId) clearInterval(timerId);
	if (session.beatTimer) clearInterval(session.beatTimer);
	if (animationId) cancelAnimationFrame(animationId);
	animationId = null;
	const previous = bestScore(currentGame);
	if (score > previous) localStorage.setItem(bestKey(currentGame), String(score));
	document.querySelector('#best-score').textContent = String(Math.max(score, previous));
	setStage(`<div class="result-mark">${score > previous ? '✳' : '◌'}</div><p class="stage-hint">${message}</p><div class="score-display">${score}</div><div class="timer-display">PUNTOS</div><button class="primary-action" id="replay" type="button">JUGAR OTRA VEZ ↻</button>`);
	document.querySelector('#replay').addEventListener('click', launchGame);
}

function launchGame() {
	stopSession();
	document.querySelector('#game-instructions').textContent = instructionsFor(currentGame);
	const launchers = { tap: startTap, reflex: startReflex, memory: startMemory, dodge: startDodge, puzzle: startPuzzle, typing: startTyping, clicker: startClicker, precision: startPrecision, quiz: startQuiz, rhythm: startRhythm, animal: startAnimal, recipe: startRecipe };
	launchers[currentGame.type]();
	if (session) session.epoch = sessionEpoch;
}

function tickTimer(seconds, onEnd) {
	const epoch = sessionEpoch;
	session.time = seconds;
	timerId = setInterval(() => {
		if (!session || session.finished || session.epoch !== epoch) return;
		session.time--;
		const timer = document.querySelector('#timer');
		if (timer) timer.textContent = `${session.time} s`;
		if (session.time <= 0) onEnd();
	}, 1000);
}

function startTap() {
	const tier = currentGame.variant;
	const duration = Math.max(5, 7 - Math.floor(tier / 3));
	const cellCount = 20 + Math.floor(tier / 3) * 5;
	session = { score: 0, goal: 12 + tier * 2, target: Math.floor(Math.random() * cellCount) };
	setStage(`${scoreMarkup(0, duration)}<p class="stage-hint">META: ${session.goal} · NIVEL ${tier + 1}</p><div class="tap-board" id="tap-board">${Array.from({ length: cellCount }, (_, i) => `<button class="tap-cell ${i === session.target ? 'target' : ''}" data-cell="${i}" aria-label="Casilla ${i + 1}"></button>`).join('')}</div>`);
	tickTimer(duration, () => finishGame(session.score >= session.goal ? '¡Reto superado!' : 'Se acabó el tiempo.', session.score));
	document.querySelector('#tap-board').addEventListener('click', (event) => {
		const cell = event.target.closest('[data-cell]');
		if (!cell || session.finished) return;
		if (Number(cell.dataset.cell) === session.target) {
			session.score++;
			document.querySelector('#score').textContent = String(session.score);
			if (session.score >= session.goal) { finishGame('¡Tienes reflejos de otro planeta!', session.score); return; }
			session.target = Math.floor(Math.random() * cellCount);
			document.querySelectorAll('.tap-cell').forEach((button, index) => button.classList.toggle('target', index === session.target));
		} else { cell.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 160 }); }
	});
}

function startReflex() {
	const rounds = 3 + currentGame.variant * 2;
	const epoch = sessionEpoch;
	session = { phase: 'waiting', score: 0, start: 0, round: 0, rounds };
	setStage(`<p class="stage-hint" id="reflex-hint">Ronda 1 de ${rounds} · espera la señal verde.</p><button class="reflex-panel" id="reflex-panel" type="button">ESPERA...</button><div class="timer-display" id="reflex-score">0 puntos</div>`);
	const panel = document.querySelector('#reflex-panel');
	const beginRound = () => {
		if (!session || session.finished || sessionEpoch !== epoch) return;
		session.phase = 'waiting'; panel.textContent = 'ESPERA...'; panel.classList.remove('ready', 'false-start');
		const wait = Math.max(650, 1500 - currentGame.variant * 75) + Math.random() * 1800;
		timerId = setTimeout(() => { if (session && sessionEpoch === epoch && session.phase === 'waiting') { session.phase = 'ready'; session.start = performance.now(); panel.textContent = '¡AHORA!'; panel.classList.add('ready'); } }, wait);
	};
	panel.addEventListener('click', () => {
		if (session.phase === 'waiting') { session.phase = 'early'; panel.textContent = '¡DEMASIADO PRONTO!'; panel.classList.add('false-start'); clearTimeout(timerId); timerId = setTimeout(beginRound, 850); }
		else if (session.phase === 'ready') {
			const elapsed = Math.round(performance.now() - session.start);
			session.score += Math.max(0, 1000 - elapsed);
			session.round++;
			document.querySelector('#reflex-score').textContent = `${session.score} puntos`;
			if (session.round >= session.rounds) { finishGame(`Promedio: ${Math.round(1000 - session.score / session.rounds)} ms`, session.score); return; }
			document.querySelector('#reflex-hint').textContent = `Ronda ${session.round + 1} de ${session.rounds} · espera la señal verde.`;
			beginRound();
		}
	});
	beginRound();
}

function startMemory() {
	const pads = ['#f17458','#e9c958','#58a88a','#649ddb'];
	const epoch = sessionEpoch;
	session = { score: 0, sequence: [], input: [], showing: false, pads, maxRounds: 5 + currentGame.variant };
	setStage(`<p class="stage-hint" id="memory-hint">Repite la secuencia.</p><div class="memory-grid">${pads.map((color, index) => `<button class="memory-pad" data-pad="${index}" style="--pad-color:${color}" aria-label="Color ${index + 1}"></button>`).join('')}</div><div class="timer-display" id="memory-level">RONDA 1</div>`);
	const nextRound = () => {
		if (!session || session.finished || sessionEpoch !== epoch) return;
		session.sequence.push(Math.floor(Math.random() * 4));
		session.input = []; session.showing = true;
		document.querySelector('#memory-hint').textContent = 'Mira...';
		document.querySelector('#memory-level').textContent = `RONDA ${session.sequence.length} / ${session.maxRounds}`;
		let index = 0;
		const pulse = () => {
			if (!session || session.finished || sessionEpoch !== epoch) return;
			if (index >= session.sequence.length) { session.showing = false; document.querySelector('#memory-hint').textContent = 'Tu turno.'; return; }
			const pad = document.querySelector(`[data-pad="${session.sequence[index++]}"]`);
			pad.classList.add('lit');
			setTimeout(() => { if (sessionEpoch !== epoch) return; pad.classList.remove('lit'); setTimeout(pulse, 160); }, Math.max(150, 360 - currentGame.variant * 20));
		};
		setTimeout(pulse, 300);
	};
	nextRound();
	document.querySelector('.memory-grid').addEventListener('click', (event) => {
		const pad = event.target.closest('[data-pad]');
		if (!pad || session.showing || session.finished) return;
		const index = Number(pad.dataset.pad);
		pad.classList.add('lit'); setTimeout(() => pad.classList.remove('lit'), 130);
		if (index !== session.sequence[session.input.length]) { finishGame('¡Buena memoria! La siguiente ronda ya era larga.', Math.max(0, session.sequence.length - 1)); return; }
		session.input.push(index);
		if (session.input.length === session.sequence.length) {
			session.score = session.sequence.length;
			if (session.score >= session.maxRounds) { finishGame('¡Memoria maestra!', session.score); return; }
			setTimeout(nextRound, 500);
		}
	});
}

function startDodge() {
	const duration = 20 + currentGame.variant * 3;
	const epoch = sessionEpoch;
	session = { score: 0, x: 0.5, hazards: [], last: 0, start: performance.now(), keys: new Set(), duration };
	setStage(`${scoreMarkup(0, duration)}<canvas class="lane-canvas" id="lane" aria-label="Esquiva los bloques con las flechas"></canvas><div class="touch-controls"><button data-dir="-1" aria-label="Izquierda">←</button><button data-dir="1" aria-label="Derecha">→</button></div>`);
	const canvas = document.querySelector('#lane'), ctx = canvas.getContext('2d');
	const resize = () => { canvas.width = canvas.clientWidth * devicePixelRatio; canvas.height = canvas.clientHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); };
	resize();
	canvas.addEventListener('pointermove', (event) => { if (event.buttons) session.x = Math.max(.05, Math.min(.95, event.offsetX / canvas.clientWidth)); });
	document.querySelectorAll('[data-dir]').forEach((button) => { button.addEventListener('pointerdown', () => session.keys.add(Number(button.dataset.dir))); button.addEventListener('pointerup', () => session.keys.delete(Number(button.dataset.dir))); button.addEventListener('pointerleave', () => session.keys.delete(Number(button.dataset.dir))); });
	const frame = (now) => {
		if (!session || session.finished || sessionEpoch !== epoch) return;
		const width = canvas.clientWidth, height = canvas.clientHeight;
		if (canvas.width !== Math.floor(width * devicePixelRatio)) resize();
		ctx.clearRect(0, 0, width, height);
		if (now - session.last > Math.max(170, 430 - currentGame.variant * 25)) {
			session.hazards.push({ x: Math.random() * (width - 24), y: -20, speed: 2 + currentGame.variant * .24 + Math.random() * 2 });
			session.last = now;
		}
		if (session.keys.has(-1)) session.x = Math.max(.04, session.x - .012);
		if (session.keys.has(1)) session.x = Math.min(.96, session.x + .012);
		const px = session.x * width, py = height - 31;
		ctx.fillStyle = '#315b4c'; ctx.fillRect(px - 12, py - 13, 24, 24);
		ctx.fillStyle = '#f5d66e'; ctx.fillRect(px - 7, py - 8, 4, 4); ctx.fillRect(px + 3, py - 8, 4, 4);
		for (const hazard of session.hazards) {
			hazard.y += hazard.speed;
			ctx.fillStyle = '#e96c4a'; ctx.fillRect(hazard.x, hazard.y, 18, 18);
			if (hazard.y + 18 > py - 10 && hazard.y < py + 10 && Math.abs(hazard.x + 9 - px) < 23) { finishGame('¡Buen intento! Esquiva un poco más.', session.score); return; }
		}
		session.hazards = session.hazards.filter((hazard) => hazard.y < height);
		session.score = Math.floor((now - session.start) / 1000);
		document.querySelector('#score').textContent = String(session.score);
		if (session.score >= session.duration) { finishGame('¡Carrera limpia!', session.score); return; }
		animationId = requestAnimationFrame(frame);
	};
	animationId = requestAnimationFrame(frame);
}

function startPuzzle() {
	const side = currentGame.variant < 5 ? 3 : 4;
	const solved = Array.from({ length: side * side }, (_, index) => (index + 1) % (side * side));
	session = { score: 0, moves: 0, side, solved, tiles: [...solved] };
	for (let i = 0; i < 100 + currentGame.variant * 80; i++) {
		const empty = session.tiles.indexOf(0), row = Math.floor(empty / side), col = empty % side;
		const neighbors = [empty - side, empty + side, ...(col ? [empty - 1] : []), ...(col < side - 1 ? [empty + 1] : [])].filter((index) => index >= 0 && index < side * side);
		const next = neighbors[Math.floor(Math.random() * neighbors.length)];
		[session.tiles[empty], session.tiles[next]] = [session.tiles[next], session.tiles[empty]];
	}
	setStage(`<p class="stage-hint">Ordena las piezas · tablero ${side}×${side}.</p><div class="puzzle-grid" id="puzzle-grid" style="--puzzle-cols:${side}"></div><div class="timer-display" id="puzzle-moves">0 MOVIMIENTOS</div>`);
	const render = () => { document.querySelector('#puzzle-grid').innerHTML = session.tiles.map((value,index)=>value?`<button class="puzzle-tile" data-tile="${index}" type="button">${value}</button>`:'<span class="puzzle-empty"></span>').join(''); };
	render();
	document.querySelector('#puzzle-grid').addEventListener('click', (event) => {
		const tile = event.target.closest('[data-tile]'); if (!tile) return;
		const index = Number(tile.dataset.tile), empty = session.tiles.indexOf(0);
		const adjacent = Math.abs(Math.floor(index / side) - Math.floor(empty / side)) + Math.abs(index % side - empty % side) === 1;
		if (!adjacent) return;
		[session.tiles[index], session.tiles[empty]] = [session.tiles[empty], session.tiles[index]];
		session.moves++; document.querySelector('#puzzle-moves').textContent = `${session.moves} MOVIMIENTOS`; render();
		if (session.tiles.join(',') === session.solved.join(',')) finishGame('¡Puzle resuelto!', Math.max(1, 500 - session.moves * 3));
	});
}

const wordSets = [['luna','gato','rio','flor','pixel','nube','prisma','galaxia','cometa','destello','planeta','estrella','luciérnaga','caracola'],['rana','hoja','sol','pez','casa','miel','bosque','mariposa','tormenta','caramelo','burbuja','aventura','laberinto','saltamontes'],['fruta','barco','verde','juego','magia','lento','cereza','sandalia','montana','paraguas','telescopio','bicicleta','maravilla','mandarina']];
function startTyping() {
	const tier = currentGame.variant, duration = Math.max(12, 30 - tier * 2), goal = 10 + tier * 3;
	const dictionary = wordSets.flat().filter((word) => word.length >= 3 + Math.floor(tier / 2));
	session = { score:0, word:0, goal, words:dictionary };
	setStage(`${scoreMarkup(0,duration)}<p class="word-prompt" id="word-prompt"></p><p class="timer-display" id="word-progress">PALABRA 1 / ${goal}</p><input class="game-input" id="word-input" autocomplete="off" autocapitalize="off" placeholder="Escribe aquí"><p class="stage-hint">Pulsa ENTER para confirmar.</p>`);
	const input=document.querySelector('#word-input'); const next=()=>{session.word=Math.floor(Math.random()*session.words.length);document.querySelector('#word-prompt').textContent=session.words[session.word];document.querySelector('#word-progress').textContent=`PALABRA ${session.score+1} / ${goal}`;input.value='';input.focus();};next();
	input.addEventListener('keydown',(event)=>{if(event.key!=='Enter')return;if(input.value.trim().toLocaleLowerCase()===document.querySelector('#word-prompt').textContent){session.score++;document.querySelector('#score').textContent=String(session.score);if(session.score>=goal){finishGame('¡Reto de palabras superado!',session.score);return}next();}else input.select();});
	tickTimer(duration,()=>finishGame('¡Dedos veloces!',session.score));
}

function startClicker() {
	const tier=currentGame.variant,duration=Math.max(8,15-tier),goal=25+tier*10;
	session={score:0,goal};setStage(`${scoreMarkup(0,duration)}<p class="stage-hint">META: ${goal} TOQUES</p><button class="big-clicker" id="big-clicker" type="button"><span>${currentGame.category.emoji}</span><b>¡PULSA!</b></button><p class="stage-hint">Cada toque suma un punto.</p>`);
	document.querySelector('#big-clicker').addEventListener('click',()=>{if(session.finished)return;session.score++;document.querySelector('#score').textContent=String(session.score);if(session.score>=goal)finishGame('¡Meta alcanzada!',session.score)});tickTimer(duration,()=>finishGame('¡Dedos de fuego!',session.score));
}

function startPrecision() {
	const tier=currentGame.variant, rounds=5+tier, zoneWidth=Math.max(6,16-tier);
	const epoch=sessionEpoch;
	session={score:0,round:0,rounds,zoneWidth,position:0,direction:1,last:performance.now(),zone:0.5};
	setStage(`${scoreMarkup(0)}<p class="stage-hint" id="precision-hint">Detén el marcador dentro de la zona verde.</p><div class="timing-track"><div class="timing-zone" id="timing-zone"></div><div class="timing-marker" id="timing-marker"></div></div><button class="primary-action" id="stop-marker" type="button">DETENER · ESPACIO</button>`);
	const next=()=>{session.position=0;session.direction=1;session.zone=zoneWidth/200+Math.random()*(1-zoneWidth/100);const zone=document.querySelector('#timing-zone');zone.style.setProperty('--zone-left',`${session.zone*100-zoneWidth/2}%`);zone.style.setProperty('--zone-width',`${zoneWidth}%`);document.querySelector('#precision-hint').textContent=`RONDA ${session.round+1} / ${rounds} · ZONA ${zoneWidth}%`};next();
	const frame=(now)=>{if(!session||session.finished||sessionEpoch!==epoch)return;const delta=now-session.last;session.last=now;session.position+=delta*.00075*(1+tier*.13)*session.direction;if(session.position>1){session.position=1;session.direction=-1}if(session.position<0){session.position=0;session.direction=1}document.querySelector('#timing-marker').style.left=`${session.position*100}%`;animationId=requestAnimationFrame(frame)};animationId=requestAnimationFrame(frame);
	const stop=()=>{if(session.finished)return;const distance=Math.abs(session.position-session.zone);if(distance<zoneWidth/200+.012){session.score+=Math.round(100-distance*400);session.round++;document.querySelector('#score').textContent=String(session.score);if(session.round>=rounds){finishGame(`¡${rounds} tiros perfectos!`,session.score);return}next()}else{finishGame('Casi. El truco está en el ritmo.',session.score)}};
	document.querySelector('#stop-marker').addEventListener('click',stop);session.stop=stop;
}

function startQuiz() {
	const tier=currentGame.variant, rounds=10+tier*2;
	session={score:0,round:0,rounds,answer:0};setStage(`${scoreMarkup(0)}<p class="quiz-question" id="quiz-question"></p><div class="answer-grid" id="answer-grid"></div><div class="timer-display" id="quiz-round"></div>`);
	const next=()=>{
		let a,b,operator;
		if(tier<2){a=2+Math.floor(Math.random()*12);b=2+Math.floor(Math.random()*9);operator='+';session.answer=a+b}
		else if(tier<4){a=8+Math.floor(Math.random()*18);b=2+Math.floor(Math.random()*a);operator='−';session.answer=a-b}
		else if(tier<7){a=2+Math.floor(Math.random()*9);b=2+Math.floor(Math.random()*9);operator='×';session.answer=a*b}
		else {operator=['+','−','×'][Math.floor(Math.random()*3)];a=2+Math.floor(Math.random()*(operator==='×'?9:30));b=2+Math.floor(Math.random()*(operator==='×'?9:20));if(operator==='−'&&b>a)[a,b]=[b,a];session.answer=operator==='+'?a+b:operator==='−'?a-b:a*b}
		const options=new Set([session.answer]);while(options.size<4)options.add(Math.max(0,session.answer+Math.floor(Math.random()*13)-6));const choices=[...options].sort(()=>Math.random()-.5);
		document.querySelector('#quiz-question').textContent=`${a} ${operator} ${b} = ?`;document.querySelector('#quiz-round').textContent=`CUENTA ${session.round+1} / ${rounds}`;document.querySelector('#answer-grid').innerHTML=choices.map(value=>`<button class="answer-button" data-answer="${value}">${value}</button>`).join('')
	};
	next();document.querySelector('#answer-grid').addEventListener('click',(event)=>{const button=event.target.closest('[data-answer]');if(!button)return;if(Number(button.dataset.answer)===session.answer)session.score+=10;session.round++;document.querySelector('#score').textContent=String(session.score);if(session.round>=rounds){finishGame('¡Cerebro encendido!',session.score);return}next()});
}

function startRhythm() {
	const tier=currentGame.variant,duration=Math.max(10,20-tier);
	const epoch=sessionEpoch;
	session={score:0,beats:0,last:performance.now(),bpm:100+tier*8};
	setStage(`${scoreMarkup(0,duration)}<div class="rhythm-orb" id="rhythm-orb">♪</div><button class="primary-action" id="rhythm-hit" type="button">MARCAR PULSO · ESPACIO</button><p class="stage-hint">${session.bpm} BPM · Sigue el pulso.</p>`);
	const beat=()=>{if(!session||session.finished||sessionEpoch!==epoch)return;const orb=document.querySelector('#rhythm-orb');orb.classList.add('pulse');setTimeout(()=>{if(sessionEpoch===epoch)orb?.classList.remove('pulse')},150);session.last=performance.now();};
	beat();session.beatTimer=setInterval(beat,60000/session.bpm);tickTimer(duration,()=>finishGame('¡Buen ritmo!',session.score));
	const hit=()=>{if(session.finished)return;const error=Math.abs(performance.now()-session.last);if(error<220){session.score+=Math.max(1,Math.round(10-error/25));document.querySelector('#score').textContent=String(session.score);document.querySelector('#rhythm-orb').classList.add('hit');setTimeout(()=>document.querySelector('#rhythm-orb')?.classList.remove('hit'),120)}};document.querySelector('#rhythm-hit').addEventListener('click',hit);session.hit=hit;
}

function startAnimal() {
	const gameIndex = currentGame.baseIndex - 20;
	const animal = animalGames[gameIndex];
	const tier = currentGame.variant;
	const goal = 5 + tier * 2;
	const lives = Math.max(1, 4 - Math.floor(tier / 3));
	session = { score: 0, round: 0, goal, lives, maxLives: lives, animal, tier, target: null, portion: 0, position: 4 };
	setStage(`<div class="animal-game" data-animal-mode="${animal.action}"><div class="animal-game-top"><span>ENCUENTRO CON ANIMALES</span><b id="animal-progress">1 / ${goal}</b><span class="animal-score">PUNTOS <b id="score">0</b></span></div><div class="animal-portrait" id="animal-portrait">${animal.creature}</div><h2 class="animal-cue" id="animal-cue"></h2><p class="animal-detail" id="animal-detail"></p><div class="animal-play" id="animal-play"></div><div class="animal-actions" id="animal-actions"></div><div class="animal-status"><span id="animal-feedback" aria-live="polite">Trátalo con cuidado.</span><span id="animal-lives"></span></div></div>`);
	const cue = document.querySelector('#animal-cue');
	const detail = document.querySelector('#animal-detail');
	const play = document.querySelector('#animal-play');
	const actions = document.querySelector('#animal-actions');
	const feedback = document.querySelector('#animal-feedback');
	const actionButton = (id, label, icon = '') => `<button class="animal-action" type="button" data-animal-choice="${id}"><span>${icon}</span>${label}</button>`;
	const choices = {
		feed: [['mosca','Mosca','🪰'],['baya','Baya','🫐'],['hoja','Hoja tierna','🍃'],['lombriz','Lombriz','🪱']],
		directions: [['left','Izquierda','←'],['up','Arriba','↑'],['right','Derecha','→'],['down','Abajo','↓']],
		fox: [['space','Darle espacio','↔'],['pet','Caricia suave','♡'],['play','Jugar con rama','↗']],
		food: [['algas','Algas','🌿'],['plancton','Plancton','🫧'],['camarón','Camarón','🦐']],
		colors: [['amarillo','Amarilla','🟡'],['marrón','Marrón','🟤'],['blanco','Blanca','⚪'],['negro','Negra','⚫']],
		zones: [['izq','Izquierda','←'],['centro','Centro','•'],['der','Derecha','→']],
		forage: [['hojas','Hojas','🍂'],['tronco','Tronco','🪵'],['piedra','Piedra','🪨']],
		care: [['agua','Agua','💧'],['comida','Comida','🍎'],['descanso','Manta','🛏️'],['juego','Juguete','🧶']]
	};
	const renderActions = (items) => { actions.innerHTML = items.map(([id, label, icon]) => actionButton(id, label, icon)).join(''); };
	const renderLives = () => { document.querySelector('#animal-lives').textContent = `CUIDADOS ${'♥'.repeat(session.lives)}${'♡'.repeat(session.maxLives - session.lives)}`; };
	const next = (message = '¡Bien hecho!') => {
		if (session.finished) return;
		session.score++;
		session.round++;
		document.querySelector('#score').textContent = String(session.score);
		document.querySelector('#animal-progress').textContent = `${Math.min(session.round + 1, goal)} / ${goal}`;
		feedback.textContent = message;
		if (session.round >= goal) { finishGame(`¡${animal.name} confía en ti!`, session.score * 100); return; }
		renderRound();
	};
	const miss = (message) => {
		session.lives--;
		feedback.textContent = message;
		renderLives();
		if (session.lives <= 0) finishGame(`${animal.name} necesita un descanso.`, session.score * 100);
	};
	const renderRound = () => {
		document.querySelector('#animal-progress').textContent = `${session.round + 1} / ${goal}`;
		renderLives();
		play.className = `animal-play animal-play-${animal.action}`;
		switch (animal.action) {
			case 'feed': {
				const options = choices.feed.slice(0, Math.min(4, 3 + Math.floor(tier / 3)));
				session.target = options[Math.floor(Math.random() * options.length)][0];
				const item = options.find(([id]) => id === session.target);
				cue.textContent = `La ranita tiene hambre de ${item[1].toLocaleLowerCase()}.`;
				detail.textContent = 'Elige su tentempié favorito.';
				play.innerHTML = `<span class="animal-big">🐸</span><span class="animal-thought">${item[2]} ?</span>`;
				renderActions(options);
				break;
			}
			case 'snail': {
				const route = choices.directions;
				session.target = route[Math.floor(Math.random() * route.length)][0];
				const sign = route.find(([id]) => id === session.target);
				cue.textContent = 'Ayuda a Caracol a encontrar el camino seco.';
				detail.textContent = `La hoja segura está hacia ${sign[1].toLocaleLowerCase()}.`;
				play.innerHTML = `<span class="animal-big">🐌</span><span class="trail">🍀　🪨　🍃　🪵　💧</span>`;
				renderActions(route);
				break;
			}
			case 'fox': {
				const signals = [
					{ cue: 'El zorro se acerca y apoya la cabeza.', detail: 'Parece tranquilo y busca compañía.', target: 'pet' },
					{ cue: 'El zorro retrocede y baja las orejas.', detail: 'Está nervioso. Dale un poco de espacio.', target: 'space' },
					{ cue: 'El zorro deja una rama a tus pies.', detail: 'Te está invitando a jugar.', target: 'play' }
				];
			const signal = signals[Math.floor(Math.random() * signals.length)];
			session.target = signal.target;
			cue.textContent = signal.cue; detail.textContent = signal.detail;
			play.innerHTML = `<span class="animal-big">🦊</span><span class="animal-hearts">${'♡'.repeat(Math.max(1, session.score))}</span>`;
			renderActions(choices.fox);
			break;
			}
			case 'fish': {
				session.target = choices.food[Math.floor(Math.random() * choices.food.length)][0];
				session.portion = 0;
				session.foodTarget = null;
				const food = choices.food.find(([id]) => id === session.target);
				cue.textContent = `El pez pide ${food[1].toLocaleLowerCase()}.`;
				session.portionGoal = 1 + Math.floor(Math.random() * (2 + Math.floor(tier / 3)));
				detail.textContent = `Prepara ${session.portionGoal} porción${session.portionGoal === 1 ? '' : 'es'} y pulsa «Servir» sin sobrealimentarlo.`;
				play.innerHTML = `<span class="fish-bubbles">${'🫧'.repeat(session.portionGoal)}</span><span class="animal-big">🐡</span><b id="portion-count">0 porciones</b>`;
				renderActions([...choices.food, ['serve','Servir ahora','🍽️']]);
				break;
			}
			case 'sheep': {
				const colors = ['amarilla','marrón','blanca','negra'];
				session.target = colors[Math.floor(Math.random() * colors.length)];
				cue.textContent = `Busca la oveja ${session.target}.`;
				detail.textContent = 'Toca la que se ha separado del rebaño.';
				const flock = Array.from({ length: 12 }, (_, index) => {
					const color = index === session.round % 12 ? session.target : colors[Math.floor(Math.random() * colors.length)];
					return `<button class="sheep-choice" data-animal-choice="${color}" aria-label="Oveja ${color}"><span>🐑</span><i class="wool wool-${color}"></i></button>`;
				});
				play.innerHTML = `<div class="flock-grid">${flock.join('')}</div>`;
				actions.innerHTML = '';
				break;
			}
			case 'cat': {
				session.target = choices.zones[Math.floor(Math.random() * choices.zones.length)][0];
				const zone = choices.zones.find(([id]) => id === session.target);
				cue.textContent = '¡La pluma se mueve!';
				detail.textContent = `Mueve la pluma a la ${zone[1].toLocaleLowerCase()} para jugar con el gato.`;
				play.innerHTML = `<span class="animal-big">🐈</span><span class="feather-track"><i class="feather feather-${session.target}">🪶</i></span>`;
				renderActions(choices.zones.map(([id, label, icon]) => [id, `Mover ${label.toLocaleLowerCase()}`, icon]));
				break;
			}
			case 'ducks': {
				session.target = choices.colors[Math.floor(Math.random() * choices.colors.length)][0];
				const family = choices.colors.find(([id]) => id === session.target);
				cue.textContent = `Un patito ${family[1].toLocaleLowerCase()} se ha perdido.`;
				detail.textContent = '¿Qué mamá pata lo está llamando?';
				play.innerHTML = `<span class="animal-big">🐤</span><span class="duck-pond">〰　〰　〰　〰</span>`;
				renderActions(choices.colors.map(([id, label]) => [id, `Pata ${label.toLocaleLowerCase()}`, '🦆']));
				break;
			}
			case 'hedgehog': {
				session.target = choices.forage[Math.floor(Math.random() * choices.forage.length)][0];
				const hiding = choices.forage.find(([id]) => id === session.target);
				cue.textContent = 'El erizo busca una manzana.';
				detail.textContent = `Has visto una pista junto a ${hiding[1].toLocaleLowerCase()}. ¿Dónde mirar?`;
				play.innerHTML = `<span class="animal-big">🦔</span><span class="animal-thought">🍎 ?</span>`;
				renderActions(choices.forage.map(([id, label, icon]) => [id, `Mirar ${label.toLocaleLowerCase()}`, icon]));
				break;
			}
			case 'care': {
				const needs = [
					{ cue: 'El monstruito lame sus labios.', detail: 'Tiene sed después de jugar.', target: 'agua' },
					{ cue: 'El monstruito mira la merienda.', detail: 'Parece que tiene hambre.', target: 'comida' },
					{ cue: 'El monstruito bosteza muy fuerte.', detail: 'Necesita descansar un rato.', target: 'descanso' },
					{ cue: 'El monstruito trae una pelota.', detail: '¡Quiere jugar contigo!', target: 'juego' }
				];
				const need = needs[Math.floor(Math.random() * needs.length)]; session.target = need.target;
				cue.textContent = need.cue; detail.textContent = need.detail;
				play.innerHTML = `<span class="animal-big">👾</span><span class="animal-hearts">${'♥'.repeat(Math.min(5, session.score + 1))}</span>`;
				renderActions(choices.care);
				break;
			}
			case 'frog': {
				const neighbors = [session.position - 3, session.position + 3, ...(session.position % 3 ? [session.position - 1] : []), ...(session.position % 3 < 2 ? [session.position + 1] : [])].filter((position) => position >= 0 && position < 9);
				session.target = neighbors[Math.floor(Math.random() * neighbors.length)];
				cue.textContent = 'Guía al sapito entre las hojas seguras.';
				detail.textContent = 'Salta solo a una hoja vecina, evita el agua profunda.';
				play.innerHTML = `<div class="lily-grid">${Array.from({ length: 9 }, (_, index) => `<button class="lily-pad ${index === session.position ? 'frog-here' : ''}" data-animal-choice="${index}" aria-label="Hoja ${index + 1}">${index === session.position ? '🐸' : '🍃'}</button>`).join('')}</div>`;
				actions.innerHTML = '';
				break;
			}
		}
	};
	const answer = (choice) => {
		if (!session || session.finished) return;
		if (String(choice) === String(session.target)) {
			if (animal.action === 'frog') session.position = Number(choice);
			next('¡Buena interacción!');
		} else miss(animal.action === 'fox' || animal.action === 'care' ? 'Observa sus señales e inténtalo con calma.' : 'No era esa. Prueba otra vez con cuidado.');
	};
	const actionRoot = document.querySelector('#animal-actions');
	const playRoot = document.querySelector('#animal-play');
	const onAnimalClick = (event) => {
		const button = event.target.closest('[data-animal-choice]');
		if (!button) return;
		const choice = button.dataset.animalChoice;
		if (animal.action === 'fish') {
			if (choice === 'serve') {
				if (session.target === session.foodTarget && session.portion === session.portionGoal) next('¡Ración perfecta!');
				else miss('Mira la comida y las burbujas antes de servir.');
				return;
			}
			if (choice !== session.target) { miss('Ese alimento no le gusta.'); return; }
			session.foodTarget = choice; session.portion++;
			document.querySelector('#portion-count').textContent = `${session.portion} porción${session.portion === 1 ? '' : 'es'}`;
			if (session.portion > session.portionGoal) { session.portion = 0; session.foodTarget = null; document.querySelector('#portion-count').textContent = '0 porciones'; miss('¡Demasiado! Vuelve a preparar la ración.'); }
			else feedback.textContent = `Van ${session.portion} de ${session.portionGoal}. ¿Servir ahora?`;
			return;
		}
		answer(animal.action === 'sheep' ? button.dataset.animalChoice : choice);
	};
	actionRoot.addEventListener('click', onAnimalClick);
	playRoot.addEventListener('click', onAnimalClick);
	renderRound();
	const seconds = Math.max(25, 55 - tier * 3);
	document.querySelector('#game-instructions').textContent = animalInstructions(gameIndex, tier);
	tickTimer(seconds, () => finishGame(`${animal.name} vuelve a descansar.`, session.score * 100));
}
function startRecipe() {
	const game = currentGame;
	const recipe = recipeFor(game);
	const tier = game.variant;
	const control = recipe.control.id;
	const objectiveIndex = game.recipe.objective;
	const goal = 4 + tier * 2;
	const maxLives = Math.max(1, 4 - Math.floor(tier / 3));
	const epoch = sessionEpoch;
	const tokens = [
		['⭐','🌱','🐚','✨','🍀','💎'], ['🔴','🟢','🔵','🟡','🟣','🟠'], ['📦','✉️','🍎','🧰','🧪','🪙'],
		['🌷','🚀','🪺','💰','🧸','🏰'], ['🐾','🪶','🔺','🔷','🎈','🍒'], ['⛵','🔵','🪲','🐝','🛶','🧭'],
		['🔧','🪛','🧲','🧵','🪚','🧩'], ['🍎','🍯','🌾','🍄','🫐','🥕'], ['🧱','🪵','🎼','🛤️','🪨','🧶'],
		['🧑','🐝','🧑‍🚀','🧠','🧚','🐢']
	];
	const directions = ['↑','→','↓','←'];
	const symbols = tokens[objectiveIndex];
	session = { score: 0, round: 0, goal, lives: maxLives, maxLives, sequenceIndex: 0, dial: 0, holdStarted: 0, doublePhase: false, taskStep: 0 };
	setStage(`<div class="recipe-game" data-control="${control}" data-objective="${recipe.objective.id}"><div class="recipe-top"><span>${recipe.objective.name} · ${recipe.modifier.name}</span><b id="recipe-progress">1 / ${goal}</b>${game.id === 1 ? '<span class="recipe-points" id="timer">7</span>' : ''}<span class="recipe-points">PUNTOS <i id="score">0</i></span></div><h2 id="recipe-cue"></h2><p class="recipe-rule" id="recipe-rule"></p><div class="recipe-board" id="recipe-board"></div><div class="recipe-controls" id="recipe-controls"></div><div class="recipe-feedback" id="recipe-feedback">${recipe.modifier.rule}</div><div class="recipe-lives" id="recipe-lives"></div></div>`);
	const board = document.querySelector('#recipe-board');
	const controls = document.querySelector('#recipe-controls');
	const cue = document.querySelector('#recipe-cue');
	const rule = document.querySelector('#recipe-rule');
	const feedback = document.querySelector('#recipe-feedback');
	const makeButtons = (items) => { controls.innerHTML = items.map(([id, label, icon]) => `<button class="recipe-option" type="button" data-recipe-choice="${id}"><span>${icon}</span>${label}</button>`).join(''); };
	const updateLives = () => { document.querySelector('#recipe-lives').textContent = `INTENTOS ${'♥'.repeat(session.lives)}${'♡'.repeat(maxLives-session.lives)}`; };
	const fail = () => {
		session.lives--;
		feedback.textContent = 'Esa acción no sirve para esta misión. Reintenta.';
		updateLives();
		if (tier === 9 || session.lives <= 0) finishGame('Se acabaron los intentos.', session.score * 100);
	};
	const resolveRound = (correct) => {
		if (!session || session.finished || sessionEpoch !== epoch) return;
		if (!correct) { fail(); return; }
		if (session.taskStep + 1 < recipeSteps(game)) {
			session.taskStep++;
			feedback.textContent = `Paso ${session.taskStep + 1} de ${recipeSteps(game)}: sigue con la misión.`;
			renderRound();
			return;
		}
		session.taskStep = 0;
		if (tier === 6 && !session.doublePhase) {
			session.doublePhase = true;
			feedback.textContent = 'Primera orden lista: completa la segunda.';
			renderRound();
			return;
		}
		session.doublePhase = false;
		session.score++;
		session.round++;
		document.querySelector('#score').textContent = String(session.score);
		if (session.round >= goal) { finishGame('¡Misión completa!', session.score * 100); return; }
		renderRound();
		feedback.textContent = '¡Correcto! Nueva misión.';
	};
	session.resolveRound = resolveRound;
	const renderRound = () => {
		if (!session || session.finished || sessionEpoch !== epoch) return;
		const count = Math.min(4 + Math.floor(tier / 3), symbols.length);
		const options = Array.from({ length: count }, (_, index) => symbols[index]);
		if (tier === 2 || tier === 3 || tier === 4) options.sort(() => Math.random() - .5);
		let targetIndex = Math.floor(Math.random() * count);
		if (tier === 7) targetIndex = count - targetIndex - 1;
		session.targetIndex = targetIndex;
				session.targetSymbol = options[targetIndex];
		session.sequenceIndex = 0;
		document.querySelector('#recipe-progress').textContent = `${session.round + 1} / ${goal}`;
		updateLives();
		cue.textContent = `${session.doublePhase ? 'SEGUNDA ORDEN: ' : ''}${recipe.objective.verb[0].toLocaleUpperCase('es') + recipe.objective.verb.slice(1)} ${recipe.objective.nouns[game.baseIndex % 4]}${recipeSteps(game) > 1 ? ` · PASO ${session.taskStep + 1}/${recipeSteps(game)}` : ''}.`;
		rule.textContent = `${recipe.control.hint}. ${recipe.modifier.rule}`;
		board.className = `recipe-board recipe-board-${control}`;
		board.innerHTML = `<div class="recipe-mission" id="recipe-secret">${options[targetIndex]}</div><div class="recipe-items">${options.map((symbol, index) => `<span class="recipe-item">${symbol}</span>`).join('')}</div>`;
		controls.replaceChildren();
				controls.classList.remove('recipe-trace-controls');
		const tileButtons = () => { controls.innerHTML = options.map((symbol, index) => `<button class="recipe-tile" type="button" data-recipe-choice="${index}">${symbol}</button>`).join(''); };
		if (tier === 5) window.setTimeout(() => { if (sessionEpoch === epoch) { const secret = document.querySelector('#recipe-secret'); if (secret) secret.textContent = '❔'; } }, 900);
		switch (control) {
			case 'tap':
			case 'choose': tileButtons(); break;
			case 'drag':
				tileButtons();
				controls.querySelectorAll('.recipe-tile').forEach((tile) => { tile.draggable = true; tile.addEventListener('dragstart', (event) => event.dataTransfer.setData('text/plain', tile.dataset.recipeChoice)); });
				controls.addEventListener('dragover', (event) => event.preventDefault());
					break;
			case 'sequence':
			case 'trace':
				session.sequence = Array.from({ length: 2 + Math.floor(tier / 3) }, (_, index) => index === 1 ? targetIndex : Math.floor(Math.random() * count));
				rule.textContent = `${control === 'trace' ? 'Traza' : 'Repite'}: ${session.sequence.map((index) => options[index]).join(' → ')}`;
				tileButtons();
				if (control === 'trace') {
					controls.classList.add('recipe-trace-controls');
					let tracing = false;
					let traced = false;
					const traceNode = (event) => {
						const tile = event.target.closest('[data-recipe-choice]');
						if (!tile || !tracing || traced) return;
						const index = Number(tile.dataset.recipeChoice);
						if (index !== session.sequence[session.sequenceIndex]) { tracing = false; session.sequenceIndex = 0; fail(); return; }
						tile.classList.add('recipe-correct');
						session.sequenceIndex++;
						if (session.sequenceIndex >= session.sequence.length) traced = true;
					};
					controls.addEventListener('pointerdown', (event) => { tracing = true; session.sequenceIndex = 0; traceNode(event); });
					controls.addEventListener('pointerover', traceNode);
					controls.addEventListener('pointerup', () => { if (!tracing) return; tracing = false; if (traced) resolveRound(true); else session.sequenceIndex = 0; });
				}
				break;
			case 'arrows':
			case 'swipe':
				session.direction = directions[targetIndex % 4];
				rule.textContent = control === 'swipe' ? `Desliza ${session.direction}.` : `Pulsa ${session.direction}.`;
				makeButtons(directions.map((direction, index) => [String(index), direction, direction]));
				if (control === 'swipe') {
					board.style.touchAction = 'none';
					board.dataset.swipeStart = '';
					board.addEventListener('pointerdown', (event) => { board.dataset.swipeStart = `${event.clientX},${event.clientY}`; board.setPointerCapture(event.pointerId); });
					board.addEventListener('pointerup', (event) => {
						const [startX, startY] = board.dataset.swipeStart.split(',').map(Number);
						const dx = event.clientX - startX, dy = event.clientY - startY;
						if (Math.hypot(dx, dy) < 24) return;
						const direction = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? '→' : '←') : (dy > 0 ? '↓' : '↑');
						resolveRound(direction === session.direction);
					});
				}
				break;
			case 'hold': {
				session.holdGoal = 400 + tier * 75;
				rule.textContent = `Mantén pulsado ${(session.holdGoal / 1000).toFixed(2)} s.`;
				controls.innerHTML = '<button id="hold-target" class="hold-button" type="button">MANTENER</button>';
				const hold = document.querySelector('#hold-target');
				hold.addEventListener('pointerdown', (event) => { event.preventDefault(); session.holdStarted = performance.now(); hold.classList.add('holding'); });
				const release = () => { if (!session.holdStarted) return; const elapsed = performance.now() - session.holdStarted; session.holdStarted = 0; hold.classList.remove('holding'); resolveRound(Math.abs(elapsed - session.holdGoal) < Math.max(130, 300 - tier * 16)); };
				hold.addEventListener('pointerup', release); hold.addEventListener('pointercancel', release);
				break;
			}
			case 'rotate':
				session.dial = Math.floor(Math.random() * 10); session.dialTarget = targetIndex + 1;
				rule.textContent = `Gira el dial hasta ${session.dialTarget}.`;
				controls.innerHTML = '<button class="recipe-option" data-turn="-1">↶</button><b id="dial-value"></b><button class="recipe-option" data-turn="1">↷</button><button class="recipe-option" id="dial-confirm">OK</button>';
				const updateDial = () => { document.querySelector('#dial-value').textContent = session.dial; }; updateDial();
				controls.querySelectorAll('[data-turn]').forEach((turn) => turn.addEventListener('click', () => { session.dial = (session.dial + Number(turn.dataset.turn) + 10) % 10; updateDial(); }));
				document.querySelector('#dial-confirm').addEventListener('click', () => resolveRound(session.dial === session.dialTarget));
				break;
			case 'type': {
				session.code = `${String.fromCharCode(65 + targetIndex)}${(game.id + session.round) % 10}`;
				rule.textContent = `Escribe el código ${tier === 7 ? session.code.split('').reverse().join('') : session.code}.`;
				controls.innerHTML = '<input id="recipe-code" class="recipe-code" maxlength="4" placeholder="CÓDIGO"><button id="code-submit" class="recipe-option">ENVIAR</button>';
				const submit = () => resolveRound(document.querySelector('#recipe-code').value.trim().toUpperCase() === session.code);
				document.querySelector('#code-submit').addEventListener('click', submit); document.querySelector('#recipe-code').addEventListener('keydown', (event) => { if (event.key === 'Enter') submit(); });
				break;
			}
			case 'aim': {
				rule.textContent = 'Apunta al círculo y tócalo.';
				const x = .18 + (targetIndex % 3) * .32, y = .22 + (Math.floor(targetIndex / 3) % 2) * .5;
				board.innerHTML = '<canvas id="aim-board" class="aim-board"></canvas>';
				const canvas = document.querySelector('#aim-board'), ctx = canvas.getContext('2d');
				canvas.width = canvas.clientWidth * devicePixelRatio; canvas.height = canvas.clientHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
				ctx.fillStyle = '#e96c4a'; ctx.beginPath(); ctx.arc(x*canvas.clientWidth,y*canvas.clientHeight,13,0,Math.PI*2); ctx.fill();
				canvas.addEventListener('pointerdown', (event) => { const rect=canvas.getBoundingClientRect(); const px=(event.clientX-rect.left)/rect.width, py=(event.clientY-rect.top)/rect.height; resolveRound(Math.hypot(px-x,py-y)<.1); });
				break;
			}
		}
		controls.querySelectorAll('[data-recipe-choice]').forEach((option) => option.addEventListener('click', () => {
						const value = Number(option.dataset.recipeChoice);
						if (control === 'trace') return;
						if (control === 'sequence') { if (value !== session.sequence[session.sequenceIndex]) { fail(); session.sequenceIndex = 0; return; } session.sequenceIndex++; if (session.sequenceIndex >= session.sequence.length) resolveRound(true); return; }
			if (control === 'arrows' || control === 'swipe') resolveRound(value === directions.indexOf(session.direction));
			else if (control === 'drag') { session.selectedItem = value; option.classList.add('recipe-selected'); feedback.textContent = 'Objeto levantado: suéltalo en el destino.'; }
			else resolveRound(value === targetIndex);
		}));
		if (control === 'drag') {
			const drop = document.createElement('button'); drop.type = 'button'; drop.className = 'recipe-drop'; drop.textContent = 'SOLTAR AQUÍ';
			drop.addEventListener('click', () => resolveRound(session.selectedItem === targetIndex));
			drop.addEventListener('dragover', (event) => event.preventDefault());
			drop.addEventListener('drop', (event) => { event.preventDefault(); resolveRound(Number(event.dataTransfer.getData('text/plain')) === targetIndex); });
			controls.append(drop);
		}
	};
	renderRound();
	if (game.id === 1) tickTimer(7, () => finishGame('Se acabaron los siete segundos.', session.score * 100));
	else if (tier > 0) tickTimer(Math.max(14, 55 - tier * 4), () => finishGame('Se acabó el tiempo de la misión.', session.score * 100));
}

function handleGlobalKey(event) {
	if (event.key === 'Escape' && !gameScreen.classList.contains('hidden')) { returnToCatalog(); return; }
	if (event.key === '/' && gameScreen.classList.contains('hidden') && document.activeElement !== search) { event.preventDefault(); search.focus(); }
	if (!gameScreen.classList.contains('hidden') && event.code === 'Space') {
		if (['precision','rhythm'].includes(currentGame.type)) { event.preventDefault(); session?.stop?.(); session?.hit?.(); }
		else if (currentGame.type !== 'typing') event.preventDefault();
	}
	if (!gameScreen.classList.contains('hidden') && currentGame?.type === 'dodge' && session) {
		if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') session.x = Math.max(.04,session.x-.06);
		if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') session.x = Math.min(.96,session.x+.06);
	}
	if (!gameScreen.classList.contains('hidden') && currentGame?.type === 'recipe' && session && ['arrows','swipe'].includes(recipeFor(currentGame).control.id)) {
		const directions = { ArrowUp: '↑', ArrowRight: '→', ArrowDown: '↓', ArrowLeft: '←' };
		if (directions[event.key]) { event.preventDefault(); session.resolveRound(directions[event.key] === session.direction); }
	}
}

document.addEventListener('keydown',handleGlobalKey);
document.querySelector('#back-to-catalog').addEventListener('click',()=>returnToCatalog());
document.querySelector('#game-random').addEventListener('click',()=>openGame(1+Math.floor(Math.random()*games.length)));
document.querySelector('#random-game').addEventListener('click',()=>openGame(1+Math.floor(Math.random()*games.length)));
document.querySelector('#fullscreen-toggle').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{showToast('Pantalla completa no disponible en este navegador')}});
document.addEventListener('fullscreenchange',()=>{const button=document.querySelector('#fullscreen-toggle');const active=Boolean(document.fullscreenElement);button.setAttribute('aria-label',active?'Salir de pantalla completa':'Pantalla completa');button.title=active?'Salir de pantalla completa':'Pantalla completa'});
search.addEventListener('input',renderCatalog);
document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';selectedCategory='all';renderTabs();renderCatalog()});
document.addEventListener('click',(event)=>{if(event.target.closest('#team-toggle'))return});
window.addEventListener('popstate',()=>{if(!gameScreen.classList.contains('hidden'))returnToCatalog(false)});
renderTabs();renderCatalog();
