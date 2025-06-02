
import { useParams } from "react-router-dom";
import { ArrowLeft, Upload, FileText, MessageSquare, Bell, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentEventManagement = () => {
  const { id } = useParams();

  const student = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com"
  };

  const documents = [
    { id: 1, name: "Medical Certificate.pdf", type: "Certificate", uploadDate: "2024-01-08", status: "Approved" },
    { id: 2, name: "ID Copy.jpg", type: "Identification", uploadDate: "2024-01-07", status: "Pending" },
    { id: 3, name: "Previous Training Records.pdf", type: "Training", uploadDate: "2024-01-05", status: "Approved" }
  ];

  const communications = [
    { id: 1, type: "email", subject: "Class Reminder - ACLS Training", date: "2024-01-10", status: "sent" },
    { id: 2, type: "sms", subject: "Payment confirmation received", date: "2024-01-08", status: "delivered" },
    { id: 3, type: "email", subject: "Welcome to Medicert", date: "2024-01-05", status: "opened" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
            <p className="text-gray-500 mt-1">Manage documents and communications for {student.name}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Send Reminder
          </Button>
        </div>
      </div>

      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="communications">Communications</TabsTrigger>
          <TabsTrigger value="booking-data">Booking Data</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-6">
          {/* Upload Zone */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-indigo-300 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Documents</h3>
                <p className="text-gray-500 mb-4">Drag and drop files here or click to browse</p>
                <Button variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Documents List */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Uploaded Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                        <p className="text-sm text-gray-500">{doc.type} • {doc.uploadDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={doc.status === 'Approved' ? 'default' : 'secondary'}>
                        {doc.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communications" className="space-y-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Communication History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communications.map((comm) => (
                  <div key={comm.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{comm.subject}</h4>
                        <p className="text-sm text-gray-500">{comm.type.toUpperCase()} • {comm.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {comm.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booking-data" className="space-y-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Booking Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Registration Date</label>
                    <p className="text-gray-900 font-semibold">January 5, 2024</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Class Type</label>
                    <p className="text-gray-900 font-semibold">Advanced Cardiac Life Support</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Payment Status</label>
                    <Badge className="mt-1">Completed</Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Dietary Requirements</label>
                    <p className="text-gray-900 font-semibold">Vegetarian</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Emergency Contact</label>
                    <p className="text-gray-900 font-semibold">John Johnson - (555) 987-6543</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Special Accommodations</label>
                    <p className="text-gray-900 font-semibold">None requested</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentEventManagement;
