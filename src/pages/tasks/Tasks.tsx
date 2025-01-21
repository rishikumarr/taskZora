import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import useTasks from "../../customHooks/useTasks";

const ViewMoreIcon = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 17v-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(1 0 0 -1 11 9)"
          fill="currentColor"
        />
        <path
          d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const EditIcon = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m14.36 4.079.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561L12 6.439m7.921 3.2-5.26 5.262L11.56 18l-.16.161c-.578.577-.867.866-1.185 1.114a6.554 6.554 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876-1.876-1.876m0 0 1.094-3.281c.258-.775.387-1.162.56-1.526.205-.43.456-.836.749-1.211.248-.318.537-.607 1.114-1.184L8.5 9.939"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const DeleteIcon = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M9.17 4a3.001 3.001 0 0 1 5.66 0M20.5 6h-17M18.373 15.4c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0-.2 3M9.5 11l.5 5M14.5 11l-.5 5" />
        </g>
      </svg>
    </div>
  );
};

const Tasks = () => {
  const { tasks, getAllTasks } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  return (
    <>
      <div className="flex-1 border border-slate-300 rounded-lg border-dashed px-4 shadow-inner overflow-y-auto overflow-x-hidden">
        <div className="px-2 py-2 border-slate-300 border-dashed mt-2">
          <h3 className="font-extrabold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl text-center slide-in">
            Tasks
          </h3>
        </div>
        <div className="relative">
          <div className="flex justify-end my-2 sticky inset-0 top-5">
            <Link
              to="/tasks/add"
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition"
            >
              Add task
            </Link>
          </div>
          <div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {tasks &&
                tasks.map((task, index) => {
                  const { id, title } = task;
                  return (
                    <div
                      className="flex flex-col gap-2 border border-slate-300 hover:border-slate-400 transition-all w-60 bg-gradient-to-br from-slate-100 to-slate-50 p-4 rounded-lg shadow-sm fade-in"
                      key={`task-${id}`}
                      style={{ "--delay": `${index * 0.1}s` }}
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
                                    to={`/tasks/edit/${id}`}
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
                })}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Tasks;
