import { nanoid, customAlphabet } from "nanoid";
function NanoIDConcepts() {


  // Create a custom nanoid generator that uses only numbers
  const nanoidNumbers = customAlphabet('0123456789', 6); // Generates a 6-digit numeric ID

 
  const numericId = nanoidNumbers();  // Generate a numeric ID
  console.log(numericId); // Example output: "123456"
  
  
  const id=nanoid(6) //Generates a 6 digit alphabetic ID
  console.log(id) //Example output: "asdfgh"
  return (
    <>
    </>
  )
}
export default NanoIDConcepts;