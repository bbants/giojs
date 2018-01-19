/**
 * Created by ss on 2018/1/8.
 */

import { EarthSurfaceShader } from "../shaders/EarthSurfaceShader.js";

function Sphere ( controller ) {

    var earthSurfaceShader = new EarthSurfaceShader( controller );

    var shaderMaterial = new THREE.ShaderMaterial( {

        uniforms: earthSurfaceShader.uniforms,
        vertexShader: earthSurfaceShader.vertexShader,
        fragmentShader: earthSurfaceShader.fragmentShader

    } );

    var sphere = new THREE.Mesh( new THREE.SphereGeometry( 100, 40, 40 ), shaderMaterial );
    sphere.doubleSided = false;
    sphere.rotation.x = Math.PI;
    sphere.rotation.y = -Math.PI / 2;
    sphere.rotation.z = Math.PI;

    sphere.name = "sphere";

    sphere.earthSurfaceShader = earthSurfaceShader;

    return sphere;

}

export { Sphere }