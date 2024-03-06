const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3, // Adding an id for Percy Lavon Julian
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4, // Adding an id for Subrahmanyan Chandrasekhar
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function People() {
  const chemist = people
    .filter((chemist) => chemist.profession === "chemist")
    .map((chemist) => <li key={chemist.id}>{chemist.name}</li>);
  return (
    <div>
      <div>{chemist}</div> 
    </div>
  );
}
