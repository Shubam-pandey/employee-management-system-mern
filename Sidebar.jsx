import React from 'react'
import{NavLink} from 'react-router-dom'
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers
} from "react-icons/fa";


const Sidebar = () => {
    return(
        <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
            <div className ="bg-teal-600 h-12 flex items-center justify-center">
                <h3 className="text-2xl text-center font-pacific">Employee MS</h3>
            </div>
            <div className="px-4">
               <NavLink
                  to="/employee-dashboard"
                  className={({ isActive }) =>
                     `flex items-center space-x-4 block py-2.5 px-4 rounded transition duration-200 ${
                      isActive ? "bg-teal-500" : "hover:bg-gray-700"
                      }`
                      }
                      end
                    >
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/employee-dashboard/profile"
                   className={({ isActive }) =>
                     `flex items-center space-x-4 block py-2.5 px-4 rounded transition duration-200 ${
                      isActive ? "bg-teal-500" : "hover:bg-gray-700"
                      }`
                      }
                      end
                    >
                    <FaUsers/>
                    <span>My Profile</span>
                </NavLink>
                 <NavLink to="/employee-dashboard/leaves"
                  className={({ isActive }) =>
                     `flex items-center space-x-4 block py-2.5 px-4 rounded transition duration-200 ${
                      isActive ? "bg-teal-500" : "hover:bg-gray-700"
                      }`
                      }
                    >
                    <FaBuilding/>
                    <span>Leaves</span>
                </NavLink>
                 <NavLink to="/employee-dashboard/salary"
                   className={({ isActive }) =>
                     `flex items-center space-x-4 block py-2.5 px-4 rounded transition duration-200 ${
                      isActive ? "bg-teal-500" : "hover:bg-gray-700"
                      }`
                      }
                      end
                    >
                    <FaTachometerAlt/>
                    <span>Salary</span>
                </NavLink>
                 <NavLink to="/employee-dashboard/setting"
                  className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                    <FaTachometerAlt/>
                    <span>Settings</span>
                </NavLink>

            </div>
        </div>
    )
}
             
export default Sidebar;
