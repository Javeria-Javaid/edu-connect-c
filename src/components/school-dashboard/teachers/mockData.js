
// Build Fix: Ensure file is picked up by CI
export const mockTeachers = [
    {
        id: 1,
        name: 'John Doe',
        designation: 'Senior Teacher',
        subjects: ['Mathematics', 'Physics'],
        classCount: 5,
        weeklyLoad: 24,
        attendance: 98,
        employmentType: 'Full-time',
        status: 'Active',
        email: 'john.doe@school.edu',
        phone: '555-0101',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    {
        id: 2,
        name: 'Jane Smith',
        designation: 'Department Head',
        subjects: ['English', 'Literature'],
        classCount: 4,
        weeklyLoad: 20,
        attendance: 95,
        employmentType: 'Full-time',
        status: 'Active',
        email: 'jane.smith@school.edu',
        phone: '555-0102',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    },
    {
        id: 3,
        name: 'Robert Johnson',
        designation: 'Teacher',
        subjects: ['Chemistry', 'Biology'],
        classCount: 6,
        weeklyLoad: 28,
        attendance: 90,
        employmentType: 'Contract',
        status: 'Active',
        email: 'robert.johnson@school.edu',
        phone: '555-0103',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert'
    },
    {
        id: 4,
        name: 'Sarah Williams',
        designation: 'Guest Lecturer',
        subjects: ['History'],
        classCount: 2,
        weeklyLoad: 8,
        attendance: 100,
        employmentType: 'Part-time',
        status: 'Active',
        email: 'sarah.williams@school.edu',
        phone: '555-0104',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
        id: 5,
        name: 'Michael Brown',
        designation: 'Teacher',
        subjects: ['Computer Science'],
        classCount: 5,
        weeklyLoad: 25,
        attendance: 85,
        employmentType: 'Full-time',
        status: 'On Leave',
        email: 'michael.brown@school.edu',
        phone: '555-0105',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    }
];

export const teacherFilters = [
    {
        key: 'subjects',
        label: 'Subjects',
        type: 'multiselect',
        options: [
            { label: 'Mathematics', value: 'Mathematics' },
            { label: 'Physics', value: 'Physics' },
            { label: 'English', value: 'English' },
            { label: 'History', value: 'History' },
            { label: 'Computer Science', value: 'Computer Science' }
        ]
    },
    {
        key: 'employmentType',
        label: 'Employment Type',
        type: 'multiselect',
        options: [
            { label: 'Full-time', value: 'Full-time' },
            { label: 'Part-time', value: 'Part-time' },
            { label: 'Contract', value: 'Contract' }
        ]
    },
    {
        key: 'status',
        label: 'Status',
        type: 'select',
        options: [
            { label: 'Active', value: 'Active' },
            { label: 'On Leave', value: 'On Leave' },
            { label: 'Inactive', value: 'Inactive' }
        ]
    },
    {
        key: 'attendance',
        label: 'Min. Attendance',
        type: 'range',
        min: 0,
        max: 100
    }
];
