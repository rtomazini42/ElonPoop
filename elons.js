function substituirTextoNosNosDeTexto(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      var textoOriginal = node.textContent;
      var novoTexto = textoOriginal.replace(/Elon Musk|@elonmusk/g, '💩🚀');
      node.textContent = novoTexto;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (var i = 0; i < node.childNodes.length; i++) {
        substituirTextoNosNosDeTexto(node.childNodes[i]);
      }
    }
  }
  
  substituirTextoNosNosDeTexto(document.body);
  