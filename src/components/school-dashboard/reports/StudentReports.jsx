import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, Eye, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const StudentReports = () => {
    const [filters, setFilters] = useState({});
    const { studentReports } = reportsOverviewData;

    // Mock Summary Data
    const summaryStats = [
        { label: 'Total Students', value: '2,543', change: '+12%', icon: Users, color: 'blue' },
        { label: 'Avg. Performance', value: 'Good', change: 'Stable', icon: TrendingUp, color: 'green' },
        { label: 'At Risk', value: '45', change: '-2%', icon: AlertCircle, color: 'red' },
    ];

    const performanceData = [
        { name: 'Excellent', value: 35, color: '#22c55e' },
        { name: 'Good', value: 45, color: '#3b82f6' },
        { name: 'Average', value: 15, color: '#f59e0b' },
        { name: 'Poor', value: 5, color: '#ef4444' },
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
            key: 'performance',
            label: 'Performance',
            type: 'multiselect',
            options: [
                { label: 'Excellent', value: 'Excellent' },
                { label: 'Good', value: 'Good' },
                { label: 'Average', value: 'Average' },
                { label: 'Poor', value: 'Poor' },
            ]
        }
    ];

    const columns = [
        {
            key: 'name', label: 'Student Name', sortable: true, render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                        {row.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-gray-900">{row.name}</span>
                </div>
            )
        },
        { key: 'class', label: 'Class', sortable: true },
        {
            key: 'performance',
            label: 'Performance',
            sortable: true,
            render: (row) => (
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${row.performance === 'Excellent' ? 'bg-green-50 text-green-700 border-green-200' :
                        row.performance === 'Good' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            row.performance === 'Average' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                'bg-red-50 text-red-700 border-red-200'
                    }`}>
                    {row.performance}
                </span>
            )
        },
        {
            key: 'attendance', label: 'Attendance', sortable: true, render: (row) => (
                <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: row.attendance }}
                        />
                    </div>
                    <span className="text-xs text-gray-600">{row.attendance}</span>
                </div>
            )
        },
        { key: 'behavior', label: 'Behavior', sortable: true },
        { key: 'lastReport', label: 'Last Report', sortable: true },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Profile', icon: <Eye size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download Report', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header & Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Student Reports</h2>
                    <p className="text-sm text-gray-500">Comprehensive academic and behavioral records</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export All
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
                                <span className="text-gray-400 ml-1">vs last term</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Filters & Table */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                        <div className="mb-6">
                            <FilterPanel
                                filters={filterOptions}
                                onFilterChange={setFilters}
                            />
                        </div>
                        <DataTable
                            columns={columns}
                            data={studentReports}
                            selectable={true}
                            onQuickAction={handleQuickAction}
                            pageSize={8}
                        />
                    </div>
                </div>

                {/* Charts Side Panel */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Performance Distribution</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={performanceData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {performanceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-4 space-y-3">
                            {performanceData.map((item) => (
                                <div key={item.name} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-gray-600">{item.name}</span>
                                    </div>
                                    <span className="font-medium text-gray-900">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentReports;
