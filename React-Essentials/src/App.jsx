import componentsImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";

export const userData = {
  firstName: "Nagesh", // feel free to replace the name value
  lastName: "Maddala", // feel free to replace the name value
  title: "Developer", // feel free to replace the title value
};


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
