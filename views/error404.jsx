const React = require("react")
const Def = require("./default")

const Error404 = () => {
    return (
        <Def>
            <main>
                <h1>404: PLACE NOT FOUND</h1>
                <p>Oops, sorry, we can't fnd this place!</p>
                <div>
                    <img src="/images/404.jpg" alt="Ice Cream Cone on the ground" />
                    <div>
                        Photo by <a href="https://unsplash.com/@akloska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Amanda Kloska</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Error404
