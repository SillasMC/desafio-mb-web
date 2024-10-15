import { useState } from 'react'


import Registration from './forms/Registration'

function App() {
  const [result, setResult] = useState('')
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      {result ? (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h4 className="mt-10 text-left text-sm leading-9 tracking-tight text-gray-900">
            Resultado: {result}
          </h4>
        </div>
      ) : <Registration handleResult={str => setResult(str)} />
      }
    </div>
  )
}

export default App
