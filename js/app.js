function validarSenha() {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const mensagem = document.getElementById("mensagem");

  const senhaInput = document.getElementById("senha");
const forcaSenha = document.getElementById("forcaSenha");

senhaInput.addEventListener("input", () => {
  const senha = senhaInput.value;

  if (senha.length < 4) {
    forcaSenha.textContent = "Senha fraca";
  } else if (senha.length < 8) {
    forcaSenha.textContent = "Senha média";
  } else {
    forcaSenha.textContent = "Senha forte";
  }
});

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