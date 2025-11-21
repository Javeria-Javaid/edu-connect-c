// Mock data for teachers
export const mockTeachers = [
    {
        id: "TCH001",
        name: "Sarah Ahmed",
        photo: "https://ui-avatars.com/api/?name=Sarah+Ahmed&background=3b82f6&color=fff",
        subjects: ["Mathematics", "Physics"],
        classes: ["10-A", "10-B", "11-A"],
        attendance: 95,
        employmentType: "Full-time",
        status: "Active",
        phone: "+92 300 1234567",
        email: "sarah.ahmed@school.com",
        joiningDate: "2018-08-01",
        designation: "Senior Teacher",
        tags: ["Coordinator", "Class Teacher"],
        classCount: 3,
        weeklyLoad: 18
    },
    {
        id: "TCH002",
        name: "Muhammad Hassan",
        photo: "https://ui-avatars.com/api/?name=Muhammad+Hassan&background=10b981&color=fff",
        subjects: ["English", "Urdu"],
        classes: ["9-A", "9-B", "10-A"],
        attendance: 92,
        employmentType: "Full-time",
        status: "Active",
        phone: "+92 301 2345678",
        email: "m.hassan@school.com",
        joiningDate: "2019-03-15",
        designation: "Teacher",
        tags: [],
        classCount: 3,
        weeklyLoad: 15
    },
    {
        id: "TCH003",
        name: "Ayesha Khan",
        photo: "https://ui-avatars.com/api/?name=Ayesha+Khan&background=f59e0b&color=fff",
        subjects: ["Chemistry", "Biology"],
        classes: ["11-A", "11-B"],
        attendance: 98,
        employmentType: "Full-time",
        status: "Active",
        phone: "+92 302 3456789",
        email: "ayesha.khan@school.com",
        joiningDate: "2017-01-10",
        designation: "Head of Science",
        tags: ["HOD", "Class Teacher"],
        classCount: 2,
        weeklyLoad: 16
    },
    {
        id: "TCH004",
        name: "Ali Raza",
        photo: "https://ui-avatars.com/api/?name=Ali+Raza&background=8b5cf6&color=fff",
        subjects: ["Computer Science"],
        classes: ["9-A", "10-A", "11-A"],
        attendance: 88,
        employmentType: "Part-time",
        status: "Active",
        phone: "+92 303 4567890",
        email: "ali.raza@school.com",
        joiningDate: "2021-09-01",
        designation: "Teacher",
        tags: ["Part-time"],
        classCount: 3,
        weeklyLoad: 12
    },
    {
        id: "TCH005",
        name: "Fatima Malik",
        photo: "https://ui-avatars.com/api/?name=Fatima+Malik&background=ec4899&color=fff",
        subjects: ["History", "Geography"],
        classes: ["9-B", "10-B"],
        attendance: 94,
        employmentType: "Full-time",
        status: "Active",
        phone: "+92 304 5678901",
        email: "fatima.malik@school.com",
        joiningDate: "2020-02-20",
        designation: "Teacher",
        tags: [],
        classCount: 2,
        weeklyLoad: 14
    },
    {
        id: "TCH006",
        name: "Usman Tariq",
        photo: "https://ui-avatars.com/api/?name=Usman+Tariq&background=06b6d4&color=fff",
        subjects: ["Islamic Studies"],
        classes: ["9-A", "9-B", "10-A", "10-B"],
        attendance: 90,
        employmentType: "Full-time",
        status: "Active",
        phone: "+92 305 6789012",
        email: "usman.tariq@school.com",
        joiningDate: "2019-08-01",
        designation: "Teacher",
        tags: [],
        classCount: 4,
        weeklyLoad: 12
    }
];

// Filter configurations for teacher directory
export const teacherFilters = [
    {
        key: "subjects",
        label: "Subject",
        type: "multiselect",
        options: [
            { label: "Mathematics", value: "Mathematics", count: 1 },
            { label: "Physics", value: "Physics", count: 1 },
            { label: "Chemistry", value: "Chemistry", count: 1 },
            { label: "Biology", value: "Biology", count: 1 },
            { label: "English", value: "English", count: 1 },
            { label: "Urdu", value: "Urdu", count: 1 },
            { label: "Computer Science", value: "Computer Science", count: 1 },
            { label: "History", value: "History", count: 1 },
            { label: "Geography", value: "Geography", count: 1 },
            { label: "Islamic Studies", value: "Islamic Studies", count: 1 }
        ]
    },
    {
        key: "employmentType",
        label: "Employment Type",
        type: "multiselect",
        options: [
            { label: "Full-time", value: "Full-time", count: 5 },
            { label: "Part-time", value: "Part-time", count: 1 }
        ]
    },
    {
        key: "status",
        label: "Status",
        type: "select",
        options: [
            { label: "Active", value: "Active" },
            { label: "On Leave", value: "On Leave" },
            { label: "Resigned", value: "Resigned" }
        ]
    },
    {
        key: "attendance",
        label: "Attendance Threshold",
        type: "range",
        min: 0,
        max: 100,
        unit: "%"
    }
];
