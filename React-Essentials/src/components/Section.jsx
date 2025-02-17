// forwarded props to the section element
// forwareded props below is with spread opertor {...props}
// spread operator is used to pass all the properties of an object as props to a component
// spread props can be named anything, but it is a convention to name it as restProps or props
// ...props can contain any number of properties, e.g. id, className, style, etc.
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
