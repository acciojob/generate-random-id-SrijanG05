function makeid(l) {
  // write your code here
	 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < l; i++) {
    // Generate a random index between 0 and characters.length - 1
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  
  return result;
}
const l = prompt("Enter a number.");
alert(makeid(l));
// Do not change the code below.

