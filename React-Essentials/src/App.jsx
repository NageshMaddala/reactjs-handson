// below is called react hooks
// they are used to manage state in functional components
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

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
    // <div>
    // Fragment is a wrapper component that does not add any extra node to the DOM
    // It is used to group multiple elements without adding extra nodes to the DOM
    // It is used to return multiple elements from a component
    // There is shorter alternatve to use Fragment, just use empty tag <> </>
    // <Fragment>
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
    // </Fragment>

    // </div>
  );
}

export default App;
