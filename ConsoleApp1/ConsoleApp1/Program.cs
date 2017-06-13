using System;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp1 {
  class Program {
    static void ImprimirUnos() {
      for (int i = 0; i < 1000; i++) {
        Console.Write("1");
        Thread.Sleep(10);
      }
    }

    static void ImprimirCeros() {
      for (int i = 0; i < 1000; i++) {
        Console.Write("0");
        Thread.Sleep(10);
      }
    }

    static void Main(string[] args) {
      Thread uno = new Thread(new ThreadStart(ImprimirUnos));
      Thread dos = new Thread(new ThreadStart(ImprimirCeros));

      Console.Write("Numero binario: ");

      uno.Start();
      dos.Start();
    }
  }
}
