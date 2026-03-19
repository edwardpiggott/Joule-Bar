import { Download, ExternalLink, AlertTriangle, Edit, RotateCcw, ChevronRight, DollarSign, TrendingUp, FileText, Award, Inbox, Star, BarChart3, Trophy } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface CompensationPageProps {
  onBack?: () => void;
}

export function CompensationPage({ onBack }: CompensationPageProps) {
  const salaryHistory = [
    { year: '2024', salary: '$153,973', increase: '+8.2%', color: 'emerald' },
    { year: '2023', salary: '$142,300', increase: '+5.8%', color: 'blue' },
    { year: '2022', salary: '$134,500', increase: '+6.5%', color: 'violet' },
    { year: '2021', salary: '$126,300', increase: '+4.2%', color: 'amber' },
  ];

  const bonusHistory = [
    { year: '2024', amount: '$23,095', percentage: '15%', type: 'Annual Performance' },
    { year: '2023', amount: '$21,345', percentage: '15%', type: 'Annual Performance' },
  ];

  return (
    <div className="max-w-7xl">
      {/* Detailed Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Salary History */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <h4 className="text-gray-900">Salary History</h4>
            </div>

            <div className="space-y-2">
              {salaryHistory.map((item, index) => (
                <div
                  key={item.year}
                  className="relative p-3 bg-gradient-to-r from-gray-50 to-transparent rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">{item.year}</span>
                    <Badge 
                      className={`text-xs ${
                        index === 0 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-blue-100 text-blue-700'
                      } hover:${index === 0 ? 'bg-emerald-100' : 'bg-blue-100'}`}
                    >
                      {item.increase}
                    </Badge>
                  </div>
                  <div className="text-gray-900">{item.salary}</div>
                  {index === 0 && (
                    <div className="absolute -right-1.5 -top-1.5 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 p-2.5 bg-blue-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-0.5">4-Year Growth</div>
              <div className="text-sm text-blue-700">+21.9% ($27,673)</div>
            </div>
          </div>
        </Card>

        {/* Bonus History */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center">
                <Award className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <h4 className="text-gray-900">Bonus History</h4>
            </div>

            <div className="space-y-2.5">
              {bonusHistory.map((bonus, index) => (
                <div
                  key={bonus.year}
                  className="p-3 bg-gradient-to-r from-amber-50 to-transparent rounded-lg border border-amber-100 hover:border-amber-200 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-gray-900">{bonus.year}</span>
                      {index === 0 && (
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 text-xs">
                          Latest
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-600">{bonus.percentage}</span>
                  </div>
                  <div className="text-gray-900 mb-0.5">{bonus.amount}</div>
                  <div className="text-xs text-gray-600">{bonus.type}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-2.5 bg-amber-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-0.5">Total Bonuses (2 Years)</div>
              <div className="text-sm text-amber-700">$44,440</div>
              <div className="text-xs text-gray-500 mt-0.5">Average: $22,220/year</div>
            </div>
          </div>
        </Card>

        {/* Performance Details */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
                <Trophy className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <h4 className="text-gray-900">Performance Details</h4>
            </div>

            <div className="space-y-3">
              {/* Overall Rating */}
              <div className="p-3 bg-gradient-to-br from-purple-50 to-transparent rounded-lg border border-purple-100">
                <div className="text-xs text-gray-600 mb-1.5">Overall Rating</div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="text-2xl text-gray-900">4.5</div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      ))}
                      <div className="relative w-3.5 h-3.5">
                        <Star className="w-3.5 h-3.5 text-gray-300 absolute" />
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 absolute" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-0.5">out of 5.0</span>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 text-xs">
                  Exceeds Expectations
                </Badge>
              </div>

              {/* Key Metrics */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-700">Goal Achievement</span>
                  <span className="text-xs text-gray-900">95%</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-700">Team Leadership</span>
                  <span className="text-xs text-gray-900">Excellent</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-700">Innovation</span>
                  <span className="text-xs text-gray-900">Outstanding</span>
                </div>
              </div>

              {/* Review Date */}
              <div className="pt-2.5 border-t border-gray-200">
                <div className="text-xs text-gray-600">Last Review Date</div>
                <div className="text-xs text-gray-900 mt-0.5">December 15, 2024</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Compensation Information */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-gray-900">Compensation Information</h3>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Alert">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Edit">
                  <Edit className="w-4 h-4 text-blue-600" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Refresh">
                  <RotateCcw className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>

            {/* Donut Chart */}
            <div className="relative mb-8 py-4">
              <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto drop-shadow-sm">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="28"
                />
                {/* Blue segment (Base Salary) - 97.8% */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="28"
                  strokeDasharray="430 440"
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                  className="drop-shadow-md"
                />
                {/* Orange segment (Meal Allowance) - 2.2% */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="28"
                  strokeDasharray="10 440"
                  strokeDashoffset="-430"
                  transform="rotate(-90 100 100)"
                />
                {/* Center background */}
                <circle cx="100" cy="100" r="55" fill="white" />
                {/* Center text - Total */}
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  className="text-xs fill-gray-500"
                  style={{ fontSize: '10px' }}
                >
                  Total
                </text>
                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  className="fill-gray-900"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  $157,573
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm text-gray-700">Base Salary USA</span>
                </div>
                <span className="text-sm text-gray-900">$153,973</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="text-sm text-gray-700">Meal Allowance USA</span>
                </div>
                <span className="text-sm text-gray-900">$3,600</span>
              </div>
            </div>

            <button className="text-blue-600 hover:text-blue-700 hover:underline text-sm transition-colors">
              View All Details
            </button>
          </div>
        </Card>

        {/* One-Time Payments */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-gray-900">One-Time Payments</h3>
            </div>
            
            <div className="space-y-2">
              {[
                { name: 'BestRun Reward', date: 'Oct 21, 2025', amount: '$2,000', color: 'emerald' },
                { name: 'Peer Appreciation Award', date: 'Oct 21, 2025', amount: '$50', color: 'blue' },
                { name: 'Bonus Special', date: 'Oct 10, 2025', amount: '$1,000', color: 'violet' },
                { name: 'Peer Appreciation Award', date: 'Sep 25, 2025', amount: '$150', color: 'blue' },
              ].map((payment, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 group"
                >
                  <div className="text-left flex-1">
                    <div className="text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                      {payment.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {payment.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900 font-medium">{payment.amount}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </button>
              ))}
            </div>

            <button className="text-blue-600 hover:text-blue-700 hover:underline text-sm mt-6 transition-colors">
              View All Payments
            </button>
          </div>
        </Card>

        {/* Recurring Deduction */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Inbox className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="text-gray-900">Recurring Deduction</h3>
              </div>
              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Refresh">
                <RotateCcw className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 mb-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                <Inbox className="w-10 h-10 text-gray-400" />
              </div>
              <h4 className="text-gray-900 mb-2">No deductions yet</h4>
              <p className="text-sm text-gray-500 text-center max-w-[200px]">
                When deductions are added, they'll appear here.
              </p>
            </div>
          </div>
        </Card>

        {/* Personal Combined Statements */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-indigo-600" />
              </div>
              <h3 className="text-gray-900">Personal Combined Statements</h3>
            </div>
            
            <div className="space-y-2">
              {[
                { year: '2024', date: 'Jan 13, 2025 7:33AM' },
                { year: '2023', date: 'Feb 20, 2024 11:40AM' },
                { year: '2022', date: 'Feb 10, 2023 7:40AM' },
                { year: '2021', date: 'Jan 23, 2022 12:59PM' },
              ].map((statement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 group"
                >
                  <div className="text-left flex-1 pr-2">
                    <div className="text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                      {statement.year} Annual Salary, Equity & Incentive Plan
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {statement.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-blue-50 rounded transition-colors" title="Download">
                      <Download className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-blue-50 rounded transition-colors" title="Open">
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Variable Pay Statements */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-pink-600" />
              </div>
              <h3 className="text-gray-900">Variable Pay Statements</h3>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 group">
                <div className="text-left flex-1 pr-2">
                  <div className="text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                    2014 Short Term Incentive Plan
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Oct 28, 2015 8:10PM
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-blue-50 rounded transition-colors" title="Download">
                    <Download className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-blue-50 rounded transition-colors" title="Open">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bonus Assignments */}
        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-gray-900">Bonus Assignments</h3>
            </div>
            
            <div className="space-y-2">
              {[
                { name: 'Bonus Payout Individual View', date: 'Jan 18, 2025 12:37PM' },
                { name: 'Business + Individual Incentive Plan', date: 'Feb 28, 2023 8:30PM' },
                { name: 'Bonus Payout Individual View (SB)', date: 'Jan 25, 2023 4:06PM' },
                { name: 'Sandbox Business + Individual Incentive Plan', date: 'Jan 25, 2023 12:03PM' },
              ].map((bonus, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 group"
                >
                  <div className="text-left flex-1 pr-2">
                    <div className="text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                      {bonus.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {bonus.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-blue-50 rounded transition-colors" title="Download">
                      <Download className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-blue-50 rounded transition-colors" title="Open">
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-blue-600 hover:text-blue-700 hover:underline text-sm mt-6 transition-colors">
              View All Assignments
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
