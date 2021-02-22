/**
 * All are set to capture mode
 */
/*document.querySelector ('#grand-parent').addEventListener ('click', (event) => {
    console.log ('grand-parent clicked');
}, true);
document.querySelector ('#parent').addEventListener ('click', (event) => {
    console.log ('parent clicked');
}, true)
document.querySelector ('#child').addEventListener ('click', (event) => {
    console.log ('child clicked');
}, true)
*/
/**
 * All are in bubble mode
 */
/*document.querySelector ('#grand-parent').addEventListener ('click', (event) => {
    console.log ('grand-parent clicked');
});
document.querySelector ('#parent').addEventListener ('click', (event) => {
    console.log ('parent clicked');
})
document.querySelector ('#child').addEventListener ('click', (event) => {
    console.log ('child clicked');
})
*/

document.querySelector ('#grand-parent').addEventListener ('click', (event) => {
    console.log ('grand-parent clicked');
}, false);
document.querySelector ('#parent').addEventListener ('click', (event) => {
    console.log ('parent clicked');
    event.stopImmediatePropagation ();
}, false)
document.querySelector ('#child').addEventListener ('click', (event) => {
    console.log ('child clicked');
}, false)

