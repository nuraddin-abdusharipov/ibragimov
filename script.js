const langSelect = document.getElementById("langSelect");
langSelect.addEventListener("change", changeLanguage);

function changeLanguage() {
  const lang = langSelect.value;
  document.querySelectorAll("[data-uz]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  const botToken = '8234840071:AAHsJkaDLcWEA1ZyUSGbfXcsoOgkag3K-Zo'; // ⚠️ test uchun
  const chatId = '6689539218';
  const text = `📩 Yangi xabar!\n\n👤 Ism: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();
    if (data.ok) {
      alert('✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.');
      e.target.reset();
    } else {
      console.error('Telegram javobi:', data);
      alert('❌ Xabar yuborilmadi. Iltimos, keyinroq urinib ko‘ring.');
    }
  } catch (error) {
    console.error(error);
    alert('⚠️ Internet yoki token bilan muammo yuz berdi.');
  }
});


