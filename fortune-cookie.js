const fortunes = require("./fortunes.json")

const getFortune = () => {
    const index = Math.floor(Math.random() * fortunes.length)
    const fortune = fortunes[index]
    return fortune
}

module.exports = getFortune