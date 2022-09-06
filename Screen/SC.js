// module aliases
var Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
	element: document.body,
	engine: engine,
	options:{
		width: 1000,
		height: 1000,
		background: '#9c9970',
		wireframes: false,
		showPositions: true,
		showVelocity: true,
		showCollisions: true,
	}
});

// Create Static Objects
var ground = Bodies.rectangle(400, 610, 1000, 60, { isStatic: true });

// create two boxes
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);

// player
const player = Matter.Bodies.rectangle(-30,0,30,30,{
	label:'Player',
	gravity:{x:0,y:0},
	friction:0,
	surface:0,
	collisionFilter:{ category:1, mask:1,},
	lastdir:0,
});

// add all of the bodies to the world
Composite.add(engine.world,
	[boxA, boxB, ground, player]
);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// update
Matter.Events.on(render,"afterRender",e => {
	Matter.Render.lookAt(render,player,{x:500,y:100});
});