(() => {
  // Business WhatsApp number taken from the supplied ASIF promotional poster.
  const BUSINESS_WHATSAPP = '917505656213';
  function sendToWhatsApp(form) {
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = [`ASIF - ${form.dataset.formType || 'Enquiry'}`, ''];
    for (const [key, value] of data.entries()) {
      if (String(value).trim()) lines.push(`${key}: ${value}`);
    }
    lines.push('', 'Please contact me regarding this enquiry.');
    const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  document.getElementById('janForm')?.addEventListener('submit', e => {
    e.preventDefault();
    sendToWhatsApp(e.currentTarget);
  });
  document.getElementById('photoForm')?.addEventListener('submit', e => {
    e.preventDefault();
    sendToWhatsApp(e.currentTarget);
  });
})();