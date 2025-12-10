
// Timetable Data
export const timetableStats = {
    totalTimetables: 15,
    recentlyUpdated: 3,
    conflicts: 2,
    teacherFree: 8
};

export const sampleTimetable = {
    class: 'Class 9-A',
    periods: [
        {
            day: 'Monday',
            slots: [
                { period: '1', subject: 'Mathematics', time: '08:00 - 09:00', teacher: 'Mrs. Davis', room: '101' },
                { period: '2', subject: 'English', time: '09:00 - 10:00', teacher: 'Mr. Smith', room: '101' },
                { period: '3', subject: 'Science', time: '10:00 - 11:00', teacher: 'Ms. Wilson', room: 'Lab 1' },
            ]
        },
        {
            day: 'Tuesday',
            slots: [
                { period: '1', subject: 'History', time: '08:00 - 09:00', teacher: 'Mr. Brown', room: '101' },
                { period: '2', subject: 'Mathematics', time: '09:00 - 10:00', teacher: 'Mrs. Davis', room: '101' },
                { period: '3', subject: 'Art', time: '10:00 - 11:00', teacher: 'Ms. Green', room: 'Art Room' },
            ]
        }
    ]
};

// Classes Data
export const classesStats = {
    totalClasses: 12,
    totalSections: 36,
    avgStudents: 32,
    teacherAssignment: 100,
    recentlyAdded: 2,
    issues: [
        { type: 'Overcrowded', count: 3 },
        { type: 'No Teacher', count: 0 }
    ]
};

export const classesData = [
    { id: 1, name: 'Grade 10', section: 'A', teacher: 'Mrs. Davis', students: 35, room: '101', attendance: 95 },
    { id: 2, name: 'Grade 10', section: 'B', teacher: 'Mr. Smith', students: 32, room: '102', attendance: 92 },
    { id: 3, name: 'Grade 9', section: 'A', teacher: 'Ms. Wilson', students: 30, room: '201', attendance: 88 },
    { id: 4, name: 'Grade 9', section: 'B', teacher: 'Mr. Brown', students: 33, room: '202', attendance: 90 }
];

// Exams Data
export const examsData = {
    upcoming: [],
    active: [
        { id: 1, name: 'Mid-Term Exams', classes: '9, 10', start: '09:00 AM', end: '12:00 PM', subjects: 'Math, English', status: 'In Progress' }
    ],
    completed: [],
    stats: {
        upcomingCount: 5,
        activeCount: 1,
        pendingResults: 120,
        completedCount: 2,
        topClass: 'Grade 10-A',
        lowClass: 'Grade 9-B'
    }
};

export const examTimetable = [
    { subject: 'Mathematics', date: '2024-03-25', time: '09:00 AM - 12:00 PM', room: 'Hall A', invigilator: 'Mr. Smith' },
    { subject: 'English', date: '2024-03-27', time: '09:00 AM - 12:00 PM', room: 'Hall B', invigilator: 'Mrs. Davis' },
    { subject: 'Science', date: '2024-03-29', time: '09:00 AM - 12:00 PM', room: 'Lab 1', invigilator: 'Ms. Wilson' },
    { subject: 'History', date: '2024-04-01', time: '09:00 AM - 12:00 PM', room: 'Hall A', invigilator: 'Mr. Brown' }
];
