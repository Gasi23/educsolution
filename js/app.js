function validarSenha() {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const mensagem = document.getElementById("mensagem");

  function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

  if (senha.length < 6) {
    mensagem.textContent = "A senha precisa ter pelo menos 6 caracteres.";
    return false;
  }

  if (senha !== confirmarSenha) {
    mensagem.textContent = "As senhas não coincidem.";
    return false;
  }

  mensagem.textContent = "Senha válida!";
  return true;
}