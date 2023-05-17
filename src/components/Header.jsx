import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  //SiMongodb,
  //SiMicrosoftsqlserver,
} from "react-icons/si";
import {FaNode} from "react-icons/fa"

const Header = () => {
  return (
    <section >
      <section className=" md:grid md:grid-cols-[1fr_1fr] md:min-h-[300px] mt-[50px]">
        <div>
          <img src="/images/imagen.jpeg" alt="photo" className="w-full " />
        </div>
        <section className="flex flex-col text-white font-bold px-4 py-4  bg-sky-950 text-center justify-center">
          <h2 className="text-3xl text-center">
            Hola, soy Daniel Moreno. FullStack developer,{" "}
            <span className="text-orange-300">
              me encuentro en Bogotá Colombia.
            </span>
          </h2>
          <p className="mt-4">
            Lo que mas me emociona de la industria de la tecnología es el
            aprendizaje continuo y algo que me define como persona es la
            disciplina que aplico para todo en mi vida y siempre estar buscando
            llegar al siguiente nivel.
          </p>
        </section>
      </section>
      <div>
        <div>
          <h2 className="text-orange-300 text-3xl ml-[30%] py-12 uppercase">principales skills</h2>
        </div>
        <div className="flex flex-col flex-wrap justify-center w-full">
          <div className="bg-sky-950 w-full  flex flex-row justify-around p-1.5 md:h-[100px]">
            <SiHtml5 className="ml-4 md:w-36 md:h-[80px] h-[60px] w-[50px] text-orange-300 " />
            <div>
              <h2 className=" md:ml-12 text-orange-300 text-3xl md:mt-6 mt-3">HTML</h2>
            </div>
          </div>
          <div className="bg-orange-300 w-full  flex flex-row-reverse justify-around p-1.5 md:h-[100px]">
            <SiJavascript className="ml-4 md:w-36 md:h-[80px] h-[60px] w-[50px] text-sky-950" />
            <p className=" md:ml-12 text-sky-950 text-3xl md:mt-6 mt-3">JAVASCRIPT</p>
          </div>
          <div className="bg-sky-950 w-full  flex flex-row justify-around p-1.5 md:h-[100px]">
            <SiCss3 className=" ml-2 md:w-36 md:h-[80px] h-[60px] w-[50px] text-orange-300" />
            <p className=" md:ml-12 text-orange-300 text-3xl md:mt-6 mt-3">CSS</p>
          </div>
          <div className="bg-orange-300 w-full  flex flex-row-reverse justify-around p-1.5 md:h-[100px]">
            <SiReact className="ml-4 md:w-36 md:h-[80px] h-[60px] w-[50px] text-sky-950" />
            <p className=" md:ml-12 text-sky-950 text-3xl md:mt-6 mt-3">REACT.JS</p>
          </div>
          <div className="bg-sky-950 w-full  flex flex-row justify-around p-1.5 md:h-[100px]">
            <FaNode className="ml-4 md:w-36 md:h-[80px] h-[60px] w-[50px] text-orange-300" />
            <p className=" md:ml-12 text-orange-300 text-3xl md:mt-6 mt-3">NODE.JS</p>
          </div>
          {/*<div className="bg-sky-950 w-full  flex flex-row justify-around p-1.5">
            <SiMongodb className="ml-4 w-36 h-32 text-orange-300" />
            <p className=" ml-12 text-orange-300 text-3xl mt-10">MONGODB</p>
          </div>
          <div className="bg-orange-300 w-full  flex flex-row-reverse justify-around p-1.5">
            <SiMicrosoftsqlserver className="ml-4 w-36 h-32 text-sky-950" />
            <p className=" ml-12 text-sky-950 text-3xl mt-10">SQLSERVER</p>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Header;
