// root.tsx
import { useMatches } from "remix";

export default function Home() {
  let matches = useMatches();

    return <p>Home</p>;
}
