function Certificates({ certificates }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Certificados</h2>
      {certificates.map((cert, idx) => (
        <div key={idx} className="mb-2">
          <h3 className="font-bold">{cert.name}</h3>
          <p className="text-sm text-gray-600">{cert.date} - {cert.issuer}</p>
          <a href={cert.url} className="text-blue-600 underline" target="_blank" rel="noreferrer">
            Ver certificado
          </a>
        </div>
      ))}
    </section>
  );
}
export default Certificates
