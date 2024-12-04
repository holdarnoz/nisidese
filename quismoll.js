import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

const noop$2 = () => {};

// Setup sphere if needed; otherwise, use noop
const createSphere = (radius, widthSegments, heightSegments) => {
  return new Mesh(
    new SphereGeometry(radius, widthSegments, heightSegments),
    new MeshBasicMaterial({ color: 0x00ff00 })
  );
};

const config = {
  sphere: process.env.USE_SPHERE ? createSphere : noop$2,
};

// Usage
const sphereObject = config.sphere(5, 32, 32); // If noop$2, it will do nothing
if (sphereObject instanceof Mesh) {
  scene.add(sphereObject);  // Add to scene if it's a valid mesh
}
