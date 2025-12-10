
export const admissionsStats = {
    activeCycles: 3,
    applicationsToday: 12,
    inReview: 45,
    approved: 120,
    rejected: 15,
    waitlisted: 8,
    conversionRate: 68,
    missingDocs: 5
};

export const admissionCycles = [
    {
        id: 1,
        status: 'Active',
        seatsAvailable: 15,
        name: 'Fall 2025 Admission',
        startDate: 'Sep 1, 2024',
        endDate: 'Dec 31, 2024',
        classes: ['Grade 1', 'Grade 5', 'Grade 9'],
        applicationsReceived: 145
    },
    {
        id: 2,
        status: 'Active',
        seatsAvailable: 8,
        name: 'Spring 2025 Transfers',
        startDate: 'Nov 1, 2024',
        endDate: 'Jan 15, 2025',
        classes: ['All Grades'],
        applicationsReceived: 32
    }
];

export const applications = {
    new: [
        {
            id: 101,
            class: 'Grade 1',
            studentName: 'Alice Johnson',
            parentName: 'Robert Johnson',
            date: 'Today, 10:30 AM',
            documents: 4,
            required: 5
        },
        {
            id: 102,
            class: 'Grade 5',
            studentName: 'Michael Chen',
            parentName: 'Sarah Chen',
            date: 'Today, 09:15 AM',
            documents: 5,
            required: 5
        }
    ],
    underReview: [
        {
            id: 201,
            class: 'Grade 9',
            studentName: 'Emma Davis',
            parentName: 'James Davis',
            date: 'Yesterday',
            documents: 5,
            required: 5
        }
    ],
    approved: [
        { id: 301 }, { id: 302 }, { id: 303 }
    ]
};

// Attendance Data
// Attendance Data - Build Verification Fix
export const attendanceStats = {
    todayAttendance: 94,
    totalPresent: 1150,
    totalAbsent: 65,
    totalLeave: 35,
    missingSubmissions: 3,
    irregularStudents: 12
};

export const classAttendance = [
    { class: '10-A', present: 38, absent: 2, leave: 0, attendance: 95 },
    { class: '10-B', present: 36, absent: 3, leave: 1, attendance: 90 },
    { class: '9-A', present: 39, absent: 1, leave: 0, attendance: 97.5 },
    { class: '9-B', present: 35, absent: 4, leave: 1, attendance: 87.5 },
    { class: '8-A', present: 37, absent: 3, leave: 0, attendance: 92.5 }
];

export const missingSubmissions = [
    { teacher: 'Mrs. Anderson', class: '8-B', section: 'B' },
    { teacher: 'Mr. Wilson', class: '7-A', section: 'A' },
    { teacher: 'Ms. Thompson', class: '9-C', section: 'C' }
];

export const irregularStudents = 12; // As per usage in SchoolAttendanceView.jsx line 112: {irregular} students...
