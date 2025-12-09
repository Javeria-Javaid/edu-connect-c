import React from 'react';
import {
    ShoppingCart,
    DollarSign,
    Package,
    Star,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    Clock
} from 'lucide-react';
import './VendorDashboardOverview.css';

const VendorDashboardOverview = () => {
    const kpiData = [
        { title: 'Active Services', value: '12', change: 'Currently Active', icon: ShoppingCart, color: '#3b82f6' },
        { title: 'Pending Orders', value: '5', change: 'Awaiting Confirmation', icon: Clock, color: '#f59e0b' },
        { title: 'Monthly Earnings', value: '$12,450', change: '+15% from last month', icon: DollarSign, color: '#10b981' },
        { title: 'Average Rating', value: '4.8', change: 'Based on 45 reviews', icon: Star, color: '#8b5cf6' },
    ];

    const recentOrders = [
        { id: 1, school: 'Greenwood High School', service: 'Stationery Supplies', amount: '$1,200', status: 'pending', date: 'Dec 5, 2025' },
        { id: 2, school: 'Riverside Academy', service: 'Catering Services', amount: '$850', status: 'confirmed', date: 'Dec 4, 2025' },
        { id: 3, school: 'Sunshine Elementary', service: 'Cleaning Supplies', amount: '$450', status: 'completed', date: 'Dec 3, 2025' },
    ];

    return (
        <div className="vendor-dashboard-overview">
            <div className="overview-header">
                <div>
                    <h1 className="page-title">Vendor Dashboard</h1>
                    <p className="page-subtitle">Welcome back! Here's your business overview.</p>
                </div>
                <div className="date-display">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            {/* KPI Cards */}
            <div className="kpi-grid">
                {kpiData.map((kpi, index) => (
                    <div key={index} className="kpi-card">
                        <div className="kpi-icon-wrapper" style={{ backgroundColor: `${kpi.color}20`, color: kpi.color }}>
                            <kpi.icon size={24} />
                        </div>
                        <div className="kpi-content">
                            <h3 className="kpi-title">{kpi.title}</h3>
                            <div className="kpi-value">{kpi.value}</div>
                            <div className="kpi-change">{kpi.change}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
                {/* Recent Orders */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Recent Orders</h2>
                        <ShoppingCart size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="orders-list">
                            {recentOrders.map((order) => (
                                <div key={order.id} className="order-item">
                                    <div className="order-info">
                                        <h4>{order.school}</h4>
                                        <p>{order.service}</p>
                                        <span className="order-date">{order.date}</span>
                                    </div>
                                    <div className="order-details">
                                        <span className="order-amount">{order.amount}</span>
                                        {order.status === 'pending' && (
                                            <span className="badge badge-warning">Pending</span>
                                        )}
                                        {order.status === 'confirmed' && (
                                            <span className="badge badge-info">Confirmed</span>
                                        )}
                                        {order.status === 'completed' && (
                                            <span className="badge badge-success">Completed</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Revenue Chart */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Revenue Analytics</h2>
                        <TrendingUp size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="chart-placeholder">
                            <p>Revenue chart will be displayed here</p>
                        </div>
                    </div>
                </div>

                {/* Service Performance */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Service Performance</h2>
                        <Star size={20} className="text-gray-400" />
                    </div>
                    <div className="card-body">
                        <div className="performance-list">
                            <div className="performance-item">
                                <span>Stationery Supplies</span>
                                <span className="performance-rating">4.9 ⭐</span>
                            </div>
                            <div className="performance-item">
                                <span>Catering Services</span>
                                <span className="performance-rating">4.7 ⭐</span>
                            </div>
                            <div className="performance-item">
                                <span>Cleaning Supplies</span>
                                <span className="performance-rating">4.8 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pending Actions */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2 className="card-title">Pending Actions</h2>
                        <AlertCircle size={20} className="text-orange-500" />
                    </div>
                    <div className="card-body">
                        <div className="actions-list">
                            <div className="action-item">
                                <div className="action-icon bg-yellow-100 text-yellow-600">
                                    <Clock size={16} />
                                </div>
                                <div className="action-details">
                                    <p>5 orders awaiting confirmation</p>
                                    <span className="action-time">Action Required</span>
                                </div>
                            </div>
                            <div className="action-item">
                                <div className="action-icon bg-blue-100 text-blue-600">
                                    <Package size={16} />
                                </div>
                                <div className="action-details">
                                    <p>3 deliveries scheduled for tomorrow</p>
                                    <span className="action-time">Upcoming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorDashboardOverview;

