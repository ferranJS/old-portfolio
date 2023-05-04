export class TeamMember {
    name!: string;
    portrait!: string;
    description!: string;
    position!: string;
    social?: Social[];
}

class Social {
    name!: string;
    class!: string;
    href!: string;
}