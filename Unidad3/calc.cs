using CalcParse;
using System;

/* Compile on Linux:
 * ============================================================
 * mcs -out:calc.exe -r:CalcParse.dll calc.cs
 *************************************************************/

class Program {
  static void Main() {
    string testExpr = "3 ^ 2 ^ 2 - 1"; // Res: 80
    double result = Parser.Eval(testExpr);
    
    Console.WriteLine("{0} = {1}", testExpr, result);
  }
}