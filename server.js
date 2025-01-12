require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
const corsOptions = {
  origin: ['https://mikaels.tn', 'https://www.mikaels.tn'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route POST pour l'inscription standard
app.post('/send-email', async (req, res) => {
  const { name, email, phone, level, type, school, schedule } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Mikaels" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Nouvelle Inscription au Cours d’Allemand',
    text: `
      Nouvelle inscription reçue :
      Nom : ${name}
      Email : ${email}
      Téléphone : +216 ${phone}
      Niveau : ${level}
      Type : ${type}
      École : ${school}
      Horaire : ${schedule}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email envoyé avec succès!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l’envoi de l’email.');
  }
});

// Route POST pour la consultation
app.post('/book-consultation', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    speciality,
    interested,
    remarks,
    date,
    time,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Mikaels" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Nouvelle Demande de Consultation',
    text: `
      Nouvelle demande de consultation reçue :
      
      Date du rendez-vous: ${date}
      Heure du rendez-vous: ${time}
      
      Informations du demandeur:
      Prénom: ${firstName}
      Nom: ${lastName}
      Email: ${email}
      Téléphone: +216 ${phone}
      Ville: ${city}
      Spécialité: ${speciality}
      Intéressé par les études en Allemagne: ${interested}
      
      Remarques: ${remarks || 'Aucune'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Rendez-vous confirmé! Un email a été envoyé.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la prise de rendez-vous.');
  }
});

// Route POST pour l'inscription à l'Ausbildung
app.post('/send-ausbildung', async (req, res) => {
  const { name, email, phone, domaine, level, remarks } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Mikaels" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Nouvelle Inscription à l’Ausbildung',
    text: `
      Nouvelle inscription à l’Ausbildung :
      Nom : ${name}
      Email : ${email}
      Téléphone : +216 ${phone}
      Domaine : ${domaine}
      Niveau : ${level}
      Remarques : ${remarks || 'Aucune'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Inscription Ausbildung envoyée avec succès!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l’envoi de l’email.');
  }
});

// Route POST pour "Étudier en Allemagne"
app.post('/send-etudier', async (req, res) => {
  const { name, email, phone, domaine, level, remarks } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Mikaels" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Nouvelle Inscription pour Étudier en Allemagne',
    text: `
      Nouvelle inscription pour Étudier en Allemagne :
      Nom : ${name}
      Email : ${email}
      Téléphone : +216 ${phone}
      Domaine : ${domaine}
      Niveau : ${level}
      Remarques : ${remarks || 'Aucune'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Inscription pour Étudier en Allemagne envoyée avec succès!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l’envoi de l’email.');
  }
});


// Route POST pour "Étudier en Allemagne"
app.post('/send-work', async (req, res) => {
  const { name, email, phone, domaine, level, remarks } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Mikaels" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Nouvelle Inscription pour travailler en Allemagne',
    text: `
      Nouvelle inscription pour Étudier en Allemagne :
      Nom : ${name}
      Email : ${email}
      Téléphone : +216 ${phone}
      Domaine : ${domaine}
      Niveau : ${level}
      Remarques : ${remarks || 'Aucune'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Inscription pour travailler en Allemagne envoyée avec succès!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l’envoi de l’email.');
  }
});

app.post('/bookgo', async (req, res) => {
  const {
    name,
    email,
    subject,
    message
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Mikaels Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `Nouvelle Consultation: ${subject}`,
    text: `
      Nouveau message de consultation :
      Nom : ${name}
      Email : ${email}
      Sujet : ${subject}
      Message :
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('<div class="alert alert-success">Message envoyé avec succès!</div>');
  } catch (error) {
    console.error(error);
    res.status(500).send('<div class="alert alert-danger">Erreur lors de l’envoi du message.</div>');
  }
});

app.post('/send-formular', async (req, res) => {
  const {
    firma,
    position,
    anrede,
    name,
    telefonnummer,
    email,
    branche,
    berufsprofil,
    standorte,
    suchen,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Institut Mikaels" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Nouvelle soumission du formulaire Kontaktformular',
    text: `
      Nouvelle soumission reçue :
      Firma : ${firma}
      Position : ${position}
      Anrede : ${anrede}
      Name : ${name}
      Telefonnummer : +49 ${telefonnummer}
      Email : ${email}
      Branche : ${branche}
      Berufsprofil : ${berufsprofil}
      Standorte : ${standorte}
      Suchen : ${suchen}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Formulaire envoyé avec succès!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l’envoi du formulaire.');
  }
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
