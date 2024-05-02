
import './App.css'
import Card from './components/card'


function App() {


  return (
    <>
      <h1 className='headingStyle'>The article element</h1>
      <Card
        titleText="Module-1"
        description="Mordan javascript is the feuture developer future plan than you can ask me th future javascript" />
      
      <Card titleText = "Module-2" description = "Mordan javascript is the feuture developer future plan than you can ask me th future javascript" />
      <Card titleText = "Module-3" description = "Mordan javascript is the feuture developer future plan than you can ask me th future javascript" />
      <Card titleText = "Module-4" description = "Mordan javascript is the feuture developer future plan than you can ask me th future javascript" />
     
    </>
  )
}

export default App
