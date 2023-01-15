module.exports = function reverse (n) {
  let min=0;
       if (n==0) return 0;
       else {
       if  (n<0) min=1;}   
       let res='';
       let str=String(n);
         for (let i=str.length-1; i>=min; i--) {
         res +=str[i];
        }
        return Number(res);
}



