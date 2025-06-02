
import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign,
  FileText,
  Edit,
  Trash,
  Mail,
  Share2,
  ChevronRight,
  Plus,
  Calendar as CalendarIcon
} from "lucide-react";

const ClassDetail = () => {
  const { id } = useParams();
  
  // Mock class data
  const classData = {
    id: 1,
    name: "Advanced Cardiac Life Support (ACLS)",
    description: "This course builds on the foundation of Basic Life Support (BLS) skills, emphasizing the importance of continuous, high-quality CPR. It aims to enhance skills in advanced airway management and related pharmacology.",
    instructor: "Dr. Sarah Johnson",
    startDate: "March 15, 2025",
    endDate: "March 16, 2025",
    startTime: "9:00 AM",
    endTime: "5:00 PM",
    enrolled: 16,
    capacity: 20,
    location: "Training Center A, Room 305",
    address: "123 Medical Drive, Suite 100, San Francisco CA 94107",
    status: "active",
    price: "$275.00",
    requirements: [
      "Current BLS certification",
      "Medical or healthcare background",
      "Pre-course self-assessment completed"
    ],
    materials: [
      "ACLS Provider Manual",
      "Pre-course Self-Assessment",
      "Pocket Reference Card"
    ]
  };

  // Mock students data
  const students = [
    { id: 1, name: "John Smith", email: "john.smith@example.com", role: "Nurse", status: "confirmed" },
    { id: 2, name: "Emily Chen", email: "emily.chen@example.com", role: "Physician", status: "confirmed" },
    { id: 3, name: "Michael Brown", email: "michael.brown@example.com", role: "Paramedic", status: "pending" },
    { id: 4, name: "Sarah Davis", email: "sarah.davis@example.com", role: "Nurse Practitioner", status: "confirmed" },
    { id: 5, name: "Robert Wilson", email: "robert.wilson@example.com", role: "EMT", status: "waitlisted" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Badge 
              variant="outline"
              className="border-green-200 text-green-700 bg-green-50"
            >
              Active
            </Badge>
            <div className="text-sm text-gray-500">
              ID: {id}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{classData.name}</h1>
          
          <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600 gap-x-6 gap-y-2">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              {classData.startDate}
              {classData.startDate !== classData.endDate && ` - ${classData.endDate}`}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              {classData.startTime} - {classData.endTime}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              {classData.location}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-gray-400" />
              {classData.enrolled}/{classData.capacity} Students
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-gray-200">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" className="border-gray-200">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Class Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Class Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Instructor</h4>
                  <p className="text-gray-900">{classData.instructor}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Location</h4>
                  <p className="text-gray-900">{classData.location}</p>
                  <p className="text-gray-600 text-sm mt-1">{classData.address}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Price</h4>
                  <p className="text-gray-900">{classData.price} per student</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Status</h4>
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-gray-900">Active</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Class Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {classData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-indigo-500" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Course Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {classData.materials.map((material, index) => (
                  <li key={index} className="flex items-start">
                    <FileText className="w-4 h-4 mr-2 mt-0.5 text-indigo-500" />
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Tabs */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-0">
              <Tabs defaultValue="overview">
                <TabsList className="w-full border-b border-gray-200 bg-transparent p-0 rounded-none">
                  <TabsTrigger 
                    value="overview" 
                    className="flex-1 rounded-none border-b-2 border-transparent pt-3 pb-2.5 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-700"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="students" 
                    className="flex-1 rounded-none border-b-2 border-transparent pt-3 pb-2.5 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-700"
                  >
                    Students
                  </TabsTrigger>
                  <TabsTrigger 
                    value="schedule" 
                    className="flex-1 rounded-none border-b-2 border-transparent pt-3 pb-2.5 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-700"
                  >
                    Schedule
                  </TabsTrigger>
                  <TabsTrigger 
                    value="billing" 
                    className="flex-1 rounded-none border-b-2 border-transparent pt-3 pb-2.5 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-700"
                  >
                    Billing
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">About the Class</h3>
                      <p className="text-gray-700">{classData.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Class Statistics</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="text-sm text-gray-500 mb-1">Enrollment</div>
                          <div className="text-2xl font-semibold text-gray-900">
                            {classData.enrolled}/{classData.capacity}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className="bg-indigo-600 h-2 rounded-full" 
                              style={{ width: `${(classData.enrolled / classData.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="text-sm text-gray-500 mb-1">Revenue</div>
                          <div className="text-2xl font-semibold text-gray-900">$4,400</div>
                          <div className="text-xs text-green-600 mt-1">16 x $275.00</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="border-gray-200">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Students
                        </Button>
                        <Button variant="outline" className="border-gray-200">
                          <FileText className="w-4 h-4 mr-2" />
                          Generate Report
                        </Button>
                        <Button variant="outline" className="border-gray-200 text-red-600 hover:text-red-700 hover:border-red-200">
                          <Trash className="w-4 h-4 mr-2" />
                          Cancel Class
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="students" className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Students</h3>
                      <p className="text-sm text-gray-600">{classData.enrolled} students enrolled</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-gray-200">
                        <Mail className="w-4 h-4 mr-2" />
                        Email All
                      </Button>
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Student
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                    {students.map(student => (
                      <div key={student.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-medium">
                            {student.name.substring(0, 1)}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{student.name}</h4>
                            <p className="text-sm text-gray-500">{student.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-600">{student.role}</div>
                          <Badge 
                            variant="outline"
                            className={
                              student.status === "confirmed" ? "border-green-200 text-green-700 bg-green-50" :
                              student.status === "waitlisted" ? "border-yellow-200 text-yellow-700 bg-yellow-50" : 
                              "border-gray-200 text-gray-700 bg-gray-50"
                            }
                          >
                            {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="schedule" className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Class Schedule</h3>
                      <p className="text-sm text-gray-600">Manage class dates, times and locations</p>
                    </div>
                    
                    <div>
                      <Button variant="outline" className="border-gray-200">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Update Schedule
                      </Button>
                    </div>
                  </div>
                  
                  {/* Schedule content */}
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium text-gray-900">Day 1</h4>
                        <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                          March 15, 2025
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start border-l-2 border-indigo-500 pl-4 py-2">
                          <div className="w-24 text-sm text-gray-500">9:00 AM</div>
                          <div>
                            <h5 className="font-medium text-gray-900">Welcome & Introduction</h5>
                            <p className="text-sm text-gray-700">Overview of ACLS protocols and course objectives</p>
                          </div>
                        </div>
                        <div className="flex items-start border-l-2 border-indigo-500 pl-4 py-2">
                          <div className="w-24 text-sm text-gray-500">10:00 AM</div>
                          <div>
                            <h5 className="font-medium text-gray-900">BLS and AED Review</h5>
                            <p className="text-sm text-gray-700">Hands-on practice of core BLS skills</p>
                          </div>
                        </div>
                        <div className="flex items-start border-l-2 border-indigo-500 pl-4 py-2">
                          <div className="w-24 text-sm text-gray-500">12:00 PM</div>
                          <div>
                            <h5 className="font-medium text-gray-900">Lunch Break</h5>
                          </div>
                        </div>
                        <div className="flex items-start border-l-2 border-indigo-500 pl-4 py-2">
                          <div className="w-24 text-sm text-gray-500">1:00 PM</div>
                          <div>
                            <h5 className="font-medium text-gray-900">ECG Rhythm Recognition</h5>
                            <p className="text-sm text-gray-700">Assessment and interpretation of cardiac rhythms</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium text-gray-900">Day 2</h4>
                        <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                          March 16, 2025
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start border-l-2 border-indigo-500 pl-4 py-2">
                          <div className="w-24 text-sm text-gray-500">9:00 AM</div>
                          <div>
                            <h5 className="font-medium text-gray-900">Megacode Practice</h5>
                            <p className="text-sm text-gray-700">Team-based simulations of cardiac emergencies</p>
                          </div>
                        </div>
                        <div className="flex items-start border-l-2 border-indigo-500 pl-4 py-2">
                          <div className="w-24 text-sm text-gray-500">1:00 PM</div>
                          <div>
                            <h5 className="font-medium text-gray-900">Testing & Evaluation</h5>
                            <p className="text-sm text-gray-700">Final assessment of ACLS skills and knowledge</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="billing" className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Billing & Payments</h3>
                      <p className="text-sm text-gray-600">Manage class fees, payments, and invoices</p>
                    </div>
                    
                    <div>
                      <Button variant="outline" className="border-gray-200">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Generate Invoice
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Total Revenue</div>
                          <div className="text-2xl font-semibold text-gray-900">$4,400.00</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Payments Received</div>
                          <div className="text-2xl font-semibold text-gray-900">$3,850.00</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Outstanding</div>
                          <div className="text-2xl font-semibold text-gray-900">$550.00</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-500">
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-4">Student</div>
                          <div className="col-span-2">Amount</div>
                          <div className="col-span-3">Status</div>
                          <div className="col-span-3 text-right">Actions</div>
                        </div>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        {students.map(student => (
                          <div key={student.id} className="px-6 py-4 text-sm">
                            <div className="grid grid-cols-12 gap-4 items-center">
                              <div className="col-span-4">
                                <div className="font-medium text-gray-900">{student.name}</div>
                                <div className="text-gray-500">{student.email}</div>
                              </div>
                              <div className="col-span-2 text-gray-900">
                                $275.00
                              </div>
                              <div className="col-span-3">
                                <Badge 
                                  variant="outline"
                                  className={
                                    student.id > 3 ? "border-yellow-200 text-yellow-700 bg-yellow-50" : 
                                    "border-green-200 text-green-700 bg-green-50"
                                  }
                                >
                                  {student.id > 3 ? "Pending" : "Paid"}
                                </Badge>
                              </div>
                              <div className="col-span-3 text-right">
                                <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                                  {student.id > 3 ? "Send Reminder" : "View Receipt"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
