var firstNames = getColumn("Students","FirstName");
var lastNames = getColumn("Students", "LastName");
var studentID = getColumn("Students", "Student_ID");
var student = [];
var i;

console.log(firstNames);
console.log(lastNames);
console.log(studentID);

onEvent("lookupButton","click",function() {
  
  hideElement("errorDisplayBox");
  var lookupTerm = getText("searchBox");
  
  if (isNaN(lookupTerm) == false) {
    
    for (i=0; i<studentID.length; i++) {
      
      if (lookupTerm/studentID[i]==1) {
        buildProfile(i);
        console.log(student);
        student = [];
      }
      
    }
    
  if (isNaN(lookupTerm) == true) {
        if (lookupTerm.toLowerCase/lastNames[i].toLowerCase==1) {
          buildProfile(i);
          console.log(student);
          student=[];
        } 
        
        else if (lookupTerm.toLowerCase/firstNames[i].toLowerCase==1) {
          buildProfile(i);
          console.log(student);
          student=[];
        }
  else {
    showElement("errorDisplayBox");
  }
  }
  }
});

function buildProfile(i) {
  appendItem(student, firstNames[i]);
  appendItem(student, lastNames[i]);
  appendItem(student,studentID[i]);
  return student;
}
