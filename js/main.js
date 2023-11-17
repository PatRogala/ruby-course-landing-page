import * as THREE from 'https://cdn.skypack.dev/three@0.124.0';
import {
  RGBELoader
} from 'https://cdn.skypack.dev/three@0.124.0/examples/jsm/loaders/RGBELoader.js';
import {
  OBJLoader
} from 'https://cdn.skypack.dev/three@0.134.0/examples/jsm/loaders/OBJLoader.js';

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true,
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var scene = new THREE.Scene();

// create a new RGBELoader to import the HDR
const hdrEquirect = new RGBELoader()
  // add your HDR //
  .setPath('https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/')
  .load('ml_gradient_freebie_01.hdr', function () {

    hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
  });
scene.environment = hdrEquirect;

// add Fog to the scene - if too dark go lower with the second value
scene.fog = new THREE.FogExp2(0x11151c, 0.15);

// group for the camera and the light
var group = new THREE.Group();
scene.add(group);

const pointlight = new THREE.PointLight(0x85ccb8, 7.5, 20);
pointlight.position.set(0, 3, 2);
group.add(pointlight);

const pointlight2 = new THREE.PointLight(0x9f85cc, 7.5, 20);
pointlight2.position.set(0, 3, 2);
group.add(pointlight2);

// create the camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
// add the camera to the group
group.add(camera);

const material1 = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0,
  metalness: 0.5,
  envMapIntensity: 10
});

// Load the model
const objloader = new OBJLoader();
objloader.load(
  './assets/ruby.obj',
  (object) => {
    object.children[0].material = material1;
    object.scale.setScalar(20);
    object.position.set(0, -0.25, 0);
    group.add(object);
  },
);

function update() {
  // rotate the group to simulate the rotation of the HDR
  group.rotation.y += 0.01;
}

function animate() {
  update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);