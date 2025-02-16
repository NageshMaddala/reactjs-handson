import "./CoreConcepts.css";

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
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="Stylized atom" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}