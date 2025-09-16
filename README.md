# NHS Tutoring Automation

## Overview
This Google Apps Script project automates the process of connecting students with National Honor Society (NHS) peer tutors. When a Google Form is submitted, the script:

1. Collects the student and counselor information.
2. Logs the submission into a designated Google Sheet.
3. Sends a customized HTML email to the student, counselor, and tutor coordinator.

This automation saves time, ensures accurate communication, and provides a record of all tutoring assignments.

---

## Features

- Automatically logs form submissions in a Google Sheet.
- Sends a professional, HTML-formatted email to multiple recipients.
- Dynamic email content that includes:
  - Student names
  - Counselor names
  - Requested courses
  - Available free periods
- Easy to configure with your own Google Form and Sheet.

---

## Setup Instructions

### 1. Connect to your Google Form
- Create or use an existing Google Form to collect:
  - Student name
  - Student email
  - Counselor name
  - Counselor email
  - Available free periods
  - Courses requested
- Link the form to a Google Sheet for data storage.

### 2. Install the Script
1. Open [Google Apps Script](https://script.google.com/) and create a new project.
2. Copy the `.gs` script files into the project.
3. Update the spreadsheet URL in the script:

```javascript
var ss = SpreadsheetApp.openByUrl("YOUR_SPREADSHEET_URL_HERE");
