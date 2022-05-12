import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  // 장면
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x004fff)

  // 카메라
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 3

  //캔버스
  const canvas = document.querySelector('#first-three-js')

  // 렌더러
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight) //캔버스 렌더링 사이즈 지정

  //메쉬
  const geometry01 = new THREE.BoxGeometry(0.5, 0.5, 0.5)
  const meterial01 = new THREE.MeshStandardMaterial({ color: 0xff0000 })
  const obj01 = new THREE.Mesh(geometry01, meterial01)
  obj01.position.x = -1
  scene.add(obj01)

  //메쉬2
  const geometry02 = new THREE.ConeGeometry(0.4, 0.7, 6)
  const meterial02 = new THREE.MeshStandardMaterial({ color: 0xff0000 })
  const obj02 = new THREE.Mesh(geometry02, meterial02)

  scene.add(obj02)

  //메쉬3
  const geometry03 = new THREE.IcosahedronGeometry(0.4, 0)
  const meterial03 = new THREE.MeshStandardMaterial({ color: 0xff0000 })
  const obj03 = new THREE.Mesh(geometry03, meterial03)
  obj03.position.x = 1
  scene.add(obj03)

  function render(time) {
    time *= 0.0005 // convert time to seconds

    obj01.rotation.y = time
    obj02.rotation.y = time
    obj03.rotation.y = time

    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)

  //반응형 처리
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onWindowResize)
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
