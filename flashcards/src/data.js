import { v4 as idGen } from 'uuid';
const questionsDatabase = [
    {
      id: idGen(),
      question: "Which river is the longest in Pakistan?",
      correctAnswer: "Indus"
    },
    {
      id: idGen(),
      question: "In which mountain range is K2 located?",
      correctAnswer: "Karakoram"
    },
    {
      id: idGen(),
      question: "What is the official language of Pakistan?",
      correctAnswer: "Urdu"
    },
    {
      id: idGen(),
      question: "Which province is known as the 'Land of Five Rivers'?",
      correctAnswer: "Punjab"
    },
    {
      id: idGen(),
      question: "Which desert is located in the southeastern part of Pakistan?",
      correctAnswer: "Thar Desert"
    },
    {
      id: idGen(),
      question: "What is the highest mountain peak in Pakistan?",
      correctAnswer: "K2"
    },
    {
      id: idGen(),
      question: "Which sea is to the south of Pakistan?",
      correctAnswer: "Arabian Sea"
    },
    {
      id: idGen(),
      question: "Which city is known as the 'City of Lights' in Pakistan?",
      correctAnswer: "Karachi"
    },
    {
      id: idGen(),
      question: "What is the currency of Pakistan?",
      correctAnswer: "Rupee"
    },
    {
      id: idGen(),
      question: "Which lake is the largest in Pakistan?",
      correctAnswer: "Manchar Lake"
    },
    {
      id: idGen(),
      question: "Which pass connects Pakistan with Afghanistan?",
      correctAnswer: "Khyber Pass"
    },
    {
      id: idGen(),
      question: "What is the national flower of Pakistan?",
      correctAnswer: "Jasmine"
    },
    {
      id: idGen(),
      question: "Which province is famous for its fruit orchards in Pakistan?",
      correctAnswer: "Balochistan"
    },
    {
      id: idGen(),
      question: "In which year did Pakistan gain independence?",
      correctAnswer: "1947"
    },
    {
      id: idGen(),
      question: "Which river is known as the 'Soul of Sindh'?",
      correctAnswer: "Indus"
    },
    {
      id: idGen(),
      question: "What is the famous ancient archaeological site in Pakistan?",
      correctAnswer: "Mohenjo-daro"
    },
    {
      id: idGen(),
      question: "Which province is known as the 'Land of Giants' in Pakistan?",
      correctAnswer: "Balochistan"
    },
    {
      id: idGen(),
      question: "Which mountain range separates Pakistan from China?",
      correctAnswer: "Karakoram"
    },
    {
      question: "What is the famous port city in Balochistan, Pakistan?",
      correctAnswer: "Gwadar"
    },
    {
      id: idGen(),
      question: "Which province is known for its fertile lands and agricultural production in Pakistan?",
      correctAnswer: "Punjab"
    },
    {
      id: idGen(),
      question: "What is the second-highest mountain peak in Pakistan?",
      correctAnswer: "Nanga Parbat"
    },
    {
      id: idGen(),
      question: "Which bird is the national bird of Pakistan?",
      correctAnswer: "Chukar Partridge"
    },
    {
      id: idGen(),
      question: "Which province is known as the 'Land of Hospitality'?",
      correctAnswer: "Khyber Pakhtunkhwa"
    },
    {
      id: idGen(),
      question: "What is the largest city in Pakistan by population?",
      correctAnswer: "Karachi"
    },
    {
      id: idGen(),
      question: "Which Pakistani scientist won the Nobel Prize in Physics in 1979?",
      correctAnswer: "Abdus Salam"
    },
    {
      id: idGen(),
      question: "Which mountain pass connects Pakistan with China?",
      correctAnswer: "Khunjerab Pass"
    },
    {
      id: idGen(),
      question: "Which country is known as the 'Land of the Two Holy Mosques'?",
      correctAnswer: "Saudi Arabia"
    },
    {
      id: idGen(),
      question: "In which city is the Alhambra, a famous Islamic architectural marvel, located?",
      correctAnswer: "Granada"
    },
    {
      id: idGen(),
      question: "What is the capital city of Afghanistan?",
      correctAnswer: "Kabul"
    },
    {
      id: idGen(),
      question: "Which river is considered sacred in Islam and is mentioned in the Quran?",
      correctAnswer: "Nile"
    },
    {
      id: idGen(),
      question: "In which country is the famous Blue Mosque located?",
      correctAnswer: "Turkey"
    },
    {
      id: idGen(),
      question: "What is the holiest city in Islam, the birthplace of Prophet Muhammad?",
      correctAnswer: "Makkah"
    },
    {
      id: idGen(),
      question: "Which mountain range is located in the northern part of Pakistan?",
      correctAnswer: "Himalayas"
    },
    {
      id: idGen(),
      question: "In which country is the ancient city of Petra, known for its rock-cut architecture?",
      correctAnswer: "Jordan"
    },
    {
      id: idGen(),
      question: "What is the traditional dress worn by men in Saudi Arabia?",
      correctAnswer: "Thobe"
    },
    {
      id: idGen(),
      question: "Which Islamic month is associated with fasting during daylight hours?",
      correctAnswer: "Ramadan"
    },
    {
      id: idGen(),
      question: "What is the largest mosque in Pakistan?",
      correctAnswer: "Faisal Mosque"
    },
    {
      id: idGen(),
      question: "Which sea is to the west of Pakistan?",
      correctAnswer: "Arabian Sea"
    },
    {
      id: idGen(),
      question: "In which country is the city of Timbuktu, an important center of Islamic scholarship?",
      correctAnswer: "Mali"
    },
    {
      id: idGen(),
      question: "Which Islamic empire was centered in present-day Turkey and lasted for more than six centuries?",
      correctAnswer: "Ottoman Empire"
    },
    {
      id: idGen(),
      question: "What is the official language of Iran?",
      correctAnswer: "Persian"
    }
  ];
  
  // shuffling the questions
  questionsDatabase.sort(() => Math.random() - 0.5);
  

  export {questionsDatabase};