# Comprehensive CSV Export Documentation

## Overview
This document describes the comprehensive CSV export functionality for the SAP Joule HR Experience application. The export includes all scenarios, UI component translations, and supporting text across all 6 supported languages.

## Supported Languages
1. **English** (en)
2. **Deutsch** (de) - German
3. **Español** (es) - Spanish
4. **Português** (pt) - Portuguese
5. **Italiano** (it) - Italian
6. **Türkçe** (tr) - Turkish

## Export Sections

### Section 1: UI Component Translations
**Column Structure:**
- Category
- Translation Key
- English
- Deutsch
- Español
- Português
- Italiano
- Türkçe

**Categories Included:**
1. **Persona Selection** - All text from the persona selection screen
2. **Scenario Selection** - Scenario selection UI text
3. **Scenario Short Titles - Employee** - Short titles for Gus (Employee) scenarios
4. **Scenario Short Titles - Manager** - Short titles for Jada (Manager) scenarios
5. **Scenario Titles - Employee** - Full titles and descriptions for Employee scenarios
6. **Scenario Titles - Manager** - Full titles and descriptions for Manager scenarios
7. **Decision Choices** - Decision point labels
8. **Common UI** - Common buttons, labels, and interface elements

**Example Keys:**
- `persona.title` - "JOULE EXPERIENCE" header
- `persona.gus.name` - "Meet Gus"
- `scenario.EMP_GUS_01_PROFILE.short` - "First day, right away!"
- `common.continue` - "Continue" button

### Section 2: Scenario Content Translations
**Column Structure:**
- Scenario ID
- Persona (Employee/Manager)
- Step Number
- Field (field type)
- English
- Deutsch
- Español
- Português
- Italiano
- Türkçe

**Scenario IDs:**

**Employee (Gus) Scenarios:**
1. `EMP_GUS_01_FIRST_DAY` - An Awkward First Day
2. `EMP_GUS_02_TRAVEL` - A Business Trip to Remember
3. `EMP_GUS_03_PAYROLL` - Help! I've Been Paid Too Much
4. `EMP_GUS_04_PRESENTATION` - Fake It Till You Make It

**Manager (Jada) Scenarios:**
1. `MGR_JADA_01_ONBOARDING` - Mullet Party First Day
2. `MGR_JADA_02_COMP` - Everyone Gets a Bonus
3. `MGR_JADA_03_RECRUIT` - Avoiding Admin Like a Pro
4. `MGR_JADA_04_PERFORMANCE` - It's that time of the year again

**Field Types:**
- `scenario_title` - Full scenario title
- `scenario_description` - Scenario description
- `choice_a_label` - Option A button label
- `choice_b_label` - Option B button label
- `user_input_text` - User's input to Joule
- `joule_response_text` - Joule's response text
- `completion_message` - Scenario completion message

### Section 3: Scenario Structure (English Reference)
**Column Structure:**
Complete technical structure for all scenarios including:
- Scenario ID
- Persona
- Scenario Title
- Scenario Description
- Step Number
- Step Type (SCENARIO_CHOICE, USER_PROMPT, JOULE_TEXT_RESPONSE, etc.)
- User Input Text
- Joule Response Text
- Response Component (visual component identifiers)
- Action Labels
- Next Step Navigation
- Completion Messages
- Loading Configuration

**Step Types:**
- `SCENARIO_CHOICE` - Initial decision point (Option A vs Option B)
- `SYSTEM_MESSAGE` - System message (non-Joule path outcome)
- `USER_PROMPT` - User enters text into Joule
- `USER_SELECTION` - User makes a selection from options
- `JOULE_LOADING` - Joule processing indicator
- `JOULE_TEXT_RESPONSE` - Joule text response
- `JOULE_RICH_RESPONSE` - Joule response with visual components
- `JOULE_VISUAL_OUTPUT` - Visual output from Joule
- `ACTION_BUTTON` - Single action button
- `DUAL_ACTION_BUTTONS` - Two action buttons
- `VISUAL_OUTPUT` - Visual display
- `SCENARIO_COMPLETE` - Scenario completion screen

### Section 4: Summary Statistics
Provides a quick overview:
- Total number of scenarios (8)
- Employee scenarios count (4)
- Manager scenarios count (4)
- Total scenario steps
- Total UI translation keys
- Number of supported languages (6)
- Language list

## How to Use the Export

### In the Application
1. Navigate to any screen in the application
2. Look for the purple "Export Full CSV" button in the bottom-right corner
3. Click the button to download the CSV file
4. The file will be named: `joule-experience-full-export-YYYY-MM-DD.csv`

### Programmatically
The export functionality is available through the `CSVExportTool` component located at `/components/CSVExportTool.tsx`.

## Scenario Flow Pattern

Each scenario follows this structure:

```
Step 1: SCENARIO_CHOICE
├── Option A (Manual/Non-Joule Path)
│   └── Leads to negative outcome (SYSTEM_MESSAGE → END)
│
└── Option B (Joule-Assisted Path)
    ├── USER_PROMPT → Joule conversation
    ├── JOULE responses (text and/or rich components)
    ├── Multiple interaction steps
    └── SCENARIO_COMPLETE (positive outcome)
```

## Persona Details

### Employee (Gus)
- **Name:** Gus
- **Role:** New employee at TechWave Inc
- **Scenarios:** 4 employee-focused scenarios
- **Scenario IDs:** Begin with `EMP_GUS_`

### Manager (Jada)
- **Name:** Jada
- **Role:** Manager at TechWave, Inc
- **Scenarios:** 4 manager-focused scenarios
- **Scenario IDs:** Begin with `MGR_JADA_`

## Translation Keys Naming Convention

### UI Component Keys
- `persona.*` - Persona selection screen
- `scenarios.*` - Scenario selection screen
- `scenario.{SCENARIO_ID}.short` - Short scenario title
- `scenario.{SCENARIO_ID}.title` - Full scenario title
- `scenario.{SCENARIO_ID}.description` - Scenario description
- `decision.*` - Decision choice labels
- `common.*` - Common UI elements

### Scenario Content Fields
- Organized by `scenario_id` → `step_number` → `field_name`
- Each step can have multiple fields (title, description, prompts, responses)
- All translations stored per language per field

## CSV Format Specifications

### Encoding
- UTF-8 with BOM
- Line endings: LF (Unix style)

### Field Escaping
- Fields containing commas are wrapped in double quotes
- Fields containing newlines are wrapped in double quotes
- Double quotes within fields are escaped by doubling them (`""`)

### Empty Values
- Empty fields are represented as empty strings
- Optional fields may be blank

## File Structure Summary

```
===== SECTION 1: UI COMPONENT TRANSLATIONS =====
Category | Key | EN | DE | ES | PT | IT | TR
(~90 rows of UI translations)

===== SECTION 2: SCENARIO CONTENT TRANSLATIONS =====
Scenario ID | Persona | Step | Field | EN | DE | ES | PT | IT | TR
(~300-400 rows of scenario content)

===== SECTION 3: SCENARIO STRUCTURE =====
Full technical specification (English only)
(~150-200 rows of scenario steps)

===== SECTION 4: SUMMARY STATISTICS =====
Quick reference statistics
```

## Use Cases

### Translation Management
- Export CSV to send to translation teams
- Update translations in external tools (Excel, Google Sheets)
- Import back into application after review

### Content Audit
- Review all text content across languages
- Check for consistency
- Identify missing translations

### Documentation
- Generate content documentation
- Create user guides
- Develop training materials

### Backup
- Archive current content state
- Version control for translations
- Rollback capability

## Technical Implementation

### Source Files
- `/contexts/TranslationContext.tsx` - UI component translations
- `/utils/scenarioTranslations.ts` - Scenario content translations
- `/data/csv-scenarios.ts` - Scenario structure and flow

### Export Component
- `/components/CSVExportTool.tsx` - Main export component
- Uses native browser download (no server required)
- Client-side CSV generation
- Automatic filename with date stamp

## Maintenance Notes

### Adding New Languages
1. Add language code to `Language` type in TranslationContext
2. Add translation object to `translations` constant
3. Add language column to CSV export header
4. Add corresponding translations to all sections

### Adding New Scenarios
1. Add scenario data to `/data/csv-scenarios.ts`
2. Add translations to `/utils/scenarioTranslations.ts`
3. Export will automatically include new scenarios

### Adding New UI Components
1. Add translation keys to `/contexts/TranslationContext.tsx`
2. Follow naming convention (category.element.property)
3. Export will automatically include new keys

## Support

For questions or issues with the CSV export:
1. Check this documentation
2. Review the source code in `/components/CSVExportTool.tsx`
3. Verify data sources in `/data/` and `/utils/` directories

---

**Last Updated:** December 22, 2024  
**Version:** 1.0  
**Languages Supported:** 6 (EN, DE, ES, PT, IT, TR)  
**Total Scenarios:** 8 (4 Employee + 4 Manager)
