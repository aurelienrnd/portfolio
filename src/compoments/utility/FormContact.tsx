// Hook
import { useState } from 'react';

/** Affiche un formulaire de contact dans le footer
 * @description - Affiche un formulaire qui preremplie un email quand l'utilisateur le valide
 * @returns {JSX.Element} - Un formulaire de contact
 */
function FormContact(): React.JSX.Element {
  //Datas du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  //Gestion des data du formulaire
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const champForm = event.target;
    const name = champForm.name;
    const value = champForm.value;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  //Creation d'un email preremplie
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { nom, email, message } = formData;
    const mailtoLink = `mailto:tonemail@example.com?subject=Contact depuis le portfolio&body=Nom: ${encodeURIComponent(nom)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className=""
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className=""
          />
        </div>

        <textarea
          name="message"
          placeholder="Votre message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          required
          className=""
        />
        <button type="submit" className="">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default FormContact;
