import ConceptElement from "./ConceptElement";

const ConceptsList = ({ concepts }) => {
  return (
    <ul id='concepts'>
      {concepts.map((concept) => (
        <ConceptElement {...concept} key={concept.title} />
      ))}
    </ul>
  );
};
export default ConceptsList;
