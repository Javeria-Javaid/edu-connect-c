// Mock data for Classes section
export const classesData = [
    { id: 1, name: "Class 9", section: "A", teacher: "Sarah Ahmed", students: 35, attendance: 92, status: "Active", room: "101" },
    { id: 2, name: "Class 9", section: "B", teacher: "Muhammad Hassan", students: 32, attendance: 88, status: "Active", room: "102" },
    { id: 3, name: "Class 10", section: "A", teacher: "Ayesha Khan", students: 38, attendance: 95, status: "Active", room: "201" },
    { id: 4, name: "Class 10", section: "B", teacher: "Ali Raza", students: 30, attendance: 85, status: "Active", room: "202" },
    { id: 5, name: "Class 11", section: "A", teacher: "Fatima Malik", students: 28, attendance: 90, status: "Active", room: "301" },
    { id: 6, name: "Class 11", section: "B", teacher: "Usman Tariq", students: 25, attendance: 87, status: "Active", room: "302" }
];

export const classesStats = {
    totalClasses: 12,
    totalSections: 24,
    avgStudents: 32,
    teacherAssignment: 95,
    recentlyAdded: 2,
    issues: [
        { type: "No Homeroom Teacher", count: 2 },
        { type: "Low Attendance", count: 3 },
        { type: "Oversized", count: 1 }
    ]
};

// Mock data for Exams section
export const examsData = {
    upcoming: [
        { id: 1, name: "Midterm Exams", start: "2024-12-01", end: "2024-12-15", classes: 12, subjects: 8, status: "Published" },
        { id: 2, name: "Unit Test 3", start: "2024-11-25", end: "2024-11-27", classes: 6, subjects: 5, status: "Draft" }
    ],
    active: [
        { id: 3, name: "Monthly Test", start: "2024-11-20", end: "2024-11-22", classes: 12, subjects: 6, status: "Active" }
    ],
    completed: [
        { id: 4, name: "Unit Test 2", start: "2024-10-15", end: "2024-10-20", classes: 12, subjects: 8, status: "Completed", avgScore: 78 }
    ],
    stats: {
        upcomingCount: 2,
        activeCount: 1,
        pendingResults: 45,
        completedCount: 8,
        topClass: "10-A (85%)",
        lowClass: "9-B (72%)"
    }
};

export const examTimetable = [
    { subject: "Mathematics", date: "2024-12-01", time: "09:00 - 11:00", room: "Hall A", invigilator: "Sarah Ahmed" },
    { subject: "English", date: "2024-12-02", time: "09:00 - 11:00", room: "Hall A", invigilator: "Muhammad Hassan" },
    { subject: "Science", date: "2024-12-03", time: "09:00 - 11:00", room: "Hall B", invigilator: "Ayesha Khan" },
    { subject: "Urdu", date: "2024-12-04", time: "09:00 - 11:00", room: "Hall A", invigilator: "Fatima Malik" },
    { subject: "Islamiyat", date: "2024-12-05", time: "09:00 - 11:00", room: "Hall B", invigilator: "Usman Tariq" }
];

// Mock data for Timetable section
export const timetableStats = {
    totalTimetables: 24,
    recentlyUpdated: 5,
    conflicts: 2,
    teacherFree: 12
};

export const sampleTimetable = {
    class: "9-A",
    periods: [
        {
            day: "Monday", slots: [
                { period: 1, time: "08:00-08:45", subject: "Mathematics", teacher: "Sarah Ahmed", room: "101" },
                { period: 2, time: "08:45-09:30", subject: "English", teacher: "M. Hassan", room: "101" },
                { period: 3, time: "09:30-10:15", subject: "Science", teacher: "Ayesha Khan", room: "Lab 1" },
                { period: 4, time: "10:30-11:15", subject: "Urdu", teacher: "Fatima Malik", room: "101" },
                { period: 5, time: "11:15-12:00", subject: "Islamiyat", teacher: "Usman Tariq", room: "101" }
            ]
        },
        {
            day: "Tuesday", slots: [
                { period: 1, time: "08:00-08:45", subject: "Science", teacher: "Ayesha Khan", room: "Lab 1" },
                { period: 2, time: "08:45-09:30", subject: "Mathematics", teacher: "Sarah Ahmed", room: "101" },
                { period: 3, time: "09:30-10:15", subject: "English", teacher: "M. Hassan", room: "101" },
                { period: 4, time: "10:30-11:15", subject: "Computer", teacher: "Ali Raza", room: "Lab 2" },
                { period: 5, time: "11:15-12:00", subject: "Urdu", teacher: "Fatima Malik", room: "101" }
            ]
        }
    ]
};
