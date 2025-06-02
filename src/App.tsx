
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ClassList from "./pages/ClassList";
import ClassDetail from "./pages/ClassDetail";
import StudentDirectory from "./pages/StudentDirectory";
import StudentProfile from "./pages/StudentProfile";
import StudentEventManagement from "./pages/StudentEventManagement";
import Calendar from "./pages/Calendar";
import Billing from "./pages/Billing";
import ClientPortal from "./pages/ClientPortal";
import Settings from "./pages/Settings";
import ClassBooking from "./pages/ClassBooking";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";
import InstructorRegistration from "./pages/InstructorRegistration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClassBooking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/student" element={<StudentRegistration />} />
          <Route path="/register/instructor" element={<InstructorRegistration />} />
          <Route path="/portal" element={<ClientPortal />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="classes" element={<ClassList />} />
            <Route path="classes/:id" element={<ClassDetail />} />
            <Route path="students" element={<StudentDirectory />} />
            <Route path="students/:id" element={<StudentProfile />} />
            <Route path="students/:id/events" element={<StudentEventManagement />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="billing" element={<Billing />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
