import React from 'react';
import importExcel from '/importExcel';
import {minor_val, major_val, spec_val, core_val, year_val} from '/pages/index.js';

function createSchedule(){

        /* filePath will be set for 2 cases: 
        1) If a schedule is imported, the user must select the file and the filepath must be used to import excel
            ex) schedule = importExcel(filePath);
        2) If a schedule is exported, the user must select a location to save the file (with filename);
            ex) exportSchedule(filePath);
    */


    /* The current plan is to set the default filepath for each to /schedules/{major, minor, core, spec}/ for each filePath type. 
    Then the end part will be filled based on the dropdown selections
    example:
        major_filepath = "/schedule/majors/" + {major_val}"
        major_schedule = importExcel(major_filePath);

        Schedules should be stored in the public folder
    */

    //Filepaths based on dropdowns
    const major_filePath = "/Schedule/" + year_val + "/Major/" + major_val + ".xlsx";
    const minor_filePath= "/Schedule/" + year_val + "/Minor/" + minor_val + ".xlsx";
    const core_filePath = "/Schedule/" + year_val + "/Core/" + core_val + ".xlsx";
    const spec_filePath = "/Schedule/" + year_val + "/Spec/" + spec_val + ".xlsx";

    /* Schedule  is an array of course objects 
        Course objects have the following attributes: 
        1) course.name 2) course.number 3) course.description 4) course.credits 5) course.semester

        Major_schedule is the default schedule, the other 3 schedules replace undefined courses (such as spec1, spec2, spec3, etc..) with courses based on dropdown
        selections
    */

    //Define each schedule 
    const major_schedule = []; //default schedule
    const minor_schedule = [];
    const core_schedule = [];
    const spec_schedule = [];

    major_schedule = importExcel(major_filePath);
    minor_schedule = importExcel(minor_filePath)
    spec_schedule = importExcel(spec_filePath);
    core_schedule = importExcel(core_filePath);

    /*---FILL OUT DEFAULT SCHEDULE----
    This for loop operates by iterating through the default schedule and replacing generic courses (labeled 'MINOR', 'CORE', 'SPEC')
    with real courses based on the user's selections for minor, specialization, and core. These courses are pulled from the schedules created
    from the dropdowns and Excel imports for each selection.
   
    >>>-Not yet tested-<<<
    */
    for(let i = 0, core_i=0, spec_i=0, minor_i=0; i < major_schedule.length; i++){
        switch(major_schedule[i].name){
            case 'MINOR': 
                major_schedule[i] = minor_schedule[minor_i];
                minor_i++;
                break;
            case 'CORE': 
                major_schedule[i] = core_schedule[core_i];
                core_i++;
                break;
            case 'SPEC': 
                major_schedule[i] = spec_schedule[spec_i];
                spec_i++;
                break; 
            default:
                break;
        }
    }


    return major_schedule;

}



