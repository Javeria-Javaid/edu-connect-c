
export const parentsStats = {
    totalParents: 1250,
    newParents: {
        week: 12,
        month: 45
    },
    linkedParents: 1150,
    unlinkedParents: 100,
    activeToday: 450,
    communication: {
        messagesSent: 1540,
        unreadMessages: 125,
        announcementsViewed: 850,
        announcementsTotal: 1250
    },
    alerts: [
        { label: "Missing Contact Info", count: 45, severity: "warning" },
        { label: "Unlinked Accounts", count: 100, severity: "warning" },
        { label: "Pending Approvals", count: 12, severity: "info" }
    ],
    recentActivity: [
        { id: 1, parent: "John Doe", action: "Viewed Report Card", time: "2 mins ago" },
        { id: 2, parent: "Jane Smith", action: "Paid Tuition Fee", time: "15 mins ago" },
        { id: 3, parent: "Michael Brown", action: "Updated Profile", time: "1 hour ago" },
        { id: 4, parent: "Sarah Wilson", action: "Sent Message to Teacher", time: "2 hours ago" }
    ]
};
