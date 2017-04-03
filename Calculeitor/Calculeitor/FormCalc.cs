using System.Windows.Forms;
using static Calculeitor.Helpers;
using CalcParse;
using System;

namespace Calculeitor {
  public partial class FormCalc : Form {
    public FormCalc() {
      InitializeComponent();

      btn_one.Click   += AddToken("1");
      btn_two.Click   += AddToken("2");
      btn_three.Click += AddToken("3");
      btn_four.Click  += AddToken("4");
      btn_five.Click  += AddToken("5");
      btn_six.Click   += AddToken("6");
      btn_seven.Click += AddToken("7");
      btn_eight.Click += AddToken("8");
      btn_nine.Click  += AddToken("9");
      btn_zero.Click  += AddToken("0");

      btn_plus.Click   += AddToken("+");
      btn_minus.Click  += AddToken("-");
      btn_times.Click  += AddToken("*");
      btn_divide.Click += AddToken("/");
      btn_exp.Click    += AddToken("^");
      btn_lpar.Click   += AddToken("(");
      btn_rpar.Click   += AddToken(")");
      btn_pi.Click     += AddToken("pi");
      btn_euler.Click  += AddToken("e");
      btn_period.Click += AddToken(".");

      btn_sign.Click += (s, e) =>
        txb_op_str.Text += "-";
      btn_del.Click += (s, e) => {
        txb_op_str.Text = DropLast(txb_op_str.Text);
        ComputeResult();
      };
      btn_equals.Click += (s, e) => {
        ComputeResult();
        txb_op_str.Text = txb_result.Text;
        txb_result.Text = "0";
      };
      btn_ac.Click += (s, e) => {
        txb_op_str.Text = "";
        txb_result.Text = "0";
      };
    }

    private EventHandler AddToken(string token) {
      string _token = IsBasicOperator(token)
        ? $" {token} " : token;
  
      return (sender, evt) => {
        txb_op_str.Text = (txb_op_str.Text + _token).TrimStart(' ');
        if (!IsAnyOperator(token)) ComputeResult();
      };
    }

    private void ComputeResult() {
      try {
        txb_result.Text = Parser
          .Eval(txb_op_str.Text.Trim())
          .ToString();
      } catch (Exception e) {
        if (txb_op_str.Text.Length == 0) txb_result.Text = "0";
        Console.WriteLine("Invalid Math Expression: " + e);
      }
    }
  }
}