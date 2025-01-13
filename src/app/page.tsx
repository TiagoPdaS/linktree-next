import { FaCss3, FaGithub, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaReact } from "react-icons/fa";
import { SiBootstrap, SiNextdotjs, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const page = () => {
  return (
    <div className="w-screen h-screen">

      <figure className="md:flex rounded-xl p-8 md:pr-64  ">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none  mx-auto" src="../img/bg-img.png" alt="" />

        <div className="pt-6 md:p-8 text-center md:text-center">

          <p className="text-lg font-bold">
            “Front-end Developer |<br />
            Transformando designs em soluções modernas.”
          </p>

          <figcaption className="font-medium">
            <div className="text-sky-600 dark:text-sky-400">
              <h1 className="text-2xl">Tiago PdaS</h1>
            </div>
            <div className="text-slate-700 dark:text-slate-500 text-lg font-medium">
              Me siga nas redes abaixo!
            </div>
          </figcaption>
        </div>
      </figure>


      {/* buttons */}
      <div className=" p-12">
        <div>
          <a href="https://www.instagram.com/tiagopdas/" target="_blank">
          <button className="w-full flex items-center justify-center gap-2 p-2 rounded-md text-lg font-bold text-white border-none bg-yellow-500">
            <FaInstagram className="w-6 h-6" />
            INSTAGRAM
          </button>
          </a>
        </div>
        <div>
        <a href="https://github.com/TiagoPdaS" target="_blank">
          <button className="w-full mt-6 flex items-center justify-center gap-2 p-2 rounded-md text-lg font-bold text-white border-none bg-yellow-500">
            <FaGithub className="w-6 h-6" />
            GITHUB
          </button>
          </a>
        </div>
        
        <div>
        <a href="https://www.linkedin.com/in/tiagopdas/" target="_blank">
          <button className="w-full mt-6 flex items-center justify-center gap-2 p-2 rounded-md text-lg font-bold text-white border-none bg-yellow-500">
            <FaLinkedin className="w-6 h-6" />
            LINKEDIN
          </button>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
      <FaHtml5 className="w-6 h-6 mr-1 text-orange-400 inline" />
      <FaCss3 className="w-6 h-6 mr-1 text-blue-400 inline" />
      <FaJs className="w-6 h-6 mr-1 text-yellow-400 inline" />
      <SiTypescript className="w-6 h-6 mr-1 text-blue-500 inline" />
      <FaReact className="w-6 h-6 mr-1 text-blue-300 inline" />
      <SiNextdotjs className="w-6 h-6 mr-1 text-black-400 inline" />
      <SiTailwindcss className="w-6 h-6 mr-1 text-blue-400 inline" />
      <SiBootstrap className="w-6 h-6 mr-1 text-purple-600 inline" />
      <SiSass className="w-6 h-6 mr-1 text-pink-400 inline" />
      <FaGithub className="w-6 h-6 mr-1 text-black-400 inline" />
      <VscVscode className="w-6 h-6 mr-1 text-blue-400 inline"/>
      </div>

    <div>
      <footer className="flex justify-center items-center pt-4">
      <h6 className="font-bold">© 2025 TiagoPdaS. Todos os direitos reservados.</h6> 
      </footer>
    </div>

    </div>


  )
}

export default page;