using System;

namespace Calculeitor {
  public static class Helpers {
    public static string DropLast(string text) {
      int len = text.Length;

      return len > 0
        ? text.Remove(len - 1)
        : text;
    }

    public static bool IsBasicOperator(string token) {
      return token == "+"
        ||   token == "-"
        ||   token == "/"
        ||   token == "*";
    }

    public static bool IsAnyOperator(string token) {
      return IsBasicOperator(token)
        || token == "^"
        || token == "("
        || token == ")";
    }
  }
}