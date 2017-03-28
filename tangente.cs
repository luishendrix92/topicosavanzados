using System.Collections.Generic;
using System.Collections;
using System;

public static class NewtonRaphson {
  /*
   * f (x) =  e^(-x) - x
   * f'(x) = -e^(-x) - 1
   
   *  ._____________________________________.
   * | Iteración | xi | f(xi) | f'(xi) | Ea |
   * '----------'----'-------'--------'----'
   
   * Gráfica: wolframalpha.com/input/?i=f(x)+%3D+e%5E(-x)+-+x
   */
  static double f(double x) {
    return Math.Pow(Math.E, x * -1) - x;
  }
  
  static double fPrima(double x) {
    return (Math.Pow(Math.E, x * -1) * -1) - 1;
  }
  
  static void Main(string[] args) {
    List<List<double>> tabla = new List<List<double>>();
    double tolerancia = 0;
    double i    = 0;
    double xi   = 0;
    double fxi  = f(xi);
    double fxpi = fPrima(xi);
    double err  = 100;
      
    // Añadir la primera fila de la tabla a la lista
    tabla.Add(new List<double>(){i, xi, fxi, fxpi, err});
    
    // Ciclo iterativo de las demás filas
    while (err >= tolerancia) {      
      xi   = xi - (fxi / fxpi);
      fxi  = f(xi);
      fxpi = fPrima(xi);
      
      double xiSiguiente = xi - (fxi / fxpi);
      
      err  = ((xiSiguiente - xi) / xi) * 100;
      i += 1;
      
      // Añadir la fila actual a la tabla
      tabla.Add(new List<double>(){i, xi, fxi, fxpi, err});
    }
    
    // [Sólo para pruebas] Desplegar las otras filas
    for (int j = 0; j < tabla.Count; j += 1) {
      Console.WriteLine(
        "{0} | {1} | {2} | {3} | {4}",
        tabla[j][0], tabla[j][1], tabla[j][2],
        tabla[j][3], tabla[j][4] == 100? "N/A" : tabla[j][4].ToString()
      );
    }
  }
}