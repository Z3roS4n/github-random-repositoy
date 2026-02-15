import { Button } from "../ui/button";
import { Star, Eye } from "lucide-react";

export interface IRepository {
  name: string;
  full_name: string;
  stargazers_count: number;
  watchers_count: number;
  description: string;
  html_url: string;
}

export default function RepositoryItem({ item }: { item: IRepository }) {
  return (
    <>
      <div className="border rounded-lg p-4">
        <p className="text-lg font-bold">{item.full_name}</p>
        <p>{item.description}</p>
        <div className="flex flex-row gap-2 text-sm mt-2 mb-2">
          <p className="flex flex-row items-center"><Star className="w-4 h-4 inline mr-1" /> {item.stargazers_count}</p>
          <p className="flex flex-row items-center"><Eye className="w-4 h-4 inline mr-1"></Eye> {item.watchers_count}</p>
        </div>
      </div>
      <a href={item.html_url} target="_blank"><Button variant="outline" className="mt-2 w-full">Open Repository</Button></a>
    </>
  )
}