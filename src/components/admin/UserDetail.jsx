import { useContext } from "react";
import myContexts from "../searchBar/context/myContexts";

const UserDetail = () => {
  // getAllUsers from myState

  const context = useContext(myContexts);
  const { getAllUsers ,deleteUserFun } = context;
  return (
    <div>
      <div>
        <div className="py-5 flex justify-between items-center">
          {/* text  */}
          <h1 className=" text-xl text-pink-300 font-bold">All User</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300 font-bold fontPara"
                >
                  S.No.
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300 font-bold fontPara"
                >
                  User ID
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300"
                >
                  Email{" "}
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300"
                >
                 Delete
                </th>
              </tr>
              {getAllUsers.map((item, index) => {
                const {id}= item
                return (
                
                    <tr key={index} className="text-pink-300 bg-pink-200">
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-900 ">
                        {index + 1}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-900 first-letter:uppercase ">
                        {item.uid}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-900  cursor-pointer ">
                        {item.name}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-900  cursor-pointer ">
                        {item.email}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-900  cursor-pointer ">
                        {item.role}
                      </td>
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-900  cursor-pointer ">
                        {item.date}
                      </td>
                      <td onClick={()=>deleteUserFun(item.id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 active:text-red-800 font-bold text-red-500 cursor-pointer ">
                        Delete
                      </td>
                    </tr>
                  
                );
              })}
            </tbody>
          </table>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
