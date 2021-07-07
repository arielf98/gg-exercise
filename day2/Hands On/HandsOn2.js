


const students = [
    {name : 'indah', age : 20},
    {name : 'permata', age : 21},
    {name : 'sari', age : 20}
]


// let children = [{num: 6, name: 'me', phone: 7}, {num: 8, name: 'him', phone: 9}];

function addHeaders(table, keys) {
  let row = table.insertRow();
  for( let i = 0; i < keys.length; i++ ) {
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode(keys[i]));
  }
}

// buat elemen table
let table = document.createElement('table')

// for loop
for( let i = 0; i < students.length; i++ ) {

  let child = students[i];
  if(i === 0 ) {
    addHeaders(table, Object.keys(child));
  }
  let row = table.insertRow();
  Object.keys(child).forEach(function(k) {
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode(child[k]));
  })
}

document.getElementById('container').appendChild(table);


// call back function for acc
function studentAvg(acc, {age}){

    return acc + age
}

// fucntion to get average age from students 
function getAverage(students){

    const total = students.reduce(studentAvg, 0)
    return total / students.length
} 

// calling start calculation
const startCalculation  = async () => {

        console.log('start calculation')
        const res  = await secondCall()
        console.log(res)
}

// calling second call
const secondCall =  () =>{

  return new Promise((resolve, reject) => {
    console.log('second call started');
   
    setTimeout(() => {
        resolve('second call finished')
        thirdCall().then(res => {
            console.log(res)
        })
    }, 2000);
  });

}

// call third 
const thirdCall = () => {
  return new Promise((resolve, reject) => {
      resolve('third call started')
    setTimeout(() => {
      const avg = getAverage(students)
      console.log(`age is ${avg}`)
      document.getElementById('average').innerHTML = avg 
      thirdCallFinish().then(res => {
        console.log(res)
      })
    }, 5000);
  });
}

const thirdCallFinish = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('third call finished')
    }, 5000)
  })
}

// call when button click
const handleClick = async () =>{

    await startCalculation()
}

document.getElementById('btn-avgAge').addEventListener('click', handleClick)
