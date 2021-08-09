import Plane3D from "./Plane3D.js";
import {Plane, Vector2, Vector3} from "three";
export default function Room({width=4,height=3,depth=6}){


    return (
        <Plane3D
            plane={new Plane(new Vector3(0,1,0))}
            size={new Vector2(width,depth)}
        />
    );

}