import React from 'react';
import {
    BookOpen,
    ClipboardCheck,
    Clock,
    AlertCircle,
    Megaphone,
    Calendar,
    Plus
} from 'lucide-react';

const TeacherDashboardOverview = () => {
    // Mock Data
    const todaysClasses = [
        { id: 1, subject: 'Mathematics', class: 'Class 10-A', time: '09:00 AM - 10:00 AM', room: 'Room 101' },
        { id: 2, subject: 'Physics', class: 'Class 9-B', time: '10:15 AM - 11:15 AM', room: 'Lab 2' },
        { id: 3, subject: 'Mathematics', class: 'Class 10-B', time: '11:30 AM - 12:30 PM', room: 'Room 102' },
    ];

    const pendingTasks = [
        { id: 1, title: 'Grade Math Quiz', due: 'Today', type: 'grading' },
        { id: 2, title: 'Upload Physics Notes', due: 'Tomorrow', type: 'upload' },
        { id: 3, title: 'Mark Attendance (10-B)', due: 'Today', type: 'attendance' },
    ];

    const announcements = [
        { id: 1, title: 'Staff Meeting', date: 'Dec 5, 2025', content: 'Monthly staff meeting at 2:00 PM in the conference room.' },
        { id: 2, title: 'Winter Break', date: 'Dec 20, 2025', content: 'School will remain closed for winter break from Dec 24.' },
    ];

    return (
        <div className="p-6 space-y-6">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Welcome back, Teacher!</h1>
                <p className="text-gray-600">Here's what's happening today.</p>
            </header>

            {/* Quick Stats / Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <ClipboardCheck size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Quick Action</p>
                        <p className="font-semibold text-gray-800">Take Attendance</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                        <Plus size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Quick Action</p>
                        <p className="font-semibold text-gray-800">Upload Homework</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                        <Plus size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Quick Action</p>
                        <p className="font-semibold text-gray-800">Add Grades</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Next Class</p>
                        <p className="font-semibold text-gray-800">11:30 AM (10-B)</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Today's Classes */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                                <BookOpen size={20} className="text-blue-500" />
                                Today's Classes
                            </h2>
                            <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="p-5">
                            <div className="space-y-4">
                                {todaysClasses.map((cls) => (
                                    <div key={cls.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-sm">
                                                {cls.class.split(' ')[1]}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{cls.subject}</h3>
                                                <p className="text-sm text-gray-500">{cls.class} • {cls.room}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                {cls.time}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pending Tasks */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-5 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                                <AlertCircle size={20} className="text-orange-500" />
                                Pending Tasks
                            </h2>
                        </div>
                        <div className="p-5">
                            <div className="space-y-3">
                                {pendingTasks.map((task) => (
                                    <div key={task.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${task.type === 'grading' ? 'bg-red-500' : task.type === 'upload' ? 'bg-blue-500' : 'bg-green-500'}`} />
                                            <span className="text-gray-700">{task.title}</span>
                                        </div>
                                        <span className="text-sm text-gray-400">Due: {task.due}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Announcements & Events */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-5 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                                <Megaphone size={20} className="text-purple-500" />
                                Announcements
                            </h2>
                        </div>
                        <div className="p-5">
                            <div className="space-y-4">
                                {announcements.map((ann) => (
                                    <div key={ann.id} className="pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                        <h3 className="font-medium text-gray-800 mb-1">{ann.title}</h3>
                                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{ann.content}</p>
                                        <span className="text-xs text-gray-400">{ann.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg text-white p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="font-semibold text-lg">Upcoming Event</h3>
                                <p className="text-blue-100 text-sm">Science Fair 2025</p>
                            </div>
                            <Calendar className="text-blue-200" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-100 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                            <Clock size={16} />
                            <span>Dec 15 • 09:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboardOverview;
