/* .js files add interaction to your website */

var displayScript = document.getElementById("scriptReturned"); 
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use
if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

 displayScript.innerHTML= 
 "Hello my name is " + name + " and I live in " + location + ", I am calling to ask you to support the immigration reform bill, or the U.S. Citizenship Act of 2021. As a citizen of this country, I see the work that immigrants put in to build our nation and keep it running. For example, " + learning + ", Please support the U.S. Citizenship Act of 2021.";
 }
 

var factList = [
  "From 1990 to 2007, the undocumented immigrant population went from 3.5 to 12.2 million, by 2017, it droped to 10.5 million.",
  "In 2018, immigrant families accounted for $1.2 trillion spending power after taxes.",
  "The high rise of incoming migration to the U.S.-Mexico border was largely due because of poverty and violence which only grew as a result of the pandemic.",
  "More than half of the immigrant population are naturalized citizens.",
  "One in six workers is an immigrant, making them vital too the economy.",
  "DACA recepients and DACA eligible memebrs contributed to $1.7 billion in taxes in 2018.",
  "Undocumented immigrants paid $20.1 billion in federal taxes in 2018.",
  "21% of all self employed U.S. residents consisted of immigrant business owners.",
  "The numbers of immigrants in the country are very similar from that of 1900-1930, which resulted in immigrants adapting to American society, what makes today's immigrants any different?",
  "Immigrants, regardless of their nationality, immigration status and education are less likely than native U.S. residents to commit a crime.",
  "There is a negative correlation between high immigration rates and crime, as immigrants are less like to be incarcerated than native U.S. citizens.",
  "The majority of undocumented immigrants are not eligible for welfare programs like Social Security and food stamps.", 
  "Cooperation between the U.S. and Mexico on counterterrorism is really strong which disporves the belief that terrorists infiltrate the U.S. through the U.S.-Mexico border, since after all the majority of terrorist acts are linked to U.S. citizens.",
  "Most immigrants will continue to want to come to the United States regardless of a wall because they are coming for better opportunities and fleeing from problems like gang violence.",
  ];

 

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn")
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}


function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0; 
  }
  
}
