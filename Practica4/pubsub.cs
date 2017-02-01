using System.Collections.Generic;
using System.Windows.Forms;
using System.Drawing;
using System;

public static class PubSub {
  public delegate void Callback(Actor actor, Form area);
  private static Dictionary<string, List<Callback>> events =
    new Dictionary<string, List<Callback>>();
  
  public static void Subscribe(string eventName, Callback action) {
    if (!events.ContainsKey(eventName))
      events.Add(eventName, new List<Callback>());
    
    events[eventName].Add(action);
  }
  
  public static void Emit(string eventName, Actor actor, Form area) {
    if (events.ContainsKey(eventName))
      foreach (Callback subscriber in events[eventName])
        subscriber(actor, area);
  }
}