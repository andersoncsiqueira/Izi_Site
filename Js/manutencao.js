/*emailjs.init('user_Ql3EPt0M1o2HSnuWpAbCdEfGhIjKlMn')
// template_agabesk template id

// Public Key: user_AbCdEfGhIjKlMnOpQrStUvWxYz


document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = e.target.querySelector('button[type="submit"]');
    try {
      btn.disabled = true;
      btn.innerHTML = 'Enviando <span class="loading-dots">...</span>';
      
      // Envio do e-mail (substitua os IDs)
      await emailjs.sendForm(
        'user_Ql3EPt0M1o2HSnuWpAbCdEfGhIjKlMn',  // Ex: 'service_abc123'
        'template_agabesk', // Ex: 'template_xyz456'
        e.target
      );
      
      // Feedback visual
      btn.textContent = '✓ Enviado com sucesso!';
      document.getElementById('success-message').style.display = 'block';
      e.target.reset();
      
    } catch (error) {
      btn.disabled = false;
      btn.textContent = 'Tentar novamente';
      alert('Erro: ' + (error.text || 'Verifique o console (F12)'));
      console.error("Detalhes do erro:", error);
    }
  }); */ 

  // 1. INICIALIZAÇÃO GARANTIDA
function initEmailJS() {
    try {
      emailjs.init('user_Ql3EPt0M1o2HSnuWpAbCdEfGhIjKlMn'); // Versão síncrona
      console.log('EmailJS inicializado (modo legacy)');
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
      // Método tradicional (sem Promise)
      emailjs.sendForm(
        'service_u6ib55s',
        'template_agabesk',
        e.target,
        'user_Ql3EPt0M1o2HSnuWpAbCdEfGhIjKlMn' // Adicione a chave aqui também
      );
      
      btn.textContent = '✓ Enviado!';
      alert('Solicitação enviada com sucesso!');
    } catch (error) {
      console.error('Erro no envio:', error);
      btn.disabled = false;
      btn.textContent = 'Tentar Novamente';
      alert('Erro: ' + (error.text || 'Verifique sua conexão'));
    }
  });