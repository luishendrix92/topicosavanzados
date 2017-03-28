using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System;

/* Compile on Linux:
 * ============================================
 * mcs -t:library -out:CalcParse.dll *.cs
 *********************************************/

namespace CalcParse {
  public static class Parser {
    public static double Eval(string toBeParsed) {
      List<Token> rpm = ToRPM(Tokenizer.Tokenize(toBeParsed));
      
      return SolveRPM(rpm);
    }
    
    /*
     * Postfix Algorithm
     * ==============================================================
     * Reverse Polish notation (RPN) is a mathematical notation in
     * which every  operator follows all of its operands, in contrast
     * to Polish notation (PN), which puts the operator before its
     * operands. It is also known as postfix notation. It does not
     * need any parentheses as long as each operator has a fixed
     * number of operands.
     ***************************************************************/
    public static double SolveRPM(List<Token> rpm) {
      Stack<double> valStack = new Stack<double>();
      double left, right;
      
      foreach (Token token in rpm) {
        if (token.Type == "VAL") {
          valStack.Push(token.Value);
        } else if (Token.IsOperator(token)) {
          right = valStack.Pop();
          left  = valStack.Pop();
          
          if (token.Type == "PLUS") {
            valStack.Push(left + right);
          } else if (token.Type == "MINUS") {
            valStack.Push(left - right);
          } else if (token.Type == "MULT") {
            valStack.Push(left * right);
          } else if (token.Type == "DIV") {
            valStack.Push(left / right);
          } else if (token.Type == "EXP") {
            valStack.Push(Math.Pow(left, right));
          }
        }
      }
      
      return valStack.Pop();
    }
    
    /*
     * Shunting-Yard Algorithm ::
     * by Edsger Dijkstra - Mathematisch Centrum report MR 34/61.
     * ==========================================================
     * Method for parsing mathematical expressions specified in
     * infix notation. It can be used to produce either a
     * postfix notation string, also known as Reverse Polish
     * notation (RPN), or an abstract syntax tree (AST).
     * ----------------------------------------------------------
     * Ported to C# by López Garay Luis Felipe in 2016
     * https://codetuts.tech | Instituto Tecnológico de Tijuana
     ***********************************************************/
    public static List<Token> ToRPM(List<Token> tokens) {
      Stack<Token> opStack  = new Stack<Token>();
      Queue<Token> outQueue = new Queue<Token>();
      
      foreach (Token token in tokens) {
        if (Token.IsOperator(token)) {
          HandleOperator(token, opStack, outQueue);
        } else if (token.Type == "VAL") {
          outQueue.Enqueue(token);
        } else if (token.Type == "RPAR") {
          HandleRPar(token, opStack, outQueue);
        } else if (token.Type == "LPAR") {
          opStack.Push(token);
        }
      }
      
      return outQueue
        .ToList()
        .Concat(opStack.ToList())
        .ToList();
    }
    
    private static void HandleOperator
    (Token o1, Stack<Token> oS, Queue<Token> oQ) {
      if (oS.Count != 0) {
        Token o2 = oS.Peek();
  
        while (Token.IsOperator(o2) &&
                ((o1.Assoc == "left"  && o1.Prec <= o2.Prec) ||
                 (o1.Assoc == "right" && o1.Prec <  o2.Prec))) {
          oQ.Enqueue(oS.Pop());
          if (oS.Count == 0)  break;
          o2 = oS.Peek();
        }
      }

      oS.Push(o1);
    }
    
    private static void HandleRPar
    (Token par, Stack<Token> oS, Queue<Token> oQ) {
      while (oS.Peek().Type != "LPAR") {
        oQ.Enqueue(oS.Pop());
      }
      
      oS.Pop(); // Get rid of the LPAR
    }
  }
}