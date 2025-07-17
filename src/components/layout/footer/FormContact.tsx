import React, { useState } from 'react';

// Typage TypeScript
type FormDataType = {
  nom: string;
  email: string;
  message: string;
};

/** Affiche un formulaire de contact dans le footer
 * @description - Affiche un formulaire qui préremplit un e-mail quand l'utilisateur le valide.
 * @returns {JSX.Element} - Un formulaire de contact.
 */
function FormContact(): React.JSX.Element {
  // Données du formulaire
  const [formData, setFormData] = useState<FormDataType>({
    nom: '',
    email: '',
    message: '',
  });

  // Gestion des données du formulaire
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const champForm: HTMLInputElement | HTMLTextAreaElement = event.target;
    const name: string = champForm.name;
    const value: string = champForm.value;

    setFormData((prev: FormDataType) => ({ ...prev, [name]: value }));
  };

  // Création d'un e-mail prérempli
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const { nom, email, message }: FormDataType = formData;
    const mailtoLink: string = `mailto:aurelienarnaud921@gmail.com?subject=Contact depuis le portfolio&body=Nom: ${encodeURIComponent(nom)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full md:w-1/3 gap-4"
    >
      <h2>Contact</h2>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <input
          type="text"
          name="nom"
          placeholder="Votre nom"
          value={formData.nom}
          onChange={handleChange}
          required
          aria-label="nom"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="email"
        />
      </div>

      <textarea
        name="message"
        placeholder="Votre message"
        rows={2}
        value={formData.message}
        onChange={handleChange}
        required
        aria-label="message"
      />
      <button type="submit" className="btn">
        Envoyer
      </button>
    </form>
  );
}

export default FormContact;
