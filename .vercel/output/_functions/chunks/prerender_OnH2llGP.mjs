/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent, h as addAttribute } from './astro_DPl74UWR.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                       */
import 'clsx';
/* empty css                           */
/* empty css                         */
/* empty css                           */

const $$Astro$c = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Dagsan portfolio, where you can check the projects he has completed and get to know who he is."><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><meta property="og:title" content="Dagsan portfolio"><meta property="og:description" content="Dagsan portfolio"><meta property="og:site_name" content="Dagsan portfolio"><meta property="og:locale" content="en_EN"><meta property="og:type" content="website"><meta property="og:url" content="https://dagsan.dev"><meta name="al:android:app_name" content="Dagsan portfolio"><meta name="al:ios:app_name" content="Dagsan portfolio"><title>${title}</title><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}   </body> </html> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/layouts/Layout.astro", void 0);

const $$Astro$b = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" data-astro-cid-5blmo7yk> <div data-aos="fade-right" data-aos-duration="1000" data-astro-cid-5blmo7yk> <a href="/" class="text-xl font-bold md:text-2xl text-txt-secondary" data-astro-cid-5blmo7yk>dagsan<span class=" text-txt-primary" data-astro-cid-5blmo7yk>.dev</span></a> </div> <div class="flex flex-row space-x-4" id="icon-container" data-aos="fade-left" data-aos-duration="1000" data-astro-cid-5blmo7yk> <a href="https://github.com/dagsandev" class="social-icon" target="_blank" data-astro-cid-5blmo7yk> <img src="img/github.svg" alt="github icon" data-astro-cid-5blmo7yk> </a> <a href="https://linkedin.com/in/dagliosantiago" class="social-icon" target="_blank" data-astro-cid-5blmo7yk> <img src="img/linkedin-in.svg" alt="linkedin icon" data-astro-cid-5blmo7yk> </a> </div> </nav> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/Navbar.astro", void 0);

const $$Astro$a = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not Found - Dagsan.dev", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main data-astro-cid-zetdm5md> <img src="../../src/assets/img/404.webp" alt="404 not found image" data-astro-cid-zetdm5md> </main> ` })} `;
}, "C:/Project/dagsan.dev/portfolio/project/src/pages/404.astro", void 0);

const $$file$2 = "C:/Project/dagsan.dev/portfolio/project/src/pages/404.astro";
const $$url$2 = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead()}<section data-aos="zoom-in-up" data-aos-duration="1000" data-astro-cid-svshx33u> <div class="flex justify-center" data-astro-cid-svshx33u> <h2 class="text-xl font-bold md:text-2xl text-txt-secondary py-10" data-astro-cid-svshx33u>
Feel free to reach out me
</h2> </div> <form class="max-w-md mx-auto" data-astro-cid-svshx33u> <div class="relative z-0 w-full mb-5 group" data-astro-cid-svshx33u> <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-txt-secondary bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-txt-primary peer" placeholder=" " required data-astro-cid-svshx33u> <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-txt-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-svshx33u>Email address*</label> </div> <div class="grid md:grid-cols-2 md:gap-6" data-astro-cid-svshx33u> <div class="relative z-0 w-full mb-5 group" data-astro-cid-svshx33u> <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-txt-secondary bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-txt-primary peer" placeholder=" " required data-astro-cid-svshx33u> <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-txt-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-svshx33u>First name*</label> </div> <div class="relative z-0 w-full mb-5 group" data-astro-cid-svshx33u> <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-txt-secondary bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-txt-primary peer" placeholder=" " data-astro-cid-svshx33u> <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-txt-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-svshx33u>Last name</label> </div> </div> <div class="grid md:grid-cols-1" data-astro-cid-svshx33u> <div class="relative z-0 w-full mb-5 group" data-astro-cid-svshx33u> <textarea id="message" name="message" rows="6" required class="block p-2.5 w-full text-sm text-txt-secondary rounded-lg border-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-txt-primary peer bg-dark-primary" placeholder="Message*" data-astro-cid-svshx33u></textarea> </div> </div> <span class="text-[12px] text-txt-secondary" data-astro-cid-svshx33u>(*) Required</span> <div class="flex justify-center font-bold p-6 max-w-full" data-astro-cid-svshx33u> <button type="submit" class="button w-full" data-astro-cid-svshx33u>Submit</button> <a href="/" role="button" class="button w-full text-center" data-astro-cid-svshx33u>Back to Home</a> </div> </form> </section> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/ContactForm.astro", void 0);

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="grid grid-cols-3 justify-center items-center p-5 mt-32" data-astro-cid-sz7xmlte> <div class="text-[12px] uppercase text-txt-primary" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${today.getFullYear()} Daglio Santiago</p> <p data-astro-cid-sz7xmlte>have a nice day! <span class="text-[14px]" data-astro-cid-sz7xmlte> &#x1F601</span></p> </div> <div class="flex items-center justify-center" data-astro-cid-sz7xmlte> <img width="25px" height="25px" src="img/argentina-icon.webp" alt="Argentina icon flag" data-astro-cid-sz7xmlte> </div> <div class="flex justify-end" data-astro-cid-sz7xmlte> <a href="#" data-astro-cid-sz7xmlte> <img width="25px" height="25px" src="img/circle-chevron-up-solid.svg" alt="chevron up" data-astro-cid-sz7xmlte> </a> </div> </footer> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/Footer.astro", void 0);

const $$Astro$7 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Dagsan.dev" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Project/dagsan.dev/portfolio/project/src/pages/contact.astro", void 0);

const $$file$1 = "C:/Project/dagsan.dev/portfolio/project/src/pages/contact.astro";
const $$url$1 = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-col items-center justify-center text-dark-primary" id="text" data-astro-cid-bbe6dxrz> <div class="w-[250px] flex justify-center py-5 aspect-square" data-astro-cid-bbe6dxrz> <img src="img/me.webp" alt="dagsan profile photo" class="profile-photo rounded-full" loading="lazy" data-aos="zoom-in-up" data-aos-duration="1000" data-astro-cid-bbe6dxrz> </div> <div class="flex flex-col justify-center items-center" data-astro-cid-bbe6dxrz> <h1 class="text-6xl text-txt-secondary uppercase" data-astro-cid-bbe6dxrz>Daglio Santiago</h1> <h2 class="text-4xl text-txt-primary py-5 uppercase" data-astro-cid-bbe6dxrz>Software Developer</h2> </div> <div class="sm:flex sm:flex-wrap sm:space-x-4 justify-center text-center w-full max-w-2xl text-txt-primary font-bold p-6" data-astro-cid-bbe6dxrz> <div class="w-full sm:w-48" data-astro-cid-bbe6dxrz> <a href="#portfolio" role="button" class="button block w-full sm:max-w-80" data-astro-cid-bbe6dxrz>Portfolio</a> </div> <div class="w-full sm:w-48" data-astro-cid-bbe6dxrz> <a href="/contact" role="button" class="button block w-full sm:max-w-80" data-astro-cid-bbe6dxrz>Contact me</a> </div> </div> <div data-astro-cid-bbe6dxrz> <a href="#about" data-astro-cid-bbe6dxrz> <img src="img/chevron-down-solid.svg" class="chevron-down" alt="chevron down icon" data-astro-cid-bbe6dxrz> </a> </div> </main> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="text-center mt-10" id="about" data-aos="zoom-in-up" data-aos-duration="1000"> <h2 class="text-4xl md:text-5xl text-txt-primary font-extrabold p-10">
About me
</h2> <div class="flex justify-center"> <p class="max-w-96 md:max-w-2xl text-txt-secondary text-balance">
Experienced developer with over two years of expertise. My journey began with Java courses, igniting a passion for backend development utilizing technologies such as Spring, Hibernate, SQL, and Docker, among others. Currently, 
      I am focusing expanding my knowledge in frontend technologies, UX/UI design, and accessibility. Also I enjoy staying focused on learning new things so I
      am pursuing an Associate Degree in Software Development. 
      If you are interested in viewing my CV, working with me, or
      learning more about me, feel free to visit the 'contact me' section and drop me a message."
</p> </div> </div>`;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/About.astro", void 0);

const $$Astro$4 = createAstro();
const $$SkillBubble = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SkillBubble;
  const { href, alt, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bubble-container flex flex-col items-center" data-astro-cid-owehs27r> <div class="bubble" data-astro-cid-owehs27r> <img${addAttribute(href, "src")}${addAttribute(alt, "alt")} loading="lazy" data-astro-cid-owehs27r> </div> <p class="uppercase text-sm text-txt-secondary" data-astro-cid-owehs27r>${title}</p> </div> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/SkillBubble.astro", void 0);

const $$Astro$3 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<div class="text-center mt-10" data-aos="zoom-in-up" data-aos-duration="1000"> <h2 class="text-4xl md:text-5xl text-txt-primary font-extrabold p-10">
Skills
</h2> <div class="flex flex-wrap justify-center max-w-4xl m-auto gap-4"> ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/java.svg", "alt": "Java logo", "title": "Java" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/Spring.webp", "alt": "Spring logo", "title": "Spring" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/jwt.webp", "alt": "JSON Web Token logo", "title": "JWT" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/mysql.webp", "alt": "MySQL logo", "+": true, "title": "MySQL" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/postgresql.webp", "alt": "PostgreSQL logo", "title": "PostgreSQL" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/postman.webp", "alt": "Postman logo", "title": "Postman" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/docker.webp", "alt": "Docker logo", "title": "Docker" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/css.webp", "alt": "CSS logo", "title": "CSS" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/html.webp", "alt": "HTML logo", "title": "HTML" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/javascript.webp", "alt": "Javascript logo", "title": "Javascript" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/typescript.webp", "alt": "Typescript logo", "title": "Typescript" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/angular.svg", "alt": "Angular logo", "title": "Angular" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/tailwind.webp", "alt": "Tailwind logo", "title": "Tailwind" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/bootstrap.webp", "alt": "Bootstrap logo", "title": "Bootstrap" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/figma.webp", "alt": "Figma logo", "title": "Figma" })} ${renderComponent($$result, "SkillBubble", $$SkillBubble, { "href": "img/companies-logos/git.webp", "alt": "Git logo", "title": "GIT" })} </div> </div>`;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/Skills.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, body, hrefA, hrefImg, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-mspuyifq> <div class="image-container" data-astro-cid-mspuyifq> <img${addAttribute(hrefImg, "src")}${addAttribute(alt, "alt")} loading="lazy" data-astro-cid-mspuyifq> </div> <div class="text-container" data-astro-cid-mspuyifq> <h3 data-astro-cid-mspuyifq>${title}</h3> <p data-astro-cid-mspuyifq>${body}</p> </div> <div class="m-10" data-astro-cid-mspuyifq> <a${addAttribute(hrefA, "href")} role="button" class="btn" target="_blank" data-astro-cid-mspuyifq>View project</a> </div> </div> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/ProjectCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${maybeRenderHead()}<section id="portfolio" data-astro-cid-uhrerali> <div class="flex justify-center mt-10" data-astro-cid-uhrerali> <h2 class="text-4xl md:text-5xl text-txt-primary font-extrabold p-10" data-aos="zoom-in-up" data-aos-duration="1000" data-astro-cid-uhrerali>
Portfolio
</h2> </div> <div class="flex justify-center text-txt-secondary text-lg mb-3" data-aos="zoom-in-up" data-aos-duration="1000" data-astro-cid-uhrerali> <h4 class="uppercase" data-astro-cid-uhrerali>Selected projects</h4> </div> <div class="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-txt-secondary " data-aos="zoom-in-up" data-aos-duration="1000" data-astro-cid-uhrerali> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "client:load": true, "title": "Persistence Validator with Microservices", "body": "Java Spring Hibernate MySQL Docker Circuit Breaker Load Balancer Api Gateway", "hrefA": "https://github.com/dagsandev/aws-sicos-java-docker-bootcamp/tree/main/final-project/backend", "hrefImg": "img/portfolio/microservices.webp", "alt": "project img", "client:component-hydration": "load", "client:component-path": "C:/Project/dagsan.dev/portfolio/project/src/components/ProjectCard.astro", "client:component-export": "default", "data-astro-cid-uhrerali": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Power-Fit", "body": "Angular Java Spring JWT Hibernate MySQL", "hrefA": "https://github.com/dagsandev/nocountry-project-powerfit-c12", "hrefImg": "img/portfolio/powerfit.webp", "alt": "project img", "data-astro-cid-uhrerali": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Cash Now", "body": "Angular Java Spring JWT Hibernate MySQL Circuit Breaker Load Balancer Api Gateway HexagonalArch", "hrefA": "https://github.com/dagsandev/nocountry-s10-project-java-angular-microservices", "hrefImg": "img/portfolio/cashnow.webp", "alt": "project img", "data-astro-cid-uhrerali": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Tech Ecommerce (in progress)", "body": "Angular Java Spring JWT Hibernate MySQL Docker", "hrefA": "https://github.com/dagsandev/tech_ecommerce", "hrefImg": "img/portfolio/tech-ecommerce.webp", "alt": "project img", "data-astro-cid-uhrerali": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Text Encrypter", "body": "HTML CSS JS", "hrefA": "https://github.com/dagsandev/text-encrypter-challenge", "hrefImg": "img/portfolio/text-encrypter.webp", "alt": "project img", "data-astro-cid-uhrerali": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Sunshine Landing", "body": "HTML TAILWIND CSS", "hrefA": "https://sunshine-partydeco.vercel.app/", "hrefImg": "img/portfolio/sunshine-landing.webp", "alt": "project img", "data-astro-cid-uhrerali": true })} </div> </section> `;
}, "C:/Project/dagsan.dev/portfolio/project/src/components/Portfolio.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home - Dagsan.dev", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="hero-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Portfolio", $$Portfolio, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Project/dagsan.dev/portfolio/project/src/pages/index.astro", void 0);

const $$file = "C:/Project/dagsan.dev/portfolio/project/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, contact as c, index as i };
