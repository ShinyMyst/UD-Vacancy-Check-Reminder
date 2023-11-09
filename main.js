function main(){
  for (const entry of DATA) {
      if (excludedStatus(entry)){
          continue; // skip to next entry
      };
      msgStaffWelcome(entry)
      msgSpaceChecked(entry)
  }
  emailCoordinators()
};


function excludedStatus(entry){
  // Checks if current status should be excluded.
  // For example, we do not need to process complete ones. 
      if (excludedStatuses.includes(getCellData(entry, headers.status))){
          return true
      };
  };


function emailCoordinatorsTest(){
  const areaKeys = Object.keys(areaMessages)
  for (const area of areaKeys){
    console.log("EMAIL TARGET", emailDict[area])
    console.log(areaMessages[area])
  }
};


function emailCoordinators(){
  const areaKeys = Object.keys(areaMessages)
  for (const area of areaKeys){
    var recipient = emailDict[area]
    var subject = "[AUTO] Vacancy Sheet Reminders"
    var body = areaMessages[area]
    GmailApp.sendEmail(recipient, subject, body)
  }
};
