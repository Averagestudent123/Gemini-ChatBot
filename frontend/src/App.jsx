import './App.css'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Gemini AI ChatBot</h1>

      <div className="max-w-330 border mx-auto grid grid-cols-[25%_auto] gap-5 p-5">
        <form action="" className="shadow-lg py-4">
          <textarea name="" id="" className="w-full h-50 border-2 p-3"></textarea>
          <button className="bg-black text-white w-full py-4">Ask Something</button>
        </form>

        <div className="border-l border-gray-300">
          <div className="h-75 overflow-y-scroll p-3"></div>
        </div>
      </div>
    </>
  )
}

export default App

