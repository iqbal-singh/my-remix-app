// root.tsx
import { useMatches } from "remix";

type PageLayoutProps = {};
const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children }) => {
  let matches = useMatches();
  console.log(matches)
  return (
    <>
      <div className="my-8 container px-2 mx-auto flex flex-col items-start justify-between pb-2">
        <div className="sm:flex hidden">
          <p className="text-sm font-medium leading-none text-gray-200 hover:text-indigo-200 pt-3 mr-4">
       
          </p>
        </div>
        <h1 className="capitalize text-2xl font-bold text-gray-200 pt-3">
          {matches.slice(-1)[0]?.pathname.slice(1)}
          
        </h1>
      </div>
      <div className="text-white">{children}</div>
    </>
  );
};

export default PageLayout;
