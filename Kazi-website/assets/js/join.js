const joinForm = document.getElementById('joinForm');

if (joinForm) {
  joinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const job = document.getElementById('job').value.trim();
    const city = document.getElementById('city').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const facebook = document.getElementById('facebook').value.trim();
    const portfolio = document.getElementById('portfolio').value.trim();
    const description = document.getElementById('description').value.trim();

    const subject = `Nouvelle candidature Kazi — ${fullName}`;

    const body = `
Nom complet : ${fullName}
Métier : ${job}
Ville : ${city}
Email : ${email}
WhatsApp : ${whatsapp}
Facebook : ${facebook}
Portfolio : ${portfolio}

Description :
${description}
`;

    window.location.href = `mailto:contact@kazi.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  });
}
