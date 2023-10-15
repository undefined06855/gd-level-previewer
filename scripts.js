function getGDLevel(id)
{
    fetch("http://82.26.119.92:25565/get/" + id)
    .then(data => data.text())
    .then(data => {
        console.log(JSON.parse(data))
    })
}