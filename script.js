//elements
const input = document.getElementById('inputBox')
const btn = document.getElementById('btn')
const con = document.getElementById('con')
const div = document.createElement('div')
let nameArr

//all letters values
let letters = new Map([
  ['A', 'AVI'],
  ['B', 'BENNY'],
  ['C', 'CREMBO'],
  ['D', 'DAMBO'],
  ['E', 'ELEMENTOR'],
  ['F', 'FALAFEL'],
  ['G', 'GUYAVA'],
  ['H', 'HAIFA'],
  ['I', 'INDEX'],
  ['J', 'JOJOBA'],
  ['K', 'KENNY'],
  ['L', 'LUBINSKY'],
  ['M', 'MARIJUANA'],
  ['N', 'NAPOLI'],
  ['O', 'OLIVER'],
  ['P', 'PINGUIN'],
  ['Q', 'QUIT'],
  ['R', 'REVERSE'],
  ['S', 'SUPER'],
  ['T', 'TITANIC'],
  ['U', 'UNIVERSAL'],
  ['V', 'VOLVO'],
  ['W', 'WOW'],
  ['X', 'XSITE'],
  ['Y', 'YELLOW'],
  ['Z', 'ZEBRA'],
])

makePray = () => {
  nameArr = [...input.value.toUpperCase()]
  con.innerHTML = ''
  for (el of nameArr) {
    con.innerHTML += '<div><br>' + letters.get(el) + '</div>'
  }
  input.value = ''
}

btn.addEventListener('click', makePray)

//created by Kobi Cohen - 2020
//date : 23/06/2020
