const React = require("react")
const Def = require("../default")

const Show = (data) => {
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
                <h3>No comment yet!</h3>
            </main>
        </Def>
    )
}

module.exports = Show