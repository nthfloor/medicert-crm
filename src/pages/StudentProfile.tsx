
import { useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, FileText, Clock, Edit, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const StudentProfile = () => {
  const { id } = useParams();

  const student = {
    id: id || "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    joinDate: "March 2024",
    status: "Active",
    certifications: ["BLS", "ACLS", "PALS"],
    upcomingClasses: [
      { id: 1, name: "Advanced Cardiac Life Support", date: "2024-01-15", status: "Scheduled" },
      { id: 2, name: "Pediatric Advanced Life Support", date: "2024-01-22", status: "Waitlist" }
    ],
    recentActivity: [
      { date: "2024-01-08", action: "Completed BLS Certification", type: "certification" },
      { date: "2024-01-05", action: "Registered for ACLS class", type: "registration" },
      { date: "2024-01-03", action: "Updated contact information", type: "profile" }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Student Profile</h1>
            <p className="text-gray-500 mt-1">Manage student information and activity</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student Info Card */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-lg font-semibold bg-indigo-100 text-indigo-700">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{student.name}</h2>
                <Badge variant={student.status === 'Active' ? 'default' : 'secondary'} className="mb-6">
                  {student.status}
                </Badge>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">{student.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">{student.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Joined {student.joinDate}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-0 shadow-sm mt-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Current Certifications</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {student.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">{cert}</span>
                    </div>
                    <Badge variant="outline" className="text-green-700 border-green-200">
                      Valid
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Classes */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Upcoming Classes</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {student.upcomingClasses.map((cls) => (
                  <div key={cls.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{cls.name}</h4>
                        <p className="text-sm text-gray-500">{cls.date}</p>
                      </div>
                    </div>
                    <Badge variant={cls.status === 'Scheduled' ? 'default' : 'secondary'}>
                      {cls.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {student.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-500 mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
