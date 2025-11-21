import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, Eye } from 'lucide-react';

const StudentReports = () => {
    const [filters, setFilters] = useState({});
    const { studentReports } = reportsOverviewData;

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
        { key: 'name', label: 'Student Name', sortable: true },
        { key: 'class', label: 'Class', sortable: true },
        {
            key: 'performance',
            label: 'Performance',
            sortable: true,
            render: (row) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.performance === 'Excellent' ? 'bg-green-100 text-green-800' :
                        row.performance === 'Good' ? 'bg-blue-100 text-blue-800' :
                            row.performance === 'Average' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                    }`}>
                    {row.performance}
                </span>
            )
        },
        { key: 'attendance', label: 'Attendance', sortable: true },
        { key: 'behavior', label: 'Behavior', sortable: true },
        { key: 'lastReport', label: 'Last Report', sortable: true },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Profile', icon: <Eye size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download Report', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Student Reports Directory</h2>
                <div className="flex gap-2">
                    <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        <Download className="w-4 h-4 mr-2" />
                        Export All
                    </button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="mb-4">
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
                    pageSize={10}
                />
            </div>
        </div>
    );
};

export default StudentReports;
