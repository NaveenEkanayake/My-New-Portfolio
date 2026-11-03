/**
 * PortfolioCanvas.tsx
 *
 * Combined R3F Canvas that holds both the ThreeCanvas scene elements
 * AND the FloatingCharacter — so we only mount one Canvas for the
 * entire portfolio (avoids WebGL context limit issues).
 */

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, Float } from "@react-three/drei"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import FloatingCharacter from "./FloatingCharacter"

/* ─── Floating particle field ─── */
function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 100

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 38
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.025
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.012) * 0.08
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color="#4ade80" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

/* ─── Glowing torus ring ─── */
function GlowRing({ position, color = "#22c55e", radius = 2.5, speed = 0.4 }: {
  position: [number, number, number]; color?: string; radius?: number; speed?: number
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
        <torusGeometry args={[radius, 0.028, 16, 80]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} transparent opacity={0.65} />
      </mesh>
    </Float>
  )
}

/* ─── Floating DNA-like helix ─── */
function HelixOrb({ idx, total, radius = 1.8, color = "#4ade80" }: {
  idx: number; total: number; radius?: number; color?: string
}) {
  const ref = useRef<THREE.Mesh>(null)
  const baseAngle = (idx / total) * Math.PI * 2
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * 0.5 + baseAngle
    ref.current.position.x = -7 + Math.cos(t) * radius
    ref.current.position.y = -3 + (idx / total) * 6
    ref.current.position.z = -6 + Math.sin(t) * 0.6
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.09, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} />
    </mesh>
  )
}

/* ─── Floating cube grid ─── */
function FloatingCubeGrid() {
  const positions: [number, number, number][] = []
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      positions.push([6.5 + x * 0.55, y * 0.55 - 2, -6])
    }
  }
  return (
    <>
      {positions.map((pos, i) => (
        <Float key={i} speed={1 + i * 0.1} floatIntensity={0.3} rotationIntensity={0.4}>
          <mesh position={pos}>
            <boxGeometry args={[0.22, 0.22, 0.22]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={0.6}
              wireframe={i % 3 === 0}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

/* ─── Nebula sphere blobs ─── */
function NebulaSphere({ position, color, size }: {
  position: [number, number, number]; color: string; size: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) ref.current.scale.setScalar(size + Math.sin(clock.getElapsedTime() * 0.4) * 0.06)
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial color={color} transparent opacity={0.035} roughness={1} />
    </mesh>
  )
}

/* ─── Main scene ─── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <pointLight position={[5, 8, 3]} color="#22c55e" intensity={5} distance={35} />
      <pointLight position={[-8, 4, -4]} color="#22d3ee" intensity={3} distance={28} />
      <pointLight position={[0, -4, 8]} color="#7c3aed" intensity={2} distance={22} />

      <Stars radius={65} depth={35} count={2800} factor={3.5} saturation={0} fade speed={0.5} />

      <ParticleField />

      {/* grid floor */}
      <gridHelper args={[70, 45, "#0a2e12", "#071c0c"]} position={[0, -9, 0]} />

      {/* nebula */}
      <NebulaSphere position={[-7, 2, -9]} color="#22c55e" size={4.5} />
      <NebulaSphere position={[8, -1, -11]} color="#22d3ee" size={4} />
      <NebulaSphere position={[0, 6, -13]} color="#7c3aed" size={5.5} />
      <NebulaSphere position={[-2, -5, -7]} color="#4ade80" size={3} />

      {/* decorative rings */}
      <GlowRing position={[5.5, 2.5, -7]} color="#22c55e" radius={2.6} speed={0.3} />
      <GlowRing position={[-6.5, -0.5, -9]} color="#22d3ee" radius={2} speed={0.22} />
      <GlowRing position={[1.5, -4.5, -5]} color="#4ade80" radius={1.5} speed={0.48} />

      {/* helix orbiting orbs on left side */}
      {Array.from({ length: 12 }, (_, i) => (
        <HelixOrb key={i} idx={i} total={12} radius={1.6} color={i % 2 === 0 ? "#22c55e" : "#22d3ee"} />
      ))}

      {/* floating cube grid on right */}
      <FloatingCubeGrid />

      {/* The character travels here */}
      <FloatingCharacter />
    </>
  )
}

/* ─── Export ─── */
export default function PortfolioCanvas() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 65 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
