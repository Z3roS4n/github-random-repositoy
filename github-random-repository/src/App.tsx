import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "./components/ui/combobox";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "./components/ui/button";
import { Eye, Star } from "lucide-react";
import Repository, { type IRepository } from "./components/interface/repository";
import type { Language } from "./components/interface/language-selector";
import LanguageSelector from "./components/interface/language-selector";

export interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IRepository[];
}

export function App() {
  const [ selectedLanguage, setSelectedLanguage ] = useState<string | null>(null);

  const { data: languages, isLoading, isError } = useQuery<Language[]>({
    queryKey: ["languages"],
    queryFn: async () => {
      const res = await fetch("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json");
      return res.json();
    }
  });

  const repository = useMutation<SearchResponse>({
    mutationKey: ["repository", selectedLanguage],
    mutationFn: async () => {
      const query = selectedLanguage ? `language:${selectedLanguage}` : "2";
      const res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`, { 
        headers: { 
          'X-GitHub-Api-Version': '2022-11-28', 
          'Accept': 'application/vnd.github+json' 
        },
      });
      return res.json();
    }
  });

  const selectRandomRepository = (() => {
    if (repository.data?.items?.length) {
      const randomIndex = Math.floor(Math.random() * repository.data.items.length);
      return repository.data.items[randomIndex];
    }
    return null;
  })();

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <Card className="max-w-lg min-w-lg w-full">
        <CardHeader>
          <CardTitle>Random GitHub Repository</CardTitle>
          <CardDescription>Discover and explore random GitHub repositories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <LanguageSelector languages={languages || []} selectedLanguage={setSelectedLanguage}></LanguageSelector>
            <div className="flex flex-col">
              { selectRandomRepository ? (
                <Repository item={selectRandomRepository}></Repository>
              ) : (
                <p className="text-gray-500 text-sm">No repository selected yet. Click "Refresh" to find one!</p>
              )}
            </div>
            <Button onClick={() => repository.mutate()}>Refresh</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
