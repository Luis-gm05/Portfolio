function Header({ basics }) {
  return (
    <header className="text-center">
      <h1 className="text-3xl font-bold">{basics.name}</h1>
      <p className="text-lg text-gray-600">{basics.label}</p>
      <p>{basics.email} · {basics.phone}</p>
      <a href={basics.url} className="text-blue-600" target="_blank" rel="noreferrer">
        {basics.url}
      </a>
      <div>
        <a href={basics.profiles[0].url} className="text-blue-600 underline" target="_blank" rel="noreferrer">
          LinkedIn: {basics.profiles[0].username}
        </a>
      </div>
    </header>
  );
}
export default Header