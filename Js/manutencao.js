
function initEmailJS() {
  try {
    emailjs.init('Ql3EPt0M1o2HSnuWpAbCdEfGhIjKlMn'); // Public Key nova
    console.log('EmailJS inicializado');
    return true;
  } catch (e) {
    console.error('Falha na inicialização:', e);
    return false;
  }
}

// 2. USO DO FORMULÁRIO
document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');

  if (!initEmailJS()) {
    alert('Serviço de e-mail indisponível');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    const response = await emailjs.sendForm(
      'service_u6ib55s',
      'template_agabesk',
      e.target,
      'pURGulpydpq0i2lab' // Public Key
    );

    console.log('SUCESSO:', response.status, response.text);
    btn.textContent = '✓ Enviado!';
    
  } catch (error) {
    console.error('Erro no envio:', error);
    btn.disabled = false;
    btn.textContent = 'Tentar Novamente';
    alert('Erro: ' + (error.text || 'Verifique sua conexão'));
  }
});
