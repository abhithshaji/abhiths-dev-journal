import { getTodaysDate } from "@/lib/helpers";
import { IEntry } from "@/types/global.types"

const JournalEntry = (entry: IEntry) => {
    let todaysDate = getTodaysDate();

    return (
        <div className="">
            <span className="font-semibold italic ">{entry.date}</span>
            <ul className="list-disc ml-8">
                {
                    entry.logs?.map((log, index) => {
                        return <li key={index}>{log}</li>
                    })
                }

            </ul>
        </div>
    )
}

export default JournalEntry