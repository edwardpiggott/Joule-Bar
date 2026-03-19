// Rich response components for Joule interactions
// These are rendered inline within Joule chat bubbles

export function OnboardingTasksList() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <TaskItem 
        title="New Hire Training Program"
        status="Pending"
        dueDate="Oct 17, 2025"
        statusColor="bg-orange-100 text-orange-700"
      />
      <TaskItem 
        title="Provide Personal Details"
        status="Due Soon"
        dueDate="Oct 15, 2025"
        statusColor="bg-red-100 text-red-700"
      />
      <TaskItem 
        title="Information Security Overview"
        status="Not Started"
        dueDate="Oct 20, 2025"
        statusColor="bg-gray-100 text-gray-700"
      />
    </div>
  );
}

function TaskItem({ title, status, dueDate, statusColor }: { title: string; status: string; dueDate: string; statusColor: string }) {
  return (
    <div className="flex justify-between items-start pb-[8px] border-b border-[#e5e7eb] last:border-0 last:pb-0">
      <div className="flex-1">
        <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">{title}</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mt-[2px]">Due: {dueDate}</p>
      </div>
      <span className={`${statusColor} px-[8px] py-[4px] rounded-[4px] text-[10px] font-['72:Bold',sans-serif]`}>
        {status}
      </span>
    </div>
  );
}

export function TrainingProgramDetails() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <div>
        <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">New Hire Training Program</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mt-[4px]">Global Employee Onboarding</p>
      </div>
      <div className="space-y-[4px] pt-[8px] border-t border-[#e5e7eb]">
        <InfoRow label="Duration" value="5 sessions, 2 hours each" />
        <InfoRow label="Format" value="Online + In-person" />
        <InfoRow label="Deadline" value="Oct 17, 2025" />
        <InfoRow label="Type" value="Compulsory" />
      </div>
    </div>
  );
}

export function EnrolledTrainingSessions() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[6px] mt-[8px]">
      <SessionRow date="Oct 10" time="10:00 AM - 12:00 PM" topic="Company Culture & Values" />
      <SessionRow date="Oct 11" time="2:00 PM - 4:00 PM" topic="SAP Systems Overview" />
      <SessionRow date="Oct 13" time="10:00 AM - 12:00 PM" topic="HR Policies & Procedures" />
      <SessionRow date="Oct 14" time="2:00 PM - 4:00 PM" topic="Team Introduction" />
      <SessionRow date="Oct 17" time="10:00 AM - 12:00 PM" topic="Role-Specific Training" />
    </div>
  );
}

export function ScheduledTrainingSessions() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[6px] mt-[8px]">
      <SessionRow date="Oct 7" time="10:00 AM - 12:00 PM" topic="Company Culture & Values" />
      <SessionRow date="Oct 8" time="2:00 PM - 4:00 PM" topic="SAP Systems Overview" />
      <SessionRow date="Oct 10" time="10:00 AM - 12:00 PM" topic="HR Policies & Procedures" />
      <SessionRow date="Oct 11" time="2:00 PM - 4:00 PM" topic="Team Introduction" />
      <SessionRow date="Oct 13" time="10:00 AM - 12:00 PM" topic="Role-Specific Training" />
    </div>
  );
}

export function ScheduledTrainingSessionsLater() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[6px] mt-[8px]">
      <SessionRow date="Oct 14" time="10:00 AM - 12:00 PM" topic="Company Culture & Values" />
      <SessionRow date="Oct 14" time="2:00 PM - 4:00 PM" topic="SAP Systems Overview" />
      <SessionRow date="Oct 15" time="10:00 AM - 12:00 PM" topic="HR Policies & Procedures" />
      <SessionRow date="Oct 16" time="2:00 PM - 4:00 PM" topic="Team Introduction" />
      <SessionRow date="Oct 17" time="10:00 AM - 12:00 PM" topic="Role-Specific Training" />
    </div>
  );
}

function SessionRow({ date, time, topic }: { date: string; time: string; topic: string }) {
  return (
    <div className="flex items-start gap-[8px] pb-[6px] border-b border-[#e5e7eb] last:border-0 last:pb-0">
      <div className="bg-[#0070f2] text-white rounded-[4px] px-[6px] py-[4px] text-center min-w-[48px]">
        <p className="font-['72:Bold',sans-serif] text-[11px]">{date}</p>
      </div>
      <div className="flex-1">
        <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">{topic}</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{time}</p>
      </div>
    </div>
  );
}

export function SalaryHistory() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[4px] mt-[8px]">
      <SalaryRow year="2024" amount="$153,973" isCurrent />
      <SalaryRow year="2023" amount="$142,300" />
      <SalaryRow year="2022" amount="$134,500" />
      <SalaryRow year="2021" amount="$126,300" />
    </div>
  );
}

function SalaryRow({ year, amount, isCurrent }: { year: string; amount: string; isCurrent?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{year}</span>
      <span className={`font-['72:${isCurrent ? 'Bold' : 'Regular'}',sans-serif] text-[13px] text-[#1d2d3e]`}>{amount}</span>
    </div>
  );
}

export function BonusHistory() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[4px] mt-[8px]">
      <BonusRow year="2024" amount="$23,095 (15%)" isCurrent />
      <BonusRow year="2023" amount="$21,345 (15%)" />
    </div>
  );
}

function BonusRow({ year, amount, isCurrent }: { year: string; amount: string; isCurrent?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{year}</span>
      <span className={`font-['72:${isCurrent ? 'Bold' : 'Regular'}',sans-serif] text-[13px] text-[#1d2d3e]`}>{amount}</span>
    </div>
  );
}

export function PerformanceRating() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="flex justify-between items-center">
        <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">Latest Rating</span>
        <span className="font-['72:Bold',sans-serif] text-[13px] text-[#0070f2]">4.5 / 5.0 - Exceeds Expectations</span>
      </div>
    </div>
  );
}

export function CompensationInsights() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <InsightItem 
        icon="📈"
        title="Salary Growth"
        description="21.9% increase over 4 years ($27,673 total growth)"
      />
      <InsightItem 
        icon="💰"
        title="Consistent Bonuses"
        description="15% annual performance bonus maintained for 2 years"
      />
      <InsightItem 
        icon="⭐"
        title="Strong Performance"
        description="4.5/5.0 rating - Exceeds Expectations"
      />
    </div>
  );
}

function InsightItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="border-t border-[#e5e7eb] pt-[8px] first:border-0 first:pt-0">
      <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">{icon} {title}</p>
      <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{description}</p>
    </div>
  );
}

export function BenefitsOverview() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[6px] mt-[8px]">
      <BenefitRow title="Health Insurance" status="Not Enrolled" />
      <BenefitRow title="Dental Insurance" status="Not Enrolled" />
      <BenefitRow title="Vision Insurance" status="Not Enrolled" />
      <BenefitRow title="401(k) Retirement Plan" status="Not Enrolled" />
      <BenefitRow title="Life Insurance" status="Not Enrolled" />
    </div>
  );
}

function BenefitRow({ title, status }: { title: string; status: string }) {
  return (
    <div className="flex justify-between items-center pb-[6px] border-b border-[#e5e7eb] last:border-0 last:pb-0">
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#1d2d3e]">{title}</span>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{status}</span>
    </div>
  );
}

export function HealthInsurancePlans() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <PlanItem name="Basic Plan" premium="$180/month" deductible="$3,000" coverage="80%" />
      <PlanItem name="Standard Plan" premium="$240/month" deductible="$1,500" coverage="85%" />
      <PlanItem name="Premium Plan" premium="$320/month" deductible="$500" coverage="90%" />
    </div>
  );
}

function PlanItem({ name, premium, deductible, coverage }: { name: string; premium: string; deductible: string; coverage: string }) {
  return (
    <div className="border-b border-[#e5e7eb] pb-[8px] last:border-0 last:pb-0">
      <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[4px]">{name}</p>
      <div className="grid grid-cols-3 gap-[4px]">
        <InfoRow label="Premium" value={premium} compact />
        <InfoRow label="Deductible" value={deductible} compact />
        <InfoRow label="Coverage" value={coverage} compact />
      </div>
    </div>
  );
}

export function HealthPlanComparison() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="bg-[#e8f4fd] rounded-[6px] p-[10px] mb-[8px]">
        <p className="font-['72:Bold',sans-serif] text-[12px] text-[#0070f2] mb-[4px]">✓ Recommended: Premium Plan</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">Best value for your needs based on expected healthcare usage</p>
      </div>
      <div className="space-y-[4px]">
        <InfoRow label="Monthly Premium" value="$320" />
        <InfoRow label="Annual Deductible" value="$500" />
        <InfoRow label="Coverage" value="90%" />
        <InfoRow label="Max Out-of-Pocket" value="$3,000/year" />
      </div>
    </div>
  );
}

export function TimeOffBalance() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="grid grid-cols-2 gap-[12px]">
        <BalanceItem label="Vacation Days" value="15" unit="days" />
        <BalanceItem label="Sick Leave" value="5" unit="days" />
        <BalanceItem label="Personal Days" value="3" unit="days" />
        <BalanceItem label="Used This Year" value="7" unit="days" />
      </div>
    </div>
  );
}

function BalanceItem({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="text-center">
      <p className="font-['72:Bold',sans-serif] text-[20px] text-[#0070f2]">{value}</p>
      <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{unit}</p>
      <p className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e] mt-[2px]">{label}</p>
    </div>
  );
}

export function TimeOffRequestSummary() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <InfoRow label="Dates" value="Dec 20-27, 2024" />
      <InfoRow label="Business Days" value="6 days" />
      <InfoRow label="Remaining Balance" value="9 days" />
      <div className="pt-[8px] border-t border-[#e5e7eb]">
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#2d9f5c]">✓ Team coverage available</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#2d9f5c]">✓ No conflicts with your calendar</p>
      </div>
    </div>
  );
}

export function TeamGoalCompletion() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <div className="flex justify-between items-center">
        <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">Team Average</span>
        <span className="font-['72:Bold',sans-serif] text-[16px] text-[#2d9f5c]">87%</span>
      </div>
      <div className="space-y-[4px]">
        <GoalCompletionBar name="Completed" value="87" color="bg-[#2d9f5c]" />
        <GoalCompletionBar name="In Progress" value="10" color="bg-[#0070f2]" />
        <GoalCompletionBar name="Not Started" value="3" color="bg-[#556b82]" />
      </div>
    </div>
  );
}

function GoalCompletionBar({ name, value, color }: { name: string; value: string; color: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="flex-1">
        <div className="bg-[#f5f6f7] rounded-full h-[6px] overflow-hidden">
          <div className={`${color} h-full`} style={{ width: `${value}%` }} />
        </div>
      </div>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] min-w-[80px]">{name}: {value}%</span>
    </div>
  );
}

export function RecommendedTeamGoals() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <GoalItem 
        title="Increase Customer Satisfaction Score"
        target="From 4.2 to 4.5"
        deadline="Q1 2025"
      />
      <GoalItem 
        title="Reduce Average Response Time"
        target="From 24h to 12h"
        deadline="Q1 2025"
      />
      <GoalItem 
        title="Complete Skills Certification"
        target="100% team completion"
        deadline="Q1 2025"
      />
    </div>
  );
}

function GoalItem({ title, target, deadline }: { title: string; target: string; deadline: string }) {
  return (
    <div className="border-b border-[#e5e7eb] pb-[8px] last:border-0 last:pb-0">
      <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[2px]">{title}</p>
      <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Target: {target}</p>
      <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Deadline: {deadline}</p>
    </div>
  );
}

export function PendingApprovals() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[6px] mt-[8px]">
      <ApprovalItem 
        name="Sarah Chen"
        type="Time Off Request"
        dates="Dec 23-27"
        priority="Normal"
      />
      <ApprovalItem 
        name="Marcus Johnson"
        type="Expense Report"
        dates="$2,450"
        priority="Urgent"
      />
      <ApprovalItem 
        name="Emily Davis"
        type="Goal Update"
        dates="Q4 Review"
        priority="Normal"
      />
    </div>
  );
}

function ApprovalItem({ name, type, dates, priority }: { name: string; type: string; dates: string; priority: string }) {
  const isPriority = priority === "Urgent";
  return (
    <div className="flex justify-between items-start pb-[6px] border-b border-[#e5e7eb] last:border-0 last:pb-0">
      <div className="flex-1">
        <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">{name}</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{type} • {dates}</p>
      </div>
      {isPriority && (
        <span className="bg-red-100 text-red-700 px-[6px] py-[2px] rounded-[4px] text-[10px] font-['72:Bold',sans-serif]">
          Urgent
        </span>
      )}
    </div>
  );
}

export function TimeOffRequestDetails() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px] mt-[8px]">
      <div>
        <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">Sarah Chen</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Senior Developer</p>
      </div>
      <div className="border-t border-[#e5e7eb] pt-[8px] space-y-[4px]">
        <InfoRow label="Type" value="Vacation" />
        <InfoRow label="Dates" value="Dec 23-27, 2024" />
        <InfoRow label="Duration" value="5 business days" />
        <InfoRow label="Reason" value="Holiday vacation" />
      </div>
    </div>
  );
}

function InfoRow({ label, value, compact }: { label: string; value: string; compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex flex-col">
        <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{label}</span>
        <span className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e]">{value}</span>
      </div>
    );
  }
  return (
    <div className="flex justify-between">
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{label}</span>
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#1d2d3e]">{value}</span>
    </div>
  );
}

// Component registry for dynamic rendering
export const componentRegistry: Record<string, React.ComponentType> = {
  OnboardingTasksList,
  TrainingProgramDetails,
  EnrolledTrainingSessions,
  ScheduledTrainingSessions,
  ScheduledTrainingSessionsLater,
  SalaryHistory,
  BonusHistory,
  PerformanceRating,
  CompensationInsights,
  BenefitsOverview,
  HealthInsurancePlans,
  HealthPlanComparison,
  TimeOffBalance,
  TimeOffRequestSummary,
  TeamGoalCompletion,
  RecommendedTeamGoals,
  PendingApprovals,
  TimeOffRequestDetails,
};
