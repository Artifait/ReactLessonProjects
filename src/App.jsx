import './App.css'
import MyText from './components/MyText'
import UserInfo from './components/UserInfo'
import Vip from './components/Vip'

function App() {
  return (
    <div>
      <h1>Крутое WEB приложение</h1>
      <MyText/>
      <hr/>
      <UserInfo name="Студент 1" groupNumber="12"/>
      <UserInfo name="Студент 32" groupNumber="0"/>
      <UserInfo/>
      <Vip/>
      <hr/>
      
      </div>
  )
}

export default App
