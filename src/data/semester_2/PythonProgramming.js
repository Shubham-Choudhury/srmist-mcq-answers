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
        question:
          "Why are local variable names beginning with an underscore discouraged?",
        options: [
          `they are used to indicate global variables`,
          `they slow down execution`,
          `they confuse the interpreter`,
          `they are used to indicate a private variable of a class`,
        ],
        answer: `they are used to indicate a private variable of a class`,
      },
      {
        question: `What is the output of this code? >>>int ("30" + "40")`,
        options: [`3040`, `"3040"`, `("30" + "40")`, `"70"`],
        answer: `3040`,
      },
      {
        question: `Who developed the Python language?`,
        options: [
          `Guido van Rossum`,
          `Wick van Rossum`,
          `Niene Stom`,
          `Zim Den`,
        ],
        answer: `Guido van Rossum`,
      },
      {
        question: `A variable can be removed using which keyword?`,
        options: [`remove`, "del", "clear", "delete"],
        answer: `del`,
      },
      {
        question: `Identify the correct variable name`,
        options: [
          `123abc=10.22`,
          `this_is_a_variable=7`,
          `ThisBook="Python"`,
          `%name="xyz"`,
        ],
        answer: `this_is_a_variable=7`,
      },
      {
        question: `The input() function takes user's input as a`,
        options: [`float`, "integer", "character", "string"],
        answer: `string`,
      },
      {
        question: `Comments start with which symbol?`,
        options: [`"`, `#`, `*`, `//`],
        answer: `#`,
      },
      {
        question: `Which one of the following is the correct extension of the Python file?`,
        options: [`.py`, `.python`, `.PyPl`, `.p`],
        answer: `.py`,
      },
      {
        question: `Bitwise operator can be applied on which data type?`,
        options: [`integer`, `float`, `character`, `string`],
        answer: `integer`,
      },
    ],
  },
  {
    week: 2,
    questions: [
      {
        question: `If List = [1,2,3,4,5] then List [5] will result in_____________`,
        options: [`4`, `3`, `Error`, `2`],
        answer: `Error`,
      },
      {
        question: `Which data structure allows you to return multiple values from a function?`,
        options: [`List`, `Tuple`, `Dictionary`, `Set`],
        answer: `Tuple`,
      },
      {
        question: `To add a new element to a list we use which command?`,
        options: [
          `list1.append(5)`,
          `list1.addLast(5)`,
          `list1.add(5)`,
          `list1.addEnd(5)`,
        ],
        answer: `list1.append(5)`,
      },
      {
        question: `Which of the following is a Python tuple?`,
        options: [`(1, 2, 3)`, `{1, 2, 3}`, `{}`, `[1, 2, 3]`],
        answer: `(1, 2, 3)`,
      },
      {
        question: `Which of the following mode will refer to binary data?`,
        options: [`+`, `r`, `b`, `w`],
        answer: `b`,
      },
      {
        question: `What will be the output of the following Python expression?

        round(4.5676,2)`,
        options: [`4.6`, `4.57`, `4.56`, `4.5`],
        answer: `4.57`,
      },
      {
        question: `What is the output when we execute list("hello")?`,
        options: [
          `['llo']`,
          `['olleh']`,
          `['hello']`,
          `['h', 'e', 'l', 'l', 'o']`,
        ],
        answer: `['h', 'e', 'l', 'l', 'o']`,
      },
      {
        question: `Suppose list1 is [3, 5, 25, 1, 3], what is min(list1)?`,
        options: [`5`, `25`, `3`, `1`],
        answer: `1`,
      },
      {
        question: `Suppose list1 is [2, 33, 222, 14, 25], What is list1[-1]?`,
        options: [`None`, `25`, `2`, `Error`],
        answer: `25`,
      },
      {
        question: `What will be the output of the following Python code snippet?

        d = {'john':40, 'peter':45}`,
        options: [
          `"john", 40, 45, and "peter"`,
          `40 and 45`,
          `"john" and "peter"`,
          `d = (40:"john", 45:"peter")`,
        ],
        answer: `40 and 45`,
      },
    ],
  },
];

export default data;
