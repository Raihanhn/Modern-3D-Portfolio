import React from 'react'
import {useEffect, useState, useRef} from 'react'
import * as THREE from 'three'

const ScrollModelAnimation = () => {
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const refContainer = useRef()

  useEffect(() =>{
    const parameters = {
      materialColor: "#ffeded"
    };
    const {current:container} = refContainer;

    if(container && !renderer){
      //Texture
      const textureLoader = new THREE.TextureLoader()
      const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
      //Material
      const material = new THREE.MeshToonMaterial({
        color:parameters.materialColor,
        gradientMap: gradientTexture,
      });

      //Object
      const objectDistance = 4
      const mesh1 = new THREE.Mesh(
        new THREE.TorusGeometry(1,0.4,16,60),
        material
      );

      const mesh2 = new THREE.Mesh(new THREE.SphereGeometry(1), material);
      const mesh3 = new THREE.Mesh(new THREE.SphereGeometry(1), material);
      const mesh4 = new THREE.Mesh(new THREE.SphereGeometry(1), material);
      const mesh5 = new THREE.Mesh(new THREE.SphereGeometry(1), material);

      mesh1.position.x = 3;
      mesh2.position.x = -3;
      mesh3.position.x = 3;
      mesh4.position.x = -3;
      mesh5.position.x = 3;

      mesh1.position.y = -objectDistance * 0
      mesh2.position.y = -objectDistance * 1 
      mesh3.position.y = -objectDistance * 2
      mesh4.position.y = -objectDistance * 3 
      mesh5.position.y = -objectDistance * 4

      scene.add(mesh1, mesh2, mesh3, mesh4, mesh5);
      const sectionMeshes = [mesh1, mesh2, mesh3, mesh4, mesh5];

      //Lights
      const directioanlLight = new THREE.DirectionalLight(0xffffff, 1);
      directioanlLight.position.set(1, 1, 0);
      directioanlLight.castShadow = true;
      scene.add(directioanlLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
    }
  },[]);

  return (
    <div>ScrollModelAnimation</div>
  )
}

export default ScrollModelAnimation