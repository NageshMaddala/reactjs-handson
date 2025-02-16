// below is called react hooks
// they are used to manage state in functional components
import { useState } from "react";

import componentsImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

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
  // useState is a hook that allows you to manage state in functional components
  // This must be called at the top level of functional component

  // This is a hook that allows you to manage state in functional components
  // selectedTopic is a state variable that holds the current selected topic
  // Initially it is set to "Please click a button"
  // When the button is clicked, the state variable is updated to the selected topic
  // It's value is set via setSelectedTopic function internally
  // const [selectedTopic, setSelectedTopic] = useState("components");
  const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent = 'Please select a tab to see the content';

  function handleSelect(selectedButton) {
    // selectedButton could be "Components", "JSX", "Props", "State"
    // console.log(`Selected button: ${selectedButton}`);
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    console.log(`Selected Topic in store is ${selectedTopic}`);
    console.log(`Function props is ${selectedButton}`);
  }

  console.log("App component rendered");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* JSX has ability to render array data like below snippets */}
          {["Hello World", "Hello React", "Hello JSX", "Hello Components"]}
          {[
            <p>Hello World</p>,
            <p>Hello React</p>,
            <p>Hello JSX</p>,
            <p>Hello Components</p>,
          ]}

          <ul>
            {/* key prop is used to identify each element in the array */}
            
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept
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
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* Below code works fine too */}
          {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
