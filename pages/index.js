export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ressihink Interactive | Tech Gadgets & Smart Home Reviews</title>
  <style>
    :root {
      --primary: #2563eb;
      --primary-hover: #1d4ed8;
      --bg: #0f172a;
      --surface: #1e293b;
      --surface-border: #334155;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --card-bg: #1e293b;
      --accent: #38bdf8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* Header & Nav */
    header {
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--surface-border);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .brand h1 {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(to right, #38bdf8, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand p {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    nav ul {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }

    nav a {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-muted);
      transition: color 0.2s;
    }

    nav a:hover, nav a.active {
      color: var(--accent);
    }

    /* Hero Section */
    .hero {
      padding: 4rem 2rem 2rem;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero h2 {
      font-size: 2.75rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.15rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }

    /* Grid Layout */
    .grid {
      max-width: 1200px;
      margin: 0 auto 4rem;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--surface-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    }

    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .card-body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .badge {
      align-self: flex-start;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      background: rgba(56, 189, 248, 0.1);
      color: var(--accent);
      margin-bottom: 0.75rem;
      text-transform: uppercase;
    }

    .card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .card p {
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }

    .btn {
      display: inline-block;
      text-align: center;
      background: var(--primary);
      color: white;
      padding: 0.6rem 1rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.2s;
    }

    .btn:hover {
      background: var(--primary-hover);
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--surface-border);
      padding: 2rem;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      header {
        flex-direction: column;
        gap: 1rem;
      }
      nav ul {
        flex-wrap: wrap;
        justify-content: center;
      }
      .hero h2 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <div class="brand">
      <h1>Ressihink Interactive</h1>
      <p>Smarter, Healthier, Productive Living</p>
    </div>
    <nav>
      <ul>
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#budgeting">Finances</a></li>
        <li><a href="#health">Health</a></li>
        <li><a href="#productivity">Productivity</a></li>
        <li><a href="#recipes">Kitchen</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero" id="home">
    <h2>Next-Gen Tech Guides for Your Modern Home</h2>
    <p>Discover expert-tested smart devices, automated budgeting displays, and focus tech built to optimize your daily routine.</p>
  </section>

  <main class="grid">

    <!-- Finance Card -->
    <article class="card" id="budgeting">
      <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80" alt="Finance display app">
      <div class="card-body">
        <span class="badge">Finances</span>
        <h3>Master Your Finances</h3>
        <p>Discover smart wallets, automated coin counters, and budget-syncing displays that eliminate manual spreadsheets.</p>
        <a href="#budgeting" class="btn">Read Finance Guides</a>
      </div>
    </article>

    <!-- Health Card -->
    <article class="card" id="health">
      <img src="https://images.unsplash.com/photo-1510006851064-e605670e3a8b?auto=format&fit=crop&w=600&q=80" alt="Smart fitness tracker">
      <div class="card-body">
        <span class="badge">Wellness</span>
        <h3>Live Healthier</h3>
        <p>From advanced sleep trackers to air quality monitors and smart running insoles, explore daily wellness technology.</p>
        <a href="#health" class="btn">Explore Health Tech</a>
      </div>
    </article>

    <!-- Productivity Card -->
    <article class="card" id="productivity">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" alt="Productive desk setup">
      <div class="card-body">
        <span class="badge">Productivity</span>
        <h3>Stay on Task</h3>
        <p>Automate your workflow with smart displays, focus timers, and intelligent ambient lighting for remote work.</p>
        <a href="#productivity" class="btn">View Focus Tools</a>
      </div>
    </article>

    <!-- Kitchen Card -->
    <article class="card" id="recipes">
      <img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=600&q=80" alt="Smart modern kitchen">
      <div class="card-body">
        <span class="badge">Smart Kitchen</span>
        <h3>The Smart Kitchen</h3>
        <p>Cook with precision using Wi-Fi ovens, connected scales, and interactive step-by-step recipe tablets.</p>
        <a href="#recipes" class="btn">Explore Kitchen Tech</a>
      </div>
    </article>

  </main>

  <footer>
    <p>&copy; 2026 Ressihink Interactive. All rights reserved.</p>
  </footer>

</body>
</html>
        `,
      }}
    />
  );
}
