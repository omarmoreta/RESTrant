const React = require("react")
const Def = require("../default")

const Show = (data) => {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated.
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((total, comment) => {
            return total + comment.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ""
        for (let i = 0; i < averageRating; i++) {
            stars += "⭐️"
        }
        rating = (
            <h3>
                { stars }
            </h3>
        )
        comments = data.place.comments.map(comment => {
            return (
                <div className="border">
                    <h2 className="rant">{ comment.rant ? "Rant!😡": "Rave! 😻"}</h2>
                    <h4>{ comment.content }</h4>
                    <h3>
                        <strong>- { comment.author }</strong>
                    </h3>
                    <h4>Rating: { comment.stars }</h4>
                    <form method="POST" action={`/places/${ data.place.id }/rant/${ comment.id }?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
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
                        { rating }
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
                <div> 
                    <h3 className="text-center">Comments</h3>
                        {comments}
                    <h4 className="text-center">Got Your Own Rant or Rave?</h4>
                </div>  
                <form action={`/places/${data.place.id}/comment`} method="POST">                    
                    <div>
                        <label htmlFor="author">Name: </label>
                        <input className="form-control" type="text" id="author" name="author" placeholder="Name Here!"/>
                    </div>
                    <div>
                        <label htmlFor="stars">Rating: </label>                                
                        <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>                                  
                    </div>
                    <div>
                        <label htmlFor="rant">Is this a rant? </label>             
                        <input type="checkbox" id="rant" name="rant" />                         
                    </div>
                    <div>
                        <label htmlFor="content">Comment: </label>
                        <textarea className="form-control" type="text" id="content" name="content" placeholder="I love this place! ..."></textarea>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>                    
                </form>
            </main>
        </Def>
    )
}

module.exports = Show