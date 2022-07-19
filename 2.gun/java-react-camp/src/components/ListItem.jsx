function ListItem({ name }) {
  return (
    <div>
      {
        <li key={name.id}>
          <span>{name.name}</span>
        </li>
      }
    </div>
  );
}

export default ListItem;
