import { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Box = (props) => {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state, delta) => (ref.current.rotation.x += delta));
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
};

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#F472B6" size={0.002} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
};

const Background3D = () => {
    const { theme } = useTheme();

    return (
        <div className={`fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0B0212]' : 'bg-gray-50'}`}>
            {theme === 'dark' && (
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                </Canvas>
            )}
        </div>
    );
};

export default Background3D;
