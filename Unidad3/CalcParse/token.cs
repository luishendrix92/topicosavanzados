using System.Collections.Generic;
using System;

namespace CalcParse {
  public class Token {
    public string Type, Assoc;
    public double Value;
    public int Prec;
    
    private Dictionary<string, string[]> opTable =
      new Dictionary<string, string[]>() {
      {"+", new string[3] {"PLUS",  "2", "left" }},
      {"-", new string[3] {"MINUS", "2", "left" }},
      {"/", new string[3] {"DIV",   "3", "left" }},
      {"*", new string[3] {"MULT",  "3", "left" }},
      {"^", new string[3] {"EXP",   "4", "right"}}
    };
    
    public Token(string token) {
      if (opTable.ContainsKey(token)) {
        this.Type  = opTable[token][0];
        this.Prec  = Int32.Parse(opTable[token][1]);
        this.Assoc = opTable[token][2];
      } else if (token == "pi") {
        this.Type = "VAL";
        this.Value = Math.PI;
      } else if (token == "e") {
        this.Type = "VAL";
        this.Value = Math.E;
      } else if (token == "(") {
        this.Type = "LPAR";
      } else if (token == ")") {
        this.Type = "RPAR";
      } else {
        this.Type = "VAL";
        this.Value = Double.Parse(token);
      }
    }
    
    public static bool IsOperator(Token token) {
      return token.Type == "MULT"
        ||   token.Type == "DIV"
        ||   token.Type == "PLUS"
        ||   token.Type == "EXP"
        ||   token.Type == "MINUS";
    }
  }
}