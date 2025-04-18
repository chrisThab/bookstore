// template to initiate für jedes object ein div

function getOneBook() {
    let oneBook = document.getElementById("main");
    oneBook.innerHTML += getTemplate();

}


function getTemplate() {
    return`
    <div id="bookView">
            <div id="title"><h1>${books[0].name}</h1></div>
            <img id="imgBook" src="./img/book-bookmark.svg" alt="old book">
            <div id="overview">
                <div id="aboveInfo">
                    <div id="priceTag">${books[0].price}€</div>
                    <div id="likeIt">
                        <p>${books[0].likes}</p>
                        <button id="likeButton" onclick=""><img class="heartButton" src="./img/heart.svg" alt="heart"></button>
                    </div>
                </div>
                <div id="info">
                    <th>Kommentare:</th>
                    <tr></tr>
                </div>
            </div>
            <div id="commentSection">      
                <input id="newComment" type="text" placeholder="  Wie hat es dir gefallen?"></input>
                <button id="sendComment"><img class="paperplane" src="./img/paper-plane.svg"    alt="paperplane"></button>
            </div>            
        </div>
    `
}

// like button

// images


//comment 