// ===============================
// KAZI JOIN FORM — WHATSAPP SUBMIT
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const joinForm = document.getElementById('joinForm');

  if (!joinForm) return;

  joinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName')?.value.trim();
    const job = document.getElementById('job')?.value.trim();
    const city = document.getElementById('city')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const whatsapp = document.getElementById('whatsapp')?.value.trim();
    const facebook = document.getElementById('facebook')?.value.trim();
    const portfolio = document.getElementById('portfolio')?.value.trim();
    const description = document.getElementById('description')?.value.trim();
    const portfolioUpload = document.getElementById('portfolio-upload');

    const uploadedFiles = portfolioUpload?.files
      ? Array.from(portfolioUpload.files).map((file) => file.name)
      : [];

    if (!fullName || !job || !city || !email || !portfolio || !description) {
      alert('Veuillez remplir tous les champs obligatoires avant d’envoyer.');
      return;
    }

    const fileText =
      uploadedFiles.length > 0
        ? uploadedFiles.join(', ')
        : 'Aucun fichier ajouté';

    const message = `
Bonjour, je souhaite créer un profil sur Kazi.

INFORMATIONS DU PROFIL
Nom complet : ${fullName}
Métier : ${job}
Ville : ${city}

CONTACT
Email : ${email}
WhatsApp : ${whatsapp || 'Non renseigné'}
Facebook : ${facebook || 'Non renseigné'}

PORTFOLIO
Lien portfolio : ${portfolio}
Fichiers sélectionnés : ${fileText}

DESCRIPTION
${description}

Merci.
    `.trim();

    const kaziWhatsappNumber = '15819941312';

    const whatsappUrl = `https://wa.me/${kaziWhatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, '_blank');
  });
});
