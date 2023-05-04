import type {gender} from '@prisma/client'

export type Service = {
    serviceName: string;
    serviceImage: string;
};

export type RegisterForm = {
    email: string;
    password: string;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
    gender: gender;
};

export type RegisterError = {
    state: boolean;
    message: string;
};

export type OWASP = {
    errors              : string[],
    failedTests         : [],
    requiredTestErrors  : [],
    optionalTestErrors  : [],
    passedTests         : [],
    isPassphrase        : boolean,
    strong              : boolean,
    optionalTestsPassed : number
  }