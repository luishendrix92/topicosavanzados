using System;
using System.Timers;

public static class Helpers {
  public static Timer timeout;
  public delegate void Callback();
  
  public static void SetTimeout(int lapse, Callback action, int times = 1) {
    timeout = new Timer();
    
    timeout.Enabled  = true;
    timeout.Interval = lapse;
    timeout.Elapsed += (_source, _e) => {
      action();
      times--;
      
      if (times == 0) timeout.Stop();
    };
    
    timeout.Start();
  }
}

class Program {
  public static void Main (string[] args) {
    Console.WriteLine("Hola desde main");
    
    Helpers.SetTimeout(100, () => {
      Console.WriteLine("Hola desde el timeout");
    }, 4);
    
    System.Threading.Thread.Sleep(5000);
  }
}