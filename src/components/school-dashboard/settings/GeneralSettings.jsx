import React, { useState } from 'react';
import { Save, Upload, Camera } from 'lucide-react';

const GeneralSettings = () => {
    const [formData, setFormData] = useState({
        schoolName: 'Springfield High School',
        address: '742 Evergreen Terrace, Springfield',
        contactEmail: 'admin@springfieldhigh.edu',
        contactPhone: '(555) 012-3456',
        academicYear: '2025-2026',
        onlineAdmissions: true,
        parentNotifications: true,
        teacherJobPostings: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="space-y-6 relative pb-20">
            {/* Header */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-800">General Settings</h2>
                <p className="text-sm text-slate-500 mt-1">Manage your school's basic profile and global configurations.</p>
            </div>

            {/* School Profile Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-slate-800 mb-6">School Profile</h3>

                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    {/* Logo Upload */}
                    <div className="flex-shrink-0">
                        <label className="block text-sm font-medium text-slate-700 mb-2">School Logo</label>
                        <div className="relative group cursor-pointer w-32 h-32 bg-gray-100 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden hover:border-[#2A6EF2] transition-colors">
                            <div className="text-center">
                                <Camera size={24} className="mx-auto text-gray-400 mb-1 group-hover:text-[#2A6EF2]" />
                                <span className="text-xs text-gray-500">Upload</span>
                            </div>
                            {/* Hidden Input */}
                            <input type="file" className="hidden" accept="image/*" />
                        </div>
                    </div>

                    {/* Fields */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">School Name</label>
                            <input
                                type="text"
                                name="schoolName"
                                value={formData.schoolName}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A6EF2] focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows={2}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A6EF2] focus:border-transparent transition-all resize-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Contact Email</label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={formData.contactEmail}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A6EF2] focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Contact Phone</label>
                            <input
                                type="text"
                                name="contactPhone"
                                value={formData.contactPhone}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A6EF2] focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Academic Year</label>
                            <select
                                name="academicYear"
                                value={formData.academicYear}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2A6EF2] focus:border-transparent transition-all"
                            >
                                <option>2024-2025</option>
                                <option>2025-2026</option>
                                <option>2026-2027</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Toggles */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-slate-800 mb-6">Feature Configuration</h3>
                <div className="space-y-6">
                    {[
                        { key: 'onlineAdmissions', label: 'Online Admissions', desc: 'Allow parents to submit admission forms online.' },
                        { key: 'parentNotifications', label: 'Parent Notifications', desc: 'Send automated alerts to parents via Email/SMS.' },
                        { key: 'teacherJobPostings', label: 'Teacher Job Postings', desc: 'Display career opportunities on the public site.' },
                    ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-800">{item.label}</p>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name={item.key}
                                    checked={formData[item.key]}
                                    onChange={handleChange}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3AC47D]"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Save Button */}
            <div className="fixed bottom-8 right-8 md:right-12 z-10">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#2A6EF2] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all transform hover:-translate-y-1 font-semibold">
                    <Save size={20} />
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default GeneralSettings;
