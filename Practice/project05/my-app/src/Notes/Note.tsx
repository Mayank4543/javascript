import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton, InputGroupText, InputGroupTextarea, } from "./components/ui/input-group"
import { Separator } from "./components/ui/separator";
type Notes = {
    id: number,
    text: string
}
export const Note =()=>{
    const [note, setNote] = useState<Notes[]>(() => {
        const storednote = localStorage.getItem("note");
        if (storednote) {
            return JSON.parse(storednote);
        }
        return storednote ? JSON.parse(storednote) : [];
    });
    const [currentNote, setCurrentNote] = useState("")
    const [edit, setedit] = useState(false);
    const [search, setSearch] = useState("");
    const addNotes = () => {
        if (!currentNote.trim()) return "";
        const newNotes: Notes = {
            id: Date.now(),
            text: currentNote
        }
        setNote((prev) => [...prev, newNotes]);
        setCurrentNote("");
    }
    useEffect(() => {
        localStorage.setItem("note", JSON.stringify(note))
    }, [note])
    const handlesearch = (value: string) => {
        setSearch(value);
    }

    const filternote = note.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    )
    return(
        <>
        <div className="flex gap-3 min-h-screen">
                <div className="px-10 py-18 ">
                    <div className="flex flex-col gap-8">
                        <h3 className=" whitespace-nowrap text-xl font-semibold ">Notes App</h3>
                        <Button className=" w-12 h-12 p-0 rounded-full bg-black text-white  text-xl text-center " onClick={() => setedit((prev) => !prev)}>{edit === true ? '-' : '+'}</Button>

                    </div>
                </div>
                <Separator orientation="vertical" />
                <div className=" px-10 py-18 flex flex-col gap-4 w-full">
                    <InputGroup className="max-w px-4 py-6 rounded-2xl">
                        <InputGroupInput placeholder="Search..." className="px-6 py-8" value={search} onChange={(e) => handlesearch(e.target.value)} />
                        <InputGroupAddon >
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                    </InputGroup>

                    {edit && <div className="grid w-[50%] max-w-md  gap-4 ">
                        <InputGroup className="bg-amber-300 rounded-2xl border-none shadow-md">
                            <InputGroupTextarea
                                value={currentNote}
                                onChange={(e) => setCurrentNote(e.target.value)}
                                placeholder="Note.."
                                className="min-h-56 border-none bg-transparent focus-visible:ring-0"
                            />
                            <InputGroupAddon align="block-end" className="border-t">
                                <InputGroupText>
                                    {new Date().toLocaleDateString()}
                                </InputGroupText>

                                <InputGroupButton onClick={addNotes} className="ml-auto rounded-full text-white w-12 h-12 bg-black text-2xl"   >
                                    ✎
                                </InputGroupButton>
                            </InputGroupAddon>

                        </InputGroup>
                    </div>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filternote.map((item) => (
                            <div
                                key={item.id}
                                className="bg-amber-300 rounded-2xl p-4 min-h-56 shadow-md"
                            >
                                <p>{item.text}</p>

                                <div className="mt-4 text-sm text-gray-600">
                                    {new Date(item.id).toLocaleDateString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}