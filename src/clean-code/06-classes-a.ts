(() => {
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ){
      super(name, gender, birthdate);
      this.lastAccess = new Date()
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  // const newUser = new User()

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ){
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/usr',
    'home',
    'cesar@gmail.com',
    'admin',
    'César',
    'M',
    new Date()
  )

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
  
})();