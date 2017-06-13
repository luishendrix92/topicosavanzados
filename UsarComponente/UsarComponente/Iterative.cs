using System;
using System.Collections.Generic;

namespace FuncUtils {
  public static class Iterative {
    public static List<T> Map<T>(List<T> list, Func<T, int, T> transform) {
      List<T> mapped = new List<T>();
      int length = list.Count;

      for (int i = 0; i < length; i++) {
        mapped.Add(transform(list[i], i));
      }

      return mapped;
    }

    public static List<T> Filter<T>(List<T> list, Predicate<T> predicate) {
      List<T> filtered = new List<T>();
      int length = list.Count;

      foreach (T item in list) {
        if (predicate(item)) filtered.Add(item);
      }

      return filtered;
    }

    public static R Reduce<T, R>(List<T> list, Func<R, T, R> reducer, R initial) {
      R acc = initial;

      foreach (T item in list) {
        acc = reducer(acc, item);
      }

      return acc;
    }
  }
}
