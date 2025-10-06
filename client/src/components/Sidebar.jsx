import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faChartLine, 
  faExclamationTriangle, 
  faWater, 
  faBuilding, 
  faShieldAlt, 
  faDollarSign, 
  faDatabase, 
  faCog,
  faSignOutAlt,
  faShield
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ open, setOpen }) => {
  const { logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: faTachometerAlt },
    { name: 'RAS', href: '/dashboard/ras', icon: faChartLine },
    { name: 'Credit Risk', href: '/dashboard/credit-risk', icon: faShieldAlt },
    { name: 'Interest Risk', href: '/dashboard/interest-risk', icon: faExclamationTriangle },
    { name: 'Liquidity Gap', href: '/dashboard/liquidity-gap', icon: faWater },
    { name: 'Capital Plan', href: '/dashboard/capital-plan', icon: faBuilding },
    { name: 'Liquidity Risk', href: '/dashboard/liquidity-risk', icon: faShieldAlt },
    { name: 'Market Risk', href: '/dashboard/fx-risk', icon: faDollarSign },
    { name: 'Financial Performance', href: '/dashboard/financial-performance', icon: faChartLine },
    { name: 'Input Data', href: '/dashboard/input-data', icon: faDatabase },
    { name: 'Configurations', href: '/dashboard/configurations', icon: faCog },
  ];

  return (
    <>
             {/* Mobile sidebar */}
       {open && (
         <>
           {/* Backdrop */}
           <div 
             className="fixed inset-0 bg-gray-900/80 z-40 lg:hidden"
             onClick={() => setOpen(false)}
           />
           
           {/* Sidebar */}
           <div className="fixed inset-y-0 left-0 z-50 w-56 bg-gray-200/30 lg:hidden">
             <div className="flex grow flex-col gap-y-4 overflow-hidden px-4 pb-4">
               {/* Header */}
               <div className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200/50">
                 <div className="flex items-center gap-2">
                   <div className="h-5 w-5 rounded-lg bg-blue-600 flex items-center justify-center">
                     <span className="text-white text-xs font-bold">Q</span>
                   </div>
                   <h1 className="text-sm font-bold text-gray-900">Q-SIGHT ALM</h1>
                 </div>
                 <button 
                   onClick={() => setOpen(false)}
                   className="p-1 rounded-md hover:bg-gray-300"
                 >
                   <span className="text-gray-600 text-lg font-bold">×</span>
                 </button>
               </div>
               
               {/* Navigation */}
               <nav className="flex flex-1 flex-col">
                 <ul role="list" className="flex flex-1 flex-col gap-y-7">
                   <li>
                     <ul role="list" className="-mx-2 space-y-1">
                       {navigation.map((item) => (
                         <li key={item.name}>
                           <NavLink
                             to={item.href}
                             className={({ isActive }) =>
                               `group flex gap-x-3 rounded-md p-2 text-xs leading-5 font-medium border-b border-gray-200/30 ${
                                 isActive
                                   ? 'bg-gray-50 text-blue-600'
                                   : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                               }`
                             }
                             onClick={() => setOpen(false)}
                           >
                             <div className="h-5 w-5 shrink-0 text-gray-600 flex items-center justify-center">
                               <FontAwesomeIcon icon={item.icon} className="text-sm" />
                             </div>
                             {item.name}
                           </NavLink>
                         </li>
                       ))}
                     </ul>
                   </li>
                   <li className="mt-auto">
                     <button
                       onClick={logout}
                       className="flex w-full items-center gap-x-3 rounded-md p-2 text-xs leading-5 font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 border-t border-gray-200/50"
                     >
                       <div className="h-5 w-5 shrink-0 text-gray-600 flex items-center justify-center">
                         <FontAwesomeIcon icon={faSignOutAlt} className="text-sm" />
                       </div>
                       Logout
                     </button>
                   </li>
                 </ul>
               </nav>
             </div>
           </div>
         </>
       )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-4 overflow-hidden border-r border-gray-200 bg-gray-200/30 px-4 pb-4">
          <div className="flex h-14 shrink-0 items-center border-b border-gray-200/50">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">Q</span>
              </div>
              <h1 className="text-sm font-bold text-gray-900">Q-SIGHT ALM</h1>
            </div>
          </div>
          
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `group flex gap-x-3 rounded-md p-2 text-xs leading-5 font-medium border-b border-gray-200/30 ${
                            isActive
                              ? 'bg-gray-50 text-blue-600'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          }`
                        }
                      >
                        <div className="h-5 w-5 shrink-0 text-gray-600 flex items-center justify-center">
                          <FontAwesomeIcon icon={item.icon} className="text-sm" />
                        </div>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <button
                  onClick={logout}
                  className="flex w-full items-center gap-x-3 rounded-md p-2 text-xs leading-5 font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 border-t border-gray-200/50"
                >
                  <div className="h-5 w-5 shrink-0 text-gray-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-sm" />
                  </div>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
