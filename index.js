let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenVal = '';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{

        console.log("Button Pressed!");
        let btnTxt = e.target.innerText;
        console.log(btnTxt);
        if(btnTxt == "X")
        {
            btnTxt = "*";
            screenVal += btnTxt;
            screen.value = screenVal;
        }
        else if(btnTxt == "C")
        {
            screen.value = "";
            screenVal = "";
        }
        else if(btnTxt == "=")
        {
            screen.value = eval(screenVal);
            screenVal = screen.value;
        } 
        else{
            screenVal += btnTxt;
            screen.value = screenVal;
        }
    })
}
// console.log(screen);
// console.log(button);
