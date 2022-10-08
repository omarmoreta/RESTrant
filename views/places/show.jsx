const React = require("react")
const Def = require("../default")

const Show = (data, id) => {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col">                    
                        <img src={ data.place.pic } alt={ data.place.name } style={{ marginTop: "80px"}}/>
                        <p className="text-center">Located in { data.place.city }, { data.place.state }</p>
                        <p className="text-center">{ data.place.cuisines }</p>                    
                    </div>
                    <div className="col">
                        <h1 style={{ marginTop: "80px"}}>{ data.place.name }</h1>
                        <h2>Rating</h2>
                        <h2>Comment</h2>
                        <a href={ `/places/${ data.id }/edit` } className="btn btn-warning">Edit</a>
                        <form action={ `/places/${ data.id }?_method=DELETE` } method="POST">
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>                
                </div>
            </main>
        </Def>
    )
}

module.exports = Show