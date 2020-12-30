let feed = document.querySelector('.content')

const publicacao = JSON.parse(localStorage.getItem("publicacao"))

for (i of publicacao) {
  const publi = document.createElement('div')
  publi.setAttribute('class', 'publi')

  const user = document.createElement('h3')
  user.textContent = i.username

  const imgContent = document.createElement('div')

  const img = document.createElement('img')
  img.setAttribute('src', i.urlPhoto)

  publi.appendChild(user)
  imgContent.appendChild(img)
  publi.appendChild(imgContent)

  feed.appendChild(publi)
}