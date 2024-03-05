
//This import function is inspired by 

//import React from "react";
//import * as XLSX from "xlsx/xlsx";


function importSchedule(filePath){
  const xlsx = require('xlsx');
  //const workbook = xlsx.readFile('dataTemplate.xlsx'); 
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const schedule = [];
  let course = {};

  for(let cell in worksheet){
    const cstr = cell.toString();

    if(cstr[1] !== 'r' && cstr[1] > 1){

      if(cstr[0] ===  'A'){
        course.number = worksheet[cell].v;
      }
      if(cstr[0] ===  'B'){
        course.name = worksheet[cell].v;
      }
      if(cstr[0] ===  'C'){
        course.credits = worksheet[cell].v;
      }
      if(cstr[0] ===  'D'){
        course.description = worksheet[cell].v;
      }
      if(cstr[0] ===  'E'){
        course.semester = worksheet[cell].v;
        schedule.push(course);
       // console.log(course);
        course = {};
      }


    //attempted using switch
      /* switch(cstr[0]){
        case 'A':
          course.number = worksheet[cell].v;
        case 'B':
          course.name = worksheet[cell].v;
          break;
        case 'C':
          course.credits = worksheet[cell].v;
          break;
        case 'D':
          course.description = worksheet[cell].v;
          break;
        case 'E':
          course.semester = worksheet[cell].v;
          break;
          //course = {};
          //console.log(schedule);
        default: 
          break;
      }*/

    }
    
  }

  return schedule;
}


//console.log(schedule);


  




/* OLD IMPORT CODE -- Uncertain if it works.
//This should be able to import excel files so that they can be read through and create objects from
//type nmd install read-excel-file if need be
// for now the function just prints to the command line until later use

function importExcel(major){

const xlsxFile = require('read-excel-file/node');

var semesterCount = 0;
var i = 0;
xlsxFile('./src/Requirements.xlsx', {sheet: major})
.then((rows) => {
    rows.forEach((row) => {
      row.forEach((cell) => {
        
        if (cell!= null && cell.includes("Year")){
            //while listing column headers create semester set up
            semesterCount ++;

        } else {
            if (cell != null){
              if (cell.includes(",")){
                //if it has data validation create with drop down in semester i
                cell.split(",");
                
              } else {
                //else create drag and drop object in semester i
              }
            }
        }
        
        
        console.log(cell);
      });
    });
  }); 
}

/*cases for later use

var major;
//Should be value of dropdown
var dropdownValue = document.getElementByID("myDropdown");
console.log(dropdownValue.options[dropdownValue.selectedIndex].text);


switch(dropdownValue){
  case 'COMSC BA':
    major = 'Computer Science BA';
  case 'COMSC BS':
    major = 'Computer Science BS';
  case 'ENGR': 
    major = 'Engineering'
  case 'CM':
    major = 'Construction Management'
}

importExcel(major);



importExcel('Engineering');
*/


