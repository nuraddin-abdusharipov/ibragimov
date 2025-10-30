const langSelect = document.getElementById("langSelect");
langSelect.addEventListener("change", changeLanguage);

function changeLanguage() {
  const lang = langSelect.value;
  document.querySelectorAll("[data-uz]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const botToken = '8234840071:AAHsJkaDLcWEA1ZyUSGbfXcsoOgkag3K-Zo';
  const chatId = '7787131118';

  const text = `📩 Yangi xabar!\n\n👤 Ism: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    })
  })
  .then(res => {
    if (res.ok) {
      alert('✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.');
      document.getElementById('contactForm').reset();
    } else {
      alert('❌ Xabar yuborilmadi. Internetni tekshiring.');
    }
  })
  .catch(() => alert('❌ Xatolik yuz berdi. Keyinroq urinib ko‘ring.'));
});
