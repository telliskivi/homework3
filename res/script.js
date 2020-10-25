function loadInfo() {
    data = 0;
    data = $.getJSON('https://private-anon-4d68465a6f-wad20postit.apiary-mock.com/users/1', function(data) {
        console.log(data.firstname)
    })
    return $.get('https://private-anon-4d68465a6f-wad20postit.apiary-mock.com/users/1')
}
loadInfo()


function loadPost() {
    return $.get('https://private-anon-4d68465a6f-wad20postit.apiary-mock.com/posts')
}

function loadProfile() {
    return $.get('https://private-anon-4d68465a6f-wad20postit.apiary-mock.com/profiles')
}

