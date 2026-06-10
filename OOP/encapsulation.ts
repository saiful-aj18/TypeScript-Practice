  // Here we will try public, private, protected, readonly
  // setter and getter
  class Users {
    readonly userName: string;
    public age: number;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }

    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  class Students extends Users {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }

    setStudentId(studentId: number): void {
      this.studentId = studentId;
    }

    getStudentId(): number {
      return this.studentId;
    }
  }

  let students1 = new Students("Saiful", 23, 1243020015);
  students1.setStudentId(1234020017);
  console.log(students1.getStudentId());
   // students1.display();

  let user1 = new Users("nobi", 33);
  console.log(user1.userName);
   // user1.display();