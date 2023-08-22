const data = [
  {
    week: 1,
    questions: [
      {
        question: "Which line of code produces an error?",
        options: [`" one" +"2"`, `'5' + 6`, `3 + 4`, `"7" + 'eight'`],
        answer: `'5' + 6`,
      },
      {
        question: "Why are local variable names beginning with an underscore discouraged?",
        options: [`they are used to indicate global variables`, `they slow down execution`, `they confuse the interpreter`, `they are used to indicate a private variable of a class`],
        answer: `they are used to indicate a private variable of a class`,
      },
      {
        question: `What is the output of this code? >>>int ("30" + "40")`,
        options: [`3040`, `"3040"`, `("30" + "40")`, `"70"`],
        answer: `3040`,
      },
      {
        question: `Who developed the Python language?`,
        options: [`Guido van Rossum`, `Wick van Rossum`, `Niene Stom`, `Zim Den`],
        answer: `Guido van Rossum`,
      },
      {
        question: `A variable can be removed using which keyword?`,
        options: [`remove`, 'del', 'clear', 'delete'],
        answer:`del`
      },
      {
        question:`Identify the correct variable name`,
        options:[`123abc=10.22`, `this_is_a_variable=7`, `ThisBook="Python"`, `%name="xyz"`],
        answer:`this_is_a_variable=7`
      },
      {
        question:`The input() function takes user's input as a`,
        options:[`float`, 'integer', 'character', 'string'],
        answer:`string`
      },
      {
        question:`Comments start with which symbol?`,
        options:[`"`, `#`, `*`, `//`],
        answer:`#`
      },
      {
        question:`Which one of the following is the correct extension of the Python file?`,
        options:[`.py`, `.python`, `.PyPl`, `.p`],
        answer:`.py`
      },
      {
        question:`Bitwise operator can be applied on which data type?`,
        options:[`integer`, `float`, `character`, `string`],
        answer:`integer`
      }
    ],
  },
];

export default data;
