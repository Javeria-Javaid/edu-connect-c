import React, { useState } from 'react';
import { Plus, Search, MoreVertical, Edit, Trash2, Shield, Lock, X } from 'lucide-react';

const UsersRolesSettings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@school.edu', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Sarah Smith', email: 'sarah@school.edu', role: 'Teacher', status: 'Active' },
        { id: 3, name: 'Mike Johnson', email: 'mike@school.edu', role: 'Staff', status: 'Inactive' },
    ]);

    const handleAddUser = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        // Logic to add user would go here
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Users & Roles</h2>
                    <p className="text-sm text-slate-500 mt-1">Manage staff access and permissions.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#2A6EF2] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm"
                >
                    <Plus size={18} />
                    Add User
                </button>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A6EF2] focus:border-transparent"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-slate-500 font-medium border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2A6EF2] flex items-center justify-center font-bold text-xs">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 text-slate-600 text-xs font-medium border border-gray-200">
                                            <Shield size={12} />
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${user.status === 'Active'
                                                ? 'bg-green-50 text-[#3AC47D]'
                                                : 'bg-red-50 text-red-500'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-slate-400 hover:text-[#2A6EF2] hover:bg-blue-50 rounded transition-colors" title="Edit Role">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors" title="Reset Password">
                                                <Lock size={16} />
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors" title="Deactivate">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add User Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-slate-800">Add New User</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleAddUser} className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A6EF2]" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A6EF2]" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Role</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2A6EF2]">
                                    <option>Teacher</option>
                                    <option>Admin</option>
                                    <option>Staff</option>
                                </select>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[#2A6EF2] text-white rounded-lg text-sm font-medium hover:bg-blue-600"
                                >
                                    Create User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersRolesSettings;
