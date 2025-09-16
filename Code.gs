
// Trigger Event Upon form submission
function onFormSubmit(e) {

  // Collect Data
  var responses = e.values;

  // Data Check
  console.log("New form submitted!");
  console.log(responses);

  // Send Data for formatting
  collect(responses);



}


// collect data for formatting
function collect(formData){


  // ---------------------------------------------------------
  // var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1KX6rCyUDU1PhB6Zc3TQOWaACU2UM2WFYCfoDZLRb7ak/edit?gid=1876808202#gid=1876808202")

  // var sheet = ss.getSheetByName("sheet2");
  // if(!sheet){
  //   sheet = ss.insertSheet("Sheet2");
  // }
  // sheet.getRange(2,3).setValue("hello");
  // --------------------------------------


  // Formatting the Data
  studentName = formData[1];
  studentEmail = formData[2];
  counselorName = formData[3];
  counselorEmail = formData[4];
  availableFrees = formData[5];
  courseRequest = formData[6];
  
  // Mr. Hoarty's Email
  hoartyEmail = "samuel.cisneros@students.ignatius.org";

  
  // Log Data Check
  Logger.log("Student name is " + studentName);
  Logger.log("Student email is " + studentEmail);
  Logger.log("Counselor name is " + counselorName);
  Logger.log("Counselor email is " + counselorEmail);
  Logger.log("Available frees are" + availableFrees);
  Logger.log("Courses Requested are " + courseRequest);
  

  // Collect data to send
  sendEmail(studentName, studentEmail, counselorName, counselorEmail, availableFrees, courseRequest, hoartyEmail);

  

}


// Send the Final Email
function sendEmail(studentName, studentEmail, counselorName, counselorEmail, availableFrees, courseRequest, hoartyEmail){

  // Build the email
  var recipient = studentEmail + ", "+ counselorEmail + ", " + hoartyEmail;

  
  var subject = "Tutoring: " + courseRequest;

  var body = `
Hi ${studentName} and Student2,

My name is Mr. Hoarty, and at times I connect students and National Honor Society peer tutors. It looks like it would be a good match for you two to work together on ${courseRequest}. Please plan to meet for tutoring tomorrow, Thursday, April 10 during ${availableFrees} Period (2:10-3:00 pm). Please meet in the Beigel Resource Center at the NHS Peer Tutoring Table.

Remember that the Beigel Resource Center is on the 4th Floor near the Foglia Library. If you get to the 4th Floor and find yourself uncertain, please ask one of the librarians in Foglia. They'll be happy to point you in the right direction.

Student2, please be sure to welcome Student2 as you two begin your work together.

Let me know if you have any questions!

Best,
Saint Ignatius National Honor Society


------------------------

This is an automated email
Please reach out to John Hoarty <john.hoarty@ignatius.org> for questions and feedback.
`;

MailApp.sendEmail(recipient, subject, body);

}





















