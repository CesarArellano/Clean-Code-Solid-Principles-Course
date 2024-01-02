(() => {
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    birthdate: Date;
    gender: Gender;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({
      name,
      gender,
      birthdate,
    }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserProps){
      super({name, gender, birthdate});
      this.lastAccess = new Date()
      this.email = email;
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  // const newUser = new User()

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      name,
      role,
      gender,
      birthdate,
    }: UserSettingsProps){
      super({email, role, name, gender, birthdate});
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'cesar@gmail.com',
    birthdate: new Date(),
    gender: 'M',
    name: 'César',
    role: 'admin',
  })

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
  
})();