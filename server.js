if (window.self !== window.top) {
	var arbitraryHtmlObj = {
		"hassane-ghanmi":`
		<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Primary Meta Tags -->
<title>Hassane Ghanmi — Senior Angular Engineer</title>
<meta name="title" content="Hassane Ghanmi — Senior Angular Engineer">
<meta name="description" content="Senior Frontend Engineer specializing in Angular, TypeScript, and modern frontend architecture. 8+ years building scalable web applications for banking, insurance, and industrial platforms. Based in Lisbon, available for remote roles across EMEA.">
<meta name="author" content="Hassane Ghanmi">
<meta name="keywords" content="Angular, TypeScript, Frontend Engineer, Senior Developer, RxJS, NgRx, Micro-Frontends, Lisbon, Remote, EMEA">

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://ghanhass.github.io/myfiddle/hassane-ghanmi">
<meta property="og:title" content="Hassane Ghanmi — Senior Angular Engineer">
<meta property="og:description" content="Senior Frontend Engineer specializing in Angular, TypeScript, and modern frontend architecture. 8+ years building scalable web applications. Available for remote roles across EMEA.">
<meta property="og:image" content="https://i.ibb.co/G4KtN6t0/my-shared-img.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Hassane Ghanmi — Senior Angular Engineer">
<meta name="twitter:description" content="Senior Frontend Engineer specializing in Angular, TypeScript, and modern frontend architecture. Available for remote roles across EMEA.">
<meta name="twitter:image" content="https://i.ibb.co/G4KtN6t0/my-shared-img.png">

<!-- Favicon -->
<link rel="icon" type="image/png" href="https://ghanhass.github.io/myfiddle/assets/logo.png">
<link rel="apple-touch-icon" href="https://ghanhass.github.io/myfiddle/assets/logo.png">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Open all links in new tab (prevents iframe trap) -->
<base target="_blank">

<style>
  :root {
    --bg: #0a0a0f;
    --surface: #12121a;
    --surface-light: #1a1a26;
    --text: #e8e8ef;
    --text-muted: #8888a0;
    --accent: #00d4ff;
    --accent-dim: #0099bb;
    --border: #252535;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
  }

  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    z-index: 100;
    padding: 1rem 2rem;
  }

  nav .container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav .logo {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--accent);
    letter-spacing: -0.5px;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  nav a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
  }

  nav a:hover { color: var(--accent); }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 6rem 2rem 4rem;
    position: relative;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -50%; left: -20%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero .container {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4rem;
    align-items: center;
  }

  .hero-text h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -2px;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .hero-text h1 span { color: var(--accent); }

  .hero-text .tagline {
    font-size: 1.2rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    max-width: 500px;
  }

  .hero-text .cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
    border: none;
  }

  .btn-primary { background: var(--accent); color: #0a0a0f; }
  .btn-primary:hover { background: var(--accent-dim); transform: translateY(-2px); }

  .btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

  .hero-photo {
    width: 200px; height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--accent);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.2);
  }

  section { padding: 5rem 2rem; }
  section .container { max-width: 1100px; margin: 0 auto; }

  .section-title {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--accent);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .section-heading {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 2rem;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .about-grid p { color: var(--text-muted); margin-bottom: 1rem; }
  .about-grid strong { color: var(--text); }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s;
  }

  .skill-card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.08);
  }

  .skill-card h3 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: var(--accent);
  }

  .skill-card p { font-size: 0.9rem; color: var(--text-muted); }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.8rem;
    transition: all 0.3s;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .project-card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.08);
  }

  .project-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .project-card h3 i { color: var(--accent); font-size: 1rem; }
  .project-card p { font-size: 0.9rem; color: var(--text-muted); }

  .project-card .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 1rem;
  }

  .tech-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
    background: var(--surface-light);
    border-radius: 4px;
    color: var(--text-muted);
    border: 1px solid var(--border);
  }

  .now-list {
    list-style: none;
    display: grid;
    gap: 1rem;
  }

  .now-list li {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1rem 1.4rem;
    color: var(--text-muted);
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .now-list li i {
    color: var(--accent);
    margin-top: 0.35rem;
  }

  .now-list li strong { color: var(--text); }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .contact-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s;
  }

  .contact-links a:hover { color: var(--accent); }
  .contact-links a i { color: var(--accent); }

  footer {
    padding: 2rem;
    text-align: center;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    nav ul { display: none; }
    .hero .container { grid-template-columns: 1fr; text-align: center; }
    .hero-text .cta { justify-content: center; }
    .hero-photo { margin: 0 auto; width: 150px; height: 150px; }
    .about-grid { grid-template-columns: 1fr; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-up {
    animation: fadeUp 0.8s ease forwards;
    opacity: 0;
  }

  .fade-up:nth-child(1) { animation-delay: 0.1s; }
  .fade-up:nth-child(2) { animation-delay: 0.2s; }
  .fade-up:nth-child(3) { animation-delay: 0.3s; }
</style>
</head>
<body>

  <nav>
    <div class="container">
      <div class="logo">HG</div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#now">Now</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <section class="hero" id="home">
    <div class="container">
      <div class="hero-text fade-up">
        <h1>Hi, I'm <span>Hassane Ghanmi</span></h1>
        <p class="tagline">
          Senior Frontend Engineer specializing in Angular, TypeScript, and modern frontend architecture.
          I build scalable, high-performance web applications — and I care about the craft.
        </p>
        <div class="cta">
          <a href="#projects" class="btn btn-primary">
            <i class="fas fa-rocket"></i> View Projects
          </a>
          <a href="https://ghanhass.github.io/hassoon-cdn/documents/cv_hassan_ghanmi_10_2026.pdf" class="btn btn-outline">
            <i class="fas fa-download"></i> Download CV
          </a>
          <a href="#contact" class="btn btn-outline">
            <i class="fas fa-paper-plane"></i> Get in Touch
          </a>
        </div>
      </div>
      <div class="fade-up">
        <img src="https://i.ibb.co/G4KtN6t0/my-shared-img.png" alt="Hassane Ghanmi" class="hero-photo">
      </div>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <div class="section-title">About</div>
      <h2 class="section-heading">A builder at heart</h2>
      <div class="about-grid">
        <div>
          <p>
            I'm a <strong>Senior Frontend Engineer</strong> with over 8 years of experience
            building complex web applications for banking, insurance, and industrial platforms.
          </p>
          <p>
            My core expertise is <strong>Angular</strong> — from architecture and state management
            to performance optimization and micro-frontends. I also have a strong foundation
            in vanilla JavaScript, HTML, and CSS/SCSS.
          </p>
        </div>
        <div>
          <p>
            I'm currently building <strong>MyFiddle</strong>, a live web development playground
            similar to CodePen, with Angular on the frontend and a Java Spring Boot backend.
          </p>
          <p>
            I'm based in <strong>Lisbon, Portugal</strong>, fluent in English and French,
            and available for remote or hybrid opportunities across Europe.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" style="background: var(--surface);">
    <div class="container">
      <div class="section-title">Skills</div>
      <h2 class="section-heading">What I bring to the table</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h3><i class="fas fa-code"></i> Frontend</h3>
          <p>Angular, TypeScript, JavaScript, RxJS, NgRx, Signals, ReactJS, HTML, CSS, SCSS</p>
        </div>
        <div class="skill-card">
          <h3><i class="fas fa-sitemap"></i> Architecture</h3>
          <p>Micro-Frontends, Module Federation, Webpack, NPM, responsive design, UI/UX</p>
        </div>
        <div class="skill-card">
          <h3><i class="fas fa-server"></i> Backend</h3>
          <p>Java Spring Boot, Node.js, Express, PHP, REST APIs, PostgreSQL, MySQL, MongoDB</p>
        </div>
        <div class="skill-card">
          <h3><i class="fas fa-vial"></i> Testing & DevOps</h3>
          <p>Jest, Jasmine, Karma, Git, GitLab CI/CD, GitHub Actions, Jenkins, Argo CD</p>
        </div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container">
      <div class="section-title">Projects</div>
      <h2 class="section-heading">Things I've built</h2>
      <div class="projects-grid">
        <a href="https://ghanhass.github.io/myfiddle" class="project-card">
          <h3><i class="fas fa-code"></i> MyFiddle</h3>
          <p>A live web development playground (similar to CodePen/JSFiddle). Publicly deployed and in active use.</p>
          <div class="tech">
            <span class="tech-tag">Angular</span>
            <span class="tech-tag">Signals</span>
            <span class="tech-tag">RxJS</span>
            <span class="tech-tag">NgRx</span>
            <span class="tech-tag">Spring Boot</span>
          </div>
        </a>
        <a href="https://ghanhass.github.io/simon-game" class="project-card">
          <h3><i class="fas fa-gamepad"></i> Simon Game</h3>
          <p>A memory-enhancing browser game built with vanilla JavaScript.</p>
          <div class="tech">
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
          </div>
        </a>
        <a href="https://ghanhass.github.io/js_calc" class="project-card">
          <h3><i class="fas fa-calculator"></i> Scientific Calculator</h3>
          <p>A scientific mathematics calculator built with vanilla JavaScript.</p>
          <div class="tech">
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <section id="now" style="background: var(--surface);">
    <div class="container">
      <div class="section-title">Now</div>
      <h2 class="section-heading">What I'm working on</h2>
      <ul class="now-list">
        <li>
          <i class="fas fa-code"></i>
          <span><strong>Building MyFiddle</strong> — a live web development playground with Angular, Signals, and NgRx, and a Java Spring Boot backend in progress.</span>
        </li>
        <li>
          <i class="fas fa-briefcase"></i>
          <span><strong>Open to new opportunities</strong> — remote or hybrid Senior Frontend / Angular roles across EMEA.</span>
        </li>
        <li>
          <i class="fas fa-graduation-cap"></i>
          <span><strong>Sharpening my craft</strong> — deepening my full-stack skills with Spring Boot and PostgreSQL, and exploring modern Angular features.</span>
        </li>
        <li>
          <i class="fas fa-globe"></i>
          <span><strong>Based in Lisbon</strong> — fluent in English and French, learning Portuguese.</span>
        </li>
      </ul>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="section-title">Contact</div>
      <h2 class="section-heading">Let's build something together</h2>
      <p style="color: var(--text-muted); max-width: 500px;">
        I'm available for remote or hybrid opportunities across Europe.
        Whether you have a project in mind or just want to connect, feel free to reach out.
      </p>
      <div class="contact-links">
        <a href="mailto:ghanmi.hassen91@gmail.com">
          <i class="fas fa-envelope"></i> ghanmi.hassen91@gmail.com
        </a>
        <a href="tel:+351961559015">
          <i class="fas fa-phone"></i> +351 961 559 015
        </a>
        <a href="https://www.linkedin.com/in/hassan-ghanmi-039ba110a/">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/ghanhass">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://ghanhass.github.io/hassoon-cdn/documents/cv_hassan_ghanmi_10_2026.pdf">
          <i class="fas fa-file-pdf"></i> Download CV
        </a>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2026 Hassane Ghanmi — Lisbon, Portugal</p>
  </footer>

  <script>
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section .container > *').forEach(el => {
      observer.observe(el);
    });
  </script>

</body>
</html>
		`
	}
	var isProdMode = location.origin === "https://hassoon-github.github.io" ? true : false;

	var fiddleOrigin = isProdMode ? "https://ghanhass.github.io" : "http://localhost:4200";
	var iframeEl = null;

	writeInIframe(`
    			<!DOCTYPE html>
    			<html>
    			    <head>
    			    <meta charset="utf-8">
    			    <meta name="referrer" content="strict-origin-when-cross-origin">
					<script>
					window.addEventListener("load", function () {
						//console.log("load event inside the sub iframe!");
						//console.log("-----------------------------");
						window.parent.postMessage({type:"sub-iframe-loaded"}, location.origin);
					});
					</script>
    			    </head>
    			    <body> 
    			    </body>
    			</html>`);

	//generateConsoleStyleSheet();


	function generateIframe() {
		if (iframeEl) {
			iframeEl.remove();
		}
		iframeEl = document.createElement("iframe");
		iframeEl.style.cssText = "height:100%; width:100%; border:none;";
		document.body.prepend(iframeEl);

	}
	
	function writeInIframe(htmlDocumentCode) {
		generateIframe();

		var document = iframeEl.contentDocument || iframeEl.contentWindow.document;
		document.open();
		document.write(htmlDocumentCode);
		document.close();
	}

	function generateDocument(data) {
		//var consolePanelEl = myfiddleConsoleEl.shadowRoot.querySelector("#console-panel.console-panel");
		//console.log("generateFiddleCode data: ", data);
		let htmlCode = data.html || '';
		let cssCode = data.css || '';
		let jsCode = data.js || "";
		let htmlDocumentCode = `
    			<!DOCTYPE html>
    			<html>
    			    <head>
    			    <meta charset="utf-8">
    			    <meta name="referrer" content="strict-origin-when-cross-origin">
    			    </head>
    			    <body> 
    			        <!---->
    			        <script>
					  	window.onerror = function(e) {
					  		window.detectedError = e;
					  	};
					    </script>
						<script>
						window.addEventListener("load", function () {
							//console.log("load event inside the sub iframe!");
							//console.log("-----------------------------");
							window.parent.postMessage({type:"sub-iframe-loaded"}, location.origin);
						});
						</script>
    			        
    			        <!---->

    			        ${htmlCode}

    			        <style>${cssCode}</style>
    			        <script>${jsCode}</script>
    			    </body>
    			</html>`;

		writeInIframe(htmlDocumentCode);

	}


	window.addEventListener("message", function (event) {

		//console.log("iframe received message = ", event);
		if (event.origin === location.origin && event.data.type === "sub-iframe-loaded") {
			//console.log("iframe message event received: ", event);
			//generateConsoleStyleSheet(event.data.currentTheme);
			window.parent.postMessage({ type: "sub-iframe-loaded" }, fiddleOrigin);
		}
		else if (event.origin === fiddleOrigin && event.data.type === "run") {
			//console.log("iframe RUN message even received: ", event);
			//generateConsoleStyleSheet(event.data.currentTheme);
			window.parent.postMessage({ type: "run-message-received" }, fiddleOrigin);
			var data = JSON.parse(event.data.data);
			generateDocument(data);
		}
		else if(event.origin === fiddleOrigin && event.data.type === "print"){
			iframeEl.contentWindow.print();
		}
		else if(event.origin === fiddleOrigin && event.data.type === "run-arbitrary-html"){
			var keys = Object.keys(arbitraryHtmlObj)
			//console.log('arbitraryHtmlObj = ', arbitraryHtmlObj);
			if(keys.includes(event.data.data)){
				generateDocument({html: arbitraryHtmlObj[event.data.data]})
			}
		}
	});


	//console.log("inline script started");
} else {
	document.body.innerHTML = "<h1>Running this web page directly is forbidden, good day.</h1>"
}
