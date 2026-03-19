export interface CSVStep {
  scenario_id: string;
  persona: 'Employee' | 'Manager';
  scenario_title: string;
  scenario_description: string;
  step_number: number;
  step_type: 'SCENARIO_CHOICE' | 'SYSTEM_MESSAGE' | 'USER_PROMPT' | 'USER_SELECTION' | 'JOULE_LOADING' | 'JOULE_TEXT_RESPONSE' | 'JOULE_RICH_RESPONSE' | 'JOULE_VISUAL_OUTPUT' | 'ACTION_BUTTON' | 'DUAL_ACTION_BUTTONS' | 'VISUAL_OUTPUT' | 'SCENARIO_COMPLETE';
  user_input_text?: string;
  joule_response_text?: string;
  response_component?: string;
  action_label?: string;
  action_a_label?: string;
  action_b_label?: string;
  action_a_next_step?: number | 'END';
  action_b_next_step?: number | 'END';
  choice_a_label?: string;
  choice_b_label?: string;
  choice_c_label?: string;
  choice_a_next_step?: number | 'END';
  choice_b_next_step?: number | 'END';
  choice_c_next_step?: number | 'END';
  next_step?: number | 'END';
  completion_message?: string;
  requires_user_action?: boolean;
  loading_message?: string;
  loading_duration?: number;
}

export interface ScenarioMetadata {
  scenario_id: string;
  persona: 'Employee' | 'Manager';
  scenario_title: string;
  scenario_description: string;
}

// Master CSV data
export const csvData: CSVStep[] = [
  // EMP_GUS_01_FIRST_DAY
  {
    scenario_id: 'EMP_GUS_01_FIRST_DAY',
    persona: 'Employee',
    scenario_title: 'An Awkward First Day',
    scenario_description: 'You are starting a new job and realise you do not know which office to go to on day one.',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'Message future manager on LinkedIn',
    choice_b_label: 'Figure it out with Joule',
    choice_a_next_step: 2,
    choice_b_next_step: 4,
  },
  {
    scenario_id: 'EMP_GUS_01_FIRST_DAY',
    persona: 'Employee',
    scenario_title: 'An Awkward First Day',
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: 'Your message has not been seen yet and you still do not know which office to go to.',
    next_step: 'END'
  },
  {
    scenario_id: 'EMP_GUS_01_FIRST_DAY',
    persona: 'Employee',
    scenario_title: 'An Awkward First Day',
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: 'Which office should I go to on my first day?',
    next_step: 5
  },
  {
    scenario_id: 'EMP_GUS_01_FIRST_DAY',
    persona: 'Employee',
    scenario_title: 'An Awkward First Day',
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Sure! Your main office is the TechWave Inc. headquarters.\n\nThe address is:\nTechWave Inc.\nClockhouse Place\nBedford Road\nMiddlesex\nTW14 8HD',
    next_step: 6
  },
  {
    scenario_id: 'EMP_GUS_01_FIRST_DAY',
    persona: 'Employee',
    scenario_title: 'An Awkward First Day',
    scenario_description: '',
    step_number: 6,
    step_type: 'USER_PROMPT',
    user_input_text: 'Will someone be there to help me get set up?',
    next_step: 7
  },
  {
    scenario_id: 'EMP_GUS_01_FIRST_DAY',
    persona: 'Employee',
    scenario_title: 'An Awkward First Day',
    scenario_description: '',
    step_number: 7,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: 'Yes. Sarah Walters will meet you and help you and get started.',
    response_component: 'SARAH_PROFILE_CARD',
    next_step: 10
  },
  {
    scenario_id: 'EMP_GUS_01_FIRST_DAY',
    persona: 'Employee',
    scenario_title: 'An Awkward First Day',
    scenario_description: '',
    step_number: 10,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "Thanks to Joule, I know where I need to go on my first day! I can't wait to start my new role!",
    next_step: 'END'
  },

  // EMP_GUS_02_TRAVEL
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'Call in sick',
    choice_b_label: 'Book the flight while in the taxi',
    choice_a_next_step: 2,
    choice_b_next_step: 4,
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: 'You miss the marketing kick-off entirely.',
    next_step: 'END'
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: 'I would like to book a flight for my business trip. Can you help me ASAP?',
    next_step: 5
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Of course! Let\'s get this sorted with SAP Concur. Could you please tell me your departure city and destination?',
    next_step: 6
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 6,
    step_type: 'USER_PROMPT',
    user_input_text: 'I\'m leaving from London and heading to Atlanta.',
    next_step: 7
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 7,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Great! What is your preferred departure date?',
    next_step: 8
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 8,
    step_type: 'USER_SELECTION',
    user_input_text: 'Today',
    choice_a_label: 'travel.date.today',
    choice_b_label: 'travel.date.tomorrow',
    choice_c_label: 'travel.date.pickDate',
    next_step: 9
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'How many days would you like to spend at the destination?',
    next_step: 10
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 10,
    step_type: 'USER_SELECTION',
    user_input_text: '3 nights.',
    choice_a_label: 'travel.duration.oneDay',
    choice_b_label: 'travel.duration.threeDays',
    choice_c_label: 'travel.duration.custom',
    next_step: 11
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 11,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: 'Looking for best flight option for Gus from London to Atlanta on 30/01/2025 and from Atlanta to London on 03/02/2025.',
    response_component: 'flight_booking_summary',
    requires_user_action: true,
    next_step: 14
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 14,
    step_type: 'JOULE_VISUAL_OUTPUT',
    response_component: 'action_completed_card',
    next_step: 15
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 15,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Is there anything else you need help with before your travel?',
    next_step: 16
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 16,
    step_type: 'USER_PROMPT',
    user_input_text: 'What is my daily allowance in Atlanta?',
    next_step: 17
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 17,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'The HR policy for per diem in high-cost cities like Atlanta follows the GSA guidelines. For Atlanta, the current per diem rate is $89 per day for meals and incidental expenses. This ensures that you are adequately compensated for the higher cost of living while traveling for the project.',
    next_step: 18
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 18,
    step_type: 'JOULE_VISUAL_OUTPUT',
    response_component: 'source_document_card',
    next_step: 19
  },
  {
    scenario_id: 'EMP_GUS_02_TRAVEL',
    persona: 'Employee',
    scenario_title: 'A Business Trip to Remember',
    scenario_description: '',
    step_number: 19,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "Joule saved the day! I booked my flight and I'm ready for this trip!",
    next_step: 'END'
  },

  // EMP_GUS_03_PAYROLL
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: 'Your payslip looks higher than expected.',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'Ignore it',
    choice_b_label: 'Check with Joule',
    choice_a_next_step: 2,
    choice_b_next_step: 4,
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: 'You later need to explain the overpayment to HR.',
    next_step: 'END'
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: 'My payslip is higher than expected. Can you explain why?',
    next_step: 5
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'TechWave Inc. conducts regular internal pay equity reviews to ensure employees are compensated fairly and consistently. Do you have concerns about your pay?',
    next_step: 6
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 6,
    step_type: 'USER_PROMPT',
    user_input_text: 'Yes, analyse my current payslip.',
    next_step: 7
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 7,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Here is a detailed breakdown of your November 2025 payslip:\n\n1. Base Salary: $5,100.00\n2. Performance Bonus: $1,120.00\n3. Overtime: $380.00\n4. Tax Deduction: -$1,850.00\n5. Insurance: -$320.00\n\nNet Pay: $4,430.00\n\nThe performance bonus is a quarterly bonus that was added this month.',
    next_step: 8
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 8,
    step_type: 'USER_PROMPT',
    user_input_text: 'Help me understand my payslip.',
    next_step: 9
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Your payslip for the period from November 1st-30th, 2025, shows the following:\n\nGross Pay: This is your total income before any deductions. You received a monthly salary of $5,100.00, overtime pay of $380.00, and a performance bonus of $1,120.00, making your gross pay $6,600.00.\n\nDeductions: These are amounts taken out of your gross pay. Your deductions total $2,170.00 and include:\n\n• Tax: $1,850.00 (calculated based on your tax code and cumulative tax basis)\n• Insurance Contribution: $320.00 (based on your insurance plan)\n\nNet Pay: This is your take-home pay after all deductions. Your net pay for this period is $4,430.00.\n\nRemember to check your payslip regularly to ensure the tax code and other details are correct.',
    next_step: 10
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 10,
    step_type: 'USER_PROMPT',
    user_input_text: 'Compare this to my previous payslip.',
    next_step: 11
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 11,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Comparing your payslips:\n\nPrevious Month (October 2025):\n• Base Salary: $5,100\n• Bonus: $0\n• Net Pay: $3,310\n\nCurrent Month (November 2025):\n• Base Salary: $5,100\n• Bonus: $1,120\n• Net Pay: $4,430\n\nInsight: You received a quarterly performance bonus this month, increasing your net pay by $1,120.',
    next_step: 12
  },
  {
    scenario_id: 'EMP_GUS_03_PAYROLL',
    persona: 'Employee',
    scenario_title: "Help! I've Been Paid Too Much",
    scenario_description: '',
    step_number: 12,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "With Joule's help, I quickly understood my payslip and confirmed everything was correct. No more confusion about my salary!",
    next_step: 'END'
  },

  // EMP_GUS_04_PRESENTATION
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'Follow up later',
    choice_b_label: 'Ask Joule',
    choice_a_next_step: 2,
    choice_b_next_step: 4,
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: 'The lack of answers causes confusion after the meeting.',
    next_step: 'END'
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: 'How many people are in my department?',
    next_step: 5
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'There are 78 people in the marketing department.',
    next_step: 6
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 6,
    step_type: 'USER_PROMPT',
    user_input_text: 'What are the associated costs with my department?',
    next_step: 7
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 7,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'There are various cost components for the department. Please see below:\n\n1. Compensation: This includes salaries and benefits for the employees.\n2. Travel: Expenses related to business travel by marketing team members.\n3. Training: Costs associated with training programs or workshops needed for team development.\n4. Equipment: This covers any hardware or software tools required for marketing operations.\n\nThe total costs of the department is $2,522,026.',
    next_step: 8
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 8,
    step_type: 'USER_PROMPT',
    user_input_text: 'prompt.breakdownCostVisualizeYoY',
    next_step: 9
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 9,
    step_type: 'JOULE_VISUAL_OUTPUT',
    response_component: 'yoy_cost_chart',
    next_step: 10
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 10,
    step_type: 'USER_PROMPT',
    user_input_text: 'Compare marketing headcount and the cost per region.',
    next_step: 11
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 11,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Please find below charts that indicates headcount and the cost per region.',
    next_step: 12
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 12,
    step_type: 'JOULE_VISUAL_OUTPUT',
    response_component: 'regional_pie_charts',
    next_step: 13
  },
  {
    scenario_id: 'EMP_GUS_04_PRESENTATION',
    persona: 'Employee',
    scenario_title: 'Fake It Till You Make It',
    scenario_description: '',
    step_number: 13,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "Joule helped me prepare amazing data visualizations in minutes! My presentation was a success and I impressed the whole team!",
    next_step: 'END'
  },

  // MGR_JADA_01_ONBOARDING
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'Manually assign tasks',
    choice_b_label: 'Set up onboarding with Joule',
    choice_a_next_step: 2,
    choice_b_next_step: 4,
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: 'You spend hours coordinating onboarding tasks manually.',
    next_step: 'END'
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: 'Assign Tory Bosco as a buddy to Gus.',
    next_step: 5
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: 'I found multiple employees named Gus. Which one are you referring to?',
    response_component: 'GUS_DISAMBIGUATION',
    requires_user_action: true,
    next_step: 6
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 6,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Got it! To proceed, please provide a note to the new hire.',
    next_step: 7
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 7,
    step_type: 'ACTION_BUTTON',
    action_label: 'Draft a note for me',
    next_step: 8
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 8,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Here is a draft note for the new hire:',
    next_step: 9
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Dear Gus,\n\nI am pleased to inform you that Tory has been assigned as your buddy. He will be your go-to person for any questions or assistance you may need during your onboarding process.\n\nBest regards,\nJada Baker',
    next_step: 10
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 10,
    step_type: 'DUAL_ACTION_BUTTONS',
    action_a_label: 'Confirm',
    action_b_label: 'Edit',
    action_a_next_step: 16,
    action_b_next_step: 11
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 11,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'What changes would you like to make to the note?',
    next_step: 12
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 12,
    step_type: 'USER_PROMPT',
    user_input_text: 'P.S. We\'re throwing you a Mullet Party. All party, no business! Dress accordingly and get ready for some epic fun!✨',
    next_step: 13
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 13,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Here is the updated note:',
    next_step: 14
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 14,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Dear Gus,\n\nI am pleased to inform you that Tory has been assigned as your buddy. He will be your go-to person for any questions or assistance you may need during your onboarding process.\n\nP.S. We\'re throwing you a Mullet Party. All party, no business! Dress accordingly and get ready for some epic fun!✨\n\nBest regards,\nJada Baker',
    next_step: 15
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 15,
    step_type: 'DUAL_ACTION_BUTTONS',
    action_a_label: 'Confirm',
    action_b_label: 'Edit',
    action_a_next_step: 16,
    action_b_next_step: 11
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 16,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Do you want to draft a note also for Tory?',
    next_step: 17
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 17,
    step_type: 'DUAL_ACTION_BUTTONS',
    action_a_label: 'Yes',
    action_b_label: 'No',
    action_a_next_step: 18,
    action_b_next_step: 24
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 18,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Here is a draft note for the buddy:',
    next_step: 19
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 19,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Dear Tory,\n\nI am pleased to inform you that you have been assigned as the buddy for Gus. Please assist him with any questions or support he may need during his onboarding process. Thank you for your cooperation.\n\nBest regards,\nJada Baker',
    next_step: 20
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 20,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Please confirm if this draft is acceptable or if you would like any changes.',
    next_step: 21
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 21,
    step_type: 'DUAL_ACTION_BUTTONS',
    action_a_label: 'Confirm',
    action_b_label: 'Edit',
    action_a_next_step: 22,
    action_b_next_step: 22
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 22,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Here is your assignment:',
    next_step: 24
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 24,
    step_type: 'JOULE_VISUAL_OUTPUT',
    response_component: 'BUDDY_ASSIGNMENT_CARD',
    next_step: 26
  },
  {
    scenario_id: 'MGR_JADA_01_ONBOARDING',
    persona: 'Manager',
    scenario_title: 'Mullet Party First Day',
    scenario_description: '',
    step_number: 26,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "Joule made Gus's first day preparation effortless! Everything is organized and he'll feel welcomed from day one.",
    next_step: 'END'
  },

  // MGR_JADA_02_COMP
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'Use gut feeling',
    choice_b_label: 'Analyse compensation with Joule',
    choice_a_next_step: 2,
    choice_b_next_step: 4,
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: 'Your bonus budget is massively exceeded.',
    next_step: 'END'
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: "Summarise Gus' compensation progression.",
    next_step: 5
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'Here are the insights you requested for Gus Revesz.',
    next_step: 6
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 6,
    step_type: 'JOULE_LOADING',
    loading_message: 'joule.gatheringCompensationData',
    loading_duration: 4500,
    next_step: 7
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 7,
    step_type: 'JOULE_VISUAL_OUTPUT',
    response_component: 'compensation_summary_infographic',
    next_step: 8
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 8,
    step_type: 'USER_PROMPT',
    user_input_text: 'prompt.talkingPointsQuestion',
    next_step: 9
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'joule.talkingPointsResponse',
    next_step: 10
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 10,
    step_type: 'USER_PROMPT',
    user_input_text: 'prompt.spotAwardQuestion',
    next_step: 11
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 11,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: 'joule.spotAwardResponse',
    response_component: 'reward_policy_source',
    next_step: 12
  },
  {
    scenario_id: 'MGR_JADA_02_COMP',
    persona: 'Manager',
    scenario_title: 'Everyone Gets a Bonus',
    scenario_description: '',
    step_number: 12,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "Joule gave me instant access to compensation data and policy rules. I can now make fair and informed bonus decisions!",
    next_step: 'END'
  },

  // MGR_JADA_03_RECRUIT
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'recruit.choice.emailHR',
    choice_b_label: 'recruit.choice.createPosition',
    choice_a_next_step: 2,
    choice_b_next_step: 4,
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: 'recruit.system.noExternalAI',
    next_step: 'END'
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: 'recruit.userInput.createPosition',
    next_step: 5
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: 'recruit.joule.teamOverview',
    response_component: 'position_infographic',
    requires_user_action: false,
    next_step: 5.5
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 5.5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.similarPosition',
    next_step: 6
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 6,
    step_type: 'DUAL_ACTION_BUTTONS',
    action_a_label: 'common.yes',
    action_b_label: 'common.no',
    action_a_next_step: 7,
    action_b_next_step: 20,
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 7,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.selectPosition',
    next_step: 8
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 8,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: '',
    response_component: 'position_selector',
    requires_user_action: true,
    next_step: 8.5
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 8.5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.positionSelected',
    next_step: 9
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 9,
    step_type: 'USER_PROMPT',
    user_input_text: 'recruit.userInput.salaryRange',
    next_step: 10
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 10,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.salaryData',
    next_step: 11
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 11,
    step_type: 'DUAL_ACTION_BUTTONS',
    joule_response_text: 'recruit.joule.draftCreated',
    action_a_label: 'recruit.action.yesJobDesc',
    action_b_label: 'recruit.action.noSubmit',
    action_a_next_step: 12,
    action_b_next_step: 14,
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 12,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.jobDescription',
    next_step: 13
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 13,
    step_type: 'ACTION_BUTTON',
    action_label: 'recruit.action.submitApproval',
    next_step: 14
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 14,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.submitted',
    next_step: 14.5
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 14.5,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.scheduleMeeting',
    next_step: 14.6
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 14.6,
    step_type: 'DUAL_ACTION_BUTTONS',
    action_a_label: 'common.yes',
    action_b_label: 'common.no',
    action_a_next_step: 14.7,
    action_b_next_step: 15,
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 14.7,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.timeSlots',
    next_step: 14.8
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 14.8,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: '',
    response_component: 'meeting_time_selector',
    requires_user_action: true,
    next_step: 14.9
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 14.9,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'recruit.joule.meetingScheduled',
    next_step: 15
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 15,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "recruit.completion",
    next_step: 'END'
  },
  {
    scenario_id: 'MGR_JADA_03_RECRUIT',
    persona: 'Manager',
    scenario_title: 'Avoiding Admin Like a Pro',
    scenario_description: '',
    step_number: 20,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'No problem! Let me help you create a new position from scratch. What is the position title?',
    next_step: 'END'
  },

  // MGR_JADA_04_PERFORMANCE
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 1,
    step_type: 'SCENARIO_CHOICE',
    choice_a_label: 'Tell him he\'s great and no further comments',
    choice_b_label: 'Ask Joule for the information you need... quickly!',
    choice_a_next_step: 2,
    choice_b_next_step: 4
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 2,
    step_type: 'SYSTEM_MESSAGE',
    joule_response_text: "Well, that was awkward. Gus appreciated the positivity, but left the meeting feeling less confident than before.",
    next_step: 1
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 4,
    step_type: 'USER_PROMPT',
    user_input_text: 'I have to meet with Gus about her performance this year. Summarise her achievements, feedback and anything else relevant to her development.',
    next_step: 5
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 5,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: 'performance.joule.summary',
    response_component: 'performance_infographic',
    requires_user_action: false,
    next_step: 6
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 6,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'performance.joule.scheduleQuestion',
    next_step: 6.5
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 6.5,
    step_type: 'DUAL_ACTION_BUTTONS',
    action_a_label: 'common.yes',
    action_b_label: 'common.no',
    action_a_next_step: 6.6,
    action_b_next_step: 7,
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 6.6,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'performance.joule.timeSlots',
    next_step: 6.7
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 6.7,
    step_type: 'JOULE_RICH_RESPONSE',
    joule_response_text: '',
    response_component: 'meeting_time_selector',
    requires_user_action: true,
    next_step: 6.8
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 6.8,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'performance.joule.meetingConfirm',
    next_step: 7
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 7,
    step_type: 'USER_PROMPT',
    user_input_text: 'performance.user.improvementQuestion',
    next_step: 8
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 8,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'performance.joule.improvementAreas',
    next_step: 9
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 9,
    step_type: 'USER_PROMPT',
    user_input_text: 'performance.user.frameQuestion',
    next_step: 10
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 10,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'performance.joule.frameAdvice',
    next_step: 11
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 11,
    step_type: 'USER_PROMPT',
    user_input_text: 'performance.user.mentorQuestion',
    next_step: 12
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 12,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'performance.joule.mentorResponse',
    next_step: 13
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 13,
    step_type: 'USER_PROMPT',
    user_input_text: 'performance.user.thanks',
    next_step: 14
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 14,
    step_type: 'JOULE_TEXT_RESPONSE',
    joule_response_text: 'performance.joule.welcome',
    next_step: 15
  },
  {
    scenario_id: 'MGR_JADA_04_PERFORMANCE',
    persona: 'Manager',
    scenario_title: "It's that time of the year again",
    scenario_description: '',
    step_number: 15,
    step_type: 'SCENARIO_COMPLETE',
    completion_message: "Joule helped me prepare thoroughly for Gus's performance conversation. I feel confident and ready to have a constructive, supportive discussion!",
    next_step: 'END'
  },
];

// Helper functions
export function getScenariosByPersona(persona: 'Employee' | 'Manager'): ScenarioMetadata[] {
  const scenarioMap = new Map<string, ScenarioMetadata>();
  
  csvData
    .filter(step => step.persona === persona && step.step_number === 1)
    .forEach(step => {
      scenarioMap.set(step.scenario_id, {
        scenario_id: step.scenario_id,
        persona: step.persona,
        scenario_title: step.scenario_title,
        scenario_description: step.scenario_description,
      });
    });
  
  return Array.from(scenarioMap.values());
}

export function getScenarioSteps(scenarioId: string): CSVStep[] {
  return csvData
    .filter(step => step.scenario_id === scenarioId)
    .sort((a, b) => a.step_number - b.step_number);
}

export function getStep(scenarioId: string, stepNumber: number): CSVStep | undefined {
  return csvData.find(
    step => step.scenario_id === scenarioId && step.step_number === stepNumber
  );
}