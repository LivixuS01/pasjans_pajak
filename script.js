const cards=new Array(104);
const rand_cards= new Array(104); // This is array with id cards, after drawing function
class card{
    constructor(symbol, number, hide, usedd, src_img, id_card){
        this.symbol=symbol;
        this.number=number;
        this.hide=hide;
        this.usedd=usedd;
        this.src_img=src_img;
        this.id_card=id_card;
    }
}

function move_card(card)
{

}

function save()
{
   let k=0, symbol;
   for(e=0; e<2; e++) // double deck of cards
   {
    
    for(i=1; i<5; i++)
    {
        // 's' are spades, 'h' are hearts, 'c' are clubs, 'd' are 'diamonds'  
        
        if(i==1) symbol='c';
        else if(i==2) symbol='d';
        else if(i==3) symbol='h';
        else if(i==4) symbol='s';
        
    
            for(j=1; j<14; j++)
            {
                cards[k]=new card(symbol, j, true, false, "/img/cards/"+symbol+j+".png", k);
                k++;
            }
    }
  }
}

function drawing()
{
    let hm_numbers = 0, next; // hm == how many
    for (i=0; i<104; i++)
    {
      do
      {
        let r = Math.floor(Math.random()*104);
        next = true;
        for (j=1; j<=hm_numbers; j++)
        {
          if (r == rand_cards[j]) next = false;
        }
        if (next == true)
        {
            hm_numbers++;
          rand_cards[hm_numbers-1] = r;
        }
      }
      while(next!=true);
    } 
}

function deal_cards() 
{

}