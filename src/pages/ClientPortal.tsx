
import { Calendar, FileText, User, Download, Bell, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const ClientPortal = () => {
  const student = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    memberSince: "March 2024",
    certifications: [
      { name: "BLS", status: "Active", expiry: "2025-03-15", progress: 100 },
      { name: "ACLS", status: "In Progress", expiry: "2025-01-22", progress: 65 },
      { name: "PALS", status: "Upcoming", expiry: "2025-02-10", progress: 0 }
    ],
    upcomingClasses: [
      { name: "ACLS Practical Session", date: "January 22, 2024", time: "2:00 PM", location: "Room B" },
      { name: "PALS Theory", date: "February 10, 2024", time: "9:00 AM", location: "Room A" }
    ],
    documents: [
      { name: "BLS Certificate", type: "Certificate", date: "2024-03-15" },
      { name: "Training Manual", type: "Resource", date: "2024-01-10" },
      { name: "Assessment Results", type: "Results", date: "2024-03-20" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Upcoming': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Medicert Portal</h1>
                <p className="text-sm text-gray-500">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-indigo-100 text-indigo-700">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-lg font-semibold bg-indigo-100 text-indigo-700">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h2>
                  <p className="text-gray-500 text-sm mb-4">{student.email}</p>
                  <p className="text-xs text-gray-400">Member since {student.memberSince}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-sm mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-3" />
                  View Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-3" />
                  Download Certificates
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-3" />
                  Payment History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-3" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Certifications Progress */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Certification Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {student.certifications.map((cert, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                          <p className="text-sm text-gray-500">Expires: {cert.expiry}</p>
                        </div>
                        <Badge variant="outline" className={getStatusColor(cert.status)}>
                          {cert.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-900 font-medium">{cert.progress}%</span>
                        </div>
                        <Progress value={cert.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Classes */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Upcoming Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.upcomingClasses.map((cls, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{cls.name}</h4>
                          <p className="text-sm text-gray-500">{cls.date} • {cls.time}</p>
                          <p className="text-xs text-gray-400">{cls.location}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">My Documents</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-500">{doc.type} • {doc.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
