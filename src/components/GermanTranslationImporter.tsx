import { Upload } from 'lucide-react';
import { useState } from 'react';

export function GermanTranslationImporter() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csvContent = e.target?.result as string;
        const lines = csvContent.split('\n');
        
        // Parse the CSV
        const uiTranslations: Record<string, string> = {};
        const scenarioTranslations: Record<string, Record<number, Record<string, string>>> = {};
        
        let currentSection = '';
        let isInUISection = false;
        let isInScenarioSection = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          
          // Detect sections
          if (line.includes('SECTION 1: UI COMPONENT TRANSLATIONS')) {
            isInUISection = true;
            isInScenarioSection = false;
            continue;
          } else if (line.includes('SECTION 2: SCENARIO CONTENT TRANSLATIONS')) {
            isInUISection = false;
            isInScenarioSection = true;
            continue;
          } else if (line.includes('TRANSLATION SUMMARY')) {
            break; // End of data
          }
          
          // Skip headers and empty lines
          if (line.startsWith('Category,') || line.startsWith('Scenario ID,') || line === '') {
            continue;
          }
          
          // Parse CSV line (handling quoted values)
          const values = parseCSVLine(line);
          
          if (isInUISection && values.length >= 4) {
            // Format: Category, Translation Key, English Reference, German Translation
            const key = values[1];
            const germanValue = values[3];
            if (key && germanValue) {
              uiTranslations[key] = germanValue;
            }
          } else if (isInScenarioSection && values.length >= 5) {
            // Format: Scenario ID, Step Number, Field Type, English Reference, German Translation
            const scenarioId = values[0];
            const stepNum = parseInt(values[1]);
            const field = values[2];
            const germanValue = values[4];
            
            if (scenarioId && !isNaN(stepNum) && field && germanValue) {
              if (!scenarioTranslations[scenarioId]) {
                scenarioTranslations[scenarioId] = {};
              }
              if (!scenarioTranslations[scenarioId][stepNum]) {
                scenarioTranslations[scenarioId][stepNum] = {};
              }
              scenarioTranslations[scenarioId][stepNum][field] = germanValue;
            }
          }
        }
        
        // Generate TypeScript code for the translations
        const outputCode = generateTranslationCode(uiTranslations, scenarioTranslations);
        
        // Download the generated code
        const blob = new Blob([outputCode], { type: 'text/plain;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'german_translations_import.txt');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert(`Import successful!\n\nUI Translations: ${Object.keys(uiTranslations).length}\nScenario Translations: ${Object.keys(scenarioTranslations).length} scenarios\n\nThe TypeScript code has been downloaded. Please update your translation files manually.`);
      } catch (error) {
        console.error('Import error:', error);
        alert('Error processing the CSV file. Please check the format and try again.');
      } finally {
        setIsProcessing(false);
        event.target.value = ''; // Reset input
      }
    };
    
    reader.readAsText(file);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <label className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 font-['72:Bold',sans-serif] text-[14px] transition-all hover:scale-105 cursor-pointer">
        <Upload className="w-5 h-5" />
        {isProcessing ? 'Processing...' : 'Import German Translations'}
        <input
          type="file"
          accept=".csv"
          onChange={handleImport}
          className="hidden"
          disabled={isProcessing}
        />
      </label>
    </div>
  );
}

// Helper function to parse CSV line with quoted values
function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let currentValue = '';
  let insideQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped quote
        currentValue += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      // End of value
      values.push(currentValue);
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  
  // Add last value
  values.push(currentValue);
  
  return values;
}

// Generate TypeScript code from parsed translations
function generateTranslationCode(
  uiTranslations: Record<string, string>,
  scenarioTranslations: Record<string, Record<number, Record<string, string>>>
): string {
  let code = '// ========================================\n';
  code += '// GERMAN TRANSLATION IMPORT\n';
  code += '// Generated from CSV import\n';
  code += '// ========================================\n\n';
  
  // UI Translations
  code += '// ========================================\n';
  code += '// 1. UPDATE TranslationContext.tsx\n';
  code += '// Add these to the "de" object:\n';
  code += '// ========================================\n\n';
  code += 'de: {\n';
  
  const sortedKeys = Object.keys(uiTranslations).sort();
  for (const key of sortedKeys) {
    const value = uiTranslations[key].replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    code += `  '${key}': "${value}",\n`;
  }
  
  code += '}\n\n';
  
  // Scenario Translations
  code += '// ========================================\n';
  code += '// 2. UPDATE scenarioTranslations.ts\n';
  code += '// Update these scenario translations:\n';
  code += '// ========================================\n\n';
  
  const sortedScenarioIds = Object.keys(scenarioTranslations).sort();
  for (const scenarioId of sortedScenarioIds) {
    code += `'${scenarioId}': {\n`;
    
    const steps = scenarioTranslations[scenarioId];
    const sortedSteps = Object.keys(steps).map(Number).sort((a, b) => a - b);
    
    for (const stepNum of sortedSteps) {
      code += `  ${stepNum}: {\n`;
      code += `    de: {\n`;
      
      const fields = steps[stepNum];
      for (const [field, value] of Object.entries(fields)) {
        const escapedValue = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
        code += `      ${field}: "${escapedValue}",\n`;
      }
      
      code += `    },\n`;
      code += `  },\n`;
    }
    
    code += `},\n\n`;
  }
  
  code += '\n// ========================================\n';
  code += '// IMPORT COMPLETE\n';
  code += '// ========================================\n';
  
  return code;
}
