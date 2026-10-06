# ✦ Modern Creative Developer Portfolio

A high-end, responsive personal portfolio website hand-architected with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **Lenis Smooth Scroll**, and **GSAP/Canvas WebGL**.

Designed with an asymmetric editorial aesthetic: deep onyx dark mode by default with light mode toggle, electric acid lime (`#D4FF00`) accents, typographic pairing of *Space Grotesk* and *DM Sans*, interactive particle constellation physics, and micro-interactions.

---

## ⚡ Tech Stack & Features

- **Next.js 16 (App Router)**: Fast Server-Side Rendering & Client streaming.
- **Tailwind CSS v4**: Theme custom variables, responsive grid, dynamic utilities.
- **Framer Motion**: Line-by-line masked typography reveals, layout animations, modals.
- **Lenis**: Momentum-based smooth scrolling with `prefers-reduced-motion` fallbacks.
- **Interactive Hero Canvas**: Math-based particle constellation with magnetic repulsion & velocity smoothing.
- **Custom Cursor**: Spring-interpolated pointer with dynamic hover states (`VIEW`, `POINTER`).
- **Single Source of Truth**: All personal data, projects, skills, timeline, and credentials are configured in `/src/data/portfolio.ts`.
- **Preloader**: Kinetic loading percentage counter and name reveal.
- **Full Theme Toggle**: Instant switch between Dark Onyx and Clean Light mode.
- **Accessible & SEO Ready**: Meta tags, OpenGraph previews, semantic HTML5 landmarks.

---

## 📂 Project Structure

```bash
├── public/
│   ├── me.jpg               # Your profile photo (replace with your portrait)
│   ├── resume.pdf           # Downloadable resume PDF
│   └── projects/            # Project showcase previews
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, variables & animations
│   │   ├── layout.tsx       # Root layout, Google Fonts, OpenGraph metadata
│   │   └── page.tsx         # Assembled portfolio sections
│   ├── components/
│   │   ├── Navbar.tsx       # Floating glass dock & mobile navigation
│   │   ├── Hero.tsx         # Asymmetric hero, masked reveal, portrait
│   │   ├── HeroCanvas.tsx   # Interactive particle physics canvas
│   │   ├── About.tsx        # Bio, tenets, and verified stats
│   │   ├── Skills.tsx       # Infinite marquee & category skill matrix
│   │   ├── Projects.tsx     # Project cards with spotlight & modal trigger
│   │   ├── ProjectModal.tsx # Architectural specs and metrics modal
│   │   ├── Timeline.tsx     # Vertical experience & education tree
│   │   ├── Certifications.tsx # Credential cards with verify links
│   │   ├── ResumeSection.tsx  # Document preview & PDF download
│   │   ├── Contact.tsx      # Contact form, email copy, confetti, social links
│   │   ├── Footer.tsx       # Real-time local clock, status, back-to-top
│   │   ├── CustomCursor.tsx # Spring follower cursor
│   │   ├── Preloader.tsx    # Kinetic intro sequence
│   │   ├── ScrollProgress.tsx # Top scroll progress line
│   │   └── SmoothScroll.tsx # Lenis smooth scroll wrapper
│   ├── context/
│   │   └── ThemeContext.tsx # Light/Dark theme state and persistence
│   ├── data/
│   │   └── portfolio.ts     # ⭐️ EDIT ALL YOUR INFORMATION HERE
│   └── types/
│       └── portfolio.ts     # TypeScript interface definitions
```

---

## 🛠️ How to Customize with Your Information

All portfolio content is decoupled into a single configuration file:
👉 **[`src/data/portfolio.ts`](src/data/portfolio.ts)**

1. **Personal Information**:
   - Change `name`, `role`, `tagline`, `bio`, `location`, `email`, and `stats`.
2. **Profile Photo**:
   - Place your photo at `public/me.jpg` (or update `photo: "/your-image.png"`).
3. **Resume**:
   - Place your PDF resume at `public/resume.pdf`.
4. **Skills**:
   - Edit `skills` and `marqueeSkills` arrays.
5. **Projects**:
   - Add your projects to `projects` array with title, description, tags, live URLs, and GitHub links.
6. **Experience & Education**:
   - Update `timeline` with your roles, companies, dates, and accomplishments.
7. **Certifications**:
   - Add your certificates with verify URLs and credential IDs.

---

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

4. Build for production:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deploy to Vercel (1-Click)

The fastest and most optimized way to deploy this portfolio is with **Vercel**:

1. Push your repository to **GitHub** / **GitLab** / **Bitbucket**.
2. Visit [Vercel](https://vercel.com/new).
3. Import your repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**. Your portfolio will be live on a custom `.vercel.app` domain with global edge caching and free SSL.
