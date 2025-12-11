import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import DashboardLayout from './dashboard/DashboardLayout.jsx';
import DashboardOverview from './components/dashboard/Dashboard.jsx';
import SchoolManagement from './components/schools/SchoolManagement.jsx';
import VendorManagement from './components/vendors/VendorManagement.jsx';
import UserManagement from './components/users/UserManagement.jsx';
import TeacherManagement from './components/teachers/TeacherManagement.jsx';
import Admissions from './components/admissions/Admissions.jsx';
import JobPosts from './components/jobs/JobPosts.jsx';
import Reports from './components/reports/Reports.jsx';
import Support from './components/support/Support.jsx';
import { Communication as CommunicationCenter } from './components/Communication.jsx';
import Settings from './components/settings/Settings.jsx';
import { useAuth } from './context/AuthContext.jsx';

// School Dashboard Imports
import SchoolDashboardLayout from './dashboard/SchoolDashboardLayout.jsx';
import SchoolDashboardOverview from './components/school-dashboard/SchoolDashboardOverview.jsx';
import SchoolStudentsView from './components/school-dashboard/SchoolStudentsView.jsx';
import SchoolTeachersView from './components/school-dashboard/SchoolTeachersView.jsx';
import SchoolParentsView from './components/school-dashboard/SchoolParentsView.jsx';
import SchoolClassesView from './components/school-dashboard/SchoolClassesView.jsx';
import SchoolExamsView from './components/school-dashboard/SchoolExamsView.jsx';
import SchoolTimetableView from './components/school-dashboard/SchoolTimetableView.jsx';
import SchoolAttendanceView from './components/school-dashboard/SchoolAttendanceView.jsx';
import SchoolAdmissionsView from './components/school-dashboard/SchoolAdmissionsView.jsx';
import SchoolFinanceView from './components/school-dashboard/SchoolFinanceView.jsx';
import SchoolTransportView from './components/school-dashboard/SchoolTransportView.jsx';
import SchoolReportsView from './components/school-dashboard/SchoolReportsView.jsx';
import SchoolSettingsView from './components/school-dashboard/SchoolSettingsView.jsx';

// Teacher Dashboard Imports
import TeacherDashboardLayout from './dashboard/TeacherDashboardLayout.jsx';
import TeacherDashboardOverview from './components/teacher-dashboard/TeacherDashboardOverview.jsx';
import TeacherClassesView from './components/teacher-dashboard/TeacherClassesView.jsx';
import TeacherAttendanceView from './components/teacher-dashboard/TeacherAttendanceView.jsx';
import TeacherHomeworkView from './components/teacher-dashboard/TeacherHomeworkView.jsx';
import TeacherExamsView from './components/teacher-dashboard/TeacherExamsView.jsx';
import TeacherStudentsView from './components/teacher-dashboard/TeacherStudentsView.jsx';
import TeacherCommunicationView from './components/teacher-dashboard/TeacherCommunicationView.jsx';
import TeacherResourcesView from './components/teacher-dashboard/TeacherResourcesView.jsx';
import TeacherReportsView from './components/teacher-dashboard/TeacherReportsView.jsx';
import TeacherSettingsView from './components/teacher-dashboard/TeacherSettingsView.jsx';

// Parent Dashboard Imports
import ParentDashboardLayout from './dashboard/ParentDashboardLayout.jsx';
import ParentDashboardOverview from './components/parent-dashboard/ParentDashboardOverview.jsx';
import ParentAcademicView from './components/parent-dashboard/ParentAcademicView.jsx';
import ParentAttendanceView from './components/parent-dashboard/ParentAttendanceView.jsx';
import ParentHomeworkView from './components/parent-dashboard/ParentHomeworkView.jsx';
import ParentExamsView from './components/parent-dashboard/ParentExamsView.jsx';
import ParentFeesView from './components/parent-dashboard/ParentFeesView.jsx';
import ParentTransportView from './components/parent-dashboard/ParentTransportView.jsx';
import ParentCommunicationView from './components/parent-dashboard/ParentCommunicationView.jsx';
import ParentSettingsView from './components/parent-dashboard/ParentSettingsView.jsx';

// Vendor Dashboard Imports
import VendorDashboardLayout from './dashboard/VendorDashboardLayout.jsx';
import VendorDashboardOverview from './components/vendor-dashboard/VendorDashboardOverview.jsx';
import VendorProfileView from './components/vendor-dashboard/VendorProfileView.jsx';
import VendorOrdersView from './components/vendor-dashboard/VendorOrdersView.jsx';
import VendorInventoryView from './components/vendor-dashboard/VendorInventoryView.jsx';
import VendorBillingView from './components/vendor-dashboard/VendorBillingView.jsx';
import VendorCommunicationView from './components/vendor-dashboard/VendorCommunicationView.jsx';
import VendorReportsView from './components/vendor-dashboard/VendorReportsView.jsx';
import VendorSettingsView from './components/vendor-dashboard/VendorSettingsView.jsx';

// Import your existing landing page components
import CardNav from './components/CardNav/CardNav';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import RoleSection from './components/RoleSection/RoleSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import educonnectLogo from './assets/educonnectLogo/educonnect_logo.png';
import './index.css';

// Import AuthPage
import AuthPage from './AuthPage';

// --- COMPONENT 1: The Landing Page (Your original content) ---
const LandingPage = () => {
    // Navigation items for CardNav
    const navItems = [
        {
            label: 'Services',
            bgColor: '#f0f9ff',
            textColor: '#1e293b',
            links: [
                { label: 'School Admissions', href: '#about' },
                { label: 'Job Portal', href: '#features' },
                { label: 'Vendor Services', href: '#roles' },
            ]
        },
        {
            label: 'Community',
            bgColor: '#fef7cd',
            textColor: '#1e293b',
            links: [
                { label: 'For Parents', href: '#roles' },
                { label: 'For Teachers', href: '#roles' },
                { label: 'For Schools', href: '#roles' },
            ]
        },
        {
            label: 'Support',
            bgColor: '#dcfce7',
            textColor: '#1e293b',
            links: [
                { label: 'Help Center', href: '#contact' },
                { label: 'Contact Us', href: '#contact' },
            ]
        }
    ];

    return (
        <div className="LandingPage">
            <CardNav
                logo={educonnectLogo}
                logoAlt="EduConnect Logo"
                items={navItems}
                baseColor="#1e293b"
                menuColor="#ffffff"
                buttonBgColor="#66a1be"
                buttonTextColor="#ffffff"
                platformName="EduConnect"
            />

            <Hero
                title="Connect. Learn. Grow Together"
                subtitle="A unified platform connecting schools, teachers, parents, and vendors for a smarter educational ecosystem"
                background="gradient"
                backgroundProps={{
                    gradient: "linear-gradient(135deg, #1e293b 0%, #1e293b 100%)"
                }}
                primaryButton={{
                    text: "Get Started Free",
                    onClick: () => window.location.href = '/login'
                }}
                secondaryButton={{
                    text: "Explore Features",
                    onClick: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}
            />

            <AboutSection />

            <FeatureSection />

            <RoleSection />

            <ContactSection />

            <Footer />
        </div>
    );
};

const UnauthorizedPage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h1 className="text-3xl font-semibold text-[#2563EB]">Access Restricted</h1>
        <p className="text-gray-600 max-w-md">
            You do not have the required permissions to view this area. Please contact an administrator if you believe this is a mistake.
        </p>
        <a
            href="/login"
            className="btn primary"
        >
            Return to Login
        </a>
    </div>
);

// --- COMPONENT 2: The Main App (Handles Routing) ---
function App() {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <div className="App">
                <Toaster position="top-right" />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<AuthPage defaultView="login" />} />
                    <Route path="/signup" element={<AuthPage defaultView="signup" />} />
                    <Route path="/unauthorized" element={<UnauthorizedPage />} />

                    {/* Protected Admin Routes - Nested structure with ProtectedRoute and DashboardLayout */}
                    <Route
                        path="/dashboard"
                        element={<ProtectedRoute allowedRoles={['admin']} />}
                    >
                        {/* DashboardLayout wraps all dashboard child routes */}
                        <Route element={<DashboardLayout />}>
                            <Route index element={<DashboardOverview />} />
                            <Route path="schools" element={<SchoolManagement />} />
                            <Route path="vendors" element={<VendorManagement />} />
                            <Route path="users" element={<UserManagement />} />
                            <Route path="teachers" element={<TeacherManagement />} />
                            <Route path="admissions" element={<Admissions />} />
                            <Route path="jobs" element={<JobPosts />} />
                            <Route path="reports" element={<Reports />} />
                            <Route path="support" element={<Support />} />
                            <Route path="communication" element={<CommunicationCenter />} />
                            <Route path="settings" element={<Settings />} />
                        </Route>
                    </Route>

                    {/* Protected School Admin Routes */}
                    <Route
                        path="/school/dashboard"
                        element={<ProtectedRoute allowedRoles={['school_admin']} />}
                    >
                        <Route element={<SchoolDashboardLayout />}>
                            <Route index element={<SchoolDashboardOverview />} />
                            <Route path="students" element={<SchoolStudentsView />} />
                            <Route path="teachers" element={<SchoolTeachersView />} />
                            <Route path="parents" element={<SchoolParentsView />} />
                            <Route path="classes" element={<SchoolClassesView />} />
                            <Route path="exams" element={<SchoolExamsView />} />
                            <Route path="timetable" element={<SchoolTimetableView />} />
                            <Route path="attendance" element={<SchoolAttendanceView />} />
                            <Route path="admissions" element={<SchoolAdmissionsView />} />
                            <Route path="finance" element={<SchoolFinanceView />} />
                            <Route path="transport" element={<SchoolTransportView />} />
                            <Route path="reports" element={<SchoolReportsView />} />
                            <Route path="settings" element={<SchoolSettingsView />} />
                        </Route>
                    </Route>

                    {/* Protected Teacher Routes */}
                    <Route
                        path="/teacher/dashboard"
                        element={<ProtectedRoute allowedRoles={['teacher']} />}
                    >
                        <Route element={<TeacherDashboardLayout />}>
                            <Route index element={<TeacherDashboardOverview />} />
                            <Route path="classes" element={<TeacherClassesView />} />
                            <Route path="attendance" element={<TeacherAttendanceView />} />
                            <Route path="homework" element={<TeacherHomeworkView />} />
                            <Route path="exams" element={<TeacherExamsView />} />
                            <Route path="students" element={<TeacherStudentsView />} />
                            <Route path="communication" element={<TeacherCommunicationView />} />
                            <Route path="resources" element={<TeacherResourcesView />} />
                            <Route path="reports" element={<TeacherReportsView />} />
                            <Route path="settings" element={<TeacherSettingsView />} />
                        </Route>
                    </Route>

                    {/* Protected Parent Routes */}
                    <Route
                        path="/parent/dashboard"
                        element={<ProtectedRoute allowedRoles={['parent']} />}
                    >
                        <Route element={<ParentDashboardLayout />}>
                            <Route index element={<ParentDashboardOverview />} />
                            <Route path="academic" element={<ParentAcademicView />} />
                            <Route path="attendance" element={<ParentAttendanceView />} />
                            <Route path="homework" element={<ParentHomeworkView />} />
                            <Route path="exams" element={<ParentExamsView />} />
                            <Route path="fees" element={<ParentFeesView />} />
                            <Route path="transport" element={<ParentTransportView />} />
                            <Route path="communication" element={<ParentCommunicationView />} />
                            <Route path="settings" element={<ParentSettingsView />} />
                        </Route>
                    </Route>

                    {/* Protected Vendor Routes */}
                    <Route
                        path="/vendor/dashboard"
                        element={<ProtectedRoute allowedRoles={['vendor']} />}
                    >
                        <Route element={<VendorDashboardLayout />}>
                            <Route index element={<VendorDashboardOverview />} />
                            <Route path="profile" element={<VendorProfileView />} />
                            <Route path="orders" element={<VendorOrdersView />} />
                            <Route path="inventory" element={<VendorInventoryView />} />
                            <Route path="billing" element={<VendorBillingView />} />
                            <Route path="communication" element={<VendorCommunicationView />} />
                            <Route path="reports" element={<VendorReportsView />} />
                            <Route path="settings" element={<VendorSettingsView />} />
                        </Route>
                    </Route>

                    {/* Fallback */}
                    <Route
                        path="*"
                        element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;