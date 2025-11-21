import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, Bus, MapPin, Clock, AlertCircle } from 'lucide-react';

const TransportReports = () => {
    const [filters, setFilters] = useState({});
    const { transportReports } = reportsOverviewData;

    // Mock Summary Data
    const summaryStats = [
        { label: 'Active Routes', value: '12', change: 'All Operational', icon: MapPin, color: '#2A6EF2', bg: 'bg-blue-50' },
        { label: 'Students Transported', value: '850', change: '+15', icon: Bus, color: '#3AC47D', bg: 'bg-green-50' },
        { label: 'Maintenance Alerts', value: '1', change: 'Urgent', icon: AlertCircle, color: '#EF4444', bg: 'bg-red-50' },
    ];

    const filterOptions = [
        {
            key: 'status',
            label: 'Status',
            type: 'select',
            options: [
                { label: 'On Time', value: 'On Time' },
                { label: 'Delayed', value: 'Delayed' },
                { label: 'Maintenance', value: 'Maintenance' },
            ]
        }
    ];

    const columns = [
        {
            key: 'route', label: 'Route Name', sortable: true, render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-[#2A6EF2] border border-blue-100">
                        <Bus className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800">{row.route}</span>
                </div>
            )
        },
        { key: 'driver', label: 'Driver', sortable: true, render: (row) => <span className="text-slate-700">{row.driver}</span> },
        {
            key: 'students', label: 'Occupancy', sortable: true, render: (row) => (
                <div className="w-full max-w-[100px]">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">{row.students}/{row.capacity}</span>
                        <span className="text-slate-400">{(row.students / row.capacity * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full ${row.students / row.capacity > 0.9 ? 'bg-[#EF4444]' : 'bg-[#2A6EF2]'
                                }`}
                            style={{ width: `${(row.students / row.capacity * 100)}%` }}
                        />
                    </div>
                </div>
            )
        },
        {
            key: 'status', label: 'Status', sortable: true, render: (row) => (
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'On Time' ? 'bg-green-50 text-[#3AC47D] border-green-100' :
                    row.status === 'Delayed' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                        'bg-red-50 text-[#EF4444] border-red-100'
                    }`}>
                    {row.status}
                </span>
            )
        },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Route', icon: <MapPin size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download Log', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Transport Logistics</h2>
                    <p className="text-sm text-slate-500">Fleet status and route efficiency</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                        <Bus className="w-4 h-4 mr-2" />
                        Manage Routes
                    </button>
                    <button className="flex items-center px-4 py-2 bg-[#2A6EF2] text-white rounded-lg text-sm font-medium hover:bg-blue-600 hover:shadow-md transition-all shadow-sm">
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
                                <span className="text-slate-600 font-medium">
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="mb-6">
                    <FilterPanel
                        filters={filterOptions}
                        onFilterChange={setFilters}
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={transportReports}
                    selectable={true}
                    onQuickAction={handleQuickAction}
                    pageSize={8}
                />
            </div>
        </div>
    );
};

export default TransportReports;
