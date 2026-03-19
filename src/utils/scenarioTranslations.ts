import { CSVStep } from '../data/csv-scenarios';

// Complete translation mapping for ALL scenario content
export const scenarioContentTranslations: Record<string, Record<number, Record<string, any>>> = {
  // ====================
  // GUS SCENARIOS (EMPLOYEE)
  // ====================
  
  // EMP_GUS_01_FIRST_DAY - An Awkward First Day
  EMP_GUS_01_FIRST_DAY: {
    1: {
      en: {
        scenario_title: 'An Awkward First Day',
        scenario_description: 'You are starting a new job and realise you do not know which office to go to on day one.',
        choice_a_label: 'Message future manager on LinkedIn',
        choice_b_label: 'Figure it out with Joule',
      },
      de: {
        scenario_title: 'Ein schwieriger erster Tag',
        scenario_description: 'Sie beginnen einen neuen Job und stellen fest, dass Sie nicht wissen, in welches Büro Sie am ersten Tag gehen sollen.',
        choice_a_label: 'Zukünftigen Manager auf LinkedIn anschreiben',
        choice_b_label: 'Mit Joule herausfinden',
      },
      es: {
        scenario_title: 'Un primer día incómodo',
        scenario_description: 'Estás comenzando un nuevo trabajo y te das cuenta de que no sabes a qué oficina ir el primer día.',
        choice_a_label: 'Enviar mensaje al futuro gerente en LinkedIn',
        choice_b_label: 'Resolverlo con Joule',
      },
      pt: {
        scenario_title: 'Um primeiro dia constrangedor',
        scenario_description: 'Você está começando um novo emprego e percebe que não sabe para qual escritório ir no primeiro dia.',
        choice_a_label: 'Enviar mensagem ao futuro gerente no LinkedIn',
        choice_b_label: 'Descobrir com Joule',
      },
      it: {
        scenario_title: 'Un primo giorno imbarazzante',
        scenario_description: 'Stai iniziando un nuovo lavoro e ti rendi conto di non sapere in quale ufficio andare il primo giorno.',
        choice_a_label: 'Inviare un messaggio al futuro manager su LinkedIn',
        choice_b_label: 'Risolverlo con Joule',
      },
      tr: {
        scenario_title: 'Garip Bir İlk Gün',
        scenario_description: 'Yeni bir işe başlıyorsunuz ve ilk gün hangi ofise gideceğinizi bilmediğinizi fark ediyorsunuz.',
        choice_a_label: 'Gelecekteki yöneticiye LinkedIn\'den mesaj gönderin',
        choice_b_label: 'Joule ile çözün',
      },
    },
    2: {
      en: {
        joule_response_text: 'Your message has not been seen yet and you still do not know which office to go to.',
      },
      de: {
        joule_response_text: 'Ihre Nachricht wurde noch nicht gesehen und Sie wissen immer noch nicht, in welches Büro Sie gehen sollen.',
      },
      es: {
        joule_response_text: 'Tu mensaje aún no ha sido visto y todavía no sabes a qué oficina ir.',
      },
      pt: {
        joule_response_text: 'Sua mensagem ainda não foi vista e você ainda não sabe para qual escritório ir.',
      },
      it: {
        joule_response_text: 'Il tuo messaggio non è stato ancora visto e non sai ancora in quale ufficio andare.',
      },
      tr: {
        joule_response_text: 'Mesajınız henüz görülmedi ve hala hangi ofise gideceğinizi bilmiyorsunuz.',
      },
    },
    4: {
      en: {
        user_input_text: 'Which office should I go to on my first day?',
      },
      de: {
        user_input_text: 'In welches Büro soll ich an meinem ersten Tag gehen?',
      },
      es: {
        user_input_text: '¿A qué oficina debo ir en mi primer día?',
      },
      pt: {
        user_input_text: 'Para qual escritório devo ir no meu primeiro dia?',
      },
      it: {
        user_input_text: 'In quale ufficio dovrei andare il mio primo giorno?',
      },
      tr: {
        user_input_text: 'İlk günümde hangi ofise gitmeliyim?',
      },
    },
    5: {
      en: {
        joule_response_text: 'Sure! Your main office is the TechWave Inc. headquarters. The address is: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD',
      },
      de: {
        joule_response_text: 'Ihr Hauptbüro ist das TechWave Inc. Hauptquartier. Die Adresse lautet: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD',
      },
      es: {
        joule_response_text: '¡Claro! Tu oficina principal es la sede de TechWave Inc. La dirección es: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD',
      },
      pt: {
        joule_response_text: 'Claro! Seu escritório principal é a sede da TechWave Inc. O endereço é: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD',
      },
      it: {
        joule_response_text: 'Certo! Il tuo ufficio principale è la sede di TechWave Inc. L\'indirizzo è: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD',
      },
      tr: {
        joule_response_text: 'Elbette! Ana ofisiniz TechWave Inc. genel merkezidir. Adres: TechWave Inc. Clockhouse Place Bedford Road Middlesex TW14 8HD',
      },
    },
    6: {
      en: {
        user_input_text: 'Will someone be there to help me get set up?',
      },
      de: {
        user_input_text: 'Wird jemand da sein, der mir beim Einrichten hilft?',
      },
      es: {
        user_input_text: '¿Habrá alguien allí para ayudarme a instalarme?',
      },
      pt: {
        user_input_text: 'Alguém estará lá para me ajudar a me organizar?',
      },
      it: {
        user_input_text: 'Ci sarà qualcuno ad aiutarmi a sistemarmi?',
      },
      tr: {
        user_input_text: 'Hazırlanmama yardım edecek biri olacak mı?',
      },
    },
    7: {
      en: {
        joule_response_text: 'Yes. Sarah Walters will meet you and help you get started.',
      },
      de: {
        joule_response_text: 'Ja. Sarah Walters wird Sie treffen und Ihnen beim Start helfen.',
      },
      es: {
        joule_response_text: 'Sí. Sarah Walters te recibirá y te ayudará a comenzar.',
      },
      pt: {
        joule_response_text: 'Sim. Sarah Walters irá recebê-lo e ajudá-lo a começar.',
      },
      it: {
        joule_response_text: 'Sì. Sarah Walters ti incontrerà e ti aiuterà a iniziare.',
      },
      tr: {
        joule_response_text: 'Evet. Sarah Walters sizinle buluşacak ve başlamanıza yardımcı olacak.',
      },
    },
    10: {
      en: {
        completion_message: "SAP Joule has transformed how our workforce navigates their daily tasks, delivering instant, intelligent assistance that keeps our operations running smoothly.",
      },
      de: {
        completion_message: 'SAP Joule hat die Art und Weise verändert, wie unsere Belegschaft ihre täglichen Aufgaben bewältigt, und bietet sofortige, intelligente Unterstützung, die unsere Betriebsabläufe reibungslos am Laufen hält.',
      },
      es: {
        completion_message: 'SAP Joule ha transformado la forma en que nuestra fuerza laboral navega sus tareas diarias, brindando asistencia instantánea e inteligente que mantiene nuestras operaciones funcionando sin problemas.',
      },
      pt: {
        completion_message: 'O SAP Joule transformou a forma como nossa força de trabalho navega em suas tarefas diárias, fornecendo assistência instantânea e inteligente que mantém nossas operações funcionando perfeitamente.',
      },
      it: {
        completion_message: 'SAP Joule ha trasformato il modo in cui la nostra forza lavoro affronta le attività quotidiane, fornendo assistenza istantanea e intelligente che mantiene le nostre operazioni in perfetto funzionamento.',
      },
      tr: {
        completion_message: 'SAP Joule, iş gücümüzün günlük görevlerinde gezinme şeklini değiştirdi ve operasyonlarımızı sorunsuz bir şekilde yürütmemizi sağlayan anında, akıllı destek sunuyor.',
      },
    },
  },

  // EMP_GUS_02_TRAVEL - A Business Trip to Remember
  EMP_GUS_02_TRAVEL: {
    1: {
      en: {
        scenario_title: 'A Business Trip to Remember',
        scenario_description: 'You forgot to book your flight for tomorrow\'s important business meeting.',
        choice_a_label: 'Call in sick',
        choice_b_label: 'Book the flight while in the taxi',
      },
      de: {
        scenario_title: 'Eine unvergessliche Geschäftsreise',
        scenario_description: 'Sie haben vergessen, Ihren Flug für das wichtige Geschäftstreffen morgen zu buchen.',
        choice_a_label: 'Sich krankmelden',
        choice_b_label: 'Den Flug im Taxi buchen',
      },
      es: {
        scenario_title: 'Un viaje de negocios para recordar',
        scenario_description: 'Olvidaste reservar tu vuelo para la importante reunión de negocios de mañana.',
        choice_a_label: 'Llamar para reportar enfermedad',
        choice_b_label: 'Reservar el vuelo mientras estoy en el taxi',
      },
      pt: {
        scenario_title: 'Uma viagem de negócios para lembrar',
        scenario_description: 'Você esqueceu de reservar seu voo para a importante reunião de negócios de amanhã.',
        choice_a_label: 'Ligar para avisar doença',
        choice_b_label: 'Reservar o voo enquanto estou no táxi',
      },
      it: {
        scenario_title: 'Un viaggio d\'affari da ricordare',
        scenario_description: 'Hai dimenticato di prenotare il volo per l\'importante riunione di lavoro di domani.',
        choice_a_label: 'Chiamare per malattia',
        choice_b_label: 'Prenotare il volo mentre sono in taxi',
      },
      tr: {
        scenario_title: 'Unutulmaz Bir İş Seyahati',
        scenario_description: 'Yarınki önemli iş toplantısı için uçuşunuzu rezerve etmeyi unuttunuz.',
        choice_a_label: 'Hasta olduğumu bildirin',
        choice_b_label: 'Taksideyken uçuşu rezerve edin',
      },
    },
    2: {
      en: {
        joule_response_text: 'You miss the marketing kick-off entirely.',
      },
      de: {
        joule_response_text: 'Sie verpassen den Marketing-Kick-off vollständig.',
      },
      es: {
        joule_response_text: 'Te pierdes el lanzamiento de marketing por completo.',
      },
      pt: {
        joule_response_text: 'Você perde o lançamento de marketing completamente.',
      },
      it: {
        joule_response_text: 'Perdi completamente il lancio di marketing.',
      },
      tr: {
        joule_response_text: 'Pazarlama başlangıcını tamamen kaçırdınız.',
      },
    },
    4: {
      en: {
        user_input_text: 'I need to book a flight for my business trip ASAP.',
      },
      de: {
        user_input_text: 'Ich muss dringend einen Flug für meine Geschäftsreise buchen.',
      },
      es: {
        user_input_text: 'Necesito reservar un vuelo para mi viaje de negocios urgente.',
      },
      pt: {
        user_input_text: 'Preciso reservar um voo para minha viagem de negócios urgente.',
      },
      it: {
        user_input_text: 'Devo prenotare urgentemente un volo per il mio viaggio di lavoro.',
      },
      tr: {
        user_input_text: 'İş seyahatim için acilen bir uçuş rezervasyonu yapmam gerekiyor.',
      },
    },
    5: {
      en: {
        joule_response_text: 'Of course! Let\'s get this sorted with SAP Concur. Could you please tell me your departure city and destination?',
      },
      de: {
        joule_response_text: 'Natürlich! Lassen Sie uns das mit SAP Concur regeln. Könnten Sie mir bitte Ihre Abflugstadt und Ihr Ziel nennen?',
      },
      es: {
        joule_response_text: '¡Por supuesto! Vamos a resolverlo con SAP Concur. ¿Podrías decirme tu ciudad de salida y destino?',
      },
      pt: {
        joule_response_text: 'Claro! Vamos resolver isso com o SAP Concur. Você poderia me dizer sua cidade de partida e destino?',
      },
      it: {
        joule_response_text: 'Certo! Risolviamolo con SAP Concur. Potresti indicarmi la città di partenza e la destinazione?',
      },
      tr: {
        joule_response_text: 'Elbette! Bunu SAP Concur ile halledelim. Kalkış şehrini ve varış noktanı paylaşır mısın?',
      },
    },
    6: {
      en: {
        user_input_text: 'I\'m leaving from London and heading to Atlanta.',
      },
      de: {
        user_input_text: 'Ich fliege von London nach Atlanta.',
      },
      es: {
        user_input_text: 'Salgo de Londres y voy a Atlanta.',
      },
      pt: {
        user_input_text: 'Estou saindo de Londres e indo para Atlanta.',
      },
      it: {
        user_input_text: 'Parto da Londra e vado ad Atlanta.',
      },
      tr: {
        user_input_text: 'Londra\'dan ayrılıp Atlanta\'ya gidiyorum.',
      },
    },
    7: {
      en: {
        joule_response_text: 'Great! What is your preferred departure date?',
      },
      de: {
        joule_response_text: 'Großartig! Was ist Ihr bevorzugtes Abflugdatum?',
      },
      es: {
        joule_response_text: '¡Genial! ¿Cuál es tu fecha de salida preferida?',
      },
      pt: {
        joule_response_text: 'Ótimo! Qual é a sua data de partida preferida?',
      },
      it: {
        joule_response_text: 'Perfetto! Qual è la data di partenza preferita?',
      },
      tr: {
        joule_response_text: 'Harika! Tercih ettiğin kalkış tarihi nedir?',
      },
    },
    8: {
      en: {
        user_input_text: 'Today',
      },
      de: {
        user_input_text: 'Heute',
      },
      es: {
        user_input_text: 'Hoy',
      },
      pt: {
        user_input_text: 'Hoje',
      },
      it: {
        user_input_text: 'Oggi',
      },
      tr: {
        user_input_text: 'Bugün',
      },
    },
    9: {
      en: {
        joule_response_text: 'How many days would you like to spend at the destination?',
      },
      de: {
        joule_response_text: 'Wie viele Tage möchten Sie am Zielort verbringen?',
      },
      es: {
        joule_response_text: '¿Cuántos días te gustaría pasar en el destino?',
      },
      pt: {
        joule_response_text: 'Quantos dias você gostaria de passar no destino?',
      },
      it: {
        joule_response_text: 'Quanti giorni vorresti trascorrere a destinazione?',
      },
      tr: {
        joule_response_text: 'Varış noktasında kaç gün kalmak istersin?',
      },
    },
    10: {
      en: {
        user_input_text: '3 nights.',
      },
      de: {
        user_input_text: '3 Nächte.',
      },
      es: {
        user_input_text: '3 noches.',
      },
      pt: {
        user_input_text: '3 noites.',
      },
      it: {
        user_input_text: '3 notti.',
      },
      tr: {
        user_input_text: '3 gece.',
      },
    },
    11: {
      en: {
        joule_response_text: 'Looking for best flight option for Gus from London to Atlanta on 30/01/2025 and from Atlanta to London on 03/02/2025.',
      },
      de: {
        joule_response_text: 'Suche nach der besten Flugoption für Gus von London nach Atlanta am 30.01.2025 und von Atlanta nach London am 03.02.2025.',
      },
      es: {
        joule_response_text: 'Buscando la mejor opción de vuelo para Gus de Londres a Atlanta el 30/01/2025 y de Atlanta a Londres el 03/02/2025.',
      },
      pt: {
        joule_response_text: 'Procurando a melhor opção de voo para Gus de Londres para Atlanta em 30/01/2025 e de Atlanta para Londres em 03/02/2025.',
      },
      it: {
        joule_response_text: 'Ricerca della migliore opzione di volo per Gus da Londra ad Atlanta il 30/01/2025 e da Atlanta a Londra il 03/02/2025.',
      },
      tr: {
        joule_response_text: 'Gus için 30/01/2025 tarihinde Londra\'dan Atlanta\'ya ve 03/02/2025 tarihinde Atlanta\'dan Londra\'ya en iyi uçuş seçeneği aranıyor.',
      },
    },
    15: {
      en: {
        joule_response_text: 'Is there anything else you need help with before your travel?',
      },
      de: {
        joule_response_text: 'Gibt es noch etwas, bei dem ich Ihnen vor Ihrer Reise helfen kann?',
      },
      es: {
        joule_response_text: '¿Hay algo más con lo que necesites ayuda antes de tu viaje?',
      },
      pt: {
        joule_response_text: 'Há algo mais com que você precise de ajuda antes da sua viagem?',
      },
      it: {
        joule_response_text: 'C\'è qualcos\'altro con cui posso aiutarti prima del viaggio?',
      },
      tr: {
        joule_response_text: 'Seyahatten önce yardımcı olmamı istediğin başka bir şey var mı?',
      },
    },
    16: {
      en: {
        user_input_text: 'What is my daily allowance in Atlanta?',
      },
      de: {
        user_input_text: 'Was ist mein Tagessatz in Atlanta?',
      },
      es: {
        user_input_text: '¿Cuál es mi asignación diaria en Atlanta?',
      },
      pt: {
        user_input_text: 'Qual é minha diária em Atlanta?',
      },
      it: {
        user_input_text: 'Qual è la mia diaria giornaliera ad Atlanta?',
      },
      tr: {
        user_input_text: 'Atlanta\'daki günlük harcırahım nedir?',
      },
    },
    17: {
      en: {
        joule_response_text: 'The HR policy for per diem in high-cost cities like Atlanta follows the GSA guidelines. For Atlanta, the current per diem rate is $89 per day for meals and incidental expenses. This ensures that you are adequately compensated for the higher cost of living while traveling for the project.',
      },
      de: {
        joule_response_text: 'Die Personalpolitik für Tagegeld in teuren Städten wie Atlanta folgt den GSA-Richtlinien. Für Atlanta beträgt der aktuelle Tagegeldsatz 89 $ pro Tag für Mahlzeiten und Nebenkosten. Dies stellt sicher, dass Sie für die höheren Lebenshaltungskosten während der Projektreise angemessen entschädigt werden.',
      },
      es: {
        joule_response_text: 'La política de RR.HH. para viáticos en ciudades de alto costo como Atlanta sigue las pautas de GSA. Para Atlanta, la tarifa de viáticos actual es de $89 por día para comidas y gastos incidentales. Esto garantiza que esté adecuadamente compensado por el mayor costo de vida mientras viaja para el proyecto.',
      },
      pt: {
        joule_response_text: 'A política de RH para diárias em cidades de alto custo como Atlanta segue as diretrizes da GSA. Para Atlanta, a taxa de diária atual é de $89 por dia para refeições e despesas incidentais. Isso garante que você seja adequadamente compensado pelo maior custo de vida ao viajar para o projeto.',
      },
      it: {
        joule_response_text: 'La politica HR per le diarie nelle città ad alto costo come Atlanta segue le linee guida GSA. Per Atlanta, la diaria attuale è di 89 dollari al giorno per pasti e spese accessorie. Questo garantisce un\'adeguata compensazione per il costo della vita più elevato durante il viaggio di progetto.',
      },
      tr: {
        joule_response_text: 'Atlanta gibi yüksek maliyetli şehirlerde harcırah politikası GSA yönergelerini takip eder. Atlanta için mevcut günlük harcırah, yemek ve yan giderler için günlük 89 dolardır. Bu, proje seyahati sırasında artan yaşam maliyetlerinin karşılanmasını sağlar.',
      },
    },
    19: {
      en: {
        completion_message: "Joule saved the day! I booked my flight and I'm ready for this trip!",
      },
      de: {
        completion_message: 'Joule hat den Tag gerettet! Ich habe meinen Flug gebucht und bin bereit für diese Reise!',
      },
      es: {
        completion_message: '¡Joule salvó el día! ¡Reservé mi vuelo y estoy listo para este viaje!',
      },
      pt: {
        completion_message: 'Joule salvou o dia! Reservei meu voo e estou pronto para esta viagem!',
      },
      it: {
        completion_message: 'Joule ha salvato la giornata! Ho prenotato il mio volo e sono pronto per questo viaggio!',
      },
      tr: {
        completion_message: 'Joule günü kurtardı! Uçuşumu rezerve ettim ve bu seyahat için hazırım!',
      },
    },
  },

  // EMP_GUS_03_PAYROLL - Help! I've Been Paid Too Much
  EMP_GUS_03_PAYROLL: {
    1: {
      en: {
        scenario_title: "Help! I've Been Paid Too Much",
        scenario_description: 'Your payslip looks higher than expected.',
        choice_a_label: 'Ignore it',
        choice_b_label: 'Check with Joule',
      },
      de: {
        scenario_title: 'Hilfe! Ich habe zu viel Gehalt bekommen!',
        scenario_description: 'Ihre Gehaltsabrechnung sieht höher als erwartet.',
        choice_a_label: 'Ignorieren',
        choice_b_label: 'Mit Joule prüfen',
      },
      es: {
        scenario_title: '¡Ayuda! Me pagaron demasiado',
        scenario_description: 'Tu recibo de pago se ve más alto de lo esperado.',
        choice_a_label: 'Ignorarlo',
        choice_b_label: 'Consultar con Joule',
      },
      pt: {
        scenario_title: 'Ajuda! Fui pago demais',
        scenario_description: 'Seu contracheque parece mais alto do que o esperado.',
        choice_a_label: 'Ignorar',
        choice_b_label: 'Verificar com Joule',
      },
      it: {
        scenario_title: 'Aiuto! Mi hanno pagato troppo',
        scenario_description: 'La tua busta paga sembra più alta del previsto.',
        choice_a_label: 'Ignoralo',
        choice_b_label: 'Controlla con Joule',
      },
      tr: {
        scenario_title: 'Yardım! Fazla ödeme aldım',
        scenario_description: 'Maaş bordron beklenenden daha yüksek görünüyor.',
        choice_a_label: 'Görmezden gel',
        choice_b_label: 'Joule ile kontrol et',
      },
    },
    2: {
      en: {
        joule_response_text: 'You later need to explain the overpayment to HR.',
      },
      de: {
        joule_response_text: 'Sie müssen später Ihre Gehaltsabrechnung der Personalabteilung erklären.',
      },
      es: {
        joule_response_text: 'Más tarde necesitas explicar el sobrepago a RR.HH.',
      },
      pt: {
        joule_response_text: 'Você precisará explicar o pagamento excessivo ao RH mais tarde.',
      },
      it: {
        joule_response_text: 'In seguito dovrai spiegare il pagamento in eccesso alle Risorse Umane.',
      },
      tr: {
        joule_response_text: 'Daha sonra fazla ödemeyi İK\'ya açıklaman gerekecek.',
      },
    },
    4: {
      en: {
        user_input_text: 'My payslip is higher than expected. Explain why?',
      },
      de: {
        user_input_text: 'Meine Gehaltsabrechnung ist höher als erwartet. Kannst du erklären, warum?',
      },
      es: {
        user_input_text: 'Mi recibo de pago es más alto de lo esperado. ¿Puedes explicar por qué?',
      },
      pt: {
        user_input_text: 'Meu contracheque está mais alto do que o esperado. Pode explicar por quê?',
      },
      it: {
        user_input_text: 'La mia busta paga è più alta del previsto. Puoi spiegare perché?',
      },
      tr: {
        user_input_text: 'Maaş bordrom beklenenden daha yüksek. Nedenini açıklayabilir misin?',
      },
    },
    5: {
      en: {
        joule_response_text: 'TechWave Inc. conducts regular internal pay equity reviews to ensure employees are compensated fairly and consistently. Do you have concerns about your pay?',
      },
      de: {
        joule_response_text: 'TechWave Inc. führt regelmäßige interne Gehaltsprüfungen durch, um sicherzustellen, dass Mitarbeiter fair und konsistent vergütet werden. Haben Sie Bedenken bezüglich Ihres Gehalts?',
      },
      es: {
        joule_response_text: 'TechWave Inc. realiza revisiones periódicas internas de equidad salarial para garantizar que los empleados sean compensados de manera justa y consistente. ¿Tienes inquietudes sobre tu salario?',
      },
      pt: {
        joule_response_text: 'A TechWave Inc. realiza revisões internas regulares de equidade salarial para garantir que os funcionários sejam compensados de forma justa e consistente. Você tem alguma preocupação sobre seu salário?',
      },
      it: {
        joule_response_text: 'TechWave Inc. conduce regolari revisioni interne sull\'equità salariale per garantire che i dipendenti siano compensati in modo equo e coerente. Hai preoccupazioni riguardo al tuo stipendio?',
      },
      tr: {
        joule_response_text: 'TechWave Inc., çalışanların adil ve tutarlı bir şekilde tazmin edilmesini sağlamak için düzenli iç maaş eşitliği incelemeleri yapar. Maaşınız hakkında endişeleriniz var mı?',
      },
    },
    6: {
      en: {
        user_input_text: 'Yes, analyse my current payslip.',
      },
      de: {
        user_input_text: 'Ja, analysiere meine aktuelle Gehaltsabrechnung.',
      },
      es: {
        user_input_text: 'Sí, analiza mi recibo de pago actual.',
      },
      pt: {
        user_input_text: 'Sim, analisa meu contracheque atual.',
      },
      it: {
        user_input_text: 'Sì, analizza la mia busta paga attuale.',
      },
      tr: {
        user_input_text: 'Evet, mevcut maaş bordrumu analiz eder misin?',
      },
    },
    7: {
      en: {
        joule_response_text: 'Here is a detailed breakdown of your November 2025 payslip:\n\n1. Base Salary: $5,100.00\n2. Performance Bonus: $1,120.00\n3. Overtime: $380.00\n4. Tax Deduction: -$1,850.00\n5. Insurance: -$320.00\n\nNet Pay: $4,430.00\n\nThe performance bonus is a quarterly bonus that was added this month.',
      },
      de: {
        joule_response_text: 'Hier ist eine detaillierte Aufschlüsselung Ihrer Gehaltsabrechnung für November 2025:\n\n1. Grundgehalt: 5.100,00 $\n2. Leistungsbonus: 1.120,00 $\n3. Überstunden: 380,00 $\n4. Steuerabzug: -1.850,00 $\n5. Versicherung: -320,00 $\n\nNettolohn: 4.430,00 $\n\nDer Leistungsbonus ist ein vierteljährlicher Bonus, der diesen Monat hinzugefügt wurde.',
      },
      es: {
        joule_response_text: 'Aquí está el desglose detallado de tu recibo de pago de noviembre de 2025:\n\n1. Salario base: $5,100.00\n2. Bono de rendimiento: $1,120.00\n3. Horas extras: $380.00\n4. Deducción fiscal: -$1,850.00\n5. Seguro: -$320.00\n\nPago neto: $4,430.00\n\nEl bono de rendimiento es un bono trimestral que se agregó este mes.',
      },
      pt: {
        joule_response_text: 'Aqui está o detalhamento do seu contracheque de novembro de 2025:\n\n1. Salário base: $5.100,00\n2. Bônus de desempenho: $1.120,00\n3. Horas extras: $380,00\n4. Dedução fiscal: -$1.850,00\n5. Seguro: -$320,00\n\nPagamento líquido: $4.430,00\n\nO bônus de desempenho é um bônus trimestral que foi adicionado este mês.',
      },
      it: {
        joule_response_text: 'Ecco una ripartizione dettagliata della tua busta paga di novembre 2025:\n\n1. Salario base: $5.100,00\n2. Bonus di performance: $1.120,00\n3. Straordinari: $380,00\n4. Detrazione fiscale: -$1.850,00\n5. Assicurazione: -$320,00\n\nStipendio netto: $4.430,00\n\nIl bonus di performance è un bonus trimestrale che è stato aggiunto questo mese.',
      },
      tr: {
        joule_response_text: 'İşte Kasım 2025 maaş bordronuzun detaylı dökümü:\n\n1. Temel maaş: $5.100,00\n2. Performans bonusu: $1.120,00\n3. Fazla mesai: $380,00\n4. Vergi kesintisi: -$1.850,00\n5. Sigorta: -$320,00\n\nNet ödeme: $4.430,00\n\nPerformans bonusu bu ay eklenen üç aylık bir bonustur.',
      },
    },
    8: {
      en: {
        user_input_text: 'Help me understand my payslip.',
      },
      de: {
        user_input_text: 'Hilf mir, meine Gehaltsabrechnung zu verstehen.',
      },
      es: {
        user_input_text: 'Ayúdame a entender mi recibo de pago.',
      },
      pt: {
        user_input_text: 'Me ajuda a entender meu contracheque.',
      },
      it: {
        user_input_text: 'Aiutami a capire la mia busta paga.',
      },
      tr: {
        user_input_text: 'Maaş bordrumu anlamama yardım eder misin?',
      },
    },
    9: {
      en: {
        joule_response_text: 'Your payslip for the period from November 1st-30th, 2025, shows the following: Gross Pay: This is your total income before any deductions. You received a monthly salary of $5,100.00, overtime pay of $380.00, and a performance bonus of $1,120.00, making your gross pay $6,600.00. Deductions: These are amounts taken out of your gross pay. Your deductions total $2,170.00 and include: • Tax: $1,850.00 (calculated based on your tax code and cumulative tax basis) • Insurance Contribution: $320.00 (based on your insurance plan) Net Pay: This is your take-home pay after all deductions. Your net pay for this period is $4,430.00. Remember to check your payslip regularly to ensure the tax code and other details are correct.',
      },
      de: {
        joule_response_text: 'Deine Gehaltsabrechnung für den Zeitraum vom 1. bis 30. November 2025 zeigt Folgendes: Bruttogehalt: Dies ist dein Gesamteinkommen vor Abzügen. Du hast ein monatliches Gehalt von 5.100,00 $, Überstundenvergütung von 380,00 $ und einen Leistungsbonus von 1.120,00 $ erhalten, was dein Bruttogehalt auf 6.600,00 $ bringt. Abzüge: Dies sind Beträge, die von deinem Bruttogehalt abgezogen werden. Deine Abzüge betragen insgesamt 2.170,00 $ und umfassen: • Steuer: 1.850,00 $ (berechnet auf Basis deines Steuercodes und der kumulativen Steuerbasis) • Versicherungsbeitrag: 320,00 $ (basierend auf deinem Versicherungsplan) Nettolohn: Dies ist dein Nettolohn nach allen Abzügen. Dein Nettolohn für diesen Zeitraum beträgt 4.430,00 $. Denk daran, deine Gehaltsabrechnung regelmäßig zu überprüfen, um sicherzustellen, dass der Steuercode und andere Details korrekt sind.',
      },
      es: {
        joule_response_text: 'Tu recibo de pago del período del 1 al 30 de noviembre de 2025 muestra lo siguiente: Pago bruto: Este es tu ingreso total antes de deducciones. Recibiste un salario mensual de $5,100.00, pago de horas extras de $380.00 y un bono de rendimiento de $1,120.00, lo que hace que tu pago bruto sea de $6,600.00. Deducciones: Estos son montos que se deducen de tu pago bruto. Tus deducciones totalizan $2,170.00 e incluyen: • Impuesto: $1,850.00 (calculado según tu código fiscal y base impositiva acumulativa) • Contribución de seguro: $320.00 (según tu plan de seguro) Pago neto: Este es tu salario neto después de todas las deducciones. Tu pago neto para este período es de $4,430.00. Recuerda verificar tu recibo de pago regularmente para asegurarte de que el código fiscal y otros detalles sean correctos.',
      },
      pt: {
        joule_response_text: 'Seu contracheque do período de 1º a 30 de novembro de 2025 mostra o seguinte: Pagamento bruto: Este é o seu rendimento total antes de quaisquer deduções. Você recebeu um salário mensal de $5.100,00, pagamento de horas extras de $380,00 e um bônus de desempenho de $1,120,00, totalizando um pagamento bruto de $6,600,00. Deduções: Estes são valores retirados do seu pagamento bruto. Suas deduções totalizam $2,170,00 e incluem: • Imposto: $1,850,00 (calculado com base no seu código tributário e base tributária cumulativa) • Contribuição de seguro: $320,00 (com base no seu plano de seguro) Pagamento líquido: Este é o seu salário líquido após todas as deduções. Seu pagamento líquido para este período é de $4,430,00. Lembre-se de verificar seu contracheque regularmente para garantir que o código tributário e outros detalhes estejam corretos.',
      },
      it: {
        joule_response_text: 'La tua busta paga per il periodo dal 1° al 30 novembre 2025 mostra quanto segue: Paga lorda: Questo è il tuo reddito totale prima di eventuali detrazioni. Hai ricevuto uno stipendio mensile di $5.100,00, paga per straordinari di $380,00 e un bonus di performance di $1,120,00, per una paga lorda di $6,600,00. Detrazioni: Questi sono importi sottratti dalla tua paga lorda. Le tue detrazioni ammontano a $2,170,00 e includono: • Tasse: $1,850,00 (calcolate in base al tuo codice fiscale e alla base imponibile cumulativa) • Contributo assicurativo: $320,00 (in base al tuo piano assicurativo) Stipendio netto: Questo è il tuo stipendio netto dopo tutte le detrazioni. Il tuo stipendio netto per questo periodo è di $4,430,00. Ricorda di controllare regolarmente la tua busta paga per assicurarti che il codice fiscale e altri dettagli siano corretti.',
      },
      tr: {
        joule_response_text: '1-30 Kasım 2025 dönemi maaş bordron şunları gösteriyor: Brüt ödeme: Bu, herhangi bir kesinti yapılmadan önceki toplam gelirin. 5.100,00 $ aylık maaş, 380,00 $ fazla mesai ücreti ve 1.120,00 $ performans bonusu aldın, bu da brüt ödemenizi 6.600,00 $ yapıyor. Kesintiler: Bunlar brüt ödemenden alınan tutarlar. Kesintilerin toplam 2.170,00 $ tutarında ve şunları içeriyor: • Vergi: 1.850,00 $ (vergi koduna ve kümülatif vergi tabanına göre hesaplanmıştır) • Sigorta katkısı: 320,00 $ (sigorta planına göre) Net ödeme: Bu, tüm kesintilerden sonraki eve götürdüğün ücret. Bu dönem için net ödemen 4.430,00 $. Vergi kodunun ve diğer ayrıntıların doğru olduğundan emin olmak için maaş bordronu düzenli olarak kontrol etmeyi unutma.',
      },
    },
    10: {
      en: {
        user_input_text: 'Compare this to my previous payslip.',
      },
      de: {
        user_input_text: 'Vergleiche dies mit meiner vorherigen Gehaltsabrechnung.',
      },
      es: {
        user_input_text: 'Compara esto con mi recibo de pago anterior.',
      },
      pt: {
        user_input_text: 'Compara isso com meu contracheque anterior.',
      },
      it: {
        user_input_text: 'Confronta questo con la mia busta paga precedente.',
      },
      tr: {
        user_input_text: 'Bunu önceki maaş bordrumla karşılaştırır mısın?',
      },
    },
    11: {
      en: {
        joule_response_text: 'Comparing your payslips: Previous Month (October 2025): • Base Salary: $5,100 • Bonus: $0 • Net Pay: $3,310 Current Month (November 2025): • Base Salary: $5,100 • Bonus: $1,120 • Net Pay: $4,430 Insight: You received a quarterly performance bonus this month, increasing your net pay by $1,120.',
      },
      de: {
        joule_response_text: 'Vergleich deiner Gehaltsabrechnungen: Vorheriger Monat (Oktober 2025): • Grundgehalt: 5.100 $ • Bonus: 0 $ • Nettolohn: 3.310 $ Aktueller Monat (November 2025): • Grundgehalt: 5.100 $ • Bonus: 1.120 $ • Nettolohn: 4.430 $ Einblick: Du hast diesen Monat einen vierteljährlichen Leistungsbonus erhalten, wodurch sich dein Nettolohn um 1.120 $ erhöht hat.',
      },
      es: {
        joule_response_text: 'Comparación de tus recibos de pago: Mes anterior (octubre de 2025): • Salario base: $5,100 • Bono: $0 • Pago neto: $3,310 Mes actual (noviembre de 2025): • Salario base: $5,100 • Bono: $1,120 • Pago neto: $4,430 Información: Recibiste un bono trimestral de rendimiento este mes, aumentando tu pago neto en $1,120.',
      },
      pt: {
        joule_response_text: 'Comparando seus contracheques: Mês anterior (outubro de 2025): • Salário base: $5.100 • Bônus: $0 • Pagamento líquido: $3.310 Mês atual (novembro de 2025): • Salário base: $5.100 • Bônus: $1.120 • Pagamento líquido: $4.430 Informação: Você recebeu um bônus trimestral de desempenho este mês, aumentando seu pagamento líquido em $1.120.',
      },
      it: {
        joule_response_text: 'Confronto delle tue buste paga: Mese precedente (ottobre 2025): • Salario base: $5.100 • Bonus: $0 • Stipendio netto: $3.310 Mese corrente (novembre 2025): • Salario base: $5.100 • Bonus: $1.120 • Stipendio netto: $4.430 Informazione: Hai ricevuto un bonus trimestrale di performance questo mese, aumentando il tuo stipendio netto di $1.120.',
      },
      tr: {
        joule_response_text: 'Maaş bordrolarının karşılaştırması: Önceki ay (Ekim 2025): • Temel maaş: $5.100 • Bonus: $0 • Net ödeme: $3.310 Bu ay (Kasım 2025): • Temel maaş: $5.100 • Bonus: $1.120 • Net ödeme: $4.430 Bilgi: Bu ay üçaylık performans bonusu aldın, net ödemen 1.120 $ arttı.',
      },
    },
    12: {
      en: {
        completion_message: 'Mystery solved! Joule helped me understand my payslip and I learned about my bonus!',
      },
      de: {
        completion_message: 'Geheimnis gelüftet! Joule hat mir geholfen, meine Gehaltsabrechnung zu verstehen und ich habe von meinem Bonus erfahren!',
      },
      es: {
        completion_message: '¡Misterio resuelto! ¡Joule me ayudó a entender mi recibo de pago y me enteré de mi bono!',
      },
      pt: {
        completion_message: 'Mistério resolvido! Joule me ajudou a entender meu contracheque e descobri sobre meu bônus!',
      },
      it: {
        completion_message: 'Mistero risolto! Joule mi ha aiutato a capire la mia busta paga e ho scoperto il mio bonus!',
      },
      tr: {
        completion_message: 'Gizem çözüldü! Joule maaş bordromu anlamama yardımcı oldu ve primim hakkında bilgi edindim!',
      },
    },
  },

  // EMP_GUS_04_PRESENTATION - Fake It Till You Make It
  EMP_GUS_04_PRESENTATION: {
    1: {
      en: {
        scenario_title: 'Fake It Till You Make It',
        scenario_description: 'You have been asked to present on your team\'s Q4 performance but haven\'t prepared yet.',
        choice_a_label: 'Wing it',
        choice_b_label: 'Prepare with Joule',
      },
      de: {
        scenario_title: 'Fake It Till You Make It',
        scenario_description: 'Sie wurden gebeten, die Q4-Ergebnisse Ihres Teams vorzustellen, haben aber noch nichts vorbereitet.',
        choice_a_label: 'Improvisieren',
        choice_b_label: 'Mit Joule vorbereiten',
      },
      es: {
        scenario_title: 'Finge hasta que lo logres',
        scenario_description: 'Te han pedido que presentes sobre el rendimiento del cuarto trimestre de tu equipo pero aún no te has preparado.',
        choice_a_label: 'Improvisar',
        choice_b_label: 'Preparar con Joule',
      },
      pt: {
        scenario_title: 'Finja até conseguir',
        scenario_description: 'Você foi solicitado a apresentar sobre o desempenho do Q4 da sua equipe, mas ainda não se preparou.',
        choice_a_label: 'Improvisar',
        choice_b_label: 'Preparar com Joule',
      },
      it: {
        scenario_title: 'Fingi finché non ce la fai',
        scenario_description: 'Ti è stato chiesto di presentare le performance del Q4 del tuo team ma non ti sei ancora preparato.',
        choice_a_label: 'Improvvisa',
        choice_b_label: 'Preparati con Joule',
      },
      tr: {
        scenario_title: 'Olana kadar rol yap',
        scenario_description: 'Ekibinizin 4. çeyrek performansını sunmanız istendi ancak henüz hazırlanmadınız.',
        choice_a_label: 'Doğaçlama yap',
        choice_b_label: 'Joule ile hazırlan',
      },
    },
    2: {
      en: {
        joule_response_text: 'The presentation was a disaster. Your manager is not impressed.',
      },
      de: {
        joule_response_text: 'Die Präsentation war ein Desaster. Ihr Manager ist nicht beeindruckt.',
      },
      es: {
        joule_response_text: 'La presentación fue un desastre. Tu gerente no está impresionado.',
      },
      pt: {
        joule_response_text: 'A apresentação foi um desastre. Seu gerente não ficou impressionado.',
      },
      it: {
        joule_response_text: 'La presentazione è stata un disastro. Il tuo manager non è rimasto impressionato.',
      },
      tr: {
        joule_response_text: 'Sunum tam bir felaketti. Yöneticin etkilenmedi.',
      },
    },
    4: {
      en: {
        user_input_text: 'I need to create a presentation about our team\'s Q4 performance. Can you help?',
      },
      de: {
        user_input_text: 'Ich muss eine Präsentation über die Q4-Ergebnisse unseres Teams erstellen. Kannst du mir helfen?',
      },
      es: {
        user_input_text: 'Necesito crear una presentación sobre el rendimiento del cuarto trimestre de nuestro equipo. ¿Puedes ayudar?',
      },
      pt: {
        user_input_text: 'Preciso criar uma apresentação sobre o desempenho do Q4 da nossa equipe. Você pode ajudar?',
      },
      it: {
        user_input_text: 'Devo creare una presentazione sulle performance del Q4 del nostro team. Puoi aiutarmi?',
      },
      tr: {
        user_input_text: 'Ekibimizin 4. çeyrek performansı hakkında bir sunum hazırlamam gerekiyor. Yardım edebilir misin?',
      },
    },
    5: {
      en: {
        joule_response_text: 'Of course! I can help you create a comprehensive presentation. What specific metrics would you like to highlight?',
      },
      de: {
        joule_response_text: 'Natürlich! Ich kann Ihnen helfen, eine umfassende Präsentation zu erstellen. Welche spezifischen Metriken möchten Sie hervorheben?',
      },
      es: {
        joule_response_text: '¡Por supuesto! Puedo ayudarte a crear una presentación completa. ¿Qué métricas específicas te gustaría destacar?',
      },
      pt: {
        joule_response_text: 'Claro! Posso ajudá-lo a criar uma apresentação abrangente. Quais métricas específicas você gostaria de destacar?',
      },
      it: {
        joule_response_text: 'Certo! Posso aiutarti a creare una presentazione completa. Quali metriche specifiche vuoi evidenziare?',
      },
      tr: {
        joule_response_text: 'Tabii! Kapsamlı bir sunum hazırlamana yardımcı olabilirim. Hangi metrikleri özellikle vurgulamak istersin?',
      },
    },
    6: {
      en: {
        user_input_text: 'Sales performance, customer satisfaction, and project delivery',
      },
      de: {
        user_input_text: 'Verkaufsleistung, Kundenzufriedenheit und Projektabwicklung',
      },
      es: {
        user_input_text: 'Rendimiento de ventas, satisfacción del cliente y entrega de proyectos',
      },
      pt: {
        user_input_text: 'Desempenho de vendas, satisfação do cliente e entrega de projetos',
      },
      it: {
        user_input_text: 'Performance di vendita, soddisfazione del cliente e consegna dei progetti',
      },
      tr: {
        user_input_text: 'Satış performansı, müşteri memnuniyeti ve proje teslimatı',
      },
    },
    7: {
      en: {
        joule_response_text: 'Great! Let me pull together the data and create visualizations for you.',
      },
      de: {
        joule_response_text: 'Großartig! Lassen Sie mich die Daten zusammenstellen und Visualisierungen für Sie erstellen.',
      },
      es: {
        joule_response_text: '¡Genial! Déjame reunir los datos y crear visualizaciones para ti.',
      },
      pt: {
        joule_response_text: 'Ótimo! Deixe-me reunir os dados e criar visualizações para você.',
      },
      it: {
        joule_response_text: 'Perfetto! Metto insieme i dati e creo delle visualizzazioni per te.',
      },
      tr: {
        joule_response_text: 'Harika! Verileri derleyip senin için görselleştirmeler oluşturayım.',
      },
    },
    8: {
      en: {
        joule_response_text: 'Here\'s an overview of your team\'s Q4 performance:',
      },
      de: {
        joule_response_text: 'Hier ist ein Überblick über die Q4-Leistung Ihres Teams:',
      },
      es: {
        joule_response_text: 'Aquí hay una descripción general del rendimiento del cuarto trimestre de tu equipo:',
      },
      pt: {
        joule_response_text: 'Aqui está uma visão geral do desempenho do Q4 da sua equipe:',
      },
      it: {
        joule_response_text: 'Ecco una panoramica delle performance del Q4 del tuo team:',
      },
      tr: {
        joule_response_text: 'Ekibinin 4. çeyrek performansına genel bakış burada:',
      },
    },
    10: {
      en: {
        user_input_text: 'This is perfect! Can you also add customer feedback highlights?',
      },
      de: {
        user_input_text: 'Das ist perfekt! Kannst du auch die Highlights des Kundenfeedbacks hinzufügen?',
      },
      es: {
        user_input_text: '¡Esto es perfecto! ¿Puedes también agregar aspectos destacados de comentarios de clientes?',
      },
      pt: {
        user_input_text: 'Isso é perfeito! Você também pode adicionar destaques de feedback de clientes?',
      },
      it: {
        user_input_text: 'È perfetto! Puoi aggiungere anche i punti salienti dei feedback dei clienti?',
      },
      tr: {
        user_input_text: 'Bu mükemmel! Müşteri geri bildirimlerinden öne çıkanları da ekleyebilir misin?',
      },
    },
    11: {
      en: {
        joule_response_text: 'Absolutely! Here are the key customer satisfaction insights:',
      },
      de: {
        joule_response_text: 'Absolut! Hier sind die wichtigsten Erkenntnisse zur Kundenzufriedenheit:',
      },
      es: {
        joule_response_text: '¡Absolutamente! Aquí están las principales ideas de satisfacción del cliente:',
      },
      pt: {
        joule_response_text: 'Absolutamente! Aqui estão os principais insights de satisfação do cliente:',
      },
      it: {
        joule_response_text: 'Assolutamente! Ecco i principali insight sulla soddisfazione dei clienti:',
      },
      tr: {
        joule_response_text: 'Elbette! İşte müşteri memnuniyetine dair temel içgörüler:',
      },
    },
    13: {
      en: {
        completion_message: 'Presentation ready! Thanks to Joule, I have a data-driven, professional presentation that will impress everyone!',
      },
      de: {
        completion_message: 'Präsentation fertig! Dank Joule habe ich eine datengesteuerte, professionelle Präsentation, die jeden beeindrucken wird!',
      },
      es: {
        completion_message: '¡Presentación lista! Gracias a Joule, tengo una presentación profesional basada en datos que impresionará a todos!',
      },
      pt: {
        completion_message: 'Apresentação pronta! Graças ao Joule, tenho uma apresentação profissional baseada em dados que impressionará a todos!',
      },
      it: {
        completion_message: 'Presentazione pronta! Grazie a Joule ho una presentazione professionale, basata sui dati, che impressionerà tutti!',
      },
      tr: {
        completion_message: 'Sunum hazır! Joule sayesinde veri odaklı, profesyonel bir sunumum var ve herkesi etkileyecek!',
      },
    },
  },

  // ====================
  // JADA SCENARIOS (MANAGER)
  // ====================

  // MGR_JADA_01_ONBOARDING - Mullet Party First Day
  MGR_JADA_01_ONBOARDING: {
    1: {
      en: {
        scenario_title: 'Mullet Party First Day',
        scenario_description: 'A new team member is starting tomorrow and you need to prepare their onboarding.',
        choice_a_label: 'Send a generic welcome email',
        choice_b_label: 'Prepare personalized onboarding with Joule',
      },
      de: {
        scenario_title: 'Vokuhila-Party für den neuen Mitarbeiter',
        scenario_description: 'Ein neues Teammitglied fängt morgen an und Sie müssen das Onboarding vorbereiten.',
        choice_a_label: 'Eine generische Willkommens-E-Mail senden',
        choice_b_label: 'Personalisiertes Onboarding mit Joule vorbereiten',
      },
      es: {
        scenario_title: 'Fiesta mullet el primer día',
        scenario_description: 'Un nuevo miembro del equipo comienza mañana y necesitas preparar su incorporación.',
        choice_a_label: 'Enviar un correo de bienvenida genérico',
        choice_b_label: 'Preparar incorporación personalizada con Joule',
      },
      pt: {
        scenario_title: 'Festa mullet no primeiro dia',
        scenario_description: 'Um novo membro da equipe começa amanhã e você precisa preparar a integração.',
        choice_a_label: 'Enviar um e-mail de boas-vindas genérico',
        choice_b_label: 'Preparar integração personalizada com Joule',
      },
      it: {
        scenario_title: 'Festa mullet il primo giorno',
        scenario_description: 'Un nuovo membro del team inizia domani e devi preparare il suo onboarding.',
        choice_a_label: 'Invia un\'email di benvenuto generica',
        choice_b_label: 'Prepara un onboarding personalizzato con Joule',
      },
      tr: {
        scenario_title: 'İlk gün mullet partisi',
        scenario_description: 'Yeni bir ekip üyesi yarın başlıyor ve onboarding hazırlamanız gerekiyor.',
        choice_a_label: 'Genel bir hoş geldin e-postası gönder',
        choice_b_label: 'Joule ile kişiselleştirilmiş onboarding hazırla',
      },
    },
    2: {
      en: {
        joule_response_text: 'Your new hire feels lost and unprepared on their first day.',
      },
      de: {
        joule_response_text: 'Ihr neuer Mitarbeiter fühlt sich an seinem ersten Tag verloren und unvorbereitet.',
      },
      es: {
        joule_response_text: 'Tu nuevo empleado se siente perdido y sin preparación en su primer día.',
      },
      pt: {
        joule_response_text: 'Seu novo contratado se sente perdido e despreparado no primeiro dia.',
      },
      it: {
        joule_response_text: 'Il nuovo assunto si sente spaesato e impreparato nel suo primo giorno.',
      },
      tr: {
        joule_response_text: 'Yeni çalışan ilk gününde kaybolmuş ve hazırlıksız hissediyor.',
      },
    },
    4: {
      en: {
        user_input_text: 'I need to prepare for Gus\'s first day. What tasks need to be completed?',
      },
      de: {
        user_input_text: 'Ich muss mich auf Gus\' ersten Tag vorbereiten. Welche Aufgaben müssen erledigt werden?',
      },
      es: {
        user_input_text: 'Necesito prepararme para el primer día de Gus. ¿Qué tareas deben completarse?',
      },
      pt: {
        user_input_text: 'Preciso me preparar para o primeiro dia de Gus. Quais tarefas precisam ser concluídas?',
      },
      it: {
        user_input_text: 'Devo prepararmi per il primo giorno di Gus. Quali attività devono essere completate?',
      },
      tr: {
        user_input_text: 'Gus\'un ilk günü için hazırlanmam gerekiyor. Hangi görevlerin tamamlanması gerekiyor?',
      },
    },
    5: {
      en: {
        joule_response_text: 'Here is a comprehensive onboarding checklist for Gus:',
      },
      de: {
        joule_response_text: 'Hier ist eine umfassende Onboarding-Checkliste für Gus:',
      },
      es: {
        joule_response_text: 'Aquí hay una lista de verificación completa de incorporación para Gus:',
      },
      pt: {
        joule_response_text: 'Aqui está uma lista de verificação abrangente de integração para Gus:',
      },
      it: {
        joule_response_text: 'Ecco una checklist completa di onboarding per Gus:',
      },
      tr: {
        joule_response_text: 'Birden fazla Gus bulundu, aşağıdakilerden hangisi ile ilerlemek istediğinizi seçin:',
      },
    },
    6: {
      en: {
        joule_response_text: 'Got it! To proceed, please provide a note to the new hire.',
      },
      de: {
        joule_response_text: 'Verstanden! Um fortzufahren, geben Sie bitte eine Notiz für den neuen Mitarbeiter an.',
      },
      es: {
        joule_response_text: '¡Entendido! Para continuar, proporcione una nota para el nuevo empleado.',
      },
      pt: {
        joule_response_text: 'Entendido! Para prosseguir, forneça uma nota para o novo contratado.',
      },
      it: {
        joule_response_text: 'Capito! Per procedere, fornire una nota per il nuovo assunto.',
      },
      tr: {
        joule_response_text: 'Anlaşıldı! Devam etmek için yeni işe alınan kişiye bir not sağlayın.',
      },
    },
    7: {
      en: {
        action_label: 'Draft a note for me',
      },
      de: {
        action_label: 'Entwerfe eine Notiz für mich',
      },
      es: {
        action_label: 'Redacta una nota para mí',
      },
      pt: {
        action_label: 'Redija uma nota para mim',
      },
      it: {
        action_label: 'Redigi una nota per me',
      },
      tr: {
        action_label: 'Benim için bir not taslağı oluştur',
      },
    },
    8: {
      en: {
        joule_response_text: 'I recommend Tory Stevens as an onboarding buddy. Here\'s why:',
      },
      de: {
        joule_response_text: 'Ich empfehle Tory Stevens als Onboarding-Buddy. Hier ist ein Entwurf:',
      },
      es: {
        joule_response_text: 'Recomiendo a Tory Stevens como compañero de incorporación. Aquí está por qué:',
      },
      pt: {
        joule_response_text: 'Recomendo Tory Stevens como companheiro de integração. Aqui está o porquê:',
      },
      it: {
        joule_response_text: 'Raccomando Tory Stevens come buddy per l\'onboarding. Ecco perché:',
      },
      tr: {
        joule_response_text: 'Tory Stevens\'ı onboarding buddy olarak öneriyorum. İşte nedeni:',
      },
    },
    9: {
      en: {
        joule_response_text: 'Dear Gus,\nI am pleased to inform you that Tory has been assigned as your buddy. He will be your go-to person for any questions or assistance you may need during your onboarding process.\nBest regards,\nJada Baker',
      },
      de: {
        joule_response_text: 'Lieber Gus,\nIch freue mich, Ihnen mitteilen zu können, dass Tory als Ihr Buddy zugewiesen wurde. Er wird Ihr Ansprechpartner für alle Fragen oder Hilfe sein, die Sie während Ihres Onboarding-Prozesses benötigen.\nMit freundlichen Grüßen,\nJada Baker',
      },
      es: {
        joule_response_text: 'Estimado Gus,\nMe complace informarte que Tory ha sido asignado como tu buddy. Él será tu persona de referencia para cualquier pregunta o asistencia que puedas necesitar durante tu proceso de incorporación.\nSaludos cordiales,\nJada Baker',
      },
      pt: {
        joule_response_text: 'Prezado Gus,\nTenho o prazer de informar que Tory foi designado como seu buddy. Ele será sua pessoa de referência para quaisquer dúvidas ou assistência que você possa precisar durante seu processo de integração.\nCordialmente,\nJada Baker',
      },
      it: {
        joule_response_text: 'Caro Gus,\nSono lieto di informarti che Tory è stato assegnato come tuo buddy. Sarà la tua persona di riferimento per qualsiasi domanda o assistenza di cui potresti aver bisogno durante il tuo processo di onboarding.\nCordiali saluti,\nJada Baker',
      },
      tr: {
        joule_response_text: 'Sevgili Gus,\nTory\'nin senin buddy\'n olarak atandığını bildirmekten memnuniyet duyuyorum. Onboarding sürecinde ihtiyaç duyabileceğin herhangi bir soru veya yardım için başvurabileceğin kişi olacak.\nSaygılarımla,\nJada Baker',
      },
    },
    10: {
      en: {
        action_a_label: 'Confirm',
        action_b_label: 'Edit',
      },
      de: {
        action_a_label: 'Bestätigen',
        action_b_label: 'Bearbeiten',
      },
      es: {
        action_a_label: 'Confirmar',
        action_b_label: 'Editar',
      },
      pt: {
        action_a_label: 'Confirmar',
        action_b_label: 'Editar',
      },
      it: {
        action_a_label: 'Conferma',
        action_b_label: 'Modifica',
      },
      tr: {
        action_a_label: 'Onayla',
        action_b_label: 'Düzenle',
      },
    },
    16: {
      en: {
        joule_response_text: 'Do you want to draft a note also for Tory?',
      },
      de: {
        joule_response_text: 'Möchten Sie auch eine Notiz für Tory entwerfen?',
      },
      es: {
        joule_response_text: '¿Quieres redactar una nota también para Tory?',
      },
      pt: {
        joule_response_text: 'Você quer redigir uma nota também para Tory?',
      },
      it: {
        joule_response_text: 'Vuoi redigere una nota anche per Tory?',
      },
      tr: {
        joule_response_text: 'Tory için de bir not taslağı oluşturmak ister misiniz?',
      },
    },
    17: {
      en: {
        action_a_label: 'Yes',
        action_b_label: 'No',
      },
      de: {
        action_a_label: 'Ja',
        action_b_label: 'Nein',
      },
      es: {
        action_a_label: 'Sí',
        action_b_label: 'No',
      },
      pt: {
        action_a_label: 'Sim',
        action_b_label: 'Não',
      },
      it: {
        action_a_label: 'Sì',
        action_b_label: 'No',
      },
      tr: {
        action_a_label: 'Evet',
        action_b_label: 'Hayır',
      },
    },
    18: {
      en: {
        joule_response_text: 'Here is a draft note for the buddy:',
      },
      de: {
        joule_response_text: 'Hier ist ein Entwurf für den Buddy:',
      },
      es: {
        joule_response_text: 'Aquí hay una nota borrador para el buddy:',
      },
      pt: {
        joule_response_text: 'Aqui está uma nota de rascunho para o buddy:',
      },
      it: {
        joule_response_text: 'Ecco una bozza di nota per il buddy:',
      },
      tr: {
        joule_response_text: 'Buddy için taslak not:',
      },
    },
    19: {
      en: {
        joule_response_text: 'Dear Tory,\n\nI am pleased to inform you that you have been assigned as the buddy for Gus. Please assist him with any questions or support he may need during his onboarding process. Thank you for your cooperation.\n\nBest regards,\nJada Baker',
      },
      de: {
        joule_response_text: 'Liebe Tory,\n\nIch freue mich, Ihnen mitteilen zu können, dass Sie als Buddy für Gus zugewiesen wurden. Bitte helfen Sie ihm bei allen Fragen oder Unterstützung, die er während seines Onboarding-Prozesses benötigt. Vielen Dank für Ihre Zusammenarbeit.\n\nMit freundlichen Grüßen,\nJada Baker',
      },
      es: {
        joule_response_text: 'Estimada Tory,\n\nMe complace informarte que has sido asignada como compañera de Gus. Por favor, ayúdalo con cualquier pregunta o apoyo que pueda necesitar durante su proceso de incorporación. Gracias por tu cooperación.\n\nSaludos cordiales,\nJada Baker',
      },
      pt: {
        joule_response_text: 'Prezada Tory,\n\nTenho o prazer de informar que você foi designada como companheira de Gus. Por favor, ajude-o com quaisquer dúvidas ou suporte que ele possa precisar durante seu processo de integração. Obrigada pela sua cooperação.\n\nCordialmente,\nJada Baker',
      },
      it: {
        joule_response_text: 'Cara Tory,\n\nSono lieta di informarti che sei stata assegnata come buddy per Gus. Ti prego di assisterlo per qualsiasi domanda o supporto di cui possa aver bisogno durante il suo processo di onboarding. Grazie per la collaborazione.\n\nCordiali saluti,\nJada Baker',
      },
      tr: {
        joule_response_text: 'Merhaba Tory,\n\nSeni Gus\'un buddy\'si olarak görevlendirdiğimizi memnuniyetle paylaşmak isterim. Onboarding sürecinde ihtiyaç duyabileceği her türlü soru ve destek konusunda lütfen ona yardımcı ol. İş birliğin için teşekkür ederim.\n\nSaygılarımla,\nJada Baker',
      },
    },
    20: {
      en: {
        joule_response_text: 'Please confirm if this draft is acceptable or if you would like any changes.',
      },
      de: {
        joule_response_text: 'Bitte bestätigen Sie, ob dieser Entwurf akzeptabel ist oder ob Sie Änderungen wünschen.',
      },
      es: {
        joule_response_text: 'Por favor confirma si este borrador es aceptable o si deseas algún cambio.',
      },
      pt: {
        joule_response_text: 'Por favor, confirme se este rascunho é aceitável ou se você gostaria de alguma alteração.',
      },
      it: {
        joule_response_text: 'Per favore conferma se questa bozza va bene o se desideri modifiche.',
      },
      tr: {
        joule_response_text: 'Lütfen bu taslağın uygun olup olmadığını ya da değişiklik isteyip istemediğini onayla.',
      },
    },
    21: {
      en: {
        action_a_label: 'Confirm',
        action_b_label: 'Edit',
      },
      de: {
        action_a_label: 'Bestätigen',
        action_b_label: 'Bearbeiten',
      },
      es: {
        action_a_label: 'Confirmar',
        action_b_label: 'Editar',
      },
      pt: {
        action_a_label: 'Confirmar',
        action_b_label: 'Editar',
      },
      it: {
        action_a_label: 'Conferma',
        action_b_label: 'Modifica',
      },
      tr: {
        action_a_label: 'Onayla',
        action_b_label: 'Düzenle',
      },
    },
    22: {
      en: {
        joule_response_text: 'Here is your assignment:',
      },
      de: {
        joule_response_text: 'Hier ist Ihre Aufgabe:',
      },
      es: {
        joule_response_text: 'Aquí está tu asignación:',
      },
      pt: {
        joule_response_text: 'Aqui está sua atribuição:',
      },
      it: {
        joule_response_text: 'Ecco il tuo incarico:',
      },
      tr: {
        joule_response_text: 'Lütfen detaylari kontrol et:',
      },
    },
    26: {
      en: {
        completion_message: "Joule made Gus's first day preparation effortless! Everything is organized and he'll feel welcomed from day one.",
      },
      de: {
        completion_message: 'Joule hat die Vorbereitung für Gus\' ersten Tag mühelos gemacht! Alles ist organisiert und er wird sich vom ersten Tag an willkommen fühlen.',
      },
      es: {
        completion_message: '¡Joule hizo que la preparación del primer día de Gus fuera sin esfuerzo! Todo está organizado y se sentirá bienvenido desde el primer día.',
      },
      pt: {
        completion_message: 'Joule tornou a preparação do primeiro dia de Gus sem esforço! Tudo está organizado e ele se sentirá bem-vindo desde o primeiro dia.',
      },
      it: {
        completion_message: 'Joule ha reso semplicissima la preparazione del primo giorno di Gus! È tutto organizzato e si sentirà accolto fin dal primo giorno.',
      },
      tr: {
        completion_message: 'Joule, Gus\'un ilk gün hazırlığını çok kolaylaştırdı! Her şey organize ve ilk günden itibaren kendini hoş karşılanmış hissedecek.',
      },
    },
  },

  // MGR_JADA_02_COMP - Everyone Gets a Bonus
  MGR_JADA_02_COMP: {
    1: {
      en: {
        scenario_title: 'Everyone Gets a Bonus',
        scenario_description: 'It\'s time to decide on team bonuses and you need to ensure fairness across your team.',
        choice_a_label: 'Use gut feeling',
        choice_b_label: 'Analyse compensation with Joule',
      },
      de: {
        scenario_title: 'Wer bekommt den Bonus?',
        scenario_description: 'Es ist an der Zeit, über die Teamboni zu entscheiden. Sie müssen dabei für Fairness innerhalb Ihres Teams sorgen.',
        choice_a_label: 'Aus dem Bauch heraus entscheiden',
        choice_b_label: 'Vergütung mit Joule analysieren',
      },
      es: {
        scenario_title: 'Todos reciben un bono',
        scenario_description: 'Es hora de decidir sobre los bonos del equipo y necesitas asegurar la equidad en tu equipo.',
        choice_a_label: 'Usar la intuición',
        choice_b_label: 'Analizar compensación con Joule',
      },
      pt: {
        scenario_title: 'Todos recebem um bônus',
        scenario_description: 'É hora de decidir sobre os bônus da equipe e você precisa garantir justiça em sua equipe.',
        choice_a_label: 'Usar intuição',
        choice_b_label: 'Analisar compensação com Joule',
      },
      it: {
        scenario_title: 'Tutti ricevono un bonus',
        scenario_description: 'È il momento di decidere i bonus del team e devi garantire equità nel tuo team.',
        choice_a_label: 'Vai a intuito',
        choice_b_label: 'Analizza la retribuzione con Joule',
      },
      tr: {
        scenario_title: 'Herkes prim alıyor',
        scenario_description: 'Ekip primlerine karar verme zamanı ve ekibinizde adaleti sağlamanız gerekiyor.',
        choice_a_label: 'İçgüdüne göre karar ver',
        choice_b_label: 'Joule ile ücretleri analiz et',
      },
    },
    2: {
      en: {
        joule_response_text: 'Your bonus budget is massively exceeded.',
      },
      de: {
        joule_response_text: 'Ihr Bonusbudget ist massiv überschritten.',
      },
      es: {
        joule_response_text: 'Tu presupuesto de bonos está enormemente excedido.',
      },
      pt: {
        joule_response_text: 'Seu orçamento de bônus está enormemente excedido.',
      },
      it: {
        joule_response_text: 'Il budget bonus è stato superato di molto.',
      },
      tr: {
        joule_response_text: 'Prim bütçen ciddi şekilde aşıldı.',
      },
    },
    4: {
      en: {
        user_input_text: "Summarise Gus' compensation progression.",
      },
      de: {
        user_input_text: 'Fasse Gus\' Vergütungsentwicklung zusammen.',
      },
      es: {
        user_input_text: 'Resume la progresión de compensación de Gus.',
      },
      pt: {
        user_input_text: 'Resuma a progressão de compensação de Gus.',
      },
      it: {
        user_input_text: 'Riassumi l\'evoluzione della retribuzione di Gus.',
      },
      tr: {
        user_input_text: 'Gus\'un ücret gelişimini özetle.',
      },
    },
    5: {
      en: {
        joule_response_text: 'Here are the insights you requested for Gus Revesz.',
      },
      de: {
        joule_response_text: 'Basierend auf seinen Karrierezielen und aktuellen Fähigkeiten empfehle ich, sich zu konzentrieren auf:',
      },
      es: {
        joule_response_text: 'Aquí están las ideas que solicitaste para Gus Revesz.',
      },
      pt: {
        joule_response_text: 'Aqui estão os insights que você solicitou para Gus Revesz.',
      },
      it: {
        joule_response_text: 'Ecco gli insight richiesti per Gus Revesz.',
      },
      tr: {
        joule_response_text: 'Gus Revesz için istediğin içgörüler burada.',
      },
    },
    10: {
      en: {
        completion_message: 'Perfect! Joule helped me make fair, data-driven compensation decisions within budget!',
      },
      de: {
        completion_message: 'Perfekt! Joule hat mir geholfen, faire, datengestützte Vergütungsentscheidungen innerhalb des Budgets zu treffen!',
      },
      es: {
        completion_message: '¡Perfecto! ¡Joule me ayudó a tomar decisiones de compensación justas y basadas en datos dentro del presupuesto!',
      },
      pt: {
        completion_message: 'Perfeito! Joule me ajudou a tomar decisões de compensação justas e baseadas em dados dentro do orçamento!',
      },
      it: {
        completion_message: 'Perfetto! Joule mi ha aiutato a prendere decisioni retributive eque e basate sui dati, restando nel budget!',
      },
      tr: {
        completion_message: 'Mükemmel! Joule, bütçe içinde kalarak adil ve veri odaklı ücret kararları almama yardımcı oldu!',
      },
    },
  },

  // MGR_JADA_03_RECRUIT - Avoiding Admin Like a Pro
  MGR_JADA_03_RECRUIT: {
    1: {
      en: {
        scenario_title: 'Avoiding Admin Like a Pro',
        scenario_description: 'You need to create a job requisition for a new hire but the paperwork seems overwhelming.',
        choice_a_label: 'Procrastinate',
        choice_b_label: 'Create job position with Joule',
      },
      de: {
        scenario_title: 'Admin-Aufgaben wie ein Pro vermeiden',
        scenario_description: 'Sie müssen eine Stellenanforderung für einen neuen Mitarbeiter erstellen, aber der Papierkram erscheint Ihnen überwältigend.',
        choice_a_label: 'Aufschieben',
        choice_b_label: 'Position mit Joule erstellen',
      },
      es: {
        scenario_title: 'Evitando la administración como un profesional',
        scenario_description: 'Necesitas crear una requisición de trabajo para una nueva contratación pero el papeleo parece abrumador.',
        choice_a_label: 'Procrastinar',
        choice_b_label: 'Crear posición de trabajo con Joule',
      },
      pt: {
        scenario_title: 'Evitando administração como um profissional',
        scenario_description: 'Você precisa criar uma requisição de trabalho para uma nova contratação, mas a papelada parece esmagadora.',
        choice_a_label: 'Procrastinar',
        choice_b_label: 'Criar posição de trabalho com Joule',
      },
      it: {
        scenario_title: 'Evitare l\'amministrazione come un professionista',
        scenario_description: 'Devi creare una richiesta di assunzione per un nuovo dipendente ma le pratiche burocratiche sembrano travolgenti.',
        choice_a_label: 'Rimandare',
        choice_b_label: 'Crea posizione di lavoro con Joule',
      },
      tr: {
        scenario_title: 'İdari işleri profesyonel gibi erteleme',
        scenario_description: 'Yeni bir işe alım için iş ilanı talebi oluşturmanız gerekiyor ancak evrak işi bunaltıcı görünüyor.',
        choice_a_label: 'Ertele',
        choice_b_label: 'Joule ile iş pozisyonu oluştur',
      },
    },
    2: {
      en: {
        joule_response_text: 'The position remains unfilled and your team is overworked.',
      },
      de: {
        joule_response_text: 'Die Stelle bleibt unbesetzt und Ihr Team ist überlastet.',
      },
      es: {
        joule_response_text: 'La posición permanece sin cubrir y tu equipo está sobrecargado.',
      },
      pt: {
        joule_response_text: 'A posição permanece não preenchida e sua equipe está sobrecarregada.',
      },
      it: {
        joule_response_text: 'La posizione resta vacante e il tuo team è sovraccarico.',
      },
      tr: {
        joule_response_text: 'Pozisyon boş kalır ve ekibin aşırı yük altında çalışır.',
      },
    },
    4: {
      en: {
        user_input_text: 'I need to create a position for a Digital Marketing Consultant.',
      },
      de: {
        user_input_text: 'Ich muss eine Stelle für einen Digital Marketing Consultant erstellen.',
      },
      es: {
        user_input_text: 'Necesito crear una posición para un Consultor de Marketing Digital.',
      },
      pt: {
        user_input_text: 'Preciso criar uma posição para um Consultor de Marketing Digital.',
      },
      it: {
        user_input_text: 'Devo creare una posizione per un Consulente di Marketing Digitale.',
      },
      tr: {
        user_input_text: 'Dijital Pazarlama Danışmanı için bir pozisyon oluşturmam gerekiyor.',
      },
    },
    5: {
      en: {
        joule_response_text: 'I can help you create that position. Let me gather the necessary details.',
      },
      de: {
        joule_response_text: 'Ich kann Ihnen helfen, diese Position zu erstellen. Lassen Sie mich die notwendigen Details sammeln.',
      },
      es: {
        joule_response_text: 'Puedo ayudarte a crear esa posición. Déjame reunir los detalles necesarios.',
      },
      pt: {
        joule_response_text: 'Posso ajudá-lo a criar essa posição. Deixe-me reunir os detalhes necessários.',
      },
      it: {
        joule_response_text: 'Posso aiutarti a creare quella posizione. Lasciami raccogliere i dettagli necessari.',
      },
      tr: {
        joule_response_text: 'Bu pozisyonu oluşturmanıza yardımcı olabilirim. Gerekli ayrıntıları toplayayım.',
      },
    },
    6: {
      en: {
        joule_response_text: 'Based on similar roles in your organization, here\'s a recommended job description:',
      },
      de: {
        joule_response_text: 'Basierend auf ähnlichen Rollen in Ihrer Organisation ist hier eine empfohlene Stellenbeschreibung:',
      },
      es: {
        joule_response_text: 'Según roles similares en tu organización, aquí hay una descripción de trabajo recomendada:',
      },
      pt: {
        joule_response_text: 'Com base em funções semelhantes em sua organização, aqui está uma descrição de trabalho recomendada:',
      },
      it: {
        joule_response_text: 'In base a ruoli simili nella tua organizzazione, ecco una descrizione del ruolo consigliata:',
      },
      tr: {
        joule_response_text: 'Kuruluşundaki benzer rollere dayanarak önerilen iş tanımı burada:',
      },
    },
    9: {
      en: {
        user_input_text: 'Looks good! What salary range should we offer?',
      },
      de: {
        user_input_text: 'Sieht gut aus! Welche Gehaltsspanne sollten wir anbieten?',
      },
      es: {
        user_input_text: '¡Se ve bien! ¿Qué rango salarial deberíamos ofrecer?',
      },
      pt: {
        user_input_text: 'Parece bom! Qual faixa salarial devemos oferecer?',
      },
      it: {
        user_input_text: 'Sembra ottimo! Quale fascia salariale dovremmo offrire?',
      },
      tr: {
        user_input_text: 'İyi görünüyor! Hangi maaş aralığını teklif etmeliyiz?',
      },
    },
    10: {
      en: {
        joule_response_text: 'Based on market data for Digital Marketing Consultants in your region, I recommend a range of $65,000 - $85,000 annually.',
      },
      de: {
        joule_response_text: 'Basierend auf Marktdaten für Digital Marketing Consultants in Ihrer Region empfehle ich eine Spanne von 65.000 $ - 85.000 $ jährlich.',
      },
      es: {
        joule_response_text: 'Según los datos del mercado para Consultores de Marketing Digital en tu región, recomiendo un rango de $65,000 - $85,000 anualmente.',
      },
      pt: {
        joule_response_text: 'Com base em dados de mercado para Consultores de Marketing Digital em sua região, recomendo uma faixa de $65.000 - $85.000 anualmente.',
      },
      it: {
        joule_response_text: 'In base ai dati di mercato per i Consulenti di Marketing Digitale nella tua regione, raccomando un intervallo di $65.000 - $85.000 annualmente.',
      },
      tr: {
        joule_response_text: 'Bölgenizdeki Dijital Pazarlama Danışmanları için piyasa verilerine dayanarak, yıllık 65.000 $ - 85.000 $ aralığını öneriyorum.',
      },
    },
    10: {
      en: {
        joule_response_text: 'Perfect! I\'ve created a draft position for Digital Marketing Consultant starting today. Would you like me to generate a job description for this role?',
        action_a_label: 'Yes, create job description',
        action_b_label: 'No, submit for approval',
      },
      de: {
        joule_response_text: 'Perfekt! Ich habe einen Entwurf für die Stelle Digital Marketing Consultant mit Start ab heute erstellt. Soll ich eine Stellenbeschreibung für diese Rolle erstellen?',
        action_a_label: 'Ja, Stellenbeschreibung erstellen',
        action_b_label: 'Nein, zur Genehmigung einreichen',
      },
      es: {
        joule_response_text: '¡Perfecto! He creado un borrador de posición para Consultor de Marketing Digital a partir de hoy. ¿Te gustaría que generara una descripción del puesto para este rol?',
        action_a_label: 'Sí, crear descripción del puesto',
        action_b_label: 'No, enviar para aprobación',
      },
      pt: {
        joule_response_text: 'Perfeito! Criei um rascunho de posição para Consultor de Marketing Digital começando hoje. Gostaria que eu gerasse uma descrição do trabalho para esta função?',
        action_a_label: 'Sim, criar descrição do trabalho',
        action_b_label: 'Não, enviar para aprovação',
      },
      it: {
        joule_response_text: 'Perfetto! Ho creato una bozza di posizione per Consulente di Marketing Digitale a partire da oggi. Vuoi che generi una descrizione del lavoro per questo ruolo?',
        action_a_label: 'Sì, crea descrizione del lavoro',
        action_b_label: 'No, invia per approvazione',
      },
      tr: {
        joule_response_text: 'Mükemmel! Bugünden başlamak üzere Dijital Pazarlama Danışmanı için bir pozisyon taslağı oluşturdum. Bu rol için bir iş tanımı oluşturmamı ister misiniz?',
        action_a_label: 'Evet, iş tanımı oluştur',
        action_b_label: 'Hayır, onay için gönder',
      },
    },
    11: {
      en: {
        completion_message: 'Job requisition complete! Joule streamlined the entire process and we\'re ready to hire!',
      },
      de: {
        completion_message: 'Stellenanforderung abgeschlossen! Joule hat den gesamten Prozess rationalisiert und wir sind bereit zu einzustellen!',
      },
      es: {
        completion_message: '¡Requisición de trabajo completa! ¡Joule simplificó todo el proceso y estamos listos para contratar!',
      },
      pt: {
        completion_message: 'Requisição de trabalho concluída! Joule simplificou todo o processo e estamos prontos para contratar!',
      },
      it: {
        completion_message: 'Richiesta di assunzione completata! Joule ha semplificato l\'intero processo e siamo pronti ad assumere!',
      },
      tr: {
        completion_message: 'İş ilanı talebi tamamlandı! Joule tüm süreci kolaylaştırdı ve işe alıma hazırız!',
      },
    },
  },

  // MGR_JADA_04_PERFORMANCE - It's That Time of the Year Again
  MGR_JADA_04_PERFORMANCE: {
    1: {
      en: {
        scenario_title: "It's that time of the year again",
        scenario_description: 'Performance review season has arrived and you have multiple team reviews to complete.',
        choice_a_label: 'Panic and scramble through notes',
        choice_b_label: 'Prepare with Joule',
      },
      de: {
        scenario_title: 'Zeit für die Leistungsbeurteilung',
        scenario_description: 'Die Leistungsbeurteilungszeit ist gekommen und Sie haben mehrere Teambewertungen zu erledigen.',
        choice_a_label: 'In Panik geraten und durch Notizen wühlen',
        choice_b_label: 'Mit Joule vorbereiten',
      },
      es: {
        scenario_title: 'Es esa época del año otra vez',
        scenario_description: 'Ha llegado la temporada de evaluación de desempeño y tienes múltiples revisiones de equipo por completar.',
        choice_a_label: 'Entrar en pánico y revolver notas',
        choice_b_label: 'Preparar con Joule',
      },
      pt: {
        scenario_title: 'É aquela época do ano novamente',
        scenario_description: 'A temporada de avaliação de desempenho chegou e você tem várias avaliações de equipe para completar.',
        choice_a_label: 'Entrar em pânico e vasculhar anotações',
        choice_b_label: 'Preparar com Joule',
      },
      it: {
        scenario_title: 'È di nuovo quel periodo dell\'anno',
        scenario_description: 'È arrivata la stagione delle valutazioni delle prestazioni e hai più revisioni del team da completare.',
        choice_a_label: 'Andare nel panico e rovistare tra gli appunti',
        choice_b_label: 'Preparati con Joule',
      },
      tr: {
        scenario_title: 'Yılın o zamanı yine geldi',
        scenario_description: 'Performans değerlendirme sezonu geldi ve tamamlamanız gereken birden fazla ekip değerlendirmeniz var.',
        choice_a_label: 'Panikleyip notlara sarıl',
        choice_b_label: 'Joule ile hazırlan',
      },
    },
    2: {
      en: {
        joule_response_text: 'You arrive at the performance review meeting unprepared and flustered.',
      },
      de: {
        joule_response_text: 'Sie kommen unvorbereitet und aufgeregt zum Leistungsbeurteilungsgespräch.',
      },
      es: {
        joule_response_text: 'Llegas a la reunión de revisión de desempeño sin preparación y nervioso.',
      },
      pt: {
        joule_response_text: 'Você chega à reunião de avaliação de desempenho despreparado e nervoso.',
      },
      it: {
        joule_response_text: 'Arrivi alla riunione di performance review impreparato e agitato.',
      },
      tr: {
        joule_response_text: 'Performans değerlendirme toplantısına hazırlıksız ve telaşlı gelirsin.',
      },
    },
    4: {
      en: {
        user_input_text: 'I have a performance review with Gus in 30 minutes. Can you help me prepare?',
      },
      de: {
        user_input_text: 'Ich habe in 30 Minuten eine Leistungsbeurteilung mit Gus. Kannst du mir bei der Vorbereitung helfen?',
      },
      es: {
        user_input_text: 'Tengo una revisión de desempeño con Gus en 30 minutos. ¿Puedes ayudarme a preparar?',
      },
      pt: {
        user_input_text: 'Tenho uma avaliação de desempenho com Gus em 30 minutos. Você pode me ajudar a preparar?',
      },
      it: {
        user_input_text: 'Ho una performance review con Gus tra 30 minuti. Puoi aiutarmi a prepararmi?',
      },
      tr: {
        user_input_text: '30 dakika sonra Gus ile performans değerlendirmem var. Hazırlanmama yardımcı olur musun?',
      },
    },
    5: {
      en: {
        joule_response_text: 'Of course! Let me pull together a comprehensive performance summary for Gus.',
      },
      de: {
        joule_response_text: 'Natürlich! Lassen Sie mich eine umfassende Leistungszusammenfassung für Gus zusammenstellen.',
      },
      es: {
        joule_response_text: '¡Por supuesto! Déjame reunir un resumen completo de rendimiento para Gus.',
      },
      pt: {
        joule_response_text: 'Claro! Deixe-me reunir um resumo abrangente de desempenho para Gus.',
      },
      it: {
        joule_response_text: 'Certo! Metto insieme un riepilogo completo delle performance di Gus.',
      },
      tr: {
        joule_response_text: 'Elbette! Gus için kapsamlı bir performans özeti hazırlayayım.',
      },
    },
    6: {
      en: {
        joule_response_text: 'Here\'s Gus\'s performance overview for this year:',
      },
      de: {
        joule_response_text: 'Hier ist Gus\' Leistungsüberblick für dieses Jahr:',
      },
      es: {
        joule_response_text: 'Aquí está la descripción general del rendimiento de Gus para este año:',
      },
      pt: {
        joule_response_text: 'Aqui está a visão geral do desempenho de Gus para este ano:',
      },
      it: {
        joule_response_text: 'Ecco una panoramica delle performance di Gus per quest\'anno:',
      },
      tr: {
        joule_response_text: 'Gus\'un bu yılki performansına genel bakış burada:',
      },
    },
    8: {
      en: {
        user_input_text: 'What are his key achievements?',
      },
      de: {
        user_input_text: 'Was sind seine wichtigsten Erfolge?',
      },
      es: {
        user_input_text: '¿Cuáles son sus logros clave?',
      },
      pt: {
        user_input_text: 'Quais são suas principais conquistas?',
      },
      it: {
        user_input_text: 'Quali sono i suoi risultati principali?',
      },
      tr: {
        user_input_text: 'Onun başlıca başarıları neler?',
      },
    },
    9: {
      en: {
        joule_response_text: 'Gus has had an excellent year with several notable achievements:',
      },
      de: {
        joule_response_text: 'Gus hatte ein ausgezeichnetes Jahr mit mehreren bemerkenswerten Erfolgen:',
      },
      es: {
        joule_response_text: 'Gus ha tenido un año excelente con varios logros notables:',
      },
      pt: {
        joule_response_text: 'Gus teve um ano excelente com várias conquistas notáveis:',
      },
      it: {
        joule_response_text: 'Gus ha avuto un anno eccellente con diversi risultati degni di nota:',
      },
      tr: {
        joule_response_text: 'Gus, birkaç önemli başarıyla mükemmel bir yıl geçirdi:',
      },
    },
    11: {
      en: {
        user_input_text: 'What areas should he focus on for development?',
      },
      de: {
        user_input_text: 'Auf welche Bereiche sollte er sich für die Entwicklung konzentrieren?',
      },
      es: {
        user_input_text: '¿En qué áreas debería enfocarse para el desarrollo?',
      },
      pt: {
        user_input_text: 'Em quais áreas ele deve se concentrar para desenvolvimento?',
      },
      it: {
        user_input_text: 'Su quali aree dovrebbe concentrarsi per lo sviluppo?',
      },
      tr: {
        user_input_text: 'Gelişim için hangi alanlara odaklanmalı?',
      },
    },
    12: {
      en: {
        joule_response_text: 'Based on his career goals and current skill set, I recommend focusing on:',
      },
      de: {
        joule_response_text: 'Basierend auf seinen Karrierezielen und aktuellen Fähigkeiten empfehle ich, sich zu konzentrieren auf:',
      },
      es: {
        joule_response_text: 'Según sus objetivos profesionales y conjunto de habilidades actual, recomiendo centrarse en:',
      },
      pt: {
        joule_response_text: 'Com base em seus objetivos de carreira e conjunto de habilidades atual, recomendo focar em:',
      },
      it: {
        joule_response_text: 'In base ai suoi obiettivi di carriera e alle competenze attuali, consiglio di concentrarsi su:',
      },
      tr: {
        joule_response_text: 'Kariyer hedefleri ve mevcut yetkinliklerine göre şunlara odaklanmasını öneririm:',
      },
    },
    13: {
      en: {
        user_input_text: "Thanks Joule, you're a lifesaver!",
      },
      de: {
        user_input_text: 'Danke Joule, du bist ein Lebensretter!',
      },
      es: {
        user_input_text: '¡Gracias Joule, eres un salvavidas!',
      },
      pt: {
        user_input_text: 'Obrigado Joule, você é um salva-vidas!',
      },
      it: {
        user_input_text: 'Grazie Joule, mi hai salvato la vita!',
      },
      tr: {
        user_input_text: 'Teşekkürler Joule, hayat kurtarıcısın!',
      },
    },
    14: {
      en: {
        joule_response_text: "You're very welcome. I'm glad I could help. Let me know if you need anything else before your meeting.",
      },
      de: {
        joule_response_text: 'Gern geschehen. Ich bin froh, dass ich helfen konnte. Lassen Sie mich wissen, wenn Sie vor Ihrem Meeting noch etwas brauchen.',
      },
      es: {
        joule_response_text: 'De nada. Me alegra haber podido ayudar. Avísame si necesitas algo más antes de tu reunión.',
      },
      pt: {
        joule_response_text: 'De nada. Fico feliz por ter podido ajudar. Avise-me se precisar de mais alguma coisa antes da sua reunião.',
      },
      it: {
        joule_response_text: 'Prego! Sono felice di aver potuto aiutare. Fammi sapere se ti serve altro prima della riunione.',
      },
      tr: {
        joule_response_text: 'Rica ederim. Yardımcı olabildiysem ne mutlu. Toplantıdan önce başka bir şeye ihtiyacın olursa haber ver.',
      },
    },
    15: {
      en: {
        completion_message: "Joule helped me prepare thoroughly for Gus's performance conversation. I feel confident and ready to have a constructive, supportive discussion!",
      },
      de: {
        completion_message: 'Joule hat mir geholfen, mich gründlich auf das Leistungsgespräch mit Gus vorzubereiten. Ich fühle mich zuversichtlich und bereit für ein konstruktives, unterstützendes Gespräch!',
      },
      es: {
        completion_message: 'Joule me ayudó a prepararme a fondo para la conversación de rendimiento de Gus. ¡Me siento confiado y listo para tener una discusión constructiva y de apoyo!',
      },
      pt: {
        completion_message: 'Joule me ajudou a me preparar completamente para a conversa de desempenho de Gus. Me sinto confiante e pronto para ter uma discussão construtiva e de apoio!',
      },
      it: {
        completion_message: 'Joule mi ha aiutato a prepararmi a fondo per la conversazione sulle performance di Gus. Mi sento sicuro e pronto per una discussione costruttiva e di supporto!',
      },
      tr: {
        completion_message: 'Joule, Gus ile performans görüşmesine kapsamlı şekilde hazırlanmama yardımcı oldu. Kendime güveniyorum ve yapıcı, destekleyici bir görüşme için hazırım!',
      },
    },
  },
};

// Helper function to get translated content for a specific step
export function getTranslatedStepContent(
  scenarioId: string,
  stepNumber: number,
  language: 'en' | 'de' | 'es' | 'pt' | 'it' | 'tr',
  originalStep: CSVStep
): CSVStep {
  const translations = scenarioContentTranslations[scenarioId]?.[stepNumber]?.[language];
  
  if (!translations) {
    // Return original if no translation exists
    return originalStep;
  }

  // Merge translated fields with original step
  return {
    ...originalStep,
    ...translations,
  };
}