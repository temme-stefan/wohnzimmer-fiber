import Plane3D from "./Plane3D.js";
import {Plane, Vector2, Vector3} from "three";

export default function Room({width = 4, height = 3, depth = 6}) {
    return (
        <group>
            <Plane3D
                plane={new Plane(new Vector3(0, 1, 0))}
                size={new Vector2(width, depth)}
            />
            <Plane3D
                plane={new Plane(new Vector3(0, -1, 0),height)}
                size={new Vector2(width, depth)}
            />
            <Plane3D
                plane={new Plane(new Vector3(0,0,1),depth/4)}
                size={new Vector2(width,height)}
                offset={new Vector3(0,height/2,0)}
            />
            <Plane3D
                plane={new Plane(new Vector3(0,0,-1),depth/4)}
                size={new Vector2(width,height)}
                offset={new Vector3(0,height/2,0)}
            />
            <Plane3D
                plane={new Plane(new Vector3(1,0,0),width/4)}
                size={new Vector2(depth,height)}
                offset={new Vector3(0,height/2,0)}
            />
            <Plane3D
                plane={new Plane(new Vector3(-1,0,0),width/4)}
                size={new Vector2(depth,height)}
                offset={new Vector3(0,height/2,0)}
            />
        </group>
    );

}