import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, DollarSign, TrendingUp, CreditCard, PieChart as PieIcon, Calendar } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const FinanceReports = () => {
    const [filters, setFilters] = useState({});
    const { financeReports } = reportsOverviewData;

    // Mock Summary Data
    const summaryStats = [
        { label: 'Total Revenue', value: '$1.2M', change: '+8%', icon: DollarSign, color: '#3AC47D', bg: 'bg-green-50' },
        { label: 'Pending Dues', value: '$45k', change: '-2%', icon: CreditCard, color: '#EF4444', bg: 'bg-red-50' },
        { label: 'Expenses', value: '$850k', change: '+5%', icon: TrendingUp, color: '#2A6EF2', bg: 'bg-blue-50' },
    ];

    const revenueData = [
        { name: 'Tuition Fees', value: 65, color: '#3AC47D' },
        { name: 'Transport', value: 15, color: '#2A6EF2' },
        { name: 'Donations', value: 10, color: '#F59E0B' },
        { name: 'Others', value: 10, color: '#6366F1' },
    ];

    const filterOptions = [
        {
            key: 'status',
            label: 'Status',
            type: 'select',
            options: [
                { label: 'Collected', value: 'Collected' },
                { label: 'Pending', value: 'Pending' },
                { label: 'Overdue', value: 'Overdue' },
            ]
        },
        {
            key: 'type',
            label: 'Fee Type',
            type: 'multiselect',
            options: [
                { label: 'Tuition', value: 'Tuition' },
                { label: 'Transport', value: 'Transport' },
                { label: 'Library', value: 'Library' },
            ]
        }
    ];

    const columns = [
        {
            key: 'type', label: 'Transaction Type', sortable: true, render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-50 text-slate-600 border border-gray-200">
                        <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800">{row.type}</span>
                </div>
            )
        },
        {
            key: 'amount', label: 'Amount', sortable: true, render: (row) => (
                <span className="font-bold text-slate-800">{row.amount}</span>
            )
        },
        {
            key: 'status', label: 'Status', sortable: true, render: (row) => (
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Collected' ? 'bg-green-50 text-[#3AC47D] border-green-100' :
                    row.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                        'bg-red-50 text-[#EF4444] border-red-100'
                    }`}>
                    {row.status}
                </span>
            )
        },
        { key: 'date', label: 'Date', sortable: true },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Invoice', icon: <FileText size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download Receipt', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Financial Reports</h2>
                    <p className="text-sm text-slate-500">Revenue tracking and fee collection status</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Filter Period
                    </button>
                    <button className="flex items-center px-4 py-2 bg-[#3AC47D] text-white rounded-lg text-sm font-medium hover:bg-green-600 hover:shadow-md transition-all shadow-sm">
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
                        <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
                                </div>
                                <div className={`p-2 rounded-lg ${stat.bg}`} style={{ color: stat.color }}>
                                    <Icon className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm">
                                <span className={stat.change.startsWith('+') ? 'text-[#3AC47D]' : 'text-[#EF4444]'}>
                                    {stat.change}
                                </span>
                                <span className="text-slate-400 ml-1">vs last month</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Filters & Table */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="mb-6">
                            <FilterPanel
                                filters={filterOptions}
                                onFilterChange={setFilters}
                            />
                        </div>
                        <DataTable
                            columns={columns}
                            data={financeReports}
                            selectable={true}
                            onQuickAction={handleQuickAction}
                            pageSize={8}
                        />
                    </div>
                </div>

                {/* Revenue Chart */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-6">Revenue Sources</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={revenueData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {revenueData.map((entry, index) => (
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceReports;
