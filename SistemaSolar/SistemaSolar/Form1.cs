using System.Windows.Forms;
using System.Threading;
using System;

namespace SistemaSolar {
  public partial class Form1 : Form {
    public int FPS = 17; // 17 milliseconds -> 60 FPS

    public Form1() {
      InitializeComponent();

      Thread mercury = new Thread(new ThreadStart(StartOrbiting("mercury.png")));
      Thread venus = new Thread(new ThreadStart(StartOrbiting("venus.png")));
      Thread earth = new Thread(new ThreadStart(StartOrbiting("earth.png")));
      Thread mars = new Thread(new ThreadStart(StartOrbiting("mars.png")));

      mercury.Start(); venus.Start(); earth.Start(); mars.Start();
      mercury.Join();  venus.Join();  earth.Join();  mars.Join();
    }

    public Action StartOrbiting(string filename) {
      //float speed = 1;
      int ticks = 0;
      Action orbitate = null;

      orbitate = () => {
        if (ticks <= 10) {
          MessageBox.Show(filename + "!");
          ticks++;
          Thread.Sleep(this.FPS);
          orbitate();
        }
      };

      return orbitate;
    }
  }
}
