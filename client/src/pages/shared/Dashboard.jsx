import { useState, useEffect } from 'react';
import { Users, Shield, FileText, Activity, TrendingUp, TrendingDown, Eye, Clock } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRoles: 0,
    totalAuditLogs: 0,
    activeUsers: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStats({
        totalUsers: 156,
        totalRoles: 8,
        totalAuditLogs: 1247,
        activeUsers: 89
      });

      setRecentActivity([
        {
          id: 1,
          action: 'User login',
          user: 'sysadmin',
          timestamp: '2024-01-15T10:30:00Z',
          type: 'login'
        },
        {
          id: 2,
          action: 'User created',
          user: 'john.doe',
          timestamp: '2024-01-15T09:15:00Z',
          type: 'create'
        },
        {
          id: 3,
          action: 'Role assigned',
          user: 'jane.smith',
          timestamp: '2024-01-15T08:45:00Z',
          type: 'update'
        },
        {
          id: 4,
          action: 'Audit log viewed',
          user: 'admin',
          timestamp: '2024-01-15T08:30:00Z',
          type: 'view'
        }
      ]);

      setIsLoading(false);
    };

    loadData();
  }, []);

  const StatCard = ({ title, value, icon: Icon, change, changeType }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                {change && (
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                    changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {changeType === 'increase' ? (
                      <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                    )}
                    <span className="sr-only">{changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                    {change}
                  </div>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => {
    const getIcon = (type) => {
      switch (type) {
        case 'login':
          return <Activity className="h-4 w-4 text-blue-500" />;
        case 'create':
          return <Users className="h-4 w-4 text-green-500" />;
        case 'update':
          return <Shield className="h-4 w-4 text-yellow-500" />;
        case 'view':
          return <Eye className="h-4 w-4 text-gray-500" />;
        default:
          return <Clock className="h-4 w-4 text-gray-400" />;
      }
    };

    const formatTime = (timestamp) => {
      return new Date(timestamp).toLocaleString();
    };

    return (
      <div className="flex items-center space-x-3 py-3">
        <div className="flex-shrink-0">
          {getIcon(activity.type)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
          <p className="text-sm text-gray-500">by {activity.user}</p>
        </div>
        <div className="flex-shrink-0 text-sm text-gray-500">
          {formatTime(activity.timestamp)}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your SMS system.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          change="12%"
          changeType="increase"
        />
        <StatCard
          title="Total Roles"
          value={stats.totalRoles}
          icon={Shield}
          change="5%"
          changeType="increase"
        />
        <StatCard
          title="Audit Logs"
          value={stats.totalAuditLogs}
          icon={FileText}
          change="8%"
          changeType="increase"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          icon={Activity}
          change="3%"
          changeType="decrease"
        />
      </div>

      {/* Recent activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          <div className="mt-5 flow-root">
            <div className="-my-5 divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View all activity
            </a>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <button className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                  <Users className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Add New User
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Create a new user account with specific roles and permissions.
                </p>
              </div>
            </button>

            <button className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
                  <Shield className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Manage Roles
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Create and manage user roles and permissions.
                </p>
              </div>
            </button>

            <button className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
                  <FileText className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  View Audit Logs
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Review system activity and audit trails.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
