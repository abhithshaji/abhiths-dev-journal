"use client"
import Image from "next/image";
import { useState } from "react";
import { getTodaysDate } from "@/lib/helpers";


const AddLogModal = () => {

  let todaysDate = getTodaysDate();

  const [openModal, setOpenModal] = useState(false);

  const toggleModalState = () => {
    setOpenModal(!openModal);
  }

  const handleFormSubmission = (event:React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    let {date,logs}= formValues;
    
    let seperatedLogs = logs.toString().split(/\r?\n|\r|\n/g);

    console.log(seperatedLogs);
    
    // update the displayed journal logs with new entry
   
  }


  return (
    <div >
      <section className="cursor-pointer hover:scale-105 fixed bottom-8 right-8 w-16 h-16">
        <Image src={"/images/pen.svg"} fill alt="pen" onClick={toggleModalState} />
      </section>
      <section className="fixed left-1/2 top-1/2 -translate-1/2 z-99 h-screen w-screen bg-background/95">
        <div className="fixed left-1/2 top-1/2 -translate-1/2 z-100 p-8 rounded-2xl bg-foreground/80 text-background">
          <form onSubmit={handleFormSubmission}>
            <label htmlFor="date">Date : </label>
            <input type="text" defaultValue={todaysDate} name="date" className="focus:outline-none bg-foreground p-2 rounded-lg my-4" />
            <br />
            <label htmlFor="logs">Add the logs :</label>
            <br />
            <textarea autoFocus name="logs" className="focus:outline-none h-48 w-xl bg-foreground rounded-2xl p-4 my-4">

            </textarea>


            <span className="flex justify-end">
              <input type="submit" value="Done" className="cursor-pointer" />
            </span>
          </form>
        </div>
      </section>
    </div>
  )
}



export default AddLogModal