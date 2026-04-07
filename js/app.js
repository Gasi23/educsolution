function mostrarSenha() {
  const senha = document.getElementById("senha");
  const confirmarSenha = document.getElementById("confirmarSenha");

  if (senha.type === "password") {
    senha.type = "text";
    confirmarSenha.type = "text";
  } else {
    senha.type = "password";
    confirmarSenha.type = "password";
  }
}