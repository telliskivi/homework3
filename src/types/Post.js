export default class Post{
    constructor(data){
        this.id =data.id;
        this.cdate= data.createTime;
        this.description = data.text;
        this.likes = data.likes;
        this.author= [data.author.firstname, data.author.lastname, data.author.avatar];
        if(data.media){
            this.type = data.media.type;
            this.mediaurl = data.media.url;
        }
        else{
            this.type = '';
            this.mediaurl = '';
        }
        }
}