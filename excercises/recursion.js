const obj = {
  one: {
    nestedOne: {
      doubleNestedOne: "one",
    },
    nestedTwo: "two",
  },
  two: {
    nestedOne: "three",
    nestedTwo: {
      doubleNestedOne: "four",
      doubleNestedTwo: "five",
    },
    nestedThree: "six",
  },
  three: {
    nestedOne: {
      doubleNestedOne: {
        tripleNestedOne: {
          fourthNestedOne: "seven",
        },
        tripleNestedTwo: "eight",
        tripleNestedThree: "nine",
      },
      doubleNestedThree: "ten",
    },
    nestedTwo: "eleven",
  },
};

const logThroughObject = (obj) => {
  typeof obj === "object"
    ? Object.values(obj).forEach((item) => {
        logThroughObject(item);
      })
    : console.log(obj);
};

logThroughObject(obj);
