function Skills({ skills }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc pl-5">
        {skills.map((skill, idx) => (
          <li key={idx}><strong>{skill.name}</strong> – {skill.level}</li>
        ))}
      </ul>
    </section>
  );
}
export default Skills
