export const settingsMockData = {
    schoolProfile: {
        name: 'Springfield High School',
        address: '742 Evergreen Terrace, Springfield',
        phone: '(555) 012-3456',
        email: 'admin@springfieldhigh.edu',
        website: 'www.springfieldhigh.edu',
        academicYear: '2025-2026',
        principalName: 'Seymour Skinner',
        establishedYear: '1952'
    },
    roles: [
        { id: 1, name: 'Admin', users: 3, permissions: ['all'] },
        { id: 2, name: 'Teacher', users: 45, permissions: ['view_students', 'edit_grades', 'view_schedule'] },
        { id: 3, name: 'Accountant', users: 2, permissions: ['view_finance', 'edit_fees'] },
        { id: 4, name: 'Parent', users: 850, permissions: ['view_children', 'pay_fees'] },
    ],
    users: [
        { id: 1, name: 'John Doe', role: 'Admin', email: 'john@school.edu', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'Teacher', email: 'jane@school.edu', status: 'Active' },
        { id: 3, name: 'Bob Wilson', role: 'Accountant', email: 'bob@school.edu', status: 'Inactive' },
    ],
    academic: {
        gradingSystem: 'GPA 4.0',
        terms: ['Fall', 'Spring', 'Summer'],
        attendanceType: 'Daily',
    },
    finance: {
        currency: 'USD',
        taxRate: 5,
        paymentGateways: ['Stripe', 'PayPal'],
    }
};
