const React = require("react")
const Def = require("./default")

const Home = () => {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="images/burger.jpg" alt="Flying burger with separated ingredients" />
                <div>
                    Photo by <a href="https://unsplash.com/@pablomerchanm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pablo Merchán Montes</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
    )
}

module.exports = Home