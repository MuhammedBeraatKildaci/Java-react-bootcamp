function ListItem({ name }) {
  return (
    <article>
      <li className="person" key={name.id}>
        <div>
          <img src={`./images/${name.id}.jpg`} alt={name.firstName} />
        </div>
        <div className="text person-list-item">
          {name.firstName} {name.lastName}
        </div>
      </li>
    </article>
  );
}

export default ListItem;
