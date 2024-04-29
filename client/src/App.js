import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";
import Footer from "./components/Footer";
import { format } from 'date-fns';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;
  const [tasks, setTasks] = useState(null);

  const myDate = new Date();

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (authToken) {
      getData()
    }
  }, []);

  console.log(tasks);

  //Sort by date

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );


  return (
    <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">

      <div className="app">
        {!authToken && <Auth />}
        {authToken &&
          <>


            <ListHeader getData={getData} />
            <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
              {sortedTasks?.map((task) => (
                <li key={task} className="overflow-hidden rounded-xl border border-gray-200">
                  <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                    <img
                      src='/pin.svg'
                      alt='pin'
                      className="h-6 w-6 flex-none  ring-gray-900/10"
                    />
                    <div className="text-xs  text-gray-500">
                      <p>{format(myDate, 'MMMM dd, yyyy')}</p>
                      Created by {userEmail}</div>

                  </div>
                  <dl className="-my-3 px-6 py-4 text-sm leading-6">

                    <div className="flex justify-between gap-x-4 py-3">
                      {task.content}
                    </div>
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">{''}</dt>
                      <dd className="text-gray-700">
                        <ListItem key={task.id} task={task} getData={getData} />
                      </dd>
                    </div>
                  </dl>
                </li>

              ))}
            </ul>
          </>

        }

        <Footer />

      </div>
    </div>
  );
};

export default App;
