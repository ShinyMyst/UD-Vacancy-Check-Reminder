// Sheet Information
const SHEET_ID = "x"
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
    'FD': 'Founders'
  };
  
const emailDict = {
"SQAC": "fake SQAC email",
"Founders": "fake Founders email"
};
