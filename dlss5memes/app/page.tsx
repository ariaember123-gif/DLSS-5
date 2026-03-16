'use client';
import { useState, useRef, useCallback } from 'react';

// ─── Pixel/Star Background ───────────────────────────────────────────────────
function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: Math.random() > 0.7 ? '#f5c518' : '#fff',
            borderRadius: '50%',
            opacity: 0.3 + Math.random() * 0.5,
            animation: `twinkle ${s.duration}s ${s.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle { from { opacity: 0.1; } to { opacity: 0.8; } }
      `}</style>
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const CA = '2KGmEy1MSNVUvkvXW3dzPgG6oPiEXD2NxdPte7KApump';
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(5,5,5,0.95)',
      borderBottom: '2px solid #f5c518',
      backdropFilter: 'blur(8px)',
      padding: '0 2rem',
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div className="pricedown" style={{ fontSize: '1.4rem', color: '#f5c518', textShadow: '0 0 20px #f5c518aa' }}>
        DLSS 5 MEMES
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {['About', 'Tokenomics', 'PFP Generator', 'How to Buy'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            style={{ color: '#e8e0d0', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'Orbitron, sans-serif', fontWeight: 700, letterSpacing: '1px', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f5c518')}
            onMouseLeave={e => (e.currentTarget.style.color = '#e8e0d0')}
          >
            {item.toUpperCase()}
          </a>
        ))}
        <button
          onClick={copy}
          style={{
            background: copied ? '#27ae60' : '#f5c518',
            color: '#0a0a0a',
            border: 'none',
            padding: '6px 16px',
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: '0.7rem',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
          }}
        >
          {copied ? '✓ COPIED' : 'COPY CA'}
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const CA = '2KGmEy1MSNVUvkvXW3dzPgG6oPiEXD2NxdPte7KApump';
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 50%, #050505 100%)',
      paddingTop: '80px',
    }}>
      {/* Grid floor */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
        backgroundImage: `
          linear-gradient(rgba(245,197,24,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,197,24,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: 'perspective(600px) rotateX(60deg)',
        transformOrigin: 'bottom',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(245,197,24,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Warning stripes top bar */}
      <div style={{
        position: 'absolute', top: '80px', left: 0, right: 0, height: '6px',
        background: 'repeating-linear-gradient(45deg, #f5c518 0, #f5c518 10px, #0a0a0a 10px, #0a0a0a 20px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem', maxWidth: '900px' }}>
        {/* Stars badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'rgba(245,197,24,0.1)', border: '1px solid #f5c518',
          padding: '4px 16px', marginBottom: '2rem',
          fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', letterSpacing: '3px', color: '#f5c518',
          clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
        }}>
          ⭐⭐⭐⭐⭐ &nbsp; WANTED LEVEL: MAX
        </div>

        {/* Main title */}
        <h1 className="pricedown" style={{
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          lineHeight: 1,
          marginBottom: '0.5rem',
          color: '#f5c518',
          textShadow: `
            3px 3px 0px #ff6b00,
            6px 6px 0px rgba(0,0,0,0.5),
            0 0 60px rgba(245,197,24,0.4)
          `,
          animation: 'titlePulse 3s ease-in-out infinite',
        }}>
          DLSS 5
        </h1>
        <h1 className="pricedown" style={{
          fontSize: 'clamp(2rem, 7vw, 5rem)',
          lineHeight: 1,
          marginBottom: '2rem',
          color: '#ff6b00',
          textShadow: '3px 3px 0px #c0392b, 0 0 40px rgba(255,107,0,0.4)',
        }}>
          MEMES
        </h1>

        <p style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          color: '#888',
          maxWidth: '600px', margin: '0 auto 2.5rem',
          lineHeight: 1.8, letterSpacing: '1px',
        }}>
          The most low-poly, high-octane meme coin on Solana.<br />
          San Andreas energy. PS2 aesthetics. Moon confirmed.
        </p>

        {/* CA box */}
        <div
          onClick={copy}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: '#111', border: '2px solid #f5c518',
            padding: '12px 24px', cursor: 'pointer',
            transition: 'all 0.2s',
            marginBottom: '2.5rem',
            maxWidth: '100%',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a1a1a'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#111'; }}
        >
          <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: '#f5c518', letterSpacing: '2px', flexShrink: 0 }}>CA:</span>
          <span style={{ fontFamily: 'monospace', fontSize: 'clamp(0.55rem, 1.5vw, 0.8rem)', color: '#e8e0d0', wordBreak: 'break-all' }}>{CA}</span>
          <span style={{ flexShrink: 0, fontSize: '1rem' }}>{copied ? '✅' : '📋'}</span>
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://pump.fun/coin/2KGmEy1MSNVUvkvXW3dzPgG6oPiEXD2NxdPte7KApump"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#f5c518',
              color: '#0a0a0a',
              textDecoration: 'none',
              padding: '14px 36px',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900, fontSize: '0.9rem', letterSpacing: '2px',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffd700'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f5c518'; }}
          >
            BUY ON PUMP.FUN
          </a>
          <a
            href="#pfp-generator"
            style={{
              background: 'transparent',
              color: '#f5c518',
              textDecoration: 'none',
              padding: '14px 36px',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900, fontSize: '0.9rem', letterSpacing: '2px',
              border: '2px solid #f5c518',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(245,197,24,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            🎮 GET YOUR PFP
          </a>
        </div>
      </div>

      <style>{`
        @keyframes titlePulse {
          0%, 100% { text-shadow: 3px 3px 0px #ff6b00, 6px 6px 0px rgba(0,0,0,0.5), 0 0 60px rgba(245,197,24,0.4); }
          50% { text-shadow: 3px 3px 0px #ff6b00, 6px 6px 0px rgba(0,0,0,0.5), 0 0 100px rgba(245,197,24,0.7); }
        }
      `}</style>
    </section>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    '🎮 LOW POLY HIGH GAINS', '💰 BUY DLSS5MEMES', '⭐ WANTED LEVEL MAX',
    '🚀 TO THE MOON CJ', '🔫 GROVE STREET FINANCE', '💎 DIAMOND HANDS ONLY',
    '🎮 PS2 ERA PROFITS', '🏆 RESPECT EARNED', '💰 BUY DLSS5MEMES',
    '🎯 NO CAP HOMIE', '⚡ SOLANA SPEED', '🌟 MEME COIN OF THE YEAR',
  ];
  const repeated = [...items, ...items];

  return (
    <div style={{
      background: '#f5c518', overflow: 'hidden', padding: '10px 0',
      borderTop: '2px solid #ff6b00', borderBottom: '2px solid #ff6b00',
      position: 'relative', zIndex: 2,
    }}>
      <div style={{
        display: 'flex', gap: '3rem',
        animation: 'scrollLeft 30s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Orbitron, sans-serif', fontWeight: 900,
            fontSize: '0.8rem', letterSpacing: '2px', color: '#0a0a0a',
            flexShrink: 0,
          }}>{item}</span>
        ))}
      </div>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const stats = [
    { label: 'TOTAL SUPPLY', value: '1B', icon: '🏦' },
    { label: 'BURNED', value: '0%', icon: '🔥' },
    { label: 'LIQUIDITY', value: 'LOCKED', icon: '🔒' },
    { label: 'TAX', value: '0/0', icon: '💸' },
  ];

  return (
    <section id="about" style={{
      padding: '100px 2rem',
      background: '#0a0a0a',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', letterSpacing: '4px',
            color: '#f5c518', marginBottom: '1rem',
            borderBottom: '1px solid #f5c518', paddingBottom: '6px',
          }}>
            [ MISSION BRIEFING ]
          </div>
          <h2 className="pricedown" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#f5c518',
            textShadow: '3px 3px 0 #ff6b00',
          }}>
            WHAT IS DLSS 5 MEMES?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: '#111',
              border: '2px solid #f5c518',
              padding: '2rem',
              textAlign: 'center',
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              position: 'relative',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div className="pricedown" style={{ fontSize: '2.5rem', color: '#f5c518', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: '#888', letterSpacing: '2px', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 className="pricedown" style={{ fontSize: '2.5rem', color: '#ff6b00', marginBottom: '1.5rem' }}>
              THE STORY
            </h3>
            <p style={{ color: '#aaa', lineHeight: 2, fontSize: '1rem', marginBottom: '1rem' }}>
              Born in the streets of San Andreas, DLSS 5 MEMES is the meme coin that runs on nostalgia and pure chaos. 
              PS2 graphics, infinite gains, zero taxes. Just like CJ, we started from the bottom.
            </p>
            <p style={{ color: '#aaa', lineHeight: 2, fontSize: '1rem' }}>
              Built on Solana for lightning-fast transactions. The whole hood is buying in — 
              are you gonna let CJ ride without you?
            </p>
          </div>
          <div>
            {/* Fake "wanted" card */}
            <div style={{
              background: '#111', border: '3px solid #f5c518', padding: '2rem',
              fontFamily: 'Orbitron, sans-serif',
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
            }}>
              <div style={{ color: '#f5c518', fontSize: '0.65rem', letterSpacing: '3px', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '8px' }}>
                ⚠ POLICE DEPARTMENT — WANTED
              </div>
              {[
                ['ALIAS', 'DLSS 5 MEMES'],
                ['TICKER', '$DLSS5'],
                ['CHAIN', 'SOLANA'],
                ['CHARGES', 'Mooning Without Permit'],
                ['REWARD', '10,000x or Prison'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1a1a1a' }}>
                  <span style={{ color: '#666', fontSize: '0.7rem', letterSpacing: '1px' }}>{k}</span>
                  <span style={{ color: '#e8e0d0', fontSize: '0.75rem', fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Tokenomics ───────────────────────────────────────────────────────────────
function Tokenomics() {
  const slices = [
    { label: 'Community & Memes', pct: 80, color: '#f5c518' },
    { label: 'Liquidity Pool', pct: 10, color: '#ff6b00' },
    { label: 'Dev Wallet', pct: 5, color: '#27ae60' },
    { label: 'Marketing', pct: 5, color: '#1a6fa0' },
  ];

  // Simple SVG donut
  const total = 100;
  let cumulative = 0;
  const cx = 100, cy = 100, r = 80, inner = 50;

  function describeArc(startPct: number, endPct: number) {
    const startAngle = (startPct / total) * 360 - 90;
    const endAngle = (endPct / total) * 360 - 90;
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const startI = polarToCartesian(cx, cy, inner, endAngle);
    const endI = polarToCartesian(cx, cy, inner, startAngle);
    const largeArc = endPct - startPct > 50 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} L ${endI.x} ${endI.y} A ${inner} ${inner} 0 ${largeArc} 1 ${startI.x} ${startI.y} Z`;
  }

  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  return (
    <section id="tokenomics" style={{ padding: '100px 2rem', background: '#050505' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', letterSpacing: '4px', color: '#f5c518', marginBottom: '1rem' }}>
            [ FINANCIAL INTEL ]
          </div>
          <h2 className="pricedown" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f5c518', textShadow: '3px 3px 0 #ff6b00' }}>
            TOKENOMICS
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Donut chart */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '280px', filter: 'drop-shadow(0 0 30px rgba(245,197,24,0.3))' }}>
              {slices.map(s => {
                const start = cumulative;
                cumulative += s.pct;
                return <path key={s.label} d={describeArc(start, cumulative)} fill={s.color} opacity={0.9} />;
              })}
              <circle cx={cx} cy={cy} r={inner - 2} fill="#050505" />
              <text x={cx} y={cy - 8} textAnchor="middle" fill="#f5c518" fontSize="20" fontFamily="Orbitron" fontWeight="900">1B</text>
              <text x={cx} y={cy + 12} textAnchor="middle" fill="#888" fontSize="7" fontFamily="Orbitron" letterSpacing="2">TOTAL SUPPLY</text>
            </svg>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {slices.map(s => (
              <div key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: '#111', border: `2px solid ${s.color}22`, padding: '1rem 1.5rem',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
              }}>
                <div style={{ width: '4px', height: '40px', background: s.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#e8e0d0', fontWeight: 700 }}>{s.label}</div>
                </div>
                <div className="pricedown" style={{ fontSize: '2rem', color: s.color }}>{s.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PFP Generator ────────────────────────────────────────────────────────────
function PFPGenerator() {
  const [inputImage, setInputImage] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Only image files are supported');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Image must be under 10MB');
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = e => setInputImage(e.target?.result as string);
    reader.readAsDataURL(file);

    setOutputImage(null);
    setError(null);
    setLoading(true);
    setProgress('Uploading your photo...');

    try {
      // Upload
      const form = new FormData();
      form.append('file', file);
      const uploadRes = await fetch('/api/upload', { method: 'POST', body: form });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || 'Upload failed');

      setProgress('Transforming into GTA character...');

      // Generate
      const genRes = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: uploadData.url }),
      });
      const genData = await genRes.json();
      if (!genRes.ok) throw new Error(genData.error || 'Generation failed');

      setOutputImage(genData.outputUrl);
      setProgress('');
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }, [processFile]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const downloadOutput = () => {
    if (!outputImage) return;
    const a = document.createElement('a');
    a.href = outputImage;
    a.download = 'dlss5memes-gta-pfp.png';
    a.click();
  };

  const loadingMessages = [
    '🎮 Spawning your character...',
    '🔫 Equipping the right shaders...',
    '🏙️ Loading San Andreas engine...',
    '⭐ Applying PS2 aesthetics...',
    '🚗 Almost there, homie...',
  ];

  const [msgIdx, setMsgIdx] = useState(0);
  if (loading && progress) {
    setTimeout(() => setMsgIdx(i => (i + 1) % loadingMessages.length), 2000);
  }

  return (
    <section id="pfp-generator" style={{ padding: '100px 2rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', letterSpacing: '4px', color: '#f5c518', marginBottom: '1rem' }}>
            [ CHARACTER CREATION ]
          </div>
          <h2 className="pricedown" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f5c518', textShadow: '3px 3px 0 #ff6b00', marginBottom: '1rem' }}>
            GTA PFP GENERATOR
          </h2>
          <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', color: '#888', letterSpacing: '1px', maxWidth: '600px', margin: '0 auto' }}>
            Upload your photo — get transformed into a PS2-era GTA San Andreas character. No cap.
          </p>
        </div>

        {/* Drop zone */}
        {!inputImage && (
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={onDrop}
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            style={{
              border: `3px dashed ${dragOver ? '#ff6b00' : '#f5c518'}`,
              background: dragOver ? 'rgba(255,107,0,0.05)' : 'rgba(245,197,24,0.03)',
              padding: '4rem 2rem', textAlign: 'center', cursor: 'pointer',
              transition: 'all 0.2s',
              clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
              maxWidth: '600px', margin: '0 auto',
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📸</div>
            <div className="pricedown" style={{ fontSize: '2rem', color: '#f5c518', marginBottom: '0.5rem' }}>DROP YOUR PHOTO</div>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#666', letterSpacing: '2px' }}>
              OR CLICK TO BROWSE · JPG, PNG, WEBP · MAX 10MB
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={onFileChange} style={{ display: 'none' }} />
          </div>
        )}

        {/* Comparison */}
        {inputImage && (
          <div>
            {/* Reset button */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <button
                onClick={() => { setInputImage(null); setOutputImage(null); setError(null); setLoading(false); }}
                style={{
                  background: 'transparent', border: '2px solid #666', color: '#888',
                  padding: '8px 20px', cursor: 'pointer', fontFamily: 'Orbitron, sans-serif',
                  fontSize: '0.7rem', letterSpacing: '2px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#f5c518'; (e.currentTarget as HTMLElement).style.color = '#f5c518'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#666'; (e.currentTarget as HTMLElement).style.color = '#888'; }}
              >
                ↩ UPLOAD DIFFERENT PHOTO
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
              {/* Input */}
              <div style={{
                background: '#111', border: '2px solid #333', overflow: 'hidden',
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              }}>
                <div style={{
                  background: '#1a1a1a', padding: '10px 16px',
                  fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', letterSpacing: '2px', color: '#888',
                  borderBottom: '2px solid #333', display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ width: '8px', height: '8px', background: '#333', borderRadius: '50%', display: 'inline-block' }} />
                  ORIGINAL
                </div>
                <img src={inputImage} alt="Original" style={{ width: '100%', display: 'block', aspectRatio: '1', objectFit: 'cover' }} />
              </div>

              {/* Output */}
              <div style={{
                background: '#111', border: `2px solid ${loading ? '#ff6b00' : outputImage ? '#f5c518' : '#333'}`, overflow: 'hidden',
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                transition: 'border-color 0.3s',
              }}>
                <div style={{
                  background: '#1a1a1a', padding: '10px 16px',
                  fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', letterSpacing: '2px',
                  color: loading ? '#ff6b00' : outputImage ? '#f5c518' : '#888',
                  borderBottom: `2px solid ${loading ? '#ff6b00' : outputImage ? '#f5c518' : '#333'}`,
                  display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s',
                }}>
                  <span style={{ width: '8px', height: '8px', background: loading ? '#ff6b00' : outputImage ? '#f5c518' : '#333', borderRadius: '50%', display: 'inline-block', animation: loading ? 'blink 1s infinite' : 'none' }} />
                  GTA CHARACTER
                </div>
                {loading ? (
                  <div style={{
                    aspectRatio: '1', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '1rem',
                    background: '#0a0a0a',
                  }}>
                    {/* Loading spinner */}
                    <div style={{
                      width: '60px', height: '60px',
                      border: '4px solid #1a1a1a',
                      borderTop: '4px solid #f5c518',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }} />
                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', color: '#f5c518', letterSpacing: '1px', textAlign: 'center', padding: '0 1rem' }}>
                      {loadingMessages[msgIdx]}
                    </div>
                  </div>
                ) : outputImage ? (
                  <img src={outputImage} alt="GTA character" style={{ width: '100%', display: 'block', aspectRatio: '1', objectFit: 'cover' }} />
                ) : (
                  <div style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a' }}>
                    <div style={{ textAlign: 'center', color: '#333', fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', letterSpacing: '1px' }}>
                      AWAITING TRANSFORMATION
                    </div>
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div style={{
                maxWidth: '900px', margin: '1.5rem auto 0',
                background: 'rgba(192,57,43,0.1)', border: '2px solid #c0392b',
                padding: '1rem 1.5rem', fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', color: '#c0392b', letterSpacing: '1px',
              }}>
                ⚠ ERROR: {error}
              </div>
            )}

            {outputImage && (
              <div style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={downloadOutput}
                  style={{
                    background: '#f5c518', color: '#0a0a0a', border: 'none',
                    padding: '14px 36px', cursor: 'pointer',
                    fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '2px',
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffd700'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f5c518'; }}
                >
                  ⬇ DOWNLOAD PFP
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
      `}</style>
    </section>
  );
}

// ─── How to Buy ───────────────────────────────────────────────────────────────
function HowToBuy() {
  const steps = [
    {
      num: '01', icon: '💳',
      title: 'GET A WALLET',
      desc: 'Download Phantom or Solflare wallet. Available on iOS, Android & Chrome extension.',
    },
    {
      num: '02', icon: '◎',
      title: 'BUY SOLANA',
      desc: 'Purchase SOL from any major exchange like Coinbase, Binance, or Kraken.',
    },
    {
      num: '03', icon: '🔄',
      title: 'GO TO PUMP.FUN',
      desc: 'Visit pump.fun and search for DLSS 5 MEMES or paste the contract address.',
    },
    {
      num: '04', icon: '🚀',
      title: 'SWAP & HODL',
      desc: 'Swap your SOL for DLSS5MEMES. Set slippage to 5-15%. Then hold for the moon.',
    },
  ];

  return (
    <section id="how-to-buy" style={{ padding: '100px 2rem', background: '#050505' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', letterSpacing: '4px', color: '#f5c518', marginBottom: '1rem' }}>
            [ HEIST INSTRUCTIONS ]
          </div>
          <h2 className="pricedown" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f5c518', textShadow: '3px 3px 0 #ff6b00' }}>
            HOW TO BUY
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{
              background: '#111', border: '2px solid #222',
              padding: '2rem',
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              position: 'relative', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#f5c518'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#222'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div className="pricedown" style={{ fontSize: '3rem', color: 'rgba(245,197,24,0.15)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '2rem' }}>{s.icon}</div>
              </div>
              <h3 className="pricedown" style={{ fontSize: '1.5rem', color: '#f5c518', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.9rem' }}>{s.desc}</p>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', right: '-1.25rem', top: '50%', transform: 'translateY(-50%)',
                  color: '#f5c518', fontSize: '1.2rem', zIndex: 1,
                  display: 'none',
                }}>→</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a
            href="https://pump.fun/coin/2KGmEy1MSNVUvkvXW3dzPgG6oPiEXD2NxdPte7KApump"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#f5c518', color: '#0a0a0a',
              textDecoration: 'none', padding: '18px 56px',
              fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '1rem', letterSpacing: '3px',
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ffd700'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f5c518'; }}
          >
            🚀 BUY DLSS5MEMES NOW
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '2px solid #f5c518',
      padding: '3rem 2rem',
      textAlign: 'center',
    }}>
      {/* Warning stripes */}
      <div style={{
        height: '6px', marginBottom: '2rem',
        background: 'repeating-linear-gradient(45deg, #f5c518 0, #f5c518 10px, #0a0a0a 10px, #0a0a0a 20px)',
      }} />

      <div className="pricedown" style={{ fontSize: '2rem', color: '#f5c518', marginBottom: '0.5rem', textShadow: '2px 2px 0 #ff6b00' }}>
        DLSS 5 MEMES
      </div>
      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', letterSpacing: '3px', color: '#444', marginBottom: '1.5rem' }}>
        GROOVE STREET — SOLANA BLOCKCHAIN
      </div>

      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: '#333', letterSpacing: '1px', maxWidth: '600px', margin: '0 auto', lineHeight: 2 }}>
        ⚠ DISCLAIMER: DLSS 5 MEMES is a meme coin for entertainment purposes only. 
        Not financial advice. Crypto investments carry risk. DYOR. This is not affiliated with Rockstar Games or GTA.
      </div>

      <div style={{ marginTop: '2rem', fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: '#333' }}>
        © 2025 DLSS 5 MEMES · CA: 2KGmEy1MSNVUvkvXW3dzPgG6oPiEXD2NxdPte7KApump
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <main>
      <StarField />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Tokenomics />
      <PFPGenerator />
      <HowToBuy />
      <Footer />
    </main>
  );
}
