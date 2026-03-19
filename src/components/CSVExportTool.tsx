import React from 'react';
import { csvData } from '../data/csv-scenarios';
import { scenarioContentTranslations } from '../utils/scenarioTranslations';
import { translations } from '../contexts/TranslationContext';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

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

// Generate the full CSV export
function generateFullCSV(): string {
  const lines: string[] = [];
  
  // ============================================================
  // SECTION 1: UI COMPONENT TRANSLATIONS
  // ============================================================
  lines.push('');
  lines.push('===== UI COMPONENT TRANSLATIONS =====');
  lines.push('Category,Translation Key,English,Deutsch,Español,Português,Italiano,Türkçe');
  
  // Get all unique keys from English translations
  const allKeys = Object.keys(translations.en);
  
  // Group keys by category
  const categories: Record<string, string[]> = {
    'Persona Selection': allKeys.filter(k => k.startsWith('persona.')),
    'Scenario Selection': allKeys.filter(k => k.startsWith('scenarios.')),
    'Scenario Short Titles - Employee': allKeys.filter(k => k.startsWith('scenario.EMP_GUS_') && k.endsWith('.short')),
    'Scenario Short Titles - Manager': allKeys.filter(k => k.startsWith('scenario.MGR_JADA_') && k.endsWith('.short')),
    'Scenario Titles - Employee': allKeys.filter(k => k.startsWith('scenario.EMP_GUS_') && (k.endsWith('.title') || k.endsWith('.description'))),
    'Scenario Titles - Manager': allKeys.filter(k => k.startsWith('scenario.MGR_JADA_') && (k.endsWith('.title') || k.endsWith('.description'))),
    'Decision Choices': allKeys.filter(k => k.startsWith('decision.')),
    'Common UI': allKeys.filter(k => k.startsWith('common.')),
  };
  
  for (const [category, keys] of Object.entries(categories)) {
    for (const key of keys) {
      const row = [
        escapeCSV(category),
        escapeCSV(key),
        escapeCSV(translations.en[key] || ''),
        escapeCSV(translations.de[key] || ''),
        escapeCSV(translations.es[key] || ''),
        escapeCSV(translations.pt[key] || ''),
        escapeCSV(translations.it[key] || ''),
        escapeCSV(translations.tr[key] || ''),
      ];
      lines.push(row.join(','));
    }
  }
  
  // ============================================================
  // SECTION 2: SCENARIO CONTENT TRANSLATIONS
  // ============================================================
  lines.push('');
  lines.push('');
  lines.push('===== SCENARIO CONTENT TRANSLATIONS =====');
  lines.push('Scenario ID,Persona,Step Number,Field,English,Deutsch,Español,Português,Italiano,Türkçe');
  
  // Get all scenario IDs
  const scenarioIds = Object.keys(scenarioContentTranslations);
  
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
          escapeCSV(scenarioId.startsWith('EMP_') ? 'Employee' : 'Manager'),
          escapeCSV(stepNum),
          escapeCSV(field),
          escapeCSV(step.en?.[field] || ''),
          escapeCSV(step.de?.[field] || ''),
          escapeCSV(step.es?.[field] || ''),
          escapeCSV(step.pt?.[field] || ''),
          escapeCSV(step.it?.[field] || ''),
          escapeCSV(step.tr?.[field] || ''),
        ];
        lines.push(row.join(','));
      }
    }
  }
  
  // ============================================================
  // SECTION 3: SCENARIO STRUCTURE (English only for reference)
  // ============================================================
  lines.push('');
  lines.push('');
  lines.push('===== SCENARIO STRUCTURE (English Reference) =====');
  lines.push('Scenario ID,Persona,Scenario Title,Scenario Description,Step Number,Step Type,User Input Text,Joule Response Text,Response Component,Action Label,Action A Label,Action B Label,Action A Next Step,Action B Next Step,Choice A Label,Choice B Label,Choice A Next Step,Choice B Next Step,Next Step,Completion Message,Requires User Action,Loading Message,Loading Duration');
  
  for (const step of csvData) {
    const row = [
      escapeCSV(step.scenario_id),
      escapeCSV(step.persona),
      escapeCSV(step.scenario_title),
      escapeCSV(step.scenario_description),
      escapeCSV(step.step_number),
      escapeCSV(step.step_type),
      escapeCSV(step.user_input_text || ''),
      escapeCSV(step.joule_response_text || ''),
      escapeCSV(step.response_component || ''),
      escapeCSV(step.action_label || ''),
      escapeCSV(step.action_a_label || ''),
      escapeCSV(step.action_b_label || ''),
      escapeCSV(step.action_a_next_step || ''),
      escapeCSV(step.action_b_next_step || ''),
      escapeCSV(step.choice_a_label || ''),
      escapeCSV(step.choice_b_label || ''),
      escapeCSV(step.choice_a_next_step || ''),
      escapeCSV(step.choice_b_next_step || ''),
      escapeCSV(step.next_step || ''),
      escapeCSV(step.completion_message || ''),
      escapeCSV(step.requires_user_action || ''),
      escapeCSV(step.loading_message || ''),
      escapeCSV(step.loading_duration || ''),
    ];
    lines.push(row.join(','));
  }
  
  // ============================================================
  // SECTION 4: SUMMARY STATISTICS
  // ============================================================
  lines.push('');
  lines.push('');
  lines.push('===== SUMMARY STATISTICS =====');
  lines.push('Metric,Count');
  
  const employeeScenarios = scenarioIds.filter(id => id.startsWith('EMP_')).length;
  const managerScenarios = scenarioIds.filter(id => id.startsWith('MGR_')).length;
  const totalSteps = csvData.length;
  const uiTranslationKeys = allKeys.length;
  
  lines.push(`Total Scenarios,${scenarioIds.length}`);
  lines.push(`Employee Scenarios (Gus),${employeeScenarios}`);
  lines.push(`Manager Scenarios (Jada),${managerScenarios}`);
  lines.push(`Total Scenario Steps,${totalSteps}`);
  lines.push(`Total UI Translation Keys,${uiTranslationKeys}`);
  lines.push(`Supported Languages,6`);
  lines.push(`Languages,"English, Deutsch, Español, Português, Italiano, Türkçe"`);
  
  return lines.join('\n');
}

export function CSVExportTool() {
  const handleDownload = () => {
    const csvContent = generateFullCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `joule-experience-full-export-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={handleDownload}
        className="gap-2 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #7b2cbf 0%, #5a189a 50%, #3c096c 100%)',
          color: 'white',
        }}
      >
        <Download className="w-5 h-5" />
        Export Full CSV
      </Button>
    </div>
  );
}
