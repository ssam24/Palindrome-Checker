function palindrome(str) {
    const alphanumericOnly = str
    .toLowerCase()
    .match(/[ a-z0-9]/g); 

    return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
    //lowercase our input
    //look for alphanumeric characters only(letters and numbers)
     //return String ==== reversedString
}
  
  
  
  palindrome("eye");
  