

// text for title
document.title = "MY ALBUM"

// text for h1
document.getElementsByTagName('h1')[0].innerHTML = "Create Playlist"

// text for card
document.getElementsByTagName('p')[0].innerHTML = "Drone Bocil Kematian"
document.getElementsByTagName('p')[1].innerHTML = "Bocil Kematian"
document.getElementsByTagName('p')[2].innerHTML = "Awas Ada Bocil Kematian"


// show alert when button on click
function handleClick(e){
    e.preventDefault()
    const title = document.getElementById('title').value
    const desc = document.getElementById('description').value
    title === '' && desc === '' ? 
    alert('Kosong Seperti Hatimu') :
    alert(` Title : ${title} Description : ${desc}`)
    
}

document.getElementById('btn-submit').addEventListener('click', handleClick)
