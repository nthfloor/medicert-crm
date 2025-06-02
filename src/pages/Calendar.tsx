
import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Filter, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as UICalendar } from "@/components/ui/calendar";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  const events = [
    { id: 1, title: "BLS Certification", time: "9:00 AM", date: "2024-01-15", type: "class", location: "Room A" },
    { id: 2, title: "ACLS Training", time: "1:00 PM", date: "2024-01-15", type: "class", location: "Room B" },
    { id: 3, title: "PALS Renewal", time: "10:00 AM", date: "2024-01-16", type: "renewal", location: "Room A" },
    { id: 4, title: "Instructor Meeting", time: "3:00 PM", date: "2024-01-17", type: "meeting", location: "Conference Room" }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'class': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'renewal': return 'bg-green-100 text-green-700 border-green-200';
      case 'meeting': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-500 mt-1">Manage classes and events</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Calendar Widget */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <UICalendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-0"
              />
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="border-0 shadow-sm mt-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Classes</span>
                <span className="font-semibold text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Students</span>
                <span className="font-semibold text-gray-900">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Instructors</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Calendar View */}
        <div className="lg:col-span-3">
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div>
                  <CardTitle className="text-xl font-bold">January 2024</CardTitle>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant={view === 'month' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setView('month')}
                >
                  Month
                </Button>
                <Button 
                  variant={view === 'week' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setView('week')}
                >
                  Week
                </Button>
                <Button 
                  variant={view === 'day' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setView('day')}
                >
                  Day
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
                {/* Days Header */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="bg-gray-50 p-4 text-center">
                    <span className="text-sm font-medium text-gray-600">{day}</span>
                  </div>
                ))}
                
                {/* Calendar Days */}
                {Array.from({ length: 35 }, (_, i) => {
                  const dayNumber = i - 6; // Adjust for starting day
                  const isCurrentMonth = dayNumber > 0 && dayNumber <= 31;
                  const dayEvents = events.filter(event => {
                    const eventDay = new Date(event.date).getDate();
                    return eventDay === dayNumber;
                  });
                  
                  return (
                    <div key={i} className="bg-white p-2 min-h-[120px] border-gray-100">
                      {isCurrentMonth && (
                        <>
                          <span className="text-sm font-medium text-gray-900">
                            {dayNumber}
                          </span>
                          <div className="mt-2 space-y-1">
                            {dayEvents.map((event) => (
                              <div
                                key={event.id}
                                className={`p-1 rounded text-xs font-medium ${getEventColor(event.type)}`}
                              >
                                {event.time} {event.title}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-0 shadow-sm mt-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <CalendarIcon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-500">{event.date} • {event.time} • {event.location}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getEventColor(event.type)}>
                      {event.type}
                    </Badge>
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

export default Calendar;
