var displayArea=document.getElementById('display')

function isOperater(buttonText)
{
    if(buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/' || buttonText == '%')
    {
return true
    }
    else
    {
        return false
    }
}

function buttonClicked(buttonText)
{ 
    if(buttonText==='0')
    {
        if(buttonText !='0' && buttonText !='00')//dont do anything if 0 and 00 is pressed
    {   
     
        if(buttonText =='.' || isOperater(buttonText))
   //if buttom clicked is . or any operaters, then show it a 0 followed by a button clicked (eg: 0.5, 0+5)
    {
        displayArea.innerText= displayArea.innerText +buttonText
    }
    
    else
    {
        displayArea.innerText=buttonText
    }
    }
    }
    

    else{
    displayArea.innerText=displayArea.innerText + buttonText
}
}