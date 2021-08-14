import {Canvas, extend, useFrame,useThree} from "@react-three/fiber";
import {useRef} from "react";
import Room from "./Room.js";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {Vector3} from "three";

extend({OrbitControls});

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
        camera,
        gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} target={camera.target} />;
};

export default function STAGE(){

    return (
        <Canvas camera={{position:[-1.5,1.8,5], target:[0,1,0]}}>
            <CameraControls/>
            <ambientLight power={500}/>
            <spotLight intensity={1} power={50} position={[0,3,4]} />
            <spotLight intensity={0.01} power={150} position={[2,3,5]}/>
            <spotLight intensity={0.01} power={150} position={[2,3,1]}/>
            <Room position={[0,0,0]}/>
        </Canvas>
    );

}