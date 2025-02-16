function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
