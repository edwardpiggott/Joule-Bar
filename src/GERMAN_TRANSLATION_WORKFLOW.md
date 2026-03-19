# German Translation Export/Import Workflow

## Overview
This document explains how to export, edit, and re-import German translations for the SAP Joule HR App.

## Quick Start

### Step 1: Export German Translations
1. Launch the app
2. Look for the blue **"Export German Translations"** button in the bottom-right corner
3. Click it to download a CSV file named `SAP_Joule_German_Translations_YYYY-MM-DD.csv`

### Step 2: Edit in Excel
1. Open the downloaded CSV file in Microsoft Excel or Google Sheets
2. **DO NOT EDIT** these columns:
   - Category
   - Translation Key
   - Scenario ID
   - Step Number
   - Field Type
   - English Reference
3. **ONLY EDIT** the "German Translation" column
4. Save the file as CSV (keep the same format)

### Step 3: Import Back
1. Go back to the app
2. Look for the green **"Import German Translations"** button in the bottom-left corner
3. Click it and select your edited CSV file
4. The system will process it and download a text file with the updated TypeScript code
5. Use this code to update your translation files manually (see instructions below)

## File Structure

### CSV Format - Section 1: UI Component Translations
```csv
Category,Translation Key,English Reference,German Translation
Common UI Elements,common.back,Back,Zurück
Persona Selection Screen,persona.title,Who are you today?,Wer bist du heute?
```

### CSV Format - Section 2: Scenario Content Translations
```csv
Scenario ID,Step Number,Field Type,English Reference,German Translation
EMP_GUS_BENEFITS,1,user_input_text,Show me my benefits,Zeige mir meine Vorteile
EMP_GUS_BENEFITS,2,joule_response_text,"Here are your benefits...",Hier sind Ihre Vorteile...
```

## Translation Categories

### 1. UI Component Translations
- **Common UI Elements**: Back buttons, disclaimers, general UI text
- **Persona Selection Screen**: Welcome messages, persona descriptions
- **Scenario Selection Screen**: Headers, navigation text
- **Employee/Manager Scenarios - Short Titles**: Brief scenario names shown in cards
- **Employee/Manager Scenarios - Full Titles**: Full scenario titles and descriptions
- **Decision Choices**: Choice button labels

### 2. Scenario Content Translations
- **user_input_text**: What the user types to Joule
- **joule_response_text**: Joule's responses
- **action_label**: Single action button labels
- **action_a_label / action_b_label**: Dual action button labels
- **choice_a_label / choice_b_label**: Scenario choice labels
- **completion_message**: Messages shown when scenario completes
- **loading_message**: Loading/processing messages

## Updating Translation Files (After Import)

### Update 1: TranslationContext.tsx
Location: `/contexts/TranslationContext.tsx`

Find the `de` object and update the values:
```typescript
de: {
  'common.back': 'Zurück',
  'persona.title': 'Wer bist du heute?',
  // ... all UI translations
}
```

### Update 2: scenarioTranslations.ts
Location: `/utils/scenarioTranslations.ts`

Update scenario translations:
```typescript
export const scenarioContentTranslations: ScenarioContentTranslations = {
  'EMP_GUS_BENEFITS': {
    1: {
      de: {
        user_input_text: 'Zeige mir meine Vorteile',
      },
    },
    2: {
      de: {
        joule_response_text: 'Hier sind Ihre Vorteile...',
      },
    },
  },
  // ... all scenario translations
};
```

## Best Practices

### Translation Guidelines
1. **Maintain Formality**: Use "Sie" (formal) for professional contexts
2. **Preserve Formatting**: Keep line breaks (`\n`) and special characters
3. **Technical Terms**: Keep SAP-specific terms like "SuccessFactors", "Joule" unchanged
4. **Placeholders**: Preserve any placeholders like {name} or {value}
5. **Punctuation**: Adapt punctuation to German conventions

### Common Issues
- **Quotes in Text**: If your translation contains quotes, they will be automatically escaped
- **Commas**: Commas in translations are handled automatically by the CSV format
- **Line Breaks**: Multi-line translations are preserved using `\n`
- **Special Characters**: Umlauts (ä, ö, ü, ß) are fully supported

## Statistics
The export includes a summary section showing:
- Total UI Translation Keys
- Total Scenario Content Translations
- Total number of translations
- Number of Employee scenarios (Gus)
- Number of Manager scenarios (Jada)
- Export date

## Support
If you encounter issues:
1. Check that the CSV format hasn't been corrupted
2. Ensure you only edited the "German Translation" column
3. Verify the file is saved as CSV UTF-8
4. Check for any missing quotes or special characters

## Version Control
- Always keep a backup of the original CSV export
- Add translation update date to commit messages
- Test all scenarios after importing new translations
