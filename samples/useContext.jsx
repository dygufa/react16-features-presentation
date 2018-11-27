const NumberContext = React.createContext();

function App() {
  return (
    <NumberContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
    const value = useContext(NumberContext);
    return <div>The answer is {value}.</div>;
}
