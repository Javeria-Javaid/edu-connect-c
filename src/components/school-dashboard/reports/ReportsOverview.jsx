import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';
import { FileText, Download, Clock, ArrowUpRight, ArrowDownRight, ChevronRight } from 'lucide-react';
import { reportsOverviewData } from './mockData';

const ReportsOverview = ({ onNavigate, reportTypes }) => {
    const { summaryCards, recentReports, enrollmentTrend, attendanceDistribution } = reportsOverviewData;

    return (
        <div className="space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryCards.map((card, index) => (
                    <div key={index} className="bg-white p-6 rounded-[var(--border-radius-base)] shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-sm font-medium text-[var(--text-secondary)]">{card.title}</p>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-1">{card.value}</h3>
                            </div>
                            <div className="p-2 rounded-lg bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                                <div className={`w-5 h-5 rounded-full bg-current opacity-20`} />
                            </div>
                        </div>
                        <div className="flex items-center text-sm">
                            <span className={`flex items-center font-medium ${card.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                {card.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                                {card.change}
                            </span>
                            <span className="text-[var(--text-secondary)] ml-2">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Report Categories Grid */}
            <div>
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Report Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {reportTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                            <button
                                key={type.id}
                                onClick={() => onNavigate(type.id)}
                                className="flex flex-col items-start p-6 bg-white rounded-[var(--border-radius-base)] shadow-sm border border-gray-200 hover:shadow-md hover:border-[var(--primary-color)] transition-all duration-200 text-left group w-full"
                            >
                                <div className="p-3 rounded-lg bg-[var(--primary-color)]/10 text-[var(--primary-color)] mb-4 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                                    {type.label}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                                    {type.description}
                                </p>
                                <div className="mt-auto flex items-center text-sm font-medium text-[var(--primary-color)] opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Reports <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Enrollment Trend */}
                <div className="lg:col-span-2 bg-white p-6 rounded-[var(--border-radius-base)] shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">Enrollment Analytics</h3>
                        <select className="text-sm border-gray-300 rounded-[var(--border-radius-base)] text-[var(--text-secondary)] focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] py-1 px-3">
                            <option>This Year</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={enrollmentTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="students"
                                    stroke="var(--primary-color)"
                                    strokeWidth={3}
                                    dot={{ fill: 'var(--primary-color)', strokeWidth: 2, r: 4, stroke: '#fff' }}
                                    activeDot={{ r: 6, strokeWidth: 0 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Attendance Distribution */}
                <div className="bg-white p-6 rounded-[var(--border-radius-base)] shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Today's Attendance</h3>
                    <div className="h-64 relative">
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
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
                            <div className="text-center">
                                <span className="text-3xl font-bold text-[var(--text-primary)]">94%</span>
                                <p className="text-xs text-[var(--text-secondary)]">Present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Reports List */}
            <div className="bg-white p-6 rounded-[var(--border-radius-base)] shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Recently Generated</h3>
                    <button className="text-sm text-[var(--primary-color)] hover:underline font-medium">
                        View All History
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recentReports.map((report) => (
                        <div key={report.id} className="flex items-center justify-between p-4 rounded-[var(--border-radius-base)] border border-gray-200 hover:border-[var(--primary-color)] hover:bg-blue-50/30 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-white group-hover:text-[var(--primary-color)] transition-colors">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--text-primary)] text-sm">{report.name}</h4>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs text-[var(--text-secondary)] flex items-center">
                                            <Clock className="w-3 h-3 mr-1" /> {report.date}
                                        </span>
                                        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200">
                                            {report.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-[var(--primary-color)] hover:bg-blue-50 rounded-lg transition-colors" title="Download">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportsOverview;
