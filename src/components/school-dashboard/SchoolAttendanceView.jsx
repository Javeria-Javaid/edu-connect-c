import React from 'react';
import { Users, CheckCircle, XCircle, Clock, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';
import { attendanceStats, classAttendance, missingSubmissions, irregularStudents } from './operations/mockData';

const SchoolAttendanceView = () => {
    const { todayAttendance, totalPresent, totalAbsent, totalLeave, missingSubmissions: missing, irregularStudents: irregular } = attendanceStats;

    const kpiCards = [
        { title: "Today's Attendance", value: `${todayAttendance}%`, icon: <Users size={24} />, color: "#3AC47D", trend: `${totalPresent} present`, bg: "bg-green-50" },
        { title: "Present", value: totalPresent, icon: <CheckCircle size={24} />, color: "#2A6EF2", trend: "students", bg: "bg-blue-50" },
        { title: "Absent", value: totalAbsent, icon: <XCircle size={24} />, color: "#EF4444", trend: "students", bg: "bg-red-50" },
        { title: "On Leave", value: totalLeave, icon: <Calendar size={24} />, color: "#F59E0B", trend: "approved", bg: "bg-amber-50" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h1 className="text-2xl font-bold text-slate-800">Attendance Management</h1>
                    <p className="text-sm text-slate-500 mt-1">Track and manage student attendance</p>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kpiCards.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg ${card.bg}`} style={{ color: card.color }}>
                                    {card.icon}
                                </div>
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-slate-600">
                                    Today
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-500">{card.title}</h3>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl font-bold text-slate-800">{card.value}</span>
                                    <span className="text-xs text-slate-500">{card.trend}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Class-wise Attendance */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <TrendingUp size={20} className="text-[#2A6EF2]" />
                                Class-wise Attendance
                            </h2>
                            <button className="text-sm text-[#2A6EF2] font-medium hover:underline">View All</button>
                        </div>
                        <div className="space-y-4">
                            {classAttendance.map((cls, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm"
                                            style={{ background: cls.attendance >= 95 ? '#3AC47D' : cls.attendance >= 90 ? '#F59E0B' : '#EF4444' }}
                                        >
                                            {cls.attendance}%
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800">Class {cls.class}</div>
                                            <div className="text-xs text-slate-500 mt-0.5">
                                                <span className="text-[#3AC47D] font-medium">{cls.present} Present</span> •
                                                <span className="text-[#EF4444] ml-1">{cls.absent} Absent</span> •
                                                <span className="text-amber-500 ml-1">{cls.leave} Leave</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-slate-400">
                                        {cls.attendance >= 95 ? <CheckCircle size={20} className="text-[#3AC47D]" /> : <AlertTriangle size={20} className="text-amber-500" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Alerts Column */}
                    <div className="space-y-6">
                        {/* Critical Alerts */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <AlertTriangle size={20} className="text-[#EF4444]" />
                                Critical Alerts
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                                    <div className="p-2 bg-white rounded-lg text-[#EF4444] shadow-sm">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-800">Missing Submissions</h3>
                                        <p className="text-xs text-slate-600 mt-1">{missing} teachers haven't submitted today's attendance.</p>
                                        <button className="text-xs font-bold text-[#EF4444] mt-2 hover:underline">Remind All</button>
                                    </div>
                                </div>
                                <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-3">
                                    <div className="p-2 bg-white rounded-lg text-amber-500 shadow-sm">
                                        <AlertTriangle size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-800">Irregular Attendance</h3>
                                        <p className="text-xs text-slate-600 mt-1">{irregular} students marked as irregular this week.</p>
                                        <button className="text-xs font-bold text-amber-600 mt-2 hover:underline">View List</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Missing Submissions List */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <Clock size={20} className="text-slate-400" />
                                Pending Actions
                            </h2>
                            <div className="space-y-3">
                                {missingSubmissions.map((sub, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-100 text-[#EF4444] flex items-center justify-center font-bold text-xs">!</div>
                                            <div>
                                                <div className="text-sm font-medium text-slate-800">{sub.teacher}</div>
                                                <div className="text-xs text-slate-500">Class {sub.class}-{sub.section}</div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-[#EF4444] bg-white px-2 py-1 rounded border border-red-100">Pending</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolAttendanceView;
