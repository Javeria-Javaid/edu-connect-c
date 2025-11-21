// Mock data for Attendance section
export const attendanceStats = {
    todayAttendance: 94,
    totalPresent: 423,
    totalAbsent: 27,
    totalLeave: 15,
    missingSubmissions: 3,
    irregularStudents: 12,
    monthlyTrend: [92, 93, 91, 94, 95, 93, 94]
};

export const classAttendance = [
    { class: "9-A", attendance: 96, present: 34, absent: 1, leave: 0 },
    { class: "9-B", attendance: 91, present: 29, absent: 2, leave: 1 },
    { class: "10-A", attendance: 95, present: 36, absent: 1, leave: 1 },
    { class: "10-B", attendance: 89, present: 27, absent: 2, leave: 1 },
    { class: "11-A", attendance: 97, present: 27, absent: 1, leave: 0 },
    { class: "11-B", attendance: 92, present: 23, absent: 2, leave: 0 }
];

export const missingSubmissions = [
    { teacher: "Ali Raza", class: "9-B", section: "B", deadline: "10:00 AM" },
    { teacher: "Fatima Malik", class: "10-B", section: "B", deadline: "10:00 AM" },
    { teacher: "Usman Tariq", class: "11-B", section: "B", deadline: "10:00 AM" }
];

export const irregularStudents = [
    { name: "Ahmed Khan", class: "9-A", absences: 5, lastAbsent: "2024-11-20" },
    { name: "Sara Ali", class: "10-B", absences: 4, lastAbsent: "2024-11-21" },
    { name: "Bilal Hassan", class: "11-A", absences: 6, lastAbsent: "2024-11-19" }
];

// Mock data for Admissions section
export const admissionsStats = {
    activeCycles: 2,
    applicationsToday: 15,
    inReview: 45,
    approved: 128,
    rejected: 23,
    waitlisted: 12,
    conversionRate: 78,
    missingDocs: 18
};

export const admissionCycles = [
    {
        id: 1,
        name: "Academic Year 2024-25",
        startDate: "2024-01-15",
        endDate: "2024-03-31",
        status: "Active",
        classes: ["9", "10", "11"],
        seatsAvailable: 150,
        applicationsReceived: 245
    },
    {
        id: 2,
        name: "Mid-Year Admissions",
        startDate: "2024-06-01",
        endDate: "2024-07-15",
        status: "Scheduled",
        classes: ["9", "10"],
        seatsAvailable: 50,
        applicationsReceived: 0
    }
];

export const applications = {
    new: [
        { id: 1, studentName: "Muhammad Ali", parentName: "Hassan Ali", class: "9", date: "2024-11-20", documents: 4, required: 5 },
        { id: 2, studentName: "Ayesha Khan", parentName: "Ahmed Khan", class: "10", date: "2024-11-21", documents: 5, required: 5 }
    ],
    underReview: [
        { id: 3, studentName: "Fatima Noor", parentName: "Usman Noor", class: "11", date: "2024-11-18", documents: 5, required: 5 },
        { id: 4, studentName: "Bilal Ahmed", parentName: "Tariq Ahmed", class: "9", date: "2024-11-19", documents: 5, required: 5 }
    ],
    approved: [
        { id: 5, studentName: "Sara Malik", parentName: "Ali Malik", class: "10", date: "2024-11-15", feePaid: true },
        { id: 6, studentName: "Omar Hassan", parentName: "Zain Hassan", class: "9", date: "2024-11-16", feePaid: false }
    ]
};

export const admissionInsights = {
    applicationsByClass: [
        { class: "9", count: 95 },
        { class: "10", count: 85 },
        { class: "11", count: 65 }
    ],
    sources: [
        { source: "Website", count: 120 },
        { source: "Referral", count: 80 },
        { source: "Walk-in", count: 45 }
    ]
};
