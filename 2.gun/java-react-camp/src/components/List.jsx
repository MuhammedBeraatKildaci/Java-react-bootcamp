import ListItem from "./ListItem";

function List({ names }) {
  return (
    <div>
      {names.map((name) => (
        <ul>
          <ListItem name={name} />
        </ul>
      ))}
    </div>
  );
}

export default List;
