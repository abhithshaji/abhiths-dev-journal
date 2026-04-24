"use client"
import Image from "next/image";
import { useState } from "react";
import { getTodaysDate } from "@/lib/helpers";

const handleNewJournalEntry = () => {
  console.log("hai");
}

const AddLogModal = () => {

  const [openModal, setOpenModal] = useState(false);
  let todaysDate = getTodaysDate();


  return (
    <div >
      <section className="cursor-pointer hover:scale-105 fixed bottom-8 right-8 w-16 h-16">
        <Image src={"/images/pen.svg"} fill alt="pen" onClick={handleNewJournalEntry} />
      </section>
      <section className="fixed left-1/2 top-1/2 -translate-1/2 z-99 h-screen w-screen bg-background/95">
        <div className="fixed left-1/2 top-1/2 -translate-1/2 z-100 p-8 rounded-2xl bg-foreground/80 text-background">
          <label htmlFor="date">Date : </label>
          <input type="text" defaultValue={todaysDate} className="focus:outline-none bg-foreground p-2 rounded-lg my-4" />
          <br />
          <label htmlFor="logs">Add the logs :</label>
          <br />
          <textarea autoFocus className="focus:outline-none h-48 w-xl bg-foreground rounded-2xl p-4 my-4">

          </textarea>


          <span className="flex justify-end">
            <button type="submit" className="cursor-pointer">Done</button>
          </span>

        </div>
      </section>
    </div>
  )
}



export default AddLogModal