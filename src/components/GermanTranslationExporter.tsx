import { Download } from 'lucide-react';
import { csvData } from '../data/csv-scenarios';
import { scenarioContentTranslations } from '../utils/scenarioTranslations';
import { translations } from '../contexts/TranslationContext';

// Helper function to escape CSV fields
function escapeCSV(value: any): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  // Escape double quotes by doubling them
  const escaped = str.replace(/"/g, '""');
  // Wrap in quotes if contains comma, newline, or quote
  if (escaped.includes(',') || escaped.includes('\n') || escaped.includes('"')) {
    return `"${escaped}"`;
  }
  return escaped;
}

// Generate German translations export
function generateGermanTranslationsCSV(): string {
  const lines: string[] = [];
  
  // Header with instructions
  lines.push('SAP JOULE HR APP - GERMAN TRANSLATIONS EXPORT');
  lines.push('Instructions: Edit the "German Translation" column and send this file back for import');
  lines.push('DO NOT modify the "Section" "Category" "Translation Key" or "English Reference" columns');
  lines.push('');
  
  // ============================================================
  // SECTION 1: UI COMPONENT TRANSLATIONS
  // ============================================================
  lines.push('SECTION 1: UI COMPONENT TRANSLATIONS');
  lines.push('Category,Translation Key,English Reference,German Translation');
  
  const allKeys = Object.keys(translations.en);
  
  // Group keys by category
  const categories = {
    'Common UI Elements': allKeys.filter(k => k.startsWith('common.')),
    'Persona Selection Screen': allKeys.filter(k => k.startsWith('persona.')),
    'Scenario Selection Screen': allKeys.filter(k => k.startsWith('scenarios.')),
    'Employee Scenarios - Short Titles': allKeys.filter(k => k.startsWith('scenario.EMP_GUS_') && k.endsWith('.short')),
    'Manager Scenarios - Short Titles': allKeys.filter(k => k.startsWith('scenario.MGR_JADA_') && k.endsWith('.short')),
    'Employee Scenarios - Full Titles': allKeys.filter(k => k.startsWith('scenario.EMP_GUS_') && (k.endsWith('.title') || k.endsWith('.description'))),
    'Manager Scenarios - Full Titles': allKeys.filter(k => k.startsWith('scenario.MGR_JADA_') && (k.endsWith('.title') || k.endsWith('.description'))),
    'Decision Choices': allKeys.filter(k => k.startsWith('decision.')),
  };
  
  for (const [category, keys] of Object.entries(categories)) {
    for (const key of keys) {
      const row = [
        escapeCSV(category),
        escapeCSV(key),
        escapeCSV(translations.en[key] || ''),
        escapeCSV(translations.de[key] || ''),
      ];
      lines.push(row.join(','));
    }
  }
  
  // ============================================================
  // SECTION 2: SCENARIO CONTENT TRANSLATIONS
  // ============================================================
  lines.push('');
  lines.push('');
  lines.push('SECTION 2: SCENARIO CONTENT TRANSLATIONS (Joule Conversations)');
  lines.push('Scenario ID,Step Number,Field Type,English Reference,German Translation');
  
  // Get all scenario IDs
  const scenarioIds = Object.keys(scenarioContentTranslations).sort();
  
  for (const scenarioId of scenarioIds) {
    const scenario = scenarioContentTranslations[scenarioId];
    const stepNumbers = Object.keys(scenario).map(Number).sort((a, b) => a - b);
    
    for (const stepNum of stepNumbers) {
      const step = scenario[stepNum];
      
      // Get all fields from English version
      const fields = Object.keys(step.en || {});
      
      for (const field of fields) {
        const row = [
          escapeCSV(scenarioId),
          escapeCSV(stepNum),
          escapeCSV(field),
          escapeCSV(step.en?.[field] || ''),
          escapeCSV(step.de?.[field] || ''),
        ];
        lines.push(row.join(','));
      }
    }
  }
  
  // ============================================================
  // SECTION 3: SUMMARY
  // ============================================================
  lines.push('');
  lines.push('');
  lines.push('TRANSLATION SUMMARY');
  lines.push('Metric,Count');
  
  const employeeScenarios = scenarioIds.filter(id => id.startsWith('EMP_')).length;
  const managerScenarios = scenarioIds.filter(id => id.startsWith('MGR_')).length;
  const uiTranslationKeys = allKeys.length;
  
  let totalContentTranslations = 0;
  for (const scenarioId of scenarioIds) {
    const scenario = scenarioContentTranslations[scenarioId];
    const stepNumbers = Object.keys(scenario);
    for (const stepNum of stepNumbers) {
      const step = scenario[Number(stepNum)];
      const fields = Object.keys(step.en || {});
      totalContentTranslations += fields.length;
    }
  }
  
  lines.push(`Total UI Translation Keys,${uiTranslationKeys}`);
  lines.push(`Total Scenario Content Translations,${totalContentTranslations}`);
  lines.push(`Total Translations,${uiTranslationKeys + totalContentTranslations}`);
  lines.push(`Employee Scenarios (Gus),${employeeScenarios}`);
  lines.push(`Manager Scenarios (Jada),${managerScenarios}`);
  lines.push(`Export Date,${new Date().toISOString().split('T')[0]}`);
  
  return lines.join('\n');
}

export function GermanTranslationExporter() {
  const handleExport = () => {
    const csvContent = generateGermanTranslationsCSV();
    
    // Add UTF-8 BOM for proper Excel encoding of special characters (ü, ö, ä, ß)
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    const dateStr = new Date().toISOString().split('T')[0];
    link.setAttribute('href', url);
    link.setAttribute('download', `SAP_Joule_German_Translations_${dateStr}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleExport}
        className="bg-[#0070f2] hover:bg-[#005fd1] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 font-['72:Bold',sans-serif] text-[14px] transition-all hover:scale-105"
      >
        <Download className="w-5 h-5" />
        Export German Translations
      </button>
    </div>
  );
}