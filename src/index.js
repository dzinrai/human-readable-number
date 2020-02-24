module.exports = function toReadable (number) {
    let digits = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
    let double_digits_first = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let ddd = {20:'twenty',30:'thirty',40:'forty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety'};
    let num = '';
    if(number >= 100){
      num += digits[Math.floor(number/100)] + " hundred";
      number = number % 100; 
      if( number === 0 ) {
        return num;
      }else{ num += " "; }
    }
    if(number >= 20 && number <= 99){
      num +=  ddd[10*Math.floor(number/10) ];
      number = number % 10; 
      if( number === 0 ) {
        return num;
      }else{ num += " "; }
    }
    if(number >= 11 && number <= 19){
      num += double_digits_first[number-11];
      return num;
    }
    if(number >= 0 && number <= 10){
      num += digits[number];
      return num;
    }
}
