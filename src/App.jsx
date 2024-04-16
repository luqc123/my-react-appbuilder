import UserGreeting from "./UserGreeting"

//npm run dev start test
function App() {
    return(
      <>
        <UserGreeting isLoggedIn={true} username="Luqc"/>
        <UserGreeting isLoggedIn={false} username="Pengman"/>
        <UserGreeting/>
      </>
    )
}

export default App
