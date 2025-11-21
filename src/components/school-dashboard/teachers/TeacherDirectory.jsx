import React, { useState, useMemo } from 'react';
import { Eye, Edit, MessageCircle, Calendar, Plus, Download } from 'lucide-react';
import SearchBar from '../shared/SearchBar';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import AddTeacherModal from './AddTeacherModal';
import { mockTeachers, teacherFilters } from './mockData';

const TeacherDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [selectedTeachers, setSelectedTeachers] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddTeacher = (teacherData) => {
        console.log('New teacher:', teacherData);
        // In real implementation, this would add to database
    };

    // Filter and search logic
    const filteredTeachers = useMemo(() => {
        return mockTeachers.filter(teacher => {
            // Search filter
            const matchesSearch = !searchTerm ||
                teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                teacher.phone.includes(searchTerm) ||
                teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));

            // Subject filter
            const matchesSubjects = !activeFilters.subjects ||
                activeFilters.subjects.some(subject => teacher.subjects.includes(subject));

            // Employment type filter
            const matchesEmploymentType = !activeFilters.employmentType ||
                activeFilters.employmentType.includes(teacher.employmentType);

            // Status filter
            const matchesStatus = !activeFilters.status ||
                teacher.status === activeFilters.status;

            // Attendance filter
            const matchesAttendance = !activeFilters.attendance ||
                teacher.attendance >= activeFilters.attendance;

            return matchesSearch && matchesSubjects && matchesEmploymentType &&
                matchesStatus && matchesAttendance;
        });
    }, [searchTerm, activeFilters]);

    // Table columns configuration
    const columns = [
        {
            key: 'photo',
            label: 'Photo',
            render: (teacher) => (
                <img src={teacher.photo} alt={teacher.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
            )
        },
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (teacher) => (
                <div>
                    <div className="font-medium text-slate-800">{teacher.name}</div>
                    <div className="text-xs text-slate-500">{teacher.designation}</div>
                </div>
            )
        },
        {
            key: 'subjects',
            label: 'Subjects',
            render: (teacher) => (
                <div className="flex flex-wrap gap-1">
                    {teacher.subjects.map((subject, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-md border border-blue-100">
                            {subject}
                        </span>
                    ))}
                </div>
            )
        },
        {
            key: 'classes',
            label: 'Classes',
            render: (teacher) => (
                <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-700">{teacher.classCount}</span>
                    <span className="text-xs text-slate-500">classes</span>
                </div>
            )
        },
        {
            key: 'weeklyLoad',
            label: 'Weekly Load',
            sortable: true,
            render: (teacher) => (
                <span className="text-sm font-medium text-slate-700">{teacher.weeklyLoad} hrs</span>
            )
        },
        {
            key: 'attendance',
            label: 'Attendance',
            sortable: true,
            render: (teacher) => (
                <div className="w-24">
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-1">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `${teacher.attendance}%`,
                                background: teacher.attendance >= 90 ? '#3AC47D' :
                                    teacher.attendance >= 75 ? '#f59e0b' : '#ef4444'
                            }}
                        />
                    </div>
                    <span className="text-xs text-slate-500">{teacher.attendance}%</span>
                </div>
            )
        },
        {
            key: 'employmentType',
            label: 'Type',
            sortable: true,
            render: (teacher) => (
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-slate-600 text-xs font-medium border border-gray-200">
                    {teacher.employmentType}
                </span>
            )
        },
        {
            key: 'status',
            label: 'Status',
            sortable: true,
            render: (teacher) => {
                const statusColors = {
                    Active: 'bg-green-50 text-[#3AC47D]',
                    'On Leave': 'bg-orange-50 text-orange-500',
                    Inactive: 'bg-gray-100 text-gray-500'
                };
                return (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[teacher.status] || 'bg-gray-100 text-gray-600'}`}>
                        {teacher.status}
                    </span>
                );
            }
        }
    ];

    // Quick actions for each teacher
    const getQuickActions = (teacher) => [
        {
            label: 'View Profile',
            icon: <Eye size={14} />,
            onClick: (teacher) => console.log('View', teacher)
        },
        {
            label: 'Edit Details',
            icon: <Edit size={14} />,
            onClick: (teacher) => console.log('Edit', teacher)
        },
        {
            label: 'View Timetable',
            icon: <Calendar size={14} />,
            onClick: (teacher) => console.log('Timetable', teacher)
        },
        {
            label: 'Send Message',
            icon: <MessageCircle size={14} />,
            onClick: (teacher) => console.log('Message', teacher)
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Teacher Directory</h1>
                        <p className="text-sm text-slate-500 mt-1">
                            {filteredTeachers.length} teacher{filteredTeachers.length !== 1 ? 's' : ''} found
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            <Download size={18} />
                            Export
                        </button>
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#2A6EF2] text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm"
                        >
                            <Plus size={18} />
                            Add Teacher
                        </button>
                    </div>
                </div>

                {/* Controls & Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-white">
                        <div className="w-full md:w-96">
                            <SearchBar
                                placeholder="Search by name, subject, email, or phone..."
                                onSearch={setSearchTerm}
                                searchFields={['Name', 'Subject', 'Email', 'Phone']}
                            />
                        </div>
                        <FilterPanel
                            filters={teacherFilters}
                            onFilterChange={setActiveFilters}
                        />
                    </div>

                    {/* Bulk Actions Bar */}
                    {selectedTeachers.length > 0 && (
                        <div className="bg-blue-50 px-6 py-3 flex items-center justify-between border-b border-blue-100 animate-in slide-in-from-top-2">
                            <span className="text-sm font-medium text-blue-800">{selectedTeachers.length} selected</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 bg-white text-slate-700 border border-blue-200 rounded text-xs font-medium hover:bg-blue-50">Send Message</button>
                                <button className="px-3 py-1.5 bg-white text-slate-700 border border-blue-200 rounded text-xs font-medium hover:bg-blue-50">Update Schedule</button>
                                <button className="px-3 py-1.5 bg-white text-slate-700 border border-blue-200 rounded text-xs font-medium hover:bg-blue-50">Export Data</button>
                            </div>
                        </div>
                    )}

                    {/* Data Table */}
                    <DataTable
                        columns={columns}
                        data={filteredTeachers}
                        selectable={true}
                        onSelectionChange={setSelectedTeachers}
                        onQuickAction={getQuickActions}
                        pageSize={10}
                    />
                </div>
            </div>

            {/* Add Teacher Modal */}
            <AddTeacherModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSubmit={handleAddTeacher}
            />
        </div>
    );
};

export default TeacherDirectory;
