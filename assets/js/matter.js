
function startSimulation() {

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;
    Runner = Matter.Runner;




    function updateSize() {

        const oldCanvas = document.querySelector("canvas");
        if (oldCanvas) {
            oldCanvas.remove();
        }

        if (engine) {
            Engine.clear(engine);
            Render.stop(render);
            Runner.stop(runner);
        }

        var matterArea = document.getElementById("matter-box");

        //width and height of the area
        let w = matterArea.offsetWidth;
        let h = matterArea.offsetHeight;

        // create an engine
        var engine = Engine.create(),
            world = engine.world;

        // create a renderer
        var render = Render.create({
            element: matterArea,
            engine: engine,
            options: {
                width: w,
                height: h,
                pixelRatio: 2,
                background: 'tranparent',
                wireframes: false,
            }
        });

        var radius = 25

        var ground = Bodies.rectangle(
            (w / 2) + 160,
            h + 84,
            w + 320,
            174,
            {
                isStatic: true,
                render: {
                    visible: false
                }
            }
        );
        var wallLeft = Bodies.rectangle(-80, h / 2, 160, h, { isStatic: true });
        var wallRight = Bodies.rectangle(w + 80, h / 2, 160, h, { isStatic: true })
        var roof = Bodies.rectangle((w / 2) + 160, -80, w + 320, 160, { isStatic: true })

        World.add(world, [ground, wallLeft, wallRight, roof]);

        // create objects
        var items = [
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 134, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/1.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 83, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/2.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 113, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/3.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 110, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/4.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 111, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/5.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 147, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/6.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 143, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/7.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 153, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/8.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 130, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/9.png', xScale: 0.5, yScale: 0.5 } } }),
            Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 147, 44, { chamfer: { radius: radius }, render: { sprite: { texture: '../../assets/images/get/10.png', xScale: 0.5, yScale: 0.5 } } }),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 197, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/11.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 223, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/12.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 49, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/13.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 49, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/14.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 115, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/15.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 49, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/16.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 49, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/17.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 198, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/18.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 180, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/19.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 49, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/20.png', xScale: 0.5, yScale: 0.5 }}}),
            // Bodies.rectangle(Math.random() * (w - 100) + 50, 150, 49, 49, {chamfer: {radius: radius}, render: { sprite: { texture: '../../assets/images/get/21.png', xScale: 0.5, yScale: 0.5 }}}),
        ]

        items.forEach((item, index) => {
            setTimeout(() => {
                World.add(world, item);
            }, index * 0);
        });

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // Allow page scrolling in matter.js window
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        // Detect clicks vs. drags
        let click = false;

        document.addEventListener('mousedown', () => click = true);
        document.addEventListener('mousemove', () => click = false);
        // document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

        // Create a On-Mouseup Event-Handler
        Events.on(mouseConstraint, 'mouseup', function (event) {
            var mouseConstraint = event.source;
            var bodies = engine.world.bodies;
            if (!mouseConstraint.bodyB) {
                for (i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    // Check if clicked or dragged
                    if (click === true) {
                        if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
                            var bodyUrl = body.url;
                            // console.log("Body.Url >> " + bodyUrl);
                            // Hyperlinking feature
                            if (bodyUrl != undefined) {
                                //window.location.href = bodyUrl;
                                window.open(bodyUrl, '_blank');
                                // console.log("Hyperlink was opened");
                            }
                            break;
                        }
                    }
                }
            }
        });

        // run the engine
        Engine.run(engine);

        // run the renderer
        Render.run(render);

    }

    updateSize();

    window.addEventListener('resize', updateSize);

}

document.addEventListener("DOMContentLoaded", function () {
    let canvasContainer = document.getElementById("matter-box");

    let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startSimulation();
            observer.disconnect();
        }
    });

    observer.observe(canvasContainer);
});

// window.addEventListener("resize", function () {

//     let parent = document.getElementById("matter-box");
//     let secondLastChild = parent.lastElementChild?.previousElementSibling;
//     if (secondLastChild) {
//         secondLastChild.remove();
//     }
//     let lastChild = parent.lastElementChild;
//     if (lastChild) {
//         lastChild.remove();
//     }

//     requestAnimationFrame(startSimulation);

// });

