import React, { useState } from 'react';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { reportsOverviewData } from './mockData';
import { FileText, Download, Eye } from 'lucide-react';

const TeacherReports = () => {
    const [filters, setFilters] = useState({});
    const { teacherReports } = reportsOverviewData;

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
                { label: 'Geography', value: 'Geography' },
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
            ]
        }
    ];

    const columns = [
        { key: 'name', label: 'Teacher Name', sortable: true },
        { key: 'subject', label: 'Subject', sortable: true },
        { key: 'workload', label: 'Workload', sortable: true },
        { key: 'attendance', label: 'Attendance', sortable: true },
        {
            key: 'performance',
            label: 'Performance',
            sortable: true,
            render: (row) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.performance === 'Excellent' ? 'bg-green-100 text-green-800' :
                        row.performance === 'Good' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                    }`}>
                    {row.performance}
                </span>
            )
        },
        { key: 'lastEvaluation', label: 'Last Evaluation', sortable: true },
    ];

    const handleQuickAction = (row) => [
        { label: 'View Profile', icon: <Eye size={14} />, onClick: () => console.log('View', row) },
        { label: 'Download Report', icon: <Download size={14} />, onClick: () => console.log('Download', row) },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Teacher Reports Directory</h2>
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
                    data={teacherReports}
                    selectable={true}
                    onQuickAction={handleQuickAction}
                    pageSize={10}
                />
            </div>
        </div>
    );
};

export default TeacherReports;
