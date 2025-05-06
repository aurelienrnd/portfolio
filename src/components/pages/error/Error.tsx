import { Link } from 'react-router';
function Error() {
  return (
    <main>
      <section id="error">
        <div className="text-center">
          <h1>Erreur 404</h1>
          <p>Page non trouvée</p>
        </div>

        <Link to="/" className="btn">
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}

export default Error;
