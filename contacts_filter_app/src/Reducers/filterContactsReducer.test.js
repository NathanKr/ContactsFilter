import {getFilteredContacts} from './filterContactsReducer';

const arContacts =[
    ["First Name", "Last Name", "Email Address", "Company", "Position", "Connected On"] ,
    ["Dor", "Raif", "draif@gmail.com", "Freelance, self-employed", "Looking for opertunities", "11/5/16, 2:48 PM"],
    ["Avi", "Alg", "avi.alg@gmail.com", "Israel Computing Association", "CEO", "6/7/15, 2:04 AM"],
    ["Gabe", "Bere", "gabbere@gmail.com", "Driveing Software", "VP Product Engineering", "11/23/15, 7:27 AM"],
    ["Ron", "Shte", "ron.shte@gmail.com", "Hal Advanced Technologies", "QA & RA Manager", "5/1/11, 1:50 AM"],
    ["Gilberto", "Nao", "gilberto.naor@gartner.com", "Gartner", "Business Development Director", "6/30/10, 7:08 PM"],
    ["Oferi", "Aradi", "", "clockwatches.com", "ceo", "8/17/14, 2:57 AM"],
    ["Uri", "Wein", "uri.wein@gmail.com", "Cathay Innovation", "Operating Partner", "7/27/18, 1:52 AM"],
    ["Osh", "Eve", "osheve@gmail.com", "Moter Medical", "Shareholder", "11/26/14, 8:23 AM"],
    ["Eden", "Lazar", "leden@gmail.com", "MEDX LP", "Chief Business Officer", "1/27/15, 12:53 AM"],
    ["Noah", "Ilo", "noahl@gmail.com", "Ministry of Economy and Industry, Israel", "Professional Evaluator for the Israel Innovation Authority (Office of the Chief Scientist)", "11/24/14, 1:58 PM"],
    ["Shmu", "Sha", "Shmu@ardik.co.il", "Ardix Software and Systems Ltd.", "CEO", "10/23/16, 10:26 PM"]
   ];
   

const tests = () =>{
    let filterValue = '';
    const headerLine=1;

    // test 1
    const getAllRows = () =>{
        const filterValue = '';
        return getFilteredContacts(filterValue,arContacts).length;
    }
    it("test match all lines",
    expect(getAllRows()).toEqual(arContacts.length));


    // --- test 2
    const getCEONumberCaseSensitive = () =>{
        const filterValue = 'CEO';
        return getFilteredContacts(filterValue,arContacts).length;
    }
    it("test 3 CEO in list case not sensitive",
    expect(getCEONumberCaseSensitive()).toEqual(3+headerLine));

    // --- test 3
    const getCEONumberCaseNotSensitive = () =>{
        const filterValue = 'ceo';
        return getFilteredContacts(filterValue,arContacts).length;
    }
    it("test 3 ceo in list case not sensitive",
    expect(getCEONumberCaseNotSensitive()).toEqual(3+headerLine));
    
    
}

 describe("filterContactsReducer tests : ",tests);
 