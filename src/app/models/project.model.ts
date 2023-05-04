export class Project {
    name: String;
    icon: String;
    description?: String
    urlProject?: String;
    urlSource?: String;
    image?: String;
    author?: String;
    
    constructor(name: string | String, description: String | undefined, urlProject: String | undefined, urlSource: String | undefined, image: String | undefined, author: String | undefined, icon: String) {
        this.name = (name !== "") ? name : "Coming Soon...";
        this.description = description;
        this.author = author;
        this.urlProject = urlProject;
        this.urlSource = urlSource;
        this.image = image;
        this.icon = icon;
    }
}
