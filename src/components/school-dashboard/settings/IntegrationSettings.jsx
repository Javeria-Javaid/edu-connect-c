import React, { useState } from 'react';
import { Link, Info, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

const IntegrationSettings = () => {
    const [integrations, setIntegrations] = useState([
        {
            id: 1,
            name: 'Stripe Payments',
            type: 'Payment Gateway',
            status: 'connected',
            desc: 'Process fee payments securely.',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png'
        },
        {
            id: 2,
            name: 'Google Classroom',
            type: 'LMS',
            status: 'disconnected',
            desc: 'Sync classes and assignments.',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png'
        },
        {
            id: 3,
            name: 'Transport API',
            type: 'Logistics',
            status: 'connected',
            desc: 'Real-time bus tracking service.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2083/2083265.png' // Placeholder
        },
    ]);

    const toggleConnection = (id) => {
        setIntegrations(prev => prev.map(item =>
            item.id === id
                ? { ...item, status: item.status === 'connected' ? 'disconnected' : 'connected' }
                : item
        ));
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-slate-800">Integrations</h2>
                <p className="text-sm text-slate-500 mt-1">Connect external services to your dashboard.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2 border border-gray-100">
                                {item.icon.includes('http') ? (
                                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                                ) : (
                                    <Link size={24} className="text-slate-400" />
                                )}
                            </div>
                            <div className="group relative">
                                <Info size={18} className="text-slate-400 cursor-help hover:text-[#2A6EF2]" />
                                <div className="absolute right-0 top-6 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                                    {item.desc}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="font-bold text-slate-800">{item.name}</h3>
                            <p className="text-xs text-slate-500 mb-4">{item.type}</p>

                            <div className="flex items-center gap-2 mb-6">
                                {item.status === 'connected' ? (
                                    <span className="flex items-center gap-1 text-xs font-medium text-[#3AC47D]">
                                        <CheckCircle size={12} /> Connected
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                                        <XCircle size={12} /> Disconnected
                                    </span>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={() => toggleConnection(item.id)}
                            className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${item.status === 'connected'
                                    ? 'border border-red-200 text-red-500 hover:bg-red-50'
                                    : 'bg-[#2A6EF2] text-white hover:bg-blue-600'
                                }`}
                        >
                            {item.status === 'connected' ? 'Disconnect' : 'Connect'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntegrationSettings;
