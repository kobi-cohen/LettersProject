//elements

const input1 = document.getElementById('inputBox1') // input name text
const input2 = document.getElementById('inputBox2') // input name text
const btn = document.getElementById('btn') // button
const con = document.getElementById('con') // div content
const div = document.createElement('div') //inner div content

let letters = new Map(list)

handler = () => {
  if (input1.value && input2.value != '') {
    let combine = input1.value + input2.value
    checkName(combine)
  } else error('חובה לקליד את שני השמות בשפה העברית בלבד')
  input1.value = ''
  input2.value = ''
}

checkName = value => {
  let final = []
  let temp = [...value]

  for (ch of temp) {
    if (letters.has(ch)) {
      final.push(ch)
    } else if (ch == "'") {
      continue
    } else {
      error('שם הנפטר  שם האב שגויים - אנא הקלד שם בשפה העברית בלבד')
      break
    }
  }
  if (final.length > 0) {
    print(final)
  }
}

print = final => {
  let value = null
  con.innerHTML = ''
  let neshama = 'נשמה'
  let nArr = [...neshama]
  console.log(final)
  for (el of final) {
    value = letters.get(el)
    console.log(value)
    con.innerHTML +=
      '<span>' + value[0] + '</span><div class="part">' + value + '</div>'
  }
  console.log(nArr)
  for (elm of nArr) {
    let v = letters.get(elm)
    con.innerHTML +=
      '<span>' + v[0] + '</span><div class="part">' + v + '</div>'
  }
}
error = msg => {
  con.innerHTML = ''
  console.log(msg)
  alert(msg)
}
btn.addEventListener('click', handler) // button event click and call to function

//created by Kobi Cohen - 2020
//date : 23/06/2020
