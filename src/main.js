import './styles/style.css'
import * as THREE from 'three'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: '#ff0000',
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

scene.background = new THREE.Color(0xffffff)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
