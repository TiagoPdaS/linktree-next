import { FaCss3, FaGithub, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaReact } from "react-icons/fa";
import { SiBootstrap, SiNextdotjs, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        
        {/* Profile Section */}
        <div className="text-center mb-8 animate-fadeIn">
          <img 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-white dark:ring-gray-700 object-cover transition-transform duration-300 hover:scale-105" 
            src="../img/bg-img.png" 
            alt="Tiago PdaS" 
          />

          <p className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 leading-relaxed">
            &quot;Front-end Developer |<br />
            Transformando designs em soluções modernas.&quot;
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">
            Tiago PdaS
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            Me siga nas redes abaixo!
          </p>
        </div>

        {/* Social Buttons */}
        <div className="space-y-4 mb-12">
          <a 
            href="https://www.instagram.com/tiagopdas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <button className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-lg font-bold text-white border-none bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-yellow-600 hover:to-orange-600">
              <FaInstagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              INSTAGRAM
            </button>
          </a>

          <a 
            href="https://github.com/TiagoPdaS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <button className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-lg font-bold text-white border-none bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-gray-800 hover:to-black">
              <FaGithub className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              GITHUB
            </button>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/tiagopdas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <button className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-lg font-bold text-white border-none bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-blue-900">
              <FaLinkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              LINKEDIN
            </button>
          </a>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-8 px-4">
          <FaHtml5 className="w-8 h-8 text-orange-500 hover:scale-125 transition-transform duration-300 cursor-pointer" title="HTML5" />
          <FaCss3 className="w-8 h-8 text-blue-500 hover:scale-125 transition-transform duration-300 cursor-pointer" title="CSS3" />
          <FaJs className="w-8 h-8 text-yellow-400 hover:scale-125 transition-transform duration-300 cursor-pointer" title="JavaScript" />
          <SiTypescript className="w-8 h-8 text-blue-600 hover:scale-125 transition-transform duration-300 cursor-pointer" title="TypeScript" />
          <FaReact className="w-8 h-8 text-cyan-400 hover:scale-125 transition-transform duration-300 cursor-pointer" title="React" />
          <SiNextdotjs className="w-8 h-8 text-black dark:text-white hover:scale-125 transition-transform duration-300 cursor-pointer" title="Next.js" />
          <SiTailwindcss className="w-8 h-8 text-cyan-500 hover:scale-125 transition-transform duration-300 cursor-pointer" title="Tailwind CSS" />
          <SiBootstrap className="w-8 h-8 text-purple-600 hover:scale-125 transition-transform duration-300 cursor-pointer" title="Bootstrap" />
          <SiSass className="w-8 h-8 text-pink-400 hover:scale-125 transition-transform duration-300 cursor-pointer" title="Sass" />
          <FaGithub className="w-8 h-8 text-gray-800 dark:text-gray-200 hover:scale-125 transition-transform duration-300 cursor-pointer" title="GitHub" />
          <VscVscode className="w-8 h-8 text-blue-500 hover:scale-125 transition-transform duration-300 cursor-pointer" title="VS Code" />
        </div>

        {/* Footer */}
        <footer className="text-center pt-6 pb-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            © 2025 TiagoPdaS. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default page;
