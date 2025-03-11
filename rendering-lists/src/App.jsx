import List from './List.jsx'

function App() {

  const richPeople = [
    {
      name: "Jeff",
      riches: 25,
    },
    {
      name: "Elon",
      riches: 30,
    }
  ];

  return(
    <List list={richPeople} />
  );
}

export default App