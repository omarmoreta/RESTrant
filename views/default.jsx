const React = require("react")

const Def = (html) => {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
                <link href="/css/style.css" rel="stylesheet" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Place</a></li>
                    </ul>
                </nav>
                <div className="container text-center">
                    { html.children }
                </div>
                <div>
                    <footer className="footer">Created By Omar Moreta <div>&copy; 2022</div></footer>
                </div>
            </body>
        </html>
    )
}

module.exports = Def