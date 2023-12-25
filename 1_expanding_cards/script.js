const panels = document.querySelectorAll('.panel')
const mText = document.querySelectorAll('.panel h3')
const mContain = document.querySelector('.container')

// console.log (mText.item(0).innerHTML)
// console.log(panels.item(0).children)
// console.log(panels.item(0))
// console.log(mContain)
// console.log(mContain.offsetHeight)

// panels.item(0).classList.add('active')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// panels.item(0).classList.remove('active')
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}