const React = require("react")
const Def = require("../default")

const Show = (data) => {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(comment => {
            return (
                <div className="border">
                    <h2 className="rant">{ comment.rant ? <span>Rant! &#128548;</span> : <span>Rave! &#129321;</span> }</h2>
                    <h4>{ comment.content }</h4>
                    <h3>
                        <strong>- { comment.author }</strong>
                    </h3>
                    <h4>Rating: { comment.stars }</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">                    
                        <img src={ data.place.pic } alt={ data.place.name } />
                        <h3 className="text-center">
                            Located in { data.place.city }, { data.place.state }
                        </h3>          
                    </div>
                    <div className="col-sm-6">
                        <h1>{ data.place.name }</h1>                        
                        <h2>Rating</h2>
                        <h3>Not Rated</h3>
                        <h2>Description</h2>
                        <h3>
                            { data.place.showEstablished() }
                        </h3>
                        <h4 className="text-center">
                            Serving { data.place.cuisines}
                        </h4>              
                        <a href={ `/places/${ data.place.id }/edit` } className="btn btn-warning">Edit</a>
                        <form action={ `/places/${ data.place.id }?_method=DELETE` } method="POST">
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>                
                </div>
                <hr/>
                <h2>Comment</h2>
                {comments}
            </main>
        </Def>
    )
}

module.exports = Show