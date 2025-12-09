import React from 'react';
import {
    BookOpen,
    Users,
    ClipboardCheck,
    Book,
    FileSpreadsheet,
    Megaphone,
    Calendar,
    TrendingUp,
    Clock,
    AlertCircle,
    CheckCircle
} from 'lucide-react';
import './TeacherDashboardOverview.css';

const TeacherDashboardOverview = () => {
    // KPI Data
    const kpiData = [
        { title: 'Total Assigned Classes', value: '5', change: 'Active Classes', icon: BookOpen, color: '#3b82f6' },
        { title: 'Total Students', value: '142', change: 'Across all classes', icon: Users, color: '#10b981' },
        { title: "Today's Attendance Pending", value: '2', change: 'Classes remaining', icon: ClipboardCheck, color: '#f59e0b' },
        { title: 'Homework Due Today', value: '3', change: 'Assignments to grade', icon: Book, color: '#8b5cf6' },
        { title: 'Upcoming Exams', value: '2', change: 'Next week', icon: FileSpreadsheet, color: '#ef4444' },
    ];

    // Today's Classes
    const todaysClasses = [
        { id: 1, subject: 'Mathematics', class: 'Class 10-A', time: '09:00 AM - 10:00 AM', room: 'Room 101', students: 28 },
        { id: 2, subject: 'Physics', class: 'Class 9-B', time: '10:15 AM - 11:15 AM', room: 'Lab 2', students: 30 },
        { id: 3, subject: 'Mathematics', class: 'Class 10-B', time: '11:30 AM - 12:30 PM', room: 'Room 102', students: 29 },
    ];

    // Pending Tasks
    const pendingTasks = [
        { id: 1, title: 'Grade Math Quiz (10-A)', due: 'Today', type: 'grading', priority: 'high' },
        { id: 2, title: 'Upload Physics Notes (9-B)', due: 'Tomorrow', type: 'upload', priority: 'medium' },
        { id: 3, title: 'Mark Attendance (10-B)', due: 'Today', type: 'attendance', priority: 'high' },
    ];

    // Announcements
    const announcements = [
        { id: 1, title: 'Staff Meeting', date: 'Dec 5, 2025', content: 'Monthly staff meeting at 2:00 PM in the conference room.' },
        { id: 2, title: 'Winter Break', date: 'Dec 20, 2025', content: 'School will remain closed for winter break from Dec 24.' },
    ];

    // Student Performance Data (for chart)
    const performanceData = [
        { name: 'Week 1', score: 75 },
        { name: 'Week 2', score: 82 },
        { name: 'Week 3', score: 78 },
        { name: 'Week 4', score: 88 },
        { name: 'Week 5', score: 85 },
    ];

    // Attendance Data (for donut chart)
    const attendanceData = {
        present: 135,
        absent: 7,
        late: 3,
        total: 145
    };

    return (
        <div className="teacher-dashboard-overview">
            <div className="overview-header">
                <div>
                    <h1 className="page-title">Teacher Dashboard</h1>
                    <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="date-display">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            {/* KPI Cards */}
            <div className="kpi-grid">
                {kpiData.map((kpi, index) => (
                    <div key={index} className="kpi-card">
                        <div className="kpi-icon-wrapper" style={{ backgroundColor: `${kpi.color}20`, color: kpi.color }}>
                            <kpi.icon size={24} />
                        </div>
                        <div className="kpi-content">
                            <h3 className="kpi-title">{kpi.title}</h3>
                            <div className="kpi-value">{kpi.value}</div>
                            <div className="kpi-change">{kpi.change}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
                {/* Today's Schedule Timeline */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Today's Schedule</h2>
                        <Calendar size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="schedule-timeline">
                            {todaysClasses.map((cls) => (
                                <div key={cls.id} className="schedule-item">
                                    <div className="schedule-time-badge">
                                        <span className="time-start">{cls.time.split(' - ')[0]}</span>
                                        <span className="time-end">{cls.time.split(' - ')[1]}</span>
                                    </div>
                                    <div className="schedule-details">
                                        <h4>{cls.subject}</h4>
                                        <p>{cls.class} • {cls.room}</p>
                                        <span className="schedule-students">{cls.students} students</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Student Performance Chart */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Student Performance</h2>
                        <TrendingUp size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="chart-placeholder">
                            <p>Line chart showing student performance trends</p>
                            <div className="chart-data-preview">
                                {performanceData.map((item, idx) => (
                                    <div key={idx} className="chart-bar" style={{ height: `${item.score}%` }}>
                                        <span>{item.score}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attendance Donut Chart */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Attendance Overview</h2>
                        <ClipboardCheck size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="attendance-chart-container">
                            <div className="attendance-donut" style={{ background: `conic-gradient(#10b981 0deg ${(attendanceData.present / attendanceData.total) * 360}deg, #fee2e2 ${(attendanceData.present / attendanceData.total) * 360}deg 360deg)` }}>
                                <div className="donut-center">
                                    <span className="donut-percentage">{Math.round((attendanceData.present / attendanceData.total) * 100)}%</span>
                                    <span className="donut-total">{attendanceData.total} Total</span>
                                </div>
                            </div>
                            <div className="attendance-stats">
                                <div className="stat-item">
                                    <span className="stat-label">Present</span>
                                    <span className="stat-value">{attendanceData.present}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Absent</span>
                                    <span className="stat-value">{attendanceData.absent}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Late</span>
                                    <span className="stat-value">{attendanceData.late}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pending Tasks */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Pending Tasks</h2>
                        <AlertCircle size={20} className="text-orange-500" />
                    </div>
                    <div className="card-body">
                        <div className="tasks-list">
                            {pendingTasks.map((task) => (
                                <div key={task.id} className="task-item">
                                    <div className="task-indicator" style={{ backgroundColor: task.type === 'grading' ? '#ef4444' : task.type === 'upload' ? '#3b82f6' : '#10b981' }}></div>
                                    <div className="task-content">
                                        <h4>{task.title}</h4>
                                        <span className="task-due">Due: {task.due}</span>
                                    </div>
                                    <div className="task-priority">
                                        {task.priority === 'high' && <span className="badge badge-danger">High</span>}
                                        {task.priority === 'medium' && <span className="badge badge-warning">Medium</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Latest Announcements */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Latest Announcements</h2>
                        <Megaphone size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="announcements-list">
                            {announcements.map((ann) => (
                                <div key={ann.id} className="announcement-item">
                                    <h4>{ann.title}</h4>
                                    <p>{ann.content}</p>
                                    <span className="announcement-date">{ann.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboardOverview;
