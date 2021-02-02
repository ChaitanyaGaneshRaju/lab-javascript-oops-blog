/* Fill your code*/
class Blog {
    constructor(title, detail) {
        this.title = title;
        this.detail = detail
    }
    //appending title to the page
    addTitle() {
        this.title_card = document.createElement('h1');
        this.title_card.setAttribute("id", "blog-title");
        this.title_card.innerHTML = this.title;
    }

    //appending the description to the page
    addDescription() {
        this.description_card = document.createElement('p');
        this.description_card.setAttribute("id", "blog-description");
        this.description_card.innerHTML = this.detail;
    }

    appendElements() {
        var $divTag = document.createElement('div');
        $divTag.id = "card-text";


        var $image = document.createElement("img");
        $image.src = "./assets/card image 1.svg";
        $divTag.appendChild($image);

        $divTag.appendChild(this.title_card)
        $divTag.appendChild(this.description_card)

        var $flashboard = document.querySelector("#flashcard");
        $flashboard.appendChild($divTag);

    }

}


var $addBlog = document.querySelector("#addBlog");
var popup = document.querySelector("#popupContact");

//Poping out the the popup when user clicks the add new post 
$addBlog.addEventListener("click", function () {
    popup.style.display = "block"
})

document.querySelector("#close").addEventListener("click",function(){
    popup.style.display = "none"
})

//posting the content that has been entered by the user
document.querySelector("#post").addEventListener("click", function () {
    var $title = document.querySelector("#title").value
    var $description = document.querySelector("#detail").value

    var blogObj = new Blog($title, $description)
    blogObj.addTitle();
    blogObj.addDescription();
    blogObj.appendElements()
    popup.style.display = "none"
})