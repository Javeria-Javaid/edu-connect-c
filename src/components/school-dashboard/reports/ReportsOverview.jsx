import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';
import { FileText, Download, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { reportsOverviewData } from './mockData';

const ReportsOverview = () => {
    const { summaryCards, recentReports, enrollmentTrend, attendanceDistribution } = reportsOverviewData;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {summaryCards.map((card, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{card.title}</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">{card.value}</h3>
                            </div>
                            <div className={`p-2 rounded-lg ${card.color} bg-opacity-10`}>
                                <div className={`w-4 h-4 rounded-full ${card.color}`} />
                            </div>
                        </div>
                        <div className="flex items-center text-sm">
                            {card.trend === 'up' ? (
                                <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                            ) : (
                                <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                            )}
                            <span className={card.trend === 'up' ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                                {card.change}
                            </span>
                            <span className="text-gray-400 ml-1">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Enrollment Trend */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Student Enrollment Trend</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={enrollmentTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="students"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4, stroke: '#fff' }}
                                    activeDot={{ r: 6, strokeWidth: 0 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Attendance Distribution */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Attendance Overview</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={attendanceDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {attendanceDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500">Daily average based on last 30 days</p>
                    </div>
                </div>
            </div>

            {/* Recent Reports & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Reports List */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-800">Recently Generated Reports</h3>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                    </div>
                    <div className="space-y-4">
                        {recentReports.map((report) => (
                            <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-50 hover:bg-gray-50 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{report.name}</h4>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center">
                                                <Clock className="w-3 h-3 mr-1" /> {report.date}
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                                                {report.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Download">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Categories */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl text-white shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Quick Generate</h3>
                    <p className="text-blue-100 text-sm mb-6">Select a category to quickly generate a standard report.</p>

                    <div className="grid grid-cols-2 gap-3">
                        {['Student', 'Finance', 'Exam', 'Attendance'].map((item) => (
                            <button key={item} className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium transition-colors text-left border border-white/10">
                                {item} Report
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                        <button className="w-full py-2.5 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors shadow-sm">
                            Create Custom Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsOverview;
