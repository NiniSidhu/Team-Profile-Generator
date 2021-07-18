// Project: Team Profile Generator 
// Author: Nayandeep Sidhu
// Date: July 16, 2021

const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../Team-Profile-Generator/lib/Manager');
const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const Employee = require('../Team-Profile-Generator/lib/Employee');

const teamMates = [];

const initiateApp = () => {

    const addManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the Managers name?',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please enter the name of the Manager');
                        return false; 
                    
                    }
                }
            },
            {
                type:'input',
                
            }
            
        ])
    }
}
