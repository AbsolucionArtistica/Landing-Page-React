import React from "react";
import Jumbotron from "./jumbotronProperties.jsx";
import Card from "./cardProperties.jsx";
import NavBar from "./navProperties.jsx";
//include images into your bundle

//create your first component
const Home = () => {
  return (
    <>
      <NavBar
        mainTitle="Start Bootstrap"
        title1="Home"
        title2="About"
        title3="Services"
        title4="Contact"
      />
      <div id="mainDiv" className="container-fluid">
        <Jumbotron
          title="A Warm Welcome!"
          description="Apoyado en el pozo, pobre joven, vuelves hacia mí tu cabeza gentil, con una risa grave en los ojos. Tú eres, David, como un toro en un día de abril, que de la mano de un muchacho que ríe, va dulce a la muerte."
          button="Call to action!"
        />
        <div className="row">
          <Card
            img="https://static.nationalgeographic.es/files/styles/image_3200/public/2774.600x450.jpg?w=1600"
            description="Cuando el mar sea redondo y el sol deje de brillar, ese será el día en que te pueda olvidar."
            button="Find out more!"
          />
          <Card
            img="https://static.nationalgeographic.es/files/styles/image_3200/public/2774.600x450.jpg?w=1600"
            description="Cuando el mar sea redondo y el sol deje de brillar, ese será el día en que te pueda olvidar."
            button="Find out more!"
          />
          <Card
            img="https://static.nationalgeographic.es/files/styles/image_3200/public/2774.600x450.jpg?w=1600"
            description="Cuando el mar sea redondo y el sol deje de brillar, ese será el día en que te pueda olvidar."
            button="Find out more!"
          />
          <Card
            img="https://static.nationalgeographic.es/files/styles/image_3200/public/2774.600x450.jpg?w=1600"
            description="Cuando el mar sea redondo y el sol deje de brillar, ese será el día en que te pueda olvidar."
            button="Find out more!"
          />
        </div>
        <div className="row">
          <div className="col-lg-12 bg-dark p-5">
            <p className="m-3 text-center text-white">Copyright &copy; Your Website Name 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
