import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0070f3,
      metalness: 0.7,
      roughness: 0.4,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animate the cube
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
      {/* Text content */}
      <div className="absolute z-10 text-center text-white">
        <h1 className="text-5xl font-bold">
        
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          
        </p>
        <button className="px-8 py-3 mt-6 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500">
          
        </button>
      </div>

      {/* 3D Canvas */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
    </section>
  );
};

export default Hero;
