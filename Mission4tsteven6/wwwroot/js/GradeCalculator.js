$(document).ready(function () {
    $("#calculateGrade").click(function () {
        var assignmentsWeight = 0.5;
        var projectWeight = 0.1;
        var quizzesWeight = 0.1;
        var midtermWeight = 0.1;
        var finalWeight = 0.1;
        var intexWeight = 0.1;

        var assignmentsGrade = parseFloat($("#assignmentsGrade").val()) / 100;
        var projectGrade = parseFloat($("#projectGrade").val()) / 100;
        var quizzesGrade = parseFloat($("#quizzesGrade").val()) / 100;
        var midtermGrade = parseFloat($("#midtermGrade").val()) / 100;
        var finalGrade = parseFloat($("#finalGrade").val()) / 100;
        var intexGrade = parseFloat($("#intexGrade").val()) / 100;

        console.log("Assignments grade:", assignmentsGrade);
        console.log("Project grade:", projectGrade);
        console.log("Quizzes grade:", quizzesGrade);
        console.log("Midterm grade:", midtermGrade);
        console.log("Final grade:", finalGrade);
        console.log("Intex grade:", intexGrade);

        var totalGrade = assignmentsWeight * assignmentsGrade +
            projectWeight * projectGrade +
            quizzesWeight * quizzesGrade +
            midtermWeight * midtermGrade +
            finalWeight * finalGrade +
            intexWeight * intexGrade;

        console.log("Total grade:", totalGrade);

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
        console.log("Letter grade:", letterGrade);

        $("#finalPercentage").text((totalGrade * 100).toString() + "%");
        $("#letterGrade").text(letterGrade);
    });
});