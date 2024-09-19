let isEnabled = true;

chrome.action.onClicked.addListener((tab) => {
  // Verifica se a URL da aba é uma página 'chrome://'
  if (tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://')) {
    console.log('Não é possível executar scripts em URLs chrome://');
    return;
  }

  isEnabled = !isEnabled;

  if (isEnabled) {
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["darkmode.css"]
    }).catch((err) => {
      console.error('Falha ao inserir CSS:', err);
    });
  } else {
    chrome.scripting.removeCSS({
      target: { tabId: tab.id },
      files: ["darkmode.css"]
    }).catch((err) => {
      console.error('Falha ao remover CSS:', err);
    });
  }
});
