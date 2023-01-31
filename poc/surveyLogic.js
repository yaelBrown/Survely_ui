const data = {
  questions: [
    {
      question_id: 1,
      question: "Whats your favorite color?",
      question_order: 0,
    },
    {
      question_id: 2,
      question: "Whats your favorite food?",
      question_order: 1,
    },
    {
      question_id: 3,
      question: "Whats your favorite number?",
      question_order: 2,
    },
    {
      question_id: 4,
      question: "Where were you born?",
      question_order: 3,
    },
    {
      question_id: 5,
      question: "What is your favorite city to visit?",
      question_order: 4,
    },
    {
      question_id: 6,
      question: "When is your birthday?",
      question_order: 5,
    },
  ],
  questions_length: 6,
  responses: [
    {
      response_id: 5,
      response_question_id: "1",
      response: "test",
      responded_date: "2023-01-27T00:39:12.000Z",
    },
  ],
  responses_length: 1,
};






const processSurv = () => {
  const q = data.questions.sort((a,b) => a.question_order - b.question_order)
  const r = data.responses.sort((a,b) => a.response_question_id - b.response_question_id)

  const chatlog = []

  if (r.length == 0) {
    chatlog.push({
      message: q[0].question,
      author: "sys"
    })
  } else {
    r.forEach((e) => {
      
    })
  }

  return chatlog
}