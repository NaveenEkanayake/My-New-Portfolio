import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Float, Html } from "@react-three/drei"
import * as THREE from "three"

/* ─── Floating particle field ─── */
function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 120

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.03
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.015) * 0.1
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#4ade80"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  )
}

/* ─── Glowing torus ring ─── */
function GlowRing({ position, color = "#22c55e", radius = 2.5, speed = 0.4 }: {
  position: [number, number, number]
  color?: string
  radius?: number
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed * 0.7
      ref.current.rotation.z = clock.getElapsedTime() * speed
    }
  })
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[radius, 0.03, 16, 80]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

/* ─── Floating tech orb ─── */
function TechOrb({ position, color, label }: {
  position: [number, number, number]
  color: string
  label: string
}) {
  return (
    <Float speed={2} floatIntensity={1.2} rotationIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      <Html position={[position[0], position[1] - 0.3, position[2]]} center>
        <span style={{
          fontFamily: "monospace",
          fontSize: "9px",
          color: color,
          whiteSpace: "nowrap",
          textShadow: `0 0 8px ${color}`,
          pointerEvents: "none",
        }}>{label}</span>
      </Html>
    </Float>
  )
}

/* ─── Grid floor ─── */
function GridFloor() {
  return (
    <gridHelper
      args={[60, 40, "#0f3a1f", "#0d2d17"]}
      position={[0, -8, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

/* ─── Ambient nebula blobs ─── */
function NebulaSphere({ position, color, size }: {
  position: [number, number, number]
  color: string
  size: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.scale.setScalar(size + Math.sin(clock.getElapsedTime() * 0.5) * 0.08)
    }
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.04}
        roughness={1}
      />
    </mesh>
  )
}

/* ─── Main scene ─── */
function Scene() {
  return (
    <>
      {/* lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 8, 3]} color="#22c55e" intensity={4} distance={30} />
      <pointLight position={[-8, 4, -5]} color="#22d3ee" intensity={2.5} distance={25} />
      <pointLight position={[0, -4, 8]} color="#7c3aed" intensity={1.5} distance={20} />

      {/* stars background */}
      <Stars radius={60} depth={30} count={2500} factor={3} saturation={0} fade speed={0.6} />

      {/* particle field */}
      <ParticleField />

      {/* grid floor */}
      <GridFloor />

      {/* nebula blobs */}
      <NebulaSphere position={[-6, 2, -8]} color="#22c55e" size={4} />
      <NebulaSphere position={[7, -1, -10]} color="#22d3ee" size={3.5} />
      <NebulaSphere position={[0, 5, -12]} color="#7c3aed" size={5} />

      {/* decorative rings at various sections */}
      <GlowRing position={[5, 2, -6]} color="#22c55e" radius={2.8} speed={0.35} />
      <GlowRing position={[-6, -1, -8]} color="#22d3ee" radius={2.2} speed={0.25} />
      <GlowRing position={[2, -4, -5]} color="#4ade80" radius={1.6} speed={0.5} />

      {/* floating tech orbs */}
      <TechOrb position={[-4, 3, -4]} color="#61dafb" label="React" />
      <TechOrb position={[4.5, 1.5, -3]} color="#83cd29" label="Node.js" />
      <TechOrb position={[-3, -2, -3]} color="#ffd343" label="Python" />
      <TechOrb position={[3.5, -3, -4]} color="#512bd4" label=".NET" />
      <TechOrb position={[-5, 0.5, -5]} color="#47a248" label="MongoDB" />
      <TechOrb position={[1, 4.5, -4]} color="#2496ed" label="Docker" />
    </>
  )
}

/* ─── Export ─── */
export default function ThreeCanvas() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 65 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
