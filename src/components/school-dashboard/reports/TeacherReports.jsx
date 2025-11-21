import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, Eye, Briefcase, Clock, Star, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const TeacherReports = () => {
    const [filters, setFilters] = useState({});
    const { teacherReports } = reportsOverviewData;

    // Mock Summary Data
    const summaryStats = [
        { label: 'Total Teachers', value: '145', change: '+2%', icon: Briefcase, color: 'blue' },
        { label: 'Avg. Workload', value: '22h', change: '-1h', icon: Clock, color: 'orange' },
        { label: 'Top Performers', value: '12', change: '+3', icon: Star, color: 'yellow' },
    ];

    // Transform data for workload chart
    const workloadData = teacherReports.map(t => ({
        name: t.name,
        hours: parseInt(t.workload)
    }));

    const filterOptions = [
        {
            key: 'subject',
            label: 'Subject',
            type: 'multiselect',
            options: [
                { label: 'Mathematics', value: 'Mathematics' },
                { label: 'Science', value: 'Science' },
                { label: 'English', value: 'English' },
                { label: 'History', value: 'History' },
            ]
        },
        {
            key: 'performance',
            label: 'Performance',
            type: 'select',
            options: [
                { label: 'Excellent', value: 'Excellent' },
                { label: 'Good', value: 'Good' },
                { label: 'Average', value: 'Average' },
            ]
        }
    ];

    const columns = [
        {
            key: 'name', label: 'Teacher Name', sortable: true, render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600">
                        {row.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <span className="font-medium text-gray-900 block">{row.name}</span>
                        <span className="text-xs text-gray-500">{row.subject}</span>
                    </div>
                </div>
            )
        },
        {
            key: 'workload', label: 'Workload', sortable: true, render: (row) => (
                <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-gray-700">{row.workload}</span>
                </div>
            )
        },
        {
            key: 'attendance', label: 'Attendance', sortable: true, render: (row) => (
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${parseInt(row.attendance) >= 95 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                    }`}>
                    {row.attendance}
                </span>
            )
        },
        {
            key: 'performance', label: 'Performance', sortable: true, render: (row) => (
                <div className="flex items-center gap-1">
                    {row.performance === 'Excellent' && <Award className="w-4 h-4 text-amber-500" />}
                    <span className="text-sm text-gray-700">{row.performance}</span>
                </div>
            )
        },
        { key: 'lastEvaluation', label: 'Last Eval', sortable: true },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Profile', icon: <Eye size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download Report', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Teacher Reports</h2>
                    <p className="text-sm text-gray-500">Performance evaluations and workload analysis</p>
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
                            data={teacherReports}
                            selectable={true}
                            onQuickAction={handleQuickAction}
                            pageSize={8}
                        />
                    </div>
                </div>

                {/* Workload Chart */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Workload Distribution</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={workloadData} layout="vertical" barSize={20}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f3f4f6" />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Bar dataKey="hours" radius={[0, 4, 4, 0]}>
                                        {workloadData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.hours > 22 ? '#ef4444' : '#3b82f6'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-4 text-sm text-gray-500 text-center">
                            Teachers with >22 hrs are highlighted in red
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherReports;
