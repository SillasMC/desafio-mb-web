import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl text-blue-500">MB Web</h1>
      <div className='mt-8 inline-flex'>
        <button className="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
