export interface JouleStep {
  scenario_id: string;
  step_number: number;
  step_type: 'SCENARIO_CHOICE' | 'SYSTEM_MESSAGE' | 'USER_PROMPT' | 'JOULE_TEXT_RESPONSE' | 'JOULE_RICH_RESPONSE' | 'ACTION_BUTTON' | 'VISUAL_OUTPUT';
  user_input_text?: string;
  joule_response_text?: string;
  response_component?: string;
  action_label?: string;
  choice_a_label?: string;
  choice_b_label?: string;
  choice_a_next_step?: number;
  choice_b_next_step?: number;
  next_step?: number | 'END';
}

// CSV data represented as typed objects
export const jouleScenarioData: JouleStep[] = [
  // EMPLOYEE_01_ONBOARDING - Complete Onboarding Tasks
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 1,
    step_type: 'USER_PROMPT',
    user_input_text: "What onboarding tasks do I need to complete?",
    next_step: 2
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 2,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "You have 3 pending onboarding tasks:",
    response_component: 'OnboardingTasksList',
    next_step: 3
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 3,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Would you like help with any of these?",
    next_step: 4
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: "Help me with the New Hire Training Program",
    next_step: 5
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 5,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Here's your New Hire Training Program:",
    response_component: 'TrainingProgramDetails',
    next_step: 6
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 6,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Enroll now",
    choice_b_label: "Schedule for later",
    choice_a_next_step: 7,
    choice_b_next_step: 10
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 7,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Enrolling you in the New Hire Training Program...",
    next_step: 8
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 8,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "You're enrolled! Your training sessions:",
    response_component: 'EnrolledTrainingSessions',
    next_step: 9
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Calendar invites have been sent to your email.",
    next_step: 'END'
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 10,
    step_type: 'USER_PROMPT',
    user_input_text: "When should I schedule it?",
    next_step: 11
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 11,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "The training must be completed by Oct 17, 2025. I can schedule it for next week or the week after.",
    next_step: 12
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 12,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Next week",
    choice_b_label: "Week after",
    choice_a_next_step: 13,
    choice_b_next_step: 14
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 13,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Scheduled for next week:",
    response_component: 'ScheduledTrainingSessions',
    next_step: 15
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 14,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Scheduled for the week of Oct 14:",
    response_component: 'ScheduledTrainingSessionsLater',
    next_step: 15
  },
  {
    scenario_id: 'EMPLOYEE_01_ONBOARDING',
    step_number: 15,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Calendar invites sent. I'll remind you 24 hours before each session.",
    next_step: 'END'
  },

  // EMPLOYEE_02_BENEFITS - Review Benefits Enrollment
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 1,
    step_type: 'USER_PROMPT',
    user_input_text: "Show me my benefits enrollment options",
    next_step: 2
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 2,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Here are your available benefits:",
    response_component: 'BenefitsOverview',
    next_step: 3
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 3,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Which benefit would you like to explore?",
    next_step: 4
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: "Tell me about health insurance options",
    next_step: 5
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 5,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "You have 3 health insurance plans available:",
    response_component: 'HealthInsurancePlans',
    next_step: 6
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 6,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Would you like me to compare these plans based on your needs?",
    next_step: 7
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 7,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Yes, compare plans",
    choice_b_label: "No, I'll review myself",
    choice_a_next_step: 8,
    choice_b_next_step: 'END'
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 8,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Based on your profile, here's my recommendation:",
    response_component: 'HealthPlanComparison',
    next_step: 9
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Would you like to enroll in the Premium Plan?",
    next_step: 10
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 10,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Enroll in Premium Plan",
    choice_b_label: "Choose different plan",
    choice_a_next_step: 11,
    choice_b_next_step: 'END'
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 11,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Processing your enrollment in the Premium Plan...",
    next_step: 12
  },
  {
    scenario_id: 'EMPLOYEE_02_BENEFITS',
    step_number: 12,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Enrollment complete. Coverage begins on the first of next month. Confirmation sent to your email.",
    next_step: 'END'
  },

  // EMPLOYEE_03_TIMEOFF - Request Time Off
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 1,
    step_type: 'USER_PROMPT',
    user_input_text: "I need to request time off",
    next_step: 2
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 2,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "You have 15 vacation days available.",
    response_component: 'TimeOffBalance',
    next_step: 3
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 3,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "When would you like to take time off?",
    next_step: 4
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: "December 20-27 for the holidays",
    next_step: 5
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "That's 6 business days. Checking your calendar and team coverage...",
    next_step: 6
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 6,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Your request summary:",
    response_component: 'TimeOffRequestSummary',
    next_step: 7
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 7,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Submit request",
    choice_b_label: "Modify dates",
    choice_a_next_step: 8,
    choice_b_next_step: 'END'
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 8,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Submitting your request to your manager...",
    next_step: 9
  },
  {
    scenario_id: 'EMPLOYEE_03_TIMEOFF',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Request submitted. You'll receive a notification when your manager approves it.",
    next_step: 'END'
  },

  // MANAGER_01_COMPENSATION - Review Team Member Compensation
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 1,
    step_type: 'USER_PROMPT',
    user_input_text: "Show me Jada Baker's compensation review",
    next_step: 2
  },
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 2,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Here's Jada Baker's Salary History for the last 4 years:",
    response_component: 'SalaryHistory',
    next_step: 3
  },
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 3,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "And her Bonus History for the last 2 years:",
    response_component: 'BonusHistory',
    next_step: 4
  },
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 4,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Her most recent Performance Rating:",
    response_component: 'PerformanceRating',
    next_step: 5
  },
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Would you like me to provide quick insights about Jada's compensation trends?",
    next_step: 6
  },
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 6,
    step_type: 'USER_PROMPT',
    user_input_text: "Yes",
    next_step: 7
  },
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 7,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Here are key insights for Jada's compensation:",
    response_component: 'CompensationInsights',
    next_step: 8
  },
  {
    scenario_id: 'MANAGER_01_COMPENSATION',
    step_number: 8,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "I've added all these details to your notebook.",
    next_step: 'END'
  },

  // MANAGER_02_TEAMGOALS - Set Team Goals
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 1,
    step_type: 'USER_PROMPT',
    user_input_text: "Help me set Q1 goals for my team",
    next_step: 2
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 2,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Your team has 8 members. Here's their current goal completion rate:",
    response_component: 'TeamGoalCompletion',
    next_step: 3
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 3,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Based on company priorities and team performance, I can suggest Q1 goals. Would you like recommendations?",
    next_step: 4
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 4,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Show recommendations",
    choice_b_label: "I'll create them manually",
    choice_a_next_step: 5,
    choice_b_next_step: 'END'
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 5,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Recommended Q1 goals for your team:",
    response_component: 'RecommendedTeamGoals',
    next_step: 6
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 6,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Would you like to assign these goals to your team?",
    next_step: 7
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 7,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Assign to team",
    choice_b_label: "Customize first",
    choice_a_next_step: 8,
    choice_b_next_step: 'END'
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 8,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Assigning goals to team members...",
    next_step: 9
  },
  {
    scenario_id: 'MANAGER_02_TEAMGOALS',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Goals assigned. Each team member will receive a notification and calendar reminder for their Q1 goals review.",
    next_step: 'END'
  },

  // MANAGER_03_APPROVAL - Approve Time Off Request
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 1,
    step_type: 'USER_PROMPT',
    user_input_text: "Show me pending approvals",
    next_step: 2
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 2,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "You have 3 pending approval requests:",
    response_component: 'PendingApprovals',
    next_step: 3
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 3,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Which request would you like to review?",
    next_step: 4
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: "Sarah's time off request",
    next_step: 5
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 5,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: "Sarah Chen's time off request:",
    response_component: 'TimeOffRequestDetails',
    next_step: 6
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 6,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "I've checked the team calendar. Two other team members will be available during this period for coverage.",
    next_step: 7
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 7,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: "Approve",
    choice_b_label: "Request changes",
    choice_a_next_step: 8,
    choice_b_next_step: 'END'
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 8,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Approving Sarah's request...",
    next_step: 9
  },
  {
    scenario_id: 'MANAGER_03_APPROVAL',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: "Request approved. Sarah has been notified and her time off is now on the team calendar.",
    next_step: 'END'
  }
];

// Helper function to get steps for a scenario
export function getScenarioSteps(scenarioId: string): JouleStep[] {
  return jouleScenarioData
    .filter(step => step.scenario_id === scenarioId)
    .sort((a, b) => a.step_number - b.step_number);
}

// Helper function to get a specific step
export function getStep(scenarioId: string, stepNumber: number): JouleStep | undefined {
  return jouleScenarioData.find(
    step => step.scenario_id === scenarioId && step.step_number === stepNumber
  );
}
