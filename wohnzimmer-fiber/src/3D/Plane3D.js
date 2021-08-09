import {Vector3, Vector2, Plane, Quaternion} from "three";


function Plane3D({
                     material = (<meshBasicMaterial color={"pink"}/>),
                     size = new Vector2(1, 1),
                     plane = new Plane(),
                     ...others
                 }) {
    const position = plane.coplanarPoint(new Vector3());
    const quaternion = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), plane.normal);
    return (
        <mesh position={position} quaternion={quaternion} {...others}>
            <planeBufferGeometry args={[size.x, size.y]}></planeBufferGeometry>
            {material}
        </mesh>
    );
}

export default Plane3D;