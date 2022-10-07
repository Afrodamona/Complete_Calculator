
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByTagName('button'));
buttons.map( button =>{
   button.addEventListener('click', (e) => {
      switch(e.target.innerText){
         case 'AC':
             display.innerText = '';
             break;
         case '←':
            if(display.innerText){
               display.innerText = display.innerText.slice(0, -1);
            }
            break; 
         case '=':
               display.innerText = eval (display.innerText);
               break;
               // try{
               //    display.innerText = eval (diaplay.innerText);
               // } catch {
               //    display.innerText = 'Error!';
                  
               // }
              
               break;
         default:
            display.innerText += e.target.innerText;

      }
   })
})