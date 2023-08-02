var today=new Date();
var year=today.getDay();
document.write("day="+year+"<br><br>");
if((year==0)||(year==6)){
    document.write(year+"is weekend");
}
else{
    document.write( year+" is not a weekend day");
}