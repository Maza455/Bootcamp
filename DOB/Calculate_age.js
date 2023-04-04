let today = new Date();
function age(bD) {
  let oneOrZero = (today.getMonth() < bD.getMonth()) ||
                      (today.getMonth() === bD.getMonth() &&
                       today.getDate() < bD.getDate());
  
  let year_diff = today.getFullYear() - bD.getFullYear();
  
  let age = year_diff - oneOrZero;
  
  return age;
}

console.log(age(new Date(2000, 12, 25)));





