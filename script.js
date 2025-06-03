document.addEventListener("DOMContentLoaded", function () {
  $("#album").turn({
    width: 800,
    height: 500,
    autoCenter: true,
    gradients: true,
    elevation: 50
  })
})

document.getElementById("next").addEventListener("click", () => {
  $("#album").turn("next")
})
document.getElementById("prev").addEventListener("click", () => {
  $("#album").turn("previous")
})