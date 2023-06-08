export interface BaseUserInterface {
    email: string,
    firstName: string,
    lastName: string,
    zipCode: string,
    bio: string,
    hobbies: string,
    interests: string,
    friendRadius: number;
  }
  export interface User extends BaseUserInterface {
    imageKey: string
  }

  export interface UserFormData extends BaseUserInterface {
    password:string,
  }