let cards=[
    {
        image:"https://png.pngitem.com/pimgs/s/111-1117169_clipart-of-chota-bheem-hd-png-download.png",
        value:1,
        status:"closed"
    },
    {
        image:"https://png.pngitem.com/pimgs/s/111-1117169_clipart-of-chota-bheem-hd-png-download.png",
        value:1,
        status:"closed"
    },
    {
        image:"http://1.bp.blogspot.com/-5RCwKEBlgow/T6uKRgIt03I/AAAAAAAABoA/rNWvNmyz1Uc/s400/Chota-Bheem-Cartoon-Pictures-10.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"http://1.bp.blogspot.com/-5RCwKEBlgow/T6uKRgIt03I/AAAAAAAABoA/rNWvNmyz1Uc/s400/Chota-Bheem-Cartoon-Pictures-10.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://p.kindpng.com/picc/s/162-1620168_cartoon-hd-png-download.png",
        value:3,
        status:"closed"

    },
    {
        image:"https://p.kindpng.com/picc/s/162-1620168_cartoon-hd-png-download.png",
        value:3,
        status:"closed"

    },
    {
        image:"https://2.bp.blogspot.com/-WKaQBaOvnb0/VFDjho0zFiI/AAAAAAABDV8/yOQDFkTUWm4/s1600/Jaggu-Bandar-Chhota-Bheem-Character.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://2.bp.blogspot.com/-WKaQBaOvnb0/VFDjho0zFiI/AAAAAAABDV8/yOQDFkTUWm4/s1600/Jaggu-Bandar-Chhota-Bheem-Character.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://s3.ap-south-1.amazonaws.com/pogons3/characters/113.png",
        value:5,
        status:"closed"
    },
    {
        image:"https://s3.ap-south-1.amazonaws.com/pogons3/characters/113.png",
        value:5,
        status:"closed"
    },


]




// durnsten shuffling alogorithm 

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";



    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;
 
        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }


    }

    displayCards(cards);

}
