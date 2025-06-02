
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Calendar, 
  Filter, 
  Search,
  Grid, 
  List,
  Users,
  MapPin
} from "lucide-react";

const ClassList = () => {
  const [view, setView] = useState<string>("table");

  // Mock data for classes
  const classes = [
    {
      id: 1,
      name: "Advanced Cardiac Life Support (ACLS)",
      instructor: "Dr. Sarah Johnson",
      startDate: "Mar 15, 2025",
      endDate: "Mar 16, 2025",
      enrolled: 16,
      capacity: 20,
      location: "Training Center A",
      status: "active"
    },
    {
      id: 2,
      name: "Pediatric Advanced Life Support (PALS)",
      instructor: "Dr. Michael Chen",
      startDate: "Mar 20, 2025",
      endDate: "Mar 21, 2025",
      enrolled: 12,
      capacity: 15,
      location: "Training Center B",
      status: "active"
    },
    {
      id: 3,
      name: "Basic Life Support (BLS)",
      instructor: "Sarah Williams",
      startDate: "Mar 25, 2025",
      endDate: "Mar 25, 2025",
      enrolled: 8,
      capacity: 12,
      location: "Training Center A",
      status: "active"
    },
    {
      id: 4,
      name: "Neonatal Resuscitation Program (NRP)",
      instructor: "Dr. James Wilson",
      startDate: "Mar 28, 2025",
      endDate: "Mar 29, 2025",
      enrolled: 10,
      capacity: 10,
      location: "Training Center C",
      status: "full"
    },
    {
      id: 5,
      name: "Advanced Cardiac Life Support (ACLS)",
      instructor: "Dr. Sarah Johnson",
      startDate: "Apr 5, 2025",
      endDate: "Apr 6, 2025",
      enrolled: 4,
      capacity: 20,
      location: "Training Center A",
      status: "upcoming"
    },
    {
      id: 6,
      name: "Advanced Trauma Life Support (ATLS)",
      instructor: "Dr. Robert Brown",
      startDate: "Apr 12, 2025",
      endDate: "Apr 14, 2025",
      enrolled: 16,
      capacity: 18,
      location: "Training Center B",
      status: "upcoming"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Classes</h1>
          <p className="text-gray-600 mt-1">Manage your training classes and schedules</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Class
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search classes..."
              className="pl-10 border-gray-200"
            />
          </div>
          <Button variant="outline" className="border-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" className="border-gray-200">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <Button
            variant={view === "table" ? "default" : "ghost"}
            size="sm"
            className={view === "table" ? "bg-white shadow-sm" : ""}
            onClick={() => setView("table")}
          >
            <List className="w-4 h-4 mr-1" />
            Table
          </Button>
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size="sm"
            className={view === "grid" ? "bg-white shadow-sm" : ""}
            onClick={() => setView("grid")}
          >
            <Grid className="w-4 h-4 mr-1" />
            Grid
          </Button>
        </div>
      </div>

      {/* Class Status Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="all">All Classes</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          {view === "table" ? (
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Class Name</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classes.map((classItem) => (
                      <TableRow key={classItem.id}>
                        <TableCell className="font-medium">
                          <Link to={`/classes/${classItem.id}`} className="text-indigo-600 hover:text-indigo-800">
                            {classItem.name}
                          </Link>
                        </TableCell>
                        <TableCell>{classItem.instructor}</TableCell>
                        <TableCell>
                          {classItem.startDate}
                          {classItem.startDate !== classItem.endDate && ` - ${classItem.endDate}`}
                        </TableCell>
                        <TableCell>{classItem.location}</TableCell>
                        <TableCell>
                          {classItem.enrolled}/{classItem.capacity}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline"
                            className={
                              classItem.status === "active" ? "border-green-200 text-green-700 bg-green-50" : 
                              classItem.status === "full" ? "border-blue-200 text-blue-700 bg-blue-50" : 
                              "border-indigo-200 text-indigo-700 bg-indigo-50" 
                            }
                          >
                            {classItem.status === "active" ? "Active" : 
                             classItem.status === "full" ? "Full" : "Upcoming"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/classes/${classItem.id}`}>
                              View
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <Card key={classItem.id} className="border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between mb-4">
                      <Badge 
                        variant="outline"
                        className={
                          classItem.status === "active" ? "border-green-200 text-green-700 bg-green-50" : 
                          classItem.status === "full" ? "border-blue-200 text-blue-700 bg-blue-50" : 
                          "border-indigo-200 text-indigo-700 bg-indigo-50" 
                        }
                      >
                        {classItem.status === "active" ? "Active" : 
                         classItem.status === "full" ? "Full" : "Upcoming"}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{classItem.name}</h3>
                    
                    <div className="space-y-2 mb-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {classItem.startDate}
                        {classItem.startDate !== classItem.endDate && ` - ${classItem.endDate}`}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-gray-400" />
                        {classItem.enrolled}/{classItem.capacity} Students
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {classItem.location}
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <div className="flex justify-between">
                        <div className="text-sm text-gray-500">
                          Instructor: <span className="text-gray-700">{classItem.instructor}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800" asChild>
                          <Link to={`/classes/${classItem.id}`}>
                            View Class
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="active">
          {/* Same layout but filtered for active classes */}
        </TabsContent>
        <TabsContent value="upcoming">
          {/* Same layout but filtered for upcoming classes */}
        </TabsContent>
        <TabsContent value="past">
          {/* Same layout but filtered for past classes */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassList;
