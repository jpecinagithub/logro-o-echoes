import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Trophy, RotateCcw, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QUIZ_QUESTIONS, type QuizQuestion } from '@/data/quiz';
import { useAppStore } from '@/store/appStore';
import { cn } from '@/lib/utils';

type QuizState = 'intro' | 'playing' | 'result';

const QuizView = () => {
  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  
  const { quizBestScore, setQuizBestScore } = useAppStore();

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const progress = ((currentIndex + (isAnswered ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100;

  const startQuiz = () => {
    setQuizState('playing');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswers((prev) => [...prev, isCorrect]);
  };

  const nextQuestion = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizState('result');
    if (score > quizBestScore) {
      setQuizBestScore(score);
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / QUIZ_QUESTIONS.length) * 100;
    if (percentage === 100) return '¡Perfecto! Eres un experto';
    if (percentage >= 80) return '¡Excelente! Conoces muy bien la historia';
    if (percentage >= 60) return '¡Muy bien! Buen conocimiento';
    if (percentage >= 40) return '¡No está mal! Sigue aprendiendo';
    return 'Sigue explorando la ruta para aprender más';
  };

  // Intro screen
  if (quizState === 'intro') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Cuestionario
          </h1>
          <p className="text-muted-foreground mb-6">
            Pon a prueba tus conocimientos sobre la vida de San Josemaría en Logroño (1915–1925).
          </p>
          
          <div className="bg-card rounded-xl p-4 mb-6 border border-border">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Preguntas</span>
              <span className="font-medium">{QUIZ_QUESTIONS.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Mejor puntuación</span>
              <span className="font-medium text-primary">
                {quizBestScore}/{QUIZ_QUESTIONS.length}
              </span>
            </div>
          </div>
          
          <Button onClick={startQuiz} size="lg" className="w-full">
            Comenzar
          </Button>
        </motion.div>
      </div>
    );
  }

  // Result screen
  if (quizState === 'result') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="bg-accent/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="h-12 w-12 text-accent" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2">
            ¡Cuestionario completado!
          </h1>
          <p className="text-muted-foreground mb-6">
            {getScoreMessage()}
          </p>
          
          {/* Score */}
          <div className="bg-card rounded-2xl p-6 mb-6 border border-border">
            <div className="text-5xl font-bold text-primary mb-2">
              {score}/{QUIZ_QUESTIONS.length}
            </div>
            <p className="text-sm text-muted-foreground">
              {Math.round((score / QUIZ_QUESTIONS.length) * 100)}% de aciertos
            </p>
            
            {/* Answer indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {answers.map((correct, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-3 h-3 rounded-full",
                    correct ? "bg-green-500" : "bg-destructive"
                  )}
                />
              ))}
            </div>
          </div>
          
          {score > quizBestScore - 1 && score === quizBestScore && quizBestScore > 0 && (
            <p className="text-sm text-accent font-medium mb-4">
              🎉 ¡Nueva mejor puntuación!
            </p>
          )}
          
          <Button onClick={startQuiz} size="lg" className="w-full gap-2">
            <RotateCcw className="h-4 w-4" />
            Intentar de nuevo
          </Button>
        </motion.div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Pregunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <span className="text-sm font-medium text-primary">
            {score} puntos
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="p-4 max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold text-foreground leading-relaxed">
              {currentQuestion.question}
            </h2>
            
            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = isAnswered;
                
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    className={cn(
                      "w-full p-4 rounded-xl text-left transition-all border-2",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      !showResult && "bg-card border-border hover:border-primary/50",
                      showResult && isCorrect && "bg-green-500/10 border-green-500",
                      showResult && isSelected && !isCorrect && "bg-destructive/10 border-destructive",
                      showResult && !isSelected && !isCorrect && "opacity-50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0",
                        !showResult && "bg-secondary text-secondary-foreground",
                        showResult && isCorrect && "bg-green-500 text-white",
                        showResult && isSelected && !isCorrect && "bg-destructive text-white"
                      )}>
                        {showResult && isCorrect ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : showResult && isSelected && !isCorrect ? (
                          <XCircle className="h-5 w-5" />
                        ) : (
                          String.fromCharCode(65 + index)
                        )}
                      </div>
                      <span className="text-foreground">{option}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
            
            {/* Explanation */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-secondary/50 rounded-xl p-4"
                >
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Explicación: </span>
                    {currentQuestion.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Next button */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Button onClick={nextQuestion} size="lg" className="w-full">
                  {currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizView;
