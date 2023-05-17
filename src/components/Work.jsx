
function Work() {
  return (
    <section className="py-8 m-4 ml-4 max-w-[1200px] mx-auto ">
      <h3 className="text-orange-300 ml-[30%] uppercase text-3xl ">experiencia</h3>
      <h2 className="text-white text-xl m-2">Empresas en las que he estado:</h2>
      <section className="grid gap-12 mt 12 sm:grid-cols-2"> 
        <article >
          <span className="text-[80px] text-orange-300">01</span>
          <h3 className="text-xl mb-4 text-white"><span className="text-orange-300">Critical security</span>, Ingeniero de soporte.</h3>
          <p className="text-white">Gestión de datos, realización de informes, actualización de servicios y planificación de instalación y despliegue de redes de comunicación.</p>
        </article>
        <article>
          <span className="text-[80px] text-orange-300">02</span>
          <h3 className="text-xl mb-4 text-white"><span className="text-orange-300">Make It Real</span>, FullStack Developer.</h3>
          <p className="text-white">Gestion de proyectos con metodologia agil SCRUM y Jira para control de procesos.</p>
        </article>
      </section>
    </section>
  )
}

export default Work