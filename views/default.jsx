const React = require("react")

const Def = (html) => {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
                <link href="css/style.css" rel="stylesheet" />
            </head>
            <body>
                <div className="container text-center">
                { html.children }
                </div>
            </body>
        </html>
    )
}

module.exports = Def