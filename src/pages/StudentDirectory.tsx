
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Plus, 
  Filter,
  Grid,
  List,
  Mail,
  Phone,
  User,
  Calendar,
  Clock
} from "lucide-react";

const StudentDirectory = () => {
  const [view, setView] = useState("grid");
  
  // Mock student data
  const students = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
      role: "Nurse",
      lastClass: "Advanced Cardiac Life Support",
      lastClassDate: "Feb 15, 2025",
      certifications: ["BLS", "ACLS", "PALS"],
      status: "active"
    },
    {
      id: 2,
      name: "Emily Chen",
      email: "emily.chen@example.com",
      phone: "(555) 234-5678",
      role: "Physician",
      lastClass: "Pediatric Advanced Life Support",
      lastClassDate: "Jan 20, 2025",
      certifications: ["BLS", "ACLS", "PALS"],
      status: "active"
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "(555) 345-6789",
      role: "Paramedic",
      lastClass: "Basic Life Support",
      lastClassDate: "Mar 5, 2025",
      certifications: ["BLS", "ACLS"],
      status: "active"
    },
    {
      id: 4,
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      phone: "(555) 456-7890",
      role: "Nurse Practitioner",
      lastClass: "Advanced Cardiac Life Support",
      lastClassDate: "Feb 10, 2025",
      certifications: ["BLS", "ACLS", "NRP"],
      status: "active"
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      phone: "(555) 567-8901",
      role: "EMT",
      lastClass: "Basic Life Support",
      lastClassDate: "Jan 15, 2025",
      certifications: ["BLS"],
      status: "expired"
    },
    {
      id: 6,
      name: "Jennifer Taylor",
      email: "jennifer.taylor@example.com",
      phone: "(555) 678-9012",
      role: "Physician",
      lastClass: "Neonatal Resuscitation Program",
      lastClassDate: "Mar 1, 2025",
      certifications: ["BLS", "ACLS", "PALS", "NRP"],
      status: "active"
    },
    {
      id: 7,
      name: "David Martinez",
      email: "david.martinez@example.com",
      phone: "(555) 789-0123",
      role: "Respiratory Therapist",
      lastClass: "Advanced Cardiac Life Support",
      lastClassDate: "Feb 20, 2025",
      certifications: ["BLS", "ACLS"],
      status: "active"
    },
    {
      id: 8,
      name: "Lisa Johnson",
      email: "lisa.johnson@example.com",
      phone: "(555) 890-1234",
      role: "Nurse",
      lastClass: "Pediatric Advanced Life Support",
      lastClassDate: "Mar 10, 2025",
      certifications: ["BLS", "ACLS", "PALS"],
      status: "pending"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-1">Manage student profiles, certifications, and training records</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search students..."
              className="pl-10 border-gray-200"
            />
          </div>
          <Button variant="outline" className="border-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size="sm"
            className={view === "grid" ? "bg-white shadow-sm" : ""}
            onClick={() => setView("grid")}
          >
            <Grid className="w-4 h-4 mr-1" />
            Grid
          </Button>
          <Button
            variant={view === "table" ? "default" : "ghost"}
            size="sm"
            className={view === "table" ? "bg-white shadow-sm" : ""}
            onClick={() => setView("table")}
          >
            <List className="w-4 h-4 mr-1" />
            Table
          </Button>
        </div>
      </div>

      {/* Student List */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <Card key={student.id} className="border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-medium text-lg">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">
                        <Link to={`/students/${student.id}`} className="hover:text-indigo-600">
                          {student.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600">{student.role}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline"
                    className={
                      student.status === "active" ? "border-green-200 text-green-700 bg-green-50" : 
                      student.status === "expired" ? "border-red-200 text-red-700 bg-red-50" : 
                      "border-yellow-200 text-yellow-700 bg-yellow-50"
                    }
                  >
                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`mailto:${student.email}`} className="text-gray-600 hover:text-indigo-600">
                      {student.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`tel:${student.phone}`} className="text-gray-600 hover:text-indigo-600">
                      {student.phone}
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {student.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    Last class: {student.lastClass} ({student.lastClassDate})
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                  <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800" asChild>
                    <Link to={`/students/${student.id}`}>
                      View Profile
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800" asChild>
                    <Link to={`/students/${student.id}/events`}>
                      View Classes
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Contact Information</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Certifications</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Class</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-medium mr-3">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <Link to={`/students/${student.id}`} className="font-medium text-indigo-600 hover:text-indigo-800">
                          {student.name}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center">
                          <Mail className="w-3.5 h-3.5 mr-2 text-gray-400" />
                          <a href={`mailto:${student.email}`} className="text-gray-600 hover:text-indigo-600">
                            {student.email}
                          </a>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="w-3.5 h-3.5 mr-2 text-gray-400" />
                          <a href={`tel:${student.phone}`} className="text-gray-600 hover:text-indigo-600">
                            {student.phone}
                          </a>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.role}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {student.certifications.map((cert) => (
                          <Badge key={cert} variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50 text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={
                          student.status === "active" ? "border-green-200 text-green-700 bg-green-50" : 
                          student.status === "expired" ? "border-red-200 text-red-700 bg-red-50" : 
                          "border-yellow-200 text-yellow-700 bg-yellow-50"
                        }
                      >
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-2 text-gray-400" />
                          <span>{student.lastClassDate}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {student.lastClass}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/students/${student.id}`}>
                            Profile
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/students/${student.id}/events`}>
                            Classes
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StudentDirectory;
