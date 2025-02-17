import { useState, Fragment } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";

export default function Examples() {
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

  console.log("Examples component rendered");

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
    <Section title="Examples" id="examples">
      {/* <h2>Examples</h2> */}
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
    </Section>
  );
}
