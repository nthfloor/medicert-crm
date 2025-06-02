import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  DollarSign,
  FileText,
  ChevronRight,
  CheckCircle,
  UserPlus,
  GraduationCap,
  Menu,
  X
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ClassBooking = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock data for class types
  const courseTypes = [
    {
      id: 1,
      name: "Advanced Cardiac Life Support (ACLS)",
      description: "Comprehensive training for healthcare providers who either direct or participate in cardiopulmonary emergencies.",
      price: "$275",
      duration: "2 days (16 hours)",
      certification: "2 years",
    },
    {
      id: 2,
      name: "Pediatric Advanced Life Support (PALS)",
      description: "Specialized training for healthcare providers who respond to emergencies involving infants and children.",
      price: "$250",
      duration: "2 days (14 hours)",
      certification: "2 years",
    },
    {
      id: 3, 
      name: "Basic Life Support (BLS)",
      description: "Foundational CPR course that teaches both single-rescuer and team basic life support skills.",
      price: "$125",
      duration: "4 hours",
      certification: "2 years",
    },
    {
      id: 4,
      name: "Neonatal Resuscitation Program (NRP)",
      description: "Designed to teach an evidence-based approach to newborn resuscitation.",
      price: "$275",
      duration: "1 day (8 hours)",
      certification: "2 years",
    }
  ];

  // Mock data for upcoming classes
  const upcomingClasses = [
    {
      id: 1,
      type: "ACLS",
      name: "Advanced Cardiac Life Support",
      date: "Mar 15-16, 2025",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      location: "Training Center A",
      address: "123 Medical Drive, San Francisco",
      instructor: "Dr. Sarah Johnson",
      enrolled: 16,
      capacity: 20,
      price: "$275",
    },
    {
      id: 2,
      type: "PALS",
      name: "Pediatric Advanced Life Support",
      date: "Mar 20-21, 2025",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      location: "Training Center B",
      address: "456 Health Blvd, San Francisco",
      instructor: "Dr. Michael Chen",
      enrolled: 12,
      capacity: 15,
      price: "$250",
    },
    {
      id: 3,
      type: "BLS",
      name: "Basic Life Support",
      date: "Mar 25, 2025",
      startTime: "1:00 PM",
      endTime: "5:00 PM",
      location: "Training Center A",
      address: "123 Medical Drive, San Francisco",
      instructor: "Sarah Williams",
      enrolled: 8,
      capacity: 12,
      price: "$125",
    },
    {
      id: 4,
      type: "BLS",
      name: "Basic Life Support",
      date: "Apr 2, 2025",
      startTime: "9:00 AM",
      endTime: "1:00 PM",
      location: "Training Center B",
      address: "456 Health Blvd, San Francisco",
      instructor: "James Wilson",
      enrolled: 5,
      capacity: 12,
      price: "$125",
    },
    {
      id: 5,
      type: "ACLS",
      name: "Advanced Cardiac Life Support",
      date: "Apr 5-6, 2025",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      location: "Training Center A",
      address: "123 Medical Drive, San Francisco",
      instructor: "Dr. Sarah Johnson",
      enrolled: 4,
      capacity: 20,
      price: "$275",
    },
  ];

  const locations = ["All Locations", "Training Center A", "Training Center B", "Training Center C"];
  const instructors = ["All Instructors", "Dr. Sarah Johnson", "Dr. Michael Chen", "Sarah Williams", "James Wilson"];

  const filteredClasses = selectedFilter === "all" 
    ? upcomingClasses 
    : upcomingClasses.filter(cls => cls.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Updated Header with Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Medicert</h1>
                <p className="text-xs text-gray-500">Advanced Life Support Training</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/login" className="text-gray-600 hover:text-indigo-600 font-medium">
                Sign In
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Register
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/register/student" className="flex items-center w-full">
                      <Users className="w-4 h-4 mr-2" />
                      Student/Client
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/register/instructor" className="flex items-center w-full">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Instructor
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
              <Link 
                to="/login" 
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/register/student" 
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register as Student/Client
              </Link>
              <Link 
                to="/register/instructor" 
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register as Instructor
              </Link>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Updated Hero Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced Life Support Training</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find and register for professional medical certification courses. 
              Expert instruction, hands-on training, and industry-recognized certifications.
            </p>
          </div>
        </div>

        {/* Course Types */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Course Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseTypes.map((course) => (
              <Card key={course.id} className={`cursor-pointer border-gray-200 hover:shadow-md transition-shadow ${selectedFilter === course.name.split(' ')[0] ? 'border-indigo-300 ring-2 ring-indigo-100' : ''}`}>
                <CardContent className="p-6" onClick={() => setSelectedFilter(course.name.split(' ')[0])}>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                      {course.name.split(' ')[0]}
                    </Badge>
                    <div className="text-indigo-600 font-medium">{course.price}</div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      Duration: {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      Certification: {course.certification}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Class Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by class name, instructor..."
                className="border-gray-200"
              />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="All Locations">
                <SelectTrigger className="w-[180px] border-gray-200">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select defaultValue="All Instructors">
                <SelectTrigger className="w-[180px] border-gray-200">
                  <SelectValue placeholder="Instructor" />
                </SelectTrigger>
                <SelectContent>
                  {instructors.map(instructor => (
                    <SelectItem key={instructor} value={instructor}>
                      {instructor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedFilter === "all" ? "default" : "outline"} 
              size="sm" 
              className={selectedFilter === "all" ? "bg-indigo-600 text-white" : "border-gray-200"}
              onClick={() => setSelectedFilter("all")}
            >
              All Classes
            </Button>
            
            {courseTypes.map(course => (
              <Button
                key={course.id}
                variant={selectedFilter === course.name.split(' ')[0] ? "default" : "outline"}
                size="sm"
                className={selectedFilter === course.name.split(' ')[0] ? "bg-indigo-600 text-white" : "border-gray-200"}
                onClick={() => setSelectedFilter(course.name.split(' ')[0])}
              >
                {course.name.split(' ')[0]}
              </Button>
            ))}
          </div>
        </div>

        {/* Class Listings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Classes</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {filteredClasses.map((cls) => (
              <Card key={cls.id} className="border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="md:flex">
                    {/* Left side - class info */}
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                          {cls.type}
                        </Badge>
                        <div className="text-indigo-600 font-medium text-lg">{cls.price}</div>
                      </div>
                      
                      <h3 className="text-lg font-medium text-gray-900 mb-3">{cls.name}</h3>
                      
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {cls.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {cls.startTime} - {cls.endTime}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          {cls.location} - {cls.address}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-gray-400" />
                          {cls.enrolled}/{cls.capacity} Students
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-4">
                        Instructor: <span className="text-gray-700">{cls.instructor}</span>
                      </div>
                      
                      {/* Progress bar for enrollment */}
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-indigo-600 h-2"
                          style={{width: `${(cls.enrolled / cls.capacity) * 100}%`}}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {cls.capacity - cls.enrolled} spots remaining
                      </div>
                    </div>
                    
                    {/* Right side - booking button */}
                    <div className="bg-gray-50 md:w-64 p-6 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-200">
                      <Button 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mb-3"
                        onClick={() => setSelectedClass(cls)}
                      >
                        Book This Class
                      </Button>
                      <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Registration Form - Only shown when a class is selected */}
        {selectedClass && (
          <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center z-50 p-4">
            <Card className="w-full max-w-2xl border-gray-200 shadow-lg">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-xl">Book Class Registration</CardTitle>
                <CardDescription>Complete the form to reserve your spot in {selectedClass.name}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                      {selectedClass.type}
                    </Badge>
                    <div className="text-indigo-600 font-medium">{selectedClass.price}</div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{selectedClass.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {selectedClass.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {selectedClass.startTime} - {selectedClass.endTime}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {selectedClass.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      Instructor: {selectedClass.instructor}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-1 border-gray-200" />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-1 border-gray-200" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-1 border-gray-200" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" className="mt-1 border-gray-200" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="profession">Professional Role</Label>
                  <Select>
                    <SelectTrigger className="w-full border-gray-200 mt-1">
                      <SelectValue placeholder="Select your professional role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="physician">Physician</SelectItem>
                      <SelectItem value="paramedic">Paramedic</SelectItem>
                      <SelectItem value="emt">EMT</SelectItem>
                      <SelectItem value="other">Other Healthcare Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div>
                      <div className="text-base font-medium text-gray-900">
                        {selectedClass.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Standard Registration
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {selectedClass.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-900">Total</div>
                    <div className="text-lg font-bold text-gray-900">{selectedClass.price}</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-100 p-6">
                <Button variant="outline" className="border-gray-200" onClick={() => setSelectedClass(null)}>
                  Cancel
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Complete Registration
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassBooking;
