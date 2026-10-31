(() => {
  const body = document.body;
  const themeButton = document.getElementById('themeToggle');
  const langButton = document.getElementById('languageToggle');
  const menuButton = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const savedTheme = localStorage.getItem('asif-theme');
  if (savedTheme === 'dark') body.classList.add('dark');
  if (themeButton) themeButton.textContent = body.classList.contains('dark') ? '☀' : '☾';
  themeButton?.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('asif-theme', body.classList.contains('dark') ? 'dark' : 'light');
    themeButton.textContent = body.classList.contains('dark') ? '☀' : '☾';
  });
  menuButton?.addEventListener('click', () => mobileNav?.classList.toggle('open'));
  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

  const translations = {
    en: {
      navHome:'Home',navJan:'Jan Seva Kendra',navPhoto:'Photo Studio',navAbout:'About',navContact:'Contact',
      heroEyebrow:'WELCOME TO ASIF',heroTitle:'Everything you need,<br><em>in one place.</em>',
      heroText:'From digital services to preserving your memories, ASIF is here for you.',
      chooseEyebrow:'EXPLORE OUR BUSINESSES',chooseTitle:'What service are you looking for?',
      chooseText:'Choose what you need and visit the dedicated page.',
      janCardTitle:'ASIF Jan Seva Kendra',janCardText:'Assistance with government schemes, documents and online services.',
      photoCardTitle:'ASIF Photo Studio',photoCardText:'Photography and videography for weddings, birthdays and every special occasion.',
      exploreJan:'Explore services',explorePhoto:'Explore studio',stripText:'Your work • Your memories • Our priority',
      aboutEyebrow:'ABOUT ASIF',aboutTitle:'Two distinct services, one trusted identity.',
      aboutText:'ASIF brings together a Jan Seva Kendra and a Photo Studio. Each has its own dedicated services and customer journey.',
      contactEyebrow:'VISIT OR CONTACT',contactTitle:'Get in touch',footerIntro:'Digital assistance and creative memories, together on one platform.',
      footerBusiness:'Our Businesses',footerInfo:'Information',footerAbout:'About ASIF',footerWork:'Shop & Working Hours',
      footerWebsite:'About Website',footerContact:'Contact',govTitle:'Jan Seva Kendra',
      govText:'Application assistance and guidance for government and digital services.',
      servicesTitle:'Our Services',servicesIntro:'Choose a service and contact us for more information.',
      navServices:'Services',navEnquiry:'Enquiry'
    },
    hi: {
      navHome:'होम',navJan:'जन सेवा केंद्र',navPhoto:'फोटो स्टूडियो',navAbout:'हमारे बारे में',navContact:'संपर्क',
      heroEyebrow:'ASIF में आपका स्वागत है',heroTitle:'आपकी हर जरूरत,<br><em>एक ही जगह।</em>',
      heroText:'डिजिटल सेवाएँ हों या आपकी यादों को संजोना, ASIF आपके साथ है।',
      chooseEyebrow:'हमारे व्यवसाय',chooseTitle:'आप किस सेवा की तलाश में हैं?',
      chooseText:'अपनी जरूरत चुनें और सीधे संबंधित पेज पर जाएँ।',
      janCardTitle:'आसिफ जन सेवा केंद्र',janCardText:'सरकारी योजनाओं, दस्तावेज़ों और ऑनलाइन सेवाओं के लिए सहायता।',
      photoCardTitle:'आसिफ फोटो स्टूडियो',photoCardText:'शादी, जन्मदिन और हर खास मौके की फोटोग्राफी व वीडियोग्राफी।',
      exploreJan:'सेवाएँ देखें',explorePhoto:'स्टूडियो देखें',stripText:'आपका काम • आपकी यादें • हमारी प्राथमिकता',
      aboutEyebrow:'ASIF के बारे में',aboutTitle:'दो अलग सेवाएँ, एक भरोसेमंद पहचान।',
      aboutText:'ASIF के अंतर्गत जन सेवा केंद्र और फोटो स्टूडियो, दोनों की सेवाएँ अलग-अलग और व्यवस्थित तरीके से उपलब्ध हैं।',
      contactEyebrow:'मिलें या संपर्क करें',contactTitle:'हमसे संपर्क करें',footerIntro:'डिजिटल सहायता और खूबसूरत यादें, एक ही प्लेटफॉर्म पर।',
      footerBusiness:'हमारे व्यवसाय',footerInfo:'जानकारी',footerAbout:'ASIF के बारे में',footerWork:'दुकान और समय',
      footerWebsite:'वेबसाइट के बारे में',footerContact:'संपर्क',govTitle:'जन सेवा केंद्र',
      govText:'सरकारी एवं डिजिटल सेवाओं के लिए आवेदन सहायता और मार्गदर्शन।',
      servicesTitle:'हमारी सेवाएँ',servicesIntro:'अपनी जरूरत की सेवा चुनें और जानकारी के लिए संपर्क करें।',
      navServices:'सेवाएँ',navEnquiry:'पूछताछ'
    }
  };
  let language = localStorage.getItem('asif-language') || 'hi';
  function applyLanguage() {
    const dict = translations[language];
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });
    if (langButton) langButton.textContent = language === 'hi' ? 'हिं / EN' : 'EN / हिं';
  }
  applyLanguage();
  langButton?.addEventListener('click', () => {
    language = language === 'hi' ? 'en' : 'hi';
    localStorage.setItem('asif-language', language);
    applyLanguage();
  });
  document.querySelectorAll('.service-enquiry').forEach(button => {
    button.addEventListener('click', () => {
      const select = document.getElementById('janService');
      if (select) select.value = button.dataset.service;
      document.getElementById('enquiry')?.scrollIntoView({behavior:'smooth'});
    });
  });
})();