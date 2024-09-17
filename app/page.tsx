import Image from "next/image";

export default function Home() {
  return (
    <div>
      <title>
        Random Height Generator
      </title>
      <h1>
        Hello! Welcome to Random Height Generator
      </h1>
      <label htmlFor="fName">First Name:</label>
      <input type="text" id="fName" name= "fName"></input><br></br>
      <label htmlFor="lName"> Last Name:</label>  
      <input type="text" id="lName" name="lName"></input>

    </div>
  );
}
