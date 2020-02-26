export class UserAccount {

    userName: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    activated: boolean;
    activationKey: string;
    imageUrl: string;
    langKey: string;
    lastLoginDate: string;
    loginAttempt: number;
    passwordHash: string;
    resetDate: string;
    resetKey: string;
    id: number;

    constructor(userName: string, createdBy: string, createdDate: string, lastModifiedBy: string,
                lastModifiedDate: string, activated: boolean, activationKey: string, imageUrl: string,
                langKey: string, lastLoginDate: string, loginAttempt: number, passwordHash: string,
                resetDate: string, resetKey: string, id?: number) {
        this.userName = userName;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
        this.activated = activated;
        this.activationKey = activationKey;
        this.imageUrl = imageUrl;
        this.langKey = langKey;
        this.lastLoginDate = lastLoginDate;
        this.loginAttempt = loginAttempt;
        this.passwordHash = passwordHash;
        this.resetDate = resetDate;
        this.resetKey = resetKey;
        this.id = id;
    }
}
