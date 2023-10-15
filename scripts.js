function getGDLevel(id)
{
    fetch("http://127.0.0.1:5000/get/" + id)
    .then(data => data.text())
    .then(data => {
        console.log(JSON.parse(data))
    })
}