import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],

})
export class HomePage {  
public gasolina: number | undefined;
public alcool: number | undefined;
public media: number | undefined;
public situacao: string = "";
constructor((private alertController: AlertControlle){}
calcularMedia() {
if (this.gasolina && this.alcool) {
this.media = (this.alcool / this.gasolina);
this.situacao = this.media <= 0.7 ? 'Use alcool' : 'Use Gasolina';
      } else {
        this.exibirAlerta();
        }
        }
        async exibirAlerta() {
        const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Por favor, digite as duas notas antes de calcular a média',
        buttons: ['OK']
        });
        await alert.present();
        }
        }



