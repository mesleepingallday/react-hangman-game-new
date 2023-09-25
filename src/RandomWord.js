let ProgrammingLanguage = [
  "java",
  "c",
  "ruby",
  "perl",
  "python",
  "r",
  "javascript",
  "css",
  "html",
  "php",
  "sql",
  "mysql",
  "cobol",
  "scala",
  "abap",
  "xml",
  "kotlin",
  "matlab",
  "pascal",
  "typescript"
];

function randomWord() {
  return ProgrammingLanguage[
    Math.floor(Math.random() * ProgrammingLanguage.length)
  ];
}

export { randomWord };
