function getGDLevel(id)
{
    fetch("http://82.26.119.92:25565/get/" + id)
    .then(data => data.text())
    .then(data => {
        console.log(JSON.parse(data))
    })
}

let loadedAllObjects = false
let objectTextures = []
let loadedObjects = 0
let totalObjects = 1

function waitForLoadedObjects()
{
    if (loadedObjects == totalObjects) loadedAllObjects = true
    requestAnimationFrame(waitForLoadedObjects)
}

waitForLoadedObjects()

function loadObjectTextures()
{
    console.log("Loading objects...")
    fetch("assets/mappings.json")
    .then(data => data.json())
    .then(objects => {
        totalObjects = objects.length
        for (let objectId in objects)
        {
            let object = objects[objectId]
            console.log(object.texture)
        }
    })
}

loadObjectTextures()

