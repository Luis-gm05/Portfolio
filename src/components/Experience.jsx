function Experience({ work }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Experiencia</h2>
      {work.map((job, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="font-bold text-lg">{job.position} en <a href={job.url} className="text-blue-600" target="_blank" rel="noreferrer">{job.name}</a></h3>
          <p className="text-sm text-gray-600">{job.startDate} – {job.endDate}</p>
          <p>{job.summary}</p>
        </div>
      ))}
    </section>
  );
}
export default Experience

