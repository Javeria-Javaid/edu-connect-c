
// Transport Data - Build Verification Fix
export const transportStats = {
    totalVehicles: 12,
    activeRoutes: 8,
    studentsUsingTransport: 450,
    pendingRequests: 15,
    driversAvailable: 14
};

export const vehicles = [
    { number: 'BUS-01', type: 'Bus', capacity: 50, driver: 'John Doe', route: 'Route A', status: 'Active' },
    { number: 'BUS-02', type: 'Bus', capacity: 50, driver: 'Jane Smith', route: 'Route B', status: 'Active' },
    { number: 'VAN-01', type: 'Van', capacity: 15, driver: 'Mike Johnson', route: 'Route C', status: 'Maintenance' },
    { number: 'BUS-03', type: 'Bus', capacity: 50, driver: 'Sarah Wilson', route: 'Route D', status: 'Active' }
];

export const routes = [
    { id: 'RT-01', name: 'North City Route', driver: 'John Doe', vehicle: 'BUS-01', nextStop: 'Main St', status: 'On Time' },
    { id: 'RT-02', name: 'South City Route', driver: 'Jane Smith', vehicle: 'BUS-02', nextStop: 'Park Ave', status: 'Delayed' },
    { id: 'RT-03', name: 'East City Route', driver: 'Sarah Wilson', vehicle: 'BUS-03', nextStop: 'Oak Ln', status: 'On Time' }
];

export const transportAlerts = [
    { type: 'Service', message: 'BUS-01 due for service in 2 days', severity: 'warning' },
    { type: 'Delay', message: 'Route B delayed by 15 mins due to traffic', severity: 'alert' },
    { type: 'License', message: 'Driver Mike Johnson license expiring soon', severity: 'info' }
];

// Finance Data
export const financeStats = {
    collectedToday: 150000,
    collectedMonth: 4500000,
    pendingDues: 1200000,
    expensesMonth: 850000
};

export const recentTransactions = [
    { student: 'Alice Johnson', class: 'Grade 10', type: 'Tuition Fee', method: 'Bank Transfer', date: 'Today, 10:30 AM', amount: 15000, status: 'Paid' },
    { student: 'Bob Smith', class: 'Grade 9', type: 'Library Fee', method: 'Cash', date: 'Today, 09:15 AM', amount: 2000, status: 'Paid' },
    { student: 'Charlie Brown', class: 'Grade 8', type: 'Tuition Fee', method: 'Online', date: 'Yesterday', amount: 15000, status: 'Pending' },
    { student: 'Diana Prince', class: 'Grade 11', type: 'Transport Fee', method: 'Bank Transfer', date: 'Yesterday', amount: 5000, status: 'Paid' }
];

export const expenseCategories = [
    { category: 'Staff Salaries', percentage: 65, amount: 550000 },
    { category: 'Maintenance', percentage: 15, amount: 127500 },
    { category: 'Utilities', percentage: 10, amount: 85000 },
    { category: 'Others', percentage: 10, amount: 85000 }
];
