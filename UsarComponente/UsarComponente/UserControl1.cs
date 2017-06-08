using System;
using static System.Console;
using System.Windows.Forms;

namespace Teclas {
  public partial class UserControl1: UserControl {
    private double Factor = 1;

    public UserControl1() {
      InitializeComponent();

      do_btn.Click  += (s, e) => Beep((int)(523 * Factor), 300);
      re_btn.Click  += (s, e) => Beep((int)(587 * Factor), 300);
      mi_btn.Click  += (s, e) => Beep((int)(659 * Factor), 300);
      fa_btn.Click  += (s, e) => Beep((int)(698 * Factor), 300);
      sol_btn.Click += (s, e) => Beep((int)(783 * Factor), 300);
      la_btn.Click  += (s, e) => Beep((int)(880 * Factor), 300);
      si_btn.Click  += (s, e) => Beep((int)(987 * Factor), 300);
    }

    public void ChangeFreqFactor(double factor) {
      this.Factor = factor;
      freqlabel.Text = $"Frequency Factor: {factor}";
    }
  }
}
