import { useState } from 'react';
import { Menu, Search, Bell, HelpCircle, Grid3x3, ChevronDown, MessageCircle, FileText, CheckCircle, MapPin, Calendar, Edit, User, Building2, DollarSign, Clock, Heart, Target, Users, BookOpen, ClipboardList, ExternalLink, Star, Home } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CompensationPage } from './CompensationPage';
import svgPaths from '../imports/svg-0b73em4nnl';

interface ProfilePageProps {
  onBack: () => void;
  onToggleJoule: () => void;
}

export function ProfilePage({ onBack, onToggleJoule }: ProfilePageProps) {
  const [activeSection, setActiveSection] = useState('personal-data');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3">
          {/* Left section */}
          <div className="flex items-center gap-4 lg:gap-5 xl:gap-6">
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded">
              <Menu className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-700" />
            </button>
            <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3">
              <button onClick={onBack} className="hover:opacity-80 transition-opacity" title="Home">
                <svg className="h-6 lg:h-7 xl:h-8 w-auto" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="sapGrad2" x1="0" y1="0" x2="0" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00B9F2" />
                      <stop offset="1" stopColor="#0072BC" />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" clipRule="evenodd" d="M26 26L52 0H0V26H26Z" fill="url(#sapGrad2)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.1603 12.5854H30.0322V8.46083H31.1603C32.6639 8.46083 33.8636 8.96061 33.8636 10.4961C33.8636 12.0849 32.6639 12.5854 31.1603 12.5854V12.5854ZM19.0291 15.5263C18.4318 15.5263 17.8721 15.4223 17.3897 15.2403L19.0118 10.1212H19.0421L20.6368 15.2541C20.1572 15.4245 19.6105 15.5263 19.0291 15.5263ZM30.8598 5.11261L25.7407 5.10972V17.2799L21.2694 5.10972H16.8357L13.0181 15.288C12.6114 12.7212 9.95656 11.8351 7.86789 11.1706C6.48917 10.7279 5.02522 10.0764 5.03967 9.35639C5.0505 8.76561 5.824 8.21672 7.35656 8.29906C8.38644 8.35394 9.295 8.437 11.1027 9.30872L12.8808 6.21256C11.2306 5.37261 8.95122 4.84178 7.08283 4.83961H7.07128C4.89306 4.83961 3.07739 5.54594 1.95217 6.70944C1.16783 7.52194 0.744611 8.55328 0.727278 9.69511C0.698389 11.2652 1.27472 12.3796 2.48444 13.2687C3.50639 14.0176 4.81361 14.5037 5.96556 14.8604C7.38617 15.301 8.54606 15.6831 8.53306 16.4999C8.52222 16.7967 8.40956 17.0741 8.19578 17.2987C7.84189 17.6641 7.29733 17.8013 6.54622 17.8158C5.09672 17.8461 4.02061 17.6193 2.30822 16.6068L0.727278 19.747C2.43533 20.7191 4.45828 21.2889 6.52167 21.2889L6.78744 21.2861C8.58361 21.2536 10.0338 20.7415 11.1916 19.8091C11.258 19.7564 11.3179 19.7015 11.3793 19.6473L10.8658 21.0188H15.5155L16.2962 18.6449C17.1131 18.9244 18.0418 19.0782 19.0291 19.0782C19.9904 19.0782 20.8953 18.9316 21.697 18.6687L22.4488 21.0188H30.0322V16.1048H31.6853C35.6843 16.1048 38.0488 14.0689 38.0488 10.6571C38.0488 6.85678 35.7507 5.11261 30.8598 5.11261V5.11261Z" fill="#FFFFFE" />
                </svg>
              </button>
              <button className="flex items-center gap-1 lg:gap-1.5 px-2 lg:px-2.5 xl:px-3 py-1 lg:py-1.5 hover:bg-gray-100 rounded transition-colors">
                <span className="font-medium text-gray-900 text-[14px] lg:text-[15px] xl:text-[16px]">Employee Files</span>
                <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-8 lg:mx-10 xl:mx-12">
            <div className="relative">
              <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for actions or people"
                className="w-full pl-10 lg:pl-12 xl:pl-14 pr-4 lg:pr-5 xl:pr-6 py-1.5 lg:py-2 xl:py-2.5 bg-gray-50 border border-gray-200 rounded text-sm lg:text-[15px] xl:text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-1 lg:gap-2 xl:gap-2.5">
            <button 
              onClick={onToggleJoule}
              className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full transition-colors"
              title="Open Joule"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g>
                  <path d={svgPaths.p34106400} fill="#5A6C7D" />
                  <path clipRule="evenodd" d={svgPaths.p3ccea780} fill="#5A6C7D" fillRule="evenodd" />
                </g>
              </svg>
            </button>
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full transition-colors">
              <CheckCircle className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" className="text-gray-600"/>
                <circle cx="12" cy="11" r="2" className="text-gray-600"/>
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                4
              </span>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE3Njk4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="User profile"
                className="w-7 h-7 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-white border-b border-gray-200 px-6 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-gray-900">People Profile</h1>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white hover:bg-gray-50 transition-colors"
            >
              Public Profile
            </Button>
            <Button 
              variant="outline"
              size="sm" 
              className="bg-white hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              As of Today
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              {/* Profile Header */}
              <div className="relative">
                {/* Cover Photo */}
                <div className="h-32 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1662550112960-668bb38ad6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNzUzODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Profile background" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Profile Picture */}
                <div className="absolute -bottom-12 left-6">
                  <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden shadow-md">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop"
                      alt="Jada Baker"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* All Actions Button */}
                <div className="absolute top-2 right-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-2 shadow-md">
                    <ExternalLink className="w-4 h-4" />
                    All Actions
                  </Button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="pt-14 px-6 pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-gray-900">Jada Baker</h2>
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 mb-2">She/Her/Hers</p>
                <p className="text-sm text-blue-600 hover:underline cursor-pointer mb-1">
                  Program Management Office
                </p>
                <p className="text-sm text-gray-700 mb-3">Production US (50150011)</p>
                <button className="text-sm text-blue-600 hover:underline font-medium">
                  Direct Reports: 5
                </button>
              </div>

              {/* Navigation Menu */}
              <nav className="pb-4">
                {[
                  { id: 'personal-data', icon: User, label: 'Personal Data' },
                  { id: 'job-data', icon: Building2, label: 'Job Data' },
                  { id: 'compensation', icon: DollarSign, label: 'Compensation' },
                  { id: 'time-management', icon: Clock, label: 'Time Management' },
                  { id: 'benefits', icon: Heart, label: 'Benefits' },
                  { id: 'performance', icon: Target, label: 'Performance and Goals' },
                  { id: 'succession', icon: Users, label: 'Succession' },
                  { id: 'learning', icon: BookOpen, label: 'Learning and Development' },
                  { id: 'talent', icon: ClipboardList, label: 'Talent Profile' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-6 py-3 flex items-center gap-3 transition-all cursor-pointer ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-l-4 border-transparent active:bg-gray-200'
                      }`}
                    >
                      <Icon className={`w-5 h-5 flex-shrink-0 ${activeSection === item.id ? 'text-blue-600' : ''}`} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {activeSection === 'compensation' ? (
              <>
                <h2 className="mb-6 text-gray-900">Compensation</h2>
                <CompensationPage />
              </>
            ) : (
              <>
                <h2 className="mb-6 text-gray-900">Personal Data</h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Personal Information Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Personal Information</h3>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-600">First Name:</div>
                    <div className="text-gray-900">Jada</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Last Name:</div>
                    <div className="text-gray-900">Baker</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Salutation:</div>
                    <div className="text-gray-900">Miss</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Preferred Name:</div>
                    <div className="text-gray-900">Jada</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Global Information:</div>
                    <div className="text-gray-900">United States</div>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline text-sm mt-4 transition-colors">
                  View All
                </button>
              </div>

              {/* Biographical Information Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Biographical Information</h3>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-600">Person Id:</div>
                    <div className="text-gray-900">B029B2</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Date Of Birth:</div>
                    <div className="text-gray-900">May 21, 1983</div>
                  </div>
                  <div>
                    <div className="text-gray-600">County Of Birth:</div>
                    <div className="text-gray-900">United States</div>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline text-sm mt-4 transition-colors">
                  View All
                </button>
              </div>

              {/* Addresses Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Addresses</h3>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-600">Address Type:</div>
                    <div className="text-gray-900">Home</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Country:</div>
                    <div className="text-gray-900">United States</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Address Line 1:</div>
                    <div className="text-gray-900">2233 Elm Street</div>
                  </div>
                  <div>
                    <div className="text-gray-600">City:</div>
                    <div className="text-gray-900">Newark</div>
                  </div>
                  <div>
                    <div className="text-gray-600">State:</div>
                    <div className="text-gray-900">New Jersey</div>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline text-sm mt-4 transition-colors">
                  View All
                </button>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Contact Information</h3>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-600">Business</div>
                      <div className="text-sm text-blue-600">+1 732 273-3543</div>
                    </div>
                    <span className="text-orange-500">⭐</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      ✉️
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-600">Business</div>
                      <div className="text-sm text-blue-600 hover:underline">
                        Jada.Baker@bestrunisap.com
                      </div>
                    </div>
                    <span className="text-orange-500">⭐</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline text-sm mt-4 transition-colors">
                  View All
                </button>
              </div>

              {/* Primary Emergency Contact Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Primary Emergency Contact</h3>
                </div>
                <div className="space-y-3 text-sm">
                  {/* David Baker */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 text-sm">DB</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900">David Baker</div>
                      <div className="text-gray-600">Parent</div>
                    </div>
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500 flex-shrink-0" />
                    <div className="text-blue-600">(732) 555-9900</div>
                  </div>
                  
                  {/* Louise Baker */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 text-sm">LB</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900">Louise Baker</div>
                      <div className="text-gray-600">Parent</div>
                    </div>
                    <div className="text-blue-600 ml-auto">(732) 555-9900</div>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline text-sm mt-4 transition-colors">
                  View All
                </button>
              </div>
            </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}