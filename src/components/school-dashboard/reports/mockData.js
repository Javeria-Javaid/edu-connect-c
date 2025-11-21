export const reportsOverviewData = {
    summaryCards: [
        { title: 'Total Students', value: '2,543', change: '+12%', trend: 'up', color: 'bg-blue-500' },
        { title: 'Total Teachers', value: '145', change: '+2%', trend: 'up', color: 'bg-green-500' },
        { title: 'Avg. Attendance', value: '94.2%', change: '-0.5%', trend: 'down', color: 'bg-purple-500' },
        { title: 'Fees Collected', value: '$1.2M', change: '+8%', trend: 'up', color: 'bg-amber-500' },
    ],
    recentReports: [
        { id: 1, name: 'Monthly Attendance Summary - Oct', date: '2025-10-31', type: 'Attendance', format: 'PDF' },
        { id: 2, name: 'Term 1 Exam Results', date: '2025-10-25', type: 'Academic', format: 'XLSX' },
        { id: 3, name: 'Transport Fee Defaulters', date: '2025-10-20', type: 'Finance', format: 'CSV' },
        { id: 4, name: 'Teacher Workload Analysis', date: '2025-10-15', type: 'Teacher', format: 'PDF' },
    ],
    enrollmentTrend: [
        { name: 'Jan', students: 2400 },
        { name: 'Feb', students: 2420 },
        { name: 'Mar', students: 2450 },
        { name: 'Apr', students: 2480 },
        { name: 'May', students: 2500 },
        { name: 'Jun', students: 2543 },
    ],
    attendanceDistribution: [
        { name: 'Present', value: 85, fill: '#22c55e' },
        { name: 'Absent', value: 10, fill: '#ef4444' },
        { name: 'Late', value: 5, fill: '#f59e0b' },
    ],
    studentReports: [
        { id: 1, name: 'Alice Johnson', class: '10-A', performance: 'Excellent', attendance: '98%', behavior: 'Good', lastReport: '2025-10-15' },
        { id: 2, name: 'Bob Smith', class: '10-B', performance: 'Average', attendance: '85%', behavior: 'Needs Improvement', lastReport: '2025-10-12' },
        { id: 3, name: 'Charlie Brown', class: '9-A', performance: 'Good', attendance: '92%', behavior: 'Good', lastReport: '2025-10-10' },
        { id: 4, name: 'Diana Prince', class: '11-C', performance: 'Excellent', attendance: '99%', behavior: 'Excellent', lastReport: '2025-10-18' },
        { id: 5, name: 'Evan Wright', class: '10-A', performance: 'Poor', attendance: '75%', behavior: 'Average', lastReport: '2025-10-05' },
    ],
    teacherReports: [
        { id: 1, name: 'John Doe', subject: 'Mathematics', workload: '24 hrs/week', attendance: '95%', performance: 'Excellent', lastEvaluation: '2025-09-15' },
        { id: 2, name: 'Jane Smith', subject: 'Science', workload: '22 hrs/week', attendance: '98%', performance: 'Good', lastEvaluation: '2025-09-20' },
        { id: 3, name: 'Robert Brown', subject: 'English', workload: '20 hrs/week', attendance: '92%', performance: 'Average', lastEvaluation: '2025-09-10' },
        { id: 4, name: 'Emily Davis', subject: 'History', workload: '18 hrs/week', attendance: '96%', performance: 'Excellent', lastEvaluation: '2025-09-25' },
        { id: 5, name: 'Michael Wilson', subject: 'Geography', workload: '21 hrs/week', attendance: '90%', performance: 'Good', lastEvaluation: '2025-09-18' },
    ]
};
