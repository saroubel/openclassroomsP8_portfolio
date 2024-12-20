import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import emailjs from '@emailjs/browser';  //Import Email JS

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  // Fonction de soumission du formulaire verifie si tous les champs sont remplis
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Nom est requis");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Adresse mail est requis");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Sujet est requis");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message est requis");
    } else {
      setError(false);  // Réinitialise l'état d'erreur
      sendEmail();      // Appel de la fonction sendEmail pour envoyer le mail

    }
  };
  

  // Fonction pour envoyer vers EmailJS + timer msg
const sendEmail = () => {
  console.log("envoi de mail ");

  emailjs
    .send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, {
      nom: formdata.name,
      email: formdata.email,
      subject: formdata.subject,
      message: formdata.message
    }, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage("Votre message a été envoyé !");
        // Réinitialiser le formulaire
        setFormdata({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Timer pour effacer le message après 3 secondes
        setTimeout(() => {
          setMessage("");
        }, 2000);
      },
      (error) => {
        console.log('FAILED...', error);
        setMessage("Échec de l'envoi du message. Veuillez réessayer.");
        // Timer pour effacer le message
        setTimeout(() => {
          setMessage("");
        }, 2000);
      },
    );
};


 // Fonction de mise à jour des champs de formulaire
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };


  // Fonction pour formater le numéro de teléphone
  const numberFormatter = (number) => {
    const phnNumber = number;
    return phnNumber;
  };


  // Fonction pour afficher les alertes
  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };


  // Fonction pour afficher les informations de contact depuis l'API 
  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);


  // Affichage de la page
  return (
    <Layout>
      <Helmet>
        <title>Contact - Portfolio Personel de Sara Bellaf</title>
        <meta
          name="description"
          content="Page contact du Portfolio Personel de Sara Bellaf"
        />
      </Helmet>

      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">

          <div className="container">
            <Sectiontitle title="Contactez-moi" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Formulaire de contact</h4>
                  <form
                    action="#"
                    className="mi-form mi-contact-form"
                    onSubmit={submitHandler}
                  >
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">
                        Entrez votre nom*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="contact-form-name"
                        value={formdata.name}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Entrez votre email*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        id="contact-form-email"
                        value={formdata.email}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">
                        Entrez le sujet*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="subject"
                        id="contact-form-subject"
                        value={formdata.subject}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">
                        Entrez le message*
                      </label>
                      <textarea
                        onChange={handleChange}
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="6"
                        value={formdata.message}
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Envoyer !
                      </button>
                    </div>
                  </form>
                  {handleAlerts()}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  {!phoneNumbers ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Phone />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Téléphone</h6>
                        {phoneNumbers.map((phoneNumber) => (
                          <p key={phoneNumber}>
                            <a href={numberFormatter(phoneNumber)}>
                              {phoneNumber}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!emailAddress ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Mail />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Email</h6>
                        {emailAddress.map((email) => (
                          <p key={email}>
                            <a href={`mailto:${email}`}>{email}</a>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!phoneNumbers ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.MapPin />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Addresse</h6>
                        <p>{address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Contact;
