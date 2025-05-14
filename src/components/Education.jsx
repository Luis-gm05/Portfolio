function Education({ education }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Educación</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="font-bold text-lg">{edu.studyType} en <a href={edu.url} className="text-blue-600" target="_blank" rel="noreferrer">{edu.institution}</a></h3>
          <p className="text-sm text-gray-600">{edu.startDate} – {edu.endDate}</p>
          <p className="italic text-sm">{edu.area}</p>
          <p className="text-sm">Cursos: {edu.courses.join(', ')}</p>
        </div>
      ))}
    </section>
  );
}
export default Education
