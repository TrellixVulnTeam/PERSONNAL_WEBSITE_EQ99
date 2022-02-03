import { MathUtils, Points } from "three";
import { PointsMaterial } from "three";
import { TextureLoader } from "three";
import { Clock } from "three";
import { Material } from "three";
import { Group } from "three";
import { Float32BufferAttribute } from "three";
import {
  Mesh,
  MeshNormalMaterial,
  BoxBufferGeometry,
  PerspectiveCamera,
  AxesHelper,
  Scene,
  WebGLRenderer,
  BufferGeometry,
  FogExp2
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../styles.scss";

const textureLoader = new TextureLoader();
const circleTexture = textureLoader.load ("/circle.png");

const scene = new Scene();
scene.fog = new FogExp2( 0x424242, 0.35 );
const count = 5000;
const distance = 2;


// scene.add(new AxesHelper());

const camera = new PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5;
scene.add(camera);

const points = new Float32Array(count * 3);
for (let i =0; i < points.length; i++){
  points[i] = MathUtils.randFloatSpread(distance*2);
  points[i+1] = MathUtils.randFloatSpread(distance*2);;
  points[i+2] = MathUtils.randFloatSpread(distance*2);;
}

const geometry = new BufferGeometry();
geometry.setAttribute('position', new Float32BufferAttribute(points, 3));
const pointMaterial = new PointsMaterial({
  color: 0xffa500,
  size: 0.05,
  map: circleTexture,
  transparent: true,
  sizeAttenuation: true, 
  alphaTest: 0.1,
})

const pointsObject = new Points(geometry, pointMaterial);
scene.add(pointsObject);
const group = new Group();
group.add(pointsObject);

scene.add(group);

const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true,
});

renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
const clock = new Clock();



renderer.render(scene, camera);

function tick() {
  const time = clock.getElapsedTime();
  group.rotation.y = time * 0.05;
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(tick);
}

tick();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
