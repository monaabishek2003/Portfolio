import { Suspense,useEffect,useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,PositionPoint,Preload,SoftShadows,useGLTF } from '@react-three/drei';
import { Camera } from "three";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />
      <pointLight
      intensity={1} 
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile? 0.6:0.75}
        position={isMobile ? [0,-4,-0.7]:[0,-4.25,-1.5]}
        rotation={isMobile ? [-0.01,0.8,-0.1]:[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile,setisMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    
    setisMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event)=>{
      setisMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  })
  return(
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}    
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;