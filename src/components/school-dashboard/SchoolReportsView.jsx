import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    FileBarChart,
    DollarSign,
    Bus,
    Settings,
    Calendar
} from 'lucide-react';
import ReportsOverview from './reports/ReportsOverview';
import StudentReports from './reports/StudentReports';
import TeacherReports from './reports/TeacherReports';

const SchoolReportsView = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'students', label: 'Students', icon: Users },
        { id: 'teachers', label: 'Teachers', icon: GraduationCap },
        { id: 'attendance', label: 'Attendance', icon: Calendar },
        { id: 'academic', label: 'Academic & Exams', icon: FileBarChart },
        { id: 'finance', label: 'Finance', icon: DollarSign },
        { id: 'transport', label: 'Transport', icon: Bus },
        { id: 'custom', label: 'Custom Reports', icon: Settings },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <ReportsOverview />;
            case 'students':
                return <StudentReports />;
            case 'teachers':
                return <TeacherReports />;
            case 'attendance':
                return <div className="p-8 text-center text-gray-500">Attendance Reports Module Coming Soon</div>;
            case 'academic':
                return <div className="p-8 text-center text-gray-500">Academic Reports Module Coming Soon</div>;
            case 'finance':
                return <div className="p-8 text-center text-gray-500">Finance Reports Module Coming Soon</div>;
            case 'transport':
                return <div className="p-8 text-center text-gray-500">Transport Reports Module Coming Soon</div>;
            case 'custom':
                return <div className="p-8 text-center text-gray-500">Custom Reports Module Coming Soon</div>;
            default:
                return <ReportsOverview />;
        }
    };

    return (
        <div className="flex h-[calc(100vh-4rem)] bg-gray-50">
            {/* Internal Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800">Reports</h2>
                    <p className="text-sm text-gray-500 mt-1">Analytics & Insights</p>
                </div>
                <nav className="px-3 space-y-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 mr-3 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                                    }`} />
                                {tab.label}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
                <header className="bg-white border-b border-gray-200 px-8 py-5 sticky top-0 z-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {tabs.find(t => t.id === activeTab)?.label}
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                View and manage {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} reports
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                Export View
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
                                Generate New Report
                            </button>
                        </div>
                    </div>
                </header>

                <main className="p-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default SchoolReportsView;
