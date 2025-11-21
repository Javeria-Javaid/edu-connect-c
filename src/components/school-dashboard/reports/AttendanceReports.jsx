import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, Calendar, BarChart2, CheckCircle, XCircle, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AttendanceReports = () => {
    const [filters, setFilters] = useState({});
    const { attendanceReports } = reportsOverviewData;

    // Mock Summary Data
    const summaryStats = [
        { label: "Today's Attendance", value: '94.2%', change: '+0.5%', icon: CheckCircle, color: 'green' },
        { label: 'Absent Today', value: '145', change: '-12', icon: XCircle, color: 'red' },
        { label: 'Late Arrivals', value: '32', change: '+5', icon: Clock, color: 'orange' },
    ];

    const filterOptions = [
        {
            key: 'class',
            label: 'Class',
            type: 'multiselect',
            options: [
                { label: 'Class 9', value: '9' },
                { label: 'Class 10', value: '10' },
                { label: 'Class 11', value: '11' },
                { label: 'Class 12', value: '12' },
            ]
        },
        {
            key: 'dateRange',
            label: 'Date Range',
            type: 'select',
            options: [
                { label: 'Today', value: 'today' },
                { label: 'This Week', value: 'week' },
                { label: 'This Month', value: 'month' },
            ]
        }
    ];

    const columns = [
        {
            key: 'date', label: 'Date', sortable: true, render: (row) => (
                <span className="font-medium text-gray-700">{row.date}</span>
            )
        },
        {
            key: 'class', label: 'Class', sortable: true, render: (row) => (
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-bold">
                    {row.class}
                </span>
            )
        },
        {
            key: 'present', label: 'Present', sortable: true, render: (row) => (
                <span className="text-green-600 font-medium">{row.present}</span>
            )
        },
        {
            key: 'absent', label: 'Absent', sortable: true, render: (row) => (
                <span className="text-red-600 font-medium">{row.absent}</span>
            )
        },
        {
            key: 'late', label: 'Late', sortable: true, render: (row) => (
                <span className="text-orange-600 font-medium">{row.late}</span>
            )
        },
        {
            key: 'attendanceRate',
            label: 'Rate',
            render: (row) => {
                const rate = Math.round((row.present / row.total) * 100);
                return (
                    <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ${rate >= 95 ? 'bg-green-500' :
                                    rate >= 85 ? 'bg-blue-500' :
                                        rate >= 75 ? 'bg-orange-500' : 'bg-red-500'
                                    }`}
                                style={{ width: `${rate}%` }}
                            />
                        </div>
                        <span className="text-sm font-bold text-gray-700">{rate}%</span>
                    </div>
                );
            }
        },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Details', icon: <FileText size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download PDF', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    // Transform data for chart
    const chartData = attendanceReports.map(item => ({
        name: item.class,
        Present: item.present,
        Absent: item.absent,
        Late: item.late
    }));

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Attendance Analysis</h2>
                    <p className="text-sm text-gray-500">Daily attendance logs and trends</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Select Date
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 hover:shadow-md transition-all shadow-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export Report
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {summaryStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                                </div>
                                <div className={`p-2 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm">
                                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                                    {stat.change}
                                </span>
                                <span className="text-gray-400 ml-1">vs yesterday</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <BarChart2 className="w-5 h-5 mr-2 text-blue-600" />
                        Class-wise Overview
                    </h3>
                </div>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} barSize={40}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                            <Tooltip
                                cursor={{ fill: '#f9fafb' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            />
                            <Legend verticalAlign="top" height={36} iconType="circle" />
                            <Bar dataKey="Present" stackId="a" fill="#22c55e" radius={[0, 0, 4, 4]} />
                            <Bar dataKey="Absent" stackId="a" fill="#ef4444" />
                            <Bar dataKey="Late" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-6">
                    <FilterPanel
                        filters={filterOptions}
                        onFilterChange={setFilters}
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={attendanceReports}
                    selectable={true}
                    onQuickAction={handleQuickAction}
                    pageSize={10}
                />
            </div>
        </div>
    );
};

export default AttendanceReports;
