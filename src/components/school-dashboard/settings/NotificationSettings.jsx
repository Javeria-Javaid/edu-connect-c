import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, Calendar, CreditCard, UserPlus } from 'lucide-react';

const NotificationSettings = () => {
    const [toggles, setToggles] = useState({
        admissionUpdates: true,
        feeReminders: true,
        examSchedules: true,
        emailAlerts: true,
        smsAlerts: false
    });

    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-800">Notification Preferences</h2>
                <p className="text-sm text-slate-500 mt-1">Control what alerts you and your users receive.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Alert Types */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Bell size={20} className="text-[#2A6EF2]" />
                        Alert Types
                    </h3>
                    <div className="space-y-6">
                        {[
                            { key: 'admissionUpdates', label: 'Admission Updates', icon: UserPlus, desc: 'New applications and status changes' },
                            { key: 'feeReminders', label: 'Fee Reminders', icon: CreditCard, desc: 'Upcoming due dates and overdue alerts' },
                            { key: 'examSchedules', label: 'Exam Schedules', icon: Calendar, desc: 'Timetable publications and changes' },
                        ].map((item) => (
                            <div key={item.key} className="flex items-start justify-between">
                                <div className="flex gap-3">
                                    <div className="p-2 bg-blue-50 text-[#2A6EF2] rounded-lg h-fit">
                                        <item.icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">{item.label}</p>
                                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer mt-1">
                                    <input
                                        type="checkbox"
                                        checked={toggles[item.key]}
                                        onChange={() => handleToggle(item.key)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#3AC47D]"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery Channels */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Mail size={20} className="text-[#2A6EF2]" />
                        Delivery Channels
                    </h3>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <Mail size={20} className="text-slate-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Email Notifications</p>
                                    <p className="text-xs text-slate-500">Send to registered email addresses</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={toggles.emailAlerts}
                                    onChange={() => handleToggle('emailAlerts')}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#3AC47D]"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <MessageSquare size={20} className="text-slate-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">SMS Alerts</p>
                                    <p className="text-xs text-slate-500">Send to registered mobile numbers</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={toggles.smsAlerts}
                                    onChange={() => handleToggle('smsAlerts')}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#3AC47D]"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationSettings;
