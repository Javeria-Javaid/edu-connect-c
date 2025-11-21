// Mock data for Transport section
export const transportStats = {
    totalVehicles: 12,
    activeRoutes: 8,
    studentsUsingTransport: 345,
    pendingRequests: 5,
    driversAvailable: 10,
    maintenanceAlerts: 2,
    fuelEfficiency: "8.5 km/l"
};

export const vehicles = [
    { id: "V001", number: "LES-1234", type: "Bus", capacity: 30, driver: "Ahmed Khan", status: "Active", route: "R-01" },
    { id: "V002", number: "LES-5678", type: "Van", capacity: 12, driver: "Bilal Ahmed", status: "Active", route: "R-02" },
    { id: "V003", number: "LES-9012", type: "Bus", capacity: 30, driver: "Muhammad Ali", status: "Maintenance", route: "N/A" },
    { id: "V004", number: "LES-3456", type: "Van", capacity: 12, driver: "Usman Tariq", status: "Active", route: "R-03" }
];

export const routes = [
    { id: "R-01", name: "DHA Phase 1-5", driver: "Ahmed Khan", vehicle: "LES-1234", students: 28, status: "On Time", nextStop: "Phase 3 Market" },
    { id: "R-02", name: "Johar Town", driver: "Bilal Ahmed", vehicle: "LES-5678", students: 12, status: "Delayed", nextStop: "G1 Market" },
    { id: "R-03", name: "Wapda Town", driver: "Usman Tariq", vehicle: "LES-3456", students: 11, status: "On Time", nextStop: "Roundabout" }
];

export const transportAlerts = [
    { type: "maintenance", message: "Bus LES-9012 due for service", severity: "warning" },
    { type: "license", message: "Driver Bilal Ahmed license expiring in 5 days", severity: "alert" },
    { type: "delay", message: "Route R-02 delayed by 15 mins", severity: "info" }
];

// Mock data for Finance section
export const financeStats = {
    collectedToday: 150000,
    collectedMonth: 4500000,
    pendingDues: 850000,
    expensesMonth: 1200000,
    salariesPending: 0,
    transportFeeCollected: 450000
};

export const feeStructure = [
    { class: "Class 9", tuition: 15000, admission: 5000, annual: 2000 },
    { class: "Class 10", tuition: 16000, admission: 5000, annual: 2000 },
    { class: "Class 11", tuition: 18000, admission: 6000, annual: 2500 }
];

export const recentTransactions = [
    { id: "TRX-001", student: "Muhammad Ali", class: "9-A", amount: 15000, type: "Tuition Fee", status: "Paid", date: "2024-11-21", method: "Bank Transfer" },
    { id: "TRX-002", student: "Ayesha Khan", class: "10-B", amount: 16000, type: "Tuition Fee", status: "Paid", date: "2024-11-21", method: "Cash" },
    { id: "TRX-003", student: "Fatima Noor", class: "11-A", amount: 18000, type: "Tuition Fee", status: "Pending", date: "2024-11-20", method: "N/A" },
    { id: "TRX-004", student: "Bilal Ahmed", class: "9-B", amount: 2500, type: "Transport Fee", status: "Paid", date: "2024-11-20", method: "EasyPaisa" }
];

export const expenseCategories = [
    { category: "Salaries", amount: 2500000, percentage: 65 },
    { category: "Maintenance", amount: 450000, percentage: 12 },
    { category: "Utilities", amount: 350000, percentage: 9 },
    { category: "Transport Fuel", amount: 250000, percentage: 7 },
    { category: "Events", amount: 150000, percentage: 4 },
    { category: "Miscellaneous", amount: 100000, percentage: 3 }
];
