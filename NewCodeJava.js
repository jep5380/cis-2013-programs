     var floatDays;
     var floatAge;
     var floatMonths;
     var intWeeks;
     var intFortnights;
     floatAge = parseFloat(prompt("What is your age in years"));
     floatDays = parseFloat(floatAge * 365.25);
     floatMonths = parseFloat(floatAge * 12);
     intWeeks = parseInt(floatDays * 12);
     intFortnights = parseInt(floatDays/14);
     alert("Initial age" + floatAge);
     alert("Age in days" + floatDays);
     alert("Age in months" + floatMonths);
     alert("Age in weeks" + intWeeks);
     alert("Age in fortnights" + intFortnights);