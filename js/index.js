const idElement = document.querySelector('#id')
const adviceElement = document.querySelector('#advice')
const button = document.querySelector('#button')

let debounce = null

async function getAdvice() {
  idElement.innerHTML = '0'
  adviceElement.innerHTML = 'Loading...'

  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()
  const { id, advice } = data.slip

  debounce = setTimeout(() => {
    clearTimeout(debounce)
    idElement.innerHTML = id
    adviceElement.innerHTML = advice
  }, 100);
}

button.addEventListener('click',getAdvice)

getAdvice()
