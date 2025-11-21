import React, { useState } from 'react';
import { FileText, Download, Plus, Save, Clock, Settings } from 'lucide-react';

const CustomReports = () => {
    const [reportName, setReportName] = useState('');
    const [selectedModule, setSelectedModule] = useState('students');
    const [selectedFields, setSelectedFields] = useState([]);

    const modules = [
        { id: 'students', label: 'Students' },
        { id: 'teachers', label: 'Teachers' },
        { id: 'attendance', label: 'Attendance' },
        { id: 'finance', label: 'Finance' },
    ];

    const fields = {
        students: ['Name', 'Class', 'Roll No', 'Attendance %', 'Grade', 'Parent Name', 'Contact'],
        teachers: ['Name', 'Subject', 'Department', 'Join Date', 'Salary', 'Contact'],
        attendance: ['Date', 'Class', 'Total Present', 'Total Absent', 'Late Arrivals'],
        finance: ['Transaction ID', 'Student Name', 'Fee Type', 'Amount', 'Date', 'Status'],
    };

    const toggleField = (field) => {
        if (selectedFields.includes(field)) {
            setSelectedFields(selectedFields.filter(f => f !== field));
        } else {
            setSelectedFields([...selectedFields, field]);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Custom Report Builder</h2>
                <div className="flex gap-2">
                    <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        <Clock className="w-4 h-4 mr-2" />
                        Scheduled Reports
                    </button>
                    <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        <Save className="w-4 h-4 mr-2" />
                        Saved Templates
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Configuration Panel */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-md font-semibold text-gray-700 mb-4 flex items-center">
                            <Settings className="w-4 h-4 mr-2 text-blue-500" />
                            Report Configuration
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Report Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., Monthly Student Attendance Summary"
                                    value={reportName}
                                    onChange={(e) => setReportName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Select Module</label>
                                <div className="flex gap-2">
                                    {modules.map(module => (
                                        <button
                                            key={module.id}
                                            onClick={() => {
                                                setSelectedModule(module.id);
                                                setSelectedFields([]);
                                            }}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedModule === module.id
                                                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                                                }`}
                                        >
                                            {module.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Fields to Include</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {fields[selectedModule].map(field => (
                                        <label
                                            key={field}
                                            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${selectedFields.includes(field)
                                                    ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-200'
                                                    : 'bg-white border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                checked={selectedFields.includes(field)}
                                                onChange={() => toggleField(field)}
                                            />
                                            <span className="ml-2 text-sm text-gray-700">{field}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end gap-3">
                            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
                                Reset
                            </button>
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm">
                                <FileText className="w-4 h-4 mr-2" />
                                Generate Preview
                            </button>
                        </div>
                    </div>
                </div>

                {/* Preview Panel */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full">
                        <h3 className="text-md font-semibold text-gray-700 mb-4">Preview</h3>

                        {selectedFields.length > 0 ? (
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <h4 className="font-medium text-gray-900 mb-1">{reportName || 'Untitled Report'}</h4>
                                    <p className="text-xs text-gray-500">Module: {modules.find(m => m.id === selectedModule)?.label}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {selectedFields.map(field => (
                                            <span key={field} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600">
                                                {field}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center pt-8">
                                    <p className="text-sm text-gray-500 mb-4">Ready to generate report?</p>
                                    <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 shadow-sm">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Excel
                                    </button>
                                    <button className="w-full flex items-center justify-center px-4 py-2 mt-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
                                <FileText className="w-12 h-12 mb-2 opacity-20" />
                                <p className="text-sm">Select fields to see preview</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomReports;
