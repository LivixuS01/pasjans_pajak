//hm_... == how many...

const cards=new Array(104);
const rand_cards= new Array(104); // This is array with id cards, after drawing function
let hidden_cards = new Array(40); // ID cards, which don't use

class card{
    constructor(symbol, number, hide, usedd, src_img, id_card, place, card_up, card_down){
        this.symbol=symbol;
        this.number=number;
        this.hide=hide; // hide == true == card has hidden number and symbol
        this.usedd=usedd;
        this.src_img=src_img;
        this.id_card=id_card; //ID
        this.place=place;   // number of column
        this.card_up=card_up;   // ID card, which is above this card
        this.card_down=card_down;  // ID card which is under this card
    }
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
                cards[k]=new card(symbol, j, true, false, "img/cards/"+symbol+j+".png", k, 0, -1, -1);
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
    for(i=0; i<50; i++) hidden_cards[i]=rand_cards[i];

    let hm_incolumn=0;
    let hm_columns=0;
    let which_column=0; // in 4 colums are 6 card (which_column==0), in 6 columns are 5 card (which column==1)
    for(i=50; i<104; i++)
    {
        let nrA=rand_cards[i], nrA_last=rand_cards[i-1], nrA_next=rand_cards[i+1];

        if(hm_columns>3) which_column=1;

        if(which_column==0)
        {
            if(hm_incolumn==5)
            {
                cards[nrA].card_up=cards[nrA_last].id_card;
                cards[nrA].place=hm_columns;
                
                hm_incolumn=0;
                hm_columns++;
            }
            else if(hm_incolumn==0)
            {
                cards[nrA].card_down=cards[nrA_next].id_card;
                cards[nrA].hide=true;
                cards[nrA].place=hm_columns;
                hm_incolumn++;
            }
            else
            {
                cards[nrA].card_up=cards[nrA_last].id_card;
                cards[nrA].card_down=cards[nrA_next].id_card;
                cards[nrA].hide=true;
                cards[nrA].place=hm_columns;
                hm_incolumn++;
            }
        }

        else
        {
            if(hm_incolumn==4)
            {
                cards[nrA].card_up=cards[nrA_last].id_card;
                cards[nrA].place=hm_columns;
                
                hm_incolumn=0;
                hm_columns++;
            }
            else if(hm_incolumn==0)
            {
                
                cards[nrA].card_down=cards[nrA_next].id_card;
                cards[nrA].hide=true;
                cards[nrA].place=hm_columns;
                hm_incolumn++;
            }
            else
            {
                cards[nrA].card_up=cards[nrA_last].id_card;
                cards[nrA].card_down=cards[nrA_next].id_card;
                cards[nrA].hide=true;
                cards[nrA].place=hm_columns;
                hm_incolumn++;
            }
        }
    }
    console.log(cards);
}

function show_cards()
{
    let down_place=document.getElementById("down_place");
    let div_cards='';
    let hm_incolumn=0;
    let hm_column=0;
    let which_column=0;
    let nr_card=0;
        for(i=50; i<104; i++)
        {
            nr_card=rand_cards[i];
            if(hm_incolumn==0) div_cards=div_cards+"<div id=\"column_cards"+hm_column+"\" class=\"column\">";
            
            if(which_column==0)
            {
                if(hm_incolumn==5)
                {
                    div_cards=div_cards+"<div id=\"card"+cards[nr_card].id_card+"\" class=\"card\"><img src=\""+cards[nr_card].src_img+"\"/></div></div>";
                    hm_incolumn=0;
                    hm_column++;
                }
                else 
                {
                div_cards=div_cards+"<div id=\"card"+cards[nr_card].id_card+"\" class=\"card\"><img src=\"img/cards/facedown.png\"/></div>";
                hm_incolumn++;
                }
            }
            else
            {
                if(hm_incolumn==4)
                {
                    div_cards=div_cards+"<div id=\"card"+cards[nr_card].id_card+"\" class=\"card\"><img src=\""+cards[nr_card].src_img+"\"/></div></div>";
                    hm_incolumn=0;
                    hm_column++;
                }
                else
                { 
                    div_cards=div_cards+"<div id=\"card"+cards[nr_card].id_card+"\" class=\"card\"><img src=\"img/cards/facedown.png\"></div>";
                    hm_incolumn++;
                }
        
            }
            if(hm_column>3) which_column=1;
        }
        div_cards=div_cards+"<div style=\"clear:both\"></>";
        down_place.innerHTML=div_cards;
}

function move_card(card)
{

}