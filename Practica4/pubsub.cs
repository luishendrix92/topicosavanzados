using System.Collections.Generic;
using System.Windows.Forms;
using System.Drawing;

public static class PubSub {
  public delegate void Action();
  private static Dictionary<string, List<Action>> events =
    new Dictionary<string, List<Action>>();
  
  // Receive and action and push it to a list in the topic
  public static void Subscribe(string eventName, Action action) {
    if (!events.ContainsKey(eventName))
      events.Add(eventName, new List<Action>());
    
    events[eventName].Add(action);
  }
  
  // Notify about something to whomever is subscribed to the event
  public static void Emit(string eventName) {
    if (events.ContainsKey(eventName))
      foreach (Action action in events[eventName])
        action();
  }
}