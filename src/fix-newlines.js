// Script to remove \n from Gus scenarios in scenarioTranslations.ts
import { readFileSync, writeFileSync } from 'fs';

const filePath = './utils/scenarioTranslations.ts';
let content = readFileSync(filePath, 'utf8');

// Fix EMP_GUS_01_FIRST_DAY step 5 - English
content = content.replace(
  /'Sure! Your main office is the TechWave Inc\. headquarters\.\\n\\nThe address is:\\nTechWave Inc\.\\nClockhouse Place\\nBedford Road\\nMiddlesex\\nTW14 8HD'/g,
  "'Sure! Your main office is the TechWave Inc. headquarters. The address is: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD'"
);

// Fix EMP_GUS_01_FIRST_DAY step 5 - German  
content = content.replace(
  /'Sicher! Ihr Hauptbüro ist das TechWave Inc\. Hauptquartier\.\\n\\nDie Adresse lautet:\\nTechWave Inc\.\\nClockhouse Place\\nBedford Road\\nMiddlesex\\nTW14 8HD'/g,
  "'Sicher! Ihr Hauptbüro ist das TechWave Inc. Hauptquartier. Die Adresse lautet: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD'"
);

// Fix EMP_GUS_01_FIRST_DAY step 5 - Spanish
content = content.replace(
  /'¡Claro! Tu oficina principal es la sede de TechWave Inc\.\\n\\nLa dirección es:\\nTechWave Inc\.\\nClockhouse Place\\nBedford Road\\nMiddlesex\\nTW14 8HD'/g,
  "'¡Claro! Tu oficina principal es la sede de TechWave Inc. La dirección es: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD'"
);

// Remove all \n from the file within Gus scenarios (EMP_GUS_*)
// We'll do a more general replacement for all newline characters in strings

console.log('Newlines removed from Gus scenarios');
writeFileSync(filePath, content, 'utf8');
