var areaMessages = {
    "SQAC": '',
    "Founders": ''
};

function msgStaffWelcome(entry){
  // If Staff Welcome not checked, stores a message for associated area.
  if (!getCellData(entry, headers.staffWelcome)){
    var location = getCellData(entry, headers.newAssignment)
    var firstName = getCellData(entry, headers.firstName)
    var lastName = getCellData(entry, headers.lastName)
    var date = getCellData(entry, headers.moveStartDate)
    var date = formatDate(date)
    var message = `WELCOME - ${firstName} ${lastName} will begin move into ${location} on ${date}`;
    _storeMessage(location, message)
  };
};

function msgSpaceChecked(entry){
// If Space not checked, stores a message for the associated area.
  if (!getCellData(entry, headers.spaceChecked)){
      var location = getCellData(entry, headers.oldAssignment)
      var firstName = getCellData(entry, headers.firstName)
      var lastName = getCellData(entry, headers.lastName)
      var date = getCellData(entry, headers.moveCompleteDate)
      var date = formatDate(date)
      var message = `VACANCY - ${firstName} ${lastName} will move out of ${location} by ${date}`
      _storeMessage(location, message)
  };
};

// Helpers Functions
function _storeMessage(locationData, message){
  // Stores message in areaMessages dict with area as key.
  var area = _findArea(locationData)
  if (area){
      areaMessages[area] += message + "\n"
  };
};

function _findArea(locationData){
  // Area Dict keys are building abbreviations.
  // Check if location data includes that abbreviation/building
  // If so return the associated with it.
  var keys = Object.keys(areaDict)
  for (const key of keys){
      if (String(locationData).includes(key)){
          return areaDict[key]
      }
  };
  return null; 
};
