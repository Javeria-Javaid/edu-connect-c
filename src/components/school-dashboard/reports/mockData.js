
import { FileText, Users, TrendingUp, AlertCircle } from 'lucide-react';

export const reportsOverviewData = {
    summaryCards: [
        { title: 'Total Students', value: '2,543', trend: 'up', change: '12%' },
        { title: 'Avg. Attendance', value: '94%', trend: 'up', change: '0.5%' },
        { title: 'Revenue', value: '$1.2M', trend: 'down', change: '2%' },
        { title: 'New Admissions', value: '145', trend: 'up', change: '5%' }
    ],
    recentReports: [
        { id: 1, name: 'Term 1 Academic Summary', date: '2 hours ago', type: 'Academic' },
        { id: 2, name: 'Monthly Financial Report', date: 'Yesterday', type: 'Finance' },
        { id: 3, name: 'Teacher Attendance Log', date: '2 days ago', type: 'HR' },
        { id: 4, name: 'Student Health Audit', date: '3 days ago', type: 'Health' }
    ],
    enrollmentTrend: [
        { name: 'Jan', students: 2400 },
        { name: 'Feb', students: 2420 },
        { name: 'Mar', students: 2450 },
        { name: 'Apr', students: 2480 },
        { name: 'May', students: 2500 },
        { name: 'Jun', students: 2543 }
    ],
    attendanceDistribution: [
        { name: 'Present', value: 94, fill: '#22c55e' },
        { name: 'Absent', value: 4, fill: '#ef4444' },
        { name: 'Late', value: 2, fill: '#f59e0b' }
    ],
    teacherReports: [
        { id: 1, name: 'Sarah Wilson', subject: 'Mathematics', workload: '24h', attendance: '98%', performance: 'Excellent', lastEvaluation: '2024-03-15' },
        { id: 2, name: 'James Brown', subject: 'English', workload: '20h', attendance: '95%', performance: 'Good', lastEvaluation: '2024-03-10' },
        { id: 3, name: 'Emily Davis', subject: 'Science', workload: '22h', attendance: '92%', performance: 'Average', lastEvaluation: '2024-02-28' },
        { id: 4, name: 'Michael Lee', subject: 'History', workload: '18h', attendance: '96%', performance: 'Excellent', lastEvaluation: '2024-03-05' }
    ],
    studentReports: [
        { id: 1, name: 'John Doe', class: 'Class 10', performance: 'Excellent', attendance: '98%', behavior: 'Exemplary', lastReport: '2024-03-20' },
        { id: 2, name: 'Jane Smith', class: 'Class 9', performance: 'Good', attendance: '92%', behavior: 'Good', lastReport: '2024-03-18' },
        { id: 3, name: 'Alice Johnson', class: 'Class 11', performance: 'Average', attendance: '85%', behavior: 'Needs Improvement', lastReport: '2024-03-15' },
        { id: 4, name: 'Bob Wilson', class: 'Class 10', performance: 'Poor', attendance: '78%', behavior: 'Disruptive', lastReport: '2024-03-10' }
    ],
    financeReports: [
        { id: 1, type: 'Tuition Fees', amount: '$45,000', date: '2024-03-20', status: 'Received' },
        { id: 2, type: 'Maintenance', amount: '$2,500', date: '2024-03-18', status: 'Pending' }
    ],
    transportReports: [
        { id: 1, route: 'Route A', driver: 'Tom Harris', vehicle: 'Bus 1', status: 'On Time', capacity: '45/50' },
        { id: 2, route: 'Route B', driver: 'Jerry Smith', vehicle: 'Bus 2', status: 'Delayed', capacity: '30/50' }
    ],
    academicReports: [
        { id: 1, subject: 'Math', average: '85%', passRate: '92%', topStudent: 'John Doe' },
        { id: 2, subject: 'Science', average: '78%', passRate: '88%', topStudent: 'Jane Smith' }
    ],
    attendanceReports: [
        { id: 1, date: '2024-03-20', present: 2400, absent: 143, late: 0 },
        { id: 2, date: '2024-03-19', present: 2380, absent: 163, late: 0 }
    ]
};
