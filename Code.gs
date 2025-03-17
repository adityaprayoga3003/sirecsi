function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}


function submitForm(form) {
  const timestamp = Date.now(); // Mendapatkan timestamp dalam milidetik
  const date = new Date(timestamp); // Create a Date object from timestamp
  
  // Format tanggal (seperti '20/06/2024' di Indonesia)
  const formattedDate = date.toLocaleDateString();
  
  // Format waktu menjadi HH:MM (24 jam)
  const formattedTime = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  
  const name = form.name;
  const status = form.status;
  const kegiatan = form.kegiatan;

  // Save data to Google Sheets
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form');
  const newRow = [formattedDate, formattedTime, name, kegiatan, status];
  const row = sheet.getLastRow() + 1;
  sheet.insertRowBefore(row);
  sheet.getRange(row, 1, 1, 5).setValues([newRow]);
}

