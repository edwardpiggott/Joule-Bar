import { Menu, Search, Bell, HelpCircle, ChevronDown, Sun, MoreHorizontal, ChevronRight, ChevronLeft, User, Phone, Calendar, CheckCircle, MessageCircle, Grid3x3, Mic, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from '../imports/svg-0b73em4nnl';
import shellSvgPaths from '../imports/svg-qmq5w2efm7';
import inactiveSvgPaths from '../imports/svg-siq4xmxfxa';
import gusImage from 'figma:asset/0c6ef392efb330c81e2c50ebf6688b74ce1be2b0.png';
import jadaImage from 'figma:asset/b55ac1493ee90923b32a184474288098d5ab8fb4.png';

interface StaticBackgroundProps {
  persona?: 'Employee' | 'Manager';
  onJouleClick?: () => void;
  jouleActive?: boolean;
}

export function StaticBackground({ persona = 'Employee', onJouleClick, jouleActive = false }: StaticBackgroundProps) {
  // Determine user info based on persona
  const userName = persona === 'Employee' ? 'Gus' : 'Jada';
  const userPhoto = persona === 'Employee' ? gusImage : jadaImage;

  // Get today's date
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });

  // Calculate training program dates (1 month from today, 7-day period)
  const trainingStartDate = new Date(today);
  trainingStartDate.setMonth(trainingStartDate.getMonth() + 1);
  const trainingEndDate = new Date(trainingStartDate);
  trainingEndDate.setDate(trainingEndDate.getDate() + 7);

  const trainingPeriod = `${trainingStartDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })} - ${trainingEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

  // Get season-appropriate weather for northern hemisphere
  const getSeasonalWeather = (month: number) => {
    if (month === 11 || month === 0 || month === 1) {
      // December, January, February - Winter
      return { temp: '2°C', icon: '❄️' };
    } else if (month === 2 || month === 3 || month === 4) {
      // March, April, May - Spring
      return { temp: '12°C', icon: '🌸' };
    } else if (month === 5 || month === 6 || month === 7) {
      // June, July, August - Summer
      return { temp: '24°C', icon: '☀️' };
    } else {
      // September, October, November - Fall
      return { temp: '14°C', icon: '🍂' };
    }
  };

  const weather = getSeasonalWeather(today.getMonth());

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b8dff5] to-[#d1efff] relative">
      {/* Header - Shell Bar */}
      <header className="bg-white h-[48px] relative z-10">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left section */}
          <div className="flex items-center gap-2">
            {/* Menu icon */}
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={shellSvgPaths.p56ff0} fill="#131E29" />
              </svg>
            </button>
            
            {/* SAP Logo */}
            <div className="h-[26px] w-[52px] ml-2">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 26">
                <defs>
                  <linearGradient id="paint0_linear_shell" x1="0" x2="0" y1="0" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B9F2" />
                    <stop offset="1" stopColor="#0072BC" />
                  </linearGradient>
                </defs>
                <path clipRule="evenodd" d="M26 26L52 0H0V26H26Z" fill="url(#paint0_linear_shell)" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p13501980} fill="#FFFFFE" fillRule="evenodd" />
              </svg>
            </div>
            
            {/* Home Menu Button */}
            <button className="flex items-center gap-1.5 px-2.5 py-2 hover:bg-gray-100 rounded-lg ml-2">
              <span className="font-['72:Bold',sans-serif] text-[16px] text-[#131e29]">Home</span>
              <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={shellSvgPaths.p1663edb0} fill="#131E29" />
              </svg>
            </button>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative bg-[#f5f6f7] rounded-[48px] h-[36px] flex items-center px-4">
              <input
                type="text"
                placeholder="Search for people or Action"
                disabled
                className="flex-1 bg-transparent border-none outline-none font-['72:Italic',sans-serif] italic text-[14px] text-[#979797] placeholder:text-[#979797]"
              />
              <div className="flex items-center gap-2">
                {/* Microphone icon */}
                <button className="p-1 hover:bg-gray-200 rounded">
                  <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                    <path d={shellSvgPaths.pa403570} fill="#0070F2" />
                  </svg>
                </button>
                {/* Send button */}
                <button className="bg-[#0070F2] rounded-full w-[26px] h-[26px] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                    <circle cx="13" cy="13" fill="#0070F2" r="13" />
                    <path d={shellSvgPaths.p3c6f3700} fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Help icon */}
            <button className="p-2.5 hover:bg-gray-100 rounded-lg">
              <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_help)">
                  <path d={shellSvgPaths.p29415600} fill="#131E29" />
                </g>
                <defs>
                  <clipPath id="clip0_help">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            
            {/* Feedback icon */}
            <button className="p-2.5 hover:bg-gray-100 rounded-lg">
              <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_feedback)">
                  <path d={shellSvgPaths.p2c3d2af2} fill="#131E29" />
                  <path d={shellSvgPaths.p3b3f5b00} fill="#131E29" />
                  <path d={shellSvgPaths.p63bb580} fill="#131E29" />
                  <path clipRule="evenodd" d={shellSvgPaths.pb28c500} fill="#131E29" fillRule="evenodd" />
                  <path d={shellSvgPaths.p199fa180} fill="#131E29" />
                </g>
                <defs>
                  <clipPath id="clip0_feedback">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            
            {/* Joule Icon - Toggle between inactive and active */}
            {jouleActive ? (
              <button 
                className="bg-white flex items-center justify-center w-[36px] h-[36px] p-[10px] rounded-[8px] hover:bg-gray-50 transition-colors"
                onClick={onJouleClick}
                title="Open Joule"
              >
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={shellSvgPaths.pce83900} fill="#5D36FF" />
                </svg>
              </button>
            ) : (
              <div className="relative">
                {/* Bouncing Gradient Circle Animation */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #0070f2 0%, #5d36ff 50%, #a100c2 100%)',
                    opacity: 0.6,
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #5d36ff 0%, #a100c2 50%, #e0aaff 100%)',
                    opacity: 0.4,
                  }}
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
                <button 
                  className="relative bg-transparent p-2.5 rounded-lg hover:bg-gray-100 transition-colors z-10"
                  onClick={onJouleClick}
                  title="Open Joule"
                >
                  <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g clipPath="url(#clip0_joule)">
                      <g>
                        <path 
                          d={inactiveSvgPaths.p3e9c600} 
                          fill="#131E29" 
                        />
                        <path 
                          clipRule="evenodd" 
                          d={inactiveSvgPaths.p1a20ed00} 
                          fill="#131E29" 
                          fillRule="evenodd" 
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_joule">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            )}
            
            {/* Bell icon */}
            <button className="p-2.5 hover:bg-gray-100 rounded-lg">
              <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={shellSvgPaths.p2f6100} fill="#131E29" />
              </svg>
            </button>
            
            {/* Profile picture */}
            <img
              src={userPhoto}
              alt="User profile"
              className="w-8 h-8 rounded-full object-cover object-top scale-125"
            />
            
            {/* Apps menu */}
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={shellSvgPaths.p1a397700} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p2e48c600} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p30aafc00} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p59ddd00} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p3dd58618} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p3d728000} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p29729c80} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p277ae740} fill="#1D2D3E" fillRule="evenodd" />
                <path clipRule="evenodd" d={shellSvgPaths.p1ca5c380} fill="#1D2D3E" fillRule="evenodd" />
              </svg>
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
            <span>{weather.temp}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="mb-6">Good morning, {userName}!</h1>
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
                  <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Congratulations! You have started a new role. Now, time to get to know your colleagues better.
                </p>
                <Button variant="link" className="text-xs p-0 h-auto text-blue-600 hover:text-blue-800 transition-colors cursor-pointer" onClick={() => {}}>
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
            <Badge variant="secondary" className="bg-white cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {}}>All (5)</Badge>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
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
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Period</span>
                <span>{trainingPeriod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type</span>
                <span>Compulsory</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="link" className="text-xs p-0 h-auto hover:text-blue-800 transition-colors cursor-pointer" onClick={() => {}}>View All (2)</Button>
              <div className="flex gap-2">
                <Button size="icon" className="h-8 w-8 bg-green-100 hover:bg-green-200 text-green-700 transition-colors cursor-pointer" onClick={() => {}}>
                  ✓
                </Button>
                <Button size="icon" className="h-8 w-8 bg-pink-100 hover:bg-pink-200 text-pink-700 transition-colors cursor-pointer" onClick={() => {}}>
                  ✕
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm">Provide Personal Details</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-900 mb-2">Review your personal details and enter...</p>
            <p className="text-xs text-gray-600 mb-4">Due soon</p>
            <Badge className="bg-red-500 text-white text-xs mb-4">Due in 19 days</Badge>
            <Button variant="outline" className="w-full text-xs hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => {}}>Review</Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm mb-1">Information Security Overview</h3>
                <p className="text-xs text-gray-600">In Your Learning Assignments</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
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
            <Button variant="link" className="text-xs p-0 h-auto hover:text-blue-800 transition-colors cursor-pointer" onClick={() => {}}>Take Course Now</Button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm mb-1">Information Security Overview</h3>
                <p className="text-xs text-gray-600">In Your Learning Assignments</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
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
            <Button variant="link" className="text-xs p-0 h-auto hover:text-blue-800 transition-colors cursor-pointer" onClick={() => {}}>Take Course Now</Button>
          </div>
        </div>
      </div>

      {/* Organizational Updates Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800">Organizational Updates</h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-white cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {}}>All (8)</Badge>
            <Badge variant="outline" className="bg-transparent border-white text-gray-700 cursor-pointer hover:bg-white/10 transition-colors" onClick={() => {}}>Updates (2)</Badge>
            <Badge variant="outline" className="bg-transparent border-white text-gray-700 cursor-pointer hover:bg-white/10 transition-colors" onClick={() => {}}>Health & Wellbeing (2)</Badge>
            <div className="flex gap-1 ml-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
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
            <Button variant="link" className="text-blue-600 text-sm hover:text-blue-800 transition-colors cursor-pointer" onClick={() => {}}>
              🎯 Show Me
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
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
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => {}}>
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