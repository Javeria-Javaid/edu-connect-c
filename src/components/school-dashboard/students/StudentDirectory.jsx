import React, { useState, useMemo } from 'react';
import { Eye, Edit, MessageCircle, Printer, Plus, Download } from 'lucide-react';
import SearchBar from '../shared/SearchBar';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import { mockStudents, studentFilters } from './mockData';
import './StudentDirectory.css';

const StudentDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState({});
    const [selectedStudents, setSelectedStudents] = useState([]);

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
                <img src={student.photo} alt={student.name} className="student-photo" />
            )
        },
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (student) => (
                <div className="student-name-cell">
                    <div className="student-name">{student.name}</div>
                    <div className="student-admission">{student.admissionNumber}</div>
                </div>
            )
        },
        {
            key: 'class',
            label: 'Class',
            sortable: true,
            render: (student) => (
                <span className="class-badge">{student.class}-{student.section}</span>
            )
        },
        {
            key: 'rollNumber',
            label: 'Roll No.',
            sortable: true
        },
        {
            key: 'attendance',
            label: 'Attendance',
            sortable: true,
            render: (student) => (
                <div className="attendance-cell">
                    <div className="attendance-bar">
                        <div
                            className="attendance-fill"
                            style={{
                                width: `${student.attendance}%`,
                                background: student.attendance >= 90 ? '#10b981' :
                                    student.attendance >= 75 ? '#f59e0b' : '#ef4444'
                            }}
                        />
                    </div>
                    <span className="attendance-percent">{student.attendance}%</span>
                </div>
            )
        },
        {
            key: 'feeStatus',
            label: 'Fee Status',
            sortable: true,
            render: (student) => (
                <span className={`fee-badge fee-${student.feeStatus.toLowerCase()}`}>
                    {student.feeStatus}
                </span>
            )
        },
        {
            key: 'performance',
            label: 'Performance',
            sortable: true,
            render: (student) => (
                <div className="performance-stars">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < student.performance ? 'star filled' : 'star'}>
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
        <div className="student-directory">
            {/* Header */}
            <div className="directory-header">
                <div className="header-left">
                    <h1 className="directory-title">Student Directory</h1>
                    <p className="directory-subtitle">
                        {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} found
                    </p>
                </div>
                <div className="header-right">
                    <button className="btn-secondary">
                        <Download size={18} />
                        Export
                    </button>
                    <button className="btn-primary">
                        <Plus size={18} />
                        Add Student
                    </button>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="directory-controls">
                <SearchBar
                    placeholder="Search by name, parent, or admission number..."
                    onSearch={setSearchTerm}
                    searchFields={['Name', 'Parent Name', 'Admission Number']}
                />
                <FilterPanel
                    filters={studentFilters}
                    onFilterChange={setActiveFilters}
                />
            </div>

            {/* Bulk Actions Bar */}
            {selectedStudents.length > 0 && (
                <div className="bulk-actions-bar">
                    <span className="selected-count">{selectedStudents.length} selected</span>
                    <div className="bulk-actions">
                        <button className="bulk-action-btn">Send Message</button>
                        <button className="bulk-action-btn">Update Class</button>
                        <button className="bulk-action-btn">Print IDs</button>
                        <button className="bulk-action-btn danger">Delete</button>
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
    );
};

export default StudentDirectory;
