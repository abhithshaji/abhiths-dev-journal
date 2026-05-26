import LogsList from "@/components/ui/old/LogsList";
import { journalEntries } from "@/data/journalEntry";
import Image from "next/image";
import Link from "next/link";
import { Heading1 } from "@/components/heading";
import { PageWrapper } from "@/components/layout";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <Heading1 title="Abhith's Dev Journal" className="text-center" />

        <section className="flex flex-col items-center">
          <div>
            {journalEntries.map((entry, index) => {
              return <LogsList {...entry} key={index} />;
            })}
          </div>
        </section>

        <section className="cursor-pointer hover:scale-105 fixed bottom-8 right-8 w-16 h-16">
          <Link href={"/new-entry"}>
            {" "}
            <Image src={"/images/pen.svg"} fill alt="pen" />
          </Link>
        </section>
      </PageWrapper>
    </main>
  );
}
