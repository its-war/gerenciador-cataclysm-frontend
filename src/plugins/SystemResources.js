import QuestResource from "@/resource/QuestResource";
export default class SystemResources {
    constructor(urlBase) {
        this.questResource = new QuestResource(urlBase);
    }

    get quest(){
        return this.questResource;
    }
}