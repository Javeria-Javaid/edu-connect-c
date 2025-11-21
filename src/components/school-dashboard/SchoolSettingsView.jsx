import React, { useState } from 'react';
import {
    Settings,
    Users,
    Bell,
    Link,
    Shield,
    CreditCard,
    Database,
    Menu
} from 'lucide-react';
import GeneralSettings from './settings/GeneralSettings';
import UsersRolesSettings from './settings/UsersRolesSettings';
import NotificationSettings from './settings/NotificationSettings';
import IntegrationSettings from './settings/IntegrationSettings';
import SecuritySettings from './settings/SecuritySettings';
import PaymentBillingSettings from './settings/PaymentBillingSettings';
import BackupRestoreSettings from './settings/BackupRestoreSettings';

const SchoolSettingsView = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: 'general', label: 'General', icon: Settings },
        { id: 'users', label: 'Users & Roles', icon: Users },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'integrations', label: 'Integrations', icon: Link },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'billing', label: 'Payment & Billing', icon: CreditCard },
        { id: 'backup', label: 'Backup & Restore', icon: Database },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'general':
                return <GeneralSettings />;
            case 'users':
                return <UsersRolesSettings />;
            case 'notifications':
                return <NotificationSettings />;
            case 'integrations':
                return <IntegrationSettings />;
            case 'security':
                return <SecuritySettings />;
            case 'billing':
                return <PaymentBillingSettings />;
            case 'backup':
                return <BackupRestoreSettings />;
            default:
                return <GeneralSettings />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Sidebar Navigation */}
                    <div className={`
                        w-full md:w-64 flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8
                        ${isMobileMenuOpen ? 'block' : 'hidden md:block'}
                    `}>
                        <div className="p-5 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-slate-800">Settings</h2>
                        </div>
                        <nav className="p-3 space-y-1">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeTab === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`
                                            w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                                            ${isActive
                                                ? 'bg-[#2A6EF2] text-white shadow-md shadow-blue-200'
                                                : 'text-slate-500 hover:bg-gray-50 hover:text-slate-800'
                                            }
                                        `}
                                    >
                                        <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden w-full mb-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-slate-700 font-medium shadow-sm"
                        >
                            <Menu size={20} />
                            {isMobileMenuOpen ? 'Close Menu' : 'Settings Menu'}
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full">
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolSettingsView;
