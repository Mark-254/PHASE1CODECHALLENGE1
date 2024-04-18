// const TaxBrackets = [
//     {min:0 , max: 24000,rate: 10.0},
    // {min:24001 ,max :32333, rate:25.0},
    // {min:32334 ,max : 500000, rate:30.0},
    // {min: 500001 ,max:800000, rate :32.5},
    // {min:800001,max :InfinityPay,rate : 35.0},
// ]; 
// const NHIF = [
//     {min:0 , max:5999,deduction:150},
//     {min:6000,max:7999,deduction:300},
//     {min :8000,max:11999,deduction:400},
//     {min :12000,max:14999,deduction:500},
//     {min :15000,max:19999,deduction:600},
//     {min :20000,max:24999,deduction:750},
//     {min :25000,max:29999,deduction:850},
//     {min :30000,max:34999,deduction:900},
//     {min :35000,max:39999,deduction:950},
//     {min :40000,max:44999,deduction:1000},
//     {min :45000,max:49999,deduction:1100},
//     {min :50000,max:59999,deduction:1200},
//     {min :60000,max:69999,deduction:1300},
//     {min :70000,max:79999,deduction:1400},
//     {min :80000,max:89999,deduction:1500},
//     {min :90000,max:99999,deduction:1600},
//     {min :100000,max:Infinitypay,deduction:1700},
  
// ];
// const  deductions =[
//     {min:0 ,max:7000}
//     {min:7001,max:36000}

// ]
// const NSSFRate = `0.06` 

function calculateNetSalary(basicSalary,benefits) {
    
    const TAX_RATE = [
        {min:0 , max: 24000,rate: 10.0},
        {min:24001 ,max :32333, rate:25.0},
        {min:32334 ,max : 500000, rate:30.0},
        {min: 500001 ,max:800000, rate :32.5},
        {min:800001,max :InfinityPay,rate : 35.0},
    ]
    const NHIF_RATE = [
       
    {min:0 , max:5999,deduction:150},
    {min:6000,max:7999,deduction:300},
    {min :8000,max:11999,deduction:400},
    {min :12000,max:14999,deduction:500},
    {min :15000,max:19999,deduction:600},
    {min :20000,max:24999,deduction:750},
    {min :25000,max:29999,deduction:850},
    {min :30000,max:34999,deduction:900},
    {min :35000,max:39999,deduction:950},
    {min :40000,max:44999,deduction:1000},
    {min :45000,max:49999,deduction:1100},
    {min :50000,max:59999,deduction:1200},
    {min :60000,max:69999,deduction:1300},
    {min :70000,max:79999,deduction:1400},
    {min :80000,max:89999,deduction:1500},
    {min :90000,max:99999,deduction:1600},
    {min :100000,max:Infinitypay,deduction:1700},
    ]
    const NSSF_RATE = 0.06; 

    
    const grossSalary = basicSalary + benefits;

    
    const taxDeduction = grossSalary * TAX_RATE;
    const nhifDeduction = grossSalary * NHIF_RATE;
    const nssfDeduction = grossSalary * NSSF_RATE;

    
    const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;

    return {
        grossSalary: grossSalary,
        taxDeduction: taxDeduction,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}


const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

const result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", result.grossSalary);
console.log("Tax Deduction:", result.taxDeduction);
console.log("NHIF Deduction:", result.nhifDeduction);
console.log("NSSF Deduction:", result.nssfDeduction);
console.log("Net Salary:", result.netSalary);



    



