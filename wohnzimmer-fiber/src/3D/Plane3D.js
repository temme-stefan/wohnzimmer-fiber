import {Vector3, Vector2, Plane, Quaternion} from "three";


function Plane3D({
                     material = (<meshStandardMaterial color={"blue"}/>),
                     size = new Vector2(1, 1),
                     plane = new Plane(),
                     offset = new Vector3(),
                     ...others
                 }) {
    const position = offset.add(plane.coplanarPoint(new Vector3()));
    const quaternion = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), plane.normal);
    console.log(material,size,plane,others,position,quaternion);
    return (
        <mesh position={position} quaternion={quaternion} {...others}>
            <planeBufferGeometry args={[size.x, size.y,1,1]}></planeBufferGeometry>
            {material}
        </mesh>
    );
}

export default Plane3D;