$("#calculateGrade").click(function () {
    $("form").submit();
    //Here I set the value of all of the weights
    var assignmentsWeight = 0.5;
    var projectWeight = 0.1;
    var quizzesWeight = 0.1;
    var midtermWeight = 0.1;
    var finalWeight = 0.1;
    var intexWeight = 0.1;

    //Here I grab all of the values from the input, assign them to a variable and divide them by 100
    var assignmentsGrade = parseFloat($("#assignmentsGrade").val()) / 100;
    var projectGrade = parseFloat($("#projectGrade").val()) / 100;
    var quizzesGrade = parseFloat($("#quizzesGrade").val()) / 100;
    var midtermGrade = parseFloat($("#midtermGrade").val()) / 100;
    var finalGrade = parseFloat($("#finalGrade").val()) / 100;
    var intexGrade = parseFloat($("#intexGrade").val()) / 100;

    //Here I calculate total grade
    var totalGrade = (assignmentsWeight * assignmentsGrade +
        projectWeight * projectGrade +
        quizzesWeight * quizzesGrade +
        midtermWeight * midtermGrade +
        finalWeight * finalGrade +
        intexWeight * intexGrade).toFixed(2);
    totalGrade = parseFloat(totalGrade);

    //Here I use if statements to determine the letter grade

    var letterGrade = "";
    if (totalGrade >= 0.94) {
        letterGrade = "A";
    } else if (totalGrade >= 0.9) {
        letterGrade = "A-";
    } else if (totalGrade >= 0.87) {
        letterGrade = "B+";
    } else if (totalGrade >= 0.84) {
        letterGrade = "B";
    } else if (totalGrade >= 0.8) {
        letterGrade = "B-";
    } else if (totalGrade >= 0.77) {
        letterGrade = "C+";
    } else if (totalGrade >= 0.74) {
        letterGrade = "C";
    } else if (totalGrade >= 0.7) {
        letterGrade = "C-";
    } else if (totalGrade >= 0.67) {
        letterGrade = "D+";
    } else if (totalGrade >= 0.64) {
        letterGrade = "D";
    } else if (totalGrade >= 0.6) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }
    
    //Here I convert it to a string for the display on my webpage
    $("#FinalPercentage").text((totalGrade * 100).toString() + "%");
    $("#LetterGrade").text(letterGrade);
});
