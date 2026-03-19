import { useState } from 'react';
import { Menu, Search, Bell, HelpCircle, Settings, Grid3x3, ChevronDown, Sun, MoreHorizontal, ChevronRight, ChevronLeft, ArrowRight, User, Phone, Calendar, CheckCircle, MessageCircle, FileText, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from '../imports/svg-0b73em4nnl';

interface HomepageProps {
  onNavigateToProfile: () => void;
  onToggleJoule: () => void;
}

export function Homepage({ onNavigateToProfile, onToggleJoule }: HomepageProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const showJadaBakerResult = searchValue.toLowerCase().includes('jada') || searchValue.toLowerCase().includes('baker');

  // Get today's date
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b8dff5] to-[#d1efff] relative">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 relative z-10">
        <div className="flex items-center justify-between px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3">
          {/* Left section */}
          <div className="flex items-center gap-4 lg:gap-5 xl:gap-6">
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded">
              <Menu className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-700" />
            </button>
            <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3">
              <button className="hover:opacity-80 transition-opacity" title="Home">
                <svg className="h-6 lg:h-7 xl:h-8 w-auto" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="sapGrad" x1="0" y1="0" x2="0" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00B9F2" />
                      <stop offset="1" stopColor="#0072BC" />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" clipRule="evenodd" d="M26 26L52 0H0V26H26Z" fill="url(#sapGrad)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.1603 12.5854H30.0322V8.46083H31.1603C32.6639 8.46083 33.8636 8.96061 33.8636 10.4961C33.8636 12.0849 32.6639 12.5854 31.1603 12.5854V12.5854ZM19.0291 15.5263C18.4318 15.5263 17.8721 15.4223 17.3897 15.2403L19.0118 10.1212H19.0421L20.6368 15.2541C20.1572 15.4245 19.6105 15.5263 19.0291 15.5263ZM30.8598 5.11261L25.7407 5.10972V17.2799L21.2694 5.10972H16.8357L13.0181 15.288C12.6114 12.7212 9.95656 11.8351 7.86789 11.1706C6.48917 10.7279 5.02522 10.0764 5.03967 9.35639C5.0505 8.76561 5.824 8.21672 7.35656 8.29906C8.38644 8.35394 9.295 8.437 11.1027 9.30872L12.8808 6.21256C11.2306 5.37261 8.95122 4.84178 7.08283 4.83961H7.07128C4.89306 4.83961 3.07739 5.54594 1.95217 6.70944C1.16783 7.52194 0.744611 8.55328 0.727278 9.69511C0.698389 11.2652 1.27472 12.3796 2.48444 13.2687C3.50639 14.0176 4.81361 14.5037 5.96556 14.8604C7.38617 15.301 8.54606 15.6831 8.53306 16.4999C8.52222 16.7967 8.40956 17.0741 8.19578 17.2987C7.84189 17.6641 7.29733 17.8013 6.54622 17.8158C5.09672 17.8461 4.02061 17.6193 2.30822 16.6068L0.727278 19.747C2.43533 20.7191 4.45828 21.2889 6.52167 21.2889L6.78744 21.2861C8.58361 21.2536 10.0338 20.7415 11.1916 19.8091C11.258 19.7564 11.3179 19.7015 11.3793 19.6473L10.8658 21.0188H15.5155L16.2962 18.6449C17.1131 18.9244 18.0418 19.0782 19.0291 19.0782C19.9904 19.0782 20.8953 18.9316 21.697 18.6687L22.4488 21.0188H30.0322V16.1048H31.6853C35.6843 16.1048 38.0488 14.0689 38.0488 10.6571C38.0488 6.85678 35.7507 5.11261 30.8598 5.11261V5.11261Z" fill="#FFFFFE" />
                </svg>
              </button>
              <button className="flex items-center gap-1 lg:gap-1.5 px-2 lg:px-2.5 xl:px-3 py-1 lg:py-1.5 hover:bg-gray-100 rounded">
                <span className="font-medium text-gray-900 text-[14px] lg:text-[15px] xl:text-[16px]">Home</span>
                <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-8 lg:mx-10 xl:mx-12 relative">
            <div className="relative">
              <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for actions or people"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full pl-10 lg:pl-12 xl:pl-14 pr-4 lg:pr-5 xl:pr-6 py-2 lg:py-2.5 xl:py-3 text-[14px] lg:text-[15px] xl:text-[16px] bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Search Helper Dropdown */}
            {isSearchFocused && !showJadaBakerResult && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-6 lg:p-8 xl:p-10 z-50">
                <h3 className="mb-4 lg:mb-5 xl:mb-6 text-[14px] lg:text-[15px] xl:text-[16px]">You can search for:</h3>
                <div className="space-y-4 lg:space-y-5">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-[14px] lg:text-[15px] xl:text-[16px]">
                      Action keywords, such as "address", "goal", or "badge".
                    </p>
                  </div>
                  <div className="flex items-start gap-3 lg:gap-4">
                    <User className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-[14px] lg:text-[15px] xl:text-[16px]">Employee name</p>
                  </div>
                </div>
              </div>
            )}

            {/* Search Results - Jada Baker */}
            {isSearchFocused && showJadaBakerResult && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {/* Employee Result Card */}
                <div 
                  className="p-4 lg:p-5 xl:p-6 hover:bg-gray-50 cursor-pointer border-b border-gray-200 transition-colors"
                  onClick={onNavigateToProfile}
                >
                  <div className="flex items-center gap-4 lg:gap-5 xl:gap-6">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
                      alt="Jada Baker"
                      className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium text-gray-900 text-[14px] lg:text-[15px] xl:text-[16px]">Jada Baker</span>
                        <span className="text-gray-600 text-[13px] lg:text-[14px] xl:text-[15px]">(jbaker)</span>
                      </div>
                      <div className="text-sm lg:text-[15px] xl:text-[16px] text-gray-700 mt-1">Program Management Office</div>
                      <div className="flex items-center gap-1 text-sm lg:text-[15px] xl:text-[16px] text-gray-700 mt-1">
                        <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5" />
                        <span>(1) 732 273-3543</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-blue-600">
                      <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
                    </Button>
                  </div>
                </div>

                {/* Directory Search Link */}
                <div className="p-4 lg:p-5 xl:p-6">
                  <button className="text-blue-600 hover:underline text-sm lg:text-[15px] xl:text-[16px]">
                    Search "Jada Baker" in Directory Search
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3">
            {/* Diamond icon - Joule */}
            <button 
              onClick={onToggleJoule}
              className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full"
              title="Open Joule"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g>
                  <path d={svgPaths.p34106400} fill="#5A6C7D" />
                  <path clipRule="evenodd" d={svgPaths.p3ccea780} fill="#5A6C7D" fillRule="evenodd" />
                </g>
              </svg>
            </button>
            
            {/* Check circle - no badge */}
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full">
              <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-600" />
            </button>
            
            {/* User message icon */}
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" className="text-gray-600"/>
                <circle cx="12" cy="11" r="2" className="text-gray-600"/>
              </svg>
            </button>
            
            {/* Comments icon */}
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full">
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-600" />
            </button>
            
            {/* Help icon */}
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full">
              <HelpCircle className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-600" />
            </button>
            
            {/* Bell with badge */}
            <button className="p-2 lg:p-2.5 xl:p-3 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs lg:text-sm rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
                4
              </span>
            </button>
            
            {/* Profile picture */}
            <button className="p-1 lg:p-1.5 hover:bg-gray-100 rounded-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE3Njk4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="User profile"
                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Date and Weather */}
      <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-10 pt-6 lg:pt-8 xl:pt-10 pb-4 lg:pb-5 xl:pb-6">
        <div className="flex items-center gap-3 lg:gap-4 text-gray-800 text-[14px] lg:text-[15px] xl:text-[16px]">
          <span>{dateString}</span>
          <div className="h-4 lg:h-5 w-px bg-gray-400"></div>
          <div className="flex items-center gap-1 lg:gap-1.5">
            <Sun className="w-5 h-5 lg:w-6 lg:h-6" />
            <span>24°C</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="mb-6">Good morning, Geoff!</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  Manage Goals
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  View Payslip
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  Take Time Off
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  Create a Ticket
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  View Your Workflows
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  Appreciate a Colleague
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Side Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm w-80 flex items-start gap-3">
              <ImageWithFallback src="https://images.unsplash.com/photo-1758873268911-86716215d7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb3dvcmtlcnMlMjBtZWV0aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYwOTU3NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Team meeting" className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">🎉 Meet With Your Co-Workers</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Congratulations! You have started a new role. Now, time to get to know your colleagues better. Take a lunch break and start creating your own network!
                </p>
                <Button variant="link" className="text-xs p-0 h-auto text-blue-600">
                  Launch Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For You Today Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800">For You Today</h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-white">All (5)</Badge>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-40">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-40">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm mb-1">New Hire Training Program</h3>
                <p className="text-xs text-gray-600">Global Employee Onboarding</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Period</span>
                <span>Oct 10, 24 - Oct 17, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type</span>
                <span>Compulsory</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="link" className="text-xs p-0 h-auto">View All (2)</Button>
              <div className="flex gap-2">
                <Button size="icon" className="h-8 w-8 bg-green-100 hover:bg-green-200 text-green-700">
                  ✓
                </Button>
                <Button size="icon" className="h-8 w-8 bg-pink-100 hover:bg-pink-200 text-pink-700">
                  ✕
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm">Provide Personal Details</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-900 mb-2">Review your personal details and enter...</p>
            <p className="text-xs text-gray-600 mb-4">Due soon</p>
            <Badge className="bg-red-500 text-white text-xs mb-4">Due in 19 days</Badge>
            <Button variant="outline" className="w-full text-xs">Review</Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm mb-1">Information Security Overview</h3>
                <p className="text-xs text-gray-600">In Your Learning Assignments</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Course Type</span>
                <span>Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span>3.0 Hours</span>
              </div>
            </div>
            <Button variant="link" className="text-xs p-0 h-auto">Take Course Now</Button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm mb-1">Information Security Overview</h3>
                <p className="text-xs text-gray-600">In Your Learning Assignments</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Course Type</span>
                <span>Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span>3.5 Hours</span>
              </div>
            </div>
            <Button variant="link" className="text-xs p-0 h-auto">Take Course Now</Button>
          </div>
        </div>
      </div>

      {/* Organizational Updates Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800">Organizational Updates</h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-white">All (8)</Badge>
            <Badge variant="outline" className="bg-transparent border-white text-gray-700">Updates (2)</Badge>
            <Badge variant="outline" className="bg-transparent border-white text-gray-700">Health & Wellbeing (2)</Badge>
            <div className="flex gap-1 ml-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <OrgUpdateCard
            image="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop"
            title="Upgrade Your Mobile Toolkit"
            subtitle="Apps for employees"
          />
          <OrgUpdateCard
            image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=200&fit=crop"
            title="Check Team Calendar"
            subtitle="for vacation and absences"
          />
          <OrgUpdateCard
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop"
            title="Explore Mentoring and Coaching"
            subtitle="at SAP"
          />
          <OrgUpdateCard
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
            title="Staying Healthy and Balanced"
            subtitle="Access the offerings for you"
          />
        </div>
      </div>

      {/* Explore More Section */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800">Explore More</h2>
          <div className="flex items-center gap-2">
            <Button variant="link" className="text-blue-600 text-sm">
              🎯 Show Me
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Grid3x3 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="mb-2">Learning: Mandatory</h3>
              <p className="text-sm text-gray-600">Track your progress on mandatory e-learning courses</p>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrgUpdateCard({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-sm mb-1">{title}</h3>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}