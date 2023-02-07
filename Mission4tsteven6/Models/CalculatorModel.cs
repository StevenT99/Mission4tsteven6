using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4tsteven6.Models
{
    public class CalculatorModel 
    {
        [Range(0, 100, ErrorMessage = "Assignment score must be between 0 and 100.")]
        public float Assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Group Project score must be between 0 and 100.")]
        public float GroupProject { get; set; }
        [Range(0, 100, ErrorMessage = "Quizzes score must be between 0 and 100.")]
        public float Quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Midterm Exam score must be between 0 and 100.")]
        public float MidtermExam { get; set; }
        [Range(0, 100, ErrorMessage = "Final Exam score must be between 0 and 100.")]
        public float FinalExam { get; set; }
        [Range(0, 100, ErrorMessage = "Intex score must be between 0 and 100.")]
        public float INTEX { get; set; }
        public float FinalPercentage { get; set; }
        public float LetterGrade { get; set; }

    }   

}
