import {Canvas} from "@react-three/fiber";
import Room from "./Room.js";

export default function STAGE(){

    return (
        <Canvas>
            <ambientLight power={500}/>
            <spotLight intensity={1} power={50} position={[0,3,4]}/>
            <spotLight intensity={0.01} power={150} position={[2,3,5]}/>
            <spotLight intensity={0.01} power={150} position={[2,3,1]}/>
            <Room/>
        </Canvas>
    );

}