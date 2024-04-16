import Student from "./Student/Student"

function App() {
    return(
      <>
        <Student name="Spongebob" age={30} isStudent={false}/>
        <Student name="Spongebob" age={42} isStudent={true}/>
        <Student/>
      </>
    )
}

export default App
