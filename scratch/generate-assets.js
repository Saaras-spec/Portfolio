const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const projectsDir = path.join(publicDir, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// 1. Creative Portrait SVG / JPG placeholder
const meSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0f" />
      <stop offset="50%" stop-color="#14141d" />
      <stop offset="100%" stop-color="#08080a" />
    </linearGradient>
    <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d4ff00" />
      <stop offset="100%" stop-color="#95b800" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
    <radialGradient id="auraGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="rgba(212, 255, 0, 0.25)" />
      <stop offset="100%" stop-color="rgba(212, 255, 0, 0)" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="1000" fill="url(#bgGrad)" />
  <rect width="800" height="1000" fill="url(#grid)" />
  <circle cx="400" cy="400" r="380" fill="url(#auraGlow)" />

  <!-- Abstract Architectural Portrait Silhouette with High Fashion / Cyber Aesthetics -->
  <g transform="translate(400, 480)" text-anchor="middle">
    <!-- Geometric Body & Silhouette -->
    <path d="M -180 400 C -170 260 -120 180 -60 140 L 60 140 C 120 180 170 260 180 400 Z" fill="#1b1b24" stroke="#2c2c3a" stroke-width="2"/>
    <path d="M -90 140 L -40 70 L 40 70 L 90 140 Z" fill="#15151e" stroke="#2c2c3a" stroke-width="1.5" />
    
    <!-- Head silhouette -->
    <ellipse cx="0" cy="-20" rx="95" ry="125" fill="#20202d" stroke="#36364c" stroke-width="2"/>
    
    <!-- Cybernetic / Creative Glasses Frame -->
    <rect x="-80" y="-45" width="70" height="36" rx="6" fill="#0d0d12" stroke="#d4ff00" stroke-width="3"/>
    <rect x="10" y="-45" width="70" height="36" rx="6" fill="#0d0d12" stroke="#d4ff00" stroke-width="3"/>
    <line x1="-10" y1="-27" x2="10" y2="-27" stroke="#d4ff00" stroke-width="3"/>

    <!-- Lens Reflection Highlights -->
    <line x1="-70" y1="-40" x2="-20" y2="-15" stroke="rgba(212,255,0,0.4)" stroke-width="2"/>
    <line x1="20" y1="-40" x2="70" y2="-15" stroke="rgba(212,255,0,0.4)" stroke-width="2"/>

    <!-- Technical Crosshairs & Interface Overlays -->
    <circle cx="0" cy="-20" r="160" fill="none" stroke="rgba(212,255,0,0.15)" stroke-width="1" stroke-dasharray="4 8"/>
    <circle cx="0" cy="-20" r="210" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
  </g>

  <!-- Modern Graphic Overlay Typography -->
  <text x="60" y="880" fill="#d4ff00" font-family="monospace" font-size="14" letter-spacing="4">ALEX VANCE // DEV.SYSTEMS</text>
  <text x="60" y="910" fill="#ffffff" font-family="sans-serif" font-weight="700" font-size="28" letter-spacing="-0.5">CREATIVE TECHNOLOGIST</text>
  <text x="740" y="910" fill="#888899" font-family="monospace" font-size="14" text-anchor="end">SYS.REF: #2026.04</text>
  <line x1="60" y1="935" x2="740" y2="935" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
  <text x="60" y="960" fill="#666677" font-family="monospace" font-size="11">LAT 37.7749° N, LON 122.4194° W • CORE ARCHITECTURE</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'me.jpg'), meSvg);
fs.writeFileSync(path.join(publicDir, 'me.svg'), meSvg);

// 2. Project Mockup SVGs
function createProjectCard(title, category, accentColor, iconSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
    <defs>
      <linearGradient id="cardBg_${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0e0e14" />
        <stop offset="100%" stop-color="#161622" />
      </linearGradient>
      <pattern id="dotPattern_${title.replace(/\s+/g, '')}" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.08)"/>
      </pattern>
    </defs>
    <rect width="1200" height="750" fill="url(#cardBg_${title.replace(/\s+/g, '')})" />
    <rect width="1200" height="750" fill="url(#dotPattern_${title.replace(/\s+/g, '')})" />
    
    <!-- Top Bar -->
    <rect x="40" y="40" width="1120" height="50" rx="12" fill="#1b1b26" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <circle cx="70" cy="65" r="6" fill="#ff5f56"/>
    <circle cx="92" cy="65" r="6" fill="#ffbd2e"/>
    <circle cx="114" cy="65" r="6" fill="#27c93f"/>
    <rect x="150" y="52" width="400" height="26" rx="6" fill="#12121a"/>
    <text x="170" y="69" fill="#888899" font-family="monospace" font-size="12">https://${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.system.io</text>

    <!-- Content Workspace -->
    <rect x="40" y="110" width="700" height="600" rx="16" fill="#13131c" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <rect x="760" y="110" width="400" height="600" rx="16" fill="#13131c" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

    <!-- Left visual elements -->
    <circle cx="390" cy="360" r="180" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="6 8"/>
    <circle cx="390" cy="360" r="110" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <circle cx="390" cy="360" r="40" fill="${accentColor}" fill-opacity="0.2" stroke="${accentColor}" stroke-width="2"/>

    <!-- Right Data Panel -->
    <text x="800" y="170" fill="${accentColor}" font-family="monospace" font-size="13" letter-spacing="3">// ${category.toUpperCase()}</text>
    <text x="800" y="215" fill="#ffffff" font-family="sans-serif" font-weight="700" font-size="28">${title}</text>
    <line x1="800" y1="240" x2="1120" y2="240" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    
    <rect x="800" y="270" width="320" height="70" rx="10" fill="#1a1a26"/>
    <text x="820" y="300" fill="#888899" font-family="monospace" font-size="11">LATENCY METRIC</text>
    <text x="820" y="325" fill="#d4ff00" font-family="monospace" font-weight="700" font-size="18">&lt; 14.2ms P99</text>

    <rect x="800" y="360" width="320" height="70" rx="10" fill="#1a1a26"/>
    <text x="820" y="390" fill="#888899" font-family="monospace" font-size="11">STATE CONSENSUS</text>
    <text x="820" y="415" fill="#ffffff" font-family="monospace" font-weight="700" font-size="18">SYNCHRONIZED</text>

    <rect x="800" y="450" width="320" height="70" rx="10" fill="#1a1a26"/>
    <text x="820" y="480" fill="#888899" font-family="monospace" font-size="11">ACCESSIBILITY AUDIT</text>
    <text x="820" y="505" fill="#27c93f" font-family="monospace" font-weight="700" font-size="18">100 / 100 WCAG AAA</text>
  </svg>`;
}

fs.writeFileSync(path.join(projectsDir, 'synapse.webp'), createProjectCard('Synapse Neural Workspace', 'AI & ML System', '#d4ff00'));
fs.writeFileSync(path.join(projectsDir, 'lumina.webp'), createProjectCard('Lumina Generative Engine', 'WebGL Shaders', '#00e5ff'));
fs.writeFileSync(path.join(projectsDir, 'pulse.webp'), createProjectCard('Pulse Observability', 'Telemetry Platform', '#ff3366'));
fs.writeFileSync(path.join(projectsDir, 'aura.webp'), createProjectCard('Aura Design System', 'Component Primitives', '#b388ff'));

// 3. Resume PDF placeholder
const resumeContent = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Bold
      >>
      /F2 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
    >>
  >>
>>
endobj
4 0 obj
<< /Length 398 >>
stream
BT
/F1 24 Tf
50 720 Td
(SAARAS BISHT - RESUME) Tj
0 -30 Td
/F1 14 Tf
(Full-Stack Developer & Software Engineer) Tj
0 -25 Td
/F2 11 Tf
(Email: saaras.bisht@gmail.com | Portfolio: saarasbisht.dev | GitHub: saarasbisht) Tj
0 -40 Td
/F1 13 Tf
(SUMMARY) Tj
0 -20 Td
/F2 10 Tf
(Specialized in Next.js, TypeScript, React 19, Tailwind CSS, scalable full-stack web architectures.) Tj
0 -40 Td
/F1 13 Tf
(EDUCATION) Tj
0 -20 Td
/F2 10 Tf
(B.Tech in Computer Science & Engineering - Lovely Professional University (LPU)) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000300 00000 n 
trailer
<<
  /Size 5
  /Root 1 0 R
>>
startxref
750
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), resumeContent);
console.log('Successfully generated public assets for Saaras Bisht');
