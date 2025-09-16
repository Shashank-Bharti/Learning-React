import './App.css'
import Card from'./Components/Card.jsx'

function App() {

  return (
    <>
    <div className="p-5 bg-green-500 hover:bg-green-400 mb-5 text-3xl font-medium rounded-2xl shadow-md shadow-green-500/40 text-gray-800 " >Tailwind <white className="text-amber-50">CSS</white></div>
    <div className='flex gap-2'>
      <Card type="Special" title='Just Testing'/>
      <Card type="Hello" title='World' />
      <Card type="Component" />
    </div>
    </>
  )
}

export default App
