class CryptoGuru {
    constructor(name, expertise) {
      this.name = name;
      this.expertise = expertise;
      this.students = [];
    }
  
    enrollStudent(studentName) {
      this.students.push(studentName);
      console.log(`${studentName} has enrolled under Crypto Guru ${this.name}'s guidance.`);
    }
  
    conductWorkshop(topic) {
      console.log(`${this.name} is conducting a workshop on ${topic}. Get ready to learn!`);
    }
  
    provideExpertAdvice(question) {
      console.log(`${this.name} says: ${this.expertise} - ${question}`);
      // Simulate providing expert advice based on the guru's expertise.
      // In a real scenario, you might want to include more sophisticated advice.
    }
  
    displayGuruInfo() {
      console.log(`
        Crypto Guru Information:
        Name: ${this.name}
        Expertise: ${this.expertise}
        Students Enrolled: ${this.students.length}
      `);
    }
  }
  
  // Example usage
  const cryptoExpert = new CryptoGuru('CryptoMaster', 'Blockchain Technology');
  
  cryptoExpert.enrollStudent('Alice');
  cryptoExpert.enrollStudent('Bob');
  cryptoExpert.conductWorkshop('Introduction to Smart Contracts');
  cryptoExpert.provideExpertAdvice('What are the key features of a secure blockchain?');
  
  cryptoExpert.displayGuruInfo();
  