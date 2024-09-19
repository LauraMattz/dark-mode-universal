(function() {
    // Verifica se o CSS já foi injetado
    if (!document.getElementById('dark-mode-styles')) {
      // Cria um link para o CSS
      const darkModeStyles = document.createElement('link');
      darkModeStyles.rel = 'stylesheet';
      darkModeStyles.type = 'text/css';
      darkModeStyles.href = chrome.runtime.getURL('darkmode.css');
      darkModeStyles.id = 'dark-mode-styles';
  
      // Adiciona o link ao head da página
      document.head.appendChild(darkModeStyles);
    }
  })();
  