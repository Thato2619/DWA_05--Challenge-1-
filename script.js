//resolved User story

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

//unresoved user story(1)
form.addEventListener("submit", (result)) => {
    result.preventDefault();
    
    const divide = (num1, num2) =>{
        let num1 = 20;
        let num2 = 6;
     
        let results = num1 / num2;
     
        return Math.trunc(results);
         
     }
}


//unresolved user story(2)
form.addEventListener("submit", (result)) => {
    result.preventDefault();
    const divide = (num1, num2) => {

        try{
            let num1 = null;
            let num2 = null;
         
            let results = num1 / num2;
         
            return Math.trunc(results);
         } catch{
            console.log('Divison not performed. Both values are required in inputs. Try agin ');
         };
        };      
}


//unresolved user story(3)
form.addEventListener("submit" (result)) => {
    result.preventDefault();

    try{

        const divide = (num1, num2) =>{
            let num1 = 20;
            let num2 = -3;

            let results = num1 / num2;
           return 
            
        }catch{
            console.log(Error("Division not performed. Invalid number provided. Try again."));
        }
        
    }
}

//unresolved user story(4)
form.addEventListener("submit" , (result)) => {
    result.preventDefault();
    const divide = (num1, num2) => {
        let num1 = 'YOLO';
        let num2 = '++++++'

        window.addEventListener("error", () =>{
            document.body.innerHTML = /*html*/ `
            Something critical went wrong. Please reload the page
            
            `
        }) 
    }
}
