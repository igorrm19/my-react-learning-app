
import "./App.css"
import MyButton from './components/myButton';
import UserAvatar from './components/userAvatar';
import StatesBadge from './components/statesBadge';
import image from './assets/react.svg';


function App() {
  function statusClick() {
    let status = prompt("Digite o status")
    if (status !== "online" || status !== "offline") {
      alert("Status invalido")
      statusClick()
    }
    return status
  }
  return (
    <>
      <h1>Primeiro codigo react do projeto</h1>
      <MyButton label="click me" color="blue" onClick={statusClick} />
      <UserAvatar imageURL={image} sizeH="150" sizeW="150" />
      <StatesBadge status={statusClick()} />
    </>
  )
}

export default App
