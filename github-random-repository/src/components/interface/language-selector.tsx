import { useState } from "react";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "../ui/combobox";

export interface Language {
  title: string;
  value: string;
}

export default function LanguageSelector({ languages, selectedLanguage }: { 
  languages: Language[], 
  selectedLanguage: (value: string | null) => void
}) {
  const [ search, setSearch ] = useState("");

  return (
    <Combobox items={languages} onValueChange={selectedLanguage}>
      <ComboboxInput placeholder="Select a framework" onChange={(e) => setSearch(e.target.value)} />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {languages ? languages.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <ComboboxItem key={item.value} value={item.value}>
              {item.title}
            </ComboboxItem>
          )) : 
            <ComboboxItem value="">
              {"Loading languages..."}
            </ComboboxItem>
          }
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}