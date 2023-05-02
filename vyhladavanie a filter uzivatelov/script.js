//natiahnutie html
const result = document.querySelector('.user-list')
const input = document.querySelector('.input-filter')
const userList = []


input.addEventListener('input', function(e){
    dataFilter(e.target.value)
})


//vytvorenie funkcie getData
async function getData() {
    const allUsers = await fetch("https://randomuser.me/api?results=50")

    const data = await allUsers.json()
    console.log(data)
    //vycisti zoznam uzivatelov
    result.innerHtml = ""

    //budeme potrebovat len data.results
    data.results.forEach(function(user){
        const li = document.createElement('li')
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
        userList.push(li) 
    })


}

getData()

//funkcia na filtrovanie podla zadaneho textu do inputu
let dataFilter = function(inputText) {
    userList.forEach(function(user){
        if(user.textContent.toLowerCase().includes(inputText.toLowerCase())){
            user.classList.remove('hide')
        } else {
            user.classList.add('hide')
        }
    })
}