import { UserAccount } from '../user/user-account';

export class Associate {

    userGroup: string;
    prefix: string;
    name: string;
    gender: string;
    competence: string;
    email: string;
    phone: string;
    remark: string;
    joinDate: number;
    id: number;
    address: string;
    lastName: string;
    userAccount: UserAccount;
    probationTime: number;
    approved: boolean;

    constructor(userGroup: string, prefix: string, name: string,
                gender: string, competence: string, email: string,
                phone: string, remark: string, joinDate: number, id?: number,
                address?: string, lastName?: string, userAccount?: UserAccount,
                probationTime?: number, approved?: boolean) {
        this.userGroup = userGroup;
        this.prefix = prefix;
        this.name = name;
        this.gender = gender;
        this.competence = competence;
        this.email = email;
        this.phone = phone;
        this.remark = remark;
        this.joinDate = joinDate;
        this.id = id;
        this.address = address;
        this.lastName = lastName;
        this.userAccount = userAccount;
        this.probationTime = probationTime;
        this.approved = approved;
    }
}
