import Secret from "./Secret.jsx"

function App(){
  const showSecret = true;

  return (
    <div className="container">
      <p>Absolutely nothing to hide!</p>
      {showSecret ? <Secret /> : <>nothing here</>}
    </div>
  );
}

export default App