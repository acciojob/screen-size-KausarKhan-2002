//your JS code here. If required.

let heading = document.querySelector("h1")

// window.addEventListener("load", () => {
//     heading.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
// })

window.addEventListener("resize", () => {
    heading.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
})