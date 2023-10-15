// geometry dash api handcrafted with love by me :)

let convert = require("gd-level-to-json")

const gd = {
    getLevelRequest: function (id) {
        return new GDRequest(
            "database/downloadGJLevel22.php",
            "Wmfd2893gb7",
            {
                levelID: id,
                gameVersion: "21",
                binaryVersion: "35",
                gdw: "0"
            }
        )
    }
}

class GDRequest
{
    constructor(
        endpoint,
        secret,
        data
    )
    {
        this.endpoint = endpoint
        this.secret = secret
        this.data = data

        this.corsBypass = "http://127.0.0.1:8080/"
    }

    send()
    {
        return new Promise(resolve => {
            fetch(this.corsBypass + "https://www.boomlings.com/" + this.endpoint, {
                method: "POST",
                //mode: "no-cors",
                headers: new Headers({
                    "User-Agent": "",
                    "Content-Type": "application/x-www-form-urlencoded",
                }),
                body: formatBodyData(this.secret, this.data)
            })
            .then(data => data.text())
            .then(data => {
                if (data != "-1")
                    resolve(formatGDData(data))
                else
                    resolve(-1)
            })
        })
    }
}

// formatBodyData(secret, data)
function formatBodyData(b,c){let a=`secret=${b}`;for(let d in c){let e=c[d];a+=`&${d}=${e}`}return a}

function formatGDData(data)
{
    let levelData = data.substring(
        data.indexOf("4:") + 1, 
        data.lastIndexOf(":5")
    )
    return convert(levelData)
}

module.exports = { gd }
