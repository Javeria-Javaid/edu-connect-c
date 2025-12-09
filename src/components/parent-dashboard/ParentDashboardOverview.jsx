import React from 'react';
import {
    Users,
    ClipboardCheck,
    Book,
    FileSpreadsheet,
    DollarSign,
    Calendar,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    Clock
} from 'lucide-react';
import './ParentDashboardOverview.css';

const ParentDashboardOverview = () => {
    const kpiData = [
        { title: 'Child Attendance', value: '95%', change: 'This Month', icon: ClipboardCheck, color: '#3b82f6' },
        { title: 'Pending Homework', value: '3', change: 'Due Soon', icon: Book, color: '#f59e0b' },
        { title: 'Upcoming Exams', value: '2', change: 'Next Week', icon: FileSpreadsheet, color: '#8b5cf6' },
        { title: 'Fee Status', value: 'Paid', change: 'Current Month', icon: DollarSign, color: '#10b981' },
    ];

    const todaySchedule = [
        { subject: 'Mathematics', time: '09:00 AM - 10:00 AM', teacher: 'Mr. Johnson' },
        { subject: 'Science', time: '10:15 AM - 11:15 AM', teacher: 'Ms. Smith' },
        { subject: 'English', time: '11:30 AM - 12:30 PM', teacher: 'Mrs. Williams' },
    ];

    const announcements = [
        { id: 1, title: 'Parent-Teacher Meeting', date: 'Dec 10, 2025', content: 'Scheduled for next Friday at 2:00 PM.' },
        { id: 2, title: 'Winter Break Notice', date: 'Dec 20, 2025', content: 'School will remain closed from Dec 24 to Jan 2.' },
    ];

    const homeworkAlerts = [
        { id: 1, subject: 'Mathematics', title: 'Chapter 5 Exercises', due: 'Tomorrow', status: 'pending' },
        { id: 2, subject: 'Science', title: 'Lab Report', due: 'Dec 8', status: 'pending' },
        { id: 3, subject: 'English', title: 'Essay Writing', due: 'Dec 10', status: 'submitted' },
    ];

    return (
        <div className="parent-dashboard-overview">
            <div className="overview-header">
                <div>
                    <h1 className="page-title">Parent Dashboard</h1>
                    <p className="page-subtitle">Welcome back! Here's your child's academic overview.</p>
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
                {/* Today's Schedule */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Today's Class Schedule</h2>
                        <Calendar size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="schedule-list">
                            {todaySchedule.map((item, index) => (
                                <div key={index} className="schedule-item">
                                    <div className="schedule-time">{item.time}</div>
                                    <div className="schedule-details">
                                        <h4>{item.subject}</h4>
                                        <p>{item.teacher}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Homework Alerts */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Homework Alerts</h2>
                        <AlertCircle size={20} className="text-orange-500" />
                    </div>
                    <div className="card-body">
                        <div className="homework-list">
                            {homeworkAlerts.map((hw) => (
                                <div key={hw.id} className="homework-item">
                                    <div className="homework-status">
                                        {hw.status === 'submitted' ? (
                                            <CheckCircle size={18} className="text-green-600" />
                                        ) : (
                                            <Clock size={18} className="text-orange-500" />
                                        )}
                                    </div>
                                    <div className="homework-details">
                                        <h4>{hw.subject}</h4>
                                        <p>{hw.title}</p>
                                        <span className="homework-due">Due: {hw.due}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Attendance Summary */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Attendance Summary</h2>
                        <TrendingUp size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="attendance-chart-placeholder">
                            <div className="attendance-stats">
                                <div className="stat-item">
                                    <span className="stat-label">Present Days</span>
                                    <span className="stat-value">22</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Absent Days</span>
                                    <span className="stat-value">1</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Attendance Rate</span>
                                    <span className="stat-value text-green-600">95.7%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* School Announcements */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">School Announcements</h2>
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

                {/* Fee Reminders */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Fee Status</h2>
                        <DollarSign size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="fee-summary">
                            <div className="fee-item">
                                <span className="fee-label">Current Month</span>
                                <span className="fee-value text-green-600">Paid</span>
                            </div>
                            <div className="fee-item">
                                <span className="fee-label">Next Payment Due</span>
                                <span className="fee-value">Jan 5, 2026</span>
                            </div>
                            <button className="btn-primary w-full mt-4">View Fee Details</button>
                        </div>
                    </div>
                </div>

                {/* Upcoming Exams */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Upcoming Exams</h2>
                        <FileSpreadsheet size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="exams-list">
                            <div className="exam-item">
                                <div className="exam-date">Dec 15</div>
                                <div className="exam-details">
                                    <h4>Mathematics - Mid Term</h4>
                                    <p>9:00 AM - 11:00 AM</p>
                                </div>
                            </div>
                            <div className="exam-item">
                                <div className="exam-date">Dec 18</div>
                                <div className="exam-details">
                                    <h4>Science - Mid Term</h4>
                                    <p>9:00 AM - 11:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDashboardOverview;

