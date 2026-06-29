import React, { useRef, useEffect } from 'react';
import './ParticleCanvas.css';

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let particles: any[] = [];
      const particleCount = 150;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        canvas: HTMLCanvasElement;

        constructor(canvas: HTMLCanvasElement) {
          this.canvas = canvas;
          this.x = Math.random() * this.canvas.width;
          this.y = Math.random() * this.canvas.height;
          this.size = Math.random() * 2 + 1; // Slightly smaller particles
          this.speedX = Math.random() * 0.8 - 0.4;
          this.speedY = Math.random() * 0.8 - 0.4;
        }

        update(canvas: HTMLCanvasElement) {
          if (
            this.x > canvas.width + 10 ||
            this.x < -10 ||
            this.y > canvas.height + 10 ||
            this.y < -10
          ) {
            // Reset particle to a position just off-screen for smooth entry
            const edge = Math.floor(Math.random() * 4);
            switch (edge) {
              case 0: // Top
                this.x = Math.random() * canvas.width;
                this.y = -5;
                break;
              case 1: // Right
                this.x = canvas.width + 5;
                this.y = Math.random() * canvas.height;
                break;
              case 2: // Bottom
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 5;
                break;
              case 3: // Left
                this.x = -5;
                this.y = Math.random() * canvas.height;
                break;
            }
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.8 - 0.4;
            this.speedY = Math.random() * 0.8 - 0.4;
          }

          this.x += this.speedX;
          this.y += this.speedY;
        }

        draw() {
          if (ctx) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
          }
        }
      }

      const init = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(canvas));
        }
      };

      const connect = () => {
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
          for (let b = a; b < particles.length; b++) {
            const distance =
              (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
              (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);

            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
              opacityValue = 1 - distance / 20000;
              if (ctx) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
              }
            }
          }
        }
      };

      const animate = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particles.length; i++) {
            particles[i].update(canvas);
            particles[i].draw();
          }
          connect();
          requestAnimationFrame(animate);
        }
      };

      init();
      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleCanvas;
