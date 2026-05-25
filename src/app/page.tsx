import LogsList from "@/components/ui/LogsList";
import AddLogModal from "@/components/ui/AddLogModal";
import { journalEntries } from "@/data/journalEntry";
import Image from "next/image";
import Link from "next/link";
import Heading1 from "@/components/ui/heading/Heading1";

export default function Home() {
  return (
    <main>
      <Heading1 title="Abhith's Dev Journal" className="text-center my-8"/>

      <section className="flex flex-col items-center">
        <div>
          {journalEntries.map((entry, index) => {
            return <LogsList {...entry} key={index} />;
          })}
        </div>
      </section>

      {/* <AddLogModal/> */}
      <section className="cursor-pointer hover:scale-105 fixed bottom-8 right-8 w-16 h-16">
        <Link href={"/new-entry"}>        <Image src={"/images/pen.svg"} fill alt="pen"/>
</Link>
      </section>
    </main>
  );
}
