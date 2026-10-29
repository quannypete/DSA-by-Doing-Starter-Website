export const stage1 = {
  "modules": [
    "Welcome to Programming",
    "Variables & Data Types",
    "Operators",
    "Making Decisions",
    "Loops",
    "Methods",
    "Arrays",
    "Strings",
    "Problem Solving",
    "Final Assessment"
  ],
  "lessons": [
    {
      "id": 1,
      "module": 0,
      "title": "What is programming?",
      "explain": "A program is a list of precise instructions.",
      "code": "class Main { public static void main(String[] args) { System.out.println(\"Hello, coder!\"); } }",
      "question": "What does println do?",
      "answers": [
        "Displays a line",
        "Stores a number",
        "Repeats a loop"
      ],
      "correct": 0,
      "challenge": "In your own words, explain what is programming?. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A program is a list of precise instructions.",
      "expected": "Hello, coder!",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to what is programming?.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'What is programming?'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'What is programming?' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 2,
      "module": 0,
      "title": "Meet Java",
      "explain": "Java is a programming language; the JVM runs compiled Java programs.",
      "code": "class Main { public static void main(String[] args) { System.out.println(\"Java is running\"); } }",
      "question": "Which method starts this Java program?",
      "answers": [
        "main",
        "print",
        "start"
      ],
      "correct": 0,
      "challenge": "In your own words, explain meet java. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Java is a programming language; the JVM runs compiled Java programs.",
      "expected": "Java is running",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to meet java.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Meet Java'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Meet Java' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 3,
      "module": 0,
      "title": "Printing output",
      "explain": "println adds a newline; print does not.",
      "code": "class Main { public static void main(String[] args) { System.out.println(\"One\"); System.out.println(\"Two\"); } }",
      "question": "What does println add after printing?",
      "answers": [
        "A newline",
        "A number",
        "A variable"
      ],
      "correct": 0,
      "challenge": "In your own words, explain printing output. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. println adds a newline; print does not.",
      "expected": "One\nTwo",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to printing output.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Printing output'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Printing output' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 4,
      "module": 0,
      "title": "Syntax and comments",
      "explain": "Java statements often end in semicolons. Comments explain code and do not run.",
      "code": "class Main { public static void main(String[] args) { // A comment\n System.out.println(\"Ready\"); } }",
      "question": "Does a // comment execute?",
      "answers": [
        "No",
        "Yes",
        "Only in loops"
      ],
      "correct": 0,
      "challenge": "In your own words, explain syntax and comments. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Java statements often end in semicolons. Comments explain code and do not run.",
      "expected": "Ready",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to syntax and comments.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Syntax and comments'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Syntax and comments' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 5,
      "module": 1,
      "title": "Variables are labels",
      "explain": "A variable gives a value a name so you can use it later.",
      "code": "class Main { public static void main(String[] args) { int score = 7; System.out.println(score); } }",
      "question": "What is score?",
      "answers": [
        "A variable",
        "A method",
        "A loop"
      ],
      "correct": 0,
      "challenge": "In your own words, explain variables are labels. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A variable gives a value a name so you can use it later.",
      "expected": "7",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to variables are labels.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Variables are labels'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Variables are labels' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 6,
      "module": 1,
      "title": "Whole numbers",
      "explain": "int stores whole numbers such as 0, 8, and -3.",
      "code": "class Main { public static void main(String[] args) { int lives = 3; lives = lives - 1; System.out.println(lives); } }",
      "question": "What does int store?",
      "answers": [
        "Whole numbers",
        "Text only",
        "True or false"
      ],
      "correct": 0,
      "challenge": "In your own words, explain whole numbers. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. int stores whole numbers such as 0, 8, and -3.",
      "expected": "2",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to whole numbers.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Whole numbers'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Whole numbers' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 7,
      "module": 1,
      "title": "Decimal numbers",
      "explain": "double stores decimal values; arithmetic can produce decimals.",
      "code": "class Main { public static void main(String[] args) { double price = 2.5; System.out.println(price * 2); } }",
      "question": "Which type stores decimals?",
      "answers": [
        "double",
        "boolean",
        "char"
      ],
      "correct": 0,
      "challenge": "In your own words, explain decimal numbers. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. double stores decimal values; arithmetic can produce decimals.",
      "expected": "5.0",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to decimal numbers.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Decimal numbers'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Decimal numbers' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 8,
      "module": 1,
      "title": "Text and characters",
      "explain": "String stores text in double quotes; char stores one character in single quotes.",
      "code": "class Main { public static void main(String[] args) { String name = \"Ada\"; char initial = 'A'; System.out.println(name + initial); } }",
      "question": "Which holds text like \"Boston\"?",
      "answers": [
        "String",
        "int",
        "boolean"
      ],
      "correct": 0,
      "challenge": "In your own words, explain text and characters. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. String stores text in double quotes; char stores one character in single quotes.",
      "expected": "AdaA",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to text and characters.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Text and characters'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Text and characters' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 9,
      "module": 1,
      "title": "Booleans and conversion",
      "explain": "boolean stores true or false. Convert strings with Integer.parseInt when appropriate.",
      "code": "class Main { public static void main(String[] args) { boolean ready = true; System.out.println(ready); } }",
      "question": "Which values can boolean hold?",
      "answers": [
        "true or false",
        "Any text",
        "Any decimal"
      ],
      "correct": 0,
      "challenge": "In your own words, explain booleans and conversion. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. boolean stores true or false. Convert strings with Integer.parseInt when appropriate.",
      "expected": "true",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to booleans and conversion.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Booleans and conversion'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Booleans and conversion' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 10,
      "module": 2,
      "title": "Basic arithmetic",
      "explain": "Use +, -, *, and / for calculations. Integer division discards the fraction.",
      "code": "class Main { public static void main(String[] args) { int total = 8 + 4 * 2; System.out.println(total); } }",
      "question": "What is 7 / 2 with ints?",
      "answers": [
        "3",
        "3.5",
        "4"
      ],
      "correct": 0,
      "challenge": "In your own words, explain basic arithmetic. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Use +, -, *, and / for calculations. Integer division discards the fraction.",
      "expected": "16",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to basic arithmetic.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Basic arithmetic'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Basic arithmetic' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 11,
      "module": 2,
      "title": "Remainders",
      "explain": "% gives the remainder after division, useful for even/odd checks.",
      "code": "class Main { public static void main(String[] args) { System.out.println(10 % 3); } }",
      "question": "What is 7 % 2?",
      "answers": [
        "1",
        "2",
        "3"
      ],
      "correct": 0,
      "challenge": "In your own words, explain remainders. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. % gives the remainder after division, useful for even/odd checks.",
      "expected": "1",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to remainders.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Remainders'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Remainders' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 12,
      "module": 2,
      "title": "Comparisons",
      "explain": "==, !=, <, >, <=, >= compare values and return booleans.",
      "code": "class Main { public static void main(String[] args) { System.out.println(5 > 3); } }",
      "question": "What is 18 >= 16?",
      "answers": [
        "true",
        "false",
        "18"
      ],
      "correct": 0,
      "challenge": "In your own words, explain comparisons. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. ==, !=, <, >, <=, >= compare values and return booleans.",
      "expected": "true",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to comparisons.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Comparisons'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Comparisons' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 13,
      "module": 2,
      "title": "Logic and precedence",
      "explain": "&& means AND, || means OR, ! means NOT. Parentheses clarify intent.",
      "code": "class Main { public static void main(String[] args) { System.out.println(true || false && false); } }",
      "question": "When is A && B true?",
      "answers": [
        "When both are true",
        "When either is true",
        "Never"
      ],
      "correct": 0,
      "challenge": "In your own words, explain logic and precedence. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. && means AND, || means OR, ! means NOT. Parentheses clarify intent.",
      "expected": "true",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to logic and precedence.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Logic and precedence'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Logic and precedence' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 14,
      "module": 3,
      "title": "If statements",
      "explain": "An if block runs only when its condition is true.",
      "code": "class Main { public static void main(String[] args) { int age = 18; if (age >= 18) System.out.println(\"Adult\"); } }",
      "question": "When does an if block run?",
      "answers": [
        "When its condition is true",
        "Always",
        "Only in a loop"
      ],
      "correct": 0,
      "challenge": "In your own words, explain if statements. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. An if block runs only when its condition is true.",
      "expected": "Adult",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to if statements.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'If statements'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'If statements' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 15,
      "module": 3,
      "title": "If and else",
      "explain": "else gives a fallback when the if condition is false.",
      "code": "class Main { public static void main(String[] args) { int score = 4; if (score > 5) System.out.println(\"High\"); else System.out.println(\"Low\"); } }",
      "question": "When does else run?",
      "answers": [
        "When if is false",
        "When if is true",
        "Always"
      ],
      "correct": 0,
      "challenge": "In your own words, explain if and else. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. else gives a fallback when the if condition is false.",
      "expected": "Low",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to if and else.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'If and else'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'If and else' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 16,
      "module": 3,
      "title": "Else if chains",
      "explain": "Check multiple conditions in order; the first matching branch runs.",
      "code": "class Main { public static void main(String[] args) { int n = 0; if(n>0) System.out.println(\"Positive\"); else if(n<0) System.out.println(\"Negative\"); else System.out.println(\"Zero\"); } }",
      "question": "Which matching branch runs first?",
      "answers": [
        "The earliest matching branch",
        "The last branch",
        "Every branch"
      ],
      "correct": 0,
      "challenge": "In your own words, explain else if chains. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Check multiple conditions in order; the first matching branch runs.",
      "expected": "Zero",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to else if chains.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Else if chains'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Else if chains' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 17,
      "module": 3,
      "title": "Switch and nested decisions",
      "explain": "switch selects among cases; nested if blocks check conditions inside conditions.",
      "code": "class Main { public static void main(String[] args) { int day=2; switch(day) { case 1: System.out.println(\"Mon\"); break; case 2: System.out.println(\"Tue\"); break; default: System.out.println(\"Other\"); } } }",
      "question": "What does default handle?",
      "answers": [
        "Unmatched cases",
        "All cases",
        "Only case 1"
      ],
      "correct": 0,
      "challenge": "In your own words, explain switch and nested decisions. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. switch selects among cases; nested if blocks check conditions inside conditions.",
      "expected": "Tue",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to switch and nested decisions.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Switch and nested decisions'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Switch and nested decisions' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 18,
      "module": 4,
      "title": "Why loops exist",
      "explain": "Loops repeat instructions without copying the same code.",
      "code": "class Main { public static void main(String[] args) { for(int i=0;i<3;i++) System.out.println(\"Go\"); } }",
      "question": "How many times does i<3 run from 0?",
      "answers": [
        "3",
        "2",
        "4"
      ],
      "correct": 0,
      "challenge": "In your own words, explain why loops exist. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Loops repeat instructions without copying the same code.",
      "expected": "Go\nGo\nGo",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to why loops exist.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Why loops exist'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Why loops exist' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 19,
      "module": 4,
      "title": "For loops",
      "explain": "A for loop has initialization, condition, and update.",
      "code": "class Main { public static void main(String[] args) { for(int i=1;i<=3;i++) System.out.println(i); } }",
      "question": "What is printed last?",
      "answers": [
        "4",
        "3",
        "5"
      ],
      "correct": 0,
      "challenge": "In your own words, explain for loops. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A for loop has initialization, condition, and update.",
      "expected": "1\n2\n3",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to for loops.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'For loops'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'For loops' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 20,
      "module": 4,
      "title": "While loops",
      "explain": "A while loop checks the condition before each repetition.",
      "code": "class Main { public static void main(String[] args) { int i=2; while(i>0) { System.out.println(i); i--; } } }",
      "question": "What is n afterward?",
      "answers": [
        "2",
        "1",
        "0"
      ],
      "correct": 0,
      "challenge": "In your own words, explain while loops. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A while loop checks the condition before each repetition.",
      "expected": "2\n1",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to while loops.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'While loops'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'While loops' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 21,
      "module": 4,
      "title": "Do-while and control",
      "explain": "do-while runs at least once; break exits, continue skips to next iteration.",
      "code": "class Main { public static void main(String[] args) { int n=0; do { System.out.println(n); n++; } while(n<1); } }",
      "question": "How many times does this run?",
      "answers": [
        "1",
        "0",
        "Forever"
      ],
      "correct": 0,
      "challenge": "In your own words, explain do-while and control. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. do-while runs at least once; break exits, continue skips to next iteration.",
      "expected": "0",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to do-while and control.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Do-while and control'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Do-while and control' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 22,
      "module": 4,
      "title": "Nested loops",
      "explain": "A loop inside a loop can visit every row and column.",
      "code": "class Main { public static void main(String[] args) { for(int row=1;row<=2;row++) for(int col=1;col<=2;col++) System.out.println(row+\":\"+col); } }",
      "question": "How many stars print?",
      "answers": [
        "6",
        "5",
        "3"
      ],
      "correct": 0,
      "challenge": "In your own words, explain nested loops. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A loop inside a loop can visit every row and column.",
      "expected": "1:1\n1:2\n2:1\n2:2",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to nested loops.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Nested loops'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Nested loops' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 23,
      "module": 5,
      "title": "What is a method?",
      "explain": "A method names a reusable block of code.",
      "code": "class Main { static void greet(){ System.out.println(\"Hi\"); } public static void main(String[] args) { greet(); } }",
      "question": "Why use methods?",
      "answers": [
        "Reuse instructions",
        "Store only decimals",
        "Replace all loops"
      ],
      "correct": 0,
      "challenge": "In your own words, explain what is a method?. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A method names a reusable block of code.",
      "expected": "Hi",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to what is a method?.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'What is a method?'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'What is a method?' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 24,
      "module": 5,
      "title": "Parameters and arguments",
      "explain": "Parameters are inputs declared by a method; arguments are values supplied when calling it.",
      "code": "class Main { static void greet(String name){ System.out.println(\"Hi \" + name); } public static void main(String[] args) { greet(\"Sam\"); } }",
      "question": "What is name in the declaration?",
      "answers": [
        "A parameter",
        "A loop",
        "A class"
      ],
      "correct": 0,
      "challenge": "In your own words, explain parameters and arguments. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Parameters are inputs declared by a method; arguments are values supplied when calling it.",
      "expected": "Hi Sam",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to parameters and arguments.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Parameters and arguments'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Parameters and arguments' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 25,
      "module": 5,
      "title": "Return values",
      "explain": "A non-void method sends a result back using return.",
      "code": "class Main { static int doubleIt(int n){ return n*2; } public static void main(String[] args) { System.out.println(doubleIt(4)); } }",
      "question": "What does doubleIt(3) return?",
      "answers": [
        "6",
        "3",
        "Nothing"
      ],
      "correct": 0,
      "challenge": "In your own words, explain return values. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A non-void method sends a result back using return.",
      "expected": "8",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to return values.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Return values'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Return values' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 26,
      "module": 5,
      "title": "Scope and decomposition",
      "explain": "Local variables live inside their block. Small methods make programs easier to test.",
      "code": "class Main { static int add(int a,int b){ return a+b; } public static void main(String[] args) { System.out.println(add(2,5)); } }",
      "question": "Where can local sum be used?",
      "answers": [
        "Inside its method block",
        "Anywhere in every class",
        "Only in a comment"
      ],
      "correct": 0,
      "challenge": "In your own words, explain scope and decomposition. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Local variables live inside their block. Small methods make programs easier to test.",
      "expected": "7",
      "analogy": "Think of a recipe: the computer follows instructions in order.",
      "steps": [
        "First, read the example and identify the values or instructions related to scope and decomposition.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Scope and decomposition'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Scope and decomposition' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 27,
      "module": 6,
      "title": "Why arrays?",
      "explain": "An array stores a fixed-size ordered collection of values of one type.",
      "code": "class Main { public static void main(String[] args) { int[] nums={4,8,12}; System.out.println(nums.length); } }",
      "question": "How many elements are there?",
      "answers": [
        "3",
        "2",
        "4"
      ],
      "correct": 0,
      "challenge": "In your own words, explain why arrays?. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. An array stores a fixed-size ordered collection of values of one type.",
      "expected": "3",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to why arrays?.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Why arrays?'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Why arrays?' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 28,
      "module": 6,
      "title": "Indexes",
      "explain": "Array positions begin at index 0. The last index is length - 1.",
      "code": "class Main { public static void main(String[] args) { int[] nums={4,8,12}; System.out.println(nums[1]); } }",
      "question": "What is a[1]?",
      "answers": [
        "8",
        "5",
        "9"
      ],
      "correct": 0,
      "challenge": "In your own words, explain indexes. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Array positions begin at index 0. The last index is length - 1.",
      "expected": "8",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to indexes.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Indexes'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Indexes' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 29,
      "module": 6,
      "title": "Updating and length",
      "explain": "Use an index to replace an element; length tells how many elements exist.",
      "code": "class Main { public static void main(String[] args) { int[] nums={4,8,12}; nums[0]=9; System.out.println(nums[0]); } }",
      "question": "What is a[0] now?",
      "answers": [
        "7",
        "2",
        "4"
      ],
      "correct": 0,
      "challenge": "In your own words, explain updating and length. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Use an index to replace an element; length tells how many elements exist.",
      "expected": "9",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to updating and length.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Updating and length'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Updating and length' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 30,
      "module": 6,
      "title": "Traversing arrays",
      "explain": "A loop can visit each array element one at a time.",
      "code": "class Main { public static void main(String[] args) { int[] nums={4,8,12}; for(int n:nums) System.out.println(n); } }",
      "question": "What does for-each visit?",
      "answers": [
        "Each element",
        "Only the first element",
        "Only the last element"
      ],
      "correct": 0,
      "challenge": "In your own words, explain traversing arrays. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A loop can visit each array element one at a time.",
      "expected": "4\n8\n12",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to traversing arrays.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Traversing arrays'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Traversing arrays' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 31,
      "module": 6,
      "title": "Finding and aggregating",
      "explain": "Track a running sum, maximum, or matching index while traversing.",
      "code": "class Main { public static void main(String[] args) { int[] nums={4,8,12}; int sum=0; for(int n:nums) sum+=n; System.out.println(sum); } }",
      "question": "What is sum?",
      "answers": [
        "9",
        "7",
        "4"
      ],
      "correct": 0,
      "challenge": "In your own words, explain finding and aggregating. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Track a running sum, maximum, or matching index while traversing.",
      "expected": "24",
      "analogy": "Imagine giving a very literal robot directions.",
      "steps": [
        "First, read the example and identify the values or instructions related to finding and aggregating.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Finding and aggregating'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Finding and aggregating' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 32,
      "module": 7,
      "title": "Strings are sequences",
      "explain": "A String is a sequence of characters; indexing starts at zero.",
      "code": "class Main { public static void main(String[] args) { String word=\"cat\"; System.out.println(word); } }",
      "question": "What is first?",
      "answers": [
        "c",
        "a",
        "t"
      ],
      "correct": 0,
      "challenge": "In your own words, explain strings are sequences. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. A String is a sequence of characters; indexing starts at zero.",
      "expected": "cat",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to strings are sequences.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Strings are sequences'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Strings are sequences' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 33,
      "module": 7,
      "title": "String length and access",
      "explain": "length() counts characters and charAt(index) retrieves one.",
      "code": "class Main { public static void main(String[] args) { String word=\"cat\"; System.out.println(word.charAt(1)); } }",
      "question": "What is n?",
      "answers": [
        "5",
        "4",
        "6"
      ],
      "correct": 0,
      "challenge": "In your own words, explain string length and access. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. length() counts characters and charAt(index) retrieves one.",
      "expected": "a",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to string length and access.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'String length and access'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'String length and access' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 34,
      "module": 7,
      "title": "Comparing text",
      "explain": "Use equals() for String content comparison, not ==.",
      "code": "class Main { public static void main(String[] args) { String a=\"yes\"; System.out.println(a.equals(\"yes\")); } }",
      "question": "What does equals compare?",
      "answers": [
        "Text content",
        "Memory size only",
        "Array length"
      ],
      "correct": 0,
      "challenge": "In your own words, explain comparing text. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Use equals() for String content comparison, not ==.",
      "expected": "true",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to comparing text.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Comparing text'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Comparing text' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 35,
      "module": 7,
      "title": "String transformations",
      "explain": "substring extracts part of a String; toLowerCase changes case in a new String.",
      "code": "class Main { public static void main(String[] args) { String a=\"hello\"; System.out.println(a.toUpperCase()); } }",
      "question": "What is t?",
      "answers": [
        "hello",
        "HELLO",
        "Hello!"
      ],
      "correct": 0,
      "challenge": "In your own words, explain string transformations. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. substring extracts part of a String; toLowerCase changes case in a new String.",
      "expected": "HELLO",
      "analogy": "Think of a scoreboard: a value changes as the game progresses.",
      "steps": [
        "First, read the example and identify the values or instructions related to string transformations.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'String transformations'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'String transformations' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 36,
      "module": 8,
      "title": "Read the problem carefully",
      "explain": "Identify input, output, constraints, and examples before coding.",
      "code": "class Main { public static void main(String[] args) { int[] scores={2,4,6}; System.out.println(scores.length); } }",
      "question": "What should you identify first?",
      "answers": [
        "Inputs and outputs",
        "The fastest trick",
        "A random loop"
      ],
      "correct": 0,
      "challenge": "In your own words, explain read the problem carefully. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Identify input, output, constraints, and examples before coding.",
      "expected": "3",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to read the problem carefully.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Read the problem carefully'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Read the problem carefully' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 37,
      "module": 8,
      "title": "Pseudocode",
      "explain": "Describe the steps in plain language before converting them to Java.",
      "code": "class Main { public static void main(String[] args) { int total=0; for(int i=1;i<=3;i++) total+=i; System.out.println(total); } }",
      "question": "What is pseudocode?",
      "answers": [
        "Plain-language steps",
        "Compiled Java",
        "A data type"
      ],
      "correct": 0,
      "challenge": "In your own words, explain pseudocode. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Describe the steps in plain language before converting them to Java.",
      "expected": "6",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to pseudocode.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Pseudocode'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Pseudocode' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 38,
      "module": 8,
      "title": "Tracing and debugging",
      "explain": "Trace variable values line by line to find mistakes.",
      "code": "class Main { public static void main(String[] args) { int n=5; n++; System.out.println(n); } }",
      "question": "What is x?",
      "answers": [
        "10",
        "7",
        "5"
      ],
      "correct": 0,
      "challenge": "In your own words, explain tracing and debugging. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Trace variable values line by line to find mistakes.",
      "expected": "6",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to tracing and debugging.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Tracing and debugging'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Tracing and debugging' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 39,
      "module": 8,
      "title": "Edge cases and testing",
      "explain": "Test empty, one-element, duplicate, negative, and boundary cases when relevant.",
      "code": "class Main { public static void main(String[] args) { int[] a={}; System.out.println(a.length); } }",
      "question": "Which is an edge case?",
      "answers": [
        "An empty array",
        "Only a typical input",
        "Only a comment"
      ],
      "correct": 0,
      "challenge": "In your own words, explain edge cases and testing. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Test empty, one-element, duplicate, negative, and boundary cases when relevant.",
      "expected": "0",
      "analogy": "Picture numbered lockers: each item has a position.",
      "steps": [
        "First, read the example and identify the values or instructions related to edge cases and testing.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Edge cases and testing'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Edge cases and testing' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 40,
      "module": 9,
      "title": "Assessment: Java essentials",
      "explain": "Review syntax, types, decisions, and loops without copying examples.",
      "code": "class Main { public static void main(String[] args) { int n=3; if(n%2==0) System.out.println(\"Even\"); else System.out.println(\"Odd\"); } }",
      "question": "What is printed?",
      "answers": [
        "even",
        "odd",
        "4"
      ],
      "correct": 0,
      "challenge": "In your own words, explain assessment: java essentials. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Review syntax, types, decisions, and loops without copying examples.",
      "expected": "Odd",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to assessment: java essentials.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Assessment: Java essentials'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Assessment: Java essentials' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 41,
      "module": 9,
      "title": "Assessment: arrays and strings",
      "explain": "Combine indexing, loops, and string methods.",
      "code": "class Main { public static void main(String[] args) { String word=\"Java\"; System.out.println(word.length()); } }",
      "question": "What is printed?",
      "answers": [
        "e",
        "c",
        "d"
      ],
      "correct": 0,
      "challenge": "In your own words, explain assessment: arrays and strings. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Combine indexing, loops, and string methods.",
      "expected": "4",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to assessment: arrays and strings.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Assessment: arrays and strings'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Assessment: arrays and strings' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    },
    {
      "id": 42,
      "module": 9,
      "title": "Assessment: independent thinking",
      "explain": "Write your own solution, trace it, test edge cases, then compare against the reference idea.",
      "code": "class Main { public static void main(String[] args) { int[] nums={2,5,1}; int max=nums[0]; for(int n:nums) if(n>max) max=n; System.out.println(max); } }",
      "question": "What should you do before coding?",
      "answers": [
        "Plan examples and edge cases",
        "Memorize a solution",
        "Skip testing"
      ],
      "correct": 0,
      "challenge": "In your own words, explain assessment: independent thinking. Then change the example, predict what will happen, and test your prediction in a Java environment.",
      "hint": "Start with the example. Write your own solution, trace it, test edge cases, then compare against the reference idea.",
      "expected": "5",
      "analogy": "Predict what happens before checking the answer.",
      "steps": [
        "First, read the example and identify the values or instructions related to assessment: independent thinking.",
        "Next, trace the code in order. Write down each change before looking at the output.",
        "Finally, predict the output, reveal it, and explain why it happened."
      ],
      "practice": "Change one meaningful part of the example for 'Assessment: independent thinking'. Predict the output first, then verify in a Java environment. Write one sentence explaining the result.",
      "checkpoint": "Without copying the example, explain 'Assessment: independent thinking' to a beginner and write a tiny Java example using it.",
      "review": "If you got stuck, return to the analogy and trace the example line by line. Then retry with different values."
    }
  ]
};
