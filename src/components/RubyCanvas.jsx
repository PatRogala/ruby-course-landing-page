import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"

const Ruby = ({ isMobile }) => {
  const ruby = useGLTF('./low_poly_ruby/scene.gltf')

  return (
    <>
      <mesh>
        <pointLight intensity={200000} position={[0, 2, -10]} />
        <pointLight intensity={200000} position={[0, -2, 10]} />
        <primitive object={ruby.scene} scale={ isMobile ? 0.5 : 1 } position={ isMobile ? [0.5, -0.5, 0] : [0.9, -1, 0]} rotation={[0, 0.8, 1]} />
      </mesh>
    </>
  )
}

const RubyCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate />
        <Ruby isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default RubyCanvas