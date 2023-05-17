import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
import {SiGmail} from "react-icons/si"

function Footer() {
  return (
    <div>
      <footer>
        <nav className="flex ">
          <a href="https://github.com/daniel911127" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="text-sky-950 w-[40px] h-[40px] ml-4 hover:text-orange-300"/>
          </a>
          <a href="https://www.linkedin.com/in/danielmoreno11/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-sky-950 w-[40px] h-[40px] ml-4 hover:text-orange-300"/>
          </a>
          <a href="">
          <SiGmail className="text-sky-950 w-[40px] h-[40px] ml-4 hover:text-orange-300"/>
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer