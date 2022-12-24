import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';

export function loadGLTFModel(
    scene,
    glbPath,
    options = {receiveShadow: true, castShadow: true}
){
    const t1 = gsap.timeline()
    const {receiveShadow, castShadow} = options;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            (gltf) => {
                const obj = gltf.scene
                obj.name = 'desktop'
                obj.scale.set(0.4,0.4,0.4)
                obj.position.y = 0;
                obj.position.x = 5;
                obj.receiveShadow = true
                obj.castShadow = true

                scene.add(obj)

                t1.to(obj.position, {x:1.2, y:-0.5, z:-3, duration:3})
                t1.to(obj.position, {y:Math.PI * 2 * 2.3, duration:3})

                obj.traverse(function(child){
                    if(child.isMesh){
                        child.castShadow = true
                        child.receiveShadow = true
                    }
                });
                resolve(obj)
            },
            undefined,
            function(error){
                reject(error)
            }
        );
    });
}