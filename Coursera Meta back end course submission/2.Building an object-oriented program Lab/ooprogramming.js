// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
class Person {
    // WRITE YOUR CODE HERE - Add a constructor with default parameters
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
        // WRITE YOUR CODE HERE - Add the sleep() method
        sleep(){this.energy = this.energy + 10;}
        // WRITE YOUR CODE HERE - Add the doSomethingFun() method
        doSomethingFun(){ this.energy = this.energy - 10;}
    }

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
class Worker extends Person {
    // WRITE YOUR CODE HERE - Add a constructor with additional parameters
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    // WRITE YOUR CODE HERE - Add the goToWork() method
    gotoWork(){this.xp=this.xp+10}
}

// Task 3: Code an intern object, run methods
function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    var worker1 = new Worker(0, 10, "Bob", 21, 110);
    // WRITE YOUR CODE HERE - Call the goToWork() method
    worker1.gotoWork();
    // WRITE YOUR CODE HERE - Return the intern object
    return worker1;
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    var worker2 = new Worker(100, 30, "Alice", 30, 120);
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    worker2.doSomethingFun();
    // WRITE YOUR CODE HERE - Return the manager object
    return worker2;
}