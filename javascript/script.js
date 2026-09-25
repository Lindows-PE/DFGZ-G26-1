function dialog(html_content){
    let cover = document.createElement('div');
    cover.className = "cover";
    document.body.appendChild(cover);
    let div = document.createElement('div');
    div.className = "float";
    div.innerHTML = html_content;
    document.body.appendChild(div);
}


function closeDialog() {
    document.querySelector('.dialog:last-child').remove();
    document.querySelector('.cover:last-child').remove();
}

function toast() {

}

function getDate() {
    return Math.floor(new Date() / 86400000);
}
function getFestivalName() {}