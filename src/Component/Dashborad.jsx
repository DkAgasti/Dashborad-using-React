import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, LineChart, Line, ResponsiveContainer, Legend, CartesianGrid, Tooltip } from 'recharts';

const data = [
    { name: '2005', value: 350 },
    { name: '2006', value: 220 },
    { name: '2007', value: 200 },
    { name: '2008', value: 250 },
    { name: '2009', value: 200 },
    { name: '2010', value: 100 },
];

const pieData = [
    { name: '2005', value: 27.7 },
    { name: '2006', value: 34.7 },
    { name: '2007', value: 9.2 },
    { name: '2008', value: 28.4 }
];

const COLORS = ['#4A90E2', '#4AC9E2', '#F5A623', '#D0021B'];
const renderLabel = ({ name, value }) => `${value}%`;

const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [showMenu, setShowMenu] = useState(true);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-sky-200">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white w-full md:w-64 p-4 transition-transform duration-300 ease-in-out ${showMenu ? 'block' : 'hidden'} md:block`}>
                <div className='p-3 rounded-lg bg-white text-gray-800 font-bold text-center mb-8'>
                    <h3>Hii Bariflilabs</h3>
                </div>
                <ul className="space-y-4">
                    {['dashboard', 'users', 'posts', 'settings'].map((menu) => (
                        <li
                            key={menu}
                            className={`p-3 rounded-lg hover:text-indigo-300 cursor-pointer ${activeMenu === menu ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
                            onClick={() => setActiveMenu(menu)}
                        >
                            {menu.charAt(0).toUpperCase() + menu.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <button
                        className="bg-gray-800 text-white p-2 rounded-md md:hidden"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? 'Hide Menu' : 'Show Menu'}
                    </button>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-start hover:bg-indigo-600 hover:text-white">
                        <h2 className="text-sm font-semibold ">Total Users <i class="fa-solid fa-users"></i></h2>
                        <p className="text-2xl font-bold ">12,345</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-start hover:bg-indigo-600 hover:text-white">
                        <h2 className="text-sm font-semibold ">Online Review <i class="fa-solid fa-comment-dollar"></i></h2>
                        <p className="text-2xl font-bold ">678</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-start hover:bg-indigo-600 hover:text-white">
                        <h2 className="text-sm font-semibold ">Active Projects <i class="fa-solid fa-comment"></i></h2>
                        <p className="text-2xl font-bold ">1,234</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-start hover:bg-indigo-600 hover:text-white">
                        <h2 className="text-sm font-semibold ">Referal <i class="fa-solid fa-cart-shopping"></i></h2>
                        <p className="text-2xl font-bold ">$45,678</p>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Pie Chart */}
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700">Pie Chart</h2>
                        <PieChart width={250} height={250}>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label={renderLabel}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                        </PieChart>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700">Customized Bar Chart</h2>
                        <ResponsiveContainer width="90%" height={300}>
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" label={{ value: "Year", position: "insideBottom", offset: -5 }} />
                                <YAxis label={{ value: "Value", angle: -90, position: "insideLeft" }} />
                                <Tooltip />
                                <Bar
                                    dataKey="value"
                                    fill="url(#colorUv)"
                                    radius={[10, 10, 0, 0]} // Makes the top corners of each bar rounded
                                    barSize={30} // Adjusts the width of the bars
                                />
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00C9FF" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#92FE9D" stopOpacity={0.8} />
                                    </linearGradient>
                                </defs>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg ">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700">Live Data</h2>
                        <p className="text-gray-600">Place your live data here</p>
                    </div>

                    {/* Line Chart */}
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center sm:col-span-2 lg:col-span-3">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700">Customized Line Chart</h2>
                        {/* Responsive container for the Line Chart */}
                        <div className="w-full h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36} />
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        </linearGradient>
                                    </defs>
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="url(#colorUv)"
                                        strokeWidth={3}
                                        dot={{ r: 5, fill: "#8884d8", stroke: "#8884d8", strokeWidth: 2 }}
                                        activeDot={{ r: 8 }}
                                        strokeDasharray="5 5"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
