/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameMode } from './types';

export const SPANISH_GAMES_DATA: GameMode[] = [
  {
    id: 'prepositions',
    title: {
      hy: '1. Տեղի և ուղղության նախդիրներ',
      es: '1. Preposiciones de lugar y dirección',
      en: '1. Prepositions of Place & Direction'
    },
    description: {
      hy: 'Խաղ՝ Աղյուսաշար։ Տեղադրեք 3D բլոկներ՝ ճիշտ օգտագործելով "a", "en", "de", "con", "por", "para" նախդիրները։',
      es: 'Juego: Albañilería 3D. Coloca bloques de cemento utilizando correctamente las preposiciones "a", "en", "de", "con", "por", "para".',
      en: 'Game: Brick Masonry. Lay 10 levels of 3D bricks by correctly filling in prepositions of direction and destination.'
    },
    sceneType: 'wall',
    blueprint: {
      hy: `⚙️ ԿԱՆՈՆՆԵՐԻ ԳԾԱԳԻՐ․ ՆԱԽԴԻՐՆԵՐԸ ԻՍՊԱՆԵՐԵՆՈՒՄ
• 'a' — շարժում ԴԵՊԻ նպատակակետ (ու՞ր), հեռավորություն, ժամանակ։ (ir a la playa - գնալ լողափ)
• 'en' — գտնվելը ՆԵՐՍՈՒՄ կամ մակերևույթի ՎՐԱ (որտե՞ղ), տրանսպորտ։ (en casa - տանը, viajar en tren - ճանապարհորդել գնացքով)
• 'de' — շարժում ՈՐՏԵՂԻՑ, ծագում, պատկանելություն (ու՞մ/ինչի՞)։ (vengo de la oficina - գալիս եմ գրասենյակից)
• 'con' — համատեղելիություն (ու՞մ/ինչի՞ հետ), գործիք։ (con mi amigo - իմ ընկերոջ հետ)
• 'por' — շարժում ՄԻՋՈՎ/ՄԻՋՈՑՈՎ, պատճառ, մոտավոր ժամանակ։ (caminar por el parque - քայլել այգով)
• 'para' — նպատակային ուղղություն (ՀԱՄԱՐ), վերջնաժամկետ։ (regalo para ti - նվեր քեզ համար)`,
      es: `⚙️ PLANO DE REGLAS: PREPOSICIONES EN ESPAÑOL
• 'a' — movimiento HACIA un destino (¿adónde?), distancia, tiempo o la hora. (ir a la playa)
• 'en' — estático o ubicación DENTRO o SOBRE un lugar (¿dónde?), medios de transporte. (en casa, viajar en tren)
• 'de' — movimiento DESDE un punto de origen, procedencia o posesión. (vengo de la oficina)
• 'con' — compañía (¿con quién?) o instrumento/herramienta de trabajo. (con mi amigo, con el martillo)
• 'por' — recorrido A TRAVÉS de un espacio, causa, duración o tiempo aproximado. (caminar por el parque)
• 'para' — destinatario directo (PARA), objetivo final, destino o fecha límite. (regalo para ti)`,
      en: `⚙️ BLUEPRINT OF RULES: KEY SPANISH PREPOSITIONS
• 'a' — movement TO a destination (where to), distance, or clock time. (ir a la playa - to go to the beach)
• 'en' — location INSIDE or ON top (where?), static position, or transport. (en casa - at home)
• 'de' — movement FROM, origin (where from), possession. (de Madrid - from Madrid)
• 'con' — companionship (WITH), instrument/tool. (con un martillo - with a hammer)
• 'por' — movement THROUGH/along, cause/reason, approximate time/space. (por la calle - down the street)
• 'para' — final goal/user (FOR), deadline. (para mañana - for tomorrow)`
    },
    questions: [
      {
        id: 'prep1',
        sentence: 'Este fin de semana voy ___ la playa con mis primos.',
        translation: {
          hy: 'Այս հանգստյան օրերին ես գնում եմ լողափ զարմիկներիս հետ:',
          es: 'Este fin de semana voy a la playa con mis primos.',
          en: 'This weekend I am going to the beach with my cousins.'
        },
        options: ['a', 'en', 'de', 'para'],
        correctAnswer: 'a',
        explanation: {
          hy: '"a" նախդիրն արտահայտում է շարժման ուղղությունը դեպի կոնկրետ նպատակակետ (ու՞ր):',
          es: 'La preposición "a" expresa la dirección del movimiento hacia un destino específico (¿adónde?).',
          en: 'The preposition "a" indicates direction of movement towards a specific destination.'
        }
      },
      {
        id: 'prep2',
        sentence: 'Mis llaves de casa están ___ mi bolsillo.',
        translation: {
          hy: 'Տանս բանալիները գրպանումս են:',
          es: 'Mis llaves de casa están en mi bolsillo.',
          en: 'My house keys are in my pocket.'
        },
        options: ['con', 'a', 'en', 'de'],
        correctAnswer: 'en',
        explanation: {
          hy: '"en" նախդիրը ցույց է տալիս գտնվելը որևէ տարածության ներսում կամ մակերևույթի վրա (որտե՞ղ):',
          es: 'La preposición "en" indica que el objeto está en el interior de un espacio o sobre una superficie.',
          en: 'The preposition "en" represents being inside a specific space or on a surface.'
        }
      },
      {
        id: 'prep3',
        sentence: 'El tren que va a Sevilla sale ___ la estación de Atocha.',
        translation: {
          hy: 'Սևիլյա գնացող գնացքը մեկնում է Ատոչա կայարանից:',
          es: 'El tren que va a Sevilla sale de la estación de Atocha.',
          en: 'The train going to Seville leaves from Atocha station.'
        },
        options: ['de', 'en', 'por', 'con'],
        correctAnswer: 'de',
        explanation: {
          hy: '"de" նախդիրը ցույց է տալիս շարժման սկզբնակետը կամ ծագումը (որտեղի՞ց):',
          es: 'La preposición "de" denota el punto de origen o partida de una trayectoria (¿de dónde?).',
          en: 'The preposition "de" denotes origin or the starting point of a trajectory (from where).'
        }
      },
      {
        id: 'prep4',
        sentence: 'Como la pizza caliente ___ un tenedor de metal.',
        translation: {
          hy: 'Ես ուտում եմ տաք պիցցան մետաղյա պատառաքաղով:',
          es: 'Como la pizza caliente con un tenedor de metal.',
          en: 'I eat the hot pizza with a metal fork.'
        },
        options: ['con', 'de', 'en', 'para'],
        correctAnswer: 'con',
        explanation: {
          hy: '"con" նախդիրը ցույց է տալիս այն գործիքը, որով կատարվում է գործողությունը (ինչո՞վ):',
          es: 'La preposición "con" indica el instrumento con el cual realizamos una acción.',
          en: 'The preposition "con" expresses the instrument or means (with).'
        }
      },
      {
        id: 'prep5',
        sentence: 'Este regalo dulce es ___ mi hermana menor.',
        translation: {
          hy: 'Այս քաղցր նվերը իմ փոքր քրոջ համար է:',
          es: 'Este regalo dulce es para mi hermana menor.',
          en: 'This sweet gift is for my younger sister.'
        },
        options: ['por', 'para', 'de', 'en'],
        correctAnswer: 'para',
        explanation: {
          hy: '"para" նախդիրը ցույց է տալիս ստացողին, վերջնական նպատակը կամ նշանակությունը (ում համար):',
          es: 'La preposición "para" se utiliza para designar al destinatario o uso final.',
          en: 'The preposition "para" expresses destination or recipient (for whom).'
        }
      },
      {
        id: 'prep6',
        sentence: 'El gato travieso camina ___ la mesa del comedor.',
        translation: {
          hy: 'Չարաճճի կատուն քայլում է ճաշասեղանի վրայով:',
          es: 'El gato travieso camina por la mesa del comedor.',
          en: 'The mischievous cat walks along/across the dining table.'
        },
        options: ['por', 'para', 'con', 'a'],
        correctAnswer: 'por',
        explanation: {
          hy: '"por" նախդիրը օգտագործվում է տարածության կամ մակերեսի վրայով շարժում արտահայտելու համար:',
          es: 'La preposición "por" expresa tránsito de movimiento a través de un espacio o superficie.',
          en: 'The preposition "por" is used to convey movement along or across a space or surface.'
        }
      },
      {
        id: 'prep7',
        sentence: 'Este delicioso queso procede ___ las montañas de Suiza.',
        translation: {
          hy: 'Այս համեղ պանիրը բերվում է Շվեյցարիայի լեռներից:',
          es: 'Este delicioso queso procede de las montañas de Suiza.',
          en: 'This delicious cheese originates from the mountains of Switzerland.'
        },
        options: ['de', 'a', 'en', 'para'],
        correctAnswer: 'de',
        explanation: {
          hy: '"de" նախդիրը ցույց է տալիս ապրանքի կամ նյութի ծագումն ու աղբյուրը:',
          es: 'La preposición "de" muestra la procedencia u origen geográfico del cual procede un objeto.',
          en: 'The preposition "de" indicates geographical origin or source material.'
        }
      },
      {
        id: 'prep8',
        sentence: 'Prefiero viajar ___ avión para ganar tiempo.',
        translation: {
          hy: 'Ես նախընտրում եմ ճանապարհորդել ինքնաթիռով՝ ժամանակ շահելու համար:',
          es: 'Prefiero viajar en avión para ganar tiempo.',
          en: 'I prefer to travel by plane to save time.'
        },
        options: ['en', 'por', 'con', 'a'],
        correctAnswer: 'en',
        explanation: {
          hy: 'Իսպաներենում տրանսպորտային միջոցները գործածվում են "en" նախդիրի հետ (en tren, en avión):',
          es: 'En español, los medios de transporte usualmente se acompañan de la preposición "en" (en tren, en avión).',
          en: 'In Spanish, means of transport are accompanied by "en" (by train, by plane, by car).'
        }
      }
    ]
  },
  {
    id: 'time_expressions',
    title: {
      hy: '2. Նախդիրներ և ժամանակային արտահայտություններ',
      es: '2. Preposiciones y Expresiones de Tiempo',
      en: '2. Time Prepositions & Clock Expressions'
    },
    description: {
      hy: 'Խաղ՝ Աշտարակային կռունկ։ Տեղադրեք 3D բեռնարկղների բլոկները ճիշտ ժամանակային նախդիրներով ("a las", "en", "por la", "el")։',
      es: 'Juego: Grúa Torre. Coloca bloques de contenedores 3D con las etiquetas correctas de preposición según la hora.',
      en: 'Game: Tower Crane. Lift container blocks by matching the correct time/calendar preposition tags.'
    },
    sceneType: 'crane',
    blueprint: {
      hy: `⚙️ ԿԱՆՈՆՆԵՐԻ ԳԾԱԳԻՐ․ ԺԱՄԱՆԱԿԸ ԻՍՊԱՆԵՐԵՆՈՒՄ
• 'a (las)' — ժամի ճշգրիտ նշման համար։ (A las 8:00 - ժամը 8-ին, Բացառություն՝ a la una - ժամը 1-ին)
• 'por (la)' — օրվա պահերը (por la mañana/tarde/noche - առավոտյան/ցերեկը/երեկոյան)։
• 'en' — ամիսների, տարվա եղանակների և տարեթվերի հետ։ (en julio - հուլիսին, en invierno - ձմռանը, en 2026)
• 'el' — շաբաթվա օրերի հետ՝ առանց նախդիրի։ (el lunes - երկուշաբթի օրը, los sábados - շաբաթ օրերին)`,
      es: `⚙️ PLANO DE REGLAS: EXPRESIONES TEMPORALES
• 'a las + [hora]' — para indicar horas específicas del día. (A las 8:00. Excepción singular: 'a la una')
• 'por la + [mañana/tarde/noche]' — partes del día para periodos generales de actividad.
• 'en' — integrado con meses del calendario, estaciones climáticas o años numéricos. (en julio, en invierno, en 2026)
• 'el + [día]' — usado directamente antes de los días de la semana (el lunes = el lunes, sin preposición 'en')`,
      en: `⚙️ BLUEPRINT OF RULES: TIME EXPRESSIONS
• 'a las + [hour]' — for specific clock hours. (A las eight o'clock. Exception: 'a la una' for 1:00)
• 'por la + [morning/afternoon/night]' — for parts of the day.
• 'en' — used with months, seasons, and years. (en agosto - in August, en verano - in summer)
• 'el + [day of week]' — used directly for days of the week. (el martes - on Tuesday)`
    },
    questions: [
      {
        id: 'time1',
        sentence: 'La clase de español empieza ___ las ocho de la mañana.',
        translation: {
          hy: 'Իսպաներենի դասը սկսվում է առավոտյան ժամը ութին:',
          es: 'La clase de español empieza a las ocho de la mañana.',
          en: 'The Spanish class starts at eight o\'clock in the morning.'
        },
        options: ['a', 'en', 'por', 'sobre'],
        correctAnswer: 'a',
        explanation: {
          hy: 'Ժամը նշելու համար միշտ օգտագործվում է "a" նախդիրը (a las + ժամ, a la una):',
          es: 'Para señalar la hora en un formato numérico se utiliza tradicionalmente la preposición "a".',
          en: 'To express clock time, Spanish uses "a las" (or "a la" for 1:00).'
        }
      },
      {
        id: 'time2',
        sentence: 'Hará mucho frío en las montañas ___ invierno.',
        translation: {
          hy: 'Ձմռանը լեռներում շատ ցուրտ կլինի:',
          es: 'Hará mucho frío en las montañas en invierno.',
          en: 'It will be very cold in the mountains in winter.'
        },
        options: ['en', 'por', 'de', 'a'],
        correctAnswer: 'en',
        explanation: {
          hy: 'Տարվա եղանակների հետ (invierno, verano, primavera, otoño) միշտ օգտագործում ենք "en" նախդիրը:',
          es: 'Las estaciones climáticas del año toman la preposición "en" en construcciones temporales.',
          en: 'Seasons of the year take the preposition "en" in Spanish.'
        }
      },
      {
        id: 'time3',
        sentence: 'El cartero amable viene ___ martes por la tarde.',
        translation: {
          hy: 'Բարեհամբույր փոստատարը կգա երեքշաբթի կեսօրից հետո:',
          es: 'El cartero amable viene el martes por la tarde.',
          en: 'The friendly mailman is coming on Tuesday afternoon.'
        },
        options: ['el', 'en', 'a', 'de'],
        correctAnswer: 'el',
        explanation: {
          hy: 'Շաբաթվա օրերի հետ իսպաներենում օգտագործվում է "el" որոշիչ հոդը՝ առանց նախդիրի (el martes = երեքշաբթի օրը):',
          es: 'En el idioma español para los días semanales se usa el artículo determinado masculino singular "el".',
          en: 'In Spanish, weekdays require the definite article "el/los" instead of a preposition equivalent to "on".'
        }
      },
      {
        id: 'time4',
        sentence: 'Siempre hacemos una pausa ___ la tarde para tomar café.',
        translation: {
          hy: 'Մենք միշտ ընդմիջում ենք անում ցերեկը՝ սուրճ խմելու համար:',
          es: 'Siempre hacemos una pausa por la tarde para tomar café.',
          en: 'We always take a break in the afternoon to have coffee.'
        },
        options: ['por', 'para', 'en', 'a'],
        correctAnswer: 'por',
        explanation: {
          hy: 'Օրվա ժամանակահատվածները նշելու համար օգտագործվում է "por la" արտահայտությունը (por la tarde / mañana / noche):',
          es: 'Las secciones que segmentan un día calendario se asocian a la fórmula preposicional "por la".',
          en: 'Parts of the day are introduced by the preposition "por" (por la tarde / mañana / noche).'
        }
      },
      {
        id: 'time5',
        sentence: 'Nosotros desayunamos fruta recién cortada ___ la una.',
        translation: {
          hy: 'Մենք թարմ կտրատած միրգ ենք ուտում նախաճաշին ժամը մեկին:',
          es: 'Nosotros desayunamos fruta recién cortada a la una.',
          en: 'We have freshly cut fruit for breakfast at one o\'clock.'
        },
        options: ['a', 'en', 'por', 'con'],
        correctAnswer: 'a',
        explanation: {
          hy: 'Քանի որ "una"-ն (մեկ ժամ) եզակի թիվ է, օգտագործվում է եզակի թվով հոդը՝ "a la una" (ի տարբերություն "a las dos", "a las tres"):',
          es: 'Dado que "una" es gramaticalmente singular, usamos el bloque "a la" en lugar de "a las".',
          en: 'Because "una" is singular, we use "a la una" (at 1:00) instead of "a las".'
        }
      },
      {
        id: 'time6',
        sentence: 'La dulce tarta de fresa se horneará ___ tres horas.',
        translation: {
          hy: 'Ելակի քաղցր տորթը կթխվի երեք ժամում:',
          es: 'La dulce tarta de fresa se horneará en tres horas.',
          en: 'The sweet strawberry cake will bake in three hours.'
        },
        options: ['en', 'por', 'a', 'de'],
        correctAnswer: 'en',
        explanation: {
          hy: '"En" նախդիրը թարգմանվում է որպես "ընթացքում" կամ "որոշակի ժամանակից հետո", երբ խոսքը վերաբերում է ժամկետների ավարտին:',
          es: 'La preposición "en" se utiliza aquí para denotar periodo o duración transcurrida requerida para un fin.',
          en: '"En" functions as "within" or "after a certain time" in this temporal perspective.'
        }
      }
    ]
  },
  {
    id: 'genders',
    title: {
      hy: '3. Գոյականների արական և իգական սեռեր',
      es: '3. Géneros Masculino y Femenino comunes',
      en: '3. Noun Genders: Masculine vs. Feminine'
    },
    description: {
      hy: 'Խաղ՝ Բետոնի տեսակավորում։ Լրացրեք համապատասխան բաքը "el" (արական) կամ "la" (իգական) հոդերով սովորական գոյականների համար։',
      es: 'Juego: Mezcla de Cemento. Asigna los artículos correctos "el" (masculino) y "la" (femenino) a los mezcladores de cemento.',
      en: 'Game: Cement Sorter. Separate general nouns ending in -o, -a, -ción, -tad, -dad, -ma into Masculine (el) and Feminine (la) mixers.'
    },
    sceneType: 'mixer',
    blueprint: {
      hy: `⚙️ ԿԱՆՈՆՆԵՐԻ ԳԾԱԳԻՐ․ ԳՈՅԱԿԱՆՆԵՐԻ ՍԵՌԸ ԻՍՊԱՆԵՐԵՆՈՒՄ
• Արական սեռ (El)․ -o վերջավորությամբ, -r, -l, -e բաղաձայններով։ (el martillo - մուրճ, el papel - թուղթ, el puente - կամուրջ)
• Իգական սեռ (La)․ -a վերջավորությամբ, աբստրակտ գоյականների ածանցներով՝ -ción, -sión, -dad, -tad, -tud, -umbre։ (la casa - տուն, la construcción - շինարարություն, la ciudad - քաղաք, la pared - պատ)`,
      es: `⚙️ PLANO DE REGLAS: GÉNERO GRAMATICAL DE SUSTANTIVOS
• Masculino (El): se asocia a terminaciones en "-o", consonantes "-r", "-l" o la vocal "-e". (el martillo, el papel, el puente)
• Femenino (La): abarca terminaciones comunes en "-a", y los sufijos abstractos "-ción", "-sión", "-dad", "-tad", "-tud" o "-umbre". (la construcción, la pared)`,
      en: `⚙️ BLUEPRINT OF RULES: GRAMMATICAL NOUN GENDERS
• Masculine (El): typically nouns ending in -o, -or, -l, -e, and metals/languages/rivers. (el bloque - block, el sector - sector)
• Feminine (La): typically nouns ending in -a, and abstracts in -ción, -sión, -dad, -tad, -tud, -umbre. (la estación - station, la calidad - quality)`
    },
    questions: [
      {
        id: 'gen1',
        sentence: '___ perro alegre corre feliz por el jardín.',
        translation: {
          hy: 'Ուրախ շունը երջանիկ վազում է պարտեզով:',
          es: 'El perro alegre corre feliz por el jardín.',
          en: 'The cheerful dog runs happily around the garden.'
        },
        options: ['El', 'La', 'Los', 'Las'],
        correctAnswer: 'El',
        explanation: {
          hy: '"perro" գոյականն ավարտվում է "-o"-ով և պատկանում է արական սեռին:',
          es: 'En español, "perro" finaliza en la vocal "-o", lo que indica género masculino.',
          en: '"Perro" ends in "-o", making it grammatically masculine, requiring the article "El".'
        }
      },
      {
        id: 'gen2',
        sentence: '___ canción favorita de mi madre es bastante alegre.',
        translation: {
          hy: 'Մայրիկիս սիրելի երգը բավականին ուրախ է:',
          es: 'La canción favorita de mi madre es bastante alegre.',
          en: 'My mother\'s favorite song is quite cheerful.'
        },
        options: ['El', 'La', 'Un', 'Los'],
        correctAnswer: 'La',
        explanation: {
          hy: '"-ción" ածանցով ավարտվող բոլոր գոյականները (օրինակ՝ canción) միշտ իգական սեռի են:',
          es: 'Los sustantivos formados por el sufijo "-ción" pertenecen al género femenino.',
          en: 'All Spanish nouns ending in "-ción" or "-sión", like "canción", are feminine and take "La".'
        }
      },
      {
        id: 'gen3',
        sentence: '___ ciudad de Barcelona es preciosa en primavera.',
        translation: {
          hy: 'Բարսելոնա քաղաքը հիասքանչ է գարնանը:',
          es: 'La ciudad de Barcelona es preciosa en primavera.',
          en: 'The city of Barcelona is beautiful in spring.'
        },
        options: ['La', 'El', 'Un', 'Los'],
        correctAnswer: 'La',
        explanation: {
          hy: '"-d" բաղաձայնով վերջացող գոյականները (la pared, la ciudad) սովորաբար պատկանում են իգական սեռին:',
          es: 'Los nombres que terminan en la consonante dental "-d" suelen adscribirse como sustantivos femeninos, tales como "la ciudad".',
          en: 'Nouns ending in "-d" such as "la ciudad" (the city) or "la pared" (the wall) are feminine.'
        }
      },
      {
        id: 'gen4',
        sentence: 'Necesitamos verificar ___ calidad de las frutas frescas.',
        translation: {
          hy: 'Մեզ անհրաժեշտ է ստուգել թարմ մրգերի որակը:',
          es: 'Necesitamos verificar la calidad de las frutas frescas.',
          en: 'We need to verify the quality of the fresh fruits.'
        },
        options: ['la', 'el', 'los', 'un'],
        correctAnswer: 'la',
        explanation: {
          hy: '"-dad" վերջավորությունը (calidad, felicidad, ciudad) իգական սեռի դասական հատկանիշ է:',
          es: 'El sufijo nominal "-dad" (calidad, ciudad, felicidad) marca inequívocamente raíces femeninas.',
          en: 'Nouns ending with the suffix "-dad" indicate feminine gender, requiring "la".'
        }
      },
      {
        id: 'gen5',
        sentence: '___ té caliente reconforta el cuerpo en invierno.',
        translation: {
          hy: 'Տաք թեյը հանգստացնում է մարմինը ձմռանը:',
          es: 'El té caliente reconforta el cuerpo en invierno.',
          en: 'Hot tea comforts the body in winter.'
        },
        options: ['El', 'La', 'Las', 'Unos'],
        correctAnswer: 'El',
        explanation: {
          hy: 'Իսպաներենում "té" (թեյ) գոյականը արական սեռի է (el té):',
          es: 'El sustantivo "té" es de género masculino en español (el té).',
          en: '"Té" (tea) is a masculine noun in Spanish (el té).'
        }
      },
      {
        id: 'gen6',
        sentence: '___ flor roja perfuma todo el salón.',
        translation: {
          hy: 'Կարմիր ծաղիկը բուրում է ամբողջ հյուրասենյակում:',
          es: 'La flor roja perfuma todo el salón.',
          en: 'The red flower scents the whole living room.'
        },
        options: ['La', 'El', 'Lo', 'Los'],
        correctAnswer: 'La',
        explanation: {
          hy: '"flor" (ծաղիկ) բառը իսպաներենում իգական սեռի գոյական է (la flor):',
          es: 'El término "flor" posee un género estrictamente femenino en el diccionario ("la flor").',
          en: '"Flor" (flower) is a feminine noun, matching with "La".'
        }
      }
    ]
  },
  {
    id: 'exceptions',
    title: {
      hy: '4. Գոյականների սեռերի բացառություններ',
      es: '4. Excepciones Especiales de Género',
      en: '4. Noun Gender Exceptions'
    },
    description: {
      hy: 'Խաղ՝ Կամրջի հավաքում։ Տեղադրեք պաշտպանիչ հեծանները՝ ճիշտ ընտրելով "el" կամ "la" հոդերը բացառիկ բառերի համար (el mapa, la mano, el problema)։',
      es: 'Juego: Ensamble del Puente. Asegura los carriles utilizando "el" o "la" para resolver las excepciones más tramposas.',
      en: 'Game: Bridge Assembly. Build bridge girders over a canyon by identifying the counter-intuitive genders of Spanish exceptions.'
    },
    sceneType: 'bridge',
    blueprint: {
      hy: `⚙️ ԿԱՆՈՆՆԵՐԻ ԳԾԱԳԻՐ․ ՍԵՌԵՐԻ ԲԱՑԱՌՈՒԹՅՈՒՆՆԵՐԸ
Կան կարևոր բառեր, որոնք խախտում են ստանդարտ կանոնները․
• Ավարտվում են -A-ով, բայց ԱՐԱԿԱՆ սեռի են (El)․
  - el mapa (քարտեզ), el día (օր), el planeta (մոլորակ), el sofá (բազմոց)։
  - Հունական ծագմամբ -MA վերջավորությամբ բառերը\` el problema (խնդիր), el sistema (համակարգ), el tema (թեմա), el clima (կլիմա), el idioma (լեզու)։
• Ավարտվում են -O-ով, բայց ԻԳԱԿԱՆ սեռի են (La)․
  - la mano (ձեռք)։
  - Կրճատումներ\` la foto (լուսանկար՝ fotografía-ից), la moto (մոտոցիկլետ՝ motocicleta-ից), la radio (ռադիո)։`,
      es: `⚙️ PLANO DE REGLAS: EXCEPCIONES IMPORTANTES
Existen sustantivos que no siguen el esquema predictivo tradicional de las terminaciones:
• Terminan en la vocal "-a" pero corresponden al género MASCULINO (El):
  - el mapa, el día, el planeta, el sofá.
  - Palabras originadas del griego que finalizan en el bloque "-ma": el problema, el sistema, el tema, el clima, el idioma.
• Terminan en la vocal "-o" pero corresponden al género FEMENINO (La):
  - la mano.
  - Abreviaturas por apócope: la foto (de fotografía), la moto (de motocicleta), la radio.`,
      en: `⚙️ BLUEPRINT OF RULES: KEY GENDER EXCEPTIONS
Watch out for counter-intuitive nouns:
• Ending in -A but MASCULINE (El):
  - el mapa (map), el día (day), el sofá (sofa), el planeta (planet).
  - Greek-origin words ending in -MA: el problema (problem), el tema (theme), el sistema (system), el clima (climate), el idioma (language).
• Ending in -O but FEMININE (La):
  - la mano (hand).
  - Shortened forms: la foto (photo, from fotografía), la moto (motorcycle, from mococicleta), la radio (radio).`
    },
    questions: [
      {
        id: 'exc1',
        sentence: '___ mapa turístico muestra los monumentos de París.',
        translation: {
          hy: 'Զբոսաշրջային քարտեզը ցույց է տալիս Փարիզի հուշարձանները:',
          es: 'El mapa turístico muestra los monumentos de París.',
          en: 'The tourist map shows the monuments of Paris.'
        },
        options: ['La', 'El', 'Las', 'Unas'],
        correctAnswer: 'El',
        explanation: {
          hy: '"Mapa"-ն ավարտվում է "-a"-ով, բայց պատմականորեն այն արական սեռի գոյական է (el mapa):',
          es: 'Aunque finaliza con la vocal "-a", la palabra "mapa" es inherentemente masculina ("el mapa").',
          en: '"Mapa" ends in "-a" but is grammatically masculine (el mapa).'
        }
      },
      {
        id: 'exc2',
        sentence: 'Hay ___ problema difícil en el examen de español.',
        translation: {
          hy: 'Իսպաներենի քննության մեջ մի դժվար խնդիր կա:',
          es: 'Hay un problema difícil en el examen de español.',
          en: 'There is a difficult problem in the Spanish exam.'
        },
        options: ['una', 'un', 'unas', 'la'],
        correctAnswer: 'un',
        explanation: {
          hy: '"-ma" վերջավորությամբ հունական ծագում ունեցող բառերը (problema, sistema) արական սեռի են, ուստի պահանջում են "un" կամ "el":',
          es: 'Los nombres griegos terminados en "-ma" son históricamente masculinos en la lengua española ("un problema").',
          en: 'Words of Greek origin ending in "-ma" are masculine. Thus, we say "el problema" or "un problema".'
        }
      },
      {
        id: 'exc3',
        sentence: 'La niña pequeña escribe la carta con ___ mano derecha.',
        translation: {
          hy: 'Փոքրիկ աղջիկը նամակը գրում է աջ ձեռքով:',
          es: 'La niña pequeña escribe la carta con la mano derecha.',
          en: 'The little girl writes the letter with her right hand.'
        },
        options: ['el', 'la', 'un', 'los'],
        correctAnswer: 'la',
        explanation: {
          hy: '"Mano"-ն ավարտվում է "-o"-ով, բայց բացառություն է և պատկանում է իգական սեռին (la mano):',
          es: 'El vocablo de raíz anatómica "mano" constituye una excepción célebre y requiere artículo femenino "la".',
          en: '"Mano" (hand) is a major exception. It ends in "-o" but is feminine ("la mano").'
        }
      },
      {
        id: 'exc4',
        sentence: '___ día de Navidad comemos todos en familia.',
        translation: {
          hy: 'Սուրբ Ծննդյան օրը մենք բոլորս ընտանիքով ենք ճաշում:',
          es: 'El día de Navidad comemos todos en familia.',
          en: 'On Christmas Day we all eat together as a family.'
        },
        options: ['La', 'El', 'Unas', 'Las'],
        correctAnswer: 'El',
        explanation: {
          hy: '"Día"-ն ավարտվում է "-a"-ով, բայց այն արական սեռի բառ է (el día, buenos días):',
          es: 'La palabra "día" es otra excepción elemental de origen que asume el género de matriz masculina.',
          en: '"Día" ends in "-a" but is a masculine exception, taking "El".'
        }
      },
      {
        id: 'exc5',
        sentence: 'Te envío ___ foto de mi adorable perrito.',
        translation: {
          hy: 'Ուղարկում եմ ձեզ իմ սիրելի շնիկի լուսանկարը:',
          es: 'Te envío la foto de mi adorable perrito.',
          en: 'I send you the photo of my adorable puppy.'
        },
        options: ['el', 'la', 'un', 'los'],
        correctAnswer: 'la',
        explanation: {
          hy: '"Foto"-ն իգական սեռի "fotografía" բառի կրճատումն է, ուստի այն պահպանում է իգական սեռը (la foto):',
          es: '"Foto" es el corte verbal del sustantivo original largo "fotografía", heredando su rasgo femenino.',
          en: '"Foto" is a clipping of "fotografía" (feminine) and therefore remains feminine: "la foto".'
        }
      },
      {
        id: 'exc6',
        sentence: 'Escuchamos las noticias por ___ radio por la mañana.',
        translation: {
          hy: 'Առավոտյան մենք լսում ենք լուրերը ռադիոյով:',
          es: 'Escuchamos las noticias por la radio por la mañana.',
          en: 'We listen to the news on the radio in the morning.'
        },
        options: ['la', 'el', 'un', 'los'],
        correctAnswer: 'la',
        explanation: {
          hy: '"Radio" բառը նույնպես իգական սեռի է շատ երկրներում (la radio):',
          es: 'Por convención general en España y gran parte de América latina, se utiliza en femenino: "la radio".',
          en: '"Radio" as a medium or device is feminine: "la radio".'
        }
      },
      {
        id: 'exc7',
        sentence: '___ sistema solar tiene ocho planetas conocidos.',
        translation: {
          hy: 'Արեգակնային համակարգն ունի ութ հայտնի մոլորակ:',
          es: 'El sistema solar tiene ocho planetas conocidos.',
          en: 'The solar system has eight known planets.'
        },
        options: ['La', 'El', 'Las', 'Una'],
        correctAnswer: 'El',
        explanation: {
          hy: '"sistema" բառն ավարտվում է "-ma"-ով և ունի հունական արմատներ, ուստի այն արական սեռի է (el sistema):',
          es: 'Siguiendo la regla de las palabras con terminación griega "-ma", es de género gramatical masculino: "el sistema".',
          en: '"Sistema" ends in "-ma" and is masculine due to its Greek roots (el sistema).'
        }
      }
    ]
  },
  {
    id: 'preterito_perfecto',
    title: {
      hy: '5. Անցյալ կատարյալ ժամանակաձև Pretérito Perfecto',
      es: '5. Pretérito Perfecto (Pasado Reciente)',
      en: '5. Pretérito Perfecto (Present Perfect)'
    },
    description: {
      hy: 'Խաղ՝ Երկնաքերի հարկեր։ Ավելացրեք շենքի նոր հարկերը՝ ճիշտ կազմելով Perfecto-ի ձևերը․ HABER + դերբայ (he, has, ha, hemos + cantado/hecho)։',
      es: 'Juego: Pisos de Rascacielos. Completa las uniones estructurales utilizando la conjugación de HABER y el participio adecuado.',
      en: 'Game: Skyscraper Floors. Build dynamic 3D skyscraper stories by choosing the correct conjugation of helper verb HABER + irregular/regular past participle.'
    },
    sceneType: 'skyscraper',
    blueprint: {
      hy: `⚙️ ԿԱՆՈՆՆԵՐԻ ԳԾԱԳԻՐ․ PRETÉRITO PERFECTO
Օգտագործվում է ներկայի հետ կապված ոչ վաղ անցյալի գործողությունների համար․
• Բանաձև\` [Օժանդակ Haber բայ] + [Բայի անցյալ դերբայ (-ado / -ido)]
• Haber-ի խոնարհումը\` yo HE, tú HAS, él/ella HA, nosotros HEMOS, vosotros HABÉIS, ellos/ellas HAN.
• Կանոնավոր դերբայներ\` hablar -> hablado, comer -> comido, vivir -> vivido.
• ԿԱՐԵՎՈՐ ԲԱՑԱՌՈՒԹՅՈՒՆՆԵՐ (դերբայներ)․
  - hacer -> hecho (արեց)
  - decir -> dicho (ասաց)
  - ver -> visto (տեսավ)
  - escribir -> escrito (գրեց)
  - abrir -> abierto (բացեց)`,
      es: `⚙️ PLANO DE REGLAS: TIEMPO PASADO RECIENTE (PERFECTO)
Representa eventos pasados completados dentro de un rango temporal que abarca el presente:
• Fórmula constructiva: [Verbo Auxiliar Haber] + [Participio del verbo principal]
• Haber actual: he, has, ha, hemos, habéis, han.
• Participios Regulares: verbos -AR -> -ado (edificado). Verbos -ER/-IR -> -ido (construido, vivido).
• Participios Irregulares Cruciales:
  - hacer -> hecho
  - decir -> dicho
  - ver -> visto
  - escribir -> escrito
  - abrir -> abierto`,
      en: `⚙️ BLUEPRINT OF RULES: PRETÉRITO PERFECTO
Used for completed actions in a timeframe that includes the present (e.g., today, this week).
• Structure: [Helper Haber] + [Past Participle (-ado/-ido)]
• Haber present tense: he, has, ha, hemos, habéis, han.
• Participles: -AR verbs -> -ado (hablado). -ER/-IR verbs -> -ido (comido, vivido).
• Crucial Irregular Participles:
  - hacer -> hecho (done/made)
  - decir -> dicho (said)
  - ver -> visto (seen)
  - escribir -> escrito (written)
  - abrir -> abierto (opened)`
    },
    questions: [
      {
        id: 'perf1',
        sentence: 'Esta mañana nosotros ___ comprado manzanas muy tiernas.',
        translation: {
          hy: 'Այս առավոտ մենք շատ քաղցր խնձորներ գնեցինք:',
          es: 'Esta mañana nosotros hemos comprado manzanas muy tiernas.',
          en: 'This morning we have bought very tender apples.'
        },
        options: ['hemos', 'ha', 'habéis', 'han'],
        correctAnswer: 'hemos',
        explanation: {
          hy: '"nosotros" (մենք) դերանվան համար "haber" օժանդակ բայը ընդունում է "hemos" ձևը:',
          es: 'La correspondencia en plural para la primera persona del plural ("nosotros") requiere "hemos".',
          en: 'For "nosotros" (we), the helper verb "haber" is conjugated as "hemos".'
        }
      },
      {
        id: 'perf2',
        sentence: '¿Qué película divertida ___ visto tú en el cine?',
        translation: {
          hy: 'Ի՞նչ զվարճալի ֆիլմ ես դու դիտել կինոթատրոնում:',
          es: '¿Qué película divertida has visto tú en el cine?',
          en: 'What funny movie have you seen in the cinema?'
        },
        options: ['has', 'he', 'ha', 'han'],
        correctAnswer: 'has',
        explanation: {
          hy: '"tú" (դու) դերանվան համար "haber" օժանդակ բայը ընդունում է "has" ձևը:',
          es: 'Para conjugar la segunda persona del singular informal ("tú"), se utiliza "has".',
          en: 'With the pronoun "tú" (you), the auxiliary verb "haber" is conjugated as "has".'
        }
      },
      {
        id: 'perf3',
        sentence: 'Mi madre ya ha ___ las flores frescas en el jarrón.',
        translation: {
          hy: 'Մայրս արդեն դրել է թարմ ծաղիկները ծաղկամանի մեջ:',
          es: 'Mi madre ya ha puesto las flores frescas en el jarrón.',
          en: 'My mother has already placed the fresh flowers in the vase.'
        },
        options: ['puesto', 'ponido', 'puestado', 'poniendo'],
        correctAnswer: 'puesto',
        explanation: {
          hy: '"poner" (դնել, տեղադրել) բայն ունի անկանոն անցյալ դերբայ՝ "puesto":',
          es: 'El verbo transitivo "poner" no tiene participio regular "-ido", sino el irregular directo "puesto".',
          en: 'The verb "poner" (to put/place) has an irregular past participle: "puesto" (not "ponido").'
        }
      },
      {
        id: 'perf4',
        sentence: 'Los niños han ___ los juguetes nuevos en la caja.',
        translation: {
          hy: 'Երեխաները տեղավորել են նոր խաղալիքները տուփի մեջ:',
          es: 'Los niños han metido los juguetes nuevos en la caja.',
          en: 'The children have put the new toys in the box.'
        },
        options: ['abierto', 'escribido', 'metido', 'metado'],
        correctAnswer: 'metido',
        explanation: {
          hy: '"meter" բայը -er-ով վերջացող կանոնավոր բայ է, որի դերբայը ավարտվում է -ido-ով՝ "metido":',
          es: '"Meter" es un verbo regular, por tanto su participio sigue la fórmula directa "-ido": "metido".',
          en: '"Meter" is a regular verb ending in -er, so its past participle is "metido".'
        }
      },
      {
        id: 'perf5',
        sentence: '¿Quién ha ___ esta tarta de chocolate tan sabrosa?',
        translation: {
          hy: 'Ո՞վ է պատրաստել այս համեղ շոկոլադե տորթը:',
          es: '¿Quién ha hecho esta tarta de chocolate tan sabrosa?',
          en: 'Who has made this tasty chocolate cake?'
        },
        options: ['hacido', 'hacho', 'hecho', 'hizo'],
        correctAnswer: 'hecho',
        explanation: {
          hy: '"hacer" (անել, պատրաստել) բայն ունի դասական անկանոն դերբայ՝ "hecho":',
          es: '"Hacer" construye su participio de manera totalmente irregular bajo la forma "hecho".',
          en: 'The verb "hacer" (to make/do) forms an irregular past participle "hecho".'
        }
      },
      {
        id: 'perf6',
        sentence: 'Yo todavía no he ___ el último episodio de mi serie.',
        translation: {
          hy: 'Ես դեռ չեմ տեսել սերիալիս վերջին սերիան:',
          es: 'Yo todavía no he visto el último episodio de mi serie.',
          en: 'I haven\'t seen the last episode of my series yet.'
        },
        options: ['visto', 'veído', 'verado', 'vido'],
        correctAnswer: 'visto',
        explanation: {
          hy: '"ver" (տեսնել) բայի անցյալ դերբայը անկանոն է՝ "visto":',
          es: 'El participio constitutivo del verbo "ver" es una excepción tradicional e irregular: "visto".',
          en: 'The verb "ver" (to see) forms the irregular past participle "visto".'
        }
      }
    ]
  },
  {
    id: 'preterito_imperfecto',
    title: {
      hy: '6. Անցյալ անկատար ժամանակաձև Pretérito Imperfecto',
      es: '6. Pretérito Imperfecto (Pasado Habitual)',
      en: '6. Pretérito Imperfecto (Imperfect Past)'
    },
    description: {
      hy: 'Խաղ՝ Ճակատի և տանիքի հարդարում։ Ավարտեք 3D տան զարդարումը՝ ընտրելով Imperfecto-ի համապատասխան վերջավորությունները կանոնավոր և անկանոն բայերի համար (-aba, -ías, era, iba)։',
      es: 'Juego: Fachada y Tejado Técnico. Completa el terminado arquitectónico de la casa aplicando desinencias de conjugación imperfecta.',
      en: 'Game: Facade & Roof Finish. Refine the visual details of your built house (installing windows, roof structures) by filling in Imperfect past endings.'
    },
    sceneType: 'finishing',
    blueprint: {
      hy: `⚙️ ԿԱՆՈՆՆԵՐԻ ԳԾԱԳԻՐ․ PRETÉRITO IMPERFECTO
Օգտագործվում է կրկնվող գործողությունների, անցյալում նկարագրությունների համար։
• -AR բայերի վերջավորությունները․
  - yo -ABA, tú -ABAS, él -ABA, nosotros -ÁBAMOS, vosotros -ABAIS, ellos -ABAN. (trabajaba)
• -ER/IR բայերի վերջավորությունները․
  - yo -ÍA, tú -ÍAS, él -ÍA, nosotros -ÍAMOS, vosotros -ÍAIS, ellos -ÍAN. (hacía, vivía)
• ՄԻԱՅՆ ԵՐԵՔ ԱՆԿԱՆՈՆ ԲԱՅ․
  - SER (լինել) -> era, eras, era, éramos, erais, eran.
  - IR (գնալ) -> iba, ibas, iba, íbamos, ibais, iban.
  - VER (տեսնել) -> veía, veías, veía, veíamos, veíais, veían.`,
      es: `⚙️ PLANO DE REGLAS: PRETÉRITO IMPERFECTO (PASADO DESCRIPTIVO)
Se dedica a narrar hábitos repetitivos, fondos escénicos, estados o descripciones duraderas en el pasado:
• Terminaciones en verbos de la primera conjugación -AR:
  -aba, -abas, -aba, -ábamos, -abais, -aban. (ej: edificaba)
• Terminaciones en verbos de segunda y tercera conjugación -ER / -IR:
  -ía, -ías, -ía, -íamos, -íais, -ían. (ej: construía)
• Exclusivamente TRES verbos son irregulares de origen:
  - SER (era, eras, era, éramos...)
  - IR (iba, ibas, iba, íbamos...)
  - VER (veía, veías, veía, veíamos...)`,
      en: `⚙️ BLUEPRINT OF RULES: PRETÉRITO IMPERFECTO
Used for habitual actions or environmental descriptions/states in the past.
• Ends for -AR Verbs:
  -aba, -abas, -aba, -ábamos, -abais, -aban. (e.g., edificaba)
• Ends for -ER / -IR Verbs:
  -ía, -ías, -ía, -íamos, -íais, -ían. (e.g., construía)
• Only THREE irregular verbs:
  - SER (to be) -> era, eras, era, éramos, erais, eran.
  - IR (to go) -> iba, ibas, iba, íbamos, ibais, iban.
  - VER (to see) -> veía, veías, veía, deíamos, veíais, veían.`
    },
    questions: [
      {
        id: 'imp1',
        sentence: 'Antes, mi hermano mayor no ___ ningún perro en casa.',
        translation: {
          hy: 'Նախկինում իմ ավագ եղբայրը տանը ոչ մի շուն չուներ:',
          es: 'Antes, mi hermano mayor no tenía ningún perro en casa.',
          en: 'Before, my older brother did not have any dog at home.'
        },
        options: ['tenía', 'tenó', 'tenaba', 'tenían'],
        correctAnswer: 'tenía',
        explanation: {
          hy: '"tener" բայը անցյալ անկատար ժամանակաձևի (Imperfecto) եզակի 3-րդ դեմքում ունի "tenía" ձևը:',
          es: 'El verbo "tener" pertenece a la segunda conjugación (-er), por ende forma "tenía" en tercera persona singular.',
          en: 'The verb "tener" in the third person singular in the Imperfect tense is "tenía".'
        }
      },
      {
        id: 'imp2',
        sentence: 'De jóvenes, nosotros ___ al parque de atracciones de Madrid.',
        translation: {
          hy: 'Երիտասարդ տարիքում մենք գնում էինք Մադրիդի ատրակցիոնների այգի:',
          es: 'De jóvenes, nosotros íbamos al parque de atracciones de Madrid.',
          en: 'When we were young, we used to go to the amusement park of Madrid.'
        },
        options: ['íbamos', 'iramos', 'íbamosis', 'íbamoson'],
        correctAnswer: 'íbamos',
        explanation: {
          hy: '"ir" (գնալ) բայն անկանոն է Imperfecto-ում: "nosotros" դեմքի ձևն է "íbamos":',
          es: '"Ir" es un verbo irregular en Imperfecto. La correspondencia para "nosotros" obliga al acentuado "íbamos".',
          en: '"Ir" is irregular in the Imperfect. The first person plural form is "íbamos" with an accent.'
        }
      },
      {
        id: 'imp3',
        sentence: 'Cuando yo era pequeño, la masa para galletas se ___ a mano.',
        translation: {
          hy: 'Երբ ես փոքր էի, թխվածքաբլիթի խմորը հունցում էին ձեռքով:',
          es: 'Cuando yo era pequeño, la masa para galletas se mezclaba a mano.',
          en: 'When I was little, the cookie dough was mixed by hand.'
        },
        options: ['mezclaba', 'mezclía', 'mezcló', 'mezclaban'],
        correctAnswer: 'mezclaba',
        explanation: {
          hy: '"mezclar" (խառնել) բայն ավարտվում է -ar-ով, ուստի եզակի 3-րդ դեմքի վերջավորությունն է "-aba"՝ "mezclaba":',
          es: '"Mezclar" es regular del grupo -ar. Para tercera persona singular, se une "-aba" -> "mezclaba".',
          en: '"Mezclar" ends in -ar; for singular 3rd person in the Imperfect we attach "-aba" -> "mezclaba".'
        }
      },
      {
        id: 'imp4',
        sentence: 'Los libros antiguos del abuelo ___ muy difíciles de leer.',
        translation: {
          hy: 'Պապիկի հին գրքերը շատ դժվար էր կարդալ:',
          es: 'Los libros antiguos del abuelo eran muy difíciles de leer.',
          en: 'Grandfather\'s old books were very difficult to read.'
        },
        options: ['eran', 'serían', 'era', 'sieron'],
        correctAnswer: 'eran',
        explanation: {
          hy: '"ser" (լինել) բայը Imperfecto-ի երեք անկանոն բայերից մեկն է: Հոգնակի ձևն է "eran":',
          es: 'El verbo "ser" tiene naturaleza irregular. Su conjugación plural de tercera persona es "eran".',
          en: '"Ser" is irregular in the Imperfect. The 3rd person plural (they / the books) form is "eran".'
        }
      },
      {
        id: 'imp5',
        sentence: '¿Tú ___ la mochila roja todos los días de escuela?',
        translation: {
          hy: 'Դու դպրոցական ամեն օր տանում էի՞ր կարմիր ուսապարկը:',
          es: '¿Tú llevabas la mochila roja todos los días de escuela?',
          en: 'Did you use to carry the red backpack every school day?'
        },
        options: ['llevabas', 'llevías', 'llevaste', 'llevaba'],
        correctAnswer: 'llevabas',
        explanation: {
          hy: '"tú" դեմքի համար -ar-ով վերջացող կանոնավոր բայերի (llevar) վերջավորությունը կլինի "-abas"՝ "llevabas":',
          es: 'En "tú", se adjunta la desinencia "-abas" sobre el lexema del verbo regular -ar "llevar" -> "llevabas".',
          en: 'For "tú" with regular -ar verbs like "llevar", we add "-abas" resulting in "llevabas".'
        }
      },
      {
        id: 'imp6',
        sentence: 'En el siglo pasado, la gente ___ velas de cera por las noches.',
        translation: {
          hy: 'Նախորդ դարում մարդիկ գիշերները մոմեր էին օգտագործում:',
          es: 'En el siglo pasado, the gente usaba velas de cera por las noches.',
          en: 'In the last century, people used wax candles at night.'
        },
        options: ['usaba', 'usaban', 'usaron', 'usían'],
        correctAnswer: 'usaba',
        explanation: {
          hy: 'Իսպաներենում "la gente" (մարդիկ) բառը եզակի թիվ է և պահանջում է եզակի 3-րդ դեմքի բայ՝ "usaba":',
          es: '"La gente" es un sustantivo colectivo gramaticalmente singular, por lo que asume verbo en singular: "usaba".',
          en: 'Note that "la gente" (the people) is group-singular in Spanish and takes a singular verb: "usaba".'
        }
      }
    ]
  }
];
