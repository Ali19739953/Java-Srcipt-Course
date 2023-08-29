//CODING CHALLENGE PART 3
//TWO TEAMS,
//1: Dolphins
//2: Koalas
//Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const Dolphins = Number(96 + 108 + 89);
const Koalas = Number(88 + 91 + 110);
console.log("Total score for Dolphins = " + Dolphins);
console.log("Total score for koalas = " + Koalas);
const avgDolphins = Number(Dolphins / 3);
const avgKoalas = Number(Koalas / 3);
console.log("The average score for Dolphins is " + avgDolphins);
console.log("The average score for koalas is " + avgKoalas);
if (avgDolphins == avgKoalas) {
    console.log("Draw,both the team scored equal points!");
}
else if (avgDolphins > avgKoalas) {
    console.log("Dolphin scored more than koalas with an score of  " + avgDolphins);
}
else {
    console.log("Koalas scored more with an score of " + avgKoalas);
}
//Data bonus 1:
const Dolphin = Number(97 + 112 + 101);
const koalasBonus = Number(109 + 95 + 123);
const minScore = 100;
console.log(Dolphin);
console.log(koalasBonus);
if (Dolphin >= minScore && Dolphin > koalasBonus) {
    console.log("Dolphin team wins the trophy!");
}
else if (koalasBonus >= minScore && koalasBonus > Dolphin) {
    console.log("koalas team wins the trophy!");
}
else {
    console.log("They dont meet the minimum requirement!");
}
//Data bonus 2:
const dolphin2 = Number(97 + 112 + 101);
const koalas2 = Number(109 + 95 + 106);
const minScore2 = 100;
console.log("score for dolphin for bonus data 2 " + dolphin2);
console.log("score for bonus data 2 for koalas " + koalas2);
const avgDolphins2 = Number(dolphin2 / 3);
const avgKoalas2 = Number(koalas2 / 3);
console.log("avg for data bonus 2 for dolphin " + avgDolphins2);
console.log("avg for data bonus 2 for koalas " + avgKoalas2);
const MinumimScore = 100;
if (MinumimScore <= avgDolphins2 && avgDolphins2 > avgKoalas2) {
    console.log("dolphins won the trophy in bonus2!");
}
else if (avgDolphins2 == avgKoalas2) {
    console.log("both team has same score ,its a draw!");
}
else if (avgKoalas2 >= MinumimScore && avgKoalas2 > avgDolphins2) {
    console.log("koalas win this round for databonus2!");
}
else {
    console.log("");
}