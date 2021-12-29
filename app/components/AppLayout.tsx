import { NavLink, Form } from "remix";

type AppLayoutProps = {
  searchFormAction: string;
  title: string;
  navigationItems: string[];
};

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
  searchFormAction,
  title,
  navigationItems,
  children,
}) => {
  return (
    <div className="bg-gray-900 flex flex-no-wrap">
      <div className="w-72 absolute relative bg-gradient-to-b from-gray-800 shadow h-screen flex-col justify-between flex">
        <div className="px-2">
          <div className="mx-2 h-16 w-full flex items-center">
            <h1 className="text-white text-2xl"><NavLink to="/home">{title}</NavLink></h1>
          </div>
          <div className="flex justify-center w-full">
            <div className="mx-2 w-full relative">
              <Form action={searchFormAction} method="get">
              <input
                name="q"
                className="w-full bg-gray-700 text-sm text-gray-200 px-2 py-2 rounded"
                type="text"
                placeholder="Search"
              />
              </Form>
            </div>
          </div>
          <ul className="mt-4 pt-4">
            {navigationItems?.map((item, index) => (
              <NavLink
                to={`/${item}`}
                key={item}
                className={({ isActive }) =>
                  isActive ? "block bg-gray-800 drop-shadow-xl" : ""
                }
              >
                <li
                  key={item}
                  className="flex w-full justify-between p-4 items-center mb-2 text-gray-300 transition duration-900 ease-in-out transform hover:-translate-x-1 hover:text-gray-100 hover:bg-gray-800 rounded-md"
                >
                  <div className="flex items-center">
                    <span className="capitalize text-md ml-2">{item}</span>
                  </div>
                  <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                    5
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-8 py-4">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
