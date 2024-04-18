function grades(marks){
    if(marks > 79){
      return grades = `A`;
    }else if( marks>= 60 && marks <= 79){
        return `B-`
      }else if ( marks >=49 && marks <=59){
       return `C-`
      }else if  (marks >=40 && marks <=49){
          return `D-`
      }else {
        return `E`
      }
}
console.log(grades(90))

