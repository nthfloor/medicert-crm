
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Clock,
  DollarSign,
  Plus,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      name: "Active Students",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: Users,
    },
    {
      name: "Classes This Month",
      value: "156",
      change: "+8%",
      changeType: "positive",
      icon: BookOpen,
    },
    {
      name: "Revenue",
      value: "$94,250",
      change: "+15%",
      changeType: "positive",
      icon: DollarSign,
    },
    {
      name: "Avg. Class Size",
      value: "18.3",
      change: "-2%",
      changeType: "negative",
      icon: TrendingUp,
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      name: "Advanced Cardiac Life Support",
      instructor: "Dr. Sarah Johnson",
      time: "9:00 AM - 5:00 PM",
      date: "Today",
      students: 16,
      maxStudents: 20,
      location: "Training Center A",
    },
    {
      id: 2,
      name: "Pediatric Advanced Life Support",
      instructor: "Dr. Michael Chen",
      time: "10:00 AM - 6:00 PM",
      date: "Tomorrow",
      students: 12,
      maxStudents: 15,
      location: "Training Center B",
    },
    {
      id: 3,
      name: "Basic Life Support",
      instructor: "Sarah Williams",
      time: "2:00 PM - 6:00 PM",
      date: "March 15",
      students: 8,
      maxStudents: 12,
      location: "Training Center A",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your training center.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Class
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Classes */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between py-6">
            <CardTitle className="text-xl font-bold">Upcoming Classes</CardTitle>
            <Link to="/classes" className="text-indigo-600 text-sm font-medium flex items-center">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </CardHeader>
          <CardContent className="px-6 py-2">
            <div className="space-y-5">
              {upcomingClasses.map((classItem) => (
                <div key={classItem.id} className="p-4 rounded-xl border border-gray-100 hover:border-indigo-200 bg-white hover:bg-indigo-50/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{classItem.name}</h3>
                    <div className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium">
                      {classItem.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>
                        {classItem.students}/{classItem.maxStudents} Students
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{classItem.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {classItem.instructor} · {classItem.location}
                    </div>
                    <Link to={`/classes/${classItem.id}`} className="text-indigo-600 text-xs font-medium">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Calendar Preview */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between py-6">
            <CardTitle className="text-xl font-bold">Calendar</CardTitle>
            <Link to="/calendar" className="text-indigo-600 text-sm font-medium flex items-center">
              Full Calendar <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">March 2025</h3>
                <div className="flex items-center space-x-1">
                  <button className="p-1 rounded-md hover:bg-gray-200">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="p-1 rounded-md hover:bg-gray-200">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 border-b border-gray-200">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="py-2">{day}</div>
                ))}
              </div>
              
              {/* Calendar Days */}
              <div className="grid grid-cols-7 text-sm">
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2;
                  const isToday = day === 14;
                  const hasEvent = [8, 14, 15, 22].includes(day);
                  const isCurrentMonth = day > 0 && day <= 31;
                  
                  return (
                    <div 
                      key={i} 
                      className={`
                        h-24 p-1 border-b border-r border-gray-200 
                        ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700'} 
                        ${isToday ? 'bg-indigo-50' : ''}
                      `}
                    >
                      <div className="h-full p-1">
                        <div className="flex justify-between">
                          <div className={`
                            w-6 h-6 flex items-center justify-center rounded-full 
                            ${isToday ? 'bg-indigo-600 text-white' : ''}
                          `}>
                            {isCurrentMonth ? day : ''}
                          </div>
                        </div>
                        {hasEvent && isCurrentMonth && (
                          <div className="mt-2">
                            <div className="bg-indigo-100 text-indigo-800 text-xs p-1 rounded truncate">
                              ACLS Class
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
