import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  GraduationCap, 
  FileText, 
  CheckCircle, 
  Upload, 
  Shield,
  AlertCircle,
  Clock
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InstructorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    credentials: "",
    organization: "",
    experience: "",
    specializations: [] as string[],
    bio: "",
    linkedIn: "",
    certifications: [] as File[],
    resume: null as File | null,
    references: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Instructor registration:", formData);
    // Handle registration logic here
  };

  const handleInputChange = (field: string, value: string | string[] | File | File[] | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (files && files.length > 0) {
      if (field === "certifications") {
        handleInputChange(field, Array.from(files));
      } else {
        handleInputChange(field, files[0]);
      }
    }
  };

  const specializations = [
    "ACLS (Advanced Cardiac Life Support)",
    "PALS (Pediatric Advanced Life Support)",
    "BLS (Basic Life Support)",
    "NRP (Neonatal Resuscitation Program)",
    "Critical Care",
    "Emergency Medicine",
    "Pediatric Emergency Care",
    "Trauma Care"
  ];

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Instructor Registration</h1>
          <p className="text-lg text-gray-600">
            Join our network of certified medical instructors
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">Personal Info</span>
            </div>
            
            <div className="w-16 h-px bg-gray-200"></div>
            
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">Credentials</span>
            </div>
            
            <div className="w-16 h-px bg-gray-200"></div>
            
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">Verification</span>
            </div>
          </div>
        </div>

        <Alert className="mb-8 border-amber-200 bg-amber-50">
          <Shield className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Verification Required:</strong> All instructor applications undergo a thorough 
            verification process including credential validation, background checks, and reference 
            verification. This process typically takes 3-5 business days.
          </AlertDescription>
        </Alert>

        <Card className="border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Professional Credentials"}
              {currentStep === 3 && "Verification Documents"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Please provide your basic information"}
              {currentStep === 2 && "Tell us about your medical expertise and experience"}
              {currentStep === 3 && "Upload required documents for verification"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <>
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
                    <Label htmlFor="organization">Primary Healthcare Organization *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      placeholder="Hospital, clinic, or medical institution"
                      className="mt-1 border-gray-200"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile (Optional)</Label>
                    <Input
                      id="linkedIn"
                      value={formData.linkedIn}
                      onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="mt-1 border-gray-200"
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <Label htmlFor="credentials">Medical Credentials *</Label>
                    <Select onValueChange={(value) => handleInputChange("credentials", value)}>
                      <SelectTrigger className="w-full border-gray-200 mt-1">
                        <SelectValue placeholder="Select your primary credential" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="md">MD (Doctor of Medicine)</SelectItem>
                        <SelectItem value="do">DO (Doctor of Osteopathic Medicine)</SelectItem>
                        <SelectItem value="rn">RN (Registered Nurse)</SelectItem>
                        <SelectItem value="np">NP (Nurse Practitioner)</SelectItem>
                        <SelectItem value="pa">PA (Physician Assistant)</SelectItem>
                        <SelectItem value="paramedic">Paramedic</SelectItem>
                        <SelectItem value="rt">RT (Respiratory Therapist)</SelectItem>
                        <SelectItem value="other">Other Healthcare Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger className="w-full border-gray-200 mt-1">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-15">11-15 years</SelectItem>
                        <SelectItem value="16-20">16-20 years</SelectItem>
                        <SelectItem value="20+">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Areas of Specialization *</Label>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {specializations.map((spec) => (
                        <label key={spec} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onChange={(e) => {
                              const current = formData.specializations;
                              if (e.target.checked) {
                                handleInputChange("specializations", [...current, spec]);
                              } else {
                                handleInputChange("specializations", current.filter(s => s !== spec));
                              }
                            }}
                          />
                          <span className="text-sm text-gray-700">{spec}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Professional Bio *</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      placeholder="Describe your medical background, teaching experience, and expertise..."
                      className="mt-1 border-gray-200 min-h-[120px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="references">Professional References *</Label>
                    <Textarea
                      id="references"
                      value={formData.references}
                      onChange={(e) => handleInputChange("references", e.target.value)}
                      placeholder="Please provide contact information for 2-3 professional references (name, title, organization, phone, email)"
                      className="mt-1 border-gray-200 min-h-[100px]"
                      required
                    />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="resume">Resume/CV *</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload your resume or CV</p>
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileUpload("resume", e.target.files)}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("resume")?.click()}
                        >
                          Choose File
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">PDF, DOC, or DOCX (max 5MB)</p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="certifications">Medical Certifications *</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload copies of your medical licenses and certifications</p>
                        <input
                          type="file"
                          id="certifications"
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple
                          onChange={(e) => handleFileUpload("certifications", e.target.files)}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("certifications")?.click()}
                        >
                          Choose Files
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">PDF, JPG, PNG (max 5MB each)</p>
                      </div>
                    </div>

                    <Alert className="border-blue-200 bg-blue-50">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Verification Process:</strong> After submission, our team will:
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Verify your medical credentials and licenses</li>
                          <li>Contact your professional references</li>
                          <li>Conduct a background check</li>
                          <li>Review your teaching qualifications</li>
                        </ul>
                        You'll receive updates via email throughout the process.
                      </AlertDescription>
                    </Alert>
                  </div>
                </>
              )}

              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="border-gray-200"
                    >
                      Previous
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      className="border-gray-200"
                      asChild
                    >
                      <Link to="/">Cancel</Link>
                    </Button>
                  )}
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Application
                    </Button>
                  )}
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

export default InstructorRegistration;
