function Projects({ projects }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Proyectos</h2>
      {projects.map((project, idx) => (
        <div key={idx} className="mb-2">
          <h3 className="font-bold">{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.url} className="text-blue-600 underline" target="_blank" rel="noreferrer">
            Ver proyecto
          </a>
        </div>
      ))}
    </section>
  );
}
export default Projects