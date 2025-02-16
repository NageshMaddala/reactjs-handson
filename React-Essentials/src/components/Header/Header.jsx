const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* // {} indicates a dynamic value can be added between the curly braces, only expressions are allowed there */}
        {/* {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
