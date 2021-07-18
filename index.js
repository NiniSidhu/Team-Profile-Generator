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
    
    //Adding Manager
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
                name: 'id',
                message: 'What ID would you like to assign to this Manager',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please enter the Manager ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the email for the manager',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please assign the Manager an email to proceed');
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What office number is assigned to the manager', 
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please assign the Manager an office number to proceed');
                        return false; 
                    }
                }
            }
        ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.id, answers.managerEmail, answers.officeNumber);
                teamMates.push(manager);

                createNewTeamMate(); 
            })
    }

    //Adding Engineer

    const addEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the Engineer name?',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please enter the name of the Engineer');
                        return false; 
                    
                    }
                }
            },
            {
                type:'input',
                name: 'id',
                message: 'What ID would you like to assign to this Engineer',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please enter the Engineer ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter the email for the Engineer',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please assign the Engineer an email to proceed');
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'gitHubId',
                message: 'Please enter the GitHub account of the Engineer', 
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Enter the GitHub account of the Engineer to proceed');
                        return false; 
                    }
                }
            }
        ])
            .then(answers => {
                const manager = new Engineer(answers.engineerName, answers.id, answers.engineerEmail, answers.gitHubId);
                teamMates.push(engineer);

                createNewTeamMate(); 
            })
    }

    //Adding Intern     

    const addIntern = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the Intern name?',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please enter the name of the Intern');
                        return false; 
                    
                    }
                }
            },
            {
                type:'input',
                name: 'id',
                message: 'What ID would you like to assign to this Intern',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please enter the Intern ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Please enter the email for the Intern',
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Please assign the Intern an email to proceed');
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'schoolName',
                message: 'Please enter the school name of the Intern', 
                validate: checkInput => {
                    if (checkInput){
                        return true; 
                    }
                    else{
                        console.log('Enter the school name of the Intern to proceed');
                        return false; 
                    }
                }
            }
        ])
            .then(answers => {
                const manager = new Intern(answers.internName, answers.id, answers.internEmail, answers.schoolName);
                teamMates.push(intern);

                createNewTeamMate(); 
            })
    }

    //Adding secondary team members / exiting the program 
    const createNewTeamMate = () => {
        return inquirer.prompt([
            {
                type:'list',
                message: 'Please select Generate Team Profile to genereate or add additional members.',
                choices: ['Enngineer', 'Intern', 'Generate Team Profile'],
            }
        ])

        .then(answers => {
            if (answers.teamMenu === 'Engineer'){
                addEngineer(); 
            }
            else if (answers.teamMenu === 'Intern'){
                addIntern(); 
            }
            else{
                const landingPage = siteGenerator(teamMates);
                fs.writeFile(landingPage);
                console.log('Your Landing Page has been generate. Please check the DIR folder.');
                fs.copyFile(); 
                console.log('Your stylesheet has been successfully merged.');
            }
        })
    }
    addManager(); 
}

initiateApp(); 
