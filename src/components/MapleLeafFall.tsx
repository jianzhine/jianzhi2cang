import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MapleLeafFall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 创建场景
    const scene = new THREE.Scene();
    
    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // 枫叶几何体
    const createMapleLeafGeometry = () => {
      const geometry = new THREE.ShapeGeometry(
        new THREE.Shape([
          new THREE.Vector2(0, 0),
          new THREE.Vector2(1, 0.3),
          new THREE.Vector2(0.7, 1),
          new THREE.Vector2(0, 0.7),
          new THREE.Vector2(-0.7, 1),
          new THREE.Vector2(-1, 0.3),
          new THREE.Vector2(0, 0),
        ])
      );
      return geometry;
    };

    // 枫叶材质
    const createMapleLeafMaterial = (color: THREE.Color) => {
      return new THREE.MeshBasicMaterial({ 
        color, 
        side: THREE.DoubleSide 
      });
    };

    // 枫叶颜色
    const leafColors = [
      new THREE.Color(0xFF6020), // 枫叶红
      new THREE.Color(0xFF9966), // 橙红
      new THREE.Color(0xFF8000), // 金色
    ];

    // 创建枫叶
    const leaves: THREE.Mesh[] = [];
    const leafCount = 50;

    for (let i = 0; i < leafCount; i++) {
      const geometry = createMapleLeafGeometry();
      const material = createMapleLeafMaterial(leafColors[Math.floor(Math.random() * leafColors.length)]);
      const leaf = new THREE.Mesh(geometry, material);

      // 随机位置
      leaf.position.x = (Math.random() - 0.5) * 10;
      leaf.position.y = Math.random() * 10;
      leaf.position.z = (Math.random() - 0.5) * 5;

      // 随机旋转
      leaf.rotation.x = Math.random() * Math.PI;
      leaf.rotation.y = Math.random() * Math.PI;
      leaf.rotation.z = Math.random() * Math.PI;

      // 随机缩放
      const scale = 0.1 + Math.random() * 0.2;
      leaf.scale.set(scale, scale, scale);

      // 添加到场景
      scene.add(leaf);
      leaves.push(leaf);
    }

    // 动画
    const animate = () => {
      requestAnimationFrame(animate);

      // 更新枫叶位置和旋转
      leaves.forEach((leaf) => {
        // 下落
        leaf.position.y -= 0.01 + Math.random() * 0.02;
        
        // 旋转
        leaf.rotation.x += 0.01 + Math.random() * 0.02;
        leaf.rotation.y += 0.01 + Math.random() * 0.02;

        // 重置位置
        if (leaf.position.y < -5) {
          leaf.position.y = 5;
          leaf.position.x = (Math.random() - 0.5) * 10;
        }
      });

      renderer.render(scene, camera);
    };

    // 处理窗口大小变化
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // 清理
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      leaves.forEach(leaf => {
        scene.remove(leaf);
        leaf.geometry.dispose();
        if (leaf.material instanceof THREE.Material) {
          leaf.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
};

export default MapleLeafFall;