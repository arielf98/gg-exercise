

// text for title
document.title = "MY ALBUM"

// text for h1
document.getElementsByTagName('h1')[0].innerHTML = "Create Playlist"


// get data from restfull api 
function getDataFromApi(){

    const url = 'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json'
    fetch(url)
        .then(response => response.json())
        .then(data => {

            // add data to text 
            document.getElementsByTagName('p')[0].innerHTML = `${data.name}`
            document.getElementsByTagName('p')[1].innerHTML = `${data.artists[0].name}`
            document.getElementsByTagName('p')[2].innerHTML = `${data.album.name}`
            console.log(data)
        })
        .catch(e => {
            console.log(e)
            alert('ada error')
        })
}

getDataFromApi()

// show alert when button on click
function handleClick(e){
    
    e.preventDefault()
    let title = document.getElementById('title').value
    let desc = document.getElementById('description').value

    if(title !== '' && desc !== ''){
        alert(` Title : ${title} Description : ${desc}`)
            document.getElementById('title').value = ''
            document.getElementById('description').value = ''
       } else {
        alert('Kosong Seperti Hatimu') 
       }
}

document.getElementById('btn-submit').addEventListener('click', handleClick)
