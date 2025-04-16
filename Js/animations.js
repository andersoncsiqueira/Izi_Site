const slight = document.querySelectorAll(".slight")

slight.forEach(element => {

    Array.from(element.children).forEach(a => {
      a.addEventListener("mouseenter", a => {
        element.style.animationPlayState = 'paused'
        console.log("innnnnnnnnnnnnnnnnnn")
      })
  
      a.addEventListener("mouseleave", a => {
        element.style.animationPlayState = 'running'
      })
  
  
    })
  
  })
  
