import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    FileBarChart,
    DollarSign,
    Bus,
    Settings,
    Calendar,
    ArrowLeft
} from 'lucide-react';
import ReportsOverview from './reports/ReportsOverview';
import StudentReports from './reports/StudentReports';
import TeacherReports from './reports/TeacherReports';
import AttendanceReports from './reports/AttendanceReports';
import AcademicReports from './reports/AcademicReports';
import FinanceReports from './reports/FinanceReports';
import TransportReports from './reports/TransportReports';
import CustomReports from './reports/CustomReports';

const SchoolReportsView = () => {
    const [activeView, setActiveView] = useState('overview');

    const reportTypes = [
        { id: 'students', label: 'Student Reports', icon: Users, description: 'Performance, behavior, and enrollment data' },
        { id: 'teachers', label: 'Teacher Reports', icon: GraduationCap, description: 'Workload, evaluations, and attendance' },
        { id: 'attendance', label: 'Attendance Logs', icon: Calendar, description: 'Daily logs and monthly summaries' },
        { id: 'academic', label: 'Academic Results', icon: FileBarChart, description: 'Exam scores and grade distributions' },
        { id: 'finance', label: 'Financial Reports', icon: DollarSign, description: 'Fee collection and expense tracking' },
        { id: 'transport', label: 'Transport Data', icon: Bus, description: 'Route status and vehicle logs' },
        { id: 'custom', label: 'Custom Builder', icon: Settings, description: 'Create and export custom reports' },
    ];

    const renderContent = () => {
        switch (activeView) {
            case 'overview':
                return (
                    <ReportsOverview
                        onNavigate={setActiveView}
                        reportTypes={reportTypes}
                    />
                );
            case 'students':
                return <StudentReports />;
            case 'teachers':
                return <TeacherReports />;
            case 'attendance':
                return <AttendanceReports />;
            case 'academic':
                return <AcademicReports />;
            case 'finance':
                return <FinanceReports />;
            case 'transport':
                return <TransportReports />;
            case 'custom':
                return <CustomReports />;
            default:
                return <ReportsOverview onNavigate={setActiveView} reportTypes={reportTypes} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div>
                        <div className="flex items-center gap-3">
                            {activeView !== 'overview' && (
                                <button
                                    onClick={() => setActiveView('overview')}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                                    title="Back to Overview"
                                >
                                    <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-[#2A6EF2]" />
                                </button>
                            )}
                            <h1 className="text-2xl font-bold text-slate-800">
                                {activeView === 'overview' ? 'Reports Dashboard' : reportTypes.find(t => t.id === activeView)?.label}
                            </h1>
                        </div>
                        <p className="text-slate-500 mt-1 ml-1 text-sm">
                            {activeView === 'overview'
                                ? 'Centralized analytics and reporting hub for your school'
                                : `Detailed ${activeView} analytics and export options`}
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-white border border-[#2A6EF2] text-[#2A6EF2] rounded-lg text-sm font-semibold hover:bg-blue-50 transition-all">
                            Export View
                        </button>
                        <button className="px-4 py-2 bg-[#2A6EF2] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-sm">
                            Generate New Report
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default SchoolReportsView;
