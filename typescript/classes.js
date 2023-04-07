var Employee = /** @class */ (function () {
    /* constructor(){
         this.empno = 101;
         this.ename = "abc";
         this.sal = 20000;
         this.attendance = 18;
     }
 */
    //constructor overloading is not allowed 
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
/*
var emp = new Employee();
var emp1 = new Employee();
    emp1.empno = 102;
    var emp2 = new Employee();
    emp2.empno = 103;
    
*/
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(2, 'bbc', 2000, 30);
var emp2 = new Employee(3, 'cde', 3500, 25);
emp.print();
emp1.print();
emp2.print();
