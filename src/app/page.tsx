import LogsList from "@/components/ui/LogsList";
import AddLogModal from "@/components/ui/AddLogModal";
import { journalEntries } from "@/data/journalEntry";

export default function Home() {

  return (
    <main>

      <h1 className="text-4xl text-center my-8">Abhith's Dev Journal</h1>

      <section className="flex flex-col items-center">
        <div>
        {
          journalEntries.map((entry, index) => {
            return <LogsList {...entry} key={index} />
          })
        }
        </div>
      </section>

      {/* <AddLogModal/> */}
      

    </main>
  );
}
