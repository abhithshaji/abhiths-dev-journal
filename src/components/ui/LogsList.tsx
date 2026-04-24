import { IEntry } from "@/types/global.types"

const LogsList = (entry: IEntry) => {

    return (
        <div className="mb-8">
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

export default LogsList