export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿En qué año llegó San Josemaría Escrivá a Logroño con su familia?",
    options: ["1913", "1915", "1917", "1920"],
    correctAnswer: 1,
    explanation: "La familia Escrivá se trasladó a Logroño en 1915, cuando Josemaría tenía 13 años."
  },
  {
    id: 2,
    question: "¿Cuántos años tenía San Josemaría cuando llegó a Logroño?",
    options: ["11 años", "13 años", "15 años", "17 años"],
    correctAnswer: 1,
    explanation: "Josemaría nació en 1902, por lo que al llegar a Logroño en 1915 tenía 13 años."
  },
  {
    id: 3,
    question: "¿En qué instituto cursó San Josemaría el bachillerato?",
    options: ["Instituto Cervantes", "Instituto Sagasta", "Instituto Rioja", "Instituto San Fernando"],
    correctAnswer: 1,
    explanation: "San Josemaría estudió en el prestigioso Instituto Sagasta de Logroño."
  },
  {
    id: 4,
    question: "¿Qué vio San Josemaría en la nieve que marcó su vocación?",
    options: ["Una cruz", "Huellas de un carmelita descalzo", "Una imagen de la Virgen", "Un libro de oraciones"],
    correctAnswer: 1,
    explanation: "En el invierno de 1917-1918, vio las huellas de un carmelita descalzo en la nieve, lo que le impresionó profundamente."
  },
  {
    id: 5,
    question: "¿Cómo se llamaba el establecimiento comercial donde trabajó el padre de San Josemaría?",
    options: ["El Corte Riojano", "La Gran Ciudad de Londres", "Almacenes Modernos", "Casa Sagasta"],
    correctAnswer: 1,
    explanation: "José Escrivá trabajó en 'La Gran Ciudad de Londres', un comercio de telas de Antonio Garrigosa."
  },
  {
    id: 6,
    question: "¿En qué seminario comenzó San Josemaría su formación sacerdotal?",
    options: ["Seminario de Pamplona", "Seminario de Burgos", "Seminario Conciliar de Logroño", "Seminario de Zaragoza"],
    correctAnswer: 2,
    explanation: "Comenzó su formación en el Seminario Conciliar de Logroño antes de trasladarse a Zaragoza."
  },
  {
    id: 7,
    question: "¿Cuál es el nombre de la concatedral de Logroño?",
    options: ["Santa María la Mayor", "Santa María de la Redonda", "Nuestra Señora del Pilar", "San Lorenzo"],
    correctAnswer: 1,
    explanation: "La Concatedral de Santa María de la Redonda es el templo principal de Logroño."
  },
  {
    id: 8,
    question: "¿Hasta qué año aproximadamente permaneció San Josemaría vinculado a Logroño?",
    options: ["1920", "1923", "1925", "1928"],
    correctAnswer: 2,
    explanation: "San Josemaría estuvo vinculado a Logroño hasta aproximadamente 1925."
  },
  {
    id: 9,
    question: "¿Cuántas hermanas tuvo San Josemaría que fallecieron siendo niñas?",
    options: ["Una", "Dos", "Tres", "Ninguna"],
    correctAnswer: 2,
    explanation: "Tres de sus hermanas (Rosario, Lolita y Asunción) fallecieron siendo niñas, tragedias que marcaron a la familia."
  },
  {
    id: 10,
    question: "¿Junto a qué río importante se encuentra Logroño?",
    options: ["Río Duero", "Río Tajo", "Río Ebro", "Río Guadalquivir"],
    correctAnswer: 2,
    explanation: "Logroño se encuentra junto al río Ebro, el río más caudaloso de España."
  }
];
