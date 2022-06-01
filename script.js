const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')
const copiar = document.querySelector('.copy')

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage = 'none'
  copiar.style.display = 'inline'
  inputTexto.value = ' '
}
