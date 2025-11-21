// Mock data for students
export const mockStudents = [
    {
        id: "STD001",
        name: "Ahmad Khan",
        photo: "https://ui-avatars.com/api/?name=Ahmad+Khan&background=3b82f6&color=fff",
        class: "10",
        section: "A",
        rollNumber: "15",
        attendance: 92,
        feeStatus: "Paid",
        performance: 4,
        status: "Active",
        gender: "Male",
        admissionYear: 2020,
        parentName: "Muhammad Khan",
        admissionNumber: "2020-001",
        tags: ["Transport", "Scholarship"]
    },
    {
        id: "STD002",
        name: "Sarah Ahmed",
        photo: "https://ui-avatars.com/api/?name=Sarah+Ahmed&background=10b981&color=fff",
        class: "10",
        section: "A",
        rollNumber: "08",
        attendance: 95,
        feeStatus: "Paid",
        performance: 5,
        status: "Active",
        gender: "Female",
        admissionYear: 2020,
        parentName: "Ahmed Ali",
        admissionNumber: "2020-002",
        tags: []
    },
    {
        id: "STD003",
        name: "Fatima Hassan",
        photo: "https://ui-avatars.com/api/?name=Fatima+Hassan&background=f59e0b&color=fff",
        class: "9",
        section: "B",
        rollNumber: "22",
        attendance: 88,
        feeStatus: "Pending",
        performance: 4,
        status: "Active",
        gender: "Female",
        admissionYear: 2021,
        parentName: "Hassan Raza",
        admissionNumber: "2021-045",
        tags: ["Transport"]
    },
    {
        id: "STD004",
        name: "Ali Raza",
        photo: "https://ui-avatars.com/api/?name=Ali+Raza&background=8b5cf6&color=fff",
        class: "10",
        section: "B",
        rollNumber: "12",
        attendance: 78,
        feeStatus: "Overdue",
        performance: 3,
        status: "Active",
        gender: "Male",
        admissionYear: 2020,
        parentName: "Raza Ahmed",
        admissionNumber: "2020-088",
        tags: []
    },
    {
        id: "STD005",
        name: "Zainab Malik",
        photo: "https://ui-avatars.com/api/?name=Zainab+Malik&background=ec4899&color=fff",
        class: "11",
        section: "A",
        rollNumber: "05",
        attendance: 96,
        feeStatus: "Paid",
        performance: 5,
        status: "Active",
        gender: "Female",
        admissionYear: 2019,
        parentName: "Malik Hussain",
        admissionNumber: "2019-023",
        tags: ["Scholarship", "Sports"]
    },
    {
        id: "STD006",
        name: "Hassan Tariq",
        photo: "https://ui-avatars.com/api/?name=Hassan+Tariq&background=06b6d4&color=fff",
        class: "9",
        section: "A",
        rollNumber: "18",
        attendance: 85,
        feeStatus: "Paid",
        performance: 4,
        status: "Active",
        gender: "Male",
        admissionYear: 2021,
        parentName: "Tariq Mahmood",
        admissionNumber: "2021-067",
        tags: []
    },
    {
        id: "STD007",
        name: "Ayesha Siddiqui",
        photo: "https://ui-avatars.com/api/?name=Ayesha+Siddiqui&background=f43f5e&color=fff",
        class: "11",
        section: "B",
        rollNumber: "11",
        attendance: 91,
        feeStatus: "Pending",
        performance: 4,
        status: "Active",
        gender: "Female",
        admissionYear: 2019,
        parentName: "Siddiqui Ahmad",
        admissionNumber: "2019-089",
        tags: ["Transport"]
    },
    {
        id: "STD008",
        name: "Usman Khalid",
        photo: "https://ui-avatars.com/api/?name=Usman+Khalid&background=14b8a6&color=fff",
        class: "10",
        section: "A",
        rollNumber: "20",
        attendance: 82,
        feeStatus: "Paid",
        performance: 3,
        status: "Active",
        gender: "Male",
        admissionYear: 2020,
        parentName: "Khalid Saeed",
        admissionNumber: "2020-134",
        tags: []
    }
];

// Filter configurations for student directory
export const studentFilters = [
    {
        key: "class",
        label: "Class",
        type: "multiselect",
        options: [
            { label: "Class 9", value: "9", count: 2 },
            { label: "Class 10", value: "10", count: 4 },
            { label: "Class 11", value: "11", count: 2 }
        ]
    },
    {
        key: "section",
        label: "Section",
        type: "multiselect",
        options: [
            { label: "Section A", value: "A", count: 5 },
            { label: "Section B", value: "B", count: 3 }
        ]
    },
    {
        key: "gender",
        label: "Gender",
        type: "select",
        options: [
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" }
        ]
    },
    {
        key: "feeStatus",
        label: "Fee Status",
        type: "multiselect",
        options: [
            { label: "Paid", value: "Paid", count: 5 },
            { label: "Pending", value: "Pending", count: 2 },
            { label: "Overdue", value: "Overdue", count: 1 }
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
