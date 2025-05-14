import { useState } from "react";

function ListGroup() {
  let items = ["Hamedan", "Tehran", "Iran", "Mashahd"];
  //hook
  const [selectedIndex, setItemSelected] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((i, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={i}
            onClick={() => {
              setItemSelected(index);
            }}
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
