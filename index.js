const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased (variable) {
  let newHeads = variable.map(tutorial => tutorial.split(' ') )
  let bin = []
    for (i = 0; i < newHeads.length; i++){
      let me = newHeads[i].map(mes => mes.charAt(0).toUpperCase() + mes.substr(1)).join(" ")
      bin.push(me)
  }
  return bin
}