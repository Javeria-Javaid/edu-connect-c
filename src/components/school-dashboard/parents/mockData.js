// Mock data for parents
export const mockParents = [
    {
        id: "PAR001",
        name: "Muhammad Ali Khan",
        email: "ali.khan@example.com",
        phone: "+92 300 1234567",
        cnic: "12345-1234567-1",
        address: "123 Model Town, Lahore",
        gender: "Male",
        relation: "Father",
        linkedStudents: ["STD001", "STD003"],
        accountStatus: "Active",
        registrationDate: "2023-08-15",
        lastLogin: "2024-11-20T10:30:00",
        verified: true,
        photo: "https://ui-avatars.com/api/?name=Muhammad+Ali&background=3b82f6&color=fff"
    },
    {
        id: "PAR002",
        name: "Ayesha Malik",
        email: "ayesha.malik@example.com",
        phone: "+92 301 2345678",
        cnic: "12345-2345678-2",
        address: "456 Gulberg, Lahore",
        gender: "Female",
        relation: "Mother",
        linkedStudents: ["STD002"],
        accountStatus: "Active",
        registrationDate: "2023-09-10",
        lastLogin: "2024-11-21T08:15:00",
        verified: true,
        photo: "https://ui-avatars.com/api/?name=Ayesha+Malik&background=ec4899&color=fff"
    },
    {
        id: "PAR003",
        name: "Ahmed Hassan",
        email: "ahmed.hassan@example.com",
        phone: "+92 302 3456789",
        cnic: "12345-3456789-3",
        address: "789 DHA Phase 5, Karachi",
        gender: "Male",
        relation: "Father",
        linkedStudents: ["STD004", "STD005"],
        accountStatus: "Pending",
        registrationDate: "2024-11-15",
        lastLogin: null,
        verified: false,
        photo: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=10b981&color=fff"
    },
    {
        id: "PAR004",
        name: "Fatima Noor",
        email: "fatima.noor@example.com",
        phone: "+92 303 4567890",
        cnic: "12345-4567890-4",
        address: "321 Clifton, Karachi",
        gender: "Female",
        relation: "Mother",
        linkedStudents: ["STD006"],
        accountStatus: "Active",
        registrationDate: "2024-01-20",
        lastLogin: "2024-11-19T14:20:00",
        verified: true,
        photo: "https://ui-avatars.com/api/?name=Fatima+Noor&background=f59e0b&color=fff"
    },
    {
        id: "PAR005",
        name: "Usman Tariq",
        email: "usman.tariq@example.com",
        phone: "+92 304 5678901",
        cnic: "12345-5678901-5",
        address: "654 Johar Town, Lahore",
        gender: "Male",
        relation: "Guardian",
        linkedStudents: ["STD007"],
        accountStatus: "Active",
        registrationDate: "2023-11-05",
        lastLogin: "2024-11-18T16:45:00",
        verified: true,
        photo: "https://ui-avatars.com/api/?name=Usman+Tariq&background=8b5cf6&color=fff"
    },
    {
        id: "PAR006",
        name: "Sana Iqbal",
        email: "sana.iqbal@example.com",
        phone: "+92 305 6789012",
        cnic: "12345-6789012-6",
        address: "987 Bahria Town, Islamabad",
        gender: "Female",
        relation: "Mother",
        linkedStudents: ["STD008"],
        accountStatus: "Active",
        registrationDate: "2024-02-14",
        lastLogin: "2024-11-21T09:00:00",
        verified: true,
        photo: "https://ui-avatars.com/api/?name=Sana+Iqbal&background=06b6d4&color=fff"
    },
    {
        id: "PAR007",
        name: "Bilal Ahmed",
        email: "bilal.ahmed@example.com",
        phone: "+92 306 7890123",
        cnic: "",
        address: "147 F-7, Islamabad",
        gender: "Male",
        relation: "Father",
        linkedStudents: [],
        accountStatus: "Disabled",
        registrationDate: "2023-05-20",
        lastLogin: "2024-10-15T11:30:00",
        verified: false,
        photo: "https://ui-avatars.com/api/?name=Bilal+Ahmed&background=64748b&color=fff"
    }
];

// Statistics data
export const parentsStats = {
    totalParents: 450,
    newParents: {
        week: 12,
        month: 45
    },
    linkedParents: 420,
    unlinkedParents: 30,
    activeToday: 245,
    recentLogins: 315,
    communication: {
        messagesSent: 1250,
        unreadMessages: 78,
        announcementsViewed: 890,
        announcementsTotal: 1000
    },
    alerts: [
        { type: 'missing_docs', label: 'Missing Documents', count: 15, severity: 'warning' },
        { type: 'pending_verification', label: 'Pending Verification', count: 8, severity: 'info' }
    ],
    recentActivity: [
        { id: 1, parent: "Ayesha Malik", action: "Logged in", time: "2 minutes ago" },
        { id: 2, parent: "Muhammad Ali Khan", action: "Updated profile", time: "15 minutes ago" },
        { id: 3, parent: "Sana Iqbal", action: "Viewed announcement", time: "1 hour ago" },
        { id: 4, parent: "Fatima Noor", action: "Sent message to teacher", time: "2 hours ago" },
        { id: 5, parent: "Usman Tariq", action: "Downloaded report card", time: "3 hours ago" }
    ]
};

// Filter configurations
export const parentFilters = [
    {
        key: "accountStatus",
        label: "Account Status",
        type: "multiselect",
        options: [
            { label: "Active", value: "Active", count: 420 },
            { label: "Pending Verification", value: "Pending", count: 22 },
            { label: "Disabled", value: "Disabled", count: 8 }
        ]
    },
    {
        key: "relation",
        label: "Relationship",
        type: "multiselect",
        options: [
            { label: "Father", value: "Father", count: 230 },
            { label: "Mother", value: "Mother", count: 200 },
            { label: "Guardian", value: "Guardian", count: 20 }
        ]
    },
    {
        key: "linkStatus",
        label: "Link Status",
        type: "select",
        options: [
            { label: "Linked to Student", value: "linked" },
            { label: "Not Linked", value: "unlinked" }
        ]
    },
    {
        key: "verified",
        label: "Verification",
        type: "select",
        options: [
            { label: "Verified", value: "true" },
            { label: "Unverified", value: "false" }
        ]
    }
];
