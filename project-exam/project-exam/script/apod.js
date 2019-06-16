// Connecting to the API

fetch("https://api.nasa.gov/planetary/apod?api_key=FpM17CzfR8syoZbk3VDUvwkPQa3prCJfv7Oh6Yry")
.then(result => result.json())
.then((res) => {
    createAPOD(res);
})
.catch(err => console.log(err))


// Displaying the data from API

function createAPOD(result){
    document.getElementsByClassName('apod-img').innerHTML += "<img src='https://apod.nasa.gov/apod/image/1906/N00172886_92_beltramini.jpg'>" + result.url + "";
    
    document.getElementById('apod').innerHTML += "<div><h2>" + result.title + "</h2><p>" + result.explanation + "</p></div>";
}



