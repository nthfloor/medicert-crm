
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Users, FileText, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    organization: "",
    experience: "",
    goals: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student registration:", formData);
    // Handle registration logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Medicert</h1>
                <p className="text-xs text-gray-500">Advanced Life Support Training</p>
              </div>
            </Link>
            
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">
              Back to Classes
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Student Registration</h1>
          <p className="text-lg text-gray-600">
            Create your account to book classes and track your certifications
          </p>
        </div>

        <Card className="border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Personal Information</CardTitle>
            <CardDescription>
              Please provide your details to create your student account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                    className="mt-1 border-gray-200"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                    className="mt-1 border-gray-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    className="mt-1 border-gray-200"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-1 border-gray-200"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="profession">Professional Role *</Label>
                <Select onValueChange={(value) => handleInputChange("profession", value)}>
                  <SelectTrigger className="w-full border-gray-200 mt-1">
                    <SelectValue placeholder="Select your professional role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nurse">Nurse</SelectItem>
                    <SelectItem value="physician">Physician</SelectItem>
                    <SelectItem value="paramedic">Paramedic</SelectItem>
                    <SelectItem value="emt">EMT</SelectItem>
                    <SelectItem value="respiratory-therapist">Respiratory Therapist</SelectItem>
                    <SelectItem value="medical-student">Medical Student</SelectItem>
                    <SelectItem value="nursing-student">Nursing Student</SelectItem>
                    <SelectItem value="other">Other Healthcare Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="organization">Healthcare Organization</Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => handleInputChange("organization", e.target.value)}
                  placeholder="Hospital, clinic, or organization name"
                  className="mt-1 border-gray-200"
                />
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Select onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger className="w-full border-gray-200 mt-1">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student/New to Field</SelectItem>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="goals">Training Goals (Optional)</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  placeholder="What do you hope to achieve through our training programs?"
                  className="mt-1 border-gray-200 min-h-[100px]"
                />
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-gray-200"
                    asChild
                  >
                    <Link to="/">Cancel</Link>
                  </Button>
                  
                  <Button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white flex-1"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Create Student Account
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
