import React from 'react';
import { Database, RotateCcw, Download, Cloud } from 'lucide-react';

const BackupRestoreSettings = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-800">Backup & Restore</h2>
                <p className="text-sm text-slate-500 mt-1">Manage system data backups and recovery points.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Create Backup */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Cloud size={20} className="text-[#2A6EF2]" />
                        Create Backup
                    </h3>
                    <p className="text-sm text-slate-500 mb-6">
                        Manually trigger a full system backup. This includes all student records, financial data, and configuration settings.
                    </p>
                    <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl mb-6">
                        <div>
                            <p className="text-sm font-bold text-blue-900">Last Backup</p>
                            <p className="text-xs text-blue-700">Today, 09:41 AM</p>
                        </div>
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#2A6EF2]">
                            <CheckCircle size={20} />
                        </div>
                    </div>
                    <button className="w-full py-3 bg-[#2A6EF2] text-white rounded-lg font-medium hover:bg-blue-600 shadow-sm transition-all">
                        Backup Now
                    </button>
                </div>

                {/* Restore Points */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <RotateCcw size={20} className="text-[#2A6EF2]" />
                        Restore Points
                    </h3>
                    <div className="space-y-3">
                        {[
                            { date: 'Nov 20, 2024', size: '450 MB', type: 'Auto' },
                            { date: 'Nov 13, 2024', size: '448 MB', type: 'Auto' },
                            { date: 'Nov 01, 2024', size: '442 MB', type: 'Manual' },
                        ].map((backup, i) => (
                            <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gray-100 rounded-lg text-slate-500">
                                        <Database size={16} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">{backup.date}</p>
                                        <p className="text-xs text-slate-500">{backup.size} • {backup.type}</p>
                                    </div>
                                </div>
                                <button className="p-2 text-slate-400 hover:text-[#2A6EF2] hover:bg-blue-50 rounded transition-colors" title="Download">
                                    <Download size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for the check icon
const CheckCircle = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export default BackupRestoreSettings;
