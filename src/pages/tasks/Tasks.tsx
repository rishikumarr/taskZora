import { useEffect } from "react";
import { Link } from "react-router-dom";
import useTasks from "../../customHooks/useTasks";
import Header from "../../components/Header";
import ViewMoreIcon from "../../components/ViewMoreIcon";
import EditIcon from "../../components/EditIcon";
import DeleteIcon from "../../components/DeleteIcon";

const Tasks = () => {
  const { tasks, getAllTasks, filterByStatus, searchForTask } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    
    filterByStatus(filter);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.target.value;

    searchForTask(searchVal);
  }

  return (
    <>
    <Header/>
      <div className="flex-1 border border-slate-300 rounded-lg border-dashed px-4 shadow-inner overflow-y-auto overflow-x-hidden">
        <div className="px-2 py-2 border-slate-300 border-dashed mt-2">
          <h3 className="font-extrabold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl text-center slide-in">
            Tasks
          </h3>
        </div>
        <div className="relative">
          <div className="flex items-center lg:px-4 rounded-full lg:border border-slate-300 lg:py-2 justify-between flex-col lg:flex-row gap-3 my-2 lg:sticky inset-0 top-5 z-10 lg:bg-slate-100/50 lg:backdrop-blur-md">
            <div className="self-start">
            <div className="flex flex-col lg:flex-row gap-1 items-center">
            <span className="text-xs font-semibold text-slate-700">Filter By Status:</span>
              <select onChange={handleFilterChange} className="rounded-full px-2 py-1 outline-none text-xs border border-slate-300 focus:border-slate-400 bg-slate-100">
                <option value="all">All</option>
                <option value="todo">Todo</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            </div>
          <div className="flex-1 text-center">
              <input type="search" className="w-full max-w-80 bg-slate-100 border border-slate-300 rounded-full px-3 py-1 text-sm outline-none focus:border-slate-400 focus:shadow-inner text-slate-700" placeholder="Search for Task" onChange={handleSearch}/>
            </div>
            <Link
              to="/tasks/add"
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition self-end"
            >
              Add task
            </Link>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap justify-center gap-4">
              {tasks && tasks.length > 0 ?
                (tasks.map((task, index) => {
                  const { id, title } = task;
                  return (
                    <div
                      className="flex flex-col gap-2 border border-slate-300 hover:border-slate-400 transition-all w-60 bg-gradient-to-br from-slate-100 to-slate-50 p-4 rounded-lg shadow-sm fade-in"
                      key={`task-${id}`}
                      style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
                    >
                      <div className="flex justify-between">
                        <p className="text-base truncate max-w-40 text-slate-800 font-medium capitalize">
                          {title}
                        </p>
                      </div>
                      <hr />
                        <div className="flex items-center">
                            <span className="min-w-16 font-semibold text-slate-600 text-xs">
                            Actions:
                            </span>
                            <ul className="flex flex-1 items-center gap-4">
                            <li className="flex items-center">
                                <Link
                                    to={`/tasks/${id}`}
                                    className="w-5 h-5 inline-block" title="View more about the task"
                                >
                                    <ViewMoreIcon className="w-full h-full text-green-900" />
                                </Link>
                                </li>
                                <li className="flex items-center">
                                <Link
                                    to={`/tasks/edit/${id}`}
                                    className="w-5 h-5 inline-block" title="Edit task"
                                >
                                    <EditIcon
                                    className={"w-full h-full text-yellow-700"}
                                    />
                                </Link>
                                </li>
                                <li className="flex items-center">
                                <Link
                                    to={`/tasks/delete/${id}`}
                                    className="w-5 h-5 inline-block" title="Delete task"
                                >
                                    <DeleteIcon
                                    className={"w-full h-full text-red-900"}
                                    />
                                </Link>
                                </li>
                            </ul>
                        </div>
                      <hr />
                      <div className=" flex text-xs">
                        <span className="min-w-16 font-semibold text-slate-600">
                          Priority:
                        </span>
                        <p
                          className={`uppercase font-semibold ${
                            task.priority === "high"
                              ? "text-red-600"
                              : "text-orange-900"
                          }`}
                        >
                          {task.priority}
                        </p>
                        <span className="w-"></span>
                      </div>
                      <hr />
                      <div className="flex flex-col gap-2">
                        <div className="flex text-xs items-center">
                          <span className="min-w-16 font-semibold text-slate-600">
                            Status:
                          </span>
                          <p
                            className="uppercase px-2 py-0.5"
                            data-status={task.status}
                          >
                            {task.status}
                          </p>
                        </div>
                        <hr />
                        <div className="flex text-xs items-center">
                          <span className="min-w-16 font-semibold text-slate-600">
                            Tags:
                          </span>
                          <ul className="flex flex-wrap gap-1 max-w-52">
                            {task.tags.map((tag, index) => (
                              <li
                                key={index}
                                className="px-2 py-0.5 font-semibold text-slate-700 border text-[10px] border-slate-400 bg-slate-200 rounded-full capitalize"
                              >
                                {tag}
                              </li>
                            ))}
                            {/* <li className="px-3 py-0.5 font-medium text-slate-700 border border-slate-400 bg-slate-200 rounded-full">Work</li> */}
                            {/* <li className="px-3 py-0.5 font-medium text-slate-700 border border-slate-400 bg-slate-200 rounded-full">Personal</li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })) : <p>No Tasks</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
