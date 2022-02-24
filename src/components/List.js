import Person from "./Person";

function List() {
  const names = ["Felipe", "Adriana", "Lucas"];
  const persons = [
    {
      name: "Diego",
      secondName: "Felipe"
    },
    {
      name: "Luz",
      secondName: "Adriana"
    },
    {
      name: "Lucas",
      secondName: "Gaitan"
    }
  ];
  const personList = persons.map((person, id) => (
    <Person key={id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default List;
