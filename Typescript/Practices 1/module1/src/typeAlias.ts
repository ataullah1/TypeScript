{
  type Students = {
    name: string;
    age: number;
    address: string;
    phone: string;
  };

  const student: Students = {
    name: "Ataullah",
    age: 19,
    address: "barguna",
    phone: "01719199967",
  };

  //   Function type Alias

  type AddNum = (num1: number, num2: number) => number;

  const addNum: AddNum = (num1, num2) => num1 + num2;
  console.log(addNum(234, 134));
}
