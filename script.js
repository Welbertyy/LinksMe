function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./Acessets/assets/welberty456-removebg-preview.png"
    )
  } else {
    img.setAttribute(
      "src",
      "./Acessets/assets/welberty456-removebg-preview.png"
    )
  }

  const textProfile = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    textProfile.setAttribute(
      "alt",
      "Foto de Welberty Noleto developer full stack!"
    )
  } else {
    textProfile.setAttribute(
      "alt",
      "Foto de Welberty Noleto, programador full stack!"
    )
  }
}
