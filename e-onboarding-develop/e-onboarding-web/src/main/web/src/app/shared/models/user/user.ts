export class User {

    name: string;
    email: string;
    group: string;
    role: string;

    constructor(name: string, email: string, group: string, role: string) {
        this.name = name;
        this.email = email;
        this.group = group;
        this.role = role;
    }
}
