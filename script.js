/* BACK LISTENER */

let back = document.getElementsByClassName('back-button')
for (let x = 0; x < back.length; x++) {
  back[x].addEventListener('click', function () {
    let leftSide = document.getElementById('left')
    leftSide.style.marginLeft = '-120%'
  })
}

/* LINK LISTENER */
let links = document.getElementsByClassName('linked')
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (e) {
    let leftSide = document.getElementById('left')
    let contents = document.getElementsByClassName('content')

    for (let j = 0; j < contents.length; j++) {
      contents[j].style.setProperty('display', 'none')
    }

    let content_active = links[i].dataset.id
    let active = document.getElementById(content_active)

    active.style.setProperty('display', 'block')

    leftSide.style.marginLeft = '0'
  })
}

window.addEventListener('resize', function () {
  let w = window.innerWidth
  let h = window.innerHeight

  let leftSide = document.getElementById('left')

  if (w > 960) {
    leftSide.style.marginLeft = '0%'
  } else {
    leftSide.style.marginLeft = '-120%'
  }
})
