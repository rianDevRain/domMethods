// let sectionElement = document.querySelector('section')
// sectionElement.innerHTML = sectionElement.innerHTML + '<div>hello</div>'

const button = document.createElement('button')
button.append('Click Here to Show Site')
const sectionElement = document.querySelector('body')
sectionElement.append(button)



const newMain = document.createElement('main')
// newMain.append('This is the main')
sectionElement.append(newMain)

const imgElement = document.createElement('img')
imgElement.src = 'https://source.unsplash.com/random/300x300/?code'
imgElement.class = 'image'
const mainElement = document.querySelector('main')
mainElement.append(imgElement)

const anchor = document.createElement('a')
anchor.href = 'https://rian.dev'
anchor.text = 'rian.dev'
anchor.class = 'link'
anchor.style.fontSize = '30px'
anchor.style.paddingLeft = '10px'
newMain.append(anchor)
anchorCheck = document.querySelector('link')

// const textInput = document.createElement('input')
// textInput.placeholder = 'Type .image or .link'
// textInput.id = 'input'
// sectionElement.append(textInput)
// const button2 = document.createElement('button')
// button2.append('Click to remove image or link')
// sectionElement.append(button2)
// button.append('')

// textInputValue = textInput.value



// const newScript = document.createElement('script')

const clickButton = () => {
    if (document.body.contains(newMain)) {
        newMain.remove()
    } else {
        sectionElement.append(newMain)
        mainElement.append(imgElement)
        newMain.append(anchor)
    }
}

// const clickButton2 = selector => {
//     if(selector === '.image' || selector === '.link') {
//         anotherFunction(textInputValue)
//     } else {
//         // alert('Please type .input or .link')
//     }

// }

// const anotherFunction = selector2 => {
//     if(selector2 === '.link') {
//         if(newMain.contains(slector2)) {
//             selector2.remove()
//         } else {
//             sectionElement.append(anchor)
//         }
//     }
// }

button.addEventListener("click", clickButton)
// button2.addEventListener("click", clickButton2(textInputValue))



// https://source.unsplash.com/random/?city,night