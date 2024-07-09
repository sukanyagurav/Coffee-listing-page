import Container from "./components/Container"
import { motion } from "framer-motion"

function App() {

  return (
    <>
      <main className="main">
      <motion.h1 className="text-4xl text-white font-semibold text-center" 
      
      >Our Collection</motion.h1>
      <p className="text-[#6F757C] w-[100%] md:w-[50%] mx-auto my-4 text-md font-semibold text-center">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      <Container/>
    </main>
    </>
  
  )
}

export default App
