using System;
using static FuncUtils.Iterative;
using System.Windows.Forms;
using System.Collections.Generic;

namespace UsarComponente {
  public partial class Form1 : Form {
    public Form1() {
      InitializeComponent();

      cf_btn.Click += (s, e) => piano.ChangeFreqFactor(
        Double.Parse(freq.Text)
      );

      List<int> frequencies = new List<int>() {5, 10, 500, 254, 123, 66, 9};
      int avgFreq = Reduce(frequencies, (a, b) => a + b, 0) / frequencies.Count;
      List<int> freqPairs = Filter(frequencies, (n) => n % 2 == 0);
      List<int> freqTimesTwo = Map(frequencies, (n, idx) => n * idx);

      Console.WriteLine($"El promedio de frecuencias es {avgFreq}");
      Console.WriteLine("Las frecuencias pares son:");
      foreach (int freq in freqPairs) {
        Console.WriteLine($"{freq}Hz");
      }
      Console.WriteLine("Las frecuencias por su índice son:");
      foreach (int freq in freqTimesTwo) {
        Console.WriteLine($"{freq}Hz");
      }
    }
  }
}
