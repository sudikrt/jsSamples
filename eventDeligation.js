//eventDeligation
document.querySelector ('#category').addEventListener ('click', (event) => {
    // console.log (event.target.id);
    // console.log (event);
    if (event.target.tagName === 'LI') {
        window.location.href = '/' + event.target.id;
    }
});
document.querySelector ('#form').addEventListener ('keyup', (event) => {
    console.log (event);
    if (typeof event.target.dataset.uppercase !== 'undefined' ) {
        event.target.value  = event.target.value.toUpperCase ();
    }
});
//Pros
// saves a lot of memory by attaching one handler 
// Mitigates risk of performance bottelneck
//less code
//dom manupelation

//Cons
//All the events are not bubbled up
//blur focus, resizing and scrolling 
//some events do not propogate up the hierarchy 
//stoppropogartion 
 