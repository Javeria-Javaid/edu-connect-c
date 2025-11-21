import React from 'react';
import { Users, CheckCircle, XCircle, Clock, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';
import { attendanceStats, classAttendance, missingSubmissions, irregularStudents } from './operations/mockData';
import './parents/ParentsOverview.css';

const SchoolAttendanceView = () => {
    const { todayAttendance, totalPresent, totalAbsent, totalLeave, missingSubmissions: missing, irregularStudents: irregular } = attendanceStats;

    const kpiCards = [
        { title: "Today's Attendance", value: `${todayAttendance}%`, icon: <Users size={28} />, color: "#10b981", trend: `${totalPresent} present` },
        { title: "Present", value: totalPresent, icon: <CheckCircle size={28} />, color: "#3b82f6", trend: "students" },
        { title: "Absent", value: totalAbsent, icon: <XCircle size={28} />, color: "#ef4444", trend: "students" },
        { title: "On Leave", value: totalLeave, icon: <Calendar size={28} />, color: "#f59e0b", trend: "approved" }
    ];

    return (
        <div className="parents-overview">
            <div className="overview-header">
                <div>
                    <h1 className="overview-title">Attendance Management</h1>
                    <p className="overview-subtitle">Track and manage student attendance</p>
                </div>
            </div>

            <div className="kpi-grid">
                {kpiCards.map((card, index) => (
                    <div key={index} className="kpi-card">
                        <div className="kpi-icon" style={{ background: `${card.color}15`, color: card.color }}>
                            {card.icon}
                        </div>
                        <div className="kpi-content">
                            <h3 className="kpi-title">{card.title}</h3>
                            <div className="kpi-value">{card.value}</div>
                            <div className="kpi-trend">{card.trend}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="stats-alerts-row">
                <div className="communication-card">
                    <div className="card-header">
                        <h2 className="card-title"><TrendingUp size={20} />Class-wise Attendance</h2>
                    </div>
                    <div className="activity-list">
                        {classAttendance.map((cls, index) => (
                            <div key={index} className="activity-item">
                                <div className="activity-avatar" style={{ background: cls.attendance >= 95 ? '#10b981' : cls.attendance >= 90 ? '#f59e0b' : '#ef4444' }}>
                                    {cls.attendance}%
                                </div>
                                <div className="activity-details">
                                    <div className="activity-parent">Class {cls.class}</div>
                                    <div className="activity-action">Present: {cls.present} • Absent: {cls.absent} • Leave: {cls.leave}</div>
                                </div>
                                <div className="activity-time">
                                    {cls.attendance >= 95 ? <CheckCircle size={18} style={{ color: '#10b981' }} /> : <AlertTriangle size={18} style={{ color: '#f59e0b' }} />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="alerts-card">
                    <div className="card-header">
                        <h2 className="card-title"><AlertTriangle size={20} />Alerts</h2>
                    </div>
                    <div className="alerts-list">
                        <div className="alert-item alert-warning">
                            <div className="alert-icon"><Clock size={18} /></div>
                            <div className="alert-content">
                                <div className="alert-label">Missing Submissions</div>
                                <div className="alert-count">{missing} teachers</div>
                            </div>
                        </div>
                        <div className="alert-item alert-info">
                            <div className="alert-icon"><AlertTriangle size={18} /></div>
                            <div className="alert-content">
                                <div className="alert-label">Irregular Attendance</div>
                                <div className="alert-count">{irregular} students</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="activity-card">
                <div className="card-header">
                    <h2 className="card-title"><Clock size={20} />Missing Submissions</h2>
                </div>
                <div className="activity-list">
                    {missingSubmissions.map((sub, index) => (
                        <div key={index} className="activity-item">
                            <div className="activity-avatar" style={{ background: '#ef4444' }}>!</div>
                            <div className="activity-details">
                                <div className="activity-parent">{sub.teacher}</div>
                                <div className="activity-action">Class {sub.class}-{sub.section} • Deadline: {sub.deadline}</div>
                            </div>
                            <div className="activity-time">Pending</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SchoolAttendanceView;
