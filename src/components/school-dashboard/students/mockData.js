
// Build Fix: Ensure file is picked up by CI
export const mockStudents = [
    {
        id: 1,
        name: 'Alice Johnson',
        admissionNumber: 'ADM-2024-001',
        parentName: 'Robert Johnson',
        class: 'Grade 10',
        section: 'A',
        rollNumber: '1001',
        gender: 'Female',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
        attendance: 95,
        feeStatus: 'Paid',
        performance: 5
    },
    {
        id: 2,
        name: 'Michael Chen',
        admissionNumber: 'ADM-2024-002',
        parentName: 'David Chen',
        class: 'Grade 9',
        section: 'B',
        rollNumber: '9001',
        gender: 'Male',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
        attendance: 88,
        feeStatus: 'Pending',
        performance: 4
    },
    {
        id: 3,
        name: 'Sarah Smith',
        admissionNumber: 'ADM-2024-003',
        parentName: 'James Smith',
        class: 'Grade 10',
        section: 'A',
        rollNumber: '1002',
        gender: 'Female',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        attendance: 92,
        feeStatus: 'Paid',
        performance: 4
    },
    {
        id: 4,
        name: 'James Wilson',
        admissionNumber: 'ADM-2024-004',
        parentName: 'Thomas Wilson',
        class: 'Grade 11',
        section: 'C',
        rollNumber: '1101',
        gender: 'Male',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
        attendance: 78,
        feeStatus: 'Overdue',
        performance: 3
    },
    {
        id: 5,
        name: 'Emily Brown',
        admissionNumber: 'ADM-2024-005',
        parentName: 'William Brown',
        class: 'Grade 9',
        section: 'A',
        rollNumber: '9002',
        gender: 'Female',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
        attendance: 98,
        feeStatus: 'Paid',
        performance: 5
    }
];

export const studentFilters = [
    {
        key: 'class',
        label: 'Class',
        type: 'multiselect',
        options: [
            { label: 'Grade 9', value: 'Grade 9' },
            { label: 'Grade 10', value: 'Grade 10' },
            { label: 'Grade 11', value: 'Grade 11' },
            { label: 'Grade 12', value: 'Grade 12' }
        ]
    },
    {
        key: 'section',
        label: 'Section',
        type: 'multiselect',
        options: [
            { label: 'Section A', value: 'A' },
            { label: 'Section B', value: 'B' },
            { label: 'Section C', value: 'C' }
        ]
    },
    {
        key: 'gender',
        label: 'Gender',
        type: 'select',
        options: [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' }
        ]
    },
    {
        key: 'feeStatus',
        label: 'Fee Status',
        type: 'multiselect',
        options: [
            { label: 'Paid', value: 'Paid' },
            { label: 'Pending', value: 'Pending' },
            { label: 'Overdue', value: 'Overdue' }
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
