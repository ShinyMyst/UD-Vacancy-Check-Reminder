// Refactor
// Compile all emails to same area into a single email

// Sheet Information
const spreadsheetId = "id"
const pageName = "Fall 2023"

// Relevant Headers
const headerStaffWelcome = "Staff Welcome"
const headerSpaceChecked = "Space Checked"
const headerMoveStartDate = "Date Begin Move"
const headerMoveCompleteDate = "Move Date Complete"
const headerNewAssignment = "New Assignment"
const headerOldAssignment = "Current Assignment"
const headerFirstName = "First Name"
const headerLastName = "Last Name"
const headerStatus = "Status"

var areaDict = {
  'CS': 'SQAC',
  'CW': 'SQAC',
  'AC': 'SQAC',
  'FD': 'Founders'
};

var emailDict = {
  "SQAC": "fake SQAC email",
  "Founders": "fake Founders email"
};


function findArea(locationData){
  // Area Dict keys are building abbreviations.
  // Check if location data includes that abbreviation/building
  // If so return the associated with it.
  var keys = Object.keys(areaDict)
  for (const key of keys){
    if (locationData.includes(key)){
      return areaDict[key]
    }
  }
  return null; 
};


function pullData() {
  // Replace 'URL' with the URL of your Google Sheets document.
  const activeSheet = SpreadsheetApp.openById(spreadsheetId);
  const activePage = activeSheet.getSheetByName(pageName);
  const data = activePage.getDataRange().getValues();
  return data
}

const DATA = pullData()
const HEADERS = DATA[0]

// Returns the index of given header
function convertHeader2Index(headerString){
  var index = HEADERS.indexOf(headerString)
  return index
}

excludedStatuses = ["Status", "Cancelled", "Complete", "On Hold", ""]

function main(){
  for (const entry of DATA) {
    if (!excludedStatuses.includes(entry[convertHeader2Index(headerStatus)])){
      var location = entry[convertHeader2Index(headerNewAssignment)]
      var firstName = entry[convertHeader2Index(headerFirstName)]
      var lastName = entry[convertHeader2Index(headerLastName)]
      if (entry[convertHeader2Index(headerStaffWelcome)]){
        var date = entry[convertHeader2Index(headerMoveStartDate)]
        // STAFF WELCOME
        var message = `Pending Staff Welcome
        ${firstName} ${lastName} will move into ${location} on ${date}`;
        emailCoordinator(location, message)
      }
      else if (entry[convertHeader2Index(headerSpaceChecked)]){
        var date = entry[convertHeader2Index(headerMoveCompleteDate)]
        // SPACE CHECKED
        var message = `Pending Room Check
        ${firstName} ${lastName} will move out of ${location} on ${date}`;
        emailCoordinator(location, message)
      }
    }
  }
}


//Given a location,
function emailCoordinator(locationData, message){
  var area = findArea(locationData)
  console.log("EMAIL", emailDict[area])
  console.log(message)
}


main()
