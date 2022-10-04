const React = require("react");
const Def = require("../default");

const Index = (data) => {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div key={ index } className="col-sm-6">
        <h2 className="text-center">
          <a href={ `/places/${index}` }>{ place.name }</a>
        </h2>
        <p className="text-center">{ place.cuisines }</p>
        <img src={ place.pic } alt={ place.name } />
        <p className="text-center">Located in { place.city }, { place.state }</p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        <div className="row">
          {placesFormatted}
        </div>
      </main>
    </Def>
  );
};

module.exports = Index;
