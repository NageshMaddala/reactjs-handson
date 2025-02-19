import TabButton from "../TabButton";

export default function Tabs({ children, buttons, buttonsContainer }) {
    // buttonsContainer is a prop that is passed to the Tabs component
    // Below ButtonsContainer is a variable that is assigned the value of buttonsContainer prop
    // This is done to avoid using the prop directly in the JSX below    
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}