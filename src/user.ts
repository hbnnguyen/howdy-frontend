export interface BaseUserInterface {
    email: string,
    firstName: string,
    lastName: string,
    zipCode: string,
    bio: string | null,
    hobbies: string | null,
    interests: string | null,
    friendRadius: number | null;
  }
  export interface User extends BaseUserInterface {
    password:string,
  }

  export interface UserFormData extends User {
    password:string,
    profilePic?: File
  }