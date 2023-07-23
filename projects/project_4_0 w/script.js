"use strict";

import { OrbitControls } from "../lib/OrbitControls.js";
import { GLTFLoader } from "../loaders/GLTFLoader.js";

function init() {

    let canvas;
    let w;
    let h;

    let scene;
    let camera;
    let renderer;

    let textureLoader;
    let fontLoader;
    let gltfLoader;

    let controls;

    function createCanvas() {
        canvas = document.getElementById("canvas");
        w = window.innerWidth;
        h = window.innerHeight;
        // canvas.width = w;
        // canvas.height = h ; 
    }

    function createScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050520);
        
        scene.fog = new THREE.Fog(0x050520, 0.1, 15)        
    }

    function createCamera() {
        camera = new THREE.PerspectiveCamera(70, w / h, 0.1, 10000);
        camera.position.set( 0, 2.0, 7);
        // camera.position.z = 5;
        // camera.lookAt(new THREE.Vector3(10, 20, 0)); 
       
    }

    function creatRenderer() {
        // let renderer = new THREE.WebGLRenderer({canvas: canvas});
        renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        renderer.setSize(w, h);        
        renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.gammaFactor = 1.2;
        renderer.gammaOutput = true;




        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;



        renderer.physicallyCorrectLights = true;

        // renderer.preserveDrawingBuffer = true;
        // renderer.alpha = true;

        // renderer.autoClearColor = false;
    }



    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight ;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener('resize', onWindowResize);

    function createControls() {
        controls = new OrbitControls(camera, renderer.domElement);
        // let controls = new OrbitControls(camera, canvas);
        controls.maxPolarAngle = Math.PI / 2 - 0.001;
        // controls.target(0, 0, 0); - не работает
        controls.target.set(3, 2, 0);
    }

    function createLoader() {
        textureLoader = new THREE.TextureLoader();
        fontLoader = new THREE.FontLoader();
        // gltfLoader = new THREE.GLTFLoader();
        gltfLoader = new GLTFLoader();
    }

    let light_Directional_1;   
    let light_Ambient_1;
    let light_HemisphereLight_1;


    function createLights() {
        // DirectionalLight - представляет источник прямого (направленного) освещения — поток параллельных лучей в направлении объекта 
        // AmbientLight - представляет общее освещение, применяемое ко всем объектам сцены.   
        // HemisphereLight - представляет полусферическое освещение        
        // AreaLight - представляет пространственный источник света, имеющий размеры — ширину и высоту и ориентированный в пространстве   
        // SpotLight - представляет прожектор



        light_Directional_1 = new THREE.DirectionalLight(0xffffff, 5, 100);
        light_Directional_1.position.set(0, 10, 0);
        scene.add(light_Directional_1);



        light_Directional_1.castShadow = true;


        light_Directional_1.shadow.camera.left = -400;
        light_Directional_1.shadow.camera.right = 400;
        light_Directional_1.shadow.camera.top = 400;
        light_Directional_1.shadow.camera.bottom = -400;
        light_Directional_1.shadow.camera.near = 1;
        light_Directional_1.shadow.camera.far = 1000;
      
        // Задаем разрешение теней. Учтите, что чем
        // оно больше, тем ниже производительность.
        light_Directional_1.shadow.mapSize.width = 2048;
        light_Directional_1.shadow.mapSize.height = 2048;



    
        // light_Ambient_1 = new THREE.AmbientLight( 0xffffff , 0.1);     
        // scene.add(light_Ambient_1); 

        light_HemisphereLight_1 = new THREE.HemisphereLight(0xddeeff, 0x202020, 5);
        // light_HemisphereLight_1.position.set(100, 100, 0);        
        scene.add(light_HemisphereLight_1);
        // light_HemisphereLight_1.castShadow = true;
    }

    let mesh_cube;
    let mesh_cube_1;
    let mesh_cube_2;
    let mesh_cube_3;
    let mesh_cube_4;

    let mesh_plane;
    let mesh_text;



    const mixers = [];



    function createMeshs() {

        // let Map = textureLoader.load("img/name.png");
        // let bumpMap = textureLoader.load("img/name.png");
        // let normalMap = textureLoader.load("img/name.jpg");
        // let displacementMap = textureLoader.load("img/name.png");
        // let emissiveMap = textureLoader.load("img/name.jpg");
        // let alphaMap = textureLoader.load("img/name.png");
        // let aoMap = THREE.ImageUtils.loadTexture("img/name.jpg");


        // MeshBasicMaterial — просто назначает любой цвет примитиву
        // MeshNormalMaterial — материал со свойствами shading, совмещает в себе смешение цветов.
        // MeshDepthMaterial — материал со свойствами wireframe, выглядит черно-белым
        // MeshLambertMaterial — материал для не блестящих поверхностей
        // MeshPhongMaterial — материал для блестящих поверхностей
        // MeshFaceMaterial — может комбинировать другие виды материалов назначать на каждый полигон свой материал.


        // let material = new THREE.MeshStandardMaterial( {color: "skyblue"} );


        // let material = [
        //     new THREE.MeshStandardMaterial({map: texture}),
        //     new THREE.MeshStandardMaterial({map: texture}),
        //     new THREE.MeshStandardMaterial({map: texture}),
        //     new THREE.MeshStandardMaterial({map: texture}),
        //     new THREE.MeshStandardMaterial({map: texture}),
        //     new THREE.MeshStandardMaterial({map: texture})
        // ];


        // material.bumpMap = plane_bumpMap;
        // material.side = 2;


        // mesh.material.map = myMap;


        let texture_plane = textureLoader.load('img/texture_1.jpg');
        texture_plane.encoding = THREE.sRGBEncoding;
        texture_plane.anisotropy = 16;
        texture_plane.wrapS = texture_plane.wrapT = THREE.RepeatWrapping;
        texture_plane.repeat.set(5, 5);

        let material_plane = new THREE.MeshStandardMaterial();
        material_plane.map = texture_plane;

        let geometry_plane = new THREE.PlaneBufferGeometry(10, 10,10,10);

        mesh_plane = new THREE.Mesh(geometry_plane, material_plane);
        mesh_plane.rotateX( - Math.PI / 2);

        scene.add(mesh_plane);

        mesh_plane.castShadow = true;
        mesh_plane.receiveShadow = true; 




        let texture_cub = textureLoader.load('img/texture_2.jpg');
        texture_cub.encoding = THREE.sRGBEncoding;
        texture_cub.anisotropy = 16;
        texture_cub.wrapS = texture_cub.wrapT = THREE.RepeatWrapping;
        texture_cub.repeat.set(1, 1);
        texture_cub.rotation = THREE.MathUtils.degToRad(0);
        // texture_ground.center.set(.5, .5);
        // texture_ground.offset.set(0.5, 0.25);
          
        let material_cub = new THREE.MeshPhongMaterial({ map: texture_cub });

        
        // material_cub.transparent = true;       
        // material_cub.opacity = 0.5;
        // material_cub.alphaTest = 1.0;


        let geometry_cub = new THREE.BoxBufferGeometry(1.0, 1.0, 1.0, 10, 10, 10);

        mesh_cube = new THREE.Mesh(geometry_cub, material_cub);
        mesh_cube.rotation.y = 0.7;
        mesh_cube.position.y = 0.9;

        scene.add(mesh_cube);


        mesh_cube.castShadow = true;
        mesh_cube.receiveShadow = true;
    


        // fontLoader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

        //     var geometry = new THREE.TextGeometry( 'Hello three.js!', {
        //         font: font,
        //         size: 80,
        //         height: 5,
        //         curveSegments: 12,
        //         bevelEnabled: true,
        //         bevelThickness: 10,
        //         bevelSize: 8,
        //         bevelOffset: 0,
        //         bevelSegments: 5
        //     } );
        // } );


        let texture_cub_1 = textureLoader.load('img/texture_2.jpg');
        texture_cub_1.encoding = THREE.sRGBEncoding;
        texture_cub_1.anisotropy = 16;
        texture_cub_1.wrapS = texture_cub_1.wrapT = THREE.RepeatWrapping;
        texture_cub_1.repeat.set(1, 1);
        texture_cub_1.rotation = THREE.MathUtils.degToRad(0);
        // texture_ground.center.set(.5, .5);
        // texture_ground.offset.set(0.5, 0.25);
          
        let material_cub_1 = new THREE.MeshPhongMaterial({ map: texture_cub_1 });

        let geometry_cub_1 = new THREE.BoxBufferGeometry(0.7, 0.7, 0.7, 10, 10, 10);

        mesh_cube_1 = new THREE.Mesh(geometry_cub_1, material_cub_1);
        mesh_cube_1.position.set(2.5, 1, 0);
        mesh_cube_1.rotation.y = 0.7;
        mesh_cube_1.position.y = 1;

        scene.add(mesh_cube_1);


        let texture_cub_2 = textureLoader.load('img/texture_2.jpg');
        texture_cub_2.encoding = THREE.sRGBEncoding;
        texture_cub_2.anisotropy = 16;
        texture_cub_2.wrapS = texture_cub_2.wrapT = THREE.RepeatWrapping;
        texture_cub_2.repeat.set(1, 1);
        texture_cub_2.rotation = THREE.MathUtils.degToRad(0);
        // texture_ground.center.set(.5, .5);
        // texture_ground.offset.set(0.5, 0.25);
          
        let material_cub_2 = new THREE.MeshPhongMaterial({ map: texture_cub_2 });

        let geometry_cub_2 = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5, 10, 10, 10);

        mesh_cube_2 = new THREE.Mesh(geometry_cub_2, material_cub_2);
        mesh_cube_2.position.set(4, 1, 0);
        mesh_cube_2.rotation.y = 0.7;
        mesh_cube_2.position.y = 1;

        scene.add(mesh_cube_2);


        mesh_cube_3 = mesh_cube_2.clone();
        mesh_cube_3.position.set(5.5, 1, 0);
        scene.add(mesh_cube_3); 
        
        mesh_cube_4 = mesh_cube_2.clone();
        mesh_cube_4.position.set(7.0, 1, 0);
        scene.add(mesh_cube_4);       


        const train = new THREE.Group();
        scene.add( train );

        train.add(mesh_cube_1, mesh_cube_2, mesh_cube_3, mesh_cube_4);

        train.position.set(3, 3, 0);
        train.rotateY(45)

    }

    function createModels() {


        function loadModels() {


            const onLoad = ( gltf, position ) => {
          
                const model = gltf.scene.children[ 0 ];
                model.position.copy( position );
          
                const animation = gltf.animations[ 0 ];
            
                const mixer = new THREE.AnimationMixer( model );
                mixers.push( mixer );
            
                const action = mixer.clipAction( animation );
                action.play();

                scene.add( model );




                model.scale.set(0.01, 0.01, 0.01);
                      
            };

            const onProgress = () => {};
            
            const onError = ( errorMessage ) => { console.log( errorMessage ); };

            const parrotPosition = new THREE.Vector3( 3, 2.5, 0 );
            gltfLoader.load( 'models/Parrot.glb', gltf => onLoad( gltf, parrotPosition ), onProgress, onError );
            
            const flamingoPosition = new THREE.Vector3( 4, 2.5, 0 );
            gltfLoader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, flamingoPosition ), onProgress, onError );
            
            const storkPosition = new THREE.Vector3( 5, 2.5, 0 );
            gltfLoader.load( 'models/Stork.glb', gltf => onLoad( gltf, storkPosition ), onProgress, onError );
          
        }
          
        loadModels();
     
    }

    ////////////////////////////////////////////////////

    createCanvas();
    createScene();
    createCamera();
    creatRenderer();
    createControls();
    createLoader();
    createLights();
    createMeshs();

    createModels();

    ////////////////////////////////////////////////////   

    let pulse_cub = 0;

    let clock = new THREE.Clock();

    console.log(mixers)




    function update() {
       
        controls.update();




        const delta = clock.getDelta();

        for ( const mixer of mixers ) {
      
          mixer.update( delta );
      
        }

        // mixers[1].position.copy(new THREE.Vector3(0, 0, 0));





        // пульсация куба
        pulse_cub++;
        let varW = 1 + 1 * Math.sin(0.01 * pulse_cub * 5);
        // mesh_cube.scale.set(varW , varW, varW);

        // вращение куба
        // mesh_cube.rotation.x += 0.01;
        // mesh_cube.rotation.y += 0.01;
        // mesh_cube.position.y = varW;
        // mesh_cube.rotation.z += 0.01;

        mesh_cube_1.rotation.x += 0.01;
        mesh_cube_1.rotation.y += 0.012;

        mesh_cube_2.rotation.x += 0.012;
        mesh_cube_2.rotation.y += 0.01;

    }

    function render() {
        renderer.render(scene, camera);
    }

    // function animate() {
    //     requestAnimationFrame( animate );       
    //     update();
    //     render();       
    // }
    // animate();

    renderer.setAnimationLoop( () => {
        update();
        render(); 
    });
    
}

init();
