import Feedback from "./Feedback/Feedback";


export function App () {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
       <Feedback/>
    </div>
  );
};

export default App