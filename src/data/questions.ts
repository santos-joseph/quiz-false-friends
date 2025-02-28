export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const questions: Question[] = [
  {
    question: "What does the English word 'actually' mean?",
    options: [
      "Atualmente ",
      "Na verdade ",
      "Ativamente "
    ],
    correctAnswer: 1,
    explanation: "The word 'actually' means 'in fact' or 'in reality', not 'currently' as the Portuguese word 'atualmente' might suggest."
  },
  {
    question: "What is the meaning of 'to attend' in English?",
    options: [
      "Atender ",
      "Assistir ",
      "Comparecer "
    ],
    correctAnswer: 2,
    explanation: "In English, 'to attend' means 'to be present at an event', not 'to serve/answer' as the Portuguese word 'atender' suggests."
  },
  {
    question: "What does the English word 'library' refer to?",
    options: [
      "Livraria ",
      "Biblioteca ",
      "Livro "
    ],
    correctAnswer: 1,
    explanation: "A 'library' is a place where books are kept for reading or borrowing, equivalent to 'biblioteca' in Portuguese, not 'livraria' which means 'bookstore'."
  },
  {
    question: "What does the English word 'push' mean?",
    options: [
      "Puxar ",
      "Empurrar ",
      "Pressionar "
    ],
    correctAnswer: 1,
    explanation: "The English word 'push' means 'empurrar', not 'puxar' which actually means 'to pull' in English."
  },
  {
    question: "What does the English word 'exit' mean?",
    options: [
      "Êxito ",
      "Existir ",
      "Saída "
    ],
    correctAnswer: 2,
    explanation: "The English word 'exit' means 'saída', not 'êxito' which means 'success' in English."
  },
  {
    question: "What does the English word 'college' primarily refer to?",
    options: [
      "Colégio ",
      "Faculdade ",
      "Colegiado "
    ],
    correctAnswer: 1,
    explanation: "In English, 'college' primarily refers to a higher education institution (faculdade), not a high school as the Portuguese word 'colégio' suggests."
  },
  {
    question: "What does the English word 'parents' mean?",
    options: [
      "Parentes ",
      "Pais ",
      "Parceiros "
    ],
    correctAnswer: 1,
    explanation: "The English word 'parents' specifically refers to one's mother and father (pais), not to relatives in general as the Portuguese word 'parentes' suggests."
  },
  {
    question: "What does the English word 'costume' primarily refer to?",
    options: [
      "Costume ",
      "Fantasia ",
      "Roupa "
    ],
    correctAnswer: 1,
    explanation: "In English, 'costume' primarily refers to clothes worn for a special occasion or performance (fantasia), not to a habit or custom as the Portuguese word 'costume' suggests."
  },
  {
    question: "What does the English word 'embarrassed' mean?",
    options: [
      "Embaraçado ",
      "Envergonhado ",
      "Embarazada "
    ],
    correctAnswer: 1,
    explanation: "The English word 'embarrassed' means 'envergonhado' (feeling ashamed or self-conscious), not 'embaraçado' which means 'tangled' in Portuguese."
  },
  {
    question: "What does the English word 'pretend' mean?",
    options: [
      "Pretender ",
      "Fingir ",
      "Prestar atenção "
    ],
    correctAnswer: 1,
    explanation: "The English word 'pretend' means 'fingir' (to act as if something is true when it is not), not 'pretender' which means 'to intend' in Portuguese."
  }
];