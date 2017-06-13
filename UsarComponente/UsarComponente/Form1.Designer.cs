namespace UsarComponente {
  partial class Form1 {
    /// <summary>
    /// Variable del diseñador necesaria.
    /// </summary>
    private System.ComponentModel.IContainer components = null;

    /// <summary>
    /// Limpiar los recursos que se estén usando.
    /// </summary>
    /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
    protected override void Dispose(bool disposing) {
      if (disposing && (components != null)) {
        components.Dispose();
      }
      base.Dispose(disposing);
    }

    #region Código generado por el Diseñador de Windows Forms

    /// <summary>
    /// Método necesario para admitir el Diseñador. No se puede modificar
    /// el contenido de este método con el editor de código.
    /// </summary>
    private void InitializeComponent() {
      this.cf_btn = new System.Windows.Forms.Button();
      this.freq = new System.Windows.Forms.TextBox();
      this.piano = new Teclas.UserControl1();
      this.SuspendLayout();
      // 
      // cf_btn
      // 
      this.cf_btn.Location = new System.Drawing.Point(73, 10);
      this.cf_btn.Name = "cf_btn";
      this.cf_btn.Size = new System.Drawing.Size(151, 23);
      this.cf_btn.TabIndex = 0;
      this.cf_btn.Text = "Change Frequency";
      this.cf_btn.UseVisualStyleBackColor = true;
      // 
      // freq
      // 
      this.freq.Location = new System.Drawing.Point(13, 12);
      this.freq.Name = "freq";
      this.freq.Size = new System.Drawing.Size(54, 20);
      this.freq.TabIndex = 1;
      // 
      // piano
      // 
      this.piano.Location = new System.Drawing.Point(28, 39);
      this.piano.Name = "piano";
      this.piano.Size = new System.Drawing.Size(182, 100);
      this.piano.TabIndex = 2;
      // 
      // Form1
      // 
      this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
      this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
      this.ClientSize = new System.Drawing.Size(240, 143);
      this.Controls.Add(this.piano);
      this.Controls.Add(this.freq);
      this.Controls.Add(this.cf_btn);
      this.Name = "Form1";
      this.Text = "Form1";
      this.ResumeLayout(false);
      this.PerformLayout();

    }

    #endregion

    private System.Windows.Forms.Button cf_btn;
    private System.Windows.Forms.TextBox freq;
    private Teclas.UserControl1 piano;
  }
}

