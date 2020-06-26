//elements

const input1 = document.getElementById('inputBox1')
const btn = document.getElementById('btn')
const con = document.getElementById('con')
const div = document.createElement('div')

let letters = new Map(list)
let flag = true

// reset the text field and the arrays and throw an Alert message if wrong text
reset = () => {
  const tempNameArr = []
  const finalNameArr = []
  if (!flag) {
    console.log('Wrong')
    input1.value = ''
  }
  checkName(tempNameArr, finalNameArr)
}

//Check the name in the field
checkName = (temp, final) => {
  temp = [...input1.value]
  for (ch of temp) {
    if (letters.has(ch) || ch == "'") {
      final.push(ch)
    } else {
      flag = false
      reset()
      break
    }
  }
  if (final.length > 0) {
    console.log(final)
  }
}

btn.addEventListener('click', reset) // button event click and call to function

//created by Kobi Cohen - 2020
//date : 23/06/2020
