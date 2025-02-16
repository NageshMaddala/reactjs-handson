import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

export const userData = {
  firstName: "Nagesh", // feel free to replace the name value
  lastName: "Maddala", // feel free to replace the name value
  title: "Developer", // feel free to replace the title value
};

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export function User() {
  return (
    <div>
      <h2>
        {userData.firstName} {userData.lastName}
        <p>{userData.title}</p>
      </h2>
    </div>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
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

// Props are the values passed to the component
// They help to make the component reusable
// Props are passed as attributes to the component
// Props are passed as an object to the component
// props can be named anything, but it's a convention to name it props
// Object destructuring is used to extract the values from the object
// Object destructuring is a javascript feature
// export function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt="Stylized atom" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// Along with above function, this is also a valid way to write the function
export function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="Stylized atom" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// All the jsx functions should start with capital letter
// Jsx functions contain html, javascript, and css code together
// Jsx functions are called components
// Components are reusable pieces of code
// Components can be nested
// Components are transformed into html by React framework that can be rendered in the browser
// React function should always start with a capital letter
// All built in components are lower case letters, othewise there will be collision
// To distinguish between built in components and user defined components capital letters are used
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <User />
      </main>
    </div>
  );
}

export default App;
