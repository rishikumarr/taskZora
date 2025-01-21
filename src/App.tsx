import './App.css';
import { AuthProvider } from './context/AuthContext';

interface AppProps{
  children: React.ReactNode
}

const App:React.FC<AppProps> = ({children}) => {
  return (
      <AuthProvider>
        <div className='w-full min-h-svh bg-gradient-to-b from-slate-400 to-slate-200 flex items-center justify-center overflow-hidden'>
            <div className='w-[80%] max-w-7xl min-w-80 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg shadow-lg p-1'>
              <div className='bg-white w-full h-[90vh] min-h-[30em] p-4 rounded-lg flex flex-col'>
                {children}
              </div>
            </div>
        </div>
      </AuthProvider>
  );
}

export default App
