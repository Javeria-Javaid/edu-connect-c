import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, BookOpen, Trophy, TrendingUp, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AcademicReports = () => {
    const [filters, setFilters] = useState({});
    const { academicReports, gradeDistribution } = reportsOverviewData;

    // Mock Summary Data
    const summaryStats = [
        { label: 'Avg. Pass Rate', value: '92%', change: '+4%', icon: Trophy, color: 'green' },
        { label: 'Top Subject', value: 'English', change: '98% Pass', icon: BookOpen, color: 'blue' },
        { label: 'Needs Focus', value: 'Physics', change: '82% Pass', icon: AlertTriangle, color: 'red' },
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
            key: 'subject',
            label: 'Subject',
            type: 'select',
            options: [
                { label: 'Mathematics', value: 'Mathematics' },
                { label: 'Science', value: 'Science' },
                { label: 'English', value: 'English' },
            ]
        }
    ];

    const columns = [
        {
            key: 'exam', label: 'Exam Name', sortable: true, render: (row) => (
                <span className="font-medium text-gray-900">{row.exam}</span>
            )
        },
        { key: 'class', label: 'Class', sortable: true },
        { key: 'subject', label: 'Subject', sortable: true },
        {
            key: 'average', label: 'Avg. Score', sortable: true, render: (row) => (
                <span className="font-bold text-gray-700">{row.average}</span>
            )
        },
        {
            key: 'passRate', label: 'Pass Rate', sortable: true, render: (row) => (
                <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full ${parseInt(row.passRate) >= 90 ? 'bg-green-500' : 'bg-yellow-500'}`}
                            style={{ width: row.passRate }}
                        />
                    </div>
                    <span className="text-xs font-medium">{row.passRate}</span>
                </div>
            )
        },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Details', icon: <FileText size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download Results', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Academic Performance</h2>
                    <p className="text-sm text-gray-500">Exam results and grade analysis</p>
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
                                <span className="text-gray-600 font-medium">
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Grade Distribution Chart */}
                <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Overall Grade Distribution</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={gradeDistribution} barSize={50}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                                <Tooltip
                                    cursor={{ fill: '#f9fafb' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                    {gradeDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Filters & Table */}
                <div className="lg:col-span-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mb-6">
                        <FilterPanel
                            filters={filterOptions}
                            onFilterChange={setFilters}
                        />
                    </div>
                    <DataTable
                        columns={columns}
                        data={academicReports}
                        selectable={true}
                        onQuickAction={handleQuickAction}
                        pageSize={8}
                    />
                </div>
            </div>
        </div>
    );
};

export default AcademicReports;
