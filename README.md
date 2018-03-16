# Super Galactic Age Calculator
#### JavaScript and Node based html project used to determine an individual's age on other planets as well as their life expectancy, 3-16-18  

#### _By Stephanie Faber_  

## Description
_This is a project designed to take a user input of a birth date and calculate their age on another planet, such as Mars. The project will also display the user's life expectancy._  

## Specifications

1. User enters their birth date into the page.
* Example input: User enters 12/12/1992
* Example output: The value of that date is stored

2. The input date is converted into seconds.
* Example input: date of 12/12/1992 stored in js datetime format, date of today
* Example output: use getTime() to return milliseconds, divide by 1000 to return seconds.

3. Take seconds of user input and todays date and subtract them to determine age in seconds.
* Example input: todaysDateInSeconds - usersDateInSeconds
* Example output: usersAgeInSeconds

4. Convert seconds to years. There are roughly 31,536,000 seconds in a year on Earth.
* Example input: usersAgeInSeconds/31536000
* Example output: usersAgeInYearsEarth

5. Convert age in years (25.27 in this example) on Earth to years on another planet, like Mars.
* Example input: usersAgeInYearsEarth/1.88 (25.27/1.88)
* Example output: You are 13.44 years old on Mars

6. User enters the age of their life expectancy on Earth. Convert it to the age on another planet, for example Mars.
* Example input: My age expectancy is 83 years.
* Example output: That would be 43.7 years on Mars.

7. Determine if difference between users age and age of life expectancy. Return years left on that planet, for example Mars.
* Example input: Your age on Mars is 13.44 years, and you expect to live until you are 43.7 Martian years old.
* Example output: You have 30.26 Martian years left.

8. Should user's age exceed the given life expectancy, return the number of years they have exceeded that life expectancy.
* Example input: Your age on Mars is 45.89 years, and you expect to live until you are 43.7 Martian years old.
* Example output: You have lived 2.19 Martian years past your expectancy date! Congratulations!


## Setup/Installation Requirements

* _Clone Repository_

* _Download and install Node_

* _Download and install .NET runtime_

* _Download and install Mono for your platform_

* _Download and install MAMP for your platform_

* _Open MAMP and use the default ports_

* _In Mono command prompt, type >mysql -uroot -proot_

* _In mysql shell type >CREATE DATABASE stephanie_faber_

* _In mysql shell type >USE stephanie_faber_

* _In mysql shell type >CREATE TABLE stylists (id serial PRIMARY KEY, name VARCHAR(255));_

* _In mysql shell type >CREATE TABLE clients (id serial PRIMARY KEY, name VARCHAR(255), stylistId INT(11));_

* _In mysql shell type >QUIT_

* _In Mono command prompt, navigate to this project's folder_

* _In Mono command prompt, enter >dotnet restore_

* _In Mono command prompt, enter >dotnet build_

* _If there are no errors: In Mono command prompt, enter >dotnet run_

* _If there is an error, please contact me via email and describe your issue_

* _When the command prompt runs the build, enter localhost:5000 to your web browser. This should take you to the index page._

Github Repository Link (https://github.com/eyesicedover/HairSalon)

## Support and contact details

_Please email me directly at eyesicedover@gmail.com_

## Technologies Used

* HTML
* ASP.NET
* Razor
* .NET Core
* .NET SDK
* MAMP
* mysql

### License

*MIT License*

Copyright (c) 2018 **_Stephanie Faber_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
