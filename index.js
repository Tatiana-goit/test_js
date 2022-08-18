function calculateTeamFinanceReport(salaries, team) {
  let salaryResult = { totalBudgetTeam: 0 };

Object.keys(salaries).map((special) =>  {
    let countOneSpecial = team.filter((e) => e.specialization === special).length;
    let tax = parseInt(salaries[special].tax);
    let resultOfOneSpecial = Math.floor(salaries[special].salary + salaries[special].salary * tax/(100 - tax)) * countOneSpecial;
    salaryResult['totalBudget' + special] = resultOfOneSpecial;
    salaryResult.totalBudgetTeam += resultOfOneSpecial;
  })  
    return salaryResult
}

const salaries = {
    Progger: { salary: 1000, tax: '15%' },
    Tester: { salary: 1000, tax: '10%' },}  
const team = [
    { name: 'Masha', specialization: 'Progger' },
    { name: 'Vasya',specialization: 'Tester' },
    { name: 'Taras', specialization: 'Tester' },]

const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },}
const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},]

const salaries2 = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },}
const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },]


console.log(JSON.stringify(calculateTeamFinanceReport(salaries, team)))
console.log(JSON.stringify(calculateTeamFinanceReport(salaries1, team1)))
console.log(JSON.stringify(calculateTeamFinanceReport(salaries2, team2)))