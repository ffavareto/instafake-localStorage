let publicacao = JSON.parse(localStorage.getItem("publicacao")) || []

function sendPubli() {
  let username = document.getElementById('username').value
  let urlPhoto = document.getElementById('url').value

  publicacao.unshift(
    {
      username: username,
      urlPhoto: urlPhoto
    }
  )

  saveOnStorage()
  clearInputs()
}

function saveOnStorage() {
  localStorage.setItem('publicacao', JSON.stringify(publicacao))
}

function clearInputs() {
  document.getElementById('username').value = ''
  document.getElementById('url').value = ''
}
