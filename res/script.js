function loadInfo() {
    data = 0;
    data = $.getJSON('https://private-anon-4d68465a6f-wad20postit.apiary-mock.com/users/1', data)
    console.log(data)
    return(data)
}




function loadPosts() {
    data =0;
    data = $.get('https://private-anon-4d68465a6f-wad20postit.apiary-mock.com/posts')
        .done((data)=> updatePosts(data))
        .fail((error) => console.log(error));
};
loadPosts()
let postTemplate = '<div class="post">\n' +
'        <div class="post-author">\n' +
'          <span class="post-author-info">\n' +
'            <img src="res/images/avatar.png" alt="Post author">\n' +
'            <small>John Doe</small>\n' +
'          </span>\n' +
'          <small>Sep 18, 2020 15:16</small>\n' +
'        </div>\n' +
'        <div class="post-title">\n' +
'          <h3>Which weighs more, a pound of feathers or a pound of bricks?</h3>\n' +
'        </div>\n' +
'        <div class="post-actions">\n' +
'          <button type="button" name="like" class="like-button">15k</button>\n' +
'        </div>\n' +
'      </div>';

function updatePosts(postdata) {
    for (postinfo of postdata) {
        let postElement = $(postTemplate);
        $('.post-author>small', postElement).text(postinfo.createTime);
        $('.post-author-info small', postElement).text(postinfo.author.firstname +" "+ postinfo.author.lastname);
        $('.post-author-info img', postElement).attr('src', postinfo.author.avatar);
        $('.post-title h3', postElement).text( postinfo.text);
        $('.like-button', postElement).text( postinfo.likes);
        if(postinfo.media){
            $(".post-author", postElement ).after('<div class="post-image"></div>');
           if(postinfo.media.type == "image"){
                $('.post-image', postElement).html( $('<img>').attr('src', postinfo.media.url) );
            }
        }
        $('section.main-container').append(postElement);
    }
}

function loadProfile() {
    return $.get('https://private-anon-4d68465a6f-wad20postit.apiary-mock.com/profiles')
}

$(document).ready(function(){
    $('img.avatar').on('click', ()=>{
    $('#dropdown-menu').toggle();
});
})