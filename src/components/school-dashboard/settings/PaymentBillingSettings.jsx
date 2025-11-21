import React from 'react';
import { CreditCard, DollarSign, FileText, Plus } from 'lucide-react';

const PaymentBillingSettings = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-800">Payment & Billing</h2>
                <p className="text-sm text-slate-500 mt-1">Manage fee structures and billing information.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Fee Categories */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <DollarSign size={20} className="text-[#2A6EF2]" />
                            Fee Structures
                        </h3>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-[#2A6EF2] text-white rounded-lg text-sm font-medium hover:bg-blue-600">
                            <Plus size={16} /> Add Category
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { name: 'Tuition Fee', amount: '$500', cycle: 'Monthly' },
                            { name: 'Transport Fee', amount: '$150', cycle: 'Monthly' },
                            { name: 'Exam Fee', amount: '$100', cycle: 'Per Term' },
                        ].map((fee, i) => (
                            <div key={i} className="p-4 border border-gray-200 rounded-xl hover:border-[#2A6EF2] transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium text-slate-800">{fee.name}</p>
                                        <p className="text-xs text-slate-500">{fee.cycle}</p>
                                    </div>
                                    <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-blue-50 text-slate-400 group-hover:text-[#2A6EF2] transition-colors">
                                        <FileText size={16} />
                                    </div>
                                </div>
                                <p className="text-xl font-bold text-slate-800 mt-3">{fee.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <CreditCard size={20} className="text-[#2A6EF2]" />
                        Payment Methods
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">•••• 4242</p>
                                    <p className="text-xs text-slate-500">Expires 12/25</p>
                                </div>
                            </div>
                            <span className="text-xs font-medium text-[#3AC47D] bg-green-50 px-2 py-1 rounded">Default</span>
                        </div>
                        <button className="w-full py-2 border border-dashed border-gray-300 text-slate-500 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-[#2A6EF2] hover:border-[#2A6EF2] transition-all">
                            + Add New Method
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentBillingSettings;
