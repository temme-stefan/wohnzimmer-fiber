import {Canvas, extend} from "@react-three/fiber";
import Room from "./Room.js";
import CameraControls from "./CameraControls.js";



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