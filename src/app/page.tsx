import { FaCss3, FaGithub, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaReact, FaGlobe } from "react-icons/fa";
import { SiBootstrap, SiNextdotjs, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-500">
      <main className="flex flex-col items-center w-full max-w-lg px-4 py-10">
        <figure className="flex flex-col items-center gap-4 w-full">
          <img className="w-28 h-28 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-yellow-400 object-cover" src="../img/bg-img.png" alt="Avatar Tiago PdaS" />
          <figcaption className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">Tiago PdaS</h1>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Front-end Developer</p>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-2">Transformando designs em soluções modernas.</p>
            <span className="text-sm text-blue-600 dark:text-blue-400">Me siga nas redes abaixo!</span>
          </figcaption>
        </figure>

        {/* Redes sociais */}
        <div className="flex flex-col gap-4 w-full mt-10">
          <a href="https://www.instagram.com/tiagopdas/" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-md hover:scale-105 hover:from-yellow-600 hover:to-yellow-500 transition-all duration-200">
              <FaInstagram className="w-6 h-6" /> Instagram
            </button>
          </a>
          <a href="https://github.com/TiagoPdaS" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-md hover:scale-105 hover:from-black hover:to-gray-800 transition-all duration-200">
              <FaGithub className="w-6 h-6" /> GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/tiagopdas/" target="_blank" rel="noopener noreferrer">
	    <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md hover:scale-105 hover:from-blue-700 hover:to-blue-600 transition-all duration-200">
              <FaLinkedin className="w-6 h-6" /> LinkedIn
            </button>
          </a>

          <a href="https://tiagopdas.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold text-white shadow-md hover:scale-105 transition-all duration-200" style={{ backgroundColor: '#4B2C8A' }}>
              {/* Ícone opcional para o site pessoal */}
                <FaGlobe className="w-6 h-6" /> Meu Site
            </button>
          </a>

        </div>




        {/* Tecnologias */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
          <FaHtml5 className="w-7 h-7 text-orange-500" title="HTML5" />
          <FaCss3 className="w-7 h-7 text-blue-500" title="CSS3" />
          <FaJs className="w-7 h-7 text-yellow-400" title="JavaScript" />
          <SiTypescript className="w-7 h-7 text-blue-600" title="TypeScript" />
          <FaReact className="w-7 h-7 text-cyan-400" title="React" />
          <SiNextdotjs className="w-7 h-7 text-black dark:text-white" title="Next.js" />
          <SiTailwindcss className="w-7 h-7 text-sky-400" title="TailwindCSS" />
          <SiBootstrap className="w-7 h-7 text-purple-600" title="Bootstrap" />
          <SiSass className="w-7 h-7 text-pink-400" title="Sass" />
          <FaGithub className="w-7 h-7 text-gray-800 dark:text-white" title="GitHub" />
          <VscVscode className="w-7 h-7 text-blue-500" title="VSCode" />
        </div>
      </main>
      <footer className="w-full flex flex-col items-center py-6 mt-8 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">© 2025 TiagoPdaS. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
};

export default page;