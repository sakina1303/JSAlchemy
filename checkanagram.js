function areAnagrams(str1, str2) {
 
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  if (str1.length !== str2.length) return false;


  return str1.split('').sort().join('') === str2.split('').sort().join('');
}


const string1 = prompt("Enter first string:");
const string2 = prompt("Enter second string:");

if (areAnagrams(string1, string2)) {
  console.log("The strings are anagrams.");
} else {
  console.log("The strings are not anagrams.");
}
