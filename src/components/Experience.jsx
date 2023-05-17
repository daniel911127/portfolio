
function Experience() {
  return (
    <div>
      <h3 className="text-orange-300 ml-[30%] uppercase text-3xl mb-4">proyectos</h3>
      <section className="w-full flex flex-row justify-center flex-wrap gap-px mb-6 "> 
        <article className="w-72 h-72 flex justify-center flex-col mr-4 bg-sky-950 p-4 rounded-2xl">
          <a href="https://latamairlines.vercel.app" target="_blank" rel="noopener noreferrer">
          <img src="/images/aerolinea.png" alt="aerolinea" />
          </a>
          <a href="https://github.com/daniel911127/latam-airline-frontend-clone" target="_blank" rel="noopener noreferrer">
            <p className="text-white text-center mt-4 ">vamos al código! </p>
          </a>
        </article>
        <article className="w-72 h-72 flex justify-center flex-col bg-sky-950 p-4 rounded-2xl">
          <a href="http://sports21.infinityfreeapp.com/?i=1" target="_blank" rel="noopener noreferrer">
          <img src="/images/sports21.png" alt="ecommerce" />
          </a>
          <a href="https://github.com/daniel911127/Sports21" target="_blank" rel="noopener noreferrer">
            <p className="text-white text-center mt-4">vamos al código! </p>
          </a>
        </article>
        <article></article>
      </section>
    </div>
  )
}

export default Experience