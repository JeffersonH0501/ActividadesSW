export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    serieURL: string;
    imageURL: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, description: string, serieURL: string, imageURL: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.serieURL = serieURL;
        this.imageURL = imageURL;
    }
}