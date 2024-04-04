import { AuthProvider, useAuth } from './context/AuthContext'
import Login from './screens/Auth/Login'
import Welcome from './screens/User/Welcome'
import './styles/main.css'

function App() {
  return (
    <AuthProvider>
      <AuthCheck />
    </AuthProvider>
  )
}

const AuthCheck = () => {
  const { user } = useAuth()
  return user ? <Welcome /> : <Login />
}

export default App
