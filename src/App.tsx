import './App.css';
import { AuthProvider } from './context/AuthContext';

interface AppProps{
  children: React.ReactNode
}

const App:React.FC<AppProps> = ({children}) => {
  return (
      <AuthProvider>
        <div>
          <h1 className='bg-slate-500 text-center text-slate-50'>TODO app</h1>
            {children}
        </div>
      </AuthProvider>
  );
}

export default App
