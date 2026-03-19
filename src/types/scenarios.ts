// Scenario data structure - easy to extend and modify

export interface Scenario {
  id: string;
  title: string;
  description: string;
  introText: string;
  decisionQuestion: string;
  jouleScenarioId?: string; // Maps to Joule interaction data
  optionA: {
    label: string;
    outcomeTitle: string;
    outcomeText: string;
    outcomeType: 'negative' | 'neutral';
  };
  optionB: {
    label: string;
    joulePrompt: string;
    outcomeTitle: string;
    outcomeText: string;
  };
}

export interface PersonaData {
  id: 'employee' | 'manager';
  name: string;
  description: string;
  scenarios: Scenario[];
}

// Sample scenarios - easily replaceable
export const employeeScenarios: Scenario[] = [
  {
    id: 'emp-1',
    title: 'Complete Onboarding Tasks',
    description: 'Get help navigating new hire requirements and training',
    introText: 'You\'re new to the company and have several onboarding tasks to complete. You need to enroll in training programs and provide required information before the deadline.',
    decisionQuestion: 'How do you proceed?',
    jouleScenarioId: 'EMPLOYEE_01_ONBOARDING',
    optionA: {
      label: 'Navigate through the portal manually',
      outcomeTitle: 'Tasks Completed',
      outcomeText: 'After 30 minutes of searching through different menus and forms, you found the onboarding tasks, enrolled in training, and submitted required documents. Some confusion about deadlines remains.',
      outcomeType: 'neutral'
    },
    optionB: {
      label: 'Ask Joule to help',
      joulePrompt: 'What onboarding tasks do I need to complete?',
      outcomeTitle: 'Onboarding Complete',
      outcomeText: 'Joule showed you all pending tasks, helped you enroll in required training with optimal scheduling, and confirmed everything is on track. You\'re fully prepared for your first weeks.'
    }
  },
  {
    id: 'emp-2',
    title: 'Review Benefits Enrollment',
    description: 'Choose the right health insurance and benefits package',
    introText: 'Open enrollment period is here. You need to review available health insurance plans and other benefits to make the best choice for your situation.',
    decisionQuestion: 'What do you do?',
    jouleScenarioId: 'EMPLOYEE_02_BENEFITS',
    optionA: {
      label: 'Compare plans manually in the benefits portal',
      outcomeTitle: 'Benefits Selected',
      outcomeText: 'After reviewing multiple plan documents and comparing coverage details for 45 minutes, you selected a health plan. You\'re still unsure if it\'s the best option for your needs.',
      outcomeType: 'neutral'
    },
    optionB: {
      label: 'Ask Joule for guidance',
      joulePrompt: 'Show me my benefits enrollment options',
      outcomeTitle: 'Benefits Enrollment Complete',
      outcomeText: 'Joule analyzed your profile and recommended the best health plan based on your needs. You enrolled with confidence, understanding exactly what your coverage includes.'
    }
  },
  {
    id: 'emp-3',
    title: 'Request Time Off',
    description: 'Plan vacation time for an upcoming holiday period',
    introText: 'You want to take time off during the December holidays. You need to check your available balance, ensure team coverage, and get approval.',
    decisionQuestion: 'How do you approach this?',
    jouleScenarioId: 'EMPLOYEE_03_TIMEOFF',
    optionA: {
      label: 'Submit request through the HR system',
      outcomeTitle: 'Request Submitted',
      outcomeText: 'You navigated through the time-off portal, manually checked your balance, and submitted a request. You\'ll need to wait 2-3 days to hear if it\'s approved.',
      outcomeType: 'neutral'
    },
    optionB: {
      label: 'Let Joule help you',
      joulePrompt: 'I need to request time off',
      outcomeTitle: 'Time Off Approved',
      outcomeText: 'Joule checked your balance, confirmed team coverage, and submitted your request. Your manager received an instant notification with all relevant context.'
    }
  }
];

export const managerScenarios: Scenario[] = [
  {
    id: 'mgr-1',
    title: 'Review Team Member Compensation',
    description: 'Prepare salary review for a direct report',
    introText: 'You need to review Jada Baker\'s compensation details for the annual review cycle. You want to see salary history, bonus information, and performance ratings to make informed decisions.',
    decisionQuestion: 'How do you gather this information?',
    jouleScenarioId: 'MANAGER_01_COMPENSATION',
    optionA: {
      label: 'Navigate through multiple reports manually',
      outcomeTitle: 'Data Collected',
      outcomeText: 'After navigating through various screens and exporting multiple reports, you spent 45 minutes gathering compensation data. Some information required IT support to access.',
      outcomeType: 'negative'
    },
    optionB: {
      label: 'Ask Joule for help',
      joulePrompt: 'Show me Jada Baker\'s compensation review',
      outcomeTitle: 'Compensation Review Ready',
      outcomeText: 'Joule instantly compiled salary history, performance ratings, and bonus data with actionable insights. Complete visibility in seconds.'
    }
  },
  {
    id: 'mgr-2',
    title: 'Set Team Goals',
    description: 'Define Q1 objectives for your team',
    introText: 'A new quarter is starting and you need to set goals for your team. You want to align with company priorities and create achievable targets.',
    decisionQuestion: 'What do you do?',
    jouleScenarioId: 'MANAGER_02_TEAMGOALS',
    optionA: {
      label: 'Create goals manually in the system',
      outcomeTitle: 'Goals Created',
      outcomeText: 'You spent time drafting goals, checking company objectives, and entering them into the system. After 40 minutes, you assigned goals to team members individually.',
      outcomeType: 'neutral'
    },
    optionB: {
      label: 'Ask Joule to help',
      joulePrompt: 'Help me set Q1 goals for my team',
      outcomeTitle: 'Team Goals Set Successfully',
      outcomeText: 'Joule analyzed company priorities and team performance to suggest aligned goals. You reviewed and assigned them in minutes with automated notifications.'
    }
  },
  {
    id: 'mgr-3',
    title: 'Approve Time Off Request',
    description: 'Review and process a team member\'s vacation request',
    introText: 'You have pending time-off requests from team members. You need to check team coverage and project commitments before approving.',
    decisionQuestion: 'How do you prepare?',
    jouleScenarioId: 'MANAGER_03_APPROVAL',
    optionA: {
      label: 'Check calendars and coverage manually',
      outcomeTitle: 'Request Processed',
      outcomeText: 'You reviewed team calendars, checked project deadlines, and confirmed coverage manually. After 25 minutes of analysis, you approved the request.',
      outcomeType: 'neutral'
    },
    optionB: {
      label: 'Use Joule to analyze coverage',
      joulePrompt: 'Show me pending approvals',
      outcomeTitle: 'Approval Complete',
      outcomeText: 'Joule showed all pending requests with team coverage analysis. You approved with confidence in seconds, knowing coverage is secured.'
    }
  }
];

export const personaData: PersonaData[] = [
  {
    id: 'employee',
    name: 'Employee',
    description: 'Experience how Joule simplifies everyday HR tasks',
    scenarios: employeeScenarios
  },
  {
    id: 'manager',
    name: 'Manager',
    description: 'See how Joule empowers people management',
    scenarios: managerScenarios
  }
];