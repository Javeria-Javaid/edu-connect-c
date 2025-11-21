import React, { useState } from 'react';
import { Shield, Key, Smartphone, Clock, MapPin } from 'lucide-react';

const SecuritySettings = () => {
    const [twoFactor, setTwoFactor] = useState(false);

    const recentLogins = [
        { id: 1, device: 'Chrome on Windows', ip: '192.168.1.12', time: 'Just now', location: 'New York, USA', status: 'Current' },
        { id: 2, device: 'Safari on iPhone', ip: '172.16.0.5', time: '2 hours ago', location: 'New York, USA', status: 'Active' },
        { id: 3, device: 'Firefox on Mac', ip: '10.0.0.4', time: 'Yesterday', location: 'Boston, USA', status: 'Expired' },
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-800">Security Settings</h2>
                <p className="text-sm text-slate-500 mt-1">Protect your account and manage access sessions.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 2FA & Password */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Shield size={20} className="text-[#2A6EF2]" />
                            Two-Factor Authentication
                        </h3>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-800">Enable 2FA</p>
                                <p className="text-xs text-slate-500">Secure your account with SMS/Authenticator codes.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={twoFactor}
                                    onChange={() => setTwoFactor(!twoFactor)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3AC47D]"></div>
                            </label>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Key size={20} className="text-[#2A6EF2]" />
                            Password Policy
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-slate-700">Minimum Length</span>
                                <span className="text-sm font-bold text-slate-800">8 Characters</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-slate-700">Require Special Chars</span>
                                <span className="text-sm font-bold text-[#3AC47D]">Enabled</span>
                            </div>
                            <button className="w-full py-2 border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>

                {/* Recent Logins */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Clock size={20} className="text-[#2A6EF2]" />
                        Recent Logins
                    </h3>
                    <div className="space-y-4">
                        {recentLogins.map((login) => (
                            <div key={login.id} className="flex items-start justify-between p-3 border-b border-gray-100 last:border-0">
                                <div className="flex gap-3">
                                    <div className="mt-1 text-slate-400">
                                        <Smartphone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">{login.device}</p>
                                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                                            <span className="flex items-center gap-1"><MapPin size={10} /> {login.location}</span>
                                            <span>•</span>
                                            <span>{login.time}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 font-mono mt-1">{login.ip}</p>
                                    </div>
                                </div>
                                {login.status === 'Current' ? (
                                    <span className="text-xs font-bold text-[#3AC47D] bg-green-50 px-2 py-1 rounded">Current</span>
                                ) : (
                                    <button className="text-xs text-red-500 hover:underline">Revoke</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;
