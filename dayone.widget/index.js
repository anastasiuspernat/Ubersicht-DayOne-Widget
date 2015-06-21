command: 'dayone.widget/./copy.sh',
 
refreshFrequency: 5000000,
 
render: function (output) {
var filesanddata = output.split("{files}");
var files = filesanddata[1].split("\n");
var data = filesanddata[0].split("{next}");
var str = "";
var path = "dayone.widget/images";
var days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
for (var imgindex=1;imgindex<5;imgindex++)
{
		date = new Date(Date.parse(data[imgindex-1].split(" ")[0].replace(/\:/g,"-")));
		var datestr = "";
		if (date && date != undefined && date != NaN && date.getFullYear() != NaN && date != "Invalid Date")
		{
      month = date.getMonth()+1;
			datestr = days[date.getDay()]+" "+month+"/"+date.getFullYear();
		}
		str +="<div class='imgdiv'><img src='"+path+"/"+files[imgindex]+"' /><div class='date'>"+datestr+"</div></div>";
}
  return "Day One<br><div class='main'>" + str + "</div>";
},
 
style: "        \n\
  top: 20px     \n\
  left: 20px    \n\
  background: rgba(255,255,255,0.3)\n\
  font-family: Helvetica Neue\n\
  font-size: 14px\n\
  font-weight: 500\n\
  width: 540px \n\
  height: 540px \n\
    color: #fff \n\
                \n\
  h1            \n\
    color: #fff \n\
\n\
  .main            \n\
    color: #fff \n\
    font-size: 14px \n\
  .main img           \n\
  	object-fit: cover \n\
  	width: 330px \n\
  .imgdiv           \n\
    padding: 5px \n\
    margin: 5px \n\
    width: 250px \n\
    height: 250px \n\
    overflow: hidden \n\
    display: inline-block \n\
    float: left \n\
    position: relative \n\
  .date           \n\
    position: absolute \n\
    left: 10px \n\
    text-shadow: 1.5px 1.6px black \n\
    top: 10px \n\
"