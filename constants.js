// Sheet Information
const SHEET_ID = "x-x"
const PAGE_NAME = "Fall 2023"

// Relevant Headers
const headers = {
    staffWelcome: "Staff Welcome",
    spaceChecked: "Space Checked",
    moveStartDate: "Date Begin Move",
    moveCompleteDate: "Move Date Complete",
    newAssignment: "New Assignment",
    oldAssignment: "Current Assignment",
    firstName: "First Name",
    lastName: "Last Name",
    status: "Status"
};

const excludedStatuses = ["Status", "Cancelled", "Complete", "On Hold", ""]

const areaDict = {
  'CS': 'SQAC',
  'CW': 'SQAC',
  'AC': 'SQAC',
  '1710 Frericks Way': 'SQAC',
  '339 Irving': 'SQAC',
  '314 Lowes': 'SQAC',
  'FD': 'Founders',
  'VWK': 'VWK',
  'ST': 'Stuart',
  'ML': 'Marianist',
  'MC': 'Marycrest'
};

const emailDict = {
"SQAC": "x@x.edu",
"Founders": "x@x.edu",
'VWK': "x@x.edu",
'Stuart': "x@x.edu",
'Marianist': "x@x.edu",
'Marycrest': "x@x.edu"
};