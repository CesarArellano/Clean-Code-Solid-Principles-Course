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
  }

  class User {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({
      email,
      role,
    }: UserProps) {
      this.lastAccess = new Date()
      this.email = email;
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      name,
      role,
      gender,
      birthdate,
    }: UserSettingsProps) {
      this.person = new Person({name, gender, birthdate});
      this.user = new User({email, role});
      this.settings = new Settings({workingDirectory, lastOpenFolder});
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
  });
  
})();