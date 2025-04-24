function Test() {
  return (
    <section className="h-screen bg-[#1e293b] flex items-center justify-center px-4  text-color-two">
      <div className="max-w-2xl text-center space-y-6">
        <h2 className="title">Titre de section</h2>

        <p className="texte">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dignissim convallis est.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn">Action principale</button>

          <a
            href="#"
            className="text-blue-300/75 hover:underline hover:text-blue-300"
          >
            Lien secondaire
          </a>
        </div>
      </div>
    </section>
  );
}

export default Test;
