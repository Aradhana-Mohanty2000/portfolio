import { useEffect, useRef } from "react";

function AnimatedBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [], animId;
    let t = 0;

    const blobs = [
      { x: 0.15, y: 0.2, r: 320, color: "139,92,246", phase: 0 },
      { x: 0.85, y: 0.7, r: 260, color: "99,102,241", phase: 2 },
      { x: 0.5,  y: 0.5, r: 210, color: "34,211,238", phase: 4 },
    ];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
    }

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x     = Math.random() * W;
        this.y     = Math.random() * H;
        this.r     = Math.random() * 1.4 + 0.3;
        this.vx    = (Math.random() - 0.5) * 0.28;
        this.vy    = (Math.random() - 0.5) * 0.28;
        this.alpha = Math.random() * 0.55 + 0.08;
        this.color = Math.random() > 0.5 ? "139,92,246" : "34,211,238";
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    function initParticles() {
      const count = Math.floor((W * H) / 11000);
      particles = Array.from({ length: count }, () => new Particle());
    }

    function drawBlobs() {
      blobs.forEach((b) => {
        const cx = b.x * W + Math.sin(t * 0.35 + b.phase) * 80;
        const cy = b.y * H + Math.cos(t * 0.28 + b.phase) * 60;
        const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
        g.addColorStop(0, `rgba(${b.color},0.08)`);
        g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      t += 0.007;
      drawBlobs();
      drawLines();
      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(loop);
    }

    resize();
    loop();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default AnimatedBackground;