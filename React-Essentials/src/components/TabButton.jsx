// props.children is automatically passed to the button element
// this is provided by React
// This approach is called component composition

// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// OnClick is a prop, it can be applied on any element
// OnClick would invoke a locally defined function
// Note: handleClick should not be used with parentheses, otherwise it will be invoked immediately
// OnSelect prop is a function that is passed to the TabButton component
// It is invoked when the button is clicked
// It is passed as a prop to the TabButton component
// Basically we are passing function pointer
export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton component rendered");
  return (
    <li>
      {/* className is react specific to set the class */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

function handleClick() {
  console.log("Button clicked");
}
