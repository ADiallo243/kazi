// ===============================
// KAZI JOIN FORM — WHATSAPP SUBMIT
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const joinForm = document.getElementById('joinForm');
  const portfolioUpload = document.getElementById('portfolio-upload');
  const filePreview = document.getElementById('filePreview');

  if (!joinForm) return;

  if (portfolioUpload && filePreview) {
    portfolioUpload.addEventListener('change', () => {
      const files = Array.from(portfolioUpload.files || []);

      if (files.length === 0) {
        filePreview.textContent = 'Aucun fichier sélectionné.';
        return;
      }

      const fileNames = files.map((file) => file.name).join(', ');
      filePreview.textContent = `Fichiers sélectionnés : ${fileNames}`;
    });
  }

  joinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName')?.value.trim();
    const job = document.getElementById('job')?.value.trim();
    const city = document.getElementById('city')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const whatsapp = document.getElementById('whatsapp')?.value.trim();
    const social = document.getElementById('social')?.value.trim();
    const portfolio = document.getElementById('portfolio')?.value.trim();
    const description = document.getElementById('description')?.value.trim();

    const uploadedFiles = portfolioUpload?.files
      ? Array.from(portfolioUpload.files).map((file) => file.name)
      : [];

    if (
      !fullName ||
      !job ||
      !city ||
      !email ||
      !whatsapp ||
      !portfolio ||
      !description
    ) {
      alert('Veuillez remplir tous les champs obligatoires avant d’envoyer.');
      return;
    }

    const fileText =
      uploadedFiles.length > 0
        ? uploadedFiles.join(', ')
        : 'Aucun fichier sélectionné';

    const message = `
Bonjour, je souhaite créer un profil sur Kazi.

INFORMATIONS DU PROFIL
Nom complet : ${fullName}
Métier : ${job}
Ville : ${city}

CONTACT
Email : ${email}
WhatsApp : ${whatsapp}
Réseau social : ${social || 'Non renseigné'}

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
