const React = require("react")
const Def = require("./default")

const Error404 = () => {
    return (
        <Def>
            <main>
                <h1>404: PLACE NOT FOUND</h1>
                <p>Oops, sorry, we can't fnd this place!</p>
            </main>
        </Def>
    )
}

module.exports = Error404
