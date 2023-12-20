// write a program to implement the round robin scheduling algorithm using a queue in javascript
class Process {
    constructor(name, burstTime) {
      this.name = name;
      this.burstTime = burstTime;
      this.remainingTime = burstTime;
    }
  }
  
  class RoundRobinScheduler {
    constructor() {
      this.queue = [];
      this.timeQuantum = 2; // समय कुंजी निर्दिष्ट करें
    }
  
    // प्रक्रिया को कतिपय समय के लिए queue में जोड़ें
    enqueueProcess(process) {
      this.queue.push(process);
    }
  
    // एक प्रक्रिया को समय कुंजी के अनुसार चलाएं
    runProcess(process) {
      const runTime = Math.min(this.timeQuantum, process.remainingTime);
      process.remainingTime -= runTime;
  
      console.log(`प्रक्रिया ${process.name} को ${runTime} इकाइयों के लिए चलाया गया है।`);
  
      if (process.remainingTime > 0) {
        // प्रक्रिया को फिर से queue में जोड़ें
        this.queue.push(process);
      } else {
        console.log(`प्रक्रिया ${process.name} पूरी तरह से समाप्त हो गई है।`);
      }
    }
  
    // स्केज्यूलिंग का मुख्य फ़ंक्शन
    schedule() {
      while (this.queue.length > 0) {
        const currentProcess = this.queue.shift();
        this.runProcess(currentProcess);
      }
    }
  }
  
  // उदाहरण उपयोग
  const scheduler = new RoundRobinScheduler();
  
  const process1 = new Process("process 1", 4);
  const process2 = new Process("process 2", 5);
  const process3 = new Process("process 3", 2);
  
  scheduler.enqueueProcess(process1);
  scheduler.enqueueProcess(process2);
  scheduler.enqueueProcess(process3);
  
  scheduler.schedule();
  