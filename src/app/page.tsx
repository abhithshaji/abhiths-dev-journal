import JournalEntry from "@/components/ui/JournalEntry";
import { journalEntries } from "@/data/journalEntry";

export default function Home() {


  return (
    <main >
      <h1 className="text-4xl text-center my-8">Abhith's Dev Journal</h1>

      <section className="flex justify-center">

        {
          journalEntries.map((entry, index) => {
            return <JournalEntry {...entry} key={index} />
          })
        }

      </section>

    </main>
  );
}
