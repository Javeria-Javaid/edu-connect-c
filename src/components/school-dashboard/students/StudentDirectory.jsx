import React, { useState, useMemo } from 'react';
import { Eye, Edit, MessageCircle, Printer, Plus, Download, Search } from 'lucide-react';
import SearchBar from '../shared/SearchBar';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import AddStudentModal from './AddStudentModal';
import { mockStudents, studentFilters } from './mockData';

const StudentDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddStudent = (studentData) => {
        console.log('New student:', studentData);
        // In real implementation, this would add to database
    };

    // Filter and search logic
    const filteredStudents = useMemo(() => {
        return mockStudents.filter(student => {
            // Search filter
            const matchesSearch = !searchTerm ||
                student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase());

            // Class filter
            const matchesClass = !activeFilters.class ||
                activeFilters.class.includes(student.class);

            // Section filter
            const matchesSection = !activeFilters.section ||
                activeFilters.section.includes(student.section);

            // Gender filter
            const matchesGender = !activeFilters.gender ||
                student.gender === activeFilters.gender;

            // Fee status filter
            const matchesFeeStatus = !activeFilters.feeStatus ||
                activeFilters.feeStatus.includes(student.feeStatus);

            // Attendance filter
            const matchesAttendance = !activeFilters.attendance ||
                student.attendance >= activeFilters.attendance;

            return matchesSearch && matchesClass && matchesSection &&
                matchesGender && matchesFeeStatus && matchesAttendance;
        });
    }, [searchTerm, activeFilters]);

    // Table columns configuration
    const columns = [
        {
            key: 'photo',
            label: 'Photo',
            render: (student) => (
                <img src={student.photo} alt={student.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
            )
        },
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (student) => (
                <div>
                    <div className="font-medium text-slate-800">{student.name}</div>
                    <div className="text-xs text-slate-500">{student.admissionNumber}</div>
                </div>
            )
        },
        {
            key: 'class',
            label: 'Class',
            sortable: true,
            render: (student) => (
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-slate-600 text-xs font-medium border border-gray-200">
                    {student.class}-{student.section}
                </span>
            )
        },
        {
            key: 'rollNumber',
            label: 'Roll No.',
            sortable: true,
            render: (student) => <span className="text-sm text-slate-600">{student.rollNumber}</span>
        },
        {
            key: 'attendance',
            label: 'Attendance',
            sortable: true,
            render: (student) => (
                <div className="w-24">
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-1">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `${student.attendance}%`,
                                background: student.attendance >= 90 ? '#3AC47D' :
                                    student.attendance >= 75 ? '#f59e0b' : '#ef4444'
                            }}
                        />
                    </div>
                    <span className="text-xs text-slate-500">{student.attendance}%</span>
                </div>
            )
        },
        {
            key: 'feeStatus',
            label: 'Fee Status',
            sortable: true,
            render: (student) => {
                const statusColors = {
                    Paid: 'bg-green-50 text-[#3AC47D]',
                    Pending: 'bg-orange-50 text-orange-500',
                    Overdue: 'bg-red-50 text-red-500'
                };
                return (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[student.feeStatus] || 'bg-gray-100 text-gray-600'}`}>
                        {student.feeStatus}
                    </span>
                );
            }
        },
        {
            key: 'performance',
            label: 'Performance',
            sortable: true,
            render: (student) => (
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < student.performance ? 'text-yellow-400' : 'text-gray-200'}`}>
                            ★
                        </span>
                    ))}
                </div>
            )
        }
    ];

    // Quick actions for each student
    const getQuickActions = (student) => [
        {
            label: 'View Profile',
            icon: <Eye size={14} />,
            onClick: (student) => console.log('View', student)
        },
        {
            label: 'Edit Details',
            icon: <Edit size={14} />,
            onClick: (student) => console.log('Edit', student)
        },
        {
            label: 'Send Message',
            icon: <MessageCircle size={14} />,
            onClick: (student) => console.log('Message', student)
        },
        {
            label: 'Print ID Card',
            icon: <Printer size={14} />,
            onClick: (student) => console.log('Print', student)
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Student Directory</h1>
                        <p className="text-sm text-slate-500 mt-1">
                            {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} found
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
                            Add Student
                        </button>
                    </div>
                </div>

                {/* Controls & Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-white">
                        <div className="w-full md:w-96">
                            <SearchBar
                                placeholder="Search by name, parent, or admission number..."
                                onSearch={setSearchTerm}
                                searchFields={['Name', 'Parent Name', 'Admission Number']}
                            />
                        </div>
                        <FilterPanel
                            filters={studentFilters}
                            onFilterChange={setActiveFilters}
                        />
                    </div>

                    {/* Bulk Actions Bar */}
                    {selectedStudents.length > 0 && (
                        <div className="bg-blue-50 px-6 py-3 flex items-center justify-between border-b border-blue-100 animate-in slide-in-from-top-2">
                            <span className="text-sm font-medium text-blue-800">{selectedStudents.length} selected</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 bg-white text-slate-700 border border-blue-200 rounded text-xs font-medium hover:bg-blue-50">Send Message</button>
                                <button className="px-3 py-1.5 bg-white text-slate-700 border border-blue-200 rounded text-xs font-medium hover:bg-blue-50">Update Class</button>
                                <button className="px-3 py-1.5 bg-white text-slate-700 border border-blue-200 rounded text-xs font-medium hover:bg-blue-50">Print IDs</button>
                                <button className="px-3 py-1.5 bg-white text-red-600 border border-red-200 rounded text-xs font-medium hover:bg-red-50">Delete</button>
                            </div>
                        </div>
                    )}

                    {/* Data Table */}
                    <DataTable
                        columns={columns}
                        data={filteredStudents}
                        selectable={true}
                        onSelectionChange={setSelectedStudents}
                        onQuickAction={getQuickActions}
                        pageSize={10}
                    />
                </div>
            </div>

            {/* Add Student Modal */}
            <AddStudentModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSubmit={handleAddStudent}
            />
        </div>
    );
};

export default StudentDirectory;
