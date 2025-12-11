// Mock Data for School Dashboard Components

// Reports Overview Data
export const reportsOverviewData = {
    summaryCards: [
        { label: 'Total Students', value: '1,245', change: '+12', icon: 'Users' },
        { label: 'Active Teachers', value: '87', change: '+3', icon: 'UserCheck' },
        { label: 'Classes', value: '42', change: '+2', icon: 'Book' },
        { label: 'Attendance', value: '94%', change: '+2%', icon: 'Calendar' }
    ],
    recentReports: [
        { title: 'Q1 Academic Report', date: '2025-03-15', type: 'Academic' },
        { title: 'Monthly Attendance', date: '2025-03-01', type: 'Attendance' },
        { title: 'Finance Summary', date: '2025-02-28', type: 'Finance' }
    ],
    enrollmentTrend: [
        { month: 'Jan', students: 1200 },
        { month: 'Feb', students: 1220 },
        { month: 'Mar', students: 1245 }
    ],
    attendanceDistribution: [
        { category: 'Present', value: 94 },
        { category: 'Absent', value: 6 }
    ],

    // Teacher Reports
    teacherReports: [
        { name: 'Sarah Johnson', subject: 'Mathematics', workload: '24h', attendance: '98%', performance: 'Excellent', lastEvaluation: '2025-03-10' },
        { name: 'Michael Chen', subject: 'Science', workload: '22h', attendance: '96%', performance: 'Excellent', lastEvaluation: '2025-03-12' },
        { name: 'Emily Davis', subject: 'English', workload: '20h', attendance: '95%', performance: 'Good', lastEvaluation: '2025-03-08' },
        { name: 'Robert Wilson', subject: 'History', workload: '18h', attendance: '97%', performance: 'Good', lastEvaluation: '2025-03-09' },
        { name: 'Lisa Anderson', subject: 'Physics', workload: '23h', attendance: '99%', performance: 'Excellent', lastEvaluation: '2025-03-11' }
    ],

    // Student Reports
    studentReports: [
        { id: 1, name: 'John Doe', class: '10-A', grade: 'A+', attendance: 95, status: 'Excellent' },
        { id: 2, name: 'Jane Smith', class: '10-B', grade: 'A', attendance: 92, status: 'Good' },
        { id: 3, name: 'Mike Johnson', class: '10-A', grade: 'B+', attendance: 88, status: 'Average' }
    ],

    // Finance Reports
    financeReports: [
        { id: 1, category: 'Tuition Fees', amount: 125000, status: 'Collected', month: 'March' },
        { id: 2, category: 'Transport Fees', amount: 35000, status: 'Pending', month: 'March' },
        { id: 3, category: 'Lab Fees', amount: 15000, status: 'Collected', month: 'March' }
    ],

    // Attendance Reports
    attendanceReports: [
        { class: '10-A', date: '2025-03-15', present: 42, absent: 3, percentage: 93 },
        { class: '10-B', date: '2025-03-15', present: 40, absent: 5, percentage: 89 },
        { class: '9-A', date: '2025-03-15', present: 38, absent: 2, percentage: 95 }
    ],

    // Academic Reports
    academicReports: [
        { subject: 'Mathematics', avgScore: 85, passRate: 95, topScore: 98 },
        { subject: 'Science', avgScore: 82, passRate: 92, topScore: 96 },
        { subject: 'English', avgScore: 88, passRate: 98, topScore: 99 }
    ],
    gradeDistribution: [
        { grade: 'A+', count: 45 },
        { grade: 'A', count: 120 },
        { grade: 'B', count: 85 },
        { grade: 'C', count: 30 }
    ],

    // Transport Reports
    transportReports: [
        { route: 'Route A', students: 45, capacity: 50, driver: 'Ahmed Ali', status: 'Active' },
        { route: 'Route B', students: 48, capacity: 50, driver: 'Hassan Khan', status: 'Active' },
        { route: 'Route C', students: 42, capacity: 50, driver: 'Imran Shah', status: 'Active' }
    ]
};

// Timetable Data
export const timetableStats = {
    totalTimetables: 42,
    recentlyUpdated: 5,
    conflicts: 2,
    teacherFree: 12
};

export const sampleTimetable = {
    class: 'Grade 10-A',
    periods: [
        {
            day: 'Monday',
            slots: [
                { period: '1', subject: 'Mathematics', time: '08:00-09:00', teacher: 'Ms. Sarah', room: 'R-101' },
                { period: '2', subject: 'English', time: '09:00-10:00', teacher: 'Mr. David', room: 'R-102' },
                { period: '3', subject: 'Science', time: '10:30-11:30', teacher: 'Dr. Khan', room: 'LAB-1' }
            ]
        },
        {
            day: 'Tuesday',
            slots: [
                { period: '1', subject: 'History', time: '08:00-09:00', teacher: 'Ms. Wilson', room: 'R-105' },
                { period: '2', subject: 'Physics', time: '09:00-10:00', teacher: 'Dr. Ahmed', room: 'LAB-2' },
                { period: '3', subject: 'Chemistry', time: '10:30-11:30', teacher: 'Ms. Lisa', room: 'LAB-3' }
            ]
        }
    ]
};

// Exams Data
export const examsData = {
    upcoming: [
        { id: 1, name: 'Mid-Term Exams', start: '2025-04-01', end: '2025-04-10', classes: '10', subjects: 8 },
        { id: 2, name: 'Monthly Test', start: '2025-03-25', end: '2025-03-27', classes: '9', subjects: 5 }
    ],
    active: [
        { id: 1, name: 'Unit Test', start: '2025-03-15', end: '2025-03-16', classes: '8', subjects: 3, status: 'In Progress' }
    ],
    completed: [
        { id: 1, name: 'Final Exams', start: '2025-02-01', end: '2025-02-15', classes: '12', subjects: 10 }
    ],
    stats: {
        upcomingCount: 2,
        activeCount: 1,
        pendingResults: 3,
        completedCount: 1,
        topClass: 'Grade 10-A (92%)',
        lowClass: 'Grade 8-C (65%)'
    }
};

export const examTimetable = [
    { subject: 'Mathematics', date: '2025-04-01', time: '09:00 AM', room: 'Hall-A', invigilator: 'Ms. Sarah' },
    { subject: 'English', date: '2025-04-02', time: '09:00 AM', room: 'Hall-A', invigilator: 'Mr. David' },
    { subject: 'Science', date: '2025-04-03', time: '09:00 AM', room: 'Hall-B', invigilator: 'Dr. Khan' },
    { subject: 'History', date: '2025-04-04', time: '09:00 AM', room: 'Hall-A', invigilator: 'Ms. Wilson' },
    { subject: 'Physics', date: '2025-04-05', time: '09:00 AM', room: 'Hall-B', invigilator: 'Dr. Ahmed' }
];

// Classes Data
export const classesStats = {
    totalClasses: 42,
    totalSections: 84,
    avgStudents: 38,
    teacherAssignment: 95,
    recentlyAdded: 3,
    issues: [
        { type: 'Overcrowded', count: 5 },
        { type: 'No Teacher', count: 2 },
        { type: 'Low Attendance', count: 3 }
    ]
};

export const classesData = [
    { id: 1, name: 'Grade 10', section: 'A', teacher: 'Ms. Sarah Johnson', students: 42, room: 'R-101', attendance: 92 },
    { id: 2, name: 'Grade 10', section: 'B', teacher: 'Mr. Michael Chen', students: 40, room: 'R-102', attendance: 89 },
    { id: 3, name: 'Grade 9', section: 'A', teacher: 'Ms. Emily Davis', students: 38, room: 'R-201', attendance: 95 },
    { id: 4, name: 'Grade 9', section: 'B', teacher: 'Mr. Robert Wilson', students: 35, room: 'R-202', attendance: 91 },
    { id: 5, name: 'Grade 8', section: 'A', teacher: 'Dr. Lisa Anderson', students: 40, room: 'R-301', attendance: 88 }
];
