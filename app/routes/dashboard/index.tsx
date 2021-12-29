
import { useLoaderData } from "remix";
import Table from "~/components/Table";



export async function loader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await res.json();
}



export default function Dashboard() {
    let data = useLoaderData();
    return <Table data={data}/>;
}
