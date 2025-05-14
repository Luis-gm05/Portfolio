function Languages({ languages }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Idiomas</h2>
      <ul className="list-disc list-inside text-gray-700">
        {languages.map((lang, idx) => (
          <li key={idx}>
            {lang.language}: <span className="text-gray-600">{lang.fluency}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Languages