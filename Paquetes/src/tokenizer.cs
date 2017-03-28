using System.Text.RegularExpressions;
using System.Collections.Generic;

namespace CalcParse {
  public static class Tokenizer {
    private const string tokenPattern = @"(?:-?\d+(?:\.\d+)?|[+\-*^\/()]|pi|e)";
    
    public static List<Token> Tokenize(string text) {
      Regex tokenPatternReg = new Regex(tokenPattern);
      List<Token> tokens = new List<Token>();
      
      foreach (Match match in tokenPatternReg.Matches(text)) {
        tokens.Add(new Token(match.Value));
      }
      
      return tokens;
    }
  }
}