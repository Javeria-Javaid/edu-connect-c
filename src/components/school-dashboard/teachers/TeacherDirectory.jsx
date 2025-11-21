import React, { useState, useMemo } from 'react';
import { Eye, Edit, MessageCircle, Calendar, Plus, Download } from 'lucide-react';
import SearchBar from '../shared/SearchBar';
import DataTable from '../shared/DataTable';
import FilterPanel from '../shared/FilterPanel';
import AddTeacherModal from './AddTeacherModal';
import { mockTeachers, teacherFilters } from './mockData';
import './TeacherDirectory.css';

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
                <img src={teacher.photo} alt={teacher.name} className="teacher-photo" />
            )
        },
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (teacher) => (
                <div className="teacher-name-cell">
                    <div className="teacher-name">{teacher.name}</div>
                    <div className="teacher-designation">{teacher.designation}</div>
                </div>
            )
        },
        {
            key: 'subjects',
            label: 'Subjects',
            render: (teacher) => (
                <div className="subjects-list">
                    {teacher.subjects.map((subject, idx) => (
                        <span key={idx} className="subject-tag">{subject}</span>
                    ))}
                </div>
            )
        },
        {
            key: 'classes',
            label: 'Classes',
            render: (teacher) => (
                <div className="classes-count">
                    <span className="count-badge">{teacher.classCount}</span>
                    <span className="count-label">classes</span>
                </div>
            )
        },
        {
            key: 'weeklyLoad',
            label: 'Weekly Load',
            sortable: true,
            render: (teacher) => (
                <span className="weekly-load">{teacher.weeklyLoad} hrs</span>
            )
        },
        {
            key: 'attendance',
            label: 'Attendance',
            sortable: true,
            render: (teacher) => (
                <div className="attendance-cell">
                    <div className="attendance-bar">
                        <div
                            className="attendance-fill"
                            style={{
                                width: `${teacher.attendance}%`,
                                background: teacher.attendance >= 90 ? '#10b981' :
                                    teacher.attendance >= 75 ? '#f59e0b' : '#ef4444'
                            }}
                        />
                    </div>
                    <span className="attendance-percent">{teacher.attendance}%</span>
                </div>
            )
        },
        {
            key: 'employmentType',
            label: 'Type',
            sortable: true,
            render: (teacher) => (
                <span className={`employment-badge ${teacher.employmentType.toLowerCase().replace('-', '')}`}>
                    {teacher.employmentType}
                </span>
            )
        },
        {
            key: 'status',
            label: 'Status',
            sortable: true,
            render: (teacher) => (
                <span className={`status-badge status-${teacher.status.toLowerCase().replace(' ', '')}`}>
                    {teacher.status}
                </span>
            )
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
        <div className="teacher-directory">
            {/* Header */}
            <div className="directory-header">
                <div className="header-left">
                    <h1 className="directory-title">Teacher Directory</h1>
                    <p className="directory-subtitle">
                        {filteredTeachers.length} teacher{filteredTeachers.length !== 1 ? 's' : ''} found
                    </p>
                </div>
                <div className="header-right">
                    <button className="btn-secondary">
                        <Download size={18} />
                        Export
                    </button>
                    <button className="btn-primary" onClick={() => setIsAddModalOpen(true)}>
                        <Plus size={18} />
                        Add Teacher
                    </button>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="directory-controls">
                <SearchBar
                    placeholder="Search by name, subject, email, or phone..."
                    onSearch={setSearchTerm}
                    searchFields={['Name', 'Subject', 'Email', 'Phone']}
                />
                <FilterPanel
                    filters={teacherFilters}
                    onFilterChange={setActiveFilters}
                />
            </div>

            {/* Bulk Actions Bar */}
            {selectedTeachers.length > 0 && (
                <div className="bulk-actions-bar">
                    <span className="selected-count">{selectedTeachers.length} selected</span>
                    <div className="bulk-actions">
                        <button className="bulk-action-btn">Send Message</button>
                        <button className="bulk-action-btn">Update Schedule</button>
                        <button className="bulk-action-btn">Export Data</button>
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
