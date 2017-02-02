using System;
using System.Collections.Generic;

public static class PubSub {
  public delegate void Callback(string data);
  private static Dictionary<string, List<Callback>> events =
    new Dictionary<string, List<Callback>>();
  
  public static void Subscribe(string eventName, Callback action) {
    if (!events.ContainsKey(eventName))
      events.Add(eventName, new List<Callback>());
    
    events[eventName].Add(action);
  }
  
  public static void Emit(string eventName, string data) {
    if (events.ContainsKey(eventName))
      foreach (Callback subscriber in events[eventName])
        subscriber(data);
  }
}