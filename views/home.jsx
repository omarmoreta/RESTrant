const React = require("react")
const Def = require("./default")

const Home = () => {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <a href="/places">
                <button className="btn btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
    )
}

module.exports = Home